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
import { backend_util, Erf } from '@tensorflow/tfjs-core';
import { unaryKernelFunc } from '../utils/unary_utils';
const p = backend_util.ERF_P;
const a1 = backend_util.ERF_A1;
const a2 = backend_util.ERF_A2;
const a3 = backend_util.ERF_A3;
const a4 = backend_util.ERF_A4;
const a5 = backend_util.ERF_A5;
export const erf = unaryKernelFunc(Erf, (xi) => {
    const sign = Math.sign(xi);
    const v = Math.abs(xi);
    const t = 1.0 / (1.0 + p * v);
    return sign *
        (1.0 -
            (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t *
                Math.exp(-v * v));
});
export const erfConfig = {
    kernelName: Erf,
    backendName: 'cpu',
    kernelFunc: erf,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXJmLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vdGZqcy1iYWNrZW5kLWNwdS9zcmMva2VybmVscy9FcmYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7OztHQWVHO0FBRUgsT0FBTyxFQUFDLFlBQVksRUFBRSxHQUFHLEVBQWUsTUFBTSx1QkFBdUIsQ0FBQztBQUV0RSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFFckQsTUFBTSxDQUFDLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQztBQUM3QixNQUFNLEVBQUUsR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDO0FBQy9CLE1BQU0sRUFBRSxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUM7QUFDL0IsTUFBTSxFQUFFLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQztBQUMvQixNQUFNLEVBQUUsR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDO0FBQy9CLE1BQU0sRUFBRSxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUM7QUFFL0IsTUFBTSxDQUFDLE1BQU0sR0FBRyxHQUFHLGVBQWUsQ0FDOUIsR0FBRyxFQUNILENBQUMsRUFBRSxFQUFFLEVBQUU7SUFDTCxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzNCLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDdkIsTUFBTSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM5QixPQUFPLElBQUk7UUFDUCxDQUFDLEdBQUc7WUFDSCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUM7Z0JBQ2hELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM3QixDQUFDLENBQ0osQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLFNBQVMsR0FBaUI7SUFDckMsVUFBVSxFQUFFLEdBQUc7SUFDZixXQUFXLEVBQUUsS0FBSztJQUNsQixVQUFVLEVBQUUsR0FBRztDQUNoQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBMaWNlbnNlKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIEFTIElTIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuaW1wb3J0IHtiYWNrZW5kX3V0aWwsIEVyZiwgS2VybmVsQ29uZmlnfSBmcm9tICdAdGVuc29yZmxvdy90ZmpzLWNvcmUnO1xuXG5pbXBvcnQge3VuYXJ5S2VybmVsRnVuY30gZnJvbSAnLi4vdXRpbHMvdW5hcnlfdXRpbHMnO1xuXG5jb25zdCBwID0gYmFja2VuZF91dGlsLkVSRl9QO1xuY29uc3QgYTEgPSBiYWNrZW5kX3V0aWwuRVJGX0ExO1xuY29uc3QgYTIgPSBiYWNrZW5kX3V0aWwuRVJGX0EyO1xuY29uc3QgYTMgPSBiYWNrZW5kX3V0aWwuRVJGX0EzO1xuY29uc3QgYTQgPSBiYWNrZW5kX3V0aWwuRVJGX0E0O1xuY29uc3QgYTUgPSBiYWNrZW5kX3V0aWwuRVJGX0E1O1xuXG5leHBvcnQgY29uc3QgZXJmID0gdW5hcnlLZXJuZWxGdW5jKFxuICAgIEVyZixcbiAgICAoeGkpID0+IHtcbiAgICAgIGNvbnN0IHNpZ24gPSBNYXRoLnNpZ24oeGkpO1xuICAgICAgY29uc3QgdiA9IE1hdGguYWJzKHhpKTtcbiAgICAgIGNvbnN0IHQgPSAxLjAgLyAoMS4wICsgcCAqIHYpO1xuICAgICAgcmV0dXJuIHNpZ24gKlxuICAgICAgICAgICgxLjAgLVxuICAgICAgICAgICAoKCgoKGE1ICogdCArIGE0KSAqIHQpICsgYTMpICogdCArIGEyKSAqIHQgKyBhMSkgKiB0ICpcbiAgICAgICAgICAgICAgIE1hdGguZXhwKC12ICogdikpO1xuICAgIH0sXG4pO1xuXG5leHBvcnQgY29uc3QgZXJmQ29uZmlnOiBLZXJuZWxDb25maWcgPSB7XG4gIGtlcm5lbE5hbWU6IEVyZixcbiAgYmFja2VuZE5hbWU6ICdjcHUnLFxuICBrZXJuZWxGdW5jOiBlcmYsXG59O1xuIl19