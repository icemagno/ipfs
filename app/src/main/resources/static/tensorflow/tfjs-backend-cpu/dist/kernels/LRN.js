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
import { LRN, util } from '@tensorflow/tfjs-core';
import { assertNotComplex } from '../cpu_util';
export function lRN(args) {
    const { inputs, backend, attrs } = args;
    const { x } = inputs;
    const { depthRadius, bias, alpha, beta } = attrs;
    assertNotComplex(x, 'LRN');
    const channels = x.shape[3];
    const maxD = channels - 1;
    const xValues = backend.data.get(x.dataId).values;
    const size = util.sizeFromShape(x.shape);
    const result = new Float32Array(size);
    function sumAcrossChannels(offset) {
        const currentChannel = offset % channels;
        let beginSumOffset = offset - currentChannel + Math.max(0, currentChannel - depthRadius);
        const endSumOffset = offset - currentChannel + Math.min(currentChannel + depthRadius, maxD);
        let sum = 0.0;
        for (; beginSumOffset <= endSumOffset; beginSumOffset++) {
            const z = xValues[beginSumOffset];
            sum += z * z;
        }
        return sum;
    }
    for (let offset = 0; offset < size; offset++) {
        const sum = sumAcrossChannels(offset);
        const val = xValues[offset] * Math.pow(bias + alpha * sum, -beta);
        result[offset] = val;
    }
    return backend.makeTensorInfo(x.shape, x.dtype, result);
}
// tslint:disable-next-line: variable-name
export const LRNConfig = {
    kernelName: LRN,
    backendName: 'cpu',
    kernelFunc: lRN
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTFJOLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vdGZqcy1iYWNrZW5kLWNwdS9zcmMva2VybmVscy9MUk4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7OztHQWVHO0FBRUgsT0FBTyxFQUEyQixHQUFHLEVBQStDLElBQUksRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBR3ZILE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUU3QyxNQUFNLFVBQVUsR0FBRyxDQUNmLElBQW1FO0lBRXJFLE1BQU0sRUFBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBQyxHQUFHLElBQUksQ0FBQztJQUN0QyxNQUFNLEVBQUMsQ0FBQyxFQUFDLEdBQUcsTUFBTSxDQUFDO0lBQ25CLE1BQU0sRUFBQyxXQUFXLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUMsR0FBRyxLQUFLLENBQUM7SUFFL0MsZ0JBQWdCLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBRTNCLE1BQU0sUUFBUSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUIsTUFBTSxJQUFJLEdBQUcsUUFBUSxHQUFHLENBQUMsQ0FBQztJQUMxQixNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBb0IsQ0FBQztJQUNoRSxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QyxNQUFNLE1BQU0sR0FBRyxJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUV0QyxTQUFTLGlCQUFpQixDQUFDLE1BQWM7UUFDdkMsTUFBTSxjQUFjLEdBQUcsTUFBTSxHQUFHLFFBQVEsQ0FBQztRQUN6QyxJQUFJLGNBQWMsR0FDZCxNQUFNLEdBQUcsY0FBYyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLGNBQWMsR0FBRyxXQUFXLENBQUMsQ0FBQztRQUN4RSxNQUFNLFlBQVksR0FDZCxNQUFNLEdBQUcsY0FBYyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxHQUFHLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUUzRSxJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZCxPQUFPLGNBQWMsSUFBSSxZQUFZLEVBQUUsY0FBYyxFQUFFLEVBQUU7WUFDdkQsTUFBTSxDQUFDLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ2xDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2Q7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFFRCxLQUFLLElBQUksTUFBTSxHQUFHLENBQUMsRUFBRSxNQUFNLEdBQUcsSUFBSSxFQUFFLE1BQU0sRUFBRSxFQUFFO1FBQzVDLE1BQU0sR0FBRyxHQUFHLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RDLE1BQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxLQUFLLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQztLQUN0QjtJQUVELE9BQU8sT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDMUQsQ0FBQztBQUVELDBDQUEwQztBQUMxQyxNQUFNLENBQUMsTUFBTSxTQUFTLEdBQWlCO0lBQ3JDLFVBQVUsRUFBRSxHQUFHO0lBQ2YsV0FBVyxFQUFFLEtBQUs7SUFDbEIsVUFBVSxFQUFFLEdBQTRCO0NBQ3pDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyMCBHb29nbGUgTExDLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cbmltcG9ydCB7S2VybmVsQ29uZmlnLCBLZXJuZWxGdW5jLCBMUk4sIExSTkF0dHJzLCBMUk5JbnB1dHMsIFRlbnNvckluZm8sIFR5cGVkQXJyYXksIHV0aWx9IGZyb20gJ0B0ZW5zb3JmbG93L3RmanMtY29yZSc7XG5cbmltcG9ydCB7TWF0aEJhY2tlbmRDUFV9IGZyb20gJy4uL2JhY2tlbmRfY3B1JztcbmltcG9ydCB7YXNzZXJ0Tm90Q29tcGxleH0gZnJvbSAnLi4vY3B1X3V0aWwnO1xuXG5leHBvcnQgZnVuY3Rpb24gbFJOKFxuICAgIGFyZ3M6IHtpbnB1dHM6IExSTklucHV0cywgYmFja2VuZDogTWF0aEJhY2tlbmRDUFUsIGF0dHJzOiBMUk5BdHRyc30pOlxuICAgIFRlbnNvckluZm8ge1xuICBjb25zdCB7aW5wdXRzLCBiYWNrZW5kLCBhdHRyc30gPSBhcmdzO1xuICBjb25zdCB7eH0gPSBpbnB1dHM7XG4gIGNvbnN0IHtkZXB0aFJhZGl1cywgYmlhcywgYWxwaGEsIGJldGF9ID0gYXR0cnM7XG5cbiAgYXNzZXJ0Tm90Q29tcGxleCh4LCAnTFJOJyk7XG5cbiAgY29uc3QgY2hhbm5lbHMgPSB4LnNoYXBlWzNdO1xuICBjb25zdCBtYXhEID0gY2hhbm5lbHMgLSAxO1xuICBjb25zdCB4VmFsdWVzID0gYmFja2VuZC5kYXRhLmdldCh4LmRhdGFJZCkudmFsdWVzIGFzIFR5cGVkQXJyYXk7XG4gIGNvbnN0IHNpemUgPSB1dGlsLnNpemVGcm9tU2hhcGUoeC5zaGFwZSk7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBGbG9hdDMyQXJyYXkoc2l6ZSk7XG5cbiAgZnVuY3Rpb24gc3VtQWNyb3NzQ2hhbm5lbHMob2Zmc2V0OiBudW1iZXIpIHtcbiAgICBjb25zdCBjdXJyZW50Q2hhbm5lbCA9IG9mZnNldCAlIGNoYW5uZWxzO1xuICAgIGxldCBiZWdpblN1bU9mZnNldCA9XG4gICAgICAgIG9mZnNldCAtIGN1cnJlbnRDaGFubmVsICsgTWF0aC5tYXgoMCwgY3VycmVudENoYW5uZWwgLSBkZXB0aFJhZGl1cyk7XG4gICAgY29uc3QgZW5kU3VtT2Zmc2V0ID1cbiAgICAgICAgb2Zmc2V0IC0gY3VycmVudENoYW5uZWwgKyBNYXRoLm1pbihjdXJyZW50Q2hhbm5lbCArIGRlcHRoUmFkaXVzLCBtYXhEKTtcblxuICAgIGxldCBzdW0gPSAwLjA7XG4gICAgZm9yICg7IGJlZ2luU3VtT2Zmc2V0IDw9IGVuZFN1bU9mZnNldDsgYmVnaW5TdW1PZmZzZXQrKykge1xuICAgICAgY29uc3QgeiA9IHhWYWx1ZXNbYmVnaW5TdW1PZmZzZXRdO1xuICAgICAgc3VtICs9IHogKiB6O1xuICAgIH1cbiAgICByZXR1cm4gc3VtO1xuICB9XG5cbiAgZm9yIChsZXQgb2Zmc2V0ID0gMDsgb2Zmc2V0IDwgc2l6ZTsgb2Zmc2V0KyspIHtcbiAgICBjb25zdCBzdW0gPSBzdW1BY3Jvc3NDaGFubmVscyhvZmZzZXQpO1xuICAgIGNvbnN0IHZhbCA9IHhWYWx1ZXNbb2Zmc2V0XSAqIE1hdGgucG93KGJpYXMgKyBhbHBoYSAqIHN1bSwgLWJldGEpO1xuICAgIHJlc3VsdFtvZmZzZXRdID0gdmFsO1xuICB9XG5cbiAgcmV0dXJuIGJhY2tlbmQubWFrZVRlbnNvckluZm8oeC5zaGFwZSwgeC5kdHlwZSwgcmVzdWx0KTtcbn1cblxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiB2YXJpYWJsZS1uYW1lXG5leHBvcnQgY29uc3QgTFJOQ29uZmlnOiBLZXJuZWxDb25maWcgPSB7XG4gIGtlcm5lbE5hbWU6IExSTixcbiAgYmFja2VuZE5hbWU6ICdjcHUnLFxuICBrZXJuZWxGdW5jOiBsUk4gYXMgdW5rbm93biBhcyBLZXJuZWxGdW5jXG59O1xuIl19