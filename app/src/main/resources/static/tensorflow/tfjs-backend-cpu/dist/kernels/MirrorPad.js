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
import { MirrorPad, util } from '@tensorflow/tfjs-core';
import { assertNotComplex } from '../cpu_util';
export function mirrorPad(args) {
    const { inputs, backend, attrs } = args;
    const { x } = inputs;
    const { paddings, mode } = attrs;
    assertNotComplex(x, 'mirrorPad');
    const outShape = paddings.map((p, i) => p[0] /* beforePad */ + x.shape[i] + p[1] /* afterPad */);
    const start = paddings.map(p => p[0]);
    const end = paddings.map((p, i) => p[0] + x.shape[i]);
    const offset = mode === 'reflect' ? 0 : 1;
    const xVals = backend.data.get(x.dataId).values;
    const xRank = x.shape.length;
    const xStrides = util.computeStrides(x.shape);
    const resultSize = util.sizeFromShape(outShape);
    const resultRank = outShape.length;
    const resultStrides = util.computeStrides(outShape);
    const resVals = util.getTypedArrayFromDType(x.dtype, resultSize);
    for (let i = 0; i < resultSize; i++) {
        let coords = util.indexToLoc(i, resultRank, resultStrides);
        for (let i = 0; i < resultRank; i++) {
            if (coords[i] < start[i]) {
                coords[i] = start[i] * 2 - coords[i] - offset;
            }
            else if (coords[i] >= end[i]) {
                coords[i] = (end[i] - 1) * 2 - coords[i] + offset;
            }
        }
        coords = coords.map((c, i) => c - start[i]);
        const inIndex = util.locToIndex(coords, xRank, xStrides);
        resVals[i] = xVals[inIndex];
    }
    const outId = backend.write(resVals, outShape, x.dtype);
    return { dataId: outId, shape: outShape, dtype: x.dtype };
}
export const mirrorPadConfig = {
    kernelName: MirrorPad,
    backendName: 'cpu',
    kernelFunc: mirrorPad
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWlycm9yUGFkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vdGZqcy1iYWNrZW5kLWNwdS9zcmMva2VybmVscy9NaXJyb3JQYWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7OztHQWVHO0FBRUgsT0FBTyxFQUEyQixTQUFTLEVBQTRFLElBQUksRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBRzFKLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUU3QyxNQUFNLFVBQVUsU0FBUyxDQUFDLElBSXpCO0lBQ0MsTUFBTSxFQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFDLEdBQUcsSUFBSSxDQUFDO0lBQ3RDLE1BQU0sRUFBQyxDQUFDLEVBQUMsR0FBRyxNQUFNLENBQUM7SUFDbkIsTUFBTSxFQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUMsR0FBRyxLQUFLLENBQUM7SUFFL0IsZ0JBQWdCLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBRWpDLE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQ3pCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUV2RSxNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEMsTUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEQsTUFBTSxNQUFNLEdBQUcsSUFBSSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFMUMsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQW9CLENBQUM7SUFDOUQsTUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7SUFDN0IsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFOUMsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNoRCxNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO0lBQ25DLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDcEQsTUFBTSxPQUFPLEdBQ1QsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxLQUF3QixFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBRXhFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDbkMsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsVUFBVSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQzNELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbkMsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUN4QixNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDO2FBQy9DO2lCQUFNLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDOUIsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDO2FBQ25EO1NBQ0Y7UUFDRCxNQUFNLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUU1QyxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFFekQsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUM3QjtJQUVELE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFeEQsT0FBTyxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBQyxDQUFDO0FBQzFELENBQUM7QUFFRCxNQUFNLENBQUMsTUFBTSxlQUFlLEdBQWlCO0lBQzNDLFVBQVUsRUFBRSxTQUFTO0lBQ3JCLFdBQVcsRUFBRSxLQUFLO0lBQ2xCLFVBQVUsRUFBRSxTQUFrQztDQUMvQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG5pbXBvcnQge0tlcm5lbENvbmZpZywgS2VybmVsRnVuYywgTWlycm9yUGFkLCBNaXJyb3JQYWRBdHRycywgTWlycm9yUGFkSW5wdXRzLCBOdW1lcmljRGF0YVR5cGUsIFRlbnNvckluZm8sIFR5cGVkQXJyYXksIHV0aWx9IGZyb20gJ0B0ZW5zb3JmbG93L3RmanMtY29yZSc7XG5cbmltcG9ydCB7TWF0aEJhY2tlbmRDUFV9IGZyb20gJy4uL2JhY2tlbmRfY3B1JztcbmltcG9ydCB7YXNzZXJ0Tm90Q29tcGxleH0gZnJvbSAnLi4vY3B1X3V0aWwnO1xuXG5leHBvcnQgZnVuY3Rpb24gbWlycm9yUGFkKGFyZ3M6IHtcbiAgaW5wdXRzOiBNaXJyb3JQYWRJbnB1dHMsXG4gIGJhY2tlbmQ6IE1hdGhCYWNrZW5kQ1BVLFxuICBhdHRyczogTWlycm9yUGFkQXR0cnNcbn0pOiBUZW5zb3JJbmZvIHtcbiAgY29uc3Qge2lucHV0cywgYmFja2VuZCwgYXR0cnN9ID0gYXJncztcbiAgY29uc3Qge3h9ID0gaW5wdXRzO1xuICBjb25zdCB7cGFkZGluZ3MsIG1vZGV9ID0gYXR0cnM7XG5cbiAgYXNzZXJ0Tm90Q29tcGxleCh4LCAnbWlycm9yUGFkJyk7XG5cbiAgY29uc3Qgb3V0U2hhcGUgPSBwYWRkaW5ncy5tYXAoXG4gICAgICAocCwgaSkgPT4gcFswXSAvKiBiZWZvcmVQYWQgKi8gKyB4LnNoYXBlW2ldICsgcFsxXSAvKiBhZnRlclBhZCAqLyk7XG5cbiAgY29uc3Qgc3RhcnQgPSBwYWRkaW5ncy5tYXAocCA9PiBwWzBdKTtcbiAgY29uc3QgZW5kID0gcGFkZGluZ3MubWFwKChwLCBpKSA9PiBwWzBdICsgeC5zaGFwZVtpXSk7XG4gIGNvbnN0IG9mZnNldCA9IG1vZGUgPT09ICdyZWZsZWN0JyA/IDAgOiAxO1xuXG4gIGNvbnN0IHhWYWxzID0gYmFja2VuZC5kYXRhLmdldCh4LmRhdGFJZCkudmFsdWVzIGFzIFR5cGVkQXJyYXk7XG4gIGNvbnN0IHhSYW5rID0geC5zaGFwZS5sZW5ndGg7XG4gIGNvbnN0IHhTdHJpZGVzID0gdXRpbC5jb21wdXRlU3RyaWRlcyh4LnNoYXBlKTtcblxuICBjb25zdCByZXN1bHRTaXplID0gdXRpbC5zaXplRnJvbVNoYXBlKG91dFNoYXBlKTtcbiAgY29uc3QgcmVzdWx0UmFuayA9IG91dFNoYXBlLmxlbmd0aDtcbiAgY29uc3QgcmVzdWx0U3RyaWRlcyA9IHV0aWwuY29tcHV0ZVN0cmlkZXMob3V0U2hhcGUpO1xuICBjb25zdCByZXNWYWxzID1cbiAgICAgIHV0aWwuZ2V0VHlwZWRBcnJheUZyb21EVHlwZSh4LmR0eXBlIGFzIE51bWVyaWNEYXRhVHlwZSwgcmVzdWx0U2l6ZSk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHRTaXplOyBpKyspIHtcbiAgICBsZXQgY29vcmRzID0gdXRpbC5pbmRleFRvTG9jKGksIHJlc3VsdFJhbmssIHJlc3VsdFN0cmlkZXMpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzdWx0UmFuazsgaSsrKSB7XG4gICAgICBpZiAoY29vcmRzW2ldIDwgc3RhcnRbaV0pIHtcbiAgICAgICAgY29vcmRzW2ldID0gc3RhcnRbaV0gKiAyIC0gY29vcmRzW2ldIC0gb2Zmc2V0O1xuICAgICAgfSBlbHNlIGlmIChjb29yZHNbaV0gPj0gZW5kW2ldKSB7XG4gICAgICAgIGNvb3Jkc1tpXSA9IChlbmRbaV0gLSAxKSAqIDIgLSBjb29yZHNbaV0gKyBvZmZzZXQ7XG4gICAgICB9XG4gICAgfVxuICAgIGNvb3JkcyA9IGNvb3Jkcy5tYXAoKGMsIGkpID0+IGMgLSBzdGFydFtpXSk7XG5cbiAgICBjb25zdCBpbkluZGV4ID0gdXRpbC5sb2NUb0luZGV4KGNvb3JkcywgeFJhbmssIHhTdHJpZGVzKTtcblxuICAgIHJlc1ZhbHNbaV0gPSB4VmFsc1tpbkluZGV4XTtcbiAgfVxuXG4gIGNvbnN0IG91dElkID0gYmFja2VuZC53cml0ZShyZXNWYWxzLCBvdXRTaGFwZSwgeC5kdHlwZSk7XG5cbiAgcmV0dXJuIHtkYXRhSWQ6IG91dElkLCBzaGFwZTogb3V0U2hhcGUsIGR0eXBlOiB4LmR0eXBlfTtcbn1cblxuZXhwb3J0IGNvbnN0IG1pcnJvclBhZENvbmZpZzogS2VybmVsQ29uZmlnID0ge1xuICBrZXJuZWxOYW1lOiBNaXJyb3JQYWQsXG4gIGJhY2tlbmROYW1lOiAnY3B1JyxcbiAga2VybmVsRnVuYzogbWlycm9yUGFkIGFzIHVua25vd24gYXMgS2VybmVsRnVuY1xufTtcbiJdfQ==