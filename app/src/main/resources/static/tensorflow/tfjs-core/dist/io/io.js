/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
// Importing local_storage and indexed_db is necessary for the routers to be
// registered.
import './indexed_db';
import './local_storage';
import { browserFiles } from './browser_files';
import { browserHTTPRequest, http, isHTTPScheme } from './http';
import { concatenateArrayBuffers, decodeWeights, encodeWeights, getModelArtifactsForJSON, getModelArtifactsForJSONSync, getModelArtifactsInfoForJSON, getWeightSpecs } from './io_utils';
import { fromMemory, fromMemorySync, withSaveHandler, withSaveHandlerSync } from './passthrough';
import { getLoadHandlers, getSaveHandlers, registerLoadRouter, registerSaveRouter } from './router_registry';
import { loadWeights, weightsLoaderFactory } from './weights_loader';
import { CompositeArrayBuffer } from './composite_array_buffer';
export { copyModel, listModels, moveModel, removeModel } from './model_management';
export { browserFiles, browserHTTPRequest, CompositeArrayBuffer, concatenateArrayBuffers, decodeWeights, encodeWeights, fromMemory, fromMemorySync, getLoadHandlers, getModelArtifactsForJSON, getModelArtifactsForJSONSync, getModelArtifactsInfoForJSON, getSaveHandlers, getWeightSpecs, http, isHTTPScheme, loadWeights, registerLoadRouter, registerSaveRouter, weightsLoaderFactory, withSaveHandler, withSaveHandlerSync, };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi90ZmpzLWNvcmUvc3JjL2lvL2lvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7R0FlRztBQUVILDRFQUE0RTtBQUM1RSxjQUFjO0FBQ2QsT0FBTyxjQUFjLENBQUM7QUFDdEIsT0FBTyxpQkFBaUIsQ0FBQztBQUV6QixPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLGtCQUFrQixFQUFFLElBQUksRUFBRSxZQUFZLEVBQUMsTUFBTSxRQUFRLENBQUM7QUFDOUQsT0FBTyxFQUFDLHVCQUF1QixFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsd0JBQXdCLEVBQUUsNEJBQTRCLEVBQUUsNEJBQTRCLEVBQUUsY0FBYyxFQUFDLE1BQU0sWUFBWSxDQUFDO0FBQ3ZMLE9BQU8sRUFBQyxVQUFVLEVBQUUsY0FBYyxFQUFFLGVBQWUsRUFBRSxtQkFBbUIsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMvRixPQUFPLEVBQUMsZUFBZSxFQUFFLGVBQWUsRUFBRSxrQkFBa0IsRUFBRSxrQkFBa0IsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBRTNHLE9BQU8sRUFBQyxXQUFXLEVBQUUsb0JBQW9CLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUNuRSxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUU5RCxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFDakYsT0FBTyxFQUNMLFlBQVksRUFDWixrQkFBa0IsRUFDbEIsb0JBQW9CLEVBQ3BCLHVCQUF1QixFQUN2QixhQUFhLEVBQ2IsYUFBYSxFQUNiLFVBQVUsRUFDVixjQUFjLEVBQ2QsZUFBZSxFQUNmLHdCQUF3QixFQUN4Qiw0QkFBNEIsRUFDNUIsNEJBQTRCLEVBQzVCLGVBQWUsRUFDZixjQUFjLEVBQ2QsSUFBSSxFQUdKLFlBQVksRUFHWixXQUFXLEVBTVgsa0JBQWtCLEVBQ2xCLGtCQUFrQixFQVFsQixvQkFBb0IsRUFHcEIsZUFBZSxFQUNmLG1CQUFtQixHQUNwQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG4vLyBJbXBvcnRpbmcgbG9jYWxfc3RvcmFnZSBhbmQgaW5kZXhlZF9kYiBpcyBuZWNlc3NhcnkgZm9yIHRoZSByb3V0ZXJzIHRvIGJlXG4vLyByZWdpc3RlcmVkLlxuaW1wb3J0ICcuL2luZGV4ZWRfZGInO1xuaW1wb3J0ICcuL2xvY2FsX3N0b3JhZ2UnO1xuXG5pbXBvcnQge2Jyb3dzZXJGaWxlc30gZnJvbSAnLi9icm93c2VyX2ZpbGVzJztcbmltcG9ydCB7YnJvd3NlckhUVFBSZXF1ZXN0LCBodHRwLCBpc0hUVFBTY2hlbWV9IGZyb20gJy4vaHR0cCc7XG5pbXBvcnQge2NvbmNhdGVuYXRlQXJyYXlCdWZmZXJzLCBkZWNvZGVXZWlnaHRzLCBlbmNvZGVXZWlnaHRzLCBnZXRNb2RlbEFydGlmYWN0c0ZvckpTT04sIGdldE1vZGVsQXJ0aWZhY3RzRm9ySlNPTlN5bmMsIGdldE1vZGVsQXJ0aWZhY3RzSW5mb0ZvckpTT04sIGdldFdlaWdodFNwZWNzfSBmcm9tICcuL2lvX3V0aWxzJztcbmltcG9ydCB7ZnJvbU1lbW9yeSwgZnJvbU1lbW9yeVN5bmMsIHdpdGhTYXZlSGFuZGxlciwgd2l0aFNhdmVIYW5kbGVyU3luY30gZnJvbSAnLi9wYXNzdGhyb3VnaCc7XG5pbXBvcnQge2dldExvYWRIYW5kbGVycywgZ2V0U2F2ZUhhbmRsZXJzLCByZWdpc3RlckxvYWRSb3V0ZXIsIHJlZ2lzdGVyU2F2ZVJvdXRlcn0gZnJvbSAnLi9yb3V0ZXJfcmVnaXN0cnknO1xuaW1wb3J0IHtJT0hhbmRsZXIsIElPSGFuZGxlclN5bmMsIExvYWRIYW5kbGVyLCBMb2FkT3B0aW9ucywgTW9kZWxBcnRpZmFjdHMsIE1vZGVsQXJ0aWZhY3RzSW5mbywgTW9kZWxKU09OLCBNb2RlbFN0b3JlTWFuYWdlciwgT25Qcm9ncmVzc0NhbGxiYWNrLCBSZXF1ZXN0RGV0YWlscywgU2F2ZUNvbmZpZywgU2F2ZUhhbmRsZXIsIFNhdmVSZXN1bHQsIFRyYWluaW5nQ29uZmlnLCBXZWlnaHRHcm91cCwgV2VpZ2h0c01hbmlmZXN0Q29uZmlnLCBXZWlnaHRzTWFuaWZlc3RFbnRyeSwgV2VpZ2h0RGF0YX0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQge2xvYWRXZWlnaHRzLCB3ZWlnaHRzTG9hZGVyRmFjdG9yeX0gZnJvbSAnLi93ZWlnaHRzX2xvYWRlcic7XG5pbXBvcnQge0NvbXBvc2l0ZUFycmF5QnVmZmVyfSBmcm9tICcuL2NvbXBvc2l0ZV9hcnJheV9idWZmZXInO1xuXG5leHBvcnQge2NvcHlNb2RlbCwgbGlzdE1vZGVscywgbW92ZU1vZGVsLCByZW1vdmVNb2RlbH0gZnJvbSAnLi9tb2RlbF9tYW5hZ2VtZW50JztcbmV4cG9ydCB7XG4gIGJyb3dzZXJGaWxlcyxcbiAgYnJvd3NlckhUVFBSZXF1ZXN0LFxuICBDb21wb3NpdGVBcnJheUJ1ZmZlcixcbiAgY29uY2F0ZW5hdGVBcnJheUJ1ZmZlcnMsXG4gIGRlY29kZVdlaWdodHMsXG4gIGVuY29kZVdlaWdodHMsXG4gIGZyb21NZW1vcnksXG4gIGZyb21NZW1vcnlTeW5jLFxuICBnZXRMb2FkSGFuZGxlcnMsXG4gIGdldE1vZGVsQXJ0aWZhY3RzRm9ySlNPTixcbiAgZ2V0TW9kZWxBcnRpZmFjdHNGb3JKU09OU3luYyxcbiAgZ2V0TW9kZWxBcnRpZmFjdHNJbmZvRm9ySlNPTixcbiAgZ2V0U2F2ZUhhbmRsZXJzLFxuICBnZXRXZWlnaHRTcGVjcyxcbiAgaHR0cCxcbiAgSU9IYW5kbGVyLFxuICBJT0hhbmRsZXJTeW5jLFxuICBpc0hUVFBTY2hlbWUsXG4gIExvYWRIYW5kbGVyLFxuICBMb2FkT3B0aW9ucyxcbiAgbG9hZFdlaWdodHMsXG4gIE1vZGVsQXJ0aWZhY3RzLFxuICBNb2RlbEFydGlmYWN0c0luZm8sXG4gIE1vZGVsSlNPTixcbiAgTW9kZWxTdG9yZU1hbmFnZXIsXG4gIE9uUHJvZ3Jlc3NDYWxsYmFjayxcbiAgcmVnaXN0ZXJMb2FkUm91dGVyLFxuICByZWdpc3RlclNhdmVSb3V0ZXIsXG4gIFJlcXVlc3REZXRhaWxzLFxuICBTYXZlQ29uZmlnLFxuICBTYXZlSGFuZGxlcixcbiAgU2F2ZVJlc3VsdCxcbiAgVHJhaW5pbmdDb25maWcsXG4gIFdlaWdodERhdGEsXG4gIFdlaWdodEdyb3VwLFxuICB3ZWlnaHRzTG9hZGVyRmFjdG9yeSxcbiAgV2VpZ2h0c01hbmlmZXN0Q29uZmlnLFxuICBXZWlnaHRzTWFuaWZlc3RFbnRyeSxcbiAgd2l0aFNhdmVIYW5kbGVyLFxuICB3aXRoU2F2ZUhhbmRsZXJTeW5jLFxufTtcbiJdfQ==