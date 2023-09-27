/**
 * @license
 * Copyright 2022 Google LLC.
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
/// <amd-module name="@tensorflow/tfjs-core/dist/ops/ragged_range" />
import { Tensor } from '../tensor';
import { NamedTensorMap } from '../tensor_types';
import { TensorLike } from '../types';
/**
 * Returns a RaggedTensor result composed from rtDenseValues and rtNestedSplits,
 * such that result[i] = [starts[i], starts[i] + deltas[i], ..., limits[i]]).
 *
 * @param starts: A Tensor. Must be one of the following types:
 *     'float32', 'int32'. The starts of each range.
 * @param limits: A Tensor. Must have the same type as starts. The limits of
 *     each range.
 * @param deltas: A Tensor. Must have the same type as starts. The deltas of
 *     each range.
 * @return A map with the following properties:
 *     - rtNestedSplits: A Tensor of type 'int32'.
 *     - rtDenseValues: A Tensor. Has the same type as starts.
 */
declare function raggedRange_(starts: Tensor | TensorLike, limits: Tensor | TensorLike, deltas: Tensor | TensorLike): NamedTensorMap;
export declare const raggedRange: typeof raggedRange_;
export {};
