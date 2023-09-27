/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
import { buffer, CropAndResize, util } from '@tensorflow/tfjs-core';
export function cropAndResize(args) {
    const { inputs, backend, attrs } = args;
    const { image, boxes, boxInd } = inputs;
    const { cropSize, method, extrapolationValue } = attrs;
    const [batch, imageHeight, imageWidth, numChannels] = image.shape;
    const numBoxes = boxes.shape[0];
    const [cropHeight, cropWidth] = cropSize;
    const output = buffer([numBoxes, cropHeight, cropWidth, numChannels], 'float32');
    const boxVals = backend.data.get(boxes.dataId).values;
    const boxIndVals = backend.data.get(boxInd.dataId).values;
    const imageVals = backend.data.get(image.dataId).values;
    const inStride = util.computeStrides(image.shape); // to calculate flat indexes into image
    const outStride = util.computeStrides(output.shape); // to calculate flat indexes into output
    // Reference implementation
    // tslint:disable-next-line:max-line-length
    // https://github.com/tensorflow/tensorflow/blob/master/tensorflow/core/kernels/crop_and_resize_op.cc
    for (let b = 0; b < numBoxes; b++) {
        const startInd = b * 4;
        const y1 = boxVals[startInd];
        const x1 = boxVals[startInd + 1];
        const y2 = boxVals[startInd + 2];
        const x2 = boxVals[startInd + 3];
        const bInd = boxIndVals[b];
        if (bInd >= batch) {
            continue;
        }
        const heightScale = (cropHeight > 1) ? (y2 - y1) * (imageHeight - 1) / (cropHeight - 1) : 0;
        const widthScale = (cropWidth > 1) ? (x2 - x1) * (imageWidth - 1) / (cropWidth - 1) : 0;
        for (let y = 0; y < cropHeight; y++) {
            const yInd = (cropHeight > 1) ?
                y1 * (imageHeight - 1) + y * (heightScale) :
                0.5 * (y1 + y2) * (imageHeight - 1);
            if (yInd < 0 || yInd > imageHeight - 1) {
                for (let x = 0; x < cropWidth; x++) {
                    for (let c = 0; c < numChannels; c++) {
                        const ind = c + x * outStride[2] + y * outStride[1] + b * outStride[0];
                        output.values[ind] = extrapolationValue;
                    }
                }
                continue;
            }
            if (method === 'bilinear') {
                const topInd = Math.floor(yInd);
                const bottomInd = Math.ceil(yInd);
                const yLerp = yInd - topInd;
                for (let x = 0; x < cropWidth; x++) {
                    const xInd = (cropWidth > 1) ?
                        x1 * (imageWidth - 1) + x * widthScale :
                        0.5 * (x1 + x2) * (imageWidth - 1);
                    if (xInd < 0 || xInd > imageWidth - 1) {
                        for (let c = 0; c < numChannels; c++) {
                            const ind = c + x * outStride[2] + y * outStride[1] + b * outStride[0];
                            output.values[ind] = extrapolationValue;
                        }
                        continue;
                    }
                    const leftInd = Math.floor(xInd);
                    const rightInd = Math.ceil(xInd);
                    const xLerp = xInd - leftInd;
                    for (let c = 0; c < numChannels; c++) {
                        let ind = c + leftInd * inStride[2] + topInd * inStride[1] +
                            bInd * inStride[0];
                        const topLeft = imageVals[ind];
                        ind = c + rightInd * inStride[2] + topInd * inStride[1] +
                            bInd * inStride[0];
                        const topRight = imageVals[ind];
                        ind = c + leftInd * inStride[2] + bottomInd * inStride[1] +
                            bInd * inStride[0];
                        const bottomLeft = imageVals[ind];
                        ind = c + rightInd * inStride[2] + bottomInd * inStride[1] +
                            bInd * inStride[0];
                        const bottomRight = imageVals[ind];
                        const top = topLeft + (topRight - topLeft) * xLerp;
                        const bottom = bottomLeft + (bottomRight - bottomLeft) * xLerp;
                        ind = c + x * outStride[2] + y * outStride[1] + b * outStride[0];
                        output.values[ind] = top + ((bottom - top) * yLerp);
                    }
                }
            }
            else { // method == "nearest"
                for (let x = 0; x < cropWidth; ++x) {
                    const xInd = (cropWidth > 1) ?
                        x1 * (imageWidth - 1) + x * widthScale :
                        0.5 * (x1 + x2) * (imageWidth - 1);
                    if (xInd < 0 || xInd > imageWidth - 1) {
                        for (let c = 0; c < numChannels; c++) {
                            const ind = c + x * outStride[2] + y * outStride[1] + b * outStride[0];
                            output.values[ind] = extrapolationValue;
                        }
                        continue;
                    }
                    const closestX = Math.round(xInd);
                    const closestY = Math.round(yInd);
                    for (let c = 0; c < numChannels; c++) {
                        const inInd = c + closestX * inStride[2] + closestY * inStride[1] +
                            bInd * inStride[0];
                        const outInd = c + x * outStride[2] + y * outStride[1] + b * outStride[0];
                        output.values[outInd] = imageVals[inInd];
                    }
                }
            }
        }
    }
    return backend.makeTensorInfo(output.shape, output.dtype, output.values);
}
export const cropAndResizeConfig = {
    kernelName: CropAndResize,
    backendName: 'cpu',
    kernelFunc: cropAndResize
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3JvcEFuZFJlc2l6ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3RmanMtYmFja2VuZC1jcHUvc3JjL2tlcm5lbHMvQ3JvcEFuZFJlc2l6ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7O0dBZUc7QUFFSCxPQUFPLEVBQUMsTUFBTSxFQUFFLGFBQWEsRUFBNkYsSUFBSSxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFJN0osTUFBTSxVQUFVLGFBQWEsQ0FBQyxJQUk3QjtJQUNDLE1BQU0sRUFBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBQyxHQUFHLElBQUksQ0FBQztJQUN0QyxNQUFNLEVBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUMsR0FBRyxNQUFNLENBQUM7SUFDdEMsTUFBTSxFQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsa0JBQWtCLEVBQUMsR0FBRyxLQUFLLENBQUM7SUFFckQsTUFBTSxDQUFDLEtBQUssRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLFdBQVcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7SUFDbEUsTUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVoQyxNQUFNLENBQUMsVUFBVSxFQUFFLFNBQVMsQ0FBQyxHQUFHLFFBQVEsQ0FBQztJQUN6QyxNQUFNLE1BQU0sR0FDUixNQUFNLENBQUMsQ0FBQyxRQUFRLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxXQUFXLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUV0RSxNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBb0IsQ0FBQztJQUNwRSxNQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFD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dCAyMDIwIEdvb2dsZSBMTEMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuaW1wb3J0IHtidWZmZXIsIENyb3BBbmRSZXNpemUsIENyb3BBbmRSZXNpemVBdHRycywgQ3JvcEFuZFJlc2l6ZUlucHV0cywgS2VybmVsQ29uZmlnLCBLZXJuZWxGdW5jLCBUZW5zb3JJbmZvLCBUeXBlZEFycmF5LCB1dGlsfSBmcm9tICdAdGVuc29yZmxvdy90ZmpzLWNvcmUnO1xuXG5pbXBvcnQge01hdGhCYWNrZW5kQ1BVfSBmcm9tICcuLi9iYWNrZW5kX2NwdSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcm9wQW5kUmVzaXplKGFyZ3M6IHtcbiAgaW5wdXRzOiBDcm9wQW5kUmVzaXplSW5wdXRzLFxuICBiYWNrZW5kOiBNYXRoQmFja2VuZENQVSxcbiAgYXR0cnM6IENyb3BBbmRSZXNpemVBdHRyc1xufSk6IFRlbnNvckluZm8ge1xuICBjb25zdCB7aW5wdXRzLCBiYWNrZW5kLCBhdHRyc30gPSBhcmdzO1xuICBjb25zdCB7aW1hZ2UsIGJveGVzLCBib3hJbmR9ID0gaW5wdXRzO1xuICBjb25zdCB7Y3JvcFNpemUsIG1ldGhvZCwgZXh0cmFwb2xhdGlvblZhbHVlfSA9IGF0dHJzO1xuXG4gIGNvbnN0IFtiYXRjaCwgaW1hZ2VIZWlnaHQsIGltYWdlV2lkdGgsIG51bUNoYW5uZWxzXSA9IGltYWdlLnNoYXBlO1xuICBjb25zdCBudW1Cb3hlcyA9IGJveGVzLnNoYXBlWzBdO1xuXG4gIGNvbnN0IFtjcm9wSGVpZ2h0LCBjcm9wV2lkdGhdID0gY3JvcFNpemU7XG4gIGNvbnN0IG91dHB1dCA9XG4gICAgICBidWZmZXIoW251bUJveGVzLCBjcm9wSGVpZ2h0LCBjcm9wV2lkdGgsIG51bUNoYW5uZWxzXSwgJ2Zsb2F0MzInKTtcblxuICBjb25zdCBib3hWYWxzID0gYmFja2VuZC5kYXRhLmdldChib3hlcy5kYXRhSWQpLnZhbHVlcyBhcyBUeXBlZEFycmF5O1xuICBjb25zdCBib3hJbmRWYWxzID0gYmFja2VuZC5kYXRhLmdldChib3hJbmQuZGF0YUlkKS52YWx1ZXMgYXMgVHlwZWRBcnJheTtcbiAgY29uc3QgaW1hZ2VWYWxzID0gYmFja2VuZC5kYXRhLmdldChpbWFnZS5kYXRhSWQpLnZhbHVlcyBhcyBUeXBlZEFycmF5O1xuXG4gIGNvbnN0IGluU3RyaWRlID1cbiAgICAgIHV0aWwuY29tcHV0ZVN0cmlkZXMoaW1hZ2Uuc2hhcGUpOyAgLy8gdG8gY2FsY3VsYXRlIGZsYXQgaW5kZXhlcyBpbnRvIGltYWdlXG4gIGNvbnN0IG91dFN0cmlkZSA9IHV0aWwuY29tcHV0ZVN0cmlkZXMoXG4gICAgICBvdXRwdXQuc2hhcGUpOyAgLy8gdG8gY2FsY3VsYXRlIGZsYXQgaW5kZXhlcyBpbnRvIG91dHB1dFxuXG4gIC8vIFJlZmVyZW5jZSBpbXBsZW1lbnRhdGlvblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90ZW5zb3JmbG93L3RlbnNvcmZsb3cvYmxvYi9tYXN0ZXIvdGVuc29yZmxvdy9jb3JlL2tlcm5lbHMvY3JvcF9hbmRfcmVzaXplX29wLmNjXG4gIGZvciAobGV0IGIgPSAwOyBiIDwgbnVtQm94ZXM7IGIrKykge1xuICAgIGNvbnN0IHN0YXJ0SW5kID0gYiAqIDQ7XG4gICAgY29uc3QgeTEgPSBib3hWYWxzW3N0YXJ0SW5kXTtcbiAgICBjb25zdCB4MSA9IGJveFZhbHNbc3RhcnRJbmQgKyAxXTtcbiAgICBjb25zdCB5MiA9IGJveFZhbHNbc3RhcnRJbmQgKyAyXTtcbiAgICBjb25zdCB4MiA9IGJveFZhbHNbc3RhcnRJbmQgKyAzXTtcblxuICAgIGNvbnN0IGJJbmQ6IG51bWJlciA9IGJveEluZFZhbHNbYl07XG4gICAgaWYgKGJJbmQgPj0gYmF0Y2gpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGNvbnN0IGhlaWdodFNjYWxlID1cbiAgICAgICAgKGNyb3BIZWlnaHQgPiAxKSA/ICh5MiAtIHkxKSAqIChpbWFnZUhlaWdodCAtIDEpIC8gKGNyb3BIZWlnaHQgLSAxKSA6IDA7XG4gICAgY29uc3Qgd2lkdGhTY2FsZSA9XG4gICAgICAgIChjcm9wV2lkdGggPiAxKSA/ICh4MiAtIHgxKSAqIChpbWFnZVdpZHRoIC0gMSkgLyAoY3JvcFdpZHRoIC0gMSkgOiAwO1xuXG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCBjcm9wSGVpZ2h0OyB5KyspIHtcbiAgICAgIGNvbnN0IHlJbmQ6IG51bWJlciA9IChjcm9wSGVpZ2h0ID4gMSkgP1xuICAgICAgICAgIHkxICogKGltYWdlSGVpZ2h0IC0gMSkgKyB5ICogKGhlaWdodFNjYWxlKSA6XG4gICAgICAgICAgMC41ICogKHkxICsgeTIpICogKGltYWdlSGVpZ2h0IC0gMSk7XG5cbiAgICAgIGlmICh5SW5kIDwgMCB8fCB5SW5kID4gaW1hZ2VIZWlnaHQgLSAxKSB7XG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgY3JvcFdpZHRoOyB4KyspIHtcbiAgICAgICAgICBmb3IgKGxldCBjID0gMDsgYyA8IG51bUNoYW5uZWxzOyBjKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGluZCA9XG4gICAgICAgICAgICAgICAgYyArIHggKiBvdXRTdHJpZGVbMl0gKyB5ICogb3V0U3RyaWRlWzFdICsgYiAqIG91dFN0cmlkZVswXTtcbiAgICAgICAgICAgIG91dHB1dC52YWx1ZXNbaW5kXSA9IGV4dHJhcG9sYXRpb25WYWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZXRob2QgPT09ICdiaWxpbmVhcicpIHtcbiAgICAgICAgY29uc3QgdG9wSW5kID0gTWF0aC5mbG9vcih5SW5kKTtcbiAgICAgICAgY29uc3QgYm90dG9tSW5kID0gTWF0aC5jZWlsKHlJbmQpO1xuICAgICAgICBjb25zdCB5TGVycCA9IHlJbmQgLSB0b3BJbmQ7XG5cbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBjcm9wV2lkdGg7IHgrKykge1xuICAgICAgICAgIGNvbnN0IHhJbmQgPSAoY3JvcFdpZHRoID4gMSkgP1xuICAgICAgICAgICAgICB4MSAqIChpbWFnZVdpZHRoIC0gMSkgKyB4ICogd2lkdGhTY2FsZSA6XG4gICAgICAgICAgICAgIDAuNSAqICh4MSArIHgyKSAqIChpbWFnZVdpZHRoIC0gMSk7XG5cbiAgICAgICAgICBpZiAoeEluZCA8IDAgfHwgeEluZCA+IGltYWdlV2lkdGggLSAxKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBjID0gMDsgYyA8IG51bUNoYW5uZWxzOyBjKyspIHtcbiAgICAgICAgICAgICAgY29uc3QgaW5kID1cbiAgICAgICAgICAgICAgICAgIGMgKyB4ICogb3V0U3RyaWRlWzJdICsgeSAqIG91dFN0cmlkZVsxXSArIGIgKiBvdXRTdHJpZGVbMF07XG4gICAgICAgICAgICAgIG91dHB1dC52YWx1ZXNbaW5kXSA9IGV4dHJhcG9sYXRpb25WYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGxlZnRJbmQgPSBNYXRoLmZsb29yKHhJbmQpO1xuICAgICAgICAgIGNvbnN0IHJpZ2h0SW5kID0gTWF0aC5jZWlsKHhJbmQpO1xuICAgICAgICAgIGNvbnN0IHhMZXJwID0geEluZCAtIGxlZnRJbmQ7XG5cbiAgICAgICAgICBmb3IgKGxldCBjID0gMDsgYyA8IG51bUNoYW5uZWxzOyBjKyspIHtcbiAgICAgICAgICAgIGxldCBpbmQgPSBjICsgbGVmdEluZCAqIGluU3RyaWRlWzJdICsgdG9wSW5kICogaW5TdHJpZGVbMV0gK1xuICAgICAgICAgICAgICAgIGJJbmQgKiBpblN0cmlkZVswXTtcbiAgICAgICAgICAgIGNvbnN0IHRvcExlZnQgPSBpbWFnZVZhbHNbaW5kXTtcblxuICAgICAgICAgICAgaW5kID0gYyArIHJpZ2h0SW5kICogaW5TdHJpZGVbMl0gKyB0b3BJbmQgKiBpblN0cmlkZVsxXSArXG4gICAgICAgICAgICAgICAgYkluZCAqIGluU3RyaWRlWzBdO1xuICAgICAgICAgICAgY29uc3QgdG9wUmlnaHQgPSBpbWFnZVZhbHNbaW5kXTtcblxuICAgICAgICAgICAgaW5kID0gYyArIGxlZnRJbmQgKiBpblN0cmlkZVsyXSArIGJvdHRvbUluZCAqIGluU3RyaWRlWzFdICtcbiAgICAgICAgICAgICAgICBiSW5kICogaW5TdHJpZGVbMF07XG4gICAgICAgICAgICBjb25zdCBib3R0b21MZWZ0ID0gaW1hZ2VWYWxzW2luZF07XG5cbiAgICAgICAgICAgIGluZCA9IGMgKyByaWdodEluZCAqIGluU3RyaWRlWzJdICsgYm90dG9tSW5kICogaW5TdHJpZGVbMV0gK1xuICAgICAgICAgICAgICAgIGJJbmQgKiBpblN0cmlkZVswXTtcbiAgICAgICAgICAgIGNvbnN0IGJvdHRvbVJpZ2h0ID0gaW1hZ2VWYWxzW2luZF07XG5cbiAgICAgICAgICAgIGNvbnN0IHRvcCA9IHRvcExlZnQgKyAodG9wUmlnaHQgLSB0b3BMZWZ0KSAqIHhMZXJwO1xuICAgICAgICAgICAgY29uc3QgYm90dG9tID0gYm90dG9tTGVmdCArIChib3R0b21SaWdodCAtIGJvdHRvbUxlZnQpICogeExlcnA7XG5cbiAgICAgICAgICAgIGluZCA9IGMgKyB4ICogb3V0U3RyaWRlWzJdICsgeSAqIG91dFN0cmlkZVsxXSArIGIgKiBvdXRTdHJpZGVbMF07XG4gICAgICAgICAgICBvdXRwdXQudmFsdWVzW2luZF0gPSB0b3AgKyAoKGJvdHRvbSAtIHRvcCkgKiB5TGVycCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgeyAgLy8gbWV0aG9kID09IFwibmVhcmVzdFwiXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgY3JvcFdpZHRoOyArK3gpIHtcbiAgICAgICAgICBjb25zdCB4SW5kID0gKGNyb3BXaWR0aCA+IDEpID9cbiAgICAgICAgICAgICAgeDEgKiAoaW1hZ2VXaWR0aCAtIDEpICsgeCAqIHdpZHRoU2NhbGUgOlxuICAgICAgICAgICAgICAwLjUgKiAoeDEgKyB4MikgKiAoaW1hZ2VXaWR0aCAtIDEpO1xuXG4gICAgICAgICAgaWYgKHhJbmQgPCAwIHx8IHhJbmQgPiBpbWFnZVdpZHRoIC0gMSkge1xuICAgICAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCBudW1DaGFubmVsczsgYysrKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGluZCA9XG4gICAgICAgICAgICAgICAgICBjICsgeCAqIG91dFN0cmlkZVsyXSArIHkgKiBvdXRTdHJpZGVbMV0gKyBiICogb3V0U3RyaWRlWzBdO1xuICAgICAgICAgICAgICBvdXRwdXQudmFsdWVzW2luZF0gPSBleHRyYXBvbGF0aW9uVmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBjbG9zZXN0WCA9IE1hdGgucm91bmQoeEluZCk7XG4gICAgICAgICAgY29uc3QgY2xvc2VzdFkgPSBNYXRoLnJvdW5kKHlJbmQpO1xuICAgICAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgbnVtQ2hhbm5lbHM7IGMrKykge1xuICAgICAgICAgICAgY29uc3QgaW5JbmQgPSBjICsgY2xvc2VzdFggKiBpblN0cmlkZVsyXSArIGNsb3Nlc3RZICogaW5TdHJpZGVbMV0gK1xuICAgICAgICAgICAgICAgIGJJbmQgKiBpblN0cmlkZVswXTtcbiAgICAgICAgICAgIGNvbnN0IG91dEluZCA9XG4gICAgICAgICAgICAgICAgYyArIHggKiBvdXRTdHJpZGVbMl0gKyB5ICogb3V0U3RyaWRlWzFdICsgYiAqIG91dFN0cmlkZVswXTtcbiAgICAgICAgICAgIG91dHB1dC52YWx1ZXNbb3V0SW5kXSA9IGltYWdlVmFsc1tpbkluZF07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJhY2tlbmQubWFrZVRlbnNvckluZm8ob3V0cHV0LnNoYXBlLCBvdXRwdXQuZHR5cGUsIG91dHB1dC52YWx1ZXMpO1xufVxuXG5leHBvcnQgY29uc3QgY3JvcEFuZFJlc2l6ZUNvbmZpZzogS2VybmVsQ29uZmlnID0ge1xuICBrZXJuZWxOYW1lOiBDcm9wQW5kUmVzaXplLFxuICBiYWNrZW5kTmFtZTogJ2NwdScsXG4gIGtlcm5lbEZ1bmM6IGNyb3BBbmRSZXNpemUgYXMgdW5rbm93biBhcyBLZXJuZWxGdW5jXG59O1xuIl19