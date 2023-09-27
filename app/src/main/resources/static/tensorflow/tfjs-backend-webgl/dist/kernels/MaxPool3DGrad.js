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
import { backend_util, MaxPool3DGrad } from '@tensorflow/tfjs-core';
import { MaxPool3DBackpropProgram } from '../max_pool_backprop_gpu';
import { Pool3DProgram } from '../pool_gpu';
export function maxPool3DGrad(args) {
    const { inputs, backend, attrs } = args;
    const { dy, input } = inputs;
    const x = input;
    const { filterSize, strides, pad, dimRoundingMode } = attrs;
    const dilations = [1, 1, 1];
    const convInfo = backend_util.computePool3DInfo(x.shape, filterSize, strides, dilations, pad, dimRoundingMode);
    const maxPool3dPositionsProgram = new Pool3DProgram(convInfo, 'max', true /* get positions */);
    const maxPool3dPositions = backend.runWebGLProgram(maxPool3dPositionsProgram, [x], x.dtype);
    const maxPoolBackpropProgram = new MaxPool3DBackpropProgram(convInfo);
    const result = backend.runWebGLProgram(maxPoolBackpropProgram, [dy, maxPool3dPositions], x.dtype);
    backend.disposeIntermediateTensorInfo(maxPool3dPositions);
    return result;
}
export const maxPool3DGradConfig = {
    kernelName: MaxPool3DGrad,
    backendName: 'webgl',
    kernelFunc: maxPool3DGrad
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWF4UG9vbDNER3JhZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3RmanMtYmFja2VuZC13ZWJnbC9zcmMva2VybmVscy9NYXhQb29sM0RHcmFkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7R0FlRztBQUNILE9BQU8sRUFBQyxZQUFZLEVBQTRCLGFBQWEsRUFBc0QsTUFBTSx1QkFBdUIsQ0FBQztBQUdqSixPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUNsRSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sYUFBYSxDQUFDO0FBRTFDLE1BQU0sVUFBVSxhQUFhLENBQUMsSUFJN0I7SUFDQyxNQUFNLEVBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUMsR0FBRyxJQUFJLENBQUM7SUFDdEMsTUFBTSxFQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUMsR0FBRyxNQUFNLENBQUM7SUFDM0IsTUFBTSxDQUFDLEdBQUcsS0FBSyxDQUFDO0lBQ2hCLE1BQU0sRUFBQyxVQUFVLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxlQUFlLEVBQUMsR0FBRyxLQUFLLENBQUM7SUFDMUQsTUFBTSxTQUFTLEdBQTZCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUV0RCxNQUFNLFFBQVEsR0FBRyxZQUFZLENBQUMsaUJBQWlCLENBQzNDLENBQUMsQ0FBQyxLQUFpRCxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQ3hFLFNBQVMsRUFBRSxHQUFHLEVBQUUsZUFBZSxDQUFDLENBQUM7SUFFckMsTUFBTSx5QkFBeUIsR0FDM0IsSUFBSSxhQUFhLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUNqRSxNQUFNLGtCQUFrQixHQUNwQixPQUFPLENBQUMsZUFBZSxDQUFDLHlCQUF5QixFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JFLE1BQU0sc0JBQXNCLEdBQUcsSUFBSSx3QkFBd0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN0RSxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsZUFBZSxDQUNsQyxzQkFBc0IsRUFBRSxDQUFDLEVBQUUsRUFBRSxrQkFBa0IsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvRCxPQUFPLENBQUMsNkJBQTZCLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUMxRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDO0FBRUQsTUFBTSxDQUFDLE1BQU0sbUJBQW1CLEdBQWlCO0lBQy9DLFVBQVUsRUFBRSxhQUFhO0lBQ3pCLFdBQVcsRUFBRSxPQUFPO0lBQ3BCLFVBQVUsRUFBRSxhQUFzQztDQUNuRCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuaW1wb3J0IHtiYWNrZW5kX3V0aWwsIEtlcm5lbENvbmZpZywgS2VybmVsRnVuYywgTWF4UG9vbDNER3JhZCwgTWF4UG9vbDNER3JhZEF0dHJzLCBNYXhQb29sM0RHcmFkSW5wdXRzLCBUZW5zb3JJbmZvfSBmcm9tICdAdGVuc29yZmxvdy90ZmpzLWNvcmUnO1xuXG5pbXBvcnQge01hdGhCYWNrZW5kV2ViR0x9IGZyb20gJy4uL2JhY2tlbmRfd2ViZ2wnO1xuaW1wb3J0IHtNYXhQb29sM0RCYWNrcHJvcFByb2dyYW19IGZyb20gJy4uL21heF9wb29sX2JhY2twcm9wX2dwdSc7XG5pbXBvcnQge1Bvb2wzRFByb2dyYW19IGZyb20gJy4uL3Bvb2xfZ3B1JztcblxuZXhwb3J0IGZ1bmN0aW9uIG1heFBvb2wzREdyYWQoYXJnczoge1xuICBpbnB1dHM6IE1heFBvb2wzREdyYWRJbnB1dHMsXG4gIGJhY2tlbmQ6IE1hdGhCYWNrZW5kV2ViR0wsXG4gIGF0dHJzOiBNYXhQb29sM0RHcmFkQXR0cnNcbn0pOiBUZW5zb3JJbmZvIHtcbiAgY29uc3Qge2lucHV0cywgYmFja2VuZCwgYXR0cnN9ID0gYXJncztcbiAgY29uc3Qge2R5LCBpbnB1dH0gPSBpbnB1dHM7XG4gIGNvbnN0IHggPSBpbnB1dDtcbiAgY29uc3Qge2ZpbHRlclNpemUsIHN0cmlkZXMsIHBhZCwgZGltUm91bmRpbmdNb2RlfSA9IGF0dHJzO1xuICBjb25zdCBkaWxhdGlvbnM6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyXSA9IFsxLCAxLCAxXTtcblxuICBjb25zdCBjb252SW5mbyA9IGJhY2tlbmRfdXRpbC5jb21wdXRlUG9vbDNESW5mbyhcbiAgICAgIHguc2hhcGUgYXMgW251bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyXSwgZmlsdGVyU2l6ZSwgc3RyaWRlcyxcbiAgICAgIGRpbGF0aW9ucywgcGFkLCBkaW1Sb3VuZGluZ01vZGUpO1xuXG4gIGNvbnN0IG1heFBvb2wzZFBvc2l0aW9uc1Byb2dyYW0gPVxuICAgICAgbmV3IFBvb2wzRFByb2dyYW0oY29udkluZm8sICdtYXgnLCB0cnVlIC8qIGdldCBwb3NpdGlvbnMgKi8pO1xuICBjb25zdCBtYXhQb29sM2RQb3NpdGlvbnMgPVxuICAgICAgYmFja2VuZC5ydW5XZWJHTFByb2dyYW0obWF4UG9vbDNkUG9zaXRpb25zUHJvZ3JhbSwgW3hdLCB4LmR0eXBlKTtcbiAgY29uc3QgbWF4UG9vbEJhY2twcm9wUHJvZ3JhbSA9IG5ldyBNYXhQb29sM0RCYWNrcHJvcFByb2dyYW0oY29udkluZm8pO1xuICBjb25zdCByZXN1bHQgPSBiYWNrZW5kLnJ1bldlYkdMUHJvZ3JhbShcbiAgICAgIG1heFBvb2xCYWNrcHJvcFByb2dyYW0sIFtkeSwgbWF4UG9vbDNkUG9zaXRpb25zXSwgeC5kdHlwZSk7XG4gIGJhY2tlbmQuZGlzcG9zZUludGVybWVkaWF0ZVRlbnNvckluZm8obWF4UG9vbDNkUG9zaXRpb25zKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGNvbnN0IG1heFBvb2wzREdyYWRDb25maWc6IEtlcm5lbENvbmZpZyA9IHtcbiAga2VybmVsTmFtZTogTWF4UG9vbDNER3JhZCxcbiAgYmFja2VuZE5hbWU6ICd3ZWJnbCcsXG4gIGtlcm5lbEZ1bmM6IG1heFBvb2wzREdyYWQgYXMgdW5rbm93biBhcyBLZXJuZWxGdW5jXG59O1xuIl19