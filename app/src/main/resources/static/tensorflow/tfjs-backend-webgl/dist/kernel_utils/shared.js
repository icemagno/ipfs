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
// Import shared functionality from tfjs-backend-cpu without triggering
// side effects.
// tslint:disable-next-line: no-imports-from-dist
import * as shared from '@tensorflow/tfjs-backend-cpu/dist/shared';
const { addImpl: addImplCPU, bincountImpl: bincountImplCPU, bincountReduceImpl: bincountReduceImplCPU, bitwiseAndImpl: bitwiseAndImplCPU, castImpl: castImplCPU, ceilImpl: ceilImplCPU, concatImpl: concatImplCPU, equalImpl: equalImplCPU, expImpl: expImplCPU, expm1Impl: expm1ImplCPU, floorImpl: floorImplCPU, gatherNdImpl: gatherNdImplCPU, gatherV2Impl: gatherV2ImplCPU, greaterImpl: greaterImplCPU, greaterEqualImpl: greaterEqualImplCPU, lessImpl: lessImplCPU, lessEqualImpl: lessEqualImplCPU, linSpaceImpl: linSpaceImplCPU, logImpl: logImplCPU, maxImpl: maxImplCPU, maximumImpl: maximumImplCPU, minimumImpl: minimumImplCPU, multiplyImpl: multiplyImplCPU, negImpl: negImplCPU, notEqualImpl: notEqualImplCPU, prodImpl: prodImplCPU, raggedGatherImpl: raggedGatherImplCPU, raggedRangeImpl: raggedRangeImplCPU, raggedTensorToTensorImpl: raggedTensorToTensorImplCPU, rangeImpl: rangeImplCPU, rsqrtImpl: rsqrtImplCPU, scatterImpl: scatterImplCPU, sigmoidImpl: sigmoidImplCPU, simpleAbsImpl: simpleAbsImplCPU, sliceImpl: sliceImplCPU, sparseFillEmptyRowsImpl: sparseFillEmptyRowsImplCPU, sparseReshapeImpl: sparseReshapeImplCPU, sparseSegmentReductionImpl: sparseSegmentReductionImplCPU, sqrtImpl: sqrtImplCPU, staticRegexReplaceImpl: staticRegexReplaceImplCPU, stridedSliceImpl: stridedSliceImplCPU, stringNGramsImpl: stringNGramsImplCPU, stringSplitImpl: stringSplitImplCPU, stringToHashBucketFastImpl: stringToHashBucketFastImplCPU, subImpl: subImplCPU, tileImpl: tileImplCPU, topKImpl: topKImplCPU, transposeImpl: transposeImplCPU, uniqueImpl: uniqueImplCPU, } = shared;
export { addImplCPU, bincountImplCPU, bincountReduceImplCPU, bitwiseAndImplCPU, castImplCPU, ceilImplCPU, concatImplCPU, equalImplCPU, expImplCPU, expm1ImplCPU, floorImplCPU, gatherNdImplCPU, gatherV2ImplCPU, greaterEqualImplCPU, greaterImplCPU, lessEqualImplCPU, lessImplCPU, linSpaceImplCPU, logImplCPU, maxImplCPU, maximumImplCPU, minimumImplCPU, multiplyImplCPU, negImplCPU, notEqualImplCPU, prodImplCPU, raggedGatherImplCPU, raggedRangeImplCPU, raggedTensorToTensorImplCPU, scatterImplCPU, sigmoidImplCPU, simpleAbsImplCPU, sliceImplCPU, sparseFillEmptyRowsImplCPU, sparseReshapeImplCPU, sparseSegmentReductionImplCPU, sqrtImplCPU, staticRegexReplaceImplCPU, stridedSliceImplCPU, stringNGramsImplCPU, stringSplitImplCPU, stringToHashBucketFastImplCPU, subImplCPU, rangeImplCPU, rsqrtImplCPU, tileImplCPU, topKImplCPU, transposeImplCPU, uniqueImplCPU, };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vdGZqcy1iYWNrZW5kLXdlYmdsL3NyYy9rZXJuZWxfdXRpbHMvc2hhcmVkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBOzs7Ozs7Ozs7Ozs7Ozs7R0FlRztBQUVILHVFQUF1RTtBQUN2RSxnQkFBZ0I7QUFDaEIsaURBQWlEO0FBQ2pELE9BQU8sS0FBSyxNQUFNLE1BQU0sMENBQTBDLENBQUM7QUFRbkUsTUFBTSxFQUNKLE9BQU8sRUFBRSxVQUFVLEVBQ25CLFlBQVksRUFBRSxlQUFlLEVBQzdCLGtCQUFrQixFQUFFLHFCQUFxQixFQUN6QyxjQUFjLEVBQUUsaUJBQWlCLEVBQ2pDLFFBQVEsRUFBRSxXQUFXLEVBQ3JCLFFBQVEsRUFBRSxXQUFXLEVBQ3JCLFVBQVUsRUFBRSxhQUFhLEVBQ3pCLFNBQVMsRUFBRSxZQUFZLEVBQ3ZCLE9BQU8sRUFBRSxVQUFVLEVBQ25CLFNBQVMsRUFBRSxZQUFZLEVBQ3ZCLFNBQVMsRUFBRSxZQUFZLEVBQ3ZCLFlBQVksRUFBRSxlQUFlLEVBQzdCLFlBQVksRUFBRSxlQUFlLEVBQzdCLFdBQVcsRUFBRSxjQUFjLEVBQzNCLGdCQUFnQixFQUFFLG1CQUFtQixFQUNyQyxRQUFRLEVBQUUsV0FBVyxFQUNyQixhQUFhLEVBQUUsZ0JBQWdCLEVBQy9CLFlBQVksRUFBRSxlQUFlLEVBQzdCLE9BQU8sRUFBRSxVQUFVLEVBQ25CLE9BQU8sRUFBRSxVQUFVLEVBQ25CLFdBQVcsRUFBRSxjQUFjLEVBQzNCLFdBQVcsRUFBRSxjQUFjLEVBQzNCLFlBQVksRUFBRSxlQUFlLEVBQzdCLE9BQU8sRUFBRSxVQUFVLEVBQ25CLFlBQVksRUFBRSxlQUFlLEVBQzdCLFFBQVEsRUFBRSxXQUFXLEVBQ3JCLGdCQUFnQixFQUFFLG1CQUFtQixFQUNyQyxlQUFlLEVBQUUsa0JBQWtCLEVBQ25DLHdCQUF3QixFQUFFLDJCQUEyQixFQUNyRCxTQUFTLEVBQUUsWUFBWSxFQUN2QixTQUFTLEVBQUUsWUFBWSxFQUN2QixXQUFXLEVBQUUsY0FBYyxFQUMzQixXQUFXLEVBQUUsY0FBYyxFQUMzQixhQUFhLEVBQUUsZ0JBQWdCLEVBQy9CLFNBQVMsRUFBRSxZQUFZLEVBQ3ZCLHVCQUF1QixFQUFFLDBCQUEwQixFQUNuRCxpQkFBaUIsRUFBRSxvQkFBb0IsRUFDdkMsMEJBQTBCLEVBQUUsNkJBQTZCLEVBQ3pELFFBQVEsRUFBRSxXQUFXLEVBQ3JCLHNCQUFzQixFQUFFLHlCQUF5QixFQUNqRCxnQkFBZ0IsRUFBRSxtQkFBbUIsRUFDckMsZ0JBQWdCLEVBQUUsbUJBQW1CLEVBQ3JDLGVBQWUsRUFBRSxrQkFBa0IsRUFDbkMsMEJBQTBCLEVBQUUsNkJBQTZCLEVBQ3pELE9BQU8sRUFBRSxVQUFVLEVBQ25CLFFBQVEsRUFBRSxXQUFXLEVBQ3JCLFFBQVEsRUFBRSxXQUFXLEVBQ3JCLGFBQWEsRUFBRSxnQkFBZ0IsRUFDL0IsVUFBVSxFQUFFLGFBQWEsR0FDMUIsR0FBRyxNQUFNLENBQUM7QUFFWCxPQUFPLEVBQ0wsVUFBVSxFQUNWLGVBQWUsRUFDZixxQkFBcUIsRUFDckIsaUJBQWlCLEVBQ2pCLFdBQVcsRUFDWCxXQUFXLEVBQ1gsYUFBYSxFQUNiLFlBQVksRUFDWixVQUFVLEVBQ1YsWUFBWSxFQUNaLFlBQVksRUFDWixlQUFlLEVBQ2YsZUFBZSxFQUNmLG1CQUFtQixFQUNuQixjQUFjLEVBQ2QsZ0JBQWdCLEVBQ2hCLFdBQVcsRUFDWCxlQUFlLEVBQ2YsVUFBVSxFQUNWLFVBQVUsRUFDVixjQUFjLEVBQ2QsY0FBYyxFQUNkLGVBQWUsRUFDZixVQUFVLEVBQ1YsZUFBZSxFQUNmLFdBQVcsRUFDWCxtQkFBbUIsRUFDbkIsa0JBQWtCLEVBQ2xCLDJCQUEyQixFQUMzQixjQUFjLEVBQ2QsY0FBYyxFQUNkLGdCQUFnQixFQUNoQixZQUFZLEVBQ1osMEJBQTBCLEVBQzFCLG9CQUFvQixFQUNwQiw2QkFBNkIsRUFDN0IsV0FBVyxFQUNYLHlCQUF5QixFQUN6QixtQkFBbUIsRUFDbkIsbUJBQW1CLEVBQ25CLGtCQUFrQixFQUNsQiw2QkFBNkIsRUFDN0IsVUFBVSxFQUNWLFlBQVksRUFDWixZQUFZLEVBQ1osV0FBVyxFQUNYLFdBQVcsRUFDWCxnQkFBZ0IsRUFDaEIsYUFBYSxHQUNkLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTEMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuLy8gSW1wb3J0IHNoYXJlZCBmdW5jdGlvbmFsaXR5IGZyb20gdGZqcy1iYWNrZW5kLWNwdSB3aXRob3V0IHRyaWdnZXJpbmdcbi8vIHNpZGUgZWZmZWN0cy5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8taW1wb3J0cy1mcm9tLWRpc3RcbmltcG9ydCAqIGFzIHNoYXJlZCBmcm9tICdAdGVuc29yZmxvdy90ZmpzLWJhY2tlbmQtY3B1L2Rpc3Qvc2hhcmVkJztcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8taW1wb3J0cy1mcm9tLWRpc3RcbmltcG9ydCB7U2ltcGxlQmluYXJ5S2VybmVsSW1wbH0gZnJvbSAnQHRlbnNvcmZsb3cvdGZqcy1iYWNrZW5kLWNwdS9kaXN0L3NoYXJlZCc7XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWltcG9ydHMtZnJvbS1kaXN0XG5pbXBvcnQge1NpbXBsZVVuYXJ5SW1wbH0gZnJvbSAnQHRlbnNvcmZsb3cvdGZqcy1iYWNrZW5kLWNwdS9kaXN0L3V0aWxzL3VuYXJ5X3R5cGVzJztcblxuZXhwb3J0IHR5cGUgU2ltcGxlQmluYXJ5S2VybmVsSW1wbENQVSA9IFNpbXBsZUJpbmFyeUtlcm5lbEltcGw7XG5leHBvcnQgdHlwZSBTaW1wbGVVbmFyeUtlcm5lbEltcGxDUFUgPSBTaW1wbGVVbmFyeUltcGw7XG5jb25zdCB7XG4gIGFkZEltcGw6IGFkZEltcGxDUFUsXG4gIGJpbmNvdW50SW1wbDogYmluY291bnRJbXBsQ1BVLFxuICBiaW5jb3VudFJlZHVjZUltcGw6IGJpbmNvdW50UmVkdWNlSW1wbENQVSxcbiAgYml0d2lzZUFuZEltcGw6IGJpdHdpc2VBbmRJbXBsQ1BVLFxuICBjYXN0SW1wbDogY2FzdEltcGxDUFUsXG4gIGNlaWxJbXBsOiBjZWlsSW1wbENQVSxcbiAgY29uY2F0SW1wbDogY29uY2F0SW1wbENQVSxcbiAgZXF1YWxJbXBsOiBlcXVhbEltcGxDUFUsXG4gIGV4cEltcGw6IGV4cEltcGxDUFUsXG4gIGV4cG0xSW1wbDogZXhwbTFJbXBsQ1BVLFxuICBmbG9vckltcGw6IGZsb29ySW1wbENQVSxcbiAgZ2F0aGVyTmRJbXBsOiBnYXRoZXJOZEltcGxDUFUsXG4gIGdhdGhlclYySW1wbDogZ2F0aGVyVjJJbXBsQ1BVLFxuICBncmVhdGVySW1wbDogZ3JlYXRlckltcGxDUFUsXG4gIGdyZWF0ZXJFcXVhbEltcGw6IGdyZWF0ZXJFcXVhbEltcGxDUFUsXG4gIGxlc3NJbXBsOiBsZXNzSW1wbENQVSxcbiAgbGVzc0VxdWFsSW1wbDogbGVzc0VxdWFsSW1wbENQVSxcbiAgbGluU3BhY2VJbXBsOiBsaW5TcGFjZUltcGxDUFUsXG4gIGxvZ0ltcGw6IGxvZ0ltcGxDUFUsXG4gIG1heEltcGw6IG1heEltcGxDUFUsXG4gIG1heGltdW1JbXBsOiBtYXhpbXVtSW1wbENQVSxcbiAgbWluaW11bUltcGw6IG1pbmltdW1JbXBsQ1BVLFxuICBtdWx0aXBseUltcGw6IG11bHRpcGx5SW1wbENQVSxcbiAgbmVnSW1wbDogbmVnSW1wbENQVSxcbiAgbm90RXF1YWxJbXBsOiBub3RFcXVhbEltcGxDUFUsXG4gIHByb2RJbXBsOiBwcm9kSW1wbENQVSxcbiAgcmFnZ2VkR2F0aGVySW1wbDogcmFnZ2VkR2F0aGVySW1wbENQVSxcbiAgcmFnZ2VkUmFuZ2VJbXBsOiByYWdnZWRSYW5nZUltcGxDUFUsXG4gIHJhZ2dlZFRlbnNvclRvVGVuc29ySW1wbDogcmFnZ2VkVGVuc29yVG9UZW5zb3JJbXBsQ1BVLFxuICByYW5nZUltcGw6IHJhbmdlSW1wbENQVSxcbiAgcnNxcnRJbXBsOiByc3FydEltcGxDUFUsXG4gIHNjYXR0ZXJJbXBsOiBzY2F0dGVySW1wbENQVSxcbiAgc2lnbW9pZEltcGw6IHNpZ21vaWRJbXBsQ1BVLFxuICBzaW1wbGVBYnNJbXBsOiBzaW1wbGVBYnNJbXBsQ1BVLFxuICBzbGljZUltcGw6IHNsaWNlSW1wbENQVSxcbiAgc3BhcnNlRmlsbEVtcHR5Um93c0ltcGw6IHNwYXJzZUZpbGxFbXB0eVJvd3NJbXBsQ1BVLFxuICBzcGFyc2VSZXNoYXBlSW1wbDogc3BhcnNlUmVzaGFwZUltcGxDUFUsXG4gIHNwYXJzZVNlZ21lbnRSZWR1Y3Rpb25JbXBsOiBzcGFyc2VTZWdtZW50UmVkdWN0aW9uSW1wbENQVSxcbiAgc3FydEltcGw6IHNxcnRJbXBsQ1BVLFxuICBzdGF0aWNSZWdleFJlcGxhY2VJbXBsOiBzdGF0aWNSZWdleFJlcGxhY2VJbXBsQ1BVLFxuICBzdHJpZGVkU2xpY2VJbXBsOiBzdHJpZGVkU2xpY2VJbXBsQ1BVLFxuICBzdHJpbmdOR3JhbXNJbXBsOiBzdHJpbmdOR3JhbXNJbXBsQ1BVLFxuICBzdHJpbmdTcGxpdEltcGw6IHN0cmluZ1NwbGl0SW1wbENQVSxcbiAgc3RyaW5nVG9IYXNoQnVja2V0RmFzdEltcGw6IHN0cmluZ1RvSGFzaEJ1Y2tldEZhc3RJbXBsQ1BVLFxuICBzdWJJbXBsOiBzdWJJbXBsQ1BVLFxuICB0aWxlSW1wbDogdGlsZUltcGxDUFUsXG4gIHRvcEtJbXBsOiB0b3BLSW1wbENQVSxcbiAgdHJhbnNwb3NlSW1wbDogdHJhbnNwb3NlSW1wbENQVSxcbiAgdW5pcXVlSW1wbDogdW5pcXVlSW1wbENQVSxcbn0gPSBzaGFyZWQ7XG5cbmV4cG9ydCB7XG4gIGFkZEltcGxDUFUsXG4gIGJpbmNvdW50SW1wbENQVSxcbiAgYmluY291bnRSZWR1Y2VJbXBsQ1BVLFxuICBiaXR3aXNlQW5kSW1wbENQVSxcbiAgY2FzdEltcGxDUFUsXG4gIGNlaWxJbXBsQ1BVLFxuICBjb25jYXRJbXBsQ1BVLFxuICBlcXVhbEltcGxDUFUsXG4gIGV4cEltcGxDUFUsXG4gIGV4cG0xSW1wbENQVSxcbiAgZmxvb3JJbXBsQ1BVLFxuICBnYXRoZXJOZEltcGxDUFUsXG4gIGdhdGhlclYySW1wbENQVSxcbiAgZ3JlYXRlckVxdWFsSW1wbENQVSxcbiAgZ3JlYXRlckltcGxDUFUsXG4gIGxlc3NFcXVhbEltcGxDUFUsXG4gIGxlc3NJbXBsQ1BVLFxuICBsaW5TcGFjZUltcGxDUFUsXG4gIGxvZ0ltcGxDUFUsXG4gIG1heEltcGxDUFUsXG4gIG1heGltdW1JbXBsQ1BVLFxuICBtaW5pbXVtSW1wbENQVSxcbiAgbXVsdGlwbHlJbXBsQ1BVLFxuICBuZWdJbXBsQ1BVLFxuICBub3RFcXVhbEltcGxDUFUsXG4gIHByb2RJbXBsQ1BVLFxuICByYWdnZWRHYXRoZXJJbXBsQ1BVLFxuICByYWdnZWRSYW5nZUltcGxDUFUsXG4gIHJhZ2dlZFRlbnNvclRvVGVuc29ySW1wbENQVSxcbiAgc2NhdHRlckltcGxDUFUsXG4gIHNpZ21vaWRJbXBsQ1BVLFxuICBzaW1wbGVBYnNJbXBsQ1BVLFxuICBzbGljZUltcGxDUFUsXG4gIHNwYXJzZUZpbGxFbXB0eVJvd3NJbXBsQ1BVLFxuICBzcGFyc2VSZXNoYXBlSW1wbENQVSxcbiAgc3BhcnNlU2VnbWVudFJlZHVjdGlvbkltcGxDUFUsXG4gIHNxcnRJbXBsQ1BVLFxuICBzdGF0aWNSZWdleFJlcGxhY2VJbXBsQ1BVLFxuICBzdHJpZGVkU2xpY2VJbXBsQ1BVLFxuICBzdHJpbmdOR3JhbXNJbXBsQ1BVLFxuICBzdHJpbmdTcGxpdEltcGxDUFUsXG4gIHN0cmluZ1RvSGFzaEJ1Y2tldEZhc3RJbXBsQ1BVLFxuICBzdWJJbXBsQ1BVLFxuICByYW5nZUltcGxDUFUsXG4gIHJzcXJ0SW1wbENQVSxcbiAgdGlsZUltcGxDUFUsXG4gIHRvcEtJbXBsQ1BVLFxuICB0cmFuc3Bvc2VJbXBsQ1BVLFxuICB1bmlxdWVJbXBsQ1BVLFxufTtcbiJdfQ==