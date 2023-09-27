/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
import * as tf from '../index';
import { ALL_ENVS, describeWithFlags } from '../jasmine_util';
import { expectArraysClose } from '../test_util';
describeWithFlags('softmax', ALL_ENVS, () => {
    it('regular test', async () => {
        const y = tf.softmax(tf.tensor1d([2, 1, 3]));
        expectArraysClose(await y.data(), [0.24472847, 0.09003057, 0.66524095]);
        expectArraysClose(await y.sum().data(), 1);
    });
    it('overflow', async () => {
        const y = tf.softmax(tf.tensor1d([100, 100]));
        expectArraysClose(await y.data(), [0.5, 0.5]);
    });
    it('underflow', async () => {
        const y = tf.softmax(tf.tensor1d([-100, -100]));
        expectArraysClose(await y.data(), [0.5, 0.5]);
    });
    it('odd number of inputs', async () => {
        const y = tf.softmax(tf.tensor1d([-400, -400, 0, -400, -400, -400, -400]));
        expectArraysClose(await y.data(), [0, 0, 1, 0, 0, 0, 0]);
    });
    it('Huge difference between probabilities', async () => {
        const y = tf.softmax(tf.tensor1d([-1000, +1000]));
        expectArraysClose(await y.data(), [0, 1]);
    });
    it('Propagates NaNs', async () => {
        const a = tf.tensor1d([2, 1, NaN]);
        const y = tf.softmax(a);
        expectArraysClose(await y.data(), [NaN, NaN, NaN]);
    });
    it('2D, dim=1', async () => {
        const y = tf.softmax(tf.tensor2d([[2, 1, 3], [1, 3, 2]], [2, 3]), 1);
        const expected = [
            0.24472847, 0.09003057, 0.66524095, 0.09003057, 0.66524095, 0.24472847
        ];
        expect(y.rank).toBe(2);
        expectArraysClose(await y.data(), expected);
    });
    it('2D, implicit dim=1', async () => {
        const y = tf.softmax(tf.tensor2d([[2, 1, 3], [1, 3, 2]], [2, 3]));
        const expected = [
            0.24472847, 0.09003057, 0.66524095, 0.09003057, 0.66524095, 0.24472847
        ];
        expect(y.rank).toBe(2);
        expectArraysClose(await y.data(), expected);
    });
    it('2D, dim=0 throws error', () => {
        const f = () => {
            tf.softmax(tf.tensor2d([[2, 1, 3], [1, 3, 2]], [2, 3]), 0);
        };
        expect(f).toThrowError();
    });
    it('1D gradient', async () => {
        const x = tf.tensor1d([10, 0, -1]);
        const y = tf.softmax(x);
        const dy = tf.tensor1d([1, 2, 3]);
        const dx = tf.grad((x) => x.softmax())(x, dy);
        const totalSum = tf.sum(tf.mul(dy, y));
        const dyVals = await dy.array();
        const sumVals = await totalSum.array();
        const yVals = await y.array();
        expect(dx.shape).toEqual(x.shape);
        expectArraysClose(await dx.data(), [
            (dyVals[0] - sumVals) * yVals[0],
            (dyVals[1] - sumVals) * yVals[1],
            (dyVals[2] - sumVals) * yVals[2],
        ]);
    });
    it('gradient with clones', () => {
        const x = tf.tensor1d([10, 0, -1]);
        const dx = tf.grad((x) => x.clone().softmax().clone())(x);
        expect(dx.shape).toEqual(x.shape);
        expect(dx.dtype).toBe('float32');
    });
    it('2D gradient', async () => {
        const x = tf.tensor2d([10, 0, -1, 5, 4, 3], [2, 3]);
        const y = tf.softmax(x);
        const dy = tf.tensor2d([3, 2, 1, 1, 2, 3], [2, 3]);
        const dx = tf.grad((x) => x.softmax())(x, dy);
        const axis = -1;
        const totalSum = tf.sum(tf.mul(dy, y), axis);
        const dyVals = await dy.array();
        const sumVals = await totalSum.array();
        const yVals = await y.array();
        expect(dx.shape).toEqual(x.shape);
        expectArraysClose(await dx.data(), [
            (dyVals[0][0] - sumVals[0]) * yVals[0][0],
            (dyVals[0][1] - sumVals[0]) * yVals[0][1],
            (dyVals[0][2] - sumVals[0]) * yVals[0][2],
            (dyVals[1][0] - sumVals[1]) * yVals[1][0],
            (dyVals[1][1] - sumVals[1]) * yVals[1][1],
            (dyVals[1][2] - sumVals[1]) * yVals[1][2]
        ]);
    });
    it('throws when passed a non-tensor', () => {
        expect(() => tf.softmax({}))
            .toThrowError(/Argument 'logits' passed to 'softmax' must be a Tensor/);
    });
    it('throws when passed an int32 tensor', async () => {
        expect(() => tf.softmax(tf.tensor1d([2, 1, 3], 'int32')))
            .toThrowError(/Argument 'logits' passed to 'softmax' must be float32/);
    });
    it('accepts a tensor-like object', async () => {
        const y = tf.softmax([2, 1, 3]);
        expectArraysClose(await y.data(), [0.24472847, 0.09003057, 0.66524095]);
        expectArraysClose(await y.sum().data(), 1);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29mdG1heF90ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vdGZqcy1jb3JlL3NyYy9vcHMvc29mdG1heF90ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7R0FlRztBQUVILE9BQU8sS0FBSyxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQy9CLE9BQU8sRUFBQyxRQUFRLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM1RCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFFL0MsaUJBQWlCLENBQUMsU0FBUyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUU7SUFDMUMsRUFBRSxDQUFDLGNBQWMsRUFBRSxLQUFLLElBQUksRUFBRTtRQUM1QixNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUU3QyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUN4RSxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM3QyxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxVQUFVLEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFDeEIsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUU5QyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFH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QUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkMsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUQsTUFBTSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xDLE1BQU0sQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ25DLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLGFBQWEsRUFBRSxLQUFLLElBQUksRUFBRTtRQUMzQixNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEQsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4QixNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25ELE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUU5QyxNQUFNLElBQUksR0FBRyxDQUFDLENB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QztJQUM3QyxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG5pbXBvcnQgKiBhcyB0ZiBmcm9tICcuLi9pbmRleCc7XG5pbXBvcnQge0FMTF9FTlZTLCBkZXNjcmliZVdpdGhGbGFnc30gZnJvbSAnLi4vamFzbWluZV91dGlsJztcbmltcG9ydCB7ZXhwZWN0QXJyYXlzQ2xvc2V9IGZyb20gJy4uL3Rlc3RfdXRpbCc7XG5cbmRlc2NyaWJlV2l0aEZsYWdzKCdzb2Z0bWF4JywgQUxMX0VOVlMsICgpID0+IHtcbiAgaXQoJ3JlZ3VsYXIgdGVzdCcsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB5ID0gdGYuc29mdG1heCh0Zi50ZW5zb3IxZChbMiwgMSwgM10pKTtcblxuICAgIGV4cGVjdEFycmF5c0Nsb3NlKGF3YWl0IHkuZGF0YSgpLCBbMC4yNDQ3Mjg0NywgMC4wOTAwMzA1NywgMC42NjUyNDA5NV0pO1xuICAgIGV4cGVjdEFycmF5c0Nsb3NlKGF3YWl0IHkuc3VtKCkuZGF0YSgpLCAxKTtcbiAgfSk7XG5cbiAgaXQoJ292ZXJmbG93JywgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHkgPSB0Zi5zb2Z0bWF4KHRmLnRlbnNvcjFkKFsxMDAsIDEwMF0pKTtcblxuICAgIGV4cGVjdEFycmF5c0Nsb3NlKGF3YWl0IHkuZGF0YSgpLCBbMC41LCAwLjVdKTtcbiAgfSk7XG5cbiAgaXQoJ3VuZGVyZmxvdycsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB5ID0gdGYuc29mdG1heCh0Zi50ZW5zb3IxZChbLTEwMCwgLTEwMF0pKTtcblxuICAgIGV4cGVjdEFycmF5c0Nsb3NlKGF3YWl0IHkuZGF0YSgpLCBbMC41LCAwLjVdKTtcbiAgfSk7XG5cbiAgaXQoJ29kZCBudW1iZXIgb2YgaW5wdXRzJywgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHkgPSB0Zi5zb2Z0bWF4KHRmLnRlbnNvcjFkKFstNDAwLCAtNDAwLCAwLCAtNDAwLCAtNDAwLCAtNDAwLCAtNDAwXSkpO1xuXG4gICAgZXhwZWN0QXJyYXlzQ2xvc2UoYXdhaXQgeS5kYXRhKCksIFswLCAwLCAxLCAwLCAwLCAwLCAwXSk7XG4gIH0pO1xuXG4gIGl0KCdIdWdlIGRpZmZlcmVuY2UgYmV0d2VlbiBwcm9iYWJpbGl0aWVzJywgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHkgPSB0Zi5zb2Z0bWF4KHRmLnRlbnNvcjFkKFstMTAwMCwgKzEwMDBdKSk7XG5cbiAgICBleHBlY3RBcnJheXNDbG9zZShhd2FpdCB5LmRhdGEoKSwgWzAsIDFdKTtcbiAgfSk7XG5cbiAgaXQoJ1Byb3BhZ2F0ZXMgTmFOcycsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBhID0gdGYudGVuc29yMWQoWzIsIDEsIE5hTl0pO1xuICAgIGNvbnN0IHkgPSB0Zi5zb2Z0bWF4KGEpO1xuICAgIGV4cGVjdEFycmF5c0Nsb3NlKGF3YWl0IHkuZGF0YSgpLCBbTmFOLCBOYU4sIE5hTl0pO1xuICB9KTtcblxuICBpdCgnMkQsIGRpbT0xJywgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHkgPSB0Zi5zb2Z0bWF4KHRmLnRlbnNvcjJkKFtbMiwgMSwgM10sIFsxLCAzLCAyXV0sIFsyLCAzXSksIDEpO1xuICAgIGNvbnN0IGV4cGVjdGVkID0gW1xuICAgICAgMC4yNDQ3Mjg0NywgMC4wOTAwMzA1NywgMC42NjUyNDA5NSwgMC4wOTAwMzA1NywgMC42NjUyNDA5NSwgMC4yNDQ3Mjg0N1xuICAgIF07XG4gICAgZXhwZWN0KHkucmFuaykudG9CZSgyKTtcbiAgICBleHBlY3RBcnJheXNDbG9zZShhd2FpdCB5LmRhdGEoKSwgZXhwZWN0ZWQpO1xuICB9KTtcblxuICBpdCgnMkQsIGltcGxpY2l0IGRpbT0xJywgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHkgPSB0Zi5zb2Z0bWF4KHRmLnRlbnNvcjJkKFtbMiwgMSwgM10sIFsxLCAzLCAyXV0sIFsyLCAzXSkpO1xuICAgIGNvbnN0IGV4cGVjdGVkID0gW1xuICAgICAgMC4yNDQ3Mjg0NywgMC4wOTAwMzA1NywgMC42NjUyNDA5NSwgMC4wOTAwMzA1NywgMC42NjUyNDA5NSwgMC4yNDQ3Mjg0N1xuICAgIF07XG4gICAgZXhwZWN0KHkucmFuaykudG9CZSgyKTtcbiAgICBleHBlY3RBcnJheXNDbG9zZShhd2FpdCB5LmRhdGEoKSwgZXhwZWN0ZWQpO1xuICB9KTtcblxuICBpdCgnMkQsIGRpbT0wIHRocm93cyBlcnJvcicsICgpID0+IHtcbiAgICBjb25zdCBmID0gKCkgPT4ge1xuICAgICAgdGYuc29mdG1heCh0Zi50ZW5zb3IyZChbWzIsIDEsIDNdLCBbMSwgMywgMl1dLCBbMiwgM10pLCAwKTtcbiAgICB9O1xuICAgIGV4cGVjdChmKS50b1Rocm93RXJyb3IoKTtcbiAgfSk7XG5cbiAgaXQoJzFEIGdyYWRpZW50JywgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHggPSB0Zi50ZW5zb3IxZChbMTAsIDAsIC0xXSk7XG4gICAgY29uc3QgeSA9IHRmLnNvZnRtYXgoeCk7XG4gICAgY29uc3QgZHkgPSB0Zi50ZW5zb3IxZChbMSwgMiwgM10pO1xuICAgIGNvbnN0IGR4ID0gdGYuZ3JhZCgoeCkgPT4geC5zb2Z0bWF4KCkpKHgsIGR5KTtcblxuICAgIGNvbnN0IHRvdGFsU3VtOiB0Zi5TY2FsYXIgPSB0Zi5zdW0odGYubXVsKGR5LCB5KSk7XG5cbiAgICBjb25zdCBkeVZhbHMgPSBhd2FpdCBkeS5hcnJheSgpO1xuICAgIGNvbnN0IHN1bVZhbHMgPSBhd2FpdCB0b3RhbFN1bS5hcnJheSgpO1xuICAgIGNvbnN0IHlWYWxzID0gYXdhaXQgeS5hcnJheSgpO1xuICAgIGV4cGVjdChkeC5zaGFwZSkudG9FcXVhbCh4LnNoYXBlKTtcbiAgICBleHBlY3RBcnJheXNDbG9zZShhd2FpdCBkeC5kYXRhKCksIFtcbiAgICAgIChkeVZhbHNbMF0gLSBzdW1WYWxzKSAqIHlWYWxzWzBdLFxuICAgICAgKGR5VmFsc1sxXSAtIHN1bVZhbHMpICogeVZhbHNbMV0sXG4gICAgICAoZHlWYWxzWzJdIC0gc3VtVmFscykgKiB5VmFsc1syXSxcbiAgICBdKTtcbiAgfSk7XG5cbiAgaXQoJ2dyYWRpZW50IHdpdGggY2xvbmVzJywgKCkgPT4ge1xuICAgIGNvbnN0IHggPSB0Zi50ZW5zb3IxZChbMTAsIDAsIC0xXSk7XG4gICAgY29uc3QgZHggPSB0Zi5ncmFkKCh4KSA9PiB4LmNsb25lKCkuc29mdG1heCgpLmNsb25lKCkpKHgpO1xuICAgIGV4cGVjdChkeC5zaGFwZSkudG9FcXVhbCh4LnNoYXBlKTtcbiAgICBleHBlY3QoZHguZHR5cGUpLnRvQmUoJ2Zsb2F0MzInKTtcbiAgfSk7XG5cbiAgaXQoJzJEIGdyYWRpZW50JywgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHggPSB0Zi50ZW5zb3IyZChbMTAsIDAsIC0xLCA1LCA0LCAzXSwgWzIsIDNdKTtcbiAgICBjb25zdCB5ID0gdGYuc29mdG1heCh4KTtcbiAgICBjb25zdCBkeSA9IHRmLnRlbnNvcjJkKFszLCAyLCAxLCAxLCAyLCAzXSwgWzIsIDNdKTtcbiAgICBjb25zdCBkeCA9IHRmLmdyYWQoKHgpID0+IHguc29mdG1heCgpKSh4LCBkeSk7XG5cbiAgICBjb25zdCBheGlzID0gLTE7XG4gICAgY29uc3QgdG90YWxTdW06IHRmLlRlbnNvcjFEID0gdGYuc3VtKHRmLm11bChkeSwgeSksIGF4aXMpO1xuXG4gICAgY29uc3QgZHlWYWxzID0gYXdhaXQgZHkuYXJyYXkoKTtcbiAgICBjb25zdCBzdW1WYWxzID0gYXdhaXQgdG90YWxTdW0uYXJyYXkoKTtcbiAgICBjb25zdCB5VmFscyA9IGF3YWl0IHkuYXJyYXkoKTtcblxuICAgIGV4cGVjdChkeC5zaGFwZSkudG9FcXVhbCh4LnNoYXBlKTtcbiAgICBleHBlY3RBcnJheXNDbG9zZShhd2FpdCBkeC5kYXRhKCksIFtcbiAgICAgIChkeVZhbHNbMF1bMF0gLSBzdW1WYWxzWzBdKSAqIHlWYWxzWzBdWzBdLFxuICAgICAgKGR5VmFsc1swXVsxXSAtIHN1bVZhbHNbMF0pICogeVZhbHNbMF1bMV0sXG4gICAgICAoZHlWYWxzWzBdWzJdIC0gc3VtVmFsc1swXSkgKiB5VmFsc1swXVsyXSxcbiAgICAgIChkeVZhbHNbMV1bMF0gLSBzdW1WYWxzWzFdKSAqIHlWYWxzWzFdWzBdLFxuICAgICAgKGR5VmFsc1sxXVsxXSAtIHN1bVZhbHNbMV0pICogeVZhbHNbMV1bMV0sXG4gICAgICAoZHlWYWxzWzFdWzJdIC0gc3VtVmFsc1sxXSkgKiB5VmFsc1sxXVsyXVxuICAgIF0pO1xuICB9KTtcblxuICBpdCgndGhyb3dzIHdoZW4gcGFzc2VkIGEgbm9uLXRlbnNvcicsICgpID0+IHtcbiAgICBleHBlY3QoKCkgPT4gdGYuc29mdG1heCh7fSBhcyB0Zi5UZW5zb3IpKVxuICAgICAgICAudG9UaHJvd0Vycm9yKC9Bcmd1bWVudCAnbG9naXRzJyBwYXNzZWQgdG8gJ3NvZnRtYXgnIG11c3QgYmUgYSBUZW5zb3IvKTtcbiAgfSk7XG5cbiAgaXQoJ3Rocm93cyB3aGVuIHBhc3NlZCBhbiBpbnQzMiB0ZW5zb3InLCBhc3luYyAoKSA9PiB7XG4gICAgZXhwZWN0KCgpID0+IHRmLnNvZnRtYXgodGYudGVuc29yMWQoWzIsIDEsIDNdLCAnaW50MzInKSkpXG4gICAgICAgIC50b1Rocm93RXJyb3IoL0FyZ3VtZW50ICdsb2dpdHMnIHBhc3NlZCB0byAnc29mdG1heCcgbXVzdCBiZSBmbG9hdDMyLyk7XG4gIH0pO1xuXG4gIGl0KCdhY2NlcHRzIGEgdGVuc29yLWxpa2Ugb2JqZWN0JywgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHkgPSB0Zi5zb2Z0bWF4KFsyLCAxLCAzXSk7XG5cbiAgICBleHBlY3RBcnJheXNDbG9zZShhd2FpdCB5LmRhdGEoKSwgWzAuMjQ0NzI4NDcsIDAuMDkwMDMwNTcsIDAuNjY1MjQwOTVdKTtcbiAgICBleHBlY3RBcnJheXNDbG9zZShhd2FpdCB5LnN1bSgpLmRhdGEoKSwgMSk7XG4gIH0pO1xufSk7XG4iXX0=