/**
 * @license
 * Copyright 2023 Google LLC.
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
import * as tf from '../../index';
import { ALL_ENVS, describeWithFlags } from '../../jasmine_util';
import { expectArraysClose } from '../../test_util';
describeWithFlags('RGBToGrayscale', ALL_ENVS, () => {
    it('should return int32 dtype tensor for int32 dtype input', async () => {
        const rgb = tf.tensor2d([16, 24, 56, 1, 2, 9], [2, 3], 'int32');
        const grayscale = tf.image.rgbToGrayscale(rgb);
        const expected = [[25], [2]];
        const grayscaleData = await grayscale.data();
        expect(grayscale.shape).toEqual([2, 1]);
        expectArraysClose(grayscaleData, expected);
    });
    it('basic 3 rank array conversion', async () => {
        const rgb = [[[1.0, 2.0, 3.0]]];
        const grayscale = tf.image.rgbToGrayscale(rgb);
        const expected = [[[1.8149]]];
        const grayscaleData = await grayscale.data();
        expect(grayscale.shape).toEqual([1, 1, 1]);
        expectArraysClose(grayscaleData, expected);
    });
    it('basic 4 rank array conversion', async () => {
        const rgb = [[[[1.0, 2.0, 3.0], [2.0, 3.0, 4.0]]]];
        const grayscale = tf.image.rgbToGrayscale(rgb);
        const expected = [[[[1.8149], [2.8148]]]];
        const grayscaleData = await grayscale.data();
        expect(grayscale.shape).toEqual([1, 1, 2, 1]);
        expectArraysClose(grayscaleData, expected);
    });
    it('should throw an error because of input last dim is not 3', () => {
        const grayscale = tf.tensor4d([1.0, 1.0, 2.0, 2.0, 3.0, 3.0], [1, 1, 3, 2]);
        expect(() => tf.image.rgbToGrayscale(grayscale))
            .toThrowError(/last dimension of an RGB image should be size 3/);
    });
    it('should throw an error because of image\'s rank is less than 2', () => {
        const grayscale = tf.tensor1d([1, 2, 3]);
        expect(() => tf.image.rgbToGrayscale(grayscale))
            .toThrowError(/images must be at least rank 2/);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmdiX3RvX2dyYXlzY2FsZV90ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vdGZqcy1jb3JlL3NyYy9vcHMvaW1hZ2UvcmdiX3RvX2dyYXlzY2FsZV90ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7R0FlRztBQUNILE9BQU8sS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ2xDLE9BQU8sRUFBQyxRQUFRLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUMvRCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUdsRCxpQkFBaUIsQ0FBQyxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFO0lBQ2pELEVBQUUsQ0FBQyx3REFBd0QsRUFBRSxLQUFLLElBQUksRUFBRTtRQUN0RSxNQUFNLEdBQUcsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUMxRCxNQUFNLFNBQVMsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUUvQyxNQUFNLFFBQVEsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVCLE1BQU0sYUFBYSxHQUFHLE1BQU0sU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO1FBRTdDLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzdDLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLCtCQUErQixFQUFFLEtBQUssSUFBSSxFQUFFO1FBQzdDLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLE1BQU0sU0FBUyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRS9DLE1BQU0sUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5QixNQUFNLGFBQWEsR0FBRyxNQUFNLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUU3QyxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDN0MsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsK0JBQStCLEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFDN0MsTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuRCxNQUFNLFNBQVMsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUUvQyxNQUFNLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekMsTUFBTSxhQUFhLEdBQUcsTUFBTSxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFN0MsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUM3QyxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQywwREFBMEQsRUFBRSxHQUFHLEVBQUU7UUFDbEUsTUFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTVFLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUMzQyxZQUFZLENBQUMsaURBQWlELENBQUMsQ0FBQztJQUN2RSxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQywrREFBK0QsRUFBRSxHQUFHLEVBQUU7UUFDdkUsTUFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQXdCLENBQUM7UUFFaEUsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQzNDLFlBQVksQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO0lBQ3RELENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyMyBHb29nbGUgTExDLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5pbXBvcnQgKiBhcyB0ZiBmcm9tICcuLi8uLi9pbmRleCc7XG5pbXBvcnQge0FMTF9FTlZTLCBkZXNjcmliZVdpdGhGbGFnc30gZnJvbSAnLi4vLi4vamFzbWluZV91dGlsJztcbmltcG9ydCB7ZXhwZWN0QXJyYXlzQ2xvc2V9IGZyb20gJy4uLy4uL3Rlc3RfdXRpbCc7XG5pbXBvcnQge1RlbnNvcjJEfSBmcm9tICcuLi8uLi90ZW5zb3InO1xuXG5kZXNjcmliZVdpdGhGbGFncygnUkdCVG9HcmF5c2NhbGUnLCBBTExfRU5WUywgKCkgPT4ge1xuICBpdCgnc2hvdWxkIHJldHVybiBpbnQzMiBkdHlwZSB0ZW5zb3IgZm9yIGludDMyIGR0eXBlIGlucHV0JywgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJnYiA9IHRmLnRlbnNvcjJkKFsxNiwyNCw1NiwxLDIsOV0sIFsyLDNdLCAnaW50MzInKTtcbiAgICBjb25zdCBncmF5c2NhbGUgPSB0Zi5pbWFnZS5yZ2JUb0dyYXlzY2FsZShyZ2IpO1xuXG4gICAgY29uc3QgZXhwZWN0ZWQgPSBbWzI1XSxbMl1dO1xuICAgIGNvbnN0IGdyYXlzY2FsZURhdGEgPSBhd2FpdCBncmF5c2NhbGUuZGF0YSgpO1xuXG4gICAgZXhwZWN0KGdyYXlzY2FsZS5zaGFwZSkudG9FcXVhbChbMiwxXSk7XG4gICAgZXhwZWN0QXJyYXlzQ2xvc2UoZ3JheXNjYWxlRGF0YSwgZXhwZWN0ZWQpO1xuICB9KTtcblxuICBpdCgnYmFzaWMgMyByYW5rIGFycmF5IGNvbnZlcnNpb24nLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmdiID0gW1tbMS4wLCAyLjAsIDMuMF1dXTtcbiAgICBjb25zdCBncmF5c2NhbGUgPSB0Zi5pbWFnZS5yZ2JUb0dyYXlzY2FsZShyZ2IpO1xuXG4gICAgY29uc3QgZXhwZWN0ZWQgPSBbW1sxLjgxNDldXV07XG4gICAgY29uc3QgZ3JheXNjYWxlRGF0YSA9IGF3YWl0IGdyYXlzY2FsZS5kYXRhKCk7XG5cbiAgICBleHBlY3QoZ3JheXNjYWxlLnNoYXBlKS50b0VxdWFsKFsxLCAxLCAxXSk7XG4gICAgZXhwZWN0QXJyYXlzQ2xvc2UoZ3JheXNjYWxlRGF0YSwgZXhwZWN0ZWQpO1xuICB9KTtcblxuICBpdCgnYmFzaWMgNCByYW5rIGFycmF5IGNvbnZlcnNpb24nLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmdiID0gW1tbWzEuMCwgMi4wLCAzLjBdLCBbMi4wLCAzLjAsIDQuMF1dXV07XG4gICAgY29uc3QgZ3JheXNjYWxlID0gdGYuaW1hZ2UucmdiVG9HcmF5c2NhbGUocmdiKTtcblxuICAgIGNvbnN0IGV4cGVjdGVkID0gW1tbWzEuODE0OV0sWzIuODE0OF1dXV07XG4gICAgY29uc3QgZ3JheXNjYWxlRGF0YSA9IGF3YWl0IGdyYXlzY2FsZS5kYXRhKCk7XG5cbiAgICBleHBlY3QoZ3JheXNjYWxlLnNoYXBlKS50b0VxdWFsKFsxLCAxLCAyLCAxXSk7XG4gICAgZXhwZWN0QXJyYXlzQ2xvc2UoZ3JheXNjYWxlRGF0YSwgZXhwZWN0ZWQpO1xuICB9KTtcblxuICBpdCgnc2hvdWxkIHRocm93IGFuIGVycm9yIGJlY2F1c2Ugb2YgaW5wdXQgbGFzdCBkaW0gaXMgbm90IDMnLCAoKSA9PiB7XG4gICAgY29uc3QgZ3JheXNjYWxlID0gdGYudGVuc29yNGQoWzEuMCwgMS4wLCAyLjAsIDIuMCwgMy4wLCAzLjBdLCBbMSwgMSwgMywgMl0pO1xuXG4gICAgZXhwZWN0KCgpID0+IHRmLmltYWdlLnJnYlRvR3JheXNjYWxlKGdyYXlzY2FsZSkpXG4gICAgICAgIC50b1Rocm93RXJyb3IoL2xhc3QgZGltZW5zaW9uIG9mIGFuIFJHQiBpbWFnZSBzaG91bGQgYmUgc2l6ZSAzLyk7XG4gIH0pO1xuXG4gIGl0KCdzaG91bGQgdGhyb3cgYW4gZXJyb3IgYmVjYXVzZSBvZiBpbWFnZVxcJ3MgcmFuayBpcyBsZXNzIHRoYW4gMicsICgpID0+IHtcbiAgICBjb25zdCBncmF5c2NhbGUgPSB0Zi50ZW5zb3IxZChbMSwgMiwgM10pIGFzIHVua25vd24gYXMgVGVuc29yMkQ7XG5cbiAgICBleHBlY3QoKCkgPT4gdGYuaW1hZ2UucmdiVG9HcmF5c2NhbGUoZ3JheXNjYWxlKSlcbiAgICAgICAgLnRvVGhyb3dFcnJvcigvaW1hZ2VzIG11c3QgYmUgYXQgbGVhc3QgcmFuayAyLyk7XG4gIH0pO1xufSk7XG4iXX0=