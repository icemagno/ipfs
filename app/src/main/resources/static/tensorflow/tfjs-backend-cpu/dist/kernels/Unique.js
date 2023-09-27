/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
import { Unique } from '@tensorflow/tfjs-core';
import { assertNotComplex } from '../cpu_util';
import { uniqueImpl } from './Unique_impl';
export function unique(args) {
    const { inputs, attrs, backend } = args;
    const { axis } = attrs;
    const { x } = inputs;
    assertNotComplex(x, 'unique');
    const values = backend.data.get(x.dataId).values;
    const { outputValues, outputShape, indices } = uniqueImpl(values, axis, x.shape, x.dtype);
    return [
        backend.makeTensorInfo(outputShape, x.dtype, outputValues),
        backend.makeTensorInfo([indices.length], 'int32', indices),
    ];
}
export const uniqueConfig = {
    kernelName: Unique,
    backendName: 'cpu',
    kernelFunc: unique,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVW5pcXVlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vdGZqcy1iYWNrZW5kLWNwdS9zcmMva2VybmVscy9VbmlxdWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7OztHQWVHO0FBRUgsT0FBTyxFQUF1QyxNQUFNLEVBQTRCLE1BQU0sdUJBQXVCLENBQUM7QUFHOUcsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sYUFBYSxDQUFDO0FBRTdDLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFekMsTUFBTSxVQUFVLE1BQU0sQ0FDbEIsSUFBeUU7SUFFM0UsTUFBTSxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFDLEdBQUcsSUFBSSxDQUFDO0lBQ3RDLE1BQU0sRUFBQyxJQUFJLEVBQUMsR0FBRyxLQUFLLENBQUM7SUFDckIsTUFBTSxFQUFDLENBQUMsRUFBQyxHQUFHLE1BQU0sQ0FBQztJQUNuQixnQkFBZ0IsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFFOUIsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUNqRCxNQUFNLEVBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUMsR0FDdEMsVUFBVSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0MsT0FBTztRQUNMLE9BQU8sQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsWUFBWSxDQUFDO1FBQzFELE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQztLQUMzRCxDQUFDO0FBQ0osQ0FBQztBQUVELE1BQU0sQ0FBQyxNQUFNLFlBQVksR0FBaUI7SUFDeEMsVUFBVSxFQUFFLE1BQU07SUFDbEIsV0FBVyxFQUFFLEtBQUs7SUFDbEIsVUFBVSxFQUFFLE1BQStCO0NBQzVDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyMCBHb29nbGUgTExDLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIExpY2Vuc2UpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gQVMgSVMgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG5pbXBvcnQge0tlcm5lbENvbmZpZywgS2VybmVsRnVuYywgVGVuc29ySW5mbywgVW5pcXVlLCBVbmlxdWVBdHRycywgVW5pcXVlSW5wdXRzfSBmcm9tICdAdGVuc29yZmxvdy90ZmpzLWNvcmUnO1xuXG5pbXBvcnQge01hdGhCYWNrZW5kQ1BVfSBmcm9tICcuLi9iYWNrZW5kX2NwdSc7XG5pbXBvcnQge2Fzc2VydE5vdENvbXBsZXh9IGZyb20gJy4uL2NwdV91dGlsJztcblxuaW1wb3J0IHt1bmlxdWVJbXBsfSBmcm9tICcuL1VuaXF1ZV9pbXBsJztcblxuZXhwb3J0IGZ1bmN0aW9uIHVuaXF1ZShcbiAgICBhcmdzOiB7aW5wdXRzOiBVbmlxdWVJbnB1dHMsIGF0dHJzOiBVbmlxdWVBdHRycywgYmFja2VuZDogTWF0aEJhY2tlbmRDUFV9KTpcbiAgICBUZW5zb3JJbmZvW10ge1xuICBjb25zdCB7aW5wdXRzLCBhdHRycywgYmFja2VuZH0gPSBhcmdzO1xuICBjb25zdCB7YXhpc30gPSBhdHRycztcbiAgY29uc3Qge3h9ID0gaW5wdXRzO1xuICBhc3NlcnROb3RDb21wbGV4KHgsICd1bmlxdWUnKTtcblxuICBjb25zdCB2YWx1ZXMgPSBiYWNrZW5kLmRhdGEuZ2V0KHguZGF0YUlkKS52YWx1ZXM7XG4gIGNvbnN0IHtvdXRwdXRWYWx1ZXMsIG91dHB1dFNoYXBlLCBpbmRpY2VzfSA9XG4gICAgICB1bmlxdWVJbXBsKHZhbHVlcywgYXhpcywgeC5zaGFwZSwgeC5kdHlwZSk7XG4gIHJldHVybiBbXG4gICAgYmFja2VuZC5tYWtlVGVuc29ySW5mbyhvdXRwdXRTaGFwZSwgeC5kdHlwZSwgb3V0cHV0VmFsdWVzKSxcbiAgICBiYWNrZW5kLm1ha2VUZW5zb3JJbmZvKFtpbmRpY2VzLmxlbmd0aF0sICdpbnQzMicsIGluZGljZXMpLFxuICBdO1xufVxuXG5leHBvcnQgY29uc3QgdW5pcXVlQ29uZmlnOiBLZXJuZWxDb25maWcgPSB7XG4gIGtlcm5lbE5hbWU6IFVuaXF1ZSxcbiAgYmFja2VuZE5hbWU6ICdjcHUnLFxuICBrZXJuZWxGdW5jOiB1bmlxdWUgYXMgdW5rbm93biBhcyBLZXJuZWxGdW5jLFxufTtcbiJdfQ==