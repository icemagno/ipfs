/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
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
'use strict';

var tf = require('@tensorflow/tfjs-core');

function _interopNamespaceDefault(e) {
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n.default = e;
    return n;
}

var tf__namespace = /*#__PURE__*/_interopNamespaceDefault(tf);

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */
var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p))
                d[p] = b[p]; };
    return extendStatics(d, b);
};
function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try {
            step(generator.next(value));
        }
        catch (e) {
            reject(e);
        } }
        function rejected(value) { try {
            step(generator["throw"](value));
        }
        catch (e) {
            reject(e);
        } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = { label: 0, sent: function () { if (t[0] & 1)
            throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f)
            throw new TypeError("Generator is already executing.");
        while (_)
            try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                    return t;
                if (y = 0, t)
                    op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0:
                    case 1:
                        t = op;
                        break;
                    case 4:
                        _.label++;
                        return { value: op[1], done: false };
                    case 5:
                        _.label++;
                        y = op[1];
                        op = [0];
                        continue;
                    case 7:
                        op = _.ops.pop();
                        _.trys.pop();
                        continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                            _ = 0;
                            continue;
                        }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                            _.label = op[1];
                            break;
                        }
                        if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];
                            t = op;
                            break;
                        }
                        if (t && _.label < t[2]) {
                            _.label = t[2];
                            _.ops.push(op);
                            break;
                        }
                        if (t[2])
                            _.ops.pop();
                        _.trys.pop();
                        continue;
                }
                op = body.call(thisArg, _);
            }
            catch (e) {
                op = [6, e];
                y = 0;
            }
            finally {
                f = t = 0;
            }
        if (op[0] & 5)
            throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
    }
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m)
        return m.call(o);
    if (o && typeof o.length === "number")
        return {
            next: function () {
                if (o && i >= o.length)
                    o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m)
        return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
            ar.push(r.value);
    }
    catch (error) {
        e = { error: error };
    }
    finally {
        try {
            if (r && !r.done && (m = i["return"]))
                m.call(i);
        }
        finally {
            if (e)
                throw e.error;
        }
    }
    return ar;
}
function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2)
        for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
                if (!ar)
                    ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
            }
        }
    return to.concat(ar || Array.prototype.slice.call(from));
}

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
var contexts = {};
var WEBGL_ATTRIBUTES = {
    alpha: false,
    antialias: false,
    premultipliedAlpha: false,
    preserveDrawingBuffer: false,
    depth: false,
    stencil: false,
    failIfMajorPerformanceCaveat: true
};
function setWebGLContext(webGLVersion, gl) {
    contexts[webGLVersion] = gl;
}
function getWebGLContext(webGLVersion, customCanvas) {
    if (!(webGLVersion in contexts) || customCanvas != null) {
        var newCtx = getWebGLRenderingContext(webGLVersion, customCanvas);
        if (newCtx !== null) {
            contexts[webGLVersion] = newCtx;
        }
        else {
            console.log('Could not get context for WebGL version', webGLVersion);
            return null;
        }
    }
    var gl = contexts[webGLVersion];
    if (gl == null || gl.isContextLost()) {
        delete contexts[webGLVersion];
        return getWebGLContext(webGLVersion);
    }
    gl.disable(gl.DEPTH_TEST);
    gl.disable(gl.STENCIL_TEST);
    gl.disable(gl.BLEND);
    gl.disable(gl.DITHER);
    gl.disable(gl.POLYGON_OFFSET_FILL);
    gl.disable(gl.SAMPLE_COVERAGE);
    gl.enable(gl.SCISSOR_TEST);
    gl.enable(gl.CULL_FACE);
    gl.cullFace(gl.BACK);
    return contexts[webGLVersion];
}
function createCanvas(webGLVersion) {
    // Use canvas element for Safari, since its offscreen canvas does not support
    // fencing.
    if (!tf.env().getBool('IS_SAFARI') && typeof OffscreenCanvas !== 'undefined' &&
        webGLVersion === 2) {
        return new OffscreenCanvas(300, 150);
    }
    else if (typeof document !== 'undefined') {
        return document.createElement('canvas');
    }
    else {
        throw new Error('Cannot create a canvas in this context');
    }
}
function getWebGLRenderingContext(webGLVersion, customCanvas) {
    if (webGLVersion !== 1 && webGLVersion !== 2) {
        throw new Error('Cannot get WebGL rendering context, WebGL is disabled.');
    }
    var canvas = customCanvas == null ? createCanvas(webGLVersion) : customCanvas;
    canvas.addEventListener('webglcontextlost', function (ev) {
        ev.preventDefault();
        delete contexts[webGLVersion];
    }, false);
    if (tf.env().getBool('SOFTWARE_WEBGL_ENABLED')) {
        WEBGL_ATTRIBUTES.failIfMajorPerformanceCaveat = false;
    }
    if (webGLVersion === 1) {
        return (
        // tslint:disable-next-line
        canvas.getContext('webgl', WEBGL_ATTRIBUTES) ||
            canvas
                .getContext('experimental-webgl', WEBGL_ATTRIBUTES));
    }
    return canvas.getContext('webgl2', WEBGL_ATTRIBUTES);
}

var PackingScheme;
(function (PackingScheme) {
    /**
     * All values in a single texel are densely packed without any constraints.
     *
     * This is how the shader encodes a tensor with shape = [2, 3, 4]
     * (indices are [batch, row, col]).
     *
     * 000|001   010|011   020|021
     * -------   -------   -------
     * 002|003   012|013   022|023
     *
     * 100|101   110|111   120|121
     * -------   -------   -------
     * 102|103   112|113   122|123
     *
     */
    PackingScheme[PackingScheme["DENSE"] = 0] = "DENSE";
    /**
     * Single texels contain only values from the same batch, and from adjacent
     * rows and columns.
     *
     * This is how the shader encodes a tensor with shape = [2, 3, 5]
     * (indices are [batch, row, col]).
     *
     * 000|001   002|003   004|xxx   020|021   022|023   024|xxx
     * -------   -------   -------   -------   -------   -------
     * 010|011   012|013   014|xxx   xxx|xxx   xxx|xxx   xxx|xxx
     *
     * 100|101   102|103   104|xxx   120|121   122|123   124|xxx
     * -------   -------   -------   -------   -------   -------
     * 110|111   112|113   114|xxx   xxx|xxx   xxx|xxx   xxx|xxx
     *
     */
    PackingScheme[PackingScheme["SHARED_BATCH"] = 1] = "SHARED_BATCH";
})(PackingScheme || (PackingScheme = {}));
var TextureUsage;
(function (TextureUsage) {
    TextureUsage[TextureUsage["RENDER"] = 0] = "RENDER";
    TextureUsage[TextureUsage["UPLOAD"] = 1] = "UPLOAD";
    TextureUsage[TextureUsage["PIXELS"] = 2] = "PIXELS";
    TextureUsage[TextureUsage["DOWNLOAD"] = 3] = "DOWNLOAD";
})(TextureUsage || (TextureUsage = {}));
var PhysicalTextureType;
(function (PhysicalTextureType) {
    PhysicalTextureType[PhysicalTextureType["UNPACKED_FLOAT16"] = 0] = "UNPACKED_FLOAT16";
    PhysicalTextureType[PhysicalTextureType["UNPACKED_FLOAT32"] = 1] = "UNPACKED_FLOAT32";
    PhysicalTextureType[PhysicalTextureType["PACKED_4X1_UNSIGNED_BYTE"] = 2] = "PACKED_4X1_UNSIGNED_BYTE";
    PhysicalTextureType[PhysicalTextureType["PACKED_2X2_FLOAT32"] = 3] = "PACKED_2X2_FLOAT32";
    PhysicalTextureType[PhysicalTextureType["PACKED_2X2_FLOAT16"] = 4] = "PACKED_2X2_FLOAT16";
})(PhysicalTextureType || (PhysicalTextureType = {}));
function getUnpackedMatrixTextureShapeWidthHeight(rows, columns) {
    return [columns, rows];
}
function getUnpackedArraySizeFromMatrixSize(matrixSize, channelsPerTexture) {
    return matrixSize * channelsPerTexture;
}
/**
 * Get shape for densely packed RGBA texture.
 */
function getDenseTexShape(shape) {
    var size = tf.util.sizeFromShape(shape);
    var texelsNeeded = Math.ceil(size / 4);
    return tf.util.sizeToSquarishShape(texelsNeeded);
}
function getPackedMatrixTextureShapeWidthHeight(rows, columns) {
    return [
        Math.max(1, Math.ceil(columns / 2)), Math.max(1, Math.ceil(rows / 2))
    ];
}
function getPackedRGBAArraySizeFromMatrixShape(rows, columns) {
    var _a = __read(getPackedMatrixTextureShapeWidthHeight(rows, columns), 2), w = _a[0], h = _a[1];
    return w * h * 4;
}
function getTextureConfig(
// tslint:disable-next-line:no-any
gl, textureHalfFloatExtension) {
    // tslint:disable-next-line:no-any
    var glany = gl;
    var internalFormatFloat;
    var internalFormatHalfFloat;
    var internalFormatPackedHalfFloat;
    var internalFormatPackedFloat;
    var textureFormatFloat;
    var downloadTextureFormat;
    var downloadUnpackNumChannels;
    var defaultNumChannels;
    var textureTypeHalfFloat;
    var textureTypeFloat;
    if (tf.env().getNumber('WEBGL_VERSION') === 2) {
        internalFormatFloat = glany.R32F;
        internalFormatHalfFloat = glany.R16F;
        internalFormatPackedHalfFloat = glany.RGBA16F;
        internalFormatPackedFloat = glany.RGBA32F;
        textureFormatFloat = glany.RED;
        downloadUnpackNumChannels = 4;
        defaultNumChannels = 1;
        textureTypeHalfFloat = glany.HALF_FLOAT;
        textureTypeFloat = glany.FLOAT;
        downloadTextureFormat = glany.RGBA8;
    }
    else {
        internalFormatFloat = gl.RGBA;
        internalFormatHalfFloat = gl.RGBA;
        internalFormatPackedHalfFloat = gl.RGBA;
        internalFormatPackedFloat = glany.RGBA;
        textureFormatFloat = gl.RGBA;
        downloadUnpackNumChannels = 4;
        defaultNumChannels = 4;
        textureTypeHalfFloat = textureHalfFloatExtension != null ?
            textureHalfFloatExtension.HALF_FLOAT_OES :
            null;
        textureTypeFloat = gl.FLOAT;
        downloadTextureFormat = gl.RGBA;
    }
    return {
        internalFormatFloat: internalFormatFloat,
        internalFormatHalfFloat: internalFormatHalfFloat,
        internalFormatPackedHalfFloat: internalFormatPackedHalfFloat,
        internalFormatPackedFloat: internalFormatPackedFloat,
        textureFormatFloat: textureFormatFloat,
        downloadTextureFormat: downloadTextureFormat,
        downloadUnpackNumChannels: downloadUnpackNumChannels,
        defaultNumChannels: defaultNumChannels,
        textureTypeHalfFloat: textureTypeHalfFloat,
        textureTypeFloat: textureTypeFloat
    };
}

function callAndCheck(gl, func) {
    var returnValue = func();
    if (tf.env().getBool('DEBUG')) {
        checkWebGLError(gl);
    }
    return returnValue;
}
function checkWebGLError(gl) {
    var error = gl.getError();
    if (error !== gl.NO_ERROR) {
        throw new Error('WebGL Error: ' + getWebGLErrorMessage(gl, error));
    }
}
// https://en.wikipedia.org/wiki/Half-precision_floating-point_format
var MIN_FLOAT16 = 5.96e-8;
var MAX_FLOAT16 = 65504;
function canBeRepresented(num) {
    if (tf.env().getBool('WEBGL_RENDER_FLOAT32_ENABLED') || num === 0 ||
        (MIN_FLOAT16 < Math.abs(num) && Math.abs(num) < MAX_FLOAT16)) {
        return true;
    }
    return false;
}
function getWebGLErrorMessage(gl, status) {
    switch (status) {
        case gl.NO_ERROR:
            return 'NO_ERROR';
        case gl.INVALID_ENUM:
            return 'INVALID_ENUM';
        case gl.INVALID_VALUE:
            return 'INVALID_VALUE';
        case gl.INVALID_OPERATION:
            return 'INVALID_OPERATION';
        case gl.INVALID_FRAMEBUFFER_OPERATION:
            return 'INVALID_FRAMEBUFFER_OPERATION';
        case gl.OUT_OF_MEMORY:
            return 'OUT_OF_MEMORY';
        case gl.CONTEXT_LOST_WEBGL:
            return 'CONTEXT_LOST_WEBGL';
        default:
            return "Unknown error code ".concat(status);
    }
}
function getExtensionOrThrow(gl, extensionName) {
    return throwIfNull(gl, function () { return gl.getExtension(extensionName); }, 'Extension "' + extensionName + '" not supported on this browser.');
}
function createVertexShader$1(gl, vertexShaderSource) {
    var vertexShader = throwIfNull(gl, function () { return gl.createShader(gl.VERTEX_SHADER); }, 'Unable to create vertex WebGLShader.');
    callAndCheck(gl, function () { return gl.shaderSource(vertexShader, vertexShaderSource); });
    callAndCheck(gl, function () { return gl.compileShader(vertexShader); });
    if (gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS) === false) {
        console.log(gl.getShaderInfoLog(vertexShader));
        throw new Error('Failed to compile vertex shader.');
    }
    return vertexShader;
}
function createFragmentShader(gl, fragmentShaderSource) {
    var fragmentShader = throwIfNull(gl, function () { return gl.createShader(gl.FRAGMENT_SHADER); }, 'Unable to create fragment WebGLShader.');
    callAndCheck(gl, function () { return gl.shaderSource(fragmentShader, fragmentShaderSource); });
    callAndCheck(gl, function () { return gl.compileShader(fragmentShader); });
    if (tf.env().get('ENGINE_COMPILE_ONLY')) {
        return fragmentShader;
    }
    if (gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS) === false) {
        logShaderSourceAndInfoLog(fragmentShaderSource, gl.getShaderInfoLog(fragmentShader));
        throw new Error('Failed to compile fragment shader.');
    }
    return fragmentShader;
}
var lineNumberRegex = /ERROR: [0-9]+:([0-9]+):/g;
function logShaderSourceAndInfoLog(shaderSource, shaderInfoLog) {
    var lineNumberRegexResult = lineNumberRegex.exec(shaderInfoLog);
    if (lineNumberRegexResult == null) {
        console.log("Couldn't parse line number in error: ".concat(shaderInfoLog));
        console.log(shaderSource);
        return;
    }
    var lineNumber = +lineNumberRegexResult[1];
    var shaderLines = shaderSource.split('\n');
    var pad = shaderLines.length.toString().length + 2;
    var linesWithLineNumbers = shaderLines.map(function (line, lineNumber) { return tf.util.rightPad((lineNumber + 1).toString(), pad) + line; });
    var maxLineLength = 0;
    for (var i = 0; i < linesWithLineNumbers.length; i++) {
        maxLineLength = Math.max(linesWithLineNumbers[i].length, maxLineLength);
    }
    var beforeErrorLines = linesWithLineNumbers.slice(0, lineNumber - 1);
    var errorLine = linesWithLineNumbers.slice(lineNumber - 1, lineNumber);
    var afterErrorLines = linesWithLineNumbers.slice(lineNumber);
    console.log(beforeErrorLines.join('\n'));
    console.log(shaderInfoLog.split('\n')[0]);
    console.log("%c ".concat(tf.util.rightPad(errorLine[0], maxLineLength)), 'border:1px solid red; background-color:#e3d2d2; color:#a61717');
    console.log(afterErrorLines.join('\n'));
}
function createProgram(gl) {
    return throwIfNull(gl, function () { return gl.createProgram(); }, 'Unable to create WebGLProgram.');
}
function linkProgram(gl, program) {
    callAndCheck(gl, function () { return gl.linkProgram(program); });
    if (tf.env().get('ENGINE_COMPILE_ONLY')) {
        return;
    }
    if (gl.getProgramParameter(program, gl.LINK_STATUS) === false) {
        console.log(gl.getProgramInfoLog(program));
        throw new Error('Failed to link vertex and fragment shaders.');
    }
}
/// validateProgram is effectively "If we `useProgram(program); drawArrays();`,
/// give feedback in log about perf/correctness warnings or errors that would
/// occur."
/// So make sure we set up all vertex/texture/sampler/uniform data before
/// calling validateProgram!
function validateProgram(gl, program) {
    callAndCheck(gl, function () { return gl.validateProgram(program); });
    if (gl.getProgramParameter(program, gl.VALIDATE_STATUS) === false) {
        console.log(gl.getProgramInfoLog(program));
        throw new Error('Shader program validation failed.');
    }
}
function createStaticVertexBuffer(gl, data) {
    var buffer = throwIfNull(gl, function () { return gl.createBuffer(); }, 'Unable to create WebGLBuffer');
    callAndCheck(gl, function () { return gl.bindBuffer(gl.ARRAY_BUFFER, buffer); });
    callAndCheck(gl, function () { return gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW); });
    return buffer;
}
function createStaticIndexBuffer(gl, data) {
    var buffer = throwIfNull(gl, function () { return gl.createBuffer(); }, 'Unable to create WebGLBuffer');
    callAndCheck(gl, function () { return gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffer); });
    callAndCheck(gl, function () { return gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, data, gl.STATIC_DRAW); });
    return buffer;
}
function getNumChannels() {
    if (tf.env().getNumber('WEBGL_VERSION') === 2) {
        return 1;
    }
    return 4;
}
function createTexture(gl) {
    return throwIfNull(gl, function () { return gl.createTexture(); }, 'Unable to create WebGLTexture.');
}
function validateTextureSize(width, height) {
    var maxTextureSize = tf.env().getNumber('WEBGL_MAX_TEXTURE_SIZE');
    if ((width <= 0) || (height <= 0)) {
        var requested = "[".concat(width, "x").concat(height, "]");
        throw new Error('Requested texture size ' + requested + ' is invalid.');
    }
    if ((width > maxTextureSize) || (height > maxTextureSize)) {
        var requested = "[".concat(width, "x").concat(height, "]");
        var max = "[".concat(maxTextureSize, "x").concat(maxTextureSize, "]");
        throw new Error('Requested texture size ' + requested +
            ' greater than WebGL maximum on this browser / GPU ' + max + '.');
    }
}
function createFramebuffer(gl) {
    return throwIfNull(gl, function () { return gl.createFramebuffer(); }, 'Unable to create WebGLFramebuffer.');
}
function bindVertexBufferToProgramAttribute(gl, program, attribute, buffer, arrayEntriesPerItem, itemStrideInBytes, itemOffsetInBytes) {
    var loc = gl.getAttribLocation(program, attribute);
    if (loc === -1) {
        // The GPU compiler decided to strip out this attribute because it's unused,
        // thus no need to bind.
        return false;
    }
    callAndCheck(gl, function () { return gl.bindBuffer(gl.ARRAY_BUFFER, buffer); });
    callAndCheck(gl, function () { return gl.vertexAttribPointer(loc, arrayEntriesPerItem, gl.FLOAT, false, itemStrideInBytes, itemOffsetInBytes); });
    callAndCheck(gl, function () { return gl.enableVertexAttribArray(loc); });
    return true;
}
function bindTextureUnit(gl, texture, textureUnit) {
    validateTextureUnit(gl, textureUnit);
    callAndCheck(gl, function () { return gl.activeTexture(gl.TEXTURE0 + textureUnit); });
    callAndCheck(gl, function () { return gl.bindTexture(gl.TEXTURE_2D, texture); });
}
function unbindTextureUnit(gl, textureUnit) {
    validateTextureUnit(gl, textureUnit);
    callAndCheck(gl, function () { return gl.activeTexture(gl.TEXTURE0 + textureUnit); });
    callAndCheck(gl, function () { return gl.bindTexture(gl.TEXTURE_2D, null); });
}
function getProgramUniformLocationOrThrow(gl, program, uniformName) {
    return throwIfNull(gl, function () { return gl.getUniformLocation(program, uniformName); }, 'uniform "' + uniformName + '" not present in program.');
}
function getProgramUniformLocation(gl, program, uniformName) {
    return gl.getUniformLocation(program, uniformName);
}
function bindTextureToProgramUniformSampler(gl, texture, uniformSamplerLocation, textureUnit) {
    callAndCheck(gl, function () { return bindTextureUnit(gl, texture, textureUnit); });
    callAndCheck(gl, function () { return gl.uniform1i(uniformSamplerLocation, textureUnit); });
}
function bindCanvasToFramebuffer(gl) {
    callAndCheck(gl, function () { return gl.bindFramebuffer(gl.FRAMEBUFFER, null); });
    callAndCheck(gl, function () { return gl.viewport(0, 0, gl.canvas.width, gl.canvas.height); });
    callAndCheck(gl, function () { return gl.scissor(0, 0, gl.canvas.width, gl.canvas.height); });
}
function bindColorTextureToFramebuffer(gl, texture, framebuffer) {
    callAndCheck(gl, function () { return gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer); });
    callAndCheck(gl, function () { return gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0); });
}
function unbindColorTextureFromFramebuffer(gl, framebuffer) {
    callAndCheck(gl, function () { return gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer); });
    callAndCheck(gl, function () { return gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, null, 0); });
}
function validateFramebuffer(gl) {
    var status = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
    if (status !== gl.FRAMEBUFFER_COMPLETE) {
        throw new Error('Error binding framebuffer: ' + getFramebufferErrorMessage(gl, status));
    }
}
function getFramebufferErrorMessage(gl, status) {
    switch (status) {
        case gl.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:
            return 'FRAMEBUFFER_INCOMPLETE_ATTACHMENT';
        case gl.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:
            return 'FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT';
        case gl.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:
            return 'FRAMEBUFFER_INCOMPLETE_DIMENSIONS';
        case gl.FRAMEBUFFER_UNSUPPORTED:
            return 'FRAMEBUFFER_UNSUPPORTED';
        default:
            return "unknown error ".concat(status);
    }
}
function throwIfNull(gl, returnTOrNull, failureMessage) {
    var tOrNull = callAndCheck(gl, function () { return returnTOrNull(); });
    if (tOrNull == null) {
        throw new Error(failureMessage);
    }
    return tOrNull;
}
function validateTextureUnit(gl, textureUnit) {
    var maxTextureUnit = gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS - 1;
    var glTextureUnit = textureUnit + gl.TEXTURE0;
    if (glTextureUnit < gl.TEXTURE0 || glTextureUnit > maxTextureUnit) {
        var textureUnitRange = "[gl.TEXTURE0, gl.TEXTURE".concat(maxTextureUnit, "]");
        throw new Error("textureUnit must be in ".concat(textureUnitRange, "."));
    }
}
function getBatchDim(shape, dimsToSkip) {
    if (dimsToSkip === void 0) { dimsToSkip = 2; }
    return tf.util.sizeFromShape(shape.slice(0, shape.length - dimsToSkip));
}
function getRowsCols(shape) {
    if (shape.length === 0) {
        throw Error('Cannot get rows and columns of an empty shape array.');
    }
    return [
        shape.length > 1 ? shape[shape.length - 2] : 1, shape[shape.length - 1]
    ];
}
function getShapeAs3D(shape) {
    var shapeAs3D = [1, 1, 1];
    var isScalar = shape.length === 0 || (shape.length === 1 && shape[0] === 1);
    if (!isScalar) {
        shapeAs3D = __spreadArray([getBatchDim(shape)], __read(getRowsCols(shape)), false);
    }
    return shapeAs3D;
}
function getTextureShapeFromLogicalShape(logShape, isPacked) {
    var _a;
    if (isPacked === void 0) { isPacked = false; }
    var maxTexSize = tf.env().getNumber('WEBGL_MAX_TEXTURE_SIZE');
    var maxSizeForNarrowTex = tf.env().getNumber('WEBGL_MAX_SIZE_FOR_NARROW_TEXTURE');
    if (maxSizeForNarrowTex === Infinity &&
        tf.env().getBool('WEBGL_AUTO_SQUARIFY_NARROW_TEXTURE_SHAPE')) {
        maxSizeForNarrowTex = maxTexSize / 2;
    }
    if (isPacked) {
        maxTexSize = maxTexSize * 2;
        maxSizeForNarrowTex = maxSizeForNarrowTex * 2;
        // This logic ensures we accurately count the number of packed texels needed
        // to accommodate the tensor. We can only pack values in the same texel if
        // they are from adjacent pairs of rows/cols within the same batch. So if a
        // tensor has 3 rows, we pretend it has 4 rows in order to account for the
        // fact that the texels containing the third row are half empty.
        logShape = logShape.map(function (d, i) { return i >= logShape.length - 2 ?
            tf.util.nearestLargerEven(logShape[i]) :
            logShape[i]; });
        // Packed texture height is at least 2 (the channel height of a single
        // texel).
        if (logShape.length === 1) {
            logShape = [2, logShape[0]];
        }
    }
    // If logical shape is 2, we don't squeeze, since we want to match physical.
    if (logShape.length !== 2) {
        var squeezeResult = tf.util.squeezeShape(logShape);
        logShape = squeezeResult.newShape;
    }
    var size = tf.util.sizeFromShape(logShape);
    var textureShape = null;
    if (logShape.length <= 1 && size <= maxTexSize) {
        textureShape = [1, size];
    }
    else if (logShape.length === 2 && logShape[0] <= maxTexSize &&
        logShape[1] <= maxTexSize) {
        textureShape = logShape;
    }
    else if (logShape.length === 3 && logShape[0] * logShape[1] <= maxTexSize &&
        logShape[2] <= maxTexSize) {
        textureShape = [logShape[0] * logShape[1], logShape[2]];
    }
    else if (logShape.length === 3 && logShape[0] <= maxTexSize &&
        logShape[1] * logShape[2] <= maxTexSize) {
        textureShape = [logShape[0], logShape[1] * logShape[2]];
    }
    else if (logShape.length === 4 &&
        logShape[0] * logShape[1] * logShape[2] <= maxTexSize &&
        logShape[3] <= maxTexSize) {
        textureShape = [logShape[0] * logShape[1] * logShape[2], logShape[3]];
    }
    else if (logShape.length === 4 && logShape[0] <= maxTexSize &&
        logShape[1] * logShape[2] * logShape[3] <= maxTexSize) {
        textureShape = [logShape[0], logShape[1] * logShape[2] * logShape[3]];
    }
    // true if one edge length is 1 (1 or 2, if packed), while another edge
    // length exceeds maxSizeForNarrowTex.
    var isLongNarrowTex = textureShape != null &&
        Math.max.apply(Math, __spreadArray([], __read(textureShape), false)) > maxSizeForNarrowTex &&
        Math.min.apply(Math, __spreadArray([], __read(textureShape), false)) <= (isPacked ? 2 : 1) &&
        Math.min.apply(Math, __spreadArray([], __read(textureShape), false)) > 0;
    if (textureShape == null || isLongNarrowTex) {
        if (isPacked) {
            // For packed textures size equals the number of channels required to
            // accommodate the texture data. However in order to squarify such that
            // inner dimensions stay even, we rewrite size to equal the number of
            // texels. Then in the return statement we rehydrate the squarified
            // dimensions to channel units.
            var batchDim = getBatchDim(logShape);
            var rows = 2, cols = 2;
            if (logShape.length) {
                _a = __read(getRowsCols(logShape), 2), rows = _a[0], cols = _a[1];
            }
            size = batchDim * (rows / 2) * (cols / 2);
            textureShape =
                tf.util.sizeToSquarishShape(size).map(function (d) { return d * 2; });
        }
        else {
            textureShape = tf.util.sizeToSquarishShape(size);
        }
    }
    return textureShape;
}
function isEven(n) {
    return n % 2 === 0;
}
/**
 * This determines whether reshaping a packed texture requires rearranging
 * the data within the texture, assuming 2x2 packing.
 */
function isReshapeFree(shape1, shape2) {
    shape1 = shape1.slice(-2);
    shape2 = shape2.slice(-2);
    if (tf.util.arraysEqual(shape1, shape2)) {
        return true;
    }
    if (!shape1.length || !shape2.length) { // One of the shapes is a scalar.
        return true;
    }
    if (shape1[0] === 0 || shape1[1] === 0 || shape2[0] === 0 ||
        shape2[1] === 0) {
        return true;
    }
    if (shape1.length !== shape2.length) { // One of the shapes is a vector.
        var shape1Cols = shape1[shape1.length - 1];
        var shape2Cols = shape2[shape2.length - 1];
        if (shape1Cols === shape2Cols) {
            return true;
        }
        if (isEven(shape1Cols) && isEven(shape2Cols) &&
            (shape1[0] === 1 || shape2[0] === 1)) {
            return true;
        }
    }
    return shape1[1] === shape2[1] && isEven(shape1[0]) && isEven(shape2[0]);
}
// We cache webgl params because the environment gets reset between
// unit tests and we don't want to constantly query the WebGLContext for
// MAX_TEXTURE_SIZE.
var MAX_TEXTURE_SIZE;
var MAX_TEXTURES_IN_SHADER;
function getWebGLMaxTextureSize(webGLVersion) {
    if (MAX_TEXTURE_SIZE == null) {
        var gl = getWebGLContext(webGLVersion);
        MAX_TEXTURE_SIZE = gl.getParameter(gl.MAX_TEXTURE_SIZE);
    }
    return MAX_TEXTURE_SIZE;
}
function resetMaxTextureSize() {
    MAX_TEXTURE_SIZE = null;
}
function resetMaxTexturesInShader() {
    MAX_TEXTURES_IN_SHADER = null;
}
function getMaxTexturesInShader(webGLVersion) {
    if (MAX_TEXTURES_IN_SHADER == null) {
        var gl = getWebGLContext(webGLVersion);
        MAX_TEXTURES_IN_SHADER = gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS);
    }
    // We cap at 16 to avoid spurious runtime "memory exhausted" error.
    return Math.min(16, MAX_TEXTURES_IN_SHADER);
}
function getWebGLDisjointQueryTimerVersion(webGLVersion) {
    if (webGLVersion === 0) {
        return 0;
    }
    var queryTimerVersion;
    var gl = getWebGLContext(webGLVersion);
    if (hasExtension(gl, 'EXT_disjoint_timer_query_webgl2') &&
        webGLVersion === 2) {
        queryTimerVersion = 2;
    }
    else if (hasExtension(gl, 'EXT_disjoint_timer_query')) {
        queryTimerVersion = 1;
    }
    else {
        queryTimerVersion = 0;
    }
    return queryTimerVersion;
}
function hasExtension(gl, extensionName) {
    var ext = gl.getExtension(extensionName);
    return ext != null;
}
function isWebGLVersionEnabled(webGLVersion) {
    try {
        var gl = getWebGLContext(webGLVersion);
        if (gl != null) {
            return true;
        }
    }
    catch (e) {
        console.log('Error when getting WebGL context: ', e);
        return false;
    }
    return false;
}
function isCapableOfRenderingToFloatTexture(webGLVersion) {
    if (webGLVersion === 0) {
        return false;
    }
    var gl = getWebGLContext(webGLVersion);
    if (webGLVersion === 1) {
        if (!hasExtension(gl, 'OES_texture_float')) {
            return false;
        }
    }
    else {
        if (!hasExtension(gl, 'EXT_color_buffer_float')) {
            return false;
        }
    }
    var isFrameBufferComplete = createFloatTextureAndBindToFramebuffer(gl);
    return isFrameBufferComplete;
}
/**
 * Check if we can download values from a float/half-float texture.
 *
 * Note that for performance reasons we use binding a texture to a framebuffer
 * as a proxy for ability to download float values later using readPixels. The
 * texture params of this texture will not match those in readPixels exactly
 * but if we are unable to bind some kind of float texture to the frameBuffer
 * then we definitely will not be able to read float values from it.
 */
function isDownloadFloatTextureEnabled(webGLVersion) {
    if (webGLVersion === 0) {
        return false;
    }
    var gl = getWebGLContext(webGLVersion);
    if (webGLVersion === 1) {
        if (!hasExtension(gl, 'OES_texture_float')) {
            return false;
        }
        if (!hasExtension(gl, 'WEBGL_color_buffer_float')) {
            return false;
        }
    }
    else {
        if (hasExtension(gl, 'EXT_color_buffer_float')) {
            return createFloatTextureAndBindToFramebuffer(gl);
        }
        var COLOR_BUFFER_HALF_FLOAT = 'EXT_color_buffer_half_float';
        if (hasExtension(gl, COLOR_BUFFER_HALF_FLOAT)) {
            var textureHalfFloatExtension = gl.getExtension(COLOR_BUFFER_HALF_FLOAT);
            return createHalfFloatTextureAndBindToFramebuffer(gl, textureHalfFloatExtension);
        }
        return false;
    }
    var isFrameBufferComplete = createFloatTextureAndBindToFramebuffer(gl);
    return isFrameBufferComplete;
}
function createFloatTextureAndBindToFramebuffer(gl) {
    var texConfig = getTextureConfig(gl);
    var texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    var width = 1;
    var height = 1;
    gl.texImage2D(gl.TEXTURE_2D, 0, texConfig.internalFormatFloat, width, height, 0, texConfig.textureFormatFloat, texConfig.textureTypeFloat, null);
    var frameBuffer = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffer);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
    var isFrameBufferComplete = gl.checkFramebufferStatus(gl.FRAMEBUFFER) === gl.FRAMEBUFFER_COMPLETE;
    gl.bindTexture(gl.TEXTURE_2D, null);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.deleteTexture(texture);
    gl.deleteFramebuffer(frameBuffer);
    return isFrameBufferComplete;
}
function createHalfFloatTextureAndBindToFramebuffer(
// tslint:disable-next-line:no-any
gl, textureHalfFloatExtension) {
    var texConfig = getTextureConfig(gl, textureHalfFloatExtension);
    var texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    var width = 1;
    var height = 1;
    gl.texImage2D(gl.TEXTURE_2D, 0, texConfig.internalFormatHalfFloat, width, height, 0, texConfig.textureFormatFloat, texConfig.textureTypeHalfFloat, null);
    var frameBuffer = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffer);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
    var isFrameBufferComplete = gl.checkFramebufferStatus(gl.FRAMEBUFFER) === gl.FRAMEBUFFER_COMPLETE;
    gl.bindTexture(gl.TEXTURE_2D, null);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.deleteTexture(texture);
    gl.deleteFramebuffer(frameBuffer);
    return isFrameBufferComplete;
}
function isWebGLFenceEnabled(webGLVersion) {
    if (webGLVersion !== 2) {
        return false;
    }
    var gl = getWebGLContext(webGLVersion);
    // tslint:disable-next-line:no-any
    var isEnabled = gl.fenceSync != null;
    return isEnabled;
}
function assertNotComplex(tensor, opName) {
    if (!Array.isArray(tensor)) {
        tensor = [tensor];
    }
    tensor.forEach(function (t) {
        if (t != null) {
            tf.util.assert(t.dtype !== 'complex64', function () { return "".concat(opName, " does not support complex64 tensors ") +
                'in the WebGL backend.'; });
        }
    });
}

var webgl_util = {
    __proto__: null,
    assertNotComplex: assertNotComplex,
    bindCanvasToFramebuffer: bindCanvasToFramebuffer,
    bindColorTextureToFramebuffer: bindColorTextureToFramebuffer,
    bindTextureToProgramUniformSampler: bindTextureToProgramUniformSampler,
    bindTextureUnit: bindTextureUnit,
    bindVertexBufferToProgramAttribute: bindVertexBufferToProgramAttribute,
    callAndCheck: callAndCheck,
    canBeRepresented: canBeRepresented,
    createFragmentShader: createFragmentShader,
    createFramebuffer: createFramebuffer,
    createProgram: createProgram,
    createStaticIndexBuffer: createStaticIndexBuffer,
    createStaticVertexBuffer: createStaticVertexBuffer,
    createTexture: createTexture,
    createVertexShader: createVertexShader$1,
    getBatchDim: getBatchDim,
    getExtensionOrThrow: getExtensionOrThrow,
    getFramebufferErrorMessage: getFramebufferErrorMessage,
    getMaxTexturesInShader: getMaxTexturesInShader,
    getNumChannels: getNumChannels,
    getProgramUniformLocation: getProgramUniformLocation,
    getProgramUniformLocationOrThrow: getProgramUniformLocationOrThrow,
    getRowsCols: getRowsCols,
    getShapeAs3D: getShapeAs3D,
    getTextureShapeFromLogicalShape: getTextureShapeFromLogicalShape,
    getWebGLDisjointQueryTimerVersion: getWebGLDisjointQueryTimerVersion,
    getWebGLErrorMessage: getWebGLErrorMessage,
    getWebGLMaxTextureSize: getWebGLMaxTextureSize,
    hasExtension: hasExtension,
    isCapableOfRenderingToFloatTexture: isCapableOfRenderingToFloatTexture,
    isDownloadFloatTextureEnabled: isDownloadFloatTextureEnabled,
    isReshapeFree: isReshapeFree,
    isWebGLFenceEnabled: isWebGLFenceEnabled,
    isWebGLVersionEnabled: isWebGLVersionEnabled,
    linkProgram: linkProgram,
    logShaderSourceAndInfoLog: logShaderSourceAndInfoLog,
    resetMaxTextureSize: resetMaxTextureSize,
    resetMaxTexturesInShader: resetMaxTexturesInShader,
    unbindColorTextureFromFramebuffer: unbindColorTextureFromFramebuffer,
    unbindTextureUnit: unbindTextureUnit,
    validateFramebuffer: validateFramebuffer,
    validateProgram: validateProgram,
    validateTextureSize: validateTextureSize
};

/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
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
var ENV = tf.env();
/**
 * This file contains WebGL-specific flag registrations.
 */
/**
 * True if WebGL is supported.
 */
ENV.registerFlag('HAS_WEBGL', function () { return ENV.getNumber('WEBGL_VERSION') > 0; });
/** 0: No WebGL, 1: WebGL 1.0, 2: WebGL 2.0. */
ENV.registerFlag('WEBGL_VERSION', function () {
    if (isWebGLVersionEnabled(2)) {
        return 2;
    }
    else if (isWebGLVersionEnabled(1)) {
        return 1;
    }
    return 0;
});
/** Whether to check for numerical representation problems. */
ENV.registerFlag('WEBGL_CHECK_NUMERICAL_PROBLEMS', function () { return false; });
ENV.registerFlag('WEBGL_BUFFER_SUPPORTED', function () { return ENV.get('WEBGL_VERSION') === 2; });
/** Whether the WebGL backend will sometimes forward ops to the CPU. */
ENV.registerFlag('WEBGL_CPU_FORWARD', function () { return true; });
/** Whether the WebGL backend will always use f16 textures for rendering. */
ENV.registerFlag('WEBGL_FORCE_F16_TEXTURES', function () { return false; });
/** Whether to turn all packing related flags on. */
ENV.registerFlag('WEBGL_PACK', function () { return ENV.getBool('HAS_WEBGL'); });
/** Whether we will pack the batchnormalization op. */
ENV.registerFlag('WEBGL_PACK_NORMALIZATION', function () { return ENV.getBool('WEBGL_PACK'); });
/** Whether we will pack the clip op. */
ENV.registerFlag('WEBGL_PACK_CLIP', function () { return ENV.getBool('WEBGL_PACK'); });
/** Whether we will pack the depthwise conv op. */
ENV.registerFlag('WEBGL_PACK_DEPTHWISECONV', function () { return ENV.getBool('WEBGL_PACK'); });
/** Whether we will pack binary ops. */
ENV.registerFlag('WEBGL_PACK_BINARY_OPERATIONS', function () { return ENV.getBool('WEBGL_PACK'); });
/** Whether we will pack unary ops. */
ENV.registerFlag('WEBGL_PACK_UNARY_OPERATIONS', function () { return ENV.getBool('WEBGL_PACK'); });
/** Whether we will pack array ops. */
ENV.registerFlag('WEBGL_PACK_ARRAY_OPERATIONS', function () { return ENV.getBool('WEBGL_PACK'); });
/** Whether we will pack image ops. */
ENV.registerFlag('WEBGL_PACK_IMAGE_OPERATIONS', function () { return ENV.getBool('WEBGL_PACK'); });
/** Whether we will pack reduce ops. */
ENV.registerFlag('WEBGL_PACK_REDUCE', function () { return ENV.getBool('WEBGL_PACK'); });
/** Whether packed WebGL kernels lazily unpack their outputs. */
ENV.registerFlag('WEBGL_LAZILY_UNPACK', function () { return ENV.getBool('WEBGL_PACK'); });
/** Whether we will use the im2col algorithm to speed up convolutions. */
ENV.registerFlag('WEBGL_CONV_IM2COL', function () { return ENV.getBool('WEBGL_PACK'); });
/** Whether we will pack conv2dTranspose op. */
ENV.registerFlag('WEBGL_PACK_CONV2DTRANSPOSE', function () { return ENV.getBool('WEBGL_PACK'); });
/** The maximum texture dimension. */
ENV.registerFlag('WEBGL_MAX_TEXTURE_SIZE', function () { return getWebGLMaxTextureSize(ENV.getNumber('WEBGL_VERSION')); });
/** The maximum texture dimension. */
ENV.registerFlag('WEBGL_MAX_TEXTURES_IN_SHADER', function () { return getMaxTexturesInShader(ENV.getNumber('WEBGL_VERSION')); });
/**
 * The disjoint_query_timer extension version.
 * 0: disabled, 1: EXT_disjoint_timer_query, 2:
 * EXT_disjoint_timer_query_webgl2.
 * In Firefox with WebGL 2.0,
 * EXT_disjoint_timer_query_webgl2 is not available, so we must use the
 * WebGL 1.0 extension.
 */
ENV.registerFlag('WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION', function () {
    var webGLVersion = ENV.getNumber('WEBGL_VERSION');
    if (webGLVersion === 0) {
        return 0;
    }
    return getWebGLDisjointQueryTimerVersion(webGLVersion);
});
/**
 * Whether the timer object from the disjoint_query_timer extension gives
 * timing information that is reliable.
 */
ENV.registerFlag('WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE', function () { return ENV.getNumber('WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION') > 0 &&
    !tf.device_util.isMobile(); });
/**
 * Whether the device is physically capable of rendering to float32 textures.
 */
ENV.registerFlag('WEBGL_RENDER_FLOAT32_CAPABLE', function () { return isCapableOfRenderingToFloatTexture(ENV.getNumber('WEBGL_VERSION')); });
/**
 * Whether rendering to float32 textures is enabled. If disabled, renders to
 * float16 textures.
 */
ENV.registerFlag('WEBGL_RENDER_FLOAT32_ENABLED', function () {
    return ENV.getBool('WEBGL_FORCE_F16_TEXTURES') ?
        false :
        ENV.getBool('WEBGL_RENDER_FLOAT32_CAPABLE');
});
/**
 * Whether downloading float textures is enabled (16 or 32 bit). If disabled,
 * uses IEEE 754 encoding of the float32 values to 4 uint8 when downloading.
 */
ENV.registerFlag('WEBGL_DOWNLOAD_FLOAT_ENABLED', function () { return isDownloadFloatTextureEnabled(ENV.getNumber('WEBGL_VERSION')); });
/** Whether the fence API is available. */
ENV.registerFlag('WEBGL_FENCE_API_ENABLED', function () { return isWebGLFenceEnabled(ENV.getNumber('WEBGL_VERSION')); });
/**
 * Tensors with size <= than this will be uploaded as uniforms, not textures.
 */
ENV.registerFlag('WEBGL_SIZE_UPLOAD_UNIFORM', function () {
    // Use uniform uploads only when 32bit floats are supported. In
    // 16bit
    // environments there are problems with comparing a 16bit texture value
    // with a 32bit uniform value.
    var useUniforms = ENV.getBool('WEBGL_RENDER_FLOAT32_ENABLED');
    return useUniforms ? 4 : 0;
});
/**
 * If the total number of bytes allocated on the GPU is greater than this
 * number, we will aggressively delete textures upon disposal with
 * gl.deleteMatrixTexture, rather than making them available for reuse.
 *
 * Default value -1 indicates that we will never aggressively delete textures.
 */
ENV.registerFlag('WEBGL_DELETE_TEXTURE_THRESHOLD', function () {
    return -1;
}, function (threshold) {
    if (!(typeof threshold === 'number')) {
        throw new Error('WEBGL_DELETE_TEXTURE_THRESHOLD must be a number but ' +
            "got ".concat(threshold, "."));
    }
    if (threshold < 0 && threshold !== -1) {
        throw new Error("WEBGL_DELETE_TEXTURE_THRESHOLD must be -1 (indicating never " +
            "delete) or at least 0, but got ".concat(threshold, "."));
    }
});
/**
 * Trigger a manual GL command flush if the threshold of time has passed since
 * previous Kernel execution. This can be useful for Andorid device where GL
 * command flush are delayed un til the end of javascript task. This value is
 * measured in millisecond. Typically you want to set this value to close to 1.
 *
 * Default value 1 for mobile chrome, and -1 for rest cases. -1 indicates that
 * we will not enforce manual flush and depend on system default flush schedule.
 */
ENV.registerFlag('WEBGL_FLUSH_THRESHOLD', function () {
    return tf.device_util.isMobile() ? 1 : -1;
}, function (threshold) {
    if (!(typeof threshold === 'number')) {
        throw new Error('WEBGL_FLUSH_THRESHOLD must be a number but got ' +
            "".concat(threshold, "."));
    }
    if (threshold < 0 && threshold !== -1) {
        throw new Error("WEBGL_FLUSH_THRESHOLD must be -1 (indicating never " +
            "manual flush) or at least 0, but got ".concat(threshold, "."));
    }
});
/**
 * Threshold for input tensor size that determines whether WebGL backend will
 * delegate computation to CPU.
 *
 * Default value is 128.
 */
ENV.registerFlag('CPU_HANDOFF_SIZE_THRESHOLD', function () { return 128; });
/** Whether we will use shapes uniforms. */
ENV.registerFlag('WEBGL_USE_SHAPES_UNIFORMS', function () { return false; });
/**
 * Threshold for last dimension of input tensor that determines whether
 * WebGL backend for the Top K op will delegate computation to CPU. If input
 * is smaller than threshold then CPU will be used
 *
 * Default value is 100000.
 */
ENV.registerFlag('TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD', function () { return 100000; });
/**
 * Threshold for K that determines whether
 * WebGL backend for the Top K op will delegate computation to CPU. If k
 * is larger than threshold then CPU will be used
 *
 * Default value is 128.
 */
ENV.registerFlag('TOPK_K_CPU_HANDOFF_THRESHOLD', function () { return 128; });
/** Whether we will use the experimental conv op. */
ENV.registerFlag('WEBGL_EXP_CONV', function () { return false; });
/**
 * If the device performance is low or if no hardware GPU is available, whether
 * software WebGL will be used.
 */
ENV.registerFlag('SOFTWARE_WEBGL_ENABLED', function () { return ENV.getBool('IS_TEST'); });
/**
 * For narrow texture (physical height or physical width is 1), if the length of
 * any texture edges exceed the threshold, the texture will be reshaped to be
 * more squarish.
 *
 * This flag is used to help some GPUs that could not provide correct
 * interpolations for long skinny triangles. We found Mali GPU probably has this
 * problem: https://github.com/tensorflow/tfjs/issues/6775.
 */
ENV.registerFlag('WEBGL_MAX_SIZE_FOR_NARROW_TEXTURE', function () { return Infinity; });
/**
 * If the flag is set to true, the max size of the narrow texture will be auto
 * computed and it will be considerred as a threshold to reshape the narrow
 * texture to be more squarish.
 *
 * This flag is used to help some GPUs that could not provide correct
 * interpolations for long skinny triangles. We found Mali GPU probably has this
 * problem: https://github.com/tensorflow/tfjs/issues/6775.
 */
ENV.registerFlag('WEBGL_AUTO_SQUARIFY_NARROW_TEXTURE_SHAPE', function () { return false; });
/**
 * Whether to use the customized isnan. It's only useful for webgl2 since webgl1
 * doesn't have the builtin isnan.
 */
ENV.registerFlag('WEBGL2_ISNAN_CUSTOM', function () { return false; });
/** Experimental flag, whether enter compile only phase. */
ENV.registerFlag('ENGINE_COMPILE_ONLY', function () { return false; });

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
function getGlslDifferences() {
    var version;
    var attribute;
    var varyingVs;
    var varyingFs;
    var texture2D;
    var output;
    var defineOutput;
    var defineSpecialNaN;
    var defineSpecialInf;
    var defineRound;
    if (tf.env().getNumber('WEBGL_VERSION') === 2) {
        version = '#version 300 es';
        attribute = 'in';
        varyingVs = 'out';
        varyingFs = 'in';
        texture2D = 'texture';
        output = 'outputColor';
        defineOutput = 'out vec4 outputColor;';
        // Use custom isnan definition to work across differences between
        // implementations on various platforms. While this should happen in ANGLE
        // we still see differences between android and windows (on chrome) when
        // using isnan directly. Since WebGL2 supports uint type and
        // floatBitsToUinT built-in function, we could implment isnan following
        // IEEE 754 rules.
        // NaN defination in IEEE 754-1985 is :
        //   - sign = either 0 or 1.
        //   - biased exponent = all 1 bits.
        //   - fraction = anything except all 0 bits (since all 0 bits represents
        //   infinity).
        // https://en.wikipedia.org/wiki/IEEE_754-1985#Representation_of_non-numbers
        defineSpecialNaN = tf.env().getBool('WEBGL2_ISNAN_CUSTOM') ? "\n      bool isnan_custom(float val) {\n        uint floatToUint = floatBitsToUint(val);\n        return (floatToUint & 0x7fffffffu) > 0x7f800000u;\n      }\n\n      bvec4 isnan_custom(vec4 val) {\n        return bvec4(isnan_custom(val.x),\n          isnan_custom(val.y), isnan_custom(val.z), isnan_custom(val.w));\n      }\n\n      #define isnan(value) isnan_custom(value)\n    " :
            '';
        // In webgl 2 we do not need to specify a custom isinf so there is no
        // need for a special INFINITY constant.
        defineSpecialInf = "";
        defineRound = "\n      #define round(value) newRound(value)\n      int newRound(float value) {\n        return int(floor(value + 0.5));\n      }\n\n      ivec4 newRound(vec4 value) {\n        return ivec4(floor(value + vec4(0.5)));\n      }\n    ";
    }
    else {
        version = '';
        attribute = 'attribute';
        varyingVs = 'varying';
        varyingFs = 'varying';
        texture2D = 'texture2D';
        output = 'gl_FragColor';
        defineOutput = '';
        // WebGL1 has no built in isnan so we define one here.
        defineSpecialNaN = "\n      #define isnan(value) isnan_custom(value)\n      bool isnan_custom(float val) {\n        return (val > 0. || val < 1. || val == 0.) ? false : true;\n      }\n      bvec4 isnan_custom(vec4 val) {\n        return bvec4(isnan(val.x), isnan(val.y), isnan(val.z), isnan(val.w));\n      }\n    ";
        defineSpecialInf = "\n      uniform float INFINITY;\n\n      bool isinf(float val) {\n        return abs(val) == INFINITY;\n      }\n      bvec4 isinf(vec4 val) {\n        return equal(abs(val), vec4(INFINITY));\n      }\n    ";
        defineRound = "\n      int round(float value) {\n        return int(floor(value + 0.5));\n      }\n\n      ivec4 round(vec4 value) {\n        return ivec4(floor(value + vec4(0.5)));\n      }\n    ";
    }
    return {
        version: version,
        attribute: attribute,
        varyingVs: varyingVs,
        varyingFs: varyingFs,
        texture2D: texture2D,
        output: output,
        defineOutput: defineOutput,
        defineSpecialNaN: defineSpecialNaN,
        defineSpecialInf: defineSpecialInf,
        defineRound: defineRound
    };
}

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
/**
 * Produces GLSL code that derives logical coordinates from a flat
 * index. The code performs integer division with each stride and decrements
 * the index until the index equals the final dimension coordinate.
 */
function getLogicalCoordinatesFromFlatIndex(coords, shape, index) {
    if (index === void 0) { index = 'index'; }
    var strides = tf.util.computeStrides(shape);
    return strides
        .map(function (stride, i) {
        var line1 = "int ".concat(coords[i], " = ").concat(index, " / ").concat(stride);
        var line2 = i === strides.length - 1 ?
            "int ".concat(coords[i + 1], " = ").concat(index, " - ").concat(coords[i], " * ").concat(stride) :
            "index -= ".concat(coords[i], " * ").concat(stride);
        return "".concat(line1, "; ").concat(line2, ";");
    })
        .join('');
}
function getOutputLogicalCoordinatesFromFlatIndexByUniform(coords, shape, index) {
    if (index === void 0) { index = 'index'; }
    var strides = tf.util.computeStrides(shape);
    return strides
        .map(function (_, i) {
        var line1 = "int ".concat(coords[i], " = ").concat(index, " / outShapeStrides[").concat(i, "]");
        var line2 = i === strides.length - 1 ?
            "int ".concat(coords[i + 1], " = ").concat(index, " - ").concat(coords[i], " * outShapeStrides[").concat(i, "]") :
            "index -= ".concat(coords[i], " * outShapeStrides[").concat(i, "]");
        return "".concat(line1, "; ").concat(line2, ";");
    })
        .join('');
}
// Produces GLSL code that computes strides.
function symbolicallyComputeStrides(indicesArr, variableName) {
    var numCoords = indicesArr.length;
    var shape = indicesArr.map(function (d) { return "".concat(variableName, "[").concat(d, "]"); });
    var strides = new Array(numCoords - 1);
    strides[numCoords - 2] = shape[numCoords - 1];
    for (var i = numCoords - 3; i >= 0; --i) {
        strides[i] = "(".concat(strides[i + 1], " * ").concat(shape[i + 1], ")");
    }
    return strides;
}
function getLogicalCoordinatesFromFlatIndexByUniform(coords, variableName, index) {
    if (index === void 0) { index = 'index'; }
    var indicesArray = coords.map(function (_, i) { return i; });
    var strides = symbolicallyComputeStrides(indicesArray, variableName);
    return strides
        .map(function (_, i) {
        var line1 = "int ".concat(coords[i], " = ").concat(index, " / ").concat(strides[i]);
        var line2 = i === strides.length - 1 ?
            "int ".concat(coords[i + 1], " = ").concat(index, " - ").concat(coords[i], " * ").concat(strides[i]) :
            "index -= ".concat(coords[i], " * ").concat(strides[i]);
        return "".concat(line1, "; ").concat(line2, ";");
    })
        .join('');
}
/**
 * Produces GLSL that computes the flat index from 3D coordinates.
 */
function getFlatIndexFrom3D(shape) {
    var strides = tf.util.computeStrides(shape).map(function (d) { return d.toString(); });
    return "\n  int getFlatIndex(ivec3 coords) {\n    return coords.x * ".concat(strides[0], " + coords.y * ").concat(strides[1], " + coords.z;\n  }\n");
}
function getFlatIndexFrom3DOutput() {
    return "\n  int getFlatIndex(ivec3 coords) {\n    return coords.x * outShapeStrides[0] + coords.y * outShapeStrides[1] + coords.z;\n  }\n";
}
var ENCODE_FLOAT_SNIPPET = "\n  const float FLOAT_MAX = 1.70141184e38;\n  const float FLOAT_MIN = 1.17549435e-38;\n\n  lowp vec4 encode_float(highp float v) {\n    if (isnan(v)) {\n      return vec4(255, 255, 255, 255);\n    }\n\n    highp float av = abs(v);\n\n    if(av < FLOAT_MIN) {\n      return vec4(0.0, 0.0, 0.0, 0.0);\n    } else if(v > FLOAT_MAX) {\n      return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;\n    } else if(v < -FLOAT_MAX) {\n      return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;\n    }\n\n    highp vec4 c = vec4(0,0,0,0);\n\n    highp float e = floor(log2(av));\n    highp float m = exp2(fract(log2(av))) - 1.0;\n\n    c[2] = floor(128.0 * m);\n    m -= c[2] / 128.0;\n    c[1] = floor(32768.0 * m);\n    m -= c[1] / 32768.0;\n    c[0] = floor(8388608.0 * m);\n\n    highp float ebias = e + 127.0;\n    c[3] = floor(ebias / 2.0);\n    ebias -= c[3] * 2.0;\n    c[2] += floor(ebias) * 128.0;\n\n    c[3] += 128.0 * step(0.0, -v);\n\n    return c / 255.0;\n  }\n";

var getBroadcastDims = tf.backend_util.getBroadcastDims;
function makeShader(inputsInfo, outputShape, program) {
    var prefixSnippets = [];
    inputsInfo.forEach(function (x) {
        var size = tf.util.sizeFromShape(x.shapeInfo.logicalShape);
        // Snippet when we decided to upload the values as uniform.
        if (x.shapeInfo.isUniform) {
            prefixSnippets.push("uniform float ".concat(x.name).concat(size > 1 ? "[".concat(size, "]") : '', ";"));
        }
        else {
            prefixSnippets.push("uniform sampler2D ".concat(x.name, ";"));
            prefixSnippets.push("uniform int offset".concat(x.name, ";"));
        }
        if (program.enableShapeUniforms) {
            var uniformShape = getUniformInfoFromShape(program.packedInputs, x.shapeInfo.logicalShape, x.shapeInfo.texShape).uniformShape;
            switch (uniformShape.length) {
                case 1:
                    prefixSnippets.push("uniform int ".concat(x.name, "Shape;"));
                    break;
                case 2:
                    prefixSnippets.push("uniform ivec2 ".concat(x.name, "Shape;"));
                    break;
                case 3:
                    prefixSnippets.push("uniform ivec3 ".concat(x.name, "Shape;"));
                    break;
                case 4:
                    prefixSnippets.push("uniform ivec4 ".concat(x.name, "Shape;"));
                    break;
            }
            prefixSnippets.push("uniform ivec2 ".concat(x.name, "TexShape;"));
        }
    });
    if (program.enableShapeUniforms) {
        switch (outputShape.logicalShape.length) {
            case 1:
                prefixSnippets.push("uniform int outShape;");
                break;
            case 2:
                prefixSnippets.push("uniform ivec2 outShape;");
                prefixSnippets.push("uniform int outShapeStrides;");
                break;
            case 3:
                prefixSnippets.push("uniform ivec3 outShape;");
                prefixSnippets.push("uniform ivec2 outShapeStrides;");
                break;
            case 4:
                prefixSnippets.push("uniform ivec4 outShape;");
                prefixSnippets.push("uniform ivec3 outShapeStrides;");
                break;
        }
        prefixSnippets.push("uniform ivec2 outTexShape;");
    }
    if (program.customUniforms) {
        program.customUniforms.forEach(function (d) {
            prefixSnippets.push("uniform ".concat(d.type, " ").concat(d.name).concat(d.arrayIndex ? "[".concat(d.arrayIndex, "]") : '', ";"));
        });
    }
    var inputPrefixSnippet = prefixSnippets.join('\n');
    var inputSamplingSnippet = inputsInfo
        .map(function (x) { return getInputSamplingSnippet(x, outputShape, program.packedInputs, program.enableShapeUniforms); })
        .join('\n');
    var outTexShape = outputShape.texShape;
    var glsl = getGlslDifferences();
    var floatTextureSampleSnippet = getFloatTextureSampleSnippet(glsl);
    var outputSamplingSnippet;
    var floatTextureSetOutputSnippet;
    var shaderPrefix = getShaderPrefix(glsl);
    if (outputShape.isPacked) {
        outputSamplingSnippet = getPackedOutputSamplingSnippet(outputShape.logicalShape, outTexShape, program.enableShapeUniforms);
        floatTextureSetOutputSnippet = getFloatTextureSetRGBASnippet(glsl);
    }
    else {
        outputSamplingSnippet = getOutputSamplingSnippet(outputShape.logicalShape, outTexShape, program.enableShapeUniforms);
        floatTextureSetOutputSnippet = getFloatTextureSetRSnippet(glsl);
    }
    if (program.packedInputs) {
        shaderPrefix += SHADER_PACKED_PREFIX;
    }
    var source = [
        shaderPrefix, floatTextureSampleSnippet, floatTextureSetOutputSnippet,
        inputPrefixSnippet, outputSamplingSnippet, inputSamplingSnippet,
        program.userCode
    ].join('\n');
    return source;
}
function getSamplerFromInInfo(inInfo, enableShapeUniforms) {
    if (enableShapeUniforms === void 0) { enableShapeUniforms = false; }
    var shape = inInfo.shapeInfo.logicalShape;
    switch (shape.length) {
        case 0:
            return getSamplerScalar(inInfo, enableShapeUniforms);
        case 1:
            return getSampler1D(inInfo, enableShapeUniforms);
        case 2:
            return getSampler2D(inInfo, enableShapeUniforms);
        case 3:
            return getSampler3D(inInfo, enableShapeUniforms);
        case 4:
            return getSampler4D(inInfo, enableShapeUniforms);
        case 5:
            return getSampler5D(inInfo);
        case 6:
            return getSampler6D(inInfo);
        default:
            throw new Error("".concat(shape.length, "-D input sampling") +
                " is not yet supported");
    }
}
function getPackedSamplerFromInInfo(inInfo, enableShapeUniforms) {
    var shape = inInfo.shapeInfo.logicalShape;
    switch (shape.length) {
        case 0:
            return getPackedSamplerScalar(inInfo);
        case 1:
            return getPackedSampler1D(inInfo, enableShapeUniforms);
        case 2:
            return getPackedSampler2D(inInfo, enableShapeUniforms);
        case 3:
            return getPackedSampler3D(inInfo, enableShapeUniforms);
        default:
            return getPackedSamplerND(inInfo, enableShapeUniforms);
    }
}
function getInputSamplingSnippet(inInfo, outShapeInfo, usesPackedTextures, enableShapeUniforms) {
    if (usesPackedTextures === void 0) { usesPackedTextures = false; }
    var res = '';
    if (usesPackedTextures) {
        res += getPackedSamplerFromInInfo(inInfo, enableShapeUniforms);
    }
    else {
        res += getSamplerFromInInfo(inInfo, enableShapeUniforms);
    }
    var inShape = inInfo.shapeInfo.logicalShape;
    var outShape = outShapeInfo.logicalShape;
    if (inShape.length <= outShape.length) {
        if (usesPackedTextures) {
            res += getPackedSamplerAtOutputCoords(inInfo, outShapeInfo);
        }
        else {
            res += getSamplerAtOutputCoords(inInfo, outShapeInfo);
        }
    }
    return res;
}
function getPackedOutputSamplingSnippet(outShape, outTexShape, enableShapeUniforms) {
    switch (outShape.length) {
        case 0:
            return getOutputScalarCoords();
        case 1:
            return getOutputPacked1DCoords(outShape, outTexShape, enableShapeUniforms);
        case 2:
            return getOutputPacked2DCoords(outShape, outTexShape, enableShapeUniforms);
        case 3:
            return getOutputPacked3DCoords(outShape, outTexShape, enableShapeUniforms);
        default:
            return getOutputPackedNDCoords(outShape, outTexShape, enableShapeUniforms);
    }
}
function getOutputSamplingSnippet(outShape, outTexShape, enableShapeUniforms) {
    switch (outShape.length) {
        case 0:
            return getOutputScalarCoords();
        case 1:
            return getOutput1DCoords(outShape, outTexShape, enableShapeUniforms);
        case 2:
            return getOutput2DCoords(outShape, outTexShape, enableShapeUniforms);
        case 3:
            return getOutput3DCoords(outShape, outTexShape, enableShapeUniforms);
        case 4:
            return getOutput4DCoords(outShape, outTexShape, enableShapeUniforms);
        case 5:
            return getOutput5DCoords(outShape, outTexShape);
        case 6:
            return getOutput6DCoords(outShape, outTexShape);
        default:
            throw new Error("".concat(outShape.length, "-D output sampling is not yet supported"));
    }
}
function getFloatTextureSampleSnippet(glsl) {
    return "\n    float sampleTexture(sampler2D textureSampler, vec2 uv) {\n      return ".concat(glsl.texture2D, "(textureSampler, uv).r;\n    }\n  ");
}
function getFloatTextureSetRSnippet(glsl) {
    return "\n    void setOutput(float val) {\n      ".concat(glsl.output, " = vec4(val, 0, 0, 0);\n    }\n  ");
}
function getFloatTextureSetRGBASnippet(glsl) {
    return "\n    void setOutput(vec4 val) {\n      ".concat(glsl.output, " = val;\n    }\n  ");
}
function getShaderPrefix(glsl) {
    var SHADER_PREFIX = "".concat(glsl.version, "\n    precision highp float;\n    precision highp int;\n    precision highp sampler2D;\n    ").concat(glsl.varyingFs, " vec2 resultUV;\n    ").concat(glsl.defineOutput, "\n    const vec2 halfCR = vec2(0.5, 0.5);\n\n    struct ivec5\n    {\n      int x;\n      int y;\n      int z;\n      int w;\n      int u;\n    };\n\n    struct ivec6\n    {\n      int x;\n      int y;\n      int z;\n      int w;\n      int u;\n      int v;\n    };\n\n    uniform float NAN;\n    ").concat(glsl.defineSpecialNaN, "\n    ").concat(glsl.defineSpecialInf, "\n    ").concat(glsl.defineRound, "\n\n    int imod(int x, int y) {\n      return x - y * (x / y);\n    }\n\n    int idiv(int a, int b, float sign) {\n      int res = a / b;\n      int mod = imod(a, b);\n      if (sign < 0. && mod != 0) {\n        res -= 1;\n      }\n      return res;\n    }\n\n    //Based on the work of Dave Hoskins\n    //https://www.shadertoy.com/view/4djSRW\n    #define HASHSCALE1 443.8975\n    float random(float seed){\n      vec2 p = resultUV * seed;\n      vec3 p3  = fract(vec3(p.xyx) * HASHSCALE1);\n      p3 += dot(p3, p3.yzx + 19.19);\n      return fract((p3.x + p3.y) * p3.z);\n    }\n\n    ").concat(SAMPLE_1D_SNIPPET, "\n    ").concat(SAMPLE_2D_SNIPPET, "\n    ").concat(SAMPLE_3D_SNIPPET, "\n  ");
    return SHADER_PREFIX;
}
var SAMPLE_1D_SNIPPET = "\nvec2 uvFromFlat(int texNumR, int texNumC, int index) {\n  int texR = index / texNumC;\n  int texC = index - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\nvec2 packedUVfrom1D(int texNumR, int texNumC, int index) {\n  int texelIndex = index / 2;\n  int texR = texelIndex / texNumC;\n  int texC = texelIndex - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\n";
var SAMPLE_2D_SNIPPET = "\nvec2 packedUVfrom2D(int texelsInLogicalRow, int texNumR,\n  int texNumC, int row, int col) {\n  int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);\n  int texR = texelIndex / texNumC;\n  int texC = texelIndex - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\n";
var SAMPLE_3D_SNIPPET = "\nvec2 packedUVfrom3D(int texNumR, int texNumC,\n    int texelsInBatch, int texelsInLogicalRow, int b,\n    int row, int col) {\n  int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);\n  int texR = index / texNumC;\n  int texC = index - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\n";
var SHADER_PACKED_PREFIX = "\n  float getChannel(vec4 frag, vec2 innerDims) {\n    vec2 modCoord = mod(innerDims, 2.);\n    return modCoord.x == 0. ?\n      (modCoord.y == 0. ? frag.r : frag.g) :\n      (modCoord.y == 0. ? frag.b : frag.a);\n  }\n  float getChannel(vec4 frag, int dim) {\n    float modCoord = mod(float(dim), 2.);\n    return modCoord == 0. ? frag.r : frag.g;\n  }\n";
function getOutputScalarCoords() {
    return "\n    int getOutputCoords() {\n      return 0;\n    }\n  ";
}
function getOutputPacked1DCoords(shape, texShape, enableShapeUniforms) {
    var packedTexShape = [Math.ceil(texShape[0] / 2), Math.ceil(texShape[1] / 2)];
    if (packedTexShape[0] === 1) {
        if (enableShapeUniforms) {
            return "\n      int getOutputCoords() {\n        return 2 * int(resultUV.x * ceil(float(outTexShape[1]) / 2.0));\n      }\n    ";
        }
        return "\n      int getOutputCoords() {\n        return 2 * int(resultUV.x * ".concat(packedTexShape[1], ".0);\n      }\n    ");
    }
    if (packedTexShape[1] === 1) {
        if (enableShapeUniforms) {
            return "\n      int getOutputCoords() {\n        return 2 * int(resultUV.y * ceil(float(outTexShape[0]) / 2.0));\n      }\n    ";
        }
        return "\n      int getOutputCoords() {\n        return 2 * int(resultUV.y * ".concat(packedTexShape[0], ".0);\n      }\n    ");
    }
    if (enableShapeUniforms) {
        return "\n    int getOutputCoords() {\n      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(packedTexShape[0], packedTexShape[1]));\n      return 2 * (resTexRC.x * packedTexShape[1] + resTexRC.y);\n    }\n  ";
    }
    return "\n    int getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(".concat(packedTexShape[0], ", ").concat(packedTexShape[1], "));\n      return 2 * (resTexRC.x * ").concat(packedTexShape[1], " + resTexRC.y);\n    }\n  ");
}
function getOutput1DCoords(shape, texShape, enableShapeUniforms) {
    if (texShape[0] === 1) {
        if (enableShapeUniforms) {
            return "\n      int getOutputCoords() {\n        return int(resultUV.x * float(outTexShape[1]));\n      }\n    ";
        }
        return "\n      int getOutputCoords() {\n        return int(resultUV.x * ".concat(texShape[1], ".0);\n      }\n    ");
    }
    if (texShape[1] === 1) {
        if (enableShapeUniforms) {
            return "\n      int getOutputCoords() {\n        return int(resultUV.y * float(outTexShape[0]));\n      }\n    ";
        }
        return "\n      int getOutputCoords() {\n        return int(resultUV.y * ".concat(texShape[0], ".0);\n      }\n    ");
    }
    if (enableShapeUniforms) {
        return "\n    int getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(outTexShape[0], outTexShape[1]));\n      return resTexRC.x * outTexShape[1] + resTexRC.y;\n    }\n  ";
    }
    return "\n    int getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(".concat(texShape[0], ", ").concat(texShape[1], "));\n      return resTexRC.x * ").concat(texShape[1], " + resTexRC.y;\n    }\n  ");
}
function getOutputPacked3DCoords(shape, texShape, enableShapeUniforms) {
    if (enableShapeUniforms) {
        return "\n    ivec3 getOutputCoords() {\n      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));\n      int texelsInLogicalRow = int(ceil(float(outShape[2]) / 2.0));\n      int texelsInBatch = texelsInLogicalRow * int(ceil(float(outShape[1]) / 2.0));\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(packedTexShape[0], packedTexShape[1]));\n      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;\n\n      int b = index / texelsInBatch;\n      index -= b * texelsInBatch;\n\n      int r = 2 * (index / texelsInLogicalRow);\n      int c = imod(index, texelsInLogicalRow) * 2;\n\n      return ivec3(b, r, c);\n    }\n  ";
    }
    var packedTexShape = [Math.ceil(texShape[0] / 2), Math.ceil(texShape[1] / 2)];
    var texelsInLogicalRow = Math.ceil(shape[2] / 2);
    var texelsInBatch = texelsInLogicalRow * Math.ceil(shape[1] / 2);
    return "\n    ivec3 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(".concat(packedTexShape[0], ", ").concat(packedTexShape[1], "));\n      int index = resTexRC.x * ").concat(packedTexShape[1], " + resTexRC.y;\n\n      int b = index / ").concat(texelsInBatch, ";\n      index -= b * ").concat(texelsInBatch, ";\n\n      int r = 2 * (index / ").concat(texelsInLogicalRow, ");\n      int c = imod(index, ").concat(texelsInLogicalRow, ") * 2;\n\n      return ivec3(b, r, c);\n    }\n  ");
}
function getOutput3DCoords(shape, texShape, enableShapeUniforms) {
    if (enableShapeUniforms) {
        var coordsFromIndexSnippet_1 = getOutputLogicalCoordinatesFromFlatIndexByUniform(['r', 'c', 'd'], shape);
        return "\n  ivec3 getOutputCoords() {\n    ivec2 resTexRC = ivec2(resultUV.yx *\n                           vec2(outTexShape[0], outTexShape[1]));\n    int index = resTexRC.x * outTexShape[1] + resTexRC.y;\n    ".concat(coordsFromIndexSnippet_1, "\n    return ivec3(r, c, d);\n  }\n");
    }
    var coordsFromIndexSnippet = getLogicalCoordinatesFromFlatIndex(['r', 'c', 'd'], shape);
    return "\n    ivec3 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(".concat(texShape[0], ", ").concat(texShape[1], "));\n      int index = resTexRC.x * ").concat(texShape[1], " + resTexRC.y;\n      ").concat(coordsFromIndexSnippet, "\n      return ivec3(r, c, d);\n    }\n  ");
}
function getOutputPackedNDCoords(shape, texShape, enableShapeUniforms) {
    if (enableShapeUniforms) {
        // TODO: support 5d and 6d
        return "\n    ivec4 getOutputCoords() {\n      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(packedTexShape[0], packedTexShape[1]));\n      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;\n\n      int texelsInLogicalRow = int(ceil(float(outShape[3]) / 2.0));\n      int texelsInBatch = texelsInLogicalRow * int(ceil(float(outShape[2]) / 2.0));\n      int texelsInBatchN = texelsInBatch * outShape[1];\n\n      int b2 = index / texelsInBatchN;\n      index -= b2 * texelsInBatchN;\n\n      int b = index / texelsInBatch;\n      index -= b * texelsInBatch;\n\n      int r = 2 * (index / texelsInLogicalRow);\n      int c = imod(index, texelsInLogicalRow) * 2;\n\n      return ivec4(b2, b, r, c);\n    }\n  ";
    }
    var packedTexShape = [Math.ceil(texShape[0] / 2), Math.ceil(texShape[1] / 2)];
    var texelsInLogicalRow = Math.ceil(shape[shape.length - 1] / 2);
    var texelsInBatch = texelsInLogicalRow * Math.ceil(shape[shape.length - 2] / 2);
    var texelsInBatchN = texelsInBatch;
    var batches = "";
    var coords = 'b, r, c';
    for (var b = 2; b < shape.length - 1; b++) {
        texelsInBatchN *= shape[shape.length - b - 1];
        batches = "\n      int b".concat(b, " = index / ").concat(texelsInBatchN, ";\n      index -= b").concat(b, " * ").concat(texelsInBatchN, ";\n    ") + batches;
        coords = "b".concat(b, ", ") + coords;
    }
    return "\n    ivec".concat(shape.length, " getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(").concat(packedTexShape[0], ", ").concat(packedTexShape[1], "));\n      int index = resTexRC.x * ").concat(packedTexShape[1], " + resTexRC.y;\n\n      ").concat(batches, "\n\n      int b = index / ").concat(texelsInBatch, ";\n      index -= b * ").concat(texelsInBatch, ";\n\n      int r = 2 * (index / ").concat(texelsInLogicalRow, ");\n      int c = imod(index, ").concat(texelsInLogicalRow, ") * 2;\n\n      return ivec").concat(shape.length, "(").concat(coords, ");\n    }\n  ");
}
function getOutput4DCoords(shape, texShape, enableShapeUniforms) {
    if (enableShapeUniforms) {
        var coordsFromIndexSnippet_2 = getOutputLogicalCoordinatesFromFlatIndexByUniform(['r', 'c', 'd', 'd2'], shape);
        return "\n    ivec4 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n        vec2(outTexShape[0], outTexShape[1]));\n      int index = resTexRC.x * outTexShape[1] + resTexRC.y;\n      ".concat(coordsFromIndexSnippet_2, "\n      return ivec4(r, c, d, d2);\n    }\n  ");
    }
    var coordsFromIndexSnippet = getLogicalCoordinatesFromFlatIndex(['r', 'c', 'd', 'd2'], shape);
    return "\n    ivec4 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n        vec2(".concat(texShape[0], ", ").concat(texShape[1], "));\n      int index = resTexRC.x * ").concat(texShape[1], " + resTexRC.y;\n      ").concat(coordsFromIndexSnippet, "\n      return ivec4(r, c, d, d2);\n    }\n  ");
}
function getOutput5DCoords(shape, texShape) {
    var coordsFromIndexSnippet = getLogicalCoordinatesFromFlatIndex(['r', 'c', 'd', 'd2', 'd3'], shape);
    return "\n    ivec5 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx * vec2(".concat(texShape[0], ",\n                             ").concat(texShape[1], "));\n\n      int index = resTexRC.x * ").concat(texShape[1], " + resTexRC.y;\n\n      ").concat(coordsFromIndexSnippet, "\n\n      ivec5 outShape = ivec5(r, c, d, d2, d3);\n      return outShape;\n    }\n  ");
}
function getOutput6DCoords(shape, texShape) {
    var coordsFromIndexSnippet = getLogicalCoordinatesFromFlatIndex(['r', 'c', 'd', 'd2', 'd3', 'd4'], shape);
    return "\n    ivec6 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n        vec2(".concat(texShape[0], ", ").concat(texShape[1], "));\n      int index = resTexRC.x * ").concat(texShape[1], " + resTexRC.y;\n\n      ").concat(coordsFromIndexSnippet, "\n\n      ivec6 result = ivec6(r, c, d, d2, d3, d4);\n      return result;\n    }\n  ");
}
function getOutputPacked2DCoords(shape, texShape, enableShapeUniforms) {
    var packedTexShape = [Math.ceil(texShape[0] / 2), Math.ceil(texShape[1] / 2)];
    if (tf.util.arraysEqual(shape, texShape)) {
        if (enableShapeUniforms) {
            return "\n      ivec2 getOutputCoords() {\n        ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));\n        return 2 * ivec2(resultUV.yx * vec2(packedTexShape[0], packedTexShape[1]));\n      }\n    ";
        }
        return "\n      ivec2 getOutputCoords() {\n        return 2 * ivec2(resultUV.yx * vec2(".concat(packedTexShape[0], ", ").concat(packedTexShape[1], "));\n      }\n    ");
    }
    // texels needed to accommodate a logical row
    var texelsInLogicalRow = Math.ceil(shape[1] / 2);
    /**
     * getOutputCoords
     *
     * resTexRC: The rows and columns of the texels. If you move over one
     * texel to the right in the packed texture, you are moving over one column
     * (not two).
     *
     * index: The texel index
     */
    if (enableShapeUniforms) {
        return "\n    ivec2 getOutputCoords() {\n      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));\n      int texelsInLogicalRow = int(ceil(float(outShape[1]) / 2.0));\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(packedTexShape[0], packedTexShape[1]));\n\n      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;\n      int r = 2 * (index / texelsInLogicalRow);\n      int c = imod(index, texelsInLogicalRow) * 2;\n\n      return ivec2(r, c);\n    }\n  ";
    }
    return "\n    ivec2 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(".concat(packedTexShape[0], ", ").concat(packedTexShape[1], "));\n\n      int index = resTexRC.x * ").concat(packedTexShape[1], " + resTexRC.y;\n      int r = 2 * (index / ").concat(texelsInLogicalRow, ");\n      int c = imod(index, ").concat(texelsInLogicalRow, ") * 2;\n\n      return ivec2(r, c);\n    }\n  ");
}
function getOutput2DCoords(shape, texShape, enableShapeUniforms) {
    if (tf.util.arraysEqual(shape, texShape)) {
        if (enableShapeUniforms) {
            return "\n      ivec2 getOutputCoords() {\n        return ivec2(resultUV.yx * vec2(outTexShape[0], outTexShape[1]));\n      }\n    ";
        }
        return "\n      ivec2 getOutputCoords() {\n        return ivec2(resultUV.yx * vec2(".concat(texShape[0], ", ").concat(texShape[1], "));\n      }\n    ");
    }
    if (shape[1] === 1) {
        if (enableShapeUniforms) {
            return "\n      ivec2 getOutputCoords() {\n        ivec2 resTexRC = ivec2(resultUV.yx *\n                               vec2(outTexShape[0], outTexShape[1]));\n        int index = resTexRC.x * outTexShape[1] + resTexRC.y;\n        return ivec2(index, 0);\n      }\n    ";
        }
        return "\n      ivec2 getOutputCoords() {\n        ivec2 resTexRC = ivec2(resultUV.yx *\n                               vec2(".concat(texShape[0], ", ").concat(texShape[1], "));\n        int index = resTexRC.x * ").concat(texShape[1], " + resTexRC.y;\n        return ivec2(index, 0);\n      }\n    ");
    }
    if (shape[0] === 1) {
        if (enableShapeUniforms) {
            return "\n      ivec2 getOutputCoords() {\n        ivec2 resTexRC = ivec2(resultUV.yx *\n                               vec2(outTexShape[0], outTexShape[1]));\n        int index = resTexRC.x * outTexShape[1] + resTexRC.y;\n        return ivec2(0, index);\n      }\n    ";
        }
        return "\n      ivec2 getOutputCoords() {\n        ivec2 resTexRC = ivec2(resultUV.yx *\n                               vec2(".concat(texShape[0], ", ").concat(texShape[1], "));\n        int index = resTexRC.x * ").concat(texShape[1], " + resTexRC.y;\n        return ivec2(0, index);\n      }\n    ");
    }
    if (enableShapeUniforms) {
        return "\n    ivec2 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(outTexShape[0], outTexShape[1]));\n      int index = resTexRC.x * outTexShape[1] + resTexRC.y;\n      int r = index / outShape[1];\n      int c = index - r * outShape[1];\n      return ivec2(r, c);\n    }\n  ";
    }
    return "\n    ivec2 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(".concat(texShape[0], ", ").concat(texShape[1], "));\n      int index = resTexRC.x * ").concat(texShape[1], " + resTexRC.y;\n      int r = index / ").concat(shape[1], ";\n      int c = index - r * ").concat(shape[1], ";\n      return ivec2(r, c);\n    }\n  ");
}
function getFlatOffsetUniformName(texName) {
    return "offset".concat(texName);
}
function getPackedSamplerScalar(inputInfo) {
    var texName = inputInfo.name;
    var funcName = 'get' + texName.charAt(0).toUpperCase() + texName.slice(1);
    var glsl = getGlslDifferences();
    return "\n    vec4 ".concat(funcName, "() {\n      return ").concat(glsl.texture2D, "(").concat(texName, ", halfCR);\n    }\n  ");
}
function getSamplerScalar(inputInfo, enableShapeUniforms) {
    var texName = inputInfo.name;
    var funcName = 'get' + texName.charAt(0).toUpperCase() + texName.slice(1);
    if (inputInfo.shapeInfo.isUniform) {
        return "float ".concat(funcName, "() {return ").concat(texName, ";}");
    }
    var _a = __read(inputInfo.shapeInfo.texShape, 2), texNumR = _a[0], texNumC = _a[1];
    if (texNumR === 1 && texNumC === 1) {
        return "\n      float ".concat(funcName, "() {\n        return sampleTexture(").concat(texName, ", halfCR);\n      }\n    ");
    }
    var offset = getFlatOffsetUniformName(texName);
    if (enableShapeUniforms) {
        return "\n    float ".concat(funcName, "() {\n      vec2 uv = uvFromFlat(").concat(texName, "TexShape[0], ").concat(texName, "TexShape[1], ").concat(offset, ");\n      return sampleTexture(").concat(texName, ", uv);\n    }\n  ");
    }
    var _b = __read(inputInfo.shapeInfo.texShape, 2), tNumR = _b[0], tNumC = _b[1];
    return "\n    float ".concat(funcName, "() {\n      vec2 uv = uvFromFlat(").concat(tNumR, ", ").concat(tNumC, ", ").concat(offset, ");\n      return sampleTexture(").concat(texName, ", uv);\n    }\n  ");
}
function getPackedSampler1D(inputInfo, enableShapeUniforms) {
    var texName = inputInfo.name;
    var funcName = 'get' + texName.charAt(0).toUpperCase() + texName.slice(1);
    var texShape = inputInfo.shapeInfo.texShape;
    var glsl = getGlslDifferences();
    if (enableShapeUniforms) {
        return "\n    vec4 ".concat(funcName, "(int index) {\n      ivec2 packedTexShape = ivec2(ceil(float(").concat(texName, "TexShape[0]) / 2.0), ceil(float(").concat(texName, "TexShape[1]) / 2.0));\n      vec2 uv = packedUVfrom1D(\n        packedTexShape[0], packedTexShape[1], index);\n      return ").concat(glsl.texture2D, "(").concat(texName, ", uv);\n    }\n  ");
    }
    var packedTexShape = [Math.ceil(texShape[0] / 2), Math.ceil(texShape[1] / 2)];
    return "\n    vec4 ".concat(funcName, "(int index) {\n      vec2 uv = packedUVfrom1D(\n        ").concat(packedTexShape[0], ", ").concat(packedTexShape[1], ", index);\n      return ").concat(glsl.texture2D, "(").concat(texName, ", uv);\n    }\n  ");
}
function getSampler1D(inputInfo, enableShapeUniforms) {
    var texName = inputInfo.name;
    var funcName = 'get' + texName.charAt(0).toUpperCase() + texName.slice(1);
    if (inputInfo.shapeInfo.isUniform) {
        // Uniform arrays will be less than 65505 (no risk of float16 overflow).
        return "\n      float ".concat(funcName, "(int index) {\n        ").concat(getUniformSampler(inputInfo), "\n      }\n    ");
    }
    var texShape = inputInfo.shapeInfo.texShape;
    var tNumR = texShape[0];
    var tNumC = texShape[1];
    if (tNumC === 1 && tNumR === 1) {
        return "\n      float ".concat(funcName, "(int index) {\n        return sampleTexture(").concat(texName, ", halfCR);\n      }\n    ");
    }
    var offset = getFlatOffsetUniformName(texName);
    if (tNumC === 1) {
        if (enableShapeUniforms) {
            return "\n      float ".concat(funcName, "(int index) {\n        vec2 uv = vec2(0.5, (float(index + ").concat(offset, ") + 0.5) / float(").concat(texName, "TexShape[0]));\n        return sampleTexture(").concat(texName, ", uv);\n      }\n    ");
        }
        return "\n      float ".concat(funcName, "(int index) {\n        vec2 uv = vec2(0.5, (float(index + ").concat(offset, ") + 0.5) / ").concat(tNumR, ".0);\n        return sampleTexture(").concat(texName, ", uv);\n      }\n    ");
    }
    if (tNumR === 1) {
        if (enableShapeUniforms) {
            return "\n      float ".concat(funcName, "(int index) {\n        vec2 uv = vec2((float(index + ").concat(offset, ") + 0.5) / float(").concat(texName, "TexShape[1]), 0.5);\n        return sampleTexture(").concat(texName, ", uv);\n      }\n    ");
        }
        return "\n      float ".concat(funcName, "(int index) {\n        vec2 uv = vec2((float(index + ").concat(offset, ") + 0.5) / ").concat(tNumC, ".0, 0.5);\n        return sampleTexture(").concat(texName, ", uv);\n      }\n    ");
    }
    if (enableShapeUniforms) {
        return "\n    float ".concat(funcName, "(int index) {\n      vec2 uv = uvFromFlat(").concat(texName, "TexShape[0], ").concat(texName, "TexShape[1], index + ").concat(offset, ");\n      return sampleTexture(").concat(texName, ", uv);\n    }\n  ");
    }
    return "\n    float ".concat(funcName, "(int index) {\n      vec2 uv = uvFromFlat(").concat(tNumR, ", ").concat(tNumC, ", index + ").concat(offset, ");\n      return sampleTexture(").concat(texName, ", uv);\n    }\n  ");
}
function getPackedSampler2D(inputInfo, enableShapeUniforms) {
    var shape = inputInfo.shapeInfo.logicalShape;
    var texName = inputInfo.name;
    var funcName = 'get' + texName.charAt(0).toUpperCase() + texName.slice(1);
    var texShape = inputInfo.shapeInfo.texShape;
    var texNumR = texShape[0];
    var texNumC = texShape[1];
    var glsl = getGlslDifferences();
    if (texShape != null && tf.util.arraysEqual(shape, texShape)) {
        if (enableShapeUniforms) {
            return "\n      vec4 ".concat(funcName, "(int row, int col) {\n        vec2 uv = (vec2(col, row) + halfCR) / vec2(").concat(texName, "TexShape[1], ").concat(texName, "TexShape[0]);\n\n        return ").concat(glsl.texture2D, "(").concat(texName, ", uv);\n      }\n    ");
        }
        return "\n      vec4 ".concat(funcName, "(int row, int col) {\n        vec2 uv = (vec2(col, row) + halfCR) / vec2(").concat(texNumC, ".0, ").concat(texNumR, ".0);\n\n        return ").concat(glsl.texture2D, "(").concat(texName, ", uv);\n      }\n    ");
    }
    if (enableShapeUniforms) {
        return "\n    vec4 ".concat(funcName, "(int row, int col) {\n      ivec2 packedTexShape = ivec2(ceil(float(").concat(texName, "TexShape[0]) / 2.0), ceil(float(").concat(texName, "TexShape[1]) / 2.0));\n      int valuesPerRow = int(ceil(float(").concat(texName, "Shape[1]) / 2.0));\n      vec2 uv = packedUVfrom2D(valuesPerRow, packedTexShape[0], packedTexShape[1], row, col);\n      return ").concat(glsl.texture2D, "(").concat(texName, ", uv);\n    }\n  ");
    }
    var packedTexShape = [Math.ceil(texShape[0] / 2), Math.ceil(texShape[1] / 2)];
    var valuesPerRow = Math.ceil(shape[1] / 2);
    return "\n    vec4 ".concat(funcName, "(int row, int col) {\n      vec2 uv = packedUVfrom2D(").concat(valuesPerRow, ", ").concat(packedTexShape[0], ", ").concat(packedTexShape[1], ", row, col);\n      return ").concat(glsl.texture2D, "(").concat(texName, ", uv);\n    }\n  ");
}
function getSampler2D(inputInfo, enableShapeUniforms) {
    var shape = inputInfo.shapeInfo.logicalShape;
    var texName = inputInfo.name;
    var funcName = 'get' + texName.charAt(0).toUpperCase() + texName.slice(1);
    var texShape = inputInfo.shapeInfo.texShape;
    if (texShape != null && tf.util.arraysEqual(shape, texShape)) {
        if (enableShapeUniforms) {
            return "\n      float ".concat(funcName, "(int row, int col) {\n        vec2 uv = (vec2(col, row) + halfCR) / vec2(").concat(texName, "TexShape[1], ").concat(texName, "TexShape[0]);\n        return sampleTexture(").concat(texName, ", uv);\n      }\n    ");
        }
        var texNumR_1 = texShape[0];
        var texNumC_1 = texShape[1];
        return "\n    float ".concat(funcName, "(int row, int col) {\n      vec2 uv = (vec2(col, row) + halfCR) / vec2(").concat(texNumC_1, ".0, ").concat(texNumR_1, ".0);\n      return sampleTexture(").concat(texName, ", uv);\n    }\n  ");
    }
    var _a = tf.util.squeezeShape(shape), newShape = _a.newShape, keptDims = _a.keptDims;
    var squeezedShape = newShape;
    if (squeezedShape.length < shape.length) {
        var newInputInfo = squeezeInputInfo(inputInfo, squeezedShape);
        var params = ['row', 'col'];
        return "\n      ".concat(getSamplerFromInInfo(newInputInfo, enableShapeUniforms), "\n      float ").concat(funcName, "(int row, int col) {\n        return ").concat(funcName, "(").concat(getSqueezedParams(params, keptDims), ");\n      }\n    ");
    }
    if (inputInfo.shapeInfo.isUniform) {
        // Uniform arrays will be less than 65505 (no risk of float16 overflow).
        return "\n      float ".concat(funcName, "(int row, int col) {\n        int index = round(dot(vec2(row, col), vec2(").concat(shape[1], ", 1)));\n        ").concat(getUniformSampler(inputInfo), "\n      }\n    ");
    }
    var texNumR = texShape[0];
    var texNumC = texShape[1];
    var offset = getFlatOffsetUniformName(texName);
    if (texNumC === 1) {
        // index is used directly as physical (no risk of float16 overflow).
        if (enableShapeUniforms) {
            return "\n      float ".concat(funcName, "(int row, int col) {\n        float index = dot(vec3(row, col, ").concat(offset, "), vec3(").concat(texName, "Shape[1], 1, 1));\n        vec2 uv = vec2(0.5, (index + 0.5) / float(").concat(texName, "TexShape[0]));\n        return sampleTexture(").concat(texName, ", uv);\n      }\n    ");
        }
        return "\n    float ".concat(funcName, "(int row, int col) {\n      float index = dot(vec3(row, col, ").concat(offset, "), vec3(").concat(shape[1], ", 1, 1));\n      vec2 uv = vec2(0.5, (index + 0.5) / ").concat(texNumR, ".0);\n      return sampleTexture(").concat(texName, ", uv);\n    }\n  ");
    }
    if (texNumR === 1) {
        // index is used directly as physical (no risk of float16 overflow).
        if (enableShapeUniforms) {
            return "\n      float ".concat(funcName, "(int row, int col) {\n        float index = dot(vec3(row, col, ").concat(offset, "), vec3(").concat(texName, "Shape[1], 1, 1));\n        vec2 uv = vec2((index + 0.5) / float(").concat(texName, "TexShape[1]), 0.5);\n        return sampleTexture(").concat(texName, ", uv);\n      }\n    ");
        }
        return "\n    float ".concat(funcName, "(int row, int col) {\n      float index = dot(vec3(row, col, ").concat(offset, "), vec3(").concat(shape[1], ", 1, 1));\n      vec2 uv = vec2((index + 0.5) / ").concat(texNumC, ".0, 0.5);\n      return sampleTexture(").concat(texName, ", uv);\n    }\n  ");
    }
    if (enableShapeUniforms) {
        return "\n      float ".concat(funcName, "(int row, int col) {\n        // Explicitly use integer operations as dot() only works on floats.\n        int index = row * ").concat(texName, "Shape[1] + col + ").concat(offset, ";\n        vec2 uv = uvFromFlat(").concat(texName, "TexShape[0], ").concat(texName, "TexShape[1], index);\n        return sampleTexture(").concat(texName, ", uv);\n      }\n    ");
    }
    return "\n  float ".concat(funcName, "(int row, int col) {\n    // Explicitly use integer operations as dot() only works on floats.\n    int index = row * ").concat(shape[1], " + col + ").concat(offset, ";\n    vec2 uv = uvFromFlat(").concat(texNumR, ", ").concat(texNumC, ", index);\n    return sampleTexture(").concat(texName, ", uv);\n  }\n");
}
function getPackedSampler3D(inputInfo, enableShapeUniforms) {
    var shape = inputInfo.shapeInfo.logicalShape;
    var texName = inputInfo.name;
    var funcName = 'get' + texName.charAt(0).toUpperCase() + texName.slice(1);
    var texShape = inputInfo.shapeInfo.texShape;
    var packedTexShape = [Math.ceil(texShape[0] / 2), Math.ceil(texShape[1] / 2)];
    if (shape[0] === 1) {
        var squeezedShape = shape.slice(1);
        var keptDims = [1, 2];
        var newInputInfo = squeezeInputInfo(inputInfo, squeezedShape);
        var params = ['b', 'row', 'col'];
        return "\n        ".concat(getPackedSamplerFromInInfo(newInputInfo, enableShapeUniforms), "\n        vec4 ").concat(funcName, "(int b, int row, int col) {\n          return ").concat(funcName, "(").concat(getSqueezedParams(params, keptDims), ");\n        }\n      ");
    }
    var glsl = getGlslDifferences();
    if (enableShapeUniforms) {
        return "\n    vec4 ".concat(funcName, "(int b, int row, int col) {\n      ivec2 packedTexShape = ivec2(ceil(float(").concat(texName, "TexShape[0]) / 2.0), ceil(float(").concat(texName, "TexShape[1]) / 2.0));\n      int valuesPerRow = int(ceil(float(").concat(texName, "Shape[2]) / 2.0));\n      int texelsInBatch = valuesPerRow * int(ceil(float(").concat(texName, "Shape[1]) / 2.0));\n      vec2 uv = packedUVfrom3D(\n        packedTexShape[0], packedTexShape[1], texelsInBatch, valuesPerRow, b, row, col);\n      return ").concat(glsl.texture2D, "(").concat(texName, ", uv);\n    }\n  ");
    }
    var texNumR = packedTexShape[0];
    var texNumC = packedTexShape[1];
    var valuesPerRow = Math.ceil(shape[2] / 2);
    var texelsInBatch = valuesPerRow * Math.ceil(shape[1] / 2);
    return "\n    vec4 ".concat(funcName, "(int b, int row, int col) {\n      vec2 uv = packedUVfrom3D(\n        ").concat(texNumR, ", ").concat(texNumC, ", ").concat(texelsInBatch, ", ").concat(valuesPerRow, ", b, row, col);\n      return ").concat(glsl.texture2D, "(").concat(texName, ", uv);\n    }\n  ");
}
function getSampler3D(inputInfo, enableShapeUniforms) {
    var shape = inputInfo.shapeInfo.logicalShape;
    var texName = inputInfo.name;
    var funcName = 'get' + texName.charAt(0).toUpperCase() + texName.slice(1);
    var stride0 = shape[1] * shape[2];
    var stride1 = shape[2];
    var _a = tf.util.squeezeShape(shape), newShape = _a.newShape, keptDims = _a.keptDims;
    var squeezedShape = newShape;
    if (squeezedShape.length < shape.length) {
        var newInputInfo = squeezeInputInfo(inputInfo, squeezedShape);
        var params = ['row', 'col', 'depth'];
        return "\n        ".concat(getSamplerFromInInfo(newInputInfo, enableShapeUniforms), "\n        float ").concat(funcName, "(int row, int col, int depth) {\n          return ").concat(funcName, "(").concat(getSqueezedParams(params, keptDims), ");\n        }\n      ");
    }
    if (inputInfo.shapeInfo.isUniform) {
        // Uniform arrays will be less than 65505 (no risk of float16 overflow).
        return "\n      float ".concat(funcName, "(int row, int col, int depth) {\n        int index = round(dot(vec3(row, col, depth),\n                          vec3(").concat(stride0, ", ").concat(stride1, ", 1)));\n        ").concat(getUniformSampler(inputInfo), "\n      }\n    ");
    }
    var texShape = inputInfo.shapeInfo.texShape;
    var texNumR = texShape[0];
    var texNumC = texShape[1];
    var flatOffset = inputInfo.shapeInfo.flatOffset;
    if (texNumC === stride0 && flatOffset == null) {
        // texC is used directly as physical (no risk of float16 overflow).
        if (enableShapeUniforms) {
            return "\n      float ".concat(funcName, "(int row, int col, int depth) {\n        int stride1 = ").concat(texName, "Shape[2];\n        float texR = float(row);\n        float texC = dot(vec2(col, depth), vec2(stride1, 1));\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                   vec2(").concat(texName, "TexShape[1], ").concat(texName, "TexShape[0]);\n        return sampleTexture(").concat(texName, ", uv);\n      }\n    ");
        }
        return "\n        float ".concat(funcName, "(int row, int col, int depth) {\n          float texR = float(row);\n          float texC = dot(vec2(col, depth), vec2(").concat(stride1, ", 1));\n          vec2 uv = (vec2(texC, texR) + halfCR) /\n                     vec2(").concat(texNumC, ".0, ").concat(texNumR, ".0);\n          return sampleTexture(").concat(texName, ", uv);\n        }\n      ");
    }
    if (texNumC === stride1 && flatOffset == null) {
        // texR is used directly as physical (no risk of float16 overflow).
        if (enableShapeUniforms) {
            return "\n      float ".concat(funcName, "(int row, int col, int depth) {\n        float texR = dot(vec2(row, col), vec2(").concat(texName, "Shape[1], 1));\n        float texC = float(depth);\n        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(").concat(texName, "TexShape[1], ").concat(texName, "TexShape[0]);\n        return sampleTexture(").concat(texName, ", uv);\n      }\n    ");
        }
        return "\n    float ".concat(funcName, "(int row, int col, int depth) {\n      float texR = dot(vec2(row, col), vec2(").concat(shape[1], ", 1));\n      float texC = float(depth);\n      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(").concat(texNumC, ".0, ").concat(texNumR, ".0);\n      return sampleTexture(").concat(texName, ", uv);\n    }\n  ");
    }
    var offset = getFlatOffsetUniformName(texName);
    if (enableShapeUniforms) {
        return "\n    float ".concat(funcName, "(int row, int col, int depth) {\n      // Explicitly use integer operations as dot() only works on floats.\n      int stride0 = ").concat(texName, "Shape[1] * ").concat(texName, "Shape[2];\n      int stride1 = ").concat(texName, "Shape[2];\n      int index = row * stride0 + col * stride1 + depth + ").concat(offset, ";\n      vec2 uv = uvFromFlat(").concat(texName, "TexShape[0], ").concat(texName, "TexShape[1], index);\n      return sampleTexture(").concat(texName, ", uv);\n    }\n    ");
    }
    return "\n      float ".concat(funcName, "(int row, int col, int depth) {\n        // Explicitly use integer operations as dot() only works on floats.\n        int index = row * ").concat(stride0, " + col * ").concat(stride1, " + depth + ").concat(offset, ";\n        vec2 uv = uvFromFlat(").concat(texNumR, ", ").concat(texNumC, ", index);\n        return sampleTexture(").concat(texName, ", uv);\n      }\n  ");
}
function getPackedSamplerND(inputInfo, enableShapeUniforms) {
    var texName = inputInfo.name;
    var funcName = 'get' + texName.charAt(0).toUpperCase() + texName.slice(1);
    var glsl = getGlslDifferences();
    if (enableShapeUniforms) {
        // TODO: support 5d and 6d
        return "\n    vec4 ".concat(funcName, "(int b2, int b, int row, int col) {\n      int valuesPerRow = int(ceil(float(").concat(texName, "Shape[3]) / 2.0));\n      int texelsInBatch = valuesPerRow * int(ceil(float(").concat(texName, "Shape[2]) / 2.0));\n      int index = b * texelsInBatch + (row / 2) * valuesPerRow + (col / 2);\n      texelsInBatch *= ").concat(texName, "Shape[1];\n      index = b2 * texelsInBatch + index;\n      ivec2 packedTexShape = ivec2(ceil(float(").concat(texName, "TexShape[0]) / 2.0), ceil(float(").concat(texName, "TexShape[1]) / 2.0));\n      int texR = index / packedTexShape[1];\n      int texC = index - texR * packedTexShape[1];\n      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(packedTexShape[1], packedTexShape[0]); return ").concat(glsl.texture2D, "(").concat(texName, ", uv);\n    }\n  ");
    }
    var shape = inputInfo.shapeInfo.logicalShape;
    var rank = shape.length;
    var texShape = inputInfo.shapeInfo.texShape;
    var packedTexShape = [Math.ceil(texShape[0] / 2), Math.ceil(texShape[1] / 2)];
    var texNumR = packedTexShape[0];
    var texNumC = packedTexShape[1];
    var valuesPerRow = Math.ceil(shape[rank - 1] / 2);
    var texelsInBatch = valuesPerRow * Math.ceil(shape[rank - 2] / 2);
    var params = "int b, int row, int col";
    var index = "b * ".concat(texelsInBatch, " + (row / 2) * ").concat(valuesPerRow, " + (col / 2)");
    for (var b = 2; b < rank - 1; b++) {
        params = "int b".concat(b, ", ") + params;
        texelsInBatch *= shape[rank - b - 1];
        index = "b".concat(b, " * ").concat(texelsInBatch, " + ") + index;
    }
    return "\n    vec4 ".concat(funcName, "(").concat(params, ") {\n      int index = ").concat(index, ";\n      int texR = index / ").concat(texNumC, ";\n      int texC = index - texR * ").concat(texNumC, ";\n      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(").concat(texNumC, ", ").concat(texNumR, ");\n      return ").concat(glsl.texture2D, "(").concat(texName, ", uv);\n    }\n  ");
}
function getSampler4D(inputInfo, enableShapeUniforms) {
    var shape = inputInfo.shapeInfo.logicalShape;
    var texName = inputInfo.name;
    var funcName = 'get' + texName.charAt(0).toUpperCase() + texName.slice(1);
    var stride2 = shape[3];
    var stride1 = shape[2] * stride2;
    var stride0 = shape[1] * stride1;
    var _a = tf.util.squeezeShape(shape), newShape = _a.newShape, keptDims = _a.keptDims;
    if (newShape.length < shape.length) {
        var newInputInfo = squeezeInputInfo(inputInfo, newShape);
        var params = ['row', 'col', 'depth', 'depth2'];
        return "\n      ".concat(getSamplerFromInInfo(newInputInfo, enableShapeUniforms), "\n      float ").concat(funcName, "(int row, int col, int depth, int depth2) {\n        return ").concat(funcName, "(").concat(getSqueezedParams(params, keptDims), ");\n      }\n    ");
    }
    if (inputInfo.shapeInfo.isUniform) {
        // Uniform arrays will be less than 65505 (no risk of float16 overflow).
        return "\n      float ".concat(funcName, "(int row, int col, int depth, int depth2) {\n        int index = round(dot(vec4(row, col, depth, depth2),\n                          vec4(").concat(stride0, ", ").concat(stride1, ", ").concat(stride2, ", 1)));\n        ").concat(getUniformSampler(inputInfo), "\n      }\n    ");
    }
    var flatOffset = inputInfo.shapeInfo.flatOffset;
    var texShape = inputInfo.shapeInfo.texShape;
    var texNumR = texShape[0];
    var texNumC = texShape[1];
    var stride2Str = "int stride2 = ".concat(texName, "Shape[3];");
    var stride1Str = "int stride1 = ".concat(texName, "Shape[2] * stride2;");
    var stride0Str = "int stride0 = ".concat(texName, "Shape[1] * stride1;");
    if (texNumC === stride0 && flatOffset == null) {
        // texC is used directly as physical (no risk of float16 overflow).
        if (enableShapeUniforms) {
            return "\n      float ".concat(funcName, "(int row, int col, int depth, int depth2) {\n        ").concat(stride2Str, "\n        ").concat(stride1Str, "\n        float texR = float(row);\n        float texC =\n            dot(vec3(col, depth, depth2),\n                vec3(stride1, stride2, 1));\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                   vec2(").concat(texName, "TexShape[1], ").concat(texName, "TexShape[0]);\n        return sampleTexture(").concat(texName, ", uv);\n      }\n    ");
        }
        return "\n      float ".concat(funcName, "(int row, int col, int depth, int depth2) {\n        float texR = float(row);\n        float texC =\n            dot(vec3(col, depth, depth2),\n                vec3(").concat(stride1, ", ").concat(stride2, ", 1));\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                   vec2(").concat(texNumC, ".0, ").concat(texNumR, ".0);\n        return sampleTexture(").concat(texName, ", uv);\n      }\n    ");
    }
    if (texNumC === stride2 && flatOffset == null) {
        // texR is used directly as physical (no risk of float16 overflow).
        if (enableShapeUniforms) {
            return "\n      float ".concat(funcName, "(int row, int col, int depth, int depth2) {\n        float texR = dot(vec3(row, col, depth),\n                         vec3(").concat(texName, "Shape[1] * ").concat(texName, "Shape[2], ").concat(texName, "Shape[2], 1));\n        float texC = float(depth2);\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                  vec2(").concat(texName, "TexShape[1], ").concat(texName, "TexShape[0]);\n        return sampleTexture(").concat(texName, ", uv);\n      }\n    ");
        }
        return "\n      float ".concat(funcName, "(int row, int col, int depth, int depth2) {\n        float texR = dot(vec3(row, col, depth),\n                         vec3(").concat(shape[1] * shape[2], ", ").concat(shape[2], ", 1));\n        float texC = float(depth2);\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                  vec2(").concat(texNumC, ".0, ").concat(texNumR, ".0);\n        return sampleTexture(").concat(texName, ", uv);\n      }\n    ");
    }
    var offset = getFlatOffsetUniformName(texName);
    if (enableShapeUniforms) {
        return "\n    float ".concat(funcName, "(int row, int col, int depth, int depth2) {\n      // Explicitly use integer operations as dot() only works on floats.\n      ").concat(stride2Str, "\n      ").concat(stride1Str, "\n      ").concat(stride0Str, "\n      int index = row * stride0 + col * stride1 +\n          depth * stride2 + depth2;\n      vec2 uv = uvFromFlat(").concat(texName, "TexShape[0], ").concat(texName, "TexShape[1], index + ").concat(offset, ");\n      return sampleTexture(").concat(texName, ", uv);\n    }\n  ");
    }
    return "\n    float ".concat(funcName, "(int row, int col, int depth, int depth2) {\n      // Explicitly use integer operations as dot() only works on floats.\n      int index = row * ").concat(stride0, " + col * ").concat(stride1, " +\n          depth * ").concat(stride2, " + depth2;\n      vec2 uv = uvFromFlat(").concat(texNumR, ", ").concat(texNumC, ", index + ").concat(offset, ");\n      return sampleTexture(").concat(texName, ", uv);\n    }\n  ");
}
function getSampler5D(inputInfo) {
    var shape = inputInfo.shapeInfo.logicalShape;
    var texName = inputInfo.name;
    var funcName = 'get' + texName.charAt(0).toUpperCase() + texName.slice(1);
    var stride3 = shape[4];
    var stride2 = shape[3] * stride3;
    var stride1 = shape[2] * stride2;
    var stride0 = shape[1] * stride1;
    var _a = tf.util.squeezeShape(shape), newShape = _a.newShape, keptDims = _a.keptDims;
    if (newShape.length < shape.length) {
        var newInputInfo = squeezeInputInfo(inputInfo, newShape);
        var params = ['row', 'col', 'depth', 'depth2', 'depth3'];
        return "\n      ".concat(getSamplerFromInInfo(newInputInfo), "\n      float ").concat(funcName, "(int row, int col, int depth, int depth2, int depth3) {\n        return ").concat(funcName, "(").concat(getSqueezedParams(params, keptDims), ");\n      }\n    ");
    }
    if (inputInfo.shapeInfo.isUniform) {
        // Uniform arrays will be less than 65505 (no risk of float16 overflow).
        return "\n      float ".concat(funcName, "(int row, int col, int depth, int depth2, int depth3) {\n        float index = dot(\n          vec4(row, col, depth, depth2),\n          vec4(").concat(stride0, ", ").concat(stride1, ", ").concat(stride2, ", ").concat(stride3, ")) +\n          depth3;\n        ").concat(getUniformSampler(inputInfo), "\n      }\n    ");
    }
    var flatOffset = inputInfo.shapeInfo.flatOffset;
    var texShape = inputInfo.shapeInfo.texShape;
    var texNumR = texShape[0];
    var texNumC = texShape[1];
    if (texNumC === stride0 && flatOffset == null) {
        // texC is used directly as physical (no risk of float16 overflow).
        return "\n      float ".concat(funcName, "(int row, int col, int depth, int depth2, int depth3) {\n        int texR = row;\n        float texC = dot(vec4(col, depth, depth2, depth3),\n                         vec4(").concat(stride1, ", ").concat(stride2, ", ").concat(stride3, ", 1));\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                   vec2(").concat(texNumC, ".0, ").concat(texNumR, ".0);\n        return sampleTexture(").concat(texName, ", uv);\n      }\n    ");
    }
    if (texNumC === stride3 && flatOffset == null) {
        // texR is used directly as physical (no risk of float16 overflow).
        return "\n      float ".concat(funcName, "(int row, int col, int depth, int depth2, int depth3) {\n        float texR = dot(\n          vec4(row, col, depth, depth2),\n          vec4(").concat(shape[1] * shape[2] * shape[3], ",\n               ").concat(shape[2] * shape[3], ", ").concat(shape[3], ", 1));\n        int texC = depth3;\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                  vec2(").concat(texNumC, ".0, ").concat(texNumR, ".0);\n        return sampleTexture(").concat(texName, ", uv);\n      }\n    ");
    }
    var offset = getFlatOffsetUniformName(texName);
    return "\n    float ".concat(funcName, "(int row, int col, int depth, int depth2, int depth3) {\n      // Explicitly use integer operations as dot() only works on floats.\n      int index = row * ").concat(stride0, " + col * ").concat(stride1, " + depth * ").concat(stride2, " +\n          depth2 * ").concat(stride3, " + depth3 + ").concat(offset, ";\n      vec2 uv = uvFromFlat(").concat(texNumR, ", ").concat(texNumC, ", index);\n      return sampleTexture(").concat(texName, ", uv);\n    }\n  ");
}
function getSampler6D(inputInfo) {
    var shape = inputInfo.shapeInfo.logicalShape;
    var texName = inputInfo.name;
    var funcName = 'get' + texName.charAt(0).toUpperCase() + texName.slice(1);
    var _a = tf.util.squeezeShape(shape), newShape = _a.newShape, keptDims = _a.keptDims;
    if (newShape.length < shape.length) {
        var newInputInfo = squeezeInputInfo(inputInfo, newShape);
        var params = ['row', 'col', 'depth', 'depth2', 'depth3', 'depth4'];
        return "\n      ".concat(getSamplerFromInInfo(newInputInfo), "\n      float ").concat(funcName, "(int row, int col, int depth,\n                    int depth2, int depth3, int depth4) {\n        return ").concat(funcName, "(").concat(getSqueezedParams(params, keptDims), ");\n      }\n    ");
    }
    var stride4 = shape[5];
    var stride3 = shape[4] * stride4;
    var stride2 = shape[3] * stride3;
    var stride1 = shape[2] * stride2;
    var stride0 = shape[1] * stride1;
    if (inputInfo.shapeInfo.isUniform) {
        // Uniform arrays will be less than 65505 (no risk of float16 overflow).
        return "\n      float ".concat(funcName, "(int row, int col, int depth,\n                  int depth2, int depth3, int depth4) {\n        int index = round(dot(\n          vec4(row, col, depth, depth2),\n          vec4(").concat(stride0, ", ").concat(stride1, ", ").concat(stride2, ", ").concat(stride3, ")) +\n          dot(\n            vec2(depth3, depth4),\n            vec2(").concat(stride4, ", 1)));\n        ").concat(getUniformSampler(inputInfo), "\n      }\n    ");
    }
    var flatOffset = inputInfo.shapeInfo.flatOffset;
    var texShape = inputInfo.shapeInfo.texShape;
    var texNumR = texShape[0];
    var texNumC = texShape[1];
    if (texNumC === stride0 && flatOffset == null) {
        // texC is used directly as physical (no risk of float16 overflow).
        return "\n      float ".concat(funcName, "(int row, int col, int depth,\n                    int depth2, int depth3, int depth4) {\n        int texR = row;\n        float texC = dot(vec4(col, depth, depth2, depth3),\n          vec4(").concat(stride1, ", ").concat(stride2, ", ").concat(stride3, ", ").concat(stride4, ")) +\n               float(depth4);\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                   vec2(").concat(texNumC, ".0, ").concat(texNumR, ".0);\n        return sampleTexture(").concat(texName, ", uv);\n      }\n    ");
    }
    if (texNumC === stride4 && flatOffset == null) {
        // texR is used directly as physical (no risk of float16 overflow).
        return "\n      float ".concat(funcName, "(int row, int col, int depth,\n                    int depth2, int depth3, int depth4) {\n        float texR = dot(vec4(row, col, depth, depth2),\n          vec4(").concat(shape[1] * shape[2] * shape[3] * shape[4], ",\n               ").concat(shape[2] * shape[3] * shape[4], ",\n               ").concat(shape[3] * shape[4], ",\n               ").concat(shape[4], ")) + float(depth3);\n        int texC = depth4;\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                  vec2(").concat(texNumC, ".0, ").concat(texNumR, ".0);\n        return sampleTexture(").concat(texName, ", uv);\n      }\n    ");
    }
    var offset = getFlatOffsetUniformName(texName);
    return "\n    float ".concat(funcName, "(int row, int col, int depth,\n                  int depth2, int depth3, int depth4) {\n      // Explicitly use integer operations as dot() only works on floats.\n      int index = row * ").concat(stride0, " + col * ").concat(stride1, " + depth * ").concat(stride2, " +\n          depth2 * ").concat(stride3, " + depth3 * ").concat(stride4, " + depth4 + ").concat(offset, ";\n      vec2 uv = uvFromFlat(").concat(texNumR, ", ").concat(texNumC, ", index);\n      return sampleTexture(").concat(texName, ", uv);\n    }\n  ");
}
function getUniformSampler(inputInfo) {
    var texName = inputInfo.name;
    var inSize = tf.util.sizeFromShape(inputInfo.shapeInfo.logicalShape);
    if (inSize < 2) {
        return "return ".concat(texName, ";");
    }
    return "\n    for (int i = 0; i < ".concat(inSize, "; i++) {\n      if (i == index) {\n        return ").concat(texName, "[i];\n      }\n    }\n  ");
}
function getPackedSamplerAtOutputCoords(inputInfo, outShapeInfo) {
    var texName = inputInfo.name;
    var texFuncSnippet = texName.charAt(0).toUpperCase() + texName.slice(1);
    var funcName = 'get' + texFuncSnippet + 'AtOutCoords';
    var inRank = inputInfo.shapeInfo.logicalShape.length;
    var outRank = outShapeInfo.logicalShape.length;
    var broadcastDims = getBroadcastDims(inputInfo.shapeInfo.logicalShape, outShapeInfo.logicalShape);
    var type = getCoordsDataType(outRank);
    var rankDiff = outRank - inRank;
    var coordsSnippet;
    var fields = ['x', 'y', 'z', 'w', 'u', 'v'];
    if (inRank === 0) {
        coordsSnippet = '';
    }
    else if (outRank < 2 && broadcastDims.length >= 1) {
        coordsSnippet = 'coords = 0;';
    }
    else {
        coordsSnippet =
            broadcastDims.map(function (d) { return "coords.".concat(fields[d + rankDiff], " = 0;"); })
                .join('\n');
    }
    var unpackedCoordsSnippet = '';
    if (outRank < 2 && inRank > 0) {
        unpackedCoordsSnippet = 'coords';
    }
    else {
        unpackedCoordsSnippet = inputInfo.shapeInfo.logicalShape
            .map(function (s, i) { return "coords.".concat(fields[i + rankDiff]); })
            .join(', ');
    }
    var output = "return outputValue;";
    var inSize = tf.util.sizeFromShape(inputInfo.shapeInfo.logicalShape);
    var isInputScalar = inSize === 1;
    var outSize = tf.util.sizeFromShape(outShapeInfo.logicalShape);
    var isOutputScalar = outSize === 1;
    if (inRank === 1 && !isInputScalar && !isOutputScalar) {
        output = "\n      return vec4(outputValue.xy, outputValue.xy);\n    ";
    }
    else if (isInputScalar && !isOutputScalar) {
        if (outRank === 1) {
            output = "\n        return vec4(outputValue.x, outputValue.x, 0., 0.);\n      ";
        }
        else {
            output = "\n        return vec4(outputValue.x);\n      ";
        }
    }
    else if (broadcastDims.length) {
        var rows = inRank - 2;
        var cols = inRank - 1;
        if (broadcastDims.indexOf(rows) > -1 && broadcastDims.indexOf(cols) > -1) {
            output = "return vec4(outputValue.x);";
        }
        else if (broadcastDims.indexOf(rows) > -1) {
            output = "return vec4(outputValue.x, outputValue.y, " +
                "outputValue.x, outputValue.y);";
        }
        else if (broadcastDims.indexOf(cols) > -1) {
            output = "return vec4(outputValue.xx, outputValue.zz);";
        }
    }
    return "\n    vec4 ".concat(funcName, "() {\n      ").concat(type, " coords = getOutputCoords();\n      ").concat(coordsSnippet, "\n      vec4 outputValue = get").concat(texFuncSnippet, "(").concat(unpackedCoordsSnippet, ");\n      ").concat(output, "\n    }\n  ");
}
function getSamplerAtOutputCoords(inputInfo, outShapeInfo) {
    var texName = inputInfo.name;
    var texFuncSnippet = texName.charAt(0).toUpperCase() + texName.slice(1);
    var funcName = 'get' + texFuncSnippet + 'AtOutCoords';
    var outTexShape = outShapeInfo.texShape;
    var inTexShape = inputInfo.shapeInfo.texShape;
    var inRank = inputInfo.shapeInfo.logicalShape.length;
    var outRank = outShapeInfo.logicalShape.length;
    if (!inputInfo.shapeInfo.isUniform && inRank === outRank &&
        inputInfo.shapeInfo.flatOffset == null &&
        tf.util.arraysEqual(inTexShape, outTexShape)) {
        return "\n      float ".concat(funcName, "() {\n        return sampleTexture(").concat(texName, ", resultUV);\n      }\n    ");
    }
    var type = getCoordsDataType(outRank);
    var broadcastDims = getBroadcastDims(inputInfo.shapeInfo.logicalShape, outShapeInfo.logicalShape);
    var rankDiff = outRank - inRank;
    var coordsSnippet;
    var fields = ['x', 'y', 'z', 'w', 'u', 'v'];
    if (inRank === 0) {
        coordsSnippet = '';
    }
    else if (outRank < 2 && broadcastDims.length >= 1) {
        coordsSnippet = 'coords = 0;';
    }
    else {
        coordsSnippet =
            broadcastDims.map(function (d) { return "coords.".concat(fields[d + rankDiff], " = 0;"); })
                .join('\n');
    }
    var unpackedCoordsSnippet = '';
    if (outRank < 2 && inRank > 0) {
        unpackedCoordsSnippet = 'coords';
    }
    else {
        unpackedCoordsSnippet = inputInfo.shapeInfo.logicalShape
            .map(function (s, i) { return "coords.".concat(fields[i + rankDiff]); })
            .join(', ');
    }
    return "\n    float ".concat(funcName, "() {\n      ").concat(type, " coords = getOutputCoords();\n      ").concat(coordsSnippet, "\n      return get").concat(texFuncSnippet, "(").concat(unpackedCoordsSnippet, ");\n    }\n  ");
}
function getCoordsDataType(rank) {
    if (rank <= 1) {
        return 'int';
    }
    else if (rank === 2) {
        return 'ivec2';
    }
    else if (rank === 3) {
        return 'ivec3';
    }
    else if (rank === 4) {
        return 'ivec4';
    }
    else if (rank === 5) {
        return 'ivec5';
    }
    else if (rank === 6) {
        return 'ivec6';
    }
    else {
        throw Error("GPU for rank ".concat(rank, " is not yet supported"));
    }
}
function getUniformInfoFromShape(isPacked, shape, texShape) {
    var _a = tf.util.squeezeShape(shape), newShape = _a.newShape, keptDims = _a.keptDims;
    var rank = shape.length;
    var useSqueezePackedShape = isPacked && rank === 3 && shape[0] === 1;
    var squeezeShape = useSqueezePackedShape ? shape.slice(1) : newShape;
    var useSqueezeShape = (!isPacked && rank > 1 && !tf.util.arraysEqual(shape, texShape) &&
        newShape.length < rank) ||
        useSqueezePackedShape;
    var uniformShape = useSqueezeShape ? squeezeShape : shape;
    return { useSqueezeShape: useSqueezeShape, uniformShape: uniformShape, keptDims: keptDims };
}
/** Returns a new input info (a copy) that has a squeezed logical shape. */
function squeezeInputInfo(inInfo, squeezedShape) {
    // Deep copy.
    var newInputInfo = JSON.parse(JSON.stringify(inInfo));
    newInputInfo.shapeInfo.logicalShape = squeezedShape;
    return newInputInfo;
}
function getSqueezedParams(params, keptDims) {
    return keptDims.map(function (d) { return params[d]; }).join(', ');
}

function compileProgram(gpgpu, program, inputs, output) {
    var inputInfos = inputs.map(function (input, i) {
        var shapeInfo = {
            logicalShape: input.shape,
            texShape: input.isUniform ? null : input.texData.texShape,
            isUniform: input.isUniform,
            isPacked: input.isUniform ? false : input.texData.isPacked,
            flatOffset: null
        };
        if (input.texData != null && input.texData.slice != null &&
            input.texData.slice.flatOffset > 0) {
            shapeInfo.flatOffset = input.texData.slice.flatOffset;
        }
        return { name: program.variableNames[i], shapeInfo: shapeInfo };
    });
    var inShapeInfos = inputInfos.map(function (x) { return x.shapeInfo; });
    var outShapeInfo = {
        logicalShape: output.shape,
        texShape: output.texData.texShape,
        isUniform: false,
        isPacked: output.texData.isPacked,
        flatOffset: null
    };
    var source = makeShader(inputInfos, outShapeInfo, program);
    var fragmentShader = createFragmentShader(gpgpu.gl, source);
    var webGLProgram = gpgpu.createProgram(fragmentShader);
    if (!tf.env().get('ENGINE_COMPILE_ONLY')) {
        gpgpu.buildVao(webGLProgram);
        return Object.assign({ program: program, fragmentShader: fragmentShader, source: source, webGLProgram: webGLProgram, inShapeInfos: inShapeInfos, outShapeInfo: outShapeInfo }, getUniformLocations(gpgpu, program, webGLProgram));
    }
    else {
        return {
            program: program,
            fragmentShader: fragmentShader,
            source: source,
            webGLProgram: webGLProgram,
            inShapeInfos: inShapeInfos,
            outShapeInfo: outShapeInfo,
            variablesLocations: null,
            customUniformLocations: null,
            infLoc: null,
            nanLoc: null,
            outShapeLocation: null,
            outShapeStridesLocation: null,
            outTexShapeLocation: null
        };
    }
}
function getUniformLocations(gpgpu, program, webGLProgram) {
    var e_1, _a, e_2, _b;
    var variablesLocations = [];
    var customUniformLocations = [];
    var outShapeLocation;
    var outTexShapeLocation;
    var outShapeStridesLocation;
    var infLoc = null;
    var nanLoc = null;
    // Add special uniforms (NAN, INFINITY)
    nanLoc = gpgpu.getUniformLocation(webGLProgram, 'NAN', false);
    if (tf.env().getNumber('WEBGL_VERSION') === 1) {
        infLoc = gpgpu.getUniformLocation(webGLProgram, 'INFINITY', false);
    }
    // Add user-defined uniforms
    var shouldThrow = false;
    try {
        for (var _c = __values(program.variableNames), _d = _c.next(); !_d.done; _d = _c.next()) {
            var varName = _d.value;
            var varLocs = {
                name: varName,
                uniform: gpgpu.getUniformLocation(webGLProgram, varName, shouldThrow),
                offset: gpgpu.getUniformLocation(webGLProgram, "offset".concat(varName), shouldThrow),
            };
            if (program.enableShapeUniforms) {
                varLocs.shape = gpgpu.getUniformLocation(webGLProgram, "".concat(varName, "Shape"), shouldThrow);
                varLocs.texShape = gpgpu.getUniformLocation(webGLProgram, "".concat(varName, "TexShape"), shouldThrow);
            }
            variablesLocations.push(varLocs);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
        }
        finally { if (e_1) throw e_1.error; }
    }
    if (program.enableShapeUniforms) {
        outShapeLocation =
            gpgpu.getUniformLocation(webGLProgram, 'outShape', shouldThrow);
        outShapeStridesLocation =
            gpgpu.getUniformLocation(webGLProgram, 'outShapeStrides', shouldThrow);
        outTexShapeLocation =
            gpgpu.getUniformLocation(webGLProgram, 'outTexShape', shouldThrow);
    }
    if (program.customUniforms) {
        try {
            for (var _e = __values(program.customUniforms), _f = _e.next(); !_f.done; _f = _e.next()) {
                var d = _f.value;
                customUniformLocations.push(gpgpu.getUniformLocation(webGLProgram, d.name, shouldThrow));
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
            }
            finally { if (e_2) throw e_2.error; }
        }
    }
    return {
        variablesLocations: variablesLocations,
        customUniformLocations: customUniformLocations,
        infLoc: infLoc,
        nanLoc: nanLoc,
        outShapeLocation: outShapeLocation,
        outShapeStridesLocation: outShapeStridesLocation,
        outTexShapeLocation: outTexShapeLocation
    };
}
function validateBinaryAndProgram(shapeInfos, inputs) {
    if (shapeInfos.length !== inputs.length) {
        throw Error("Binary was compiled with ".concat(shapeInfos.length, " inputs, but ") +
            "was executed with ".concat(inputs.length, " inputs"));
    }
    shapeInfos.forEach(function (s, i) {
        var shapeA = s.logicalShape;
        var input = inputs[i];
        var shapeB = input.shape;
        if (!tf.util.arraysEqual(shapeA, shapeB)) {
            throw Error("Binary was compiled with different shapes than " +
                "the current args. Shapes ".concat(shapeA, " and ").concat(shapeB, " must match"));
        }
        // The input is uploaded as uniform.
        if (s.isUniform && input.isUniform) {
            return;
        }
        var texShapeA = s.texShape;
        var texShapeB = input.isUniform ? null : input.texData.texShape;
        if (!tf.util.arraysEqual(texShapeA, texShapeB)) {
            throw Error("Binary was compiled with different texture shapes than the" +
                " current args. Shape ".concat(texShapeA, " and ").concat(texShapeB, " must match"));
        }
    });
}
function runProgram(gpgpu, binary, inputs, output, customUniformValues) {
    if (!binary.program.enableShapeUniforms) {
        validateBinaryAndProgram(binary.inShapeInfos, inputs);
        validateBinaryAndProgram([binary.outShapeInfo], [output]);
    }
    var outTex = output.texData.texture;
    var outTexShape = output.texData.texShape;
    if (output.texData.isPacked) {
        gpgpu.setOutputPackedMatrixTexture(outTex.texture, outTexShape[0], outTexShape[1]);
    }
    else {
        gpgpu.setOutputMatrixTexture(outTex.texture, outTexShape[0], outTexShape[1]);
    }
    gpgpu.setProgram(binary.webGLProgram);
    gpgpu.bindVertexArray(binary.webGLProgram.vao);
    // Set special uniforms (NAN, INFINITY)
    if (tf.env().getNumber('WEBGL_VERSION') === 1) {
        if (binary.infLoc !== null) {
            gpgpu.gl.uniform1f(binary.infLoc, Infinity);
        }
    }
    if (binary.nanLoc !== null) {
        gpgpu.gl.uniform1f(binary.nanLoc, NaN);
    }
    // Set user-defined inputs
    for (var i = 0; i < inputs.length; ++i) {
        var input = inputs[i];
        var _a = binary.variablesLocations[i], varLoc = _a.uniform, varOffsetLoc = _a.offset, varShapeLoc = _a.shape, varTexShapeLoc = _a.texShape;
        if (varShapeLoc) {
            var uniformShape = getUniformInfoFromShape(binary.program.packedInputs, input.shape, input.texData.texShape).uniformShape;
            switch (uniformShape.length) {
                case 1:
                    gpgpu.gl.uniform1iv(varShapeLoc, new Int32Array(uniformShape));
                    break;
                case 2:
                    gpgpu.gl.uniform2iv(varShapeLoc, new Int32Array(uniformShape));
                    break;
                case 3:
                    gpgpu.gl.uniform3iv(varShapeLoc, new Int32Array(uniformShape));
                    break;
                case 4:
                    gpgpu.gl.uniform4iv(varShapeLoc, new Int32Array(uniformShape));
                    break;
            }
        }
        if (varTexShapeLoc) {
            gpgpu.gl.uniform2i(varTexShapeLoc, input.texData.texShape[0], input.texData.texShape[1]);
        }
        if (varLoc == null) {
            // The compiler inferred that this variable is not used in this shader.
            continue;
        }
        if (input.isUniform) {
            // Upload the values of the tensor as uniform.
            if (tf.util.sizeFromShape(input.shape) < 2) {
                gpgpu.gl.uniform1f(varLoc, input.uniformValues[0]);
            }
            else {
                var vals = input.uniformValues;
                if (!(vals instanceof Float32Array)) {
                    vals = new Float32Array(vals);
                }
                gpgpu.gl.uniform1fv(varLoc, vals);
            }
            continue;
        }
        // If the input was sliced, upload the flat offset index.
        if (input.texData.slice != null && varOffsetLoc != null) {
            gpgpu.gl.uniform1i(varOffsetLoc, input.texData.slice.flatOffset);
        }
        gpgpu.setInputMatrixTexture(input.texData.texture.texture, varLoc, i);
    }
    var outShapeLoc = binary.outShapeLocation;
    if (outShapeLoc) {
        switch (output.shape.length) {
            case 1:
                gpgpu.gl.uniform1iv(outShapeLoc, new Int32Array(output.shape));
                break;
            case 2:
                gpgpu.gl.uniform2iv(outShapeLoc, new Int32Array(output.shape));
                break;
            case 3:
                gpgpu.gl.uniform3iv(outShapeLoc, new Int32Array(output.shape));
                break;
            case 4:
                gpgpu.gl.uniform4iv(outShapeLoc, new Int32Array(output.shape));
                break;
        }
    }
    if (binary.outShapeStridesLocation) {
        var strides = tf.util.computeStrides(output.shape);
        switch (output.shape.length) {
            case 2:
                gpgpu.gl.uniform1iv(binary.outShapeStridesLocation, new Int32Array(strides));
                break;
            case 3:
                gpgpu.gl.uniform2iv(binary.outShapeStridesLocation, new Int32Array(strides));
                break;
            case 4:
                gpgpu.gl.uniform3iv(binary.outShapeStridesLocation, new Int32Array(strides));
                break;
        }
    }
    if (binary.outTexShapeLocation) {
        gpgpu.gl.uniform2i(binary.outTexShapeLocation, output.texData.texShape[0], output.texData.texShape[1]);
    }
    if (binary.program.customUniforms && customUniformValues) {
        for (var i = 0; i < binary.program.customUniforms.length; ++i) {
            var d = binary.program.customUniforms[i];
            var customLoc = binary.customUniformLocations[i];
            var customValue = customUniformValues[i];
            if (d.type === 'float') {
                gpgpu.gl.uniform1fv(customLoc, customValue);
            }
            else if (d.type === 'vec2') {
                gpgpu.gl.uniform2fv(customLoc, customValue);
            }
            else if (d.type === 'vec3') {
                gpgpu.gl.uniform3fv(customLoc, customValue);
            }
            else if (d.type === 'vec4') {
                gpgpu.gl.uniform4fv(customLoc, customValue);
            }
            else if (d.type === 'int') {
                gpgpu.gl.uniform1iv(customLoc, customValue);
            }
            else if (d.type === 'ivec2') {
                gpgpu.gl.uniform2iv(customLoc, customValue);
            }
            else if (d.type === 'ivec3') {
                gpgpu.gl.uniform3iv(customLoc, customValue);
            }
            else if (d.type === 'ivec4') {
                gpgpu.gl.uniform4iv(customLoc, customValue);
            }
            else {
                throw Error("uniform type ".concat(d.type, " is not supported yet."));
            }
        }
    }
    gpgpu.executeProgram();
}
function makeShaderKey(program, inputs, output) {
    var keyInputs = '';
    inputs.concat(output).forEach(function (x) {
        var hasOffset = x.texData != null && x.texData.slice != null &&
            x.texData.slice.flatOffset > 0;
        // TODO: Remove the condition of !x.isUniform.
        if (program.enableShapeUniforms && !x.isUniform) {
            var xTexShape = x.texData.texShape;
            var _a = getUniformInfoFromShape(program.packedInputs, x.shape, xTexShape), useSqueezeShape = _a.useSqueezeShape, uniformShape = _a.uniformShape, keptDims = _a.keptDims;
            var rank1 = '', rank2 = '', rank34 = '';
            if (uniformShape.length === 1 && program.packedInputs) {
                var packedTexShape = [Math.ceil(xTexShape[0] / 2), Math.ceil(xTexShape[1] / 2)];
                rank1 = "".concat(packedTexShape[0] > 1, "_").concat(packedTexShape[1] > 1);
            }
            else if (uniformShape.length === 2 && !program.packedInputs) {
                rank2 = "".concat(uniformShape[0] > 1, "_").concat(uniformShape[1] > 1);
            }
            else if (uniformShape.length > 2 && !program.packedInputs) {
                var strides = tf.util.computeStrides(uniformShape);
                rank34 = "".concat(strides[0] === xTexShape[1], "_").concat(strides[strides.length - 1] === xTexShape[1]);
            }
            var xRank = x.shape.length;
            var isLogicalShapTexShapeEqual = uniformShape.length === 2 && tf.util.arraysEqual(x.shape, xTexShape);
            var isScalar = tf.util.sizeFromShape(x.shape) === 1;
            var broadcastDims = tf.backend_util.getBroadcastDims(x.shape, output.shape);
            var isInOutTexShapeEqual = !program.packedInputs &&
                xRank === output.shape.length &&
                tf.util.arraysEqual(xTexShape, output.texData.texShape);
            var isTexShapeGreaterThanOne = program.packedInputs || uniformShape.length > 2 ?
                '' :
                "".concat(xTexShape[0] > 1, "_").concat(xTexShape[1] > 1);
            // These key components are needed due to shader_compiler is embedding
            // them in the shader.
            // |xRank| is used to determine the coords length. See
            // get[Packed]SamplerAtOutputCoords.
            // |isInOutTexShapeEqual| is used to determine whether going to an
            // optimization path in getSamplerAtOutputCoords.
            // |useSqueezeShape| is extracted from squeezeInputInfo of
            // getSampler[2|3|4]D/getPackedSampler3D.
            // |isScalar| is extracted from isInputScalar/isOutputScalar in
            // getPackedSamplerAtOutputCoords.
            // |broadcastDims| is extracted from get[Packed]SamplerAtOutputCoords.
            // |isLogicalShapTexShapeEqual| is used in
            // getOutput[Packed]2DCoords/get[Packed]Sampler2D.
            // |rank1| is used in getOutputPacked1DCoords.
            // |rank2| is used in getOutput2DCoords.
            // |rank34| is used in getSampler3D/getSampler4D.
            // |isTexShapeGreaterThanOne| are used in
            // getSampler[Scalar|1D|2D]/getOutput1DCoords.
            keyInputs += "".concat(xRank, "_").concat(isInOutTexShapeEqual, "_").concat(useSqueezeShape ? keptDims : '', "_").concat(uniformShape.length, "_").concat(isScalar, "_").concat(broadcastDims, "_").concat(isLogicalShapTexShapeEqual, "_").concat(rank1, "_").concat(rank2, "_").concat(rank34, "_").concat(isTexShapeGreaterThanOne, "_").concat(hasOffset);
        }
        else {
            var texShape = x.isUniform ? 'uniform' : x.texData.texShape;
            keyInputs += "".concat(x.shape, "_").concat(texShape, "_").concat(hasOffset);
        }
    });
    var keyUserCode = program.userCode;
    var key = program.constructor.name;
    // Fast string concat. See https://jsperf.com/string-concatenation/14.
    key += '_' + keyInputs + '_' + keyUserCode +
        "".concat(tf.env().getNumber('WEBGL_VERSION'));
    return key;
}
function useShapeUniforms(rank) {
    // TODO: Remove the limitaion of rank <= 4.
    return tf.env().getBool('WEBGL_USE_SHAPES_UNIFORMS') && rank <= 4;
}

/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
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
var DecodeMatrixProgram = /** @class */ (function () {
    function DecodeMatrixProgram(outputShape) {
        this.variableNames = ['A'];
        this.packedInputs = false;
        this.packedOutput = true;
        this.outPackingScheme = PackingScheme.DENSE;
        this.customUniforms = [{ name: 'texShape', type: 'ivec2' }];
        var glsl = getGlslDifferences();
        this.outputShape = outputShape;
        this.enableShapeUniforms = useShapeUniforms(this.outputShape.length);
        this.userCode = "\n      ivec3 outCoordsFromFlatIndex(int index) {\n        ".concat(this.enableShapeUniforms ?
            getOutputLogicalCoordinatesFromFlatIndexByUniform(['r', 'c', 'd'], outputShape) :
            getLogicalCoordinatesFromFlatIndex(['r', 'c', 'd'], outputShape), "\n        return ivec3(r, c, d);\n      }\n\n      void main() {\n        ivec2 resTexRC = ivec2(resultUV.yx * vec2(texShape[0], texShape[1]));\n        int index = 4 * (resTexRC.x * texShape[1] + resTexRC.y);\n\n        vec4 result = vec4(0.);\n\n        for (int i=0; i<4; i++) {\n          int flatIndex = index + i;\n          ivec3 rc = outCoordsFromFlatIndex(flatIndex);\n          result[i] = getA(rc.x, rc.y, rc.z);\n        }\n\n        ").concat(glsl.output, " = result;\n      }\n    ");
    }
    return DecodeMatrixProgram;
}());

/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
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
var DecodeMatrixPackedProgram = /** @class */ (function () {
    function DecodeMatrixPackedProgram(outputShape) {
        this.variableNames = ['A'];
        this.packedInputs = true;
        this.packedOutput = true;
        this.outPackingScheme = PackingScheme.DENSE;
        this.customUniforms = [{ name: 'texShape', type: 'ivec2' }];
        var glsl = getGlslDifferences();
        this.outputShape = outputShape;
        this.enableShapeUniforms = useShapeUniforms(this.outputShape.length);
        this.userCode = "\n      ivec3 outCoordsFromFlatIndex(int index) {\n        ".concat(this.enableShapeUniforms ?
            getOutputLogicalCoordinatesFromFlatIndexByUniform(['r', 'c', 'd'], outputShape) :
            getLogicalCoordinatesFromFlatIndex(['r', 'c', 'd'], outputShape), "\n        return ivec3(r, c, d);\n      }\n\n      void main() {\n        ivec2 resTexRC = ivec2(resultUV.yx * vec2(texShape[0], texShape[1]));\n        int index = 4 * (resTexRC.x * texShape[1] + resTexRC.y);\n\n        vec4 result = vec4(0.);\n\n        for (int i=0; i<4; i++) {\n          int flatIndex = index + i;\n          ivec3 rc = outCoordsFromFlatIndex(flatIndex);\n          result[i] = getChannel(getA(rc.x, rc.y, rc.z), vec2(rc.y, rc.z));\n        }\n\n        ").concat(glsl.output, " = result;\n      }\n    ");
    }
    return DecodeMatrixPackedProgram;
}());

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
var EncodeFloatProgram = /** @class */ (function () {
    function EncodeFloatProgram(outputShape) {
        this.variableNames = ['A'];
        this.outTexUsage = TextureUsage.DOWNLOAD;
        var glsl = getGlslDifferences();
        this.outputShape = outputShape;
        this.userCode = "\n      ".concat(ENCODE_FLOAT_SNIPPET, "\n\n      void main() {\n        float x = getAAtOutCoords();\n        ").concat(glsl.output, " = encode_float(x);\n      }\n    ");
    }
    return EncodeFloatProgram;
}());

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
var EncodeFloatPackedProgram = /** @class */ (function () {
    function EncodeFloatPackedProgram(outputShape) {
        this.variableNames = ['A'];
        this.packedInputs = true;
        this.packedOutput = false;
        this.outTexUsage = TextureUsage.DOWNLOAD;
        var glsl = getGlslDifferences();
        this.outputShape = outputShape;
        this.userCode = "\n      ".concat(ENCODE_FLOAT_SNIPPET, "\n\n      void main() {\n        ivec3 coords = getOutputCoords();\n        float x = getChannel(getAAtOutCoords(), vec2(coords.y, coords.z));\n        ").concat(glsl.output, " = encode_float(x);\n      }\n    ");
    }
    return EncodeFloatPackedProgram;
}());

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
var CHANNEL_CHAR_TO_INDEX_MAP = {
    'R': 0,
    'G': 1,
    'B': 2,
    'A': 3
};
var EncodeMatrixProgram = /** @class */ (function () {
    function EncodeMatrixProgram(outputShape, inputIsUnsignedByte, usedChannels) {
        if (inputIsUnsignedByte === void 0) { inputIsUnsignedByte = false; }
        if (usedChannels === void 0) { usedChannels = 'RGBA'; }
        this.variableNames = ['A'];
        this.customUniforms = [{ name: 'texShape', type: 'ivec2' }];
        var glsl = getGlslDifferences();
        this.outputShape = outputShape;
        this.enableShapeUniforms = useShapeUniforms(this.outputShape.length);
        var output = "result";
        if (inputIsUnsignedByte) {
            output = "floor(result * 255. + 0.5)";
        }
        var mainLoop = '';
        for (var usedChannelIndex = 0; usedChannelIndex < usedChannels.length; usedChannelIndex++) {
            var curChannel = usedChannels[usedChannelIndex];
            mainLoop += "\n          if(offset == ".concat(usedChannelIndex, ") {\n            result = values[").concat(CHANNEL_CHAR_TO_INDEX_MAP[curChannel], "];\n          }");
        }
        this.userCode = "\n      ".concat(this.enableShapeUniforms ? getFlatIndexFrom3DOutput() :
            getFlatIndexFrom3D(outputShape), "\n\n      void main() {\n        ivec3 coords = getOutputCoords();\n        int flatIndex = getFlatIndex(coords);\n        float result = 0.;\n        int offset = imod(flatIndex, ").concat(usedChannels.length, ");\n\n        flatIndex = idiv(flatIndex, ").concat(usedChannels.length, ", 1.);\n\n        int r = flatIndex / texShape[1];\n        if (r < texShape[0]) {\n          int c = imod(flatIndex, texShape[1]);\n          vec2 uv = (vec2(c, r) + halfCR) / vec2(texShape[1], texShape[0]);\n          vec4 values = ").concat(glsl.texture2D, "(A, uv);\n          ").concat(mainLoop, "\n        }\n        ").concat(glsl.output, " = vec4(").concat(output, ", 0., 0., 0.);\n      }\n    ");
    }
    return EncodeMatrixProgram;
}());

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
/*
This is how the shader encodes a tensor with shape = [2, 3, 5]
(indices are [batch, row, col]).

000|001   002|003   004|xxx   020|021   022|023   024|xxx
-------   -------   -------   -------   -------   -------
010|011   012|013   014|xxx   xxx|xxx   xxx|xxx   xxx|xxx

100|101   102|103   104|xxx   120|121   122|123   124|xxx
-------   -------   -------   -------   -------   -------
110|111   112|113   114|xxx   xxx|xxx   xxx|xxx   xxx|xxx

Single texels contain only values from the same batch, and from adjacent rows
and columns.
 */
var EncodeMatrixPackedProgram = /** @class */ (function () {
    function EncodeMatrixPackedProgram(outputShape, inputIsUnsignedByte) {
        if (inputIsUnsignedByte === void 0) { inputIsUnsignedByte = false; }
        this.variableNames = ['A'];
        this.packedInputs = false;
        this.packedOutput = true;
        this.customUniforms = [{ name: 'texShape', type: 'ivec2' }];
        var glsl = getGlslDifferences();
        this.outputShape = outputShape;
        this.enableShapeUniforms = useShapeUniforms(this.outputShape.length);
        var mainLoop = '';
        var output = 'result';
        if (inputIsUnsignedByte) {
            output = 'floor(result * 255. + 0.5)';
        }
        for (var row = 0; row <= 1; row++) {
            for (var col = 0; col <= 1; col++) {
                var channel = row * 2 + col;
                mainLoop += "\n          localCoords = coords;\n          if(localCoords[2] + ".concat(col, " < ").concat(this.enableShapeUniforms ? 'outShape[2]' : "".concat(outputShape[2]), ") {\n          localCoords[2] += ").concat(col, ";\n          if (localCoords[1] + ").concat(row, " < ").concat(this.enableShapeUniforms ? 'outShape[1]' : "".concat(outputShape[1]), ") {\n            localCoords[1] += ").concat(row, ";\n\n            flatIndex = getFlatIndex(localCoords);\n            offset = imod(flatIndex, 4);\n\n            flatIndex = idiv(flatIndex, 4, 1.);\n\n            int r = flatIndex / texShape[1];\n            int c = imod(flatIndex, texShape[1]);\n            vec2 uv = (vec2(c, r) + halfCR) / vec2(texShape[1], texShape[0]);\n            values = ").concat(glsl.texture2D, "(A, uv);\n\n            if (offset == 0) {\n              result[").concat(channel, "] = values[0];\n            } else if (offset == 1) {\n              result[").concat(channel, "] = values[1];\n            } else if (offset == 2) {\n              result[").concat(channel, "] = values[2];\n            } else {\n              result[").concat(channel, "] = values[3];\n            }\n          }\n        }\n        ");
            }
        }
        this.userCode = "\n        ".concat(this.enableShapeUniforms ? getFlatIndexFrom3DOutput() :
            getFlatIndexFrom3D(outputShape), "\n\n        void main() {\n          ivec3 coords = getOutputCoords();\n\n          vec4 result = vec4(0.);\n          int flatIndex, r, c, offset;\n          ivec3 localCoords;\n          vec2 uv;\n          vec4 values;\n\n          ").concat(mainLoop, "\n\n          ").concat(glsl.output, " = ").concat(output, ";\n        }\n    ");
    }
    return EncodeMatrixPackedProgram;
}());

function createVertexShader(gl) {
    var glsl = getGlslDifferences();
    var vertexShaderSource = "".concat(glsl.version, "\n    precision highp float;\n    ").concat(glsl.attribute, " vec3 clipSpacePos;\n    ").concat(glsl.attribute, " vec2 uv;\n    ").concat(glsl.varyingVs, " vec2 resultUV;\n\n    void main() {\n      gl_Position = vec4(clipSpacePos, 1);\n      resultUV = uv;\n    }");
    return createVertexShader$1(gl, vertexShaderSource);
}
function createVertexBuffer(gl) {
    // [x y z u v] * [upper-left, lower-left, upper-right, lower-right]
    var vertexArray = new Float32Array([-1, 1, 0, 0, 1, -1, -1, 0, 0, 0, 1, 1, 0, 1, 1, 1, -1, 0, 1, 0]);
    return createStaticVertexBuffer(gl, vertexArray);
}
function createIndexBuffer(gl) {
    // OpenGL (and WebGL) have "CCW == front" winding
    var triangleVertexIndices = new Uint16Array([0, 1, 2, 2, 1, 3]);
    return createStaticIndexBuffer(gl, triangleVertexIndices);
}
function createAndConfigureTexture(gl, width, height, internalFormat, textureFormat, textureType) {
    validateTextureSize(width, height);
    var texture = createTexture(gl);
    var tex2d = gl.TEXTURE_2D;
    callAndCheck(gl, function () { return gl.bindTexture(tex2d, texture); });
    callAndCheck(gl, function () { return gl.texParameteri(tex2d, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE); });
    callAndCheck(gl, function () { return gl.texParameteri(tex2d, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE); });
    callAndCheck(gl, function () { return gl.texParameteri(tex2d, gl.TEXTURE_MIN_FILTER, gl.NEAREST); });
    callAndCheck(gl, function () { return gl.texParameteri(tex2d, gl.TEXTURE_MAG_FILTER, gl.NEAREST); });
    if (tf.env().getNumber('WEBGL_VERSION') === 1) {
        callAndCheck(gl, function () { return gl.texImage2D(tex2d, 0, internalFormat, width, height, 0, textureFormat, textureType, null); });
    }
    else {
        callAndCheck(gl, function () { return gl
            .texStorage2D(tex2d, 1, internalFormat, width, height); });
    }
    callAndCheck(gl, function () { return gl.bindTexture(gl.TEXTURE_2D, null); });
    return { texture: texture, texShape: [height, width] };
}
function getInternalFormatForFloat32MatrixTexture(textureConfig) {
    return textureConfig.internalFormatFloat;
}
function createFloat32MatrixTexture(gl, rows, columns, textureConfig) {
    var _a = __read(getUnpackedMatrixTextureShapeWidthHeight(rows, columns), 2), width = _a[0], height = _a[1];
    return createAndConfigureTexture(gl, width, height, getInternalFormatForFloat32MatrixTexture(textureConfig), textureConfig.textureFormatFloat, gl.FLOAT);
}
function getInternalFormatForFloat16MatrixTexture(textureConfig) {
    return textureConfig.internalFormatHalfFloat;
}
function createFloat16MatrixTexture(gl, rows, columns, textureConfig) {
    var _a = __read(getUnpackedMatrixTextureShapeWidthHeight(rows, columns), 2), width = _a[0], height = _a[1];
    return createAndConfigureTexture(gl, width, height, getInternalFormatForFloat16MatrixTexture(textureConfig), textureConfig.textureFormatFloat, textureConfig.textureTypeHalfFloat);
}
function getInternalFormatForUnsignedBytesMatrixTexture(textureConfig) {
    return textureConfig.downloadTextureFormat;
}
function createUnsignedBytesMatrixTexture(gl, rows, columns, textureConfig) {
    var _a = __read(getUnpackedMatrixTextureShapeWidthHeight(rows, columns), 2), width = _a[0], height = _a[1];
    return createAndConfigureTexture(gl, width, height, getInternalFormatForUnsignedBytesMatrixTexture(textureConfig), gl.RGBA, gl.UNSIGNED_BYTE);
}
function getInternalFormatForPackedMatrixTexture(textureConfig) {
    return textureConfig.internalFormatPackedFloat;
}
function createPackedMatrixTexture(gl, rows, columns, textureConfig) {
    var _a = __read(getPackedMatrixTextureShapeWidthHeight(rows, columns), 2), width = _a[0], height = _a[1];
    return createAndConfigureTexture(gl, width, height, getInternalFormatForPackedMatrixTexture(textureConfig), gl.RGBA, gl.FLOAT);
}
function getInternalFormatForFloat16PackedMatrixTexture(textureConfig) {
    return textureConfig.internalFormatPackedHalfFloat;
}
function createFloat16PackedMatrixTexture(gl, rows, columns, textureConfig) {
    var _a = __read(getPackedMatrixTextureShapeWidthHeight(rows, columns), 2), width = _a[0], height = _a[1];
    return createAndConfigureTexture(gl, width, height, getInternalFormatForFloat16PackedMatrixTexture(textureConfig), gl.RGBA, textureConfig.textureTypeHalfFloat);
}
function bindVertexProgramAttributeStreams(gl, program, vertexBuffer) {
    var posOffset = 0; // x is the first buffer element
    var uvOffset = 3 * 4; // uv comes after [x y z]
    var stride = (3 * 4) + (2 * 4); // xyz + uv, each entry is 4-byte float.
    callAndCheck(gl, function () { return gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer); });
    var success = bindVertexBufferToProgramAttribute(gl, program, 'clipSpacePos', vertexBuffer, 3, stride, posOffset);
    return success &&
        bindVertexBufferToProgramAttribute(gl, program, 'uv', vertexBuffer, 2, stride, uvOffset);
}
function uploadDenseMatrixToTexture(gl, texture, width, height, data, textureConfig) {
    callAndCheck(gl, function () { return gl.bindTexture(gl.TEXTURE_2D, texture); });
    var dataForUpload, texelDataType, internalFormat;
    if (data instanceof Uint8Array) {
        dataForUpload = new Uint8Array(width * height * 4);
        texelDataType = gl.UNSIGNED_BYTE;
        internalFormat = gl.RGBA;
    }
    else {
        dataForUpload = new Float32Array(width * height * 4);
        texelDataType = gl.FLOAT;
        internalFormat = textureConfig.internalFormatPackedFloat;
    }
    dataForUpload.set(data);
    if (tf.env().getNumber('WEBGL_VERSION') === 2) {
        callAndCheck(gl, function () { return gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, width, height, gl.RGBA, texelDataType, dataForUpload); });
    }
    else {
        callAndCheck(gl, function () { return gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, width, height, 0, gl.RGBA, texelDataType, dataForUpload); });
    }
    callAndCheck(gl, function () { return gl.bindTexture(gl.TEXTURE_2D, null); });
}
function uploadPixelDataToTexture(gl, texture, pixels) {
    callAndCheck(gl, function () { return gl.bindTexture(gl.TEXTURE_2D, texture); });
    if (pixels.data instanceof Uint8Array) {
        if (tf.env().getNumber('WEBGL_VERSION') === 2) {
            callAndCheck(gl, function () { return gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, pixels.width, pixels.height, gl.RGBA, gl.UNSIGNED_BYTE, pixels.data); });
        }
        else {
            callAndCheck(gl, function () { return gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, pixels.width, pixels.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, pixels.data); });
        }
    }
    else {
        if (tf.env().getNumber('WEBGL_VERSION') === 2) {
            callAndCheck(gl, function () { return gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, gl.RGBA, gl.UNSIGNED_BYTE, pixels); });
        }
        else {
            callAndCheck(gl, function () { return gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, pixels); });
        }
    }
    callAndCheck(gl, function () { return gl.bindTexture(gl.TEXTURE_2D, null); });
}
function createBufferFromOutputTexture(gl2, rows, columns, textureConfig) {
    // Create and bind the buffer.
    var buffer = gl2.createBuffer();
    callAndCheck(gl2, function () { return gl2.bindBuffer(gl2.PIXEL_PACK_BUFFER, buffer); });
    // Initialize the buffer to the size of the texture in bytes.
    var bytesPerFloat = 4;
    var valuesPerTexel = 4;
    var bufferSizeBytes = bytesPerFloat * valuesPerTexel * rows * columns;
    callAndCheck(gl2, function () { return gl2.bufferData(gl2.PIXEL_PACK_BUFFER, bufferSizeBytes, gl2.STREAM_READ); });
    // Enqueue a command on the GPU command queue to copy of texture into the
    // buffer.
    callAndCheck(gl2, function () { return gl2.readPixels(0, 0, columns, rows, gl2.RGBA, gl2.FLOAT, 0); });
    callAndCheck(gl2, function () { return gl2.bindBuffer(gl2.PIXEL_PACK_BUFFER, null); });
    return buffer;
}
function downloadFloat32MatrixFromBuffer(gl, buffer, size) {
    var gl2 = gl;
    var downloadTarget = new Float32Array(size);
    gl2.bindBuffer(gl2.PIXEL_PACK_BUFFER, buffer);
    gl2.getBufferSubData(gl2.PIXEL_PACK_BUFFER, 0, downloadTarget);
    gl2.bindBuffer(gl2.PIXEL_PACK_BUFFER, null);
    return downloadTarget;
}
function downloadByteEncodedFloatMatrixFromOutputTexture(gl, rows, columns, textureConfig) {
    var _a = __read(getUnpackedMatrixTextureShapeWidthHeight(rows, columns), 2), w = _a[0], h = _a[1];
    var numChannels = 4;
    var downloadTarget = new Uint8Array(getUnpackedArraySizeFromMatrixSize(rows * columns, numChannels));
    callAndCheck(gl, function () { return gl.readPixels(0, 0, w, h, textureConfig.downloadTextureFormat, gl.UNSIGNED_BYTE, downloadTarget); });
    // By wrapping the buffer in a Float32Array, we use native browser IEEE 754
    // decoding of the 4 bytes that back each 32 bit float.
    return new Float32Array(downloadTarget.buffer);
}
function downloadPackedMatrixFromBuffer(gl, buffer, batch, rows, cols, physicalRows, physicalCols, textureConfig) {
    var gl2 = gl;
    var downloadTarget = new Float32Array(getPackedRGBAArraySizeFromMatrixShape(physicalRows, physicalCols));
    gl2.bindBuffer(gl2.PIXEL_PACK_BUFFER, buffer);
    gl2.getBufferSubData(gl2.PIXEL_PACK_BUFFER, 0, downloadTarget);
    gl2.bindBuffer(gl2.PIXEL_PACK_BUFFER, null);
    return downloadTarget;
}
function downloadMatrixFromPackedOutputTexture(gl, physicalRows, physicalCols) {
    var packedRGBA = new Float32Array(physicalRows * physicalCols * 4);
    callAndCheck(gl, function () { return gl.readPixels(0, 0, physicalCols, physicalRows, gl.RGBA, gl.FLOAT, packedRGBA); });
    return packedRGBA;
}

var gpgpu_util = {
    __proto__: null,
    bindVertexProgramAttributeStreams: bindVertexProgramAttributeStreams,
    createBufferFromOutputTexture: createBufferFromOutputTexture,
    createFloat16MatrixTexture: createFloat16MatrixTexture,
    createFloat16PackedMatrixTexture: createFloat16PackedMatrixTexture,
    createFloat32MatrixTexture: createFloat32MatrixTexture,
    createIndexBuffer: createIndexBuffer,
    createPackedMatrixTexture: createPackedMatrixTexture,
    createUnsignedBytesMatrixTexture: createUnsignedBytesMatrixTexture,
    createVertexBuffer: createVertexBuffer,
    createVertexShader: createVertexShader,
    downloadByteEncodedFloatMatrixFromOutputTexture: downloadByteEncodedFloatMatrixFromOutputTexture,
    downloadFloat32MatrixFromBuffer: downloadFloat32MatrixFromBuffer,
    downloadMatrixFromPackedOutputTexture: downloadMatrixFromPackedOutputTexture,
    downloadPackedMatrixFromBuffer: downloadPackedMatrixFromBuffer,
    getInternalFormatForFloat16MatrixTexture: getInternalFormatForFloat16MatrixTexture,
    getInternalFormatForFloat16PackedMatrixTexture: getInternalFormatForFloat16PackedMatrixTexture,
    getInternalFormatForFloat32MatrixTexture: getInternalFormatForFloat32MatrixTexture,
    getInternalFormatForPackedMatrixTexture: getInternalFormatForPackedMatrixTexture,
    getInternalFormatForUnsignedBytesMatrixTexture: getInternalFormatForUnsignedBytesMatrixTexture,
    uploadDenseMatrixToTexture: uploadDenseMatrixToTexture,
    uploadPixelDataToTexture: uploadPixelDataToTexture
};

var GPGPUContext = /** @class */ (function () {
    function GPGPUContext(gl) {
        this.outputTexture = null;
        this.program = null;
        this.disposed = false;
        this.itemsToPoll = [];
        var glVersion = tf.env().getNumber('WEBGL_VERSION');
        if (gl != null) {
            this.gl = gl;
            setWebGLContext(glVersion, gl);
        }
        else {
            this.gl = getWebGLContext(glVersion);
        }
        gl = this.gl;
        if (tf.env().getNumber('WEBGL_VERSION') === 2) {
            var gl2_1 = gl;
            this.createVertexArray = function () {
                return callAndCheck(gl2_1, function () { return gl2_1.createVertexArray(); });
            };
            this.bindVertexArray = function (vao) {
                return callAndCheck(gl2_1, function () { return gl2_1.bindVertexArray(vao); });
            };
            this.deleteVertexArray = function (vao) {
                return callAndCheck(gl2_1, function () { return gl2_1.deleteVertexArray(vao); });
            };
            this.getVertexArray = function () {
                return callAndCheck(gl2_1, function () { return gl2_1.getParameter(gl2_1.VERTEX_ARRAY_BINDING); });
            };
        }
        else if (gl != null) {
            var ext_1 = gl.getExtension('OES_vertex_array_object');
            if (ext_1 == null) {
                throw new Error('All WebGL1 implementations are expected to offer' +
                    ' OES_vertex_array_object.');
            }
            this.createVertexArray = function () {
                return callAndCheck(gl, function () { return ext_1.createVertexArrayOES(); });
            };
            this.bindVertexArray = function (vao) {
                return callAndCheck(gl, function () { return ext_1.bindVertexArrayOES(vao); });
            };
            this.deleteVertexArray = function (vao) {
                return callAndCheck(gl, function () { return ext_1.deleteVertexArrayOES(vao); });
            };
            this.getVertexArray = function () {
                return callAndCheck(gl, function () { return gl.getParameter(ext_1.VERTEX_ARRAY_BINDING_OES); });
            };
        }
        // WebGL 2.0 enables texture floats without an extension.
        var COLOR_BUFFER_FLOAT = 'WEBGL_color_buffer_float';
        var COLOR_BUFFER_HALF_FLOAT = 'EXT_color_buffer_half_float';
        this.parallelCompilationExtension =
            this.gl.getExtension('KHR_parallel_shader_compile');
        if (tf.env().getNumber('WEBGL_VERSION') === 1) {
            var TEXTURE_FLOAT = 'OES_texture_float';
            var TEXTURE_HALF_FLOAT = 'OES_texture_half_float';
            this.textureFloatExtension =
                getExtensionOrThrow(this.gl, TEXTURE_FLOAT);
            if (hasExtension(this.gl, TEXTURE_HALF_FLOAT)) {
                this.textureHalfFloatExtension =
                    getExtensionOrThrow(this.gl, TEXTURE_HALF_FLOAT);
            }
            else if (tf.env().get('WEBGL_FORCE_F16_TEXTURES')) {
                throw new Error('GL context does not support half float textures, yet the ' +
                    'environment flag WEBGL_FORCE_F16_TEXTURES is set to true.');
            }
            this.colorBufferFloatExtension = this.gl.getExtension(COLOR_BUFFER_FLOAT);
            if (hasExtension(this.gl, COLOR_BUFFER_HALF_FLOAT)) {
                this.colorBufferHalfFloatExtension =
                    getExtensionOrThrow(this.gl, COLOR_BUFFER_HALF_FLOAT);
            }
            else if (tf.env().get('WEBGL_FORCE_F16_TEXTURES')) {
                throw new Error('GL context does not support color renderable half floats, yet ' +
                    'the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.');
            }
        }
        else {
            COLOR_BUFFER_FLOAT = 'EXT_color_buffer_float';
            if (hasExtension(this.gl, COLOR_BUFFER_FLOAT)) {
                this.colorBufferFloatExtension =
                    this.gl.getExtension(COLOR_BUFFER_FLOAT);
            }
            else if (hasExtension(this.gl, COLOR_BUFFER_HALF_FLOAT)) {
                this.colorBufferHalfFloatExtension =
                    this.gl.getExtension(COLOR_BUFFER_HALF_FLOAT);
            }
            else {
                throw new Error('GL context does not support color renderable floats');
            }
        }
        this.vertexBuffer = createVertexBuffer(this.gl);
        this.indexBuffer = createIndexBuffer(this.gl);
        this.framebuffer = createFramebuffer(this.gl);
        this.textureConfig =
            getTextureConfig(this.gl, this.textureHalfFloatExtension);
    }
    Object.defineProperty(GPGPUContext.prototype, "debug", {
        get: function () {
            return tf.env().getBool('DEBUG');
        },
        enumerable: false,
        configurable: true
    });
    GPGPUContext.prototype.dispose = function () {
        var _this = this;
        if (this.disposed) {
            return;
        }
        if (this.program != null) {
            console.warn('Disposing a GPGPUContext that still has a bound WebGLProgram.' +
                ' This is probably a resource leak, delete the program with ' +
                'GPGPUContext.deleteProgram before disposing.');
        }
        if (this.outputTexture != null) {
            console.warn('Disposing a GPGPUContext that still has a bound output matrix ' +
                'texture.  This is probably a resource leak, delete the output ' +
                'matrix texture with GPGPUContext.deleteMatrixTexture before ' +
                'disposing.');
        }
        var gl = this.gl;
        callAndCheck(gl, function () { return gl.finish(); });
        callAndCheck(gl, function () { return gl.bindFramebuffer(gl.FRAMEBUFFER, null); });
        callAndCheck(gl, function () { return gl.deleteFramebuffer(_this.framebuffer); });
        callAndCheck(gl, function () { return gl.bindBuffer(gl.ARRAY_BUFFER, null); });
        callAndCheck(gl, function () { return gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null); });
        callAndCheck(gl, function () { return gl.deleteBuffer(_this.indexBuffer); });
        this.disposed = true;
    };
    GPGPUContext.prototype.createFloat32MatrixTexture = function (rows, columns) {
        this.throwIfDisposed();
        return createFloat32MatrixTexture(this.gl, rows, columns, this.textureConfig);
    };
    GPGPUContext.prototype.createFloat16MatrixTexture = function (rows, columns) {
        this.throwIfDisposed();
        return createFloat16MatrixTexture(this.gl, rows, columns, this.textureConfig);
    };
    GPGPUContext.prototype.createUnsignedBytesMatrixTexture = function (rows, columns) {
        this.throwIfDisposed();
        return createUnsignedBytesMatrixTexture(this.gl, rows, columns, this.textureConfig);
    };
    GPGPUContext.prototype.uploadPixelDataToTexture = function (texture, pixels) {
        this.throwIfDisposed();
        uploadPixelDataToTexture(this.gl, texture, pixels);
    };
    GPGPUContext.prototype.uploadDenseMatrixToTexture = function (texture, width, height, data) {
        this.throwIfDisposed();
        uploadDenseMatrixToTexture(this.gl, texture, width, height, data, this.textureConfig);
    };
    GPGPUContext.prototype.createFloat16PackedMatrixTexture = function (rows, columns) {
        this.throwIfDisposed();
        return createFloat16PackedMatrixTexture(this.gl, rows, columns, this.textureConfig);
    };
    GPGPUContext.prototype.createPackedMatrixTexture = function (rows, columns) {
        this.throwIfDisposed();
        return createPackedMatrixTexture(this.gl, rows, columns, this.textureConfig);
    };
    GPGPUContext.prototype.deleteMatrixTexture = function (texture) {
        var _this = this;
        this.throwIfDisposed();
        if (this.outputTexture === texture) {
            unbindColorTextureFromFramebuffer(this.gl, this.framebuffer);
            this.outputTexture = null;
        }
        callAndCheck(this.gl, function () { return _this.gl.deleteTexture(texture); });
    };
    GPGPUContext.prototype.downloadByteEncodedFloatMatrixFromOutputTexture = function (texture, rows, columns) {
        var _this = this;
        return this.downloadMatrixDriver(texture, function () { return downloadByteEncodedFloatMatrixFromOutputTexture(_this.gl, rows, columns, _this.textureConfig); });
    };
    GPGPUContext.prototype.downloadPackedMatrixFromBuffer = function (buffer, batch, rows, columns, physicalRows, physicalCols) {
        return downloadPackedMatrixFromBuffer(this.gl, buffer, batch, rows, columns, physicalRows, physicalCols, this.textureConfig);
    };
    GPGPUContext.prototype.downloadFloat32MatrixFromBuffer = function (buffer, size) {
        return downloadFloat32MatrixFromBuffer(this.gl, buffer, size);
    };
    GPGPUContext.prototype.createBufferFromTexture = function (texture, rows, columns) {
        this.bindTextureToFrameBuffer(texture);
        var result = createBufferFromOutputTexture(this.gl, rows, columns, this.textureConfig);
        this.unbindTextureToFrameBuffer();
        return result;
    };
    GPGPUContext.prototype.createAndWaitForFence = function () {
        var fenceContext = this.createFence(this.gl);
        return this.pollFence(fenceContext);
    };
    GPGPUContext.prototype.createFence = function (gl) {
        var _this = this;
        var query;
        var isFencePassed;
        if (tf.env().getBool('WEBGL_FENCE_API_ENABLED')) {
            var gl2_2 = gl;
            var sync_1 = gl2_2.fenceSync(gl2_2.SYNC_GPU_COMMANDS_COMPLETE, 0);
            gl.flush();
            isFencePassed = function () {
                var status = gl2_2.clientWaitSync(sync_1, 0, 0);
                return status === gl2_2.ALREADY_SIGNALED ||
                    status === gl2_2.CONDITION_SATISFIED;
            };
            query = sync_1;
        }
        else if (tf.env().getNumber('WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION') > 0) {
            query = this.beginQuery();
            this.endQuery();
            isFencePassed = function () { return _this.isQueryAvailable(query, tf.env().getNumber('WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION')); };
        }
        else {
            // If we have no way to fence, return true immediately. This will fire in
            // WebGL 1.0 when there is no disjoint query timer. In this case, because
            // the fence passes immediately, we'll immediately ask for a download of
            // the texture, which will cause the UI thread to hang.
            isFencePassed = function () { return true; };
        }
        return { query: query, isFencePassed: isFencePassed };
    };
    GPGPUContext.prototype.downloadMatrixFromPackedTexture = function (texture, physicalRows, physicalCols) {
        var _this = this;
        return this.downloadMatrixDriver(texture, function () { return downloadMatrixFromPackedOutputTexture(_this.gl, physicalRows, physicalCols); });
    };
    GPGPUContext.prototype.createProgram = function (fragmentShader) {
        var _this = this;
        this.throwIfDisposed();
        var gl = this.gl;
        if (this.vertexShader == null) {
            this.vertexShader = createVertexShader(gl);
        }
        var program = createProgram(gl);
        callAndCheck(gl, function () { return gl.attachShader(program, _this.vertexShader); });
        callAndCheck(gl, function () { return gl.attachShader(program, fragmentShader); });
        linkProgram(gl, program);
        var program2 = Object.assign(program, { vao: this.createVertexArray() });
        if (this.debug) {
            validateProgram(gl, program2);
        }
        return program2;
    };
    GPGPUContext.prototype.buildVao = function (program) {
        var _this = this;
        this.setProgram(program);
        this.bindVertexArray(program.vao);
        var gl = this.gl;
        // Bind index buffer, and vertex buffers based on program attrib
        // locations.
        callAndCheck(gl, function () { return gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, _this.indexBuffer); });
        bindVertexProgramAttributeStreams(gl, program, this.vertexBuffer);
    };
    GPGPUContext.prototype.deleteProgram = function (program) {
        var _this = this;
        this.throwIfDisposed();
        if (program === this.program) {
            this.program = null;
        }
        if (program != null) {
            callAndCheck(this.gl, function () { return _this.gl.deleteProgram(program); });
            this.deleteVertexArray(program.vao);
        }
    };
    GPGPUContext.prototype.setProgram = function (program) {
        var _this = this;
        this.throwIfDisposed();
        this.program = program;
        if (this.program != null) {
            if (this.debug) {
                validateProgram(this.gl, this.program);
            }
        }
        callAndCheck(this.gl, function () { return _this.gl.useProgram(program); });
    };
    GPGPUContext.prototype.getUniformLocation = function (program, uniformName, shouldThrow) {
        if (shouldThrow === void 0) { shouldThrow = true; }
        this.throwIfDisposed();
        if (shouldThrow) {
            return getProgramUniformLocationOrThrow(this.gl, program, uniformName);
        }
        else {
            return getProgramUniformLocation(this.gl, program, uniformName);
        }
    };
    GPGPUContext.prototype.getAttributeLocation = function (program, attribute) {
        var _this = this;
        this.throwIfDisposed();
        return callAndCheck(this.gl, function () { return _this.gl.getAttribLocation(program, attribute); });
    };
    GPGPUContext.prototype.getUniformLocationNoThrow = function (program, uniformName) {
        this.throwIfDisposed();
        return this.gl.getUniformLocation(program, uniformName);
    };
    GPGPUContext.prototype.setInputMatrixTexture = function (inputMatrixTexture, uniformLocation, textureUnit) {
        this.throwIfDisposed();
        this.throwIfNoProgram();
        bindTextureToProgramUniformSampler(this.gl, inputMatrixTexture, uniformLocation, textureUnit);
    };
    GPGPUContext.prototype.setOutputMatrixTexture = function (outputMatrixTexture, rows, columns) {
        this.setOutputMatrixTextureDriver(outputMatrixTexture, columns, rows);
    };
    GPGPUContext.prototype.setOutputPackedMatrixTexture = function (outputPackedMatrixTexture, rows, columns) {
        this.throwIfDisposed();
        var _a = __read(getPackedMatrixTextureShapeWidthHeight(rows, columns), 2), width = _a[0], height = _a[1];
        this.setOutputMatrixTextureDriver(outputPackedMatrixTexture, width, height);
    };
    GPGPUContext.prototype.setOutputMatrixWriteRegion = function (startRow, numRows, startColumn, numColumns) {
        this.setOutputMatrixWriteRegionDriver(startColumn, startRow, numColumns, numRows);
    };
    GPGPUContext.prototype.setOutputPackedMatrixWriteRegion = function (startRow, numRows, startColumn, numColumns) {
        throw new Error('setOutputPackedMatrixWriteRegion not implemented.');
    };
    GPGPUContext.prototype.debugValidate = function () {
        if (this.program != null) {
            validateProgram(this.gl, this.program);
        }
        validateFramebuffer(this.gl);
    };
    GPGPUContext.prototype.executeProgram = function () {
        this.throwIfDisposed();
        this.throwIfNoProgram();
        var gl = this.gl;
        if (this.debug) {
            var boundVao = this.getVertexArray();
            console.assert(boundVao === this.program.vao, 'VAO changed between setProgram and executeProgram!');
            this.debugValidate();
        }
        callAndCheck(gl, function () { return gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0); });
    };
    GPGPUContext.prototype.blockUntilAllProgramsCompleted = function () {
        var _this = this;
        this.throwIfDisposed();
        callAndCheck(this.gl, function () { return _this.gl.finish(); });
    };
    GPGPUContext.prototype.getQueryTimerExtension = function () {
        if (this.disjointQueryTimerExtension == null) {
            this.disjointQueryTimerExtension =
                getExtensionOrThrow(this.gl, tf.env().getNumber('WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION') === 2 ?
                    'EXT_disjoint_timer_query_webgl2' :
                    'EXT_disjoint_timer_query');
        }
        return this.disjointQueryTimerExtension;
    };
    GPGPUContext.prototype.getQueryTimerExtensionWebGL2 = function () {
        return this.getQueryTimerExtension();
    };
    GPGPUContext.prototype.getQueryTimerExtensionWebGL1 = function () {
        return this.getQueryTimerExtension();
    };
    GPGPUContext.prototype.beginQuery = function () {
        if (tf.env().getNumber('WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION') === 2) {
            var gl2 = this.gl;
            var ext_2 = this.getQueryTimerExtensionWebGL2();
            var query_1 = gl2.createQuery();
            gl2.beginQuery(ext_2.TIME_ELAPSED_EXT, query_1);
            return query_1;
        }
        var ext = this.getQueryTimerExtensionWebGL1();
        var query = ext.createQueryEXT();
        ext.beginQueryEXT(ext.TIME_ELAPSED_EXT, query);
        return query;
    };
    GPGPUContext.prototype.endQuery = function () {
        if (tf.env().getNumber('WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION') === 2) {
            var gl2 = this.gl;
            var ext_3 = this.getQueryTimerExtensionWebGL2();
            gl2.endQuery(ext_3.TIME_ELAPSED_EXT);
            return;
        }
        var ext = this.getQueryTimerExtensionWebGL1();
        ext.endQueryEXT(ext.TIME_ELAPSED_EXT);
    };
    GPGPUContext.prototype.waitForQueryAndGetTime = function (query) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, tf.util.repeatedTry(function () { return _this.disposed || // while testing contexts are created / disposed
                            // in rapid succession, so without this check we
                            // may poll for the query timer indefinitely
                            _this.isQueryAvailable(query, tf.env().getNumber('WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION')); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.getQueryTime(query, tf.env().getNumber('WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION'))];
                }
            });
        });
    };
    GPGPUContext.prototype.getQueryTime = function (query, queryTimerVersion) {
        if (queryTimerVersion === 0) {
            return null;
        }
        if (queryTimerVersion === 2) {
            var gl2 = this.gl;
            var timeElapsedNanos = gl2.getQueryParameter(query, gl2.QUERY_RESULT);
            // Return milliseconds.
            return timeElapsedNanos / 1000000;
        }
        else {
            var ext = this.getQueryTimerExtensionWebGL1();
            var timeElapsedNanos = ext.getQueryObjectEXT(query, ext.QUERY_RESULT_EXT);
            // Return milliseconds.
            return timeElapsedNanos / 1000000;
        }
    };
    GPGPUContext.prototype.isQueryAvailable = function (query, queryTimerVersion) {
        if (queryTimerVersion === 0) {
            return true;
        }
        if (queryTimerVersion === 2) {
            var gl2 = this.gl;
            var ext = this.getQueryTimerExtensionWebGL2();
            var available = gl2.getQueryParameter(query, gl2.QUERY_RESULT_AVAILABLE);
            if (this.disjoint == null) {
                this.disjoint = this.gl.getParameter(ext.GPU_DISJOINT_EXT);
            }
            return available && !this.disjoint;
        }
        else {
            var ext = this.getQueryTimerExtensionWebGL1();
            var available = ext.getQueryObjectEXT(query, ext.QUERY_RESULT_AVAILABLE_EXT);
            if (this.disjoint == null) {
                this.disjoint = this.gl.getParameter(ext.GPU_DISJOINT_EXT);
            }
            return available && !this.disjoint;
        }
    };
    GPGPUContext.prototype.pollFence = function (fenceContext) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.addItemToPoll(function () { return fenceContext.isFencePassed(); }, function () { return resolve(); });
        });
    };
    GPGPUContext.prototype.pollItems = function () {
        // Find the last query that has finished.
        var index = linearSearchLastTrue(this.itemsToPoll.map(function (x) { return x.isDoneFn; }));
        for (var i = 0; i <= index; ++i) {
            var resolveFn = this.itemsToPoll[i].resolveFn;
            resolveFn();
        }
        this.itemsToPoll = this.itemsToPoll.slice(index + 1);
    };
    GPGPUContext.prototype.addItemToPoll = function (isDoneFn, resolveFn) {
        var _this = this;
        this.itemsToPoll.push({ isDoneFn: isDoneFn, resolveFn: resolveFn });
        if (this.itemsToPoll.length > 1) {
            // We already have a running loop that polls.
            return;
        }
        // Start a new loop that polls.
        var scheduleFn = undefined;
        if ('setTimeoutCustom' in tf.env().platform) {
            scheduleFn = tf.env().platform.setTimeoutCustom.bind(tf.env().platform);
        }
        tf.util.repeatedTry(function () {
            _this.pollItems();
            // End the loop if no more items to poll.
            return _this.itemsToPoll.length === 0;
        }, function () { return 0; }, null, scheduleFn);
    };
    GPGPUContext.prototype.bindTextureToFrameBuffer = function (texture) {
        this.throwIfDisposed();
        bindColorTextureToFramebuffer(this.gl, texture, this.framebuffer);
        if (this.debug) {
            validateFramebuffer(this.gl);
        }
    };
    GPGPUContext.prototype.unbindTextureToFrameBuffer = function () {
        if (this.outputTexture != null) {
            bindColorTextureToFramebuffer(this.gl, this.outputTexture, this.framebuffer);
            if (this.debug) {
                validateFramebuffer(this.gl);
            }
        }
        else {
            unbindColorTextureFromFramebuffer(this.gl, this.framebuffer);
        }
    };
    GPGPUContext.prototype.downloadMatrixDriver = function (texture, downloadAndDecode) {
        this.bindTextureToFrameBuffer(texture);
        var result = downloadAndDecode();
        this.unbindTextureToFrameBuffer();
        return result;
    };
    GPGPUContext.prototype.setOutputMatrixTextureDriver = function (outputMatrixTextureMaybePacked, width, height) {
        this.throwIfDisposed();
        var gl = this.gl;
        bindColorTextureToFramebuffer(gl, outputMatrixTextureMaybePacked, this.framebuffer);
        if (this.debug) {
            validateFramebuffer(gl);
        }
        this.outputTexture = outputMatrixTextureMaybePacked;
        callAndCheck(gl, function () { return gl.viewport(0, 0, width, height); });
        callAndCheck(gl, function () { return gl.scissor(0, 0, width, height); });
    };
    GPGPUContext.prototype.setOutputMatrixWriteRegionDriver = function (x, y, width, height) {
        var _this = this;
        this.throwIfDisposed();
        callAndCheck(this.gl, function () { return _this.gl.scissor(x, y, width, height); });
    };
    GPGPUContext.prototype.throwIfDisposed = function () {
        if (this.disposed) {
            throw new Error('Attempted to use disposed GPGPUContext.');
        }
    };
    GPGPUContext.prototype.throwIfNoProgram = function () {
        if (this.program == null) {
            throw new Error('No GPU program is currently set.');
        }
    };
    return GPGPUContext;
}());
/**
 * Finds the index of the last true element using linear search.
 * Note: We can't do binary search because Chrome expects us to explicitly
 * test all fences before download:
 * https://github.com/tensorflow/tfjs/issues/1145
 */
function linearSearchLastTrue(arr) {
    var i = 0;
    for (; i < arr.length; ++i) {
        var isDone = arr[i]();
        if (!isDone) {
            break;
        }
    }
    return i - 1;
}

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
function simpleAbsImpl(vals) {
    var resultValues = new Float32Array(vals.length);
    for (var i = 0; i < vals.length; ++i) {
        resultValues[i] = Math.abs(vals[i]);
    }
    return resultValues;
}

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
/**
 * Template that creates implementation for binary ops. Supports broadcast.
 */
function createSimpleBinaryKernelImpl(op) {
    return function (aShape, bShape, aVals, bVals, dtype) {
        var newShape = tf.backend_util.assertAndGetBroadcastShape(aShape, bShape);
        var resultRank = newShape.length;
        var resultStrides = tf.util.computeStrides(newShape);
        var resultSize = tf.util.sizeFromShape(newShape);
        var result = tf.util.getTypedArrayFromDType(dtype, resultSize);
        var aRank = aShape.length;
        var bRank = bShape.length;
        var aStrides = tf.util.computeStrides(aShape);
        var bStrides = tf.util.computeStrides(bShape);
        var aBroadcastDims = tf.backend_util.getBroadcastDims(aShape, newShape);
        var bBroadcastDims = tf.backend_util.getBroadcastDims(bShape, newShape);
        if (aBroadcastDims.length + bBroadcastDims.length === 0) {
            for (var i = 0; i < result.length; ++i) {
                result[i] = op(aVals[i % aVals.length], bVals[i % bVals.length]);
            }
        }
        else {
            var _loop_1 = function (i) {
                var loc = tf.util.indexToLoc(i, resultRank, resultStrides);
                var aLoc = loc.slice(-aRank);
                aBroadcastDims.forEach(function (d) { return aLoc[d] = 0; });
                var aIndex = tf.util.locToIndex(aLoc, aRank, aStrides);
                var bLoc = loc.slice(-bRank);
                bBroadcastDims.forEach(function (d) { return bLoc[d] = 0; });
                var bIndex = tf.util.locToIndex(bLoc, bRank, bStrides);
                result[i] = op(aVals[aIndex], bVals[bIndex]);
            };
            for (var i = 0; i < result.length; ++i) {
                _loop_1(i);
            }
        }
        return [result, newShape];
    };
}

function castImpl(values, shape, inputType, dtype) {
    if (dtype === 'int32') {
        var resultValues = Int32Array.from(values);
        return [shape, 'int32', resultValues];
    }
    if (dtype === 'bool') {
        // This is essentially the result of notEqual(x, 0). We avoid using
        // kernel notEqual to avoid circular dependency, i.e. binary_utils ->
        // cast -> notEqual -> binary_utils.
        var zero = tf.util.toTypedArray([0], inputType);
        var _a = __read(createSimpleBinaryKernelImpl(function (a, b) { return (a !== b) ? 1 : 0; })(shape, [], values, zero, 'bool'), 2), resultData = _a[0], resultShape = _a[1];
        return [resultShape, 'bool', resultData];
    }
    throw new Error("Error in Cast: failed to cast ".concat(inputType, " to ").concat(dtype));
}

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
var addImpl = createSimpleBinaryKernelImpl((function (a, b) { return a + b; }));

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
function bincountImpl(xVals, weightsVals, weightsDtype, weightsShape, size) {
    var weightsSize = tf.util.sizeFromShape(weightsShape);
    var outVals = tf.util.makeZerosTypedArray(size, weightsDtype);
    for (var i = 0; i < xVals.length; i++) {
        var value = xVals[i];
        if (value < 0) {
            throw new Error('Input x must be non-negative!');
        }
        if (value >= size) {
            continue;
        }
        if (weightsSize > 0) {
            outVals[value] += weightsVals[i];
        }
        else {
            outVals[value] += 1;
        }
    }
    return outVals;
}
function bincountReduceImpl(xBuf, weightsBuf, size, binaryOutput) {
    if (binaryOutput === void 0) { binaryOutput = false; }
    var numRows = xBuf.shape[0];
    var numCols = xBuf.shape[1];
    var outBuf = tf.buffer([numRows, size], weightsBuf.dtype);
    for (var i = 0; i < numRows; i++) {
        for (var j = 0; j < numCols; j++) {
            var value = xBuf.get(i, j);
            if (value < 0) {
                throw new Error('Input x must be non-negative!');
            }
            if (value >= size) {
                continue;
            }
            if (binaryOutput) {
                outBuf.set(1, i, value);
            }
            else {
                if (weightsBuf.size > 0) {
                    outBuf.set(outBuf.get(i, value) + weightsBuf.get(i, j), i, value);
                }
                else {
                    outBuf.set(outBuf.get(i, value) + 1, i, value);
                }
            }
        }
    }
    return outBuf;
}

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
var bitwiseAndImpl = createSimpleBinaryKernelImpl((function (a, b) { return a & b; }));

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
/**
 * Template that creates implementation for unary op.
 */
function createSimpleUnaryImpl(op) {
    return function (values, dtype, attrs) {
        var newValues = tf.util.getArrayFromDType(dtype, values.length);
        for (var i = 0; i < values.length; ++i) {
            newValues[i] = op(values[i], attrs);
        }
        return newValues;
    };
}

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
var ceilImpl = createSimpleUnaryImpl(function (xi) { return Math.ceil(xi); });

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
function concatImpl$1(inputs, outShape, dtype, simplyConcat) {
    var outVals = tf.util.getArrayFromDType(dtype, tf.util.sizeFromShape(outShape));
    if (simplyConcat && dtype !== 'string') {
        // Use built-in TypedArray.set() method for speed.
        var offset_1 = 0;
        inputs.forEach(function (input) {
            var size = tf.util.sizeFromShape(input.shape);
            outVals.set(input.vals, offset_1);
            offset_1 += size;
        });
    }
    else {
        var colOffset_1 = 0;
        inputs.forEach(function (input) {
            var decodedData = dtype === 'string' ?
                tf.backend_util.fromUint8ToStringArray(input.vals) :
                input.vals;
            var tIdx = 0;
            for (var row = 0; row < input.shape[0]; ++row) {
                var resIdx = row * outShape[1] + colOffset_1;
                for (var col = 0; col < input.shape[1]; ++col) {
                    outVals[resIdx + col] = decodedData[tIdx++];
                }
            }
            colOffset_1 += input.shape[1];
        });
    }
    return outVals;
}

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
var equalImpl = createSimpleBinaryKernelImpl(function (a, b) { return (a === b) ? 1 : 0; });

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
var expImpl = createSimpleUnaryImpl(function (xi) { return Math.exp(xi); });

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
var expm1Impl = createSimpleUnaryImpl(function (xi) { return Math.expm1(xi); });

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
var floorImpl = createSimpleUnaryImpl(function (xi) { return Math.floor(xi); });

function gatherNdImpl(indicesData, paramsBuf, dtype, numSlices, sliceRank, sliceSize, strides, paramsShape, paramsSize) {
    var outBuf = tf.buffer([numSlices, sliceSize], dtype);
    for (var i = 0; i < numSlices; i++) {
        var index = [];
        var flattenIndex = 0;
        for (var j = 0; j < sliceRank; j++) {
            var dim = indicesData[i * sliceRank + j];
            flattenIndex += dim * strides[j];
            index.push(dim);
        }
        if (flattenIndex < 0 || flattenIndex >= paramsSize / sliceSize) {
            throw new Error("Invalid indices: ".concat(index, " does not index into ").concat(paramsShape));
        }
        for (var k = 0; k < sliceSize; k++) {
            outBuf.values[i * sliceSize + k] = paramsBuf.get.apply(paramsBuf, __spreadArray([], __read(paramsBuf.indexToLoc(flattenIndex * sliceSize + k)), false));
        }
    }
    return outBuf;
}

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
function gatherV2Impl(xBuf, indicesBuf, flattenOutputShape) {
    var outBuf = tf.buffer(flattenOutputShape, xBuf.dtype);
    for (var i = 0; i < outBuf.size; ++i) {
        var newLoc = outBuf.indexToLoc(i);
        var originalLoc = newLoc.slice();
        var batchIdx = originalLoc[0];
        var indicesIdx = originalLoc[2];
        var indicesIndex = indicesBuf.locToIndex([batchIdx, indicesIdx]);
        originalLoc[2] = indicesBuf.values[indicesIndex];
        var originalIndex = xBuf.locToIndex(originalLoc);
        if (0 <= originalIndex && originalIndex < xBuf.values.length) {
            outBuf.values[i] = xBuf.values[originalIndex];
        } // Else, index is out of bounds, so leave the default zero val in outBuf.
    }
    return outBuf;
}

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
var greaterImpl = createSimpleBinaryKernelImpl(function (a, b) { return (a > b) ? 1 : 0; });

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
var greaterEqualImpl = createSimpleBinaryKernelImpl(function (a, b) { return (a >= b) ? 1 : 0; });

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
var lessImpl = createSimpleBinaryKernelImpl(function (a, b) { return (a < b) ? 1 : 0; });

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
var lessEqualImpl = createSimpleBinaryKernelImpl(function (a, b) { return (a <= b) ? 1 : 0; });

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
function linSpaceImpl(start, stop, num) {
    var step = (stop - start) / (num - 1);
    var values = tf.util.makeZerosTypedArray(num, 'float32');
    values[0] = start;
    for (var i = 1; i < values.length; i++) {
        values[i] = values[i - 1] + step;
    }
    return values;
}

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
var logImpl = createSimpleUnaryImpl(function (xi) { return Math.log(xi); });

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
function maxImpl$1(aVals, reduceSize, outShape, dtype) {
    var vals = tf.util.getTypedArrayFromDType(dtype, tf.util.sizeFromShape(outShape));
    for (var i = 0; i < vals.length; ++i) {
        var offset = i * reduceSize;
        var max = aVals[offset];
        for (var j = 0; j < reduceSize; ++j) {
            var value = aVals[offset + j];
            if (Number.isNaN(value) ||
                value > max) { // comparison with NaN always return false
                max = value;
            }
        }
        vals[i] = max;
    }
    return vals;
}

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
var maximumImpl = createSimpleBinaryKernelImpl((function (aValue, bValue) { return Math.max(aValue, bValue); }));

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
var minimumImpl = createSimpleBinaryKernelImpl((function (aValue, bValue) { return Math.min(aValue, bValue); }));

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
var multiplyImpl = createSimpleBinaryKernelImpl((function (aValue, bValue) { return aValue * bValue; }));

function negImpl(xVals, xShape, xDtype) {
    var minusOne = tf.util.createScalarValue(-1, xDtype);
    return multiplyImpl([], xShape, minusOne, xVals, xDtype);
}

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
var notEqualImpl = createSimpleBinaryKernelImpl((function (a, b) { return (a !== b) ? 1 : 0; }));

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
function transposeImpl$1(xVals, xShape, dtype, perm, newShape) {
    var xRank = xShape.length;
    var xSize = tf.util.sizeFromShape(xShape);
    var xStrides = tf.util.computeStrides(xShape);
    var newStrides = tf.util.computeStrides(newShape);
    var result = tf.util.getTypedArrayFromDType(dtype, tf.util.sizeFromShape(newShape));
    for (var i = 0; i < xSize; ++i) {
        var loc = tf.util.indexToLoc(i, xRank, xStrides);
        // Permute location.
        var newLoc = new Array(loc.length);
        for (var i_1 = 0; i_1 < newLoc.length; i_1++) {
            newLoc[i_1] = loc[perm[i_1]];
        }
        var newIndex = tf.util.locToIndex(newLoc, xRank, newStrides);
        result[newIndex] = xVals[i];
    }
    return result;
}

function prodImpl(xShape, xDtype, xVals, reductionAxes) {
    var _a = __read(tf.backend_util.computeOutAndReduceShapes(xShape, reductionAxes), 2), outShape = _a[0], reduceShape = _a[1];
    var outDtype = tf.upcastType(xDtype, 'int32');
    var outVals = tf.util.makeZerosTypedArray(tf.util.sizeFromShape(outShape), outDtype);
    var reduceSize = tf.util.sizeFromShape(reduceShape);
    for (var i = 0; i < outVals.length; ++i) {
        var offset = i * reduceSize;
        var prod_1 = 1;
        for (var j = 0; j < reduceSize; ++j) {
            prod_1 *= xVals[offset + j];
        }
        outVals[i] = prod_1;
    }
    return { outVals: outVals, outShape: outShape, outDtype: outDtype };
}

function validateIndices(indices, indicesShape, numParams) {
    indices.forEach(function (index, i) {
        if (index < 0 || index >= numParams) {
            var locString = tf.util.indexToLoc(i, indicesShape.length, tf.util.computeStrides(indicesShape))
                .join(',');
            throw new Error("indices[".concat(locString, "] = ").concat(index, " is not in [0, ").concat(numParams, ")"));
        }
    });
}
function validateSplits(paramsNestedSplits, numParamsDenseValues) {
    // Validate
    for (var dim = 0; dim < paramsNestedSplits.length; ++dim) {
        var splits = paramsNestedSplits[dim];
        var lastSplit = (dim === paramsNestedSplits.length - 1) ?
            numParamsDenseValues :
            paramsNestedSplits[dim + 1].length;
        if (splits.length === 0) {
            throw new Error('Ragged splits may not be empty');
        }
        if (splits[0] < 0) {
            throw new Error('Ragged splits must be non-negative');
        }
        if (splits[splits.length - 1] > lastSplit) {
            throw new Error('Ragged splits must not point past values');
        }
        for (var i = 1; i < splits.length; ++i) {
            if (splits[i - 1] > splits[i]) {
                throw new Error('Ragged splits must be sorted in ascending order');
            }
        }
    }
}
// Construct the `splits` output tensors, encoded using a nested vector.
// Also find the slices of values that need to be copied, and store them
// in `valueSlices`.  The total number of values that will be copied (which
// we need for allocating the output values tensor) is stored in `numValues`.
function makeSplits(indices, indicesShape, paramsNestedSplits, numParamsDenseValues) {
    var valueSlices = [];
    var numValues = 0;
    var numSplits = indicesShape.length - 1 + paramsNestedSplits.length;
    var outSplits = new Array(numSplits).fill(null).map(function () { return [0]; });
    validateSplits(paramsNestedSplits, numParamsDenseValues);
    // Add `splits` that come from all but the last dimension of the dense
    // Tensor `indices`.  In particular, for each dimension D, we add a
    // splits tensor whose values are:
    //   range(reduceProd(splits.shape[:D]) + 1) * splits.shape[D+1]
    // E.g., if indices.shape=[2, 3, 4] then we will add splits tensors:
    //   [0, 3, 6]                    # length=2+1, stride=3
    //   [0, 4, 8, 12, 16, 20, 24]    # length=2*3+1, stride=4
    var nrows = 1;
    for (var dim = 0; dim < indicesShape.length - 1; ++dim) {
        nrows *= indicesShape[dim];
        var rowLength = indicesShape[dim + 1];
        for (var i = 1; i < nrows + 1; ++i) {
            outSplits[dim].push(i * rowLength);
        }
    }
    // Add `splits` that come from `paramsNestedSplits`.  Starting with the
    // outermost ragged dimension (i.e., the first `splits` tensor), we work
    // our way in, finding the range of values that should be copied.  As we
    // go, we update the output `splits` for each dimension with the appropriate
    // values.  In particular, the *lengths* of the slices from `param_splits`
    // should be copied to generate corresponding slice lengths in the output
    // splits.  E.g., if we are copying a ragged row with length 4, then we
    // should add a new split point to outSplits that is 4 greater than the
    // previous split point in outSplits.
    for (var i = 0; i < indices.length; ++i) {
        var start = indices[i];
        var limit = indices[i] + 1;
        // Copy splits.
        for (var dim = 0; dim < paramsNestedSplits.length; ++dim) {
            var splits = paramsNestedSplits[dim];
            var outDim = dim + indicesShape.length - 1;
            if (outDim >= 0) {
                var outSplitsOutDim = outSplits[outDim];
                var delta = outSplitsOutDim[outSplitsOutDim.length - 1] - splits[start];
                for (var j = start; j < limit; ++j) {
                    outSplits[outDim].push(splits[j + 1] + delta);
                }
            }
            start = splits[start];
            limit = splits[limit];
        }
        if (limit !== start) {
            valueSlices.push([start, limit]);
            numValues += limit - start;
        }
    }
    return { outSplits: outSplits, valueSlices: valueSlices, numValues: numValues };
}
function getSplits(outSplits) {
    var splitsOut = [];
    var _loop_1 = function (i) {
        var numSplits = outSplits[i].length;
        var splits = tf.util.getArrayFromDType('int32', numSplits);
        splitsOut.push(splits);
        outSplits[i].forEach(function (value, j) { return splits[j] = value; });
    };
    for (var i = 0; i < outSplits.length; ++i) {
        _loop_1(i);
    }
    return splitsOut;
}
function computeFlatOuterDims(orig, numOutDims) {
    var outDims = orig.slice(0, numOutDims);
    while (outDims.length < numOutDims) {
        outDims.push(1);
    }
    for (var inDim = numOutDims; inDim < orig.length; inDim++) {
        outDims[numOutDims - 1] *= orig[inDim];
    }
    return outDims;
}
// For each slice in `(start, limit)` in `valueSlices`, append
// `paramsDenseValues[start,...,limit] to `values`.  `valueSize` indicates
// the number of scalars contained in each value paramsDenseValues[i].
function writeValueSlices(paramsDenseValues, paramsDenseValuesShape, valueSlices, valueSize, values, valuesShape) {
    var e_1, _a;
    var denseM = computeFlatOuterDims(paramsDenseValuesShape, 2)[1];
    var valuesM = computeFlatOuterDims(valuesShape, 2)[1];
    var outPos = 0;
    try {
        for (var valueSlices_1 = __values(valueSlices), valueSlices_1_1 = valueSlices_1.next(); !valueSlices_1_1.done; valueSlices_1_1 = valueSlices_1.next()) {
            var slice = valueSlices_1_1.value;
            for (var i = slice[0]; i < slice[1]; ++i) {
                for (var j = 0; j < valueSize; ++j) {
                    values[outPos * valuesM + j] = paramsDenseValues[i * denseM + j];
                }
                ++outPos;
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (valueSlices_1_1 && !valueSlices_1_1.done && (_a = valueSlices_1.return)) _a.call(valueSlices_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
}
function getValues(paramsDenseValues, paramsDenseValuesShape, paramsDenseValuesDType, valueSlices, numValues) {
    var valuesShape = paramsDenseValuesShape.slice();
    valuesShape[0] = numValues;
    var valuesOut = tf.util.getArrayFromDType(paramsDenseValuesDType, tf.util.sizeFromShape(valuesShape));
    var numElements = paramsDenseValues.length;
    var valueSize = numElements === 0 ? 0 : (numElements / paramsDenseValuesShape[0]);
    writeValueSlices(paramsDenseValues, paramsDenseValuesShape, valueSlices, valueSize, valuesOut, valuesShape);
    return [valuesOut, valuesShape];
}
function raggedGatherImpl(paramsNestedSplits, paramsNestedSplitsShapes, paramsDenseValues, paramsDenseValuesShape, paramsDenseValuesDType, indices, indicesShape, outputRaggedRank) {
    if (paramsNestedSplits.length === 0) {
        throw new Error('paramsNestedSplits must be non empty');
    }
    if (paramsNestedSplitsShapes[0].length === 0) {
        throw new Error('Split tensors must not be scalars');
    }
    var numParams = paramsNestedSplitsShapes[0][0] - 1;
    validateIndices(indices, indicesShape, numParams);
    if (paramsDenseValuesShape.length === 0) {
        throw new Error('params.rank must be nonzero');
    }
    var numParamsDenseValues = paramsDenseValuesShape[0];
    // Calculate the `splits`, and store the value slices that we need to
    // copy in `valueSlices`.
    var _a = makeSplits(indices, indicesShape, paramsNestedSplits, numParamsDenseValues), outSplits = _a.outSplits, valueSlices = _a.valueSlices, numValues = _a.numValues;
    // Write the output tensors.
    var outputNestedSplits = getSplits(outSplits);
    var outputDenseValues = getValues(paramsDenseValues, paramsDenseValuesShape, paramsDenseValuesDType, valueSlices, numValues);
    return [outputNestedSplits, outputDenseValues[0], outputDenseValues[1]];
}

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
var INT32_MAX = 2147483647;
function raggedRangeImpl(starts, startsShape, startsDType, limits, limitsShape, deltas, deltasShape) {
    // Check input tensor shapes.
    if (startsShape.length > 1) {
        throw new Error('starts must be a scalar or vector');
    }
    if (limitsShape.length > 1) {
        throw new Error('limits must be a scalar or vector');
    }
    if (deltasShape.length > 1) {
        throw new Error('deltas must be a scalar or vector');
    }
    // Determine which tensors we need to broadcast.
    var broadcastStarts = startsShape.length === 0;
    var broadcastLimits = limitsShape.length === 0;
    var broadcastDeltas = deltasShape.length === 0;
    // nRows (number of output rows) is the size of the non-broadcast inputs,
    // or 1 if all inputs are scalars.
    var inSizes = [];
    if (!broadcastStarts) {
        inSizes.push(startsShape[0]);
    }
    if (!broadcastLimits) {
        inSizes.push(limitsShape[0]);
    }
    if (!broadcastDeltas) {
        inSizes.push(deltasShape[0]);
    }
    for (var i = 1; i < inSizes.length; ++i) {
        if (inSizes[i] !== inSizes[i - 1]) {
            throw new Error('starts, limits, and deltas must have the same shape');
        }
    }
    var nRows = inSizes.length === 0 ? 1 : inSizes[0];
    // Construct the rtNestedSplits tensor.
    var rtNestedSplits = tf.util.getArrayFromDType('int32', nRows + 1);
    rtNestedSplits[0] = 0;
    for (var row = 0; row < nRows; ++row) {
        var start = broadcastStarts ? starts[0] : starts[row];
        var limit = broadcastLimits ? limits[0] : limits[row];
        var delta = broadcastDeltas ? deltas[0] : deltas[row];
        if (delta === 0) {
            throw new Error('Requires delta != 0');
        }
        var size = // The number of elements in the specified range.
         void 0; // The number of elements in the specified range.
        if (((delta > 0) && (limit < start)) || ((delta < 0) && (limit > start))) {
            size = 0;
        }
        else {
            size = Math.ceil(Math.abs((limit - start) / delta));
            if (size > INT32_MAX) {
                throw new Error("Requires ((limit - start) / delta) <= ".concat(INT32_MAX));
            }
        }
        rtNestedSplits[row + 1] = rtNestedSplits[row] + size;
    }
    var nVals = rtNestedSplits[nRows];
    // Construct the rtDenseValues tensor.
    var rtDenseValues = tf.util.getArrayFromDType(startsDType, nVals);
    var valueIndex = 0;
    for (var row = 0; row < nRows; ++row) {
        var rowSize = rtNestedSplits[row + 1] - rtNestedSplits[row];
        var value = broadcastStarts ? starts[0] : starts[row];
        var delta = broadcastDeltas ? deltas[0] : deltas[row];
        for (var i = 0; i < rowSize; ++i) {
            rtDenseValues[valueIndex++] = value;
            value += delta;
        }
    }
    return [rtNestedSplits, rtDenseValues];
}

var RowPartitionType = tf.backend_util.RowPartitionType;
// Based on
// https://github.com/tensorflow/tensorflow/blob/master/tensorflow/core/kernels/ragged_tensor_to_tensor_op.cc
var RaggedTensorToTensorOp = /** @class */ (function () {
    function RaggedTensorToTensorOp(shape, shapeShape, values, valuesShape, valuesDType, defaultValue, defaultValueShape, rowPartitionValues, rowPartitionValuesShapes, rowPartitionTypeStrings) {
        this.shape = shape;
        this.shapeShape = shapeShape;
        this.values = values;
        this.valuesShape = valuesShape;
        this.valuesDType = valuesDType;
        this.defaultValue = defaultValue;
        this.defaultValueShape = defaultValueShape;
        this.rowPartitionValues = rowPartitionValues;
        this.rowPartitionValuesShapes = rowPartitionValuesShapes;
        this.rowPartitionTypes =
            tf.backend_util.getRowPartitionTypesHelper(rowPartitionTypeStrings);
        this.raggedRank = tf.backend_util.getRaggedRank(this.rowPartitionTypes);
    }
    RaggedTensorToTensorOp.prototype.getRowPartitionTypeByDimension = function (dimension) {
        if (this.rowPartitionTypes[0] === RowPartitionType.FIRST_DIM_SIZE) {
            return this.rowPartitionTypes[dimension + 1];
        }
        else {
            return this.rowPartitionTypes[dimension];
        }
    };
    // Returns the relationship between dimension and dimension + 1.
    RaggedTensorToTensorOp.prototype.getRowPartitionTensor = function (dimension) {
        if (this.rowPartitionTypes[0] === RowPartitionType.FIRST_DIM_SIZE) {
            return this.rowPartitionValues[dimension + 1];
        }
        else {
            return this.rowPartitionValues[dimension];
        }
    };
    RaggedTensorToTensorOp.prototype.getMaxWidth = function (dimension) {
        var rowPartitionTensor = this.getRowPartitionTensor(dimension - 1);
        switch (this.getRowPartitionTypeByDimension(dimension - 1)) {
            case RowPartitionType.VALUE_ROWIDS:
                return RaggedTensorToTensorOp.getMaxWidthValueRowID(rowPartitionTensor);
            case RowPartitionType.ROW_SPLITS:
                return RaggedTensorToTensorOp.getMaxWidthRowSplit(rowPartitionTensor);
            default:
                throw new Error("Cannot handle partition type ".concat(RowPartitionType[this.getRowPartitionTypeByDimension(dimension - 1)]));
        }
    };
    RaggedTensorToTensorOp.getMaxWidthRowSplit = function (rowSplit) {
        var tensorLength = rowSplit.length;
        if (tensorLength === 0 || tensorLength === 1) {
            return 0;
        }
        var maxWidth = 0;
        for (var i = 0; i < tensorLength - 1; ++i) {
            var currentWidth = rowSplit[i + 1] - rowSplit[i];
            if (currentWidth > maxWidth) {
                maxWidth = currentWidth;
            }
        }
        return maxWidth;
    };
    RaggedTensorToTensorOp.getMaxWidthValueRowID = function (valueRowIds) {
        var indexLength = valueRowIds.length;
        if (indexLength === 0) {
            return 0;
        }
        var firstEqualIndex = 0;
        var firstEqualIndexValue = valueRowIds[0];
        var maxWidth = 0;
        for (var i = 1; i < indexLength; ++i) {
            var value = valueRowIds[i];
            if (value !== firstEqualIndexValue) {
                firstEqualIndexValue = value;
                maxWidth = Math.max(i - firstEqualIndex, maxWidth);
                firstEqualIndex = i;
            }
        }
        return Math.max(indexLength - firstEqualIndex, maxWidth);
    };
    RaggedTensorToTensorOp.prototype.tensorShapeFromTensor = function (t, tShape, isPartial) {
        if (isPartial === void 0) { isPartial = true; }
        if (tShape.length === 0) {
            if (t[0] === -1) {
                return [];
            }
            throw new Error("The only valid scalar shape tensor is the fully unknown shape specified as -1.");
        }
        // MakePartialShape/MakeShapeHelper.
        return makeShape(t, isPartial);
    };
    RaggedTensorToTensorOp.prototype.calculateOutputSize = function (firstDim) {
        var valueShape = this.valuesShape;
        var defaultValueShape = this.defaultValueShape;
        tf.backend_util.validateDefaultValueShape(defaultValueShape, valueShape);
        var shape = this.tensorShapeFromTensor(this.shape, this.shapeShape);
        var outputShape = tf.backend_util.combineRaggedTensorToTensorShapes(this.raggedRank, shape, valueShape);
        var result = outputShape;
        if (result[0] < 0) {
            result[0] = firstDim;
        }
        for (var i = 1; i <= this.raggedRank; ++i) {
            if (result[i] < 0) {
                result[i] = this.getMaxWidth(i);
            }
        }
        return result;
    };
    /**
     * The outputIndex represents the index in the output tensor
     * where the first element of a particular dimension would be written.
     * If it is -1, it indicates that the index is out of scope.
     * Example, given firstDimension = 10, firstDimensionOutput = 6,
     * and outputIndexMultiplier = 100:
     * result = [0 100 200 300 400 500 -1 -1 -1 -1]
     * If firstDimensionOutput = 11 instead, then:
     * result = [0 100 200 300 400 500 600 700 800 900]
     */
    RaggedTensorToTensorOp.prototype.calculateFirstParentOutputIndex = function (firstDimension, outputIndexMultiplier, firstDimensionOutput) {
        var minDimension = Math.min(firstDimension, firstDimensionOutput);
        var result = [];
        var currentOutputIndex = 0;
        for (var i = 0; i < minDimension; ++i, currentOutputIndex += outputIndexMultiplier) {
            result.push(currentOutputIndex);
        }
        for (var i = minDimension; i < firstDimension; ++i) {
            result.push(-1);
        }
        tf.util.assert(result.length === firstDimension, function () { return 'Final length of result must be equal to firstDimension.'; });
        return result;
    };
    RaggedTensorToTensorOp.prototype.calculateOutputIndexRowSplit = function (rowSplit, parentOutputIndex, outputIndexMultiplier, outputSize) {
        var rowSplitSize = rowSplit.length;
        var result = [];
        for (var i = 0; i < rowSplitSize - 1; ++i) {
            var rowLength = rowSplit[i + 1] - rowSplit[i];
            var realLength = Math.min(outputSize, rowLength);
            var parentOutputIndexCurrent = parentOutputIndex[i];
            if (parentOutputIndexCurrent === -1) {
                realLength = 0;
            }
            for (var j = 0; j < realLength; ++j) {
                result.push(parentOutputIndexCurrent);
                parentOutputIndexCurrent += outputIndexMultiplier;
            }
            for (var j = 0; j < rowLength - realLength; ++j) {
                result.push(-1);
            }
        }
        if (rowSplitSize > 0 && result.length !== rowSplit[rowSplitSize - 1]) {
            throw new Error('Invalid row split size.');
        }
        return result;
    };
    // Calculate the output index of the first element of a list.
    // The parentOutputIndex is the same computation for the previous list.
    // -1 indicates an element or list that is out of range.
    // The outputIndexMultiplier is the number of output indices one moves
    // forward for each column.
    // E.g., given:
    // valueRowIds:[0 1 2 2 2 3 5 5 6]
    // parentOutputIndex:[1000 1100 2000 2100 -1 3000 4000]
    // outputIndexMultiplier: 10
    // outputSize: 2
    // You get:
    // result = [1000 1100 2000 2010 -1 2100 -1 -1 3000]
    // result[0] = parentOutputIndex[valueRowIds[0]]
    // result[1] = parentOutputIndex[valueRowIds[1]]
    // result[2] = parentOutputIndex[valueRowIds[2]]
    // result[3] = parentOutputIndex[valueRowIds[2] + 10]
    // result[4] = -1 because it is the third element the size is 2.
    // result[5] = parentOutputIndex[valueRowIds[3]]
    // result[6] = -1 because parentOutputIndex[valueRowIds[6]] == -1
    // result[7] = -1 because parentOutputIndex[valueRowIds[6]] == -1
    // result[8] = parentOutputIndex[valueRowIds[7]]
    RaggedTensorToTensorOp.prototype.calculateOutputIndexValueRowID = function (valueRowIds, parentOutputIndex, outputIndexMultiplier, outputSize) {
        var indexSize = valueRowIds.length;
        var result = [];
        if (indexSize === 0) {
            return [];
        }
        var currentOutputColumn = 0;
        var currentValueRowId = valueRowIds[0];
        if (currentValueRowId >= parentOutputIndex.length) {
            throw new Error("Got currentValueRowId=".concat(currentValueRowId, ", which is not less than ").concat(parentOutputIndex.length));
        }
        var currentOutputIndex = parentOutputIndex[currentValueRowId];
        result.push(currentOutputIndex);
        for (var i = 1; i < indexSize; ++i) {
            var nextValueRowId = valueRowIds[i];
            if (nextValueRowId === currentValueRowId) {
                if (currentOutputIndex >= 0) {
                    ++currentOutputColumn;
                    if (currentOutputColumn < outputSize) {
                        currentOutputIndex += outputIndexMultiplier;
                    }
                    else {
                        currentOutputIndex = -1;
                    }
                }
            }
            else {
                currentOutputColumn = 0;
                currentValueRowId = nextValueRowId;
                if (nextValueRowId >= parentOutputIndex.length) {
                    throw new Error("Got nextValueRowId=".concat(nextValueRowId, " which is not less than ").concat(parentOutputIndex.length));
                }
                currentOutputIndex = parentOutputIndex[nextValueRowId];
            }
            result.push(currentOutputIndex);
        }
        if (result.length !== valueRowIds.length) {
            throw new Error('Invalid row ids.');
        }
        return result;
    };
    RaggedTensorToTensorOp.prototype.calculateOutputIndex = function (dimension, parentOutputIndex, outputIndexMultiplier, outputSize) {
        var rowPartitionTensor = this.getRowPartitionTensor(dimension);
        var partitionType = this.getRowPartitionTypeByDimension(dimension);
        switch (partitionType) {
            case RowPartitionType.VALUE_ROWIDS:
                return this.calculateOutputIndexValueRowID(rowPartitionTensor, parentOutputIndex, outputIndexMultiplier, outputSize);
            case RowPartitionType.ROW_SPLITS:
                if (rowPartitionTensor.length - 1 > parentOutputIndex.length) {
                    throw new Error("Row partition size is greater than output size: ".concat(rowPartitionTensor.length - 1, " > ").concat(parentOutputIndex.length));
                }
                return this.calculateOutputIndexRowSplit(rowPartitionTensor, parentOutputIndex, outputIndexMultiplier, outputSize);
            default:
                throw new Error("Unsupported partition type: ".concat(RowPartitionType[partitionType]));
        }
    };
    RaggedTensorToTensorOp.prototype.getFirstDimensionSize = function () {
        var firstPartitionTensor = this.rowPartitionValues[0];
        if (this.rowPartitionTypes.length === 0) {
            throw new Error('No row_partition_types given.');
        }
        var firstPartitionType = this.rowPartitionTypes[0];
        switch (firstPartitionType) {
            case RowPartitionType.FIRST_DIM_SIZE:
                return firstPartitionTensor[0];
            case RowPartitionType.VALUE_ROWIDS:
                throw new Error('Cannot handle VALUE_ROWIDS in first dimension.');
            case RowPartitionType.ROW_SPLITS:
                return this.rowPartitionValuesShapes[0][0] - 1;
            default:
                throw new Error("Cannot handle type ".concat(RowPartitionType[firstPartitionType]));
        }
    };
    RaggedTensorToTensorOp.prototype.compute = function () {
        var firstPartitionTensor = this.rowPartitionValues[0];
        if (firstPartitionTensor.length <= 0) {
            throw new Error('Invalid first partition input. ' +
                'Tensor requires at least one element.');
        }
        var firstDimension = this.getFirstDimensionSize();
        var outputSize = this.calculateOutputSize(firstDimension);
        var multiplier = new Array(this.raggedRank + 1);
        multiplier[multiplier.length - 1] = 1;
        for (var i = multiplier.length - 2; i >= 0; --i) {
            multiplier[i] = multiplier[i + 1] * outputSize[i + 1];
        }
        // Full size of the tensor.
        var outputShape = makeShape(outputSize, false);
        var outputTensor = tf.util.getArrayFromDType(this.valuesDType, tf.util.sizeFromShape(outputShape));
        var fullSize = multiplier[0] * outputSize[0];
        if (fullSize > 0) {
            var outputIndex = this.calculateFirstParentOutputIndex(firstDimension, multiplier[0], outputSize[0]);
            for (var i = 1; i <= this.raggedRank; ++i) {
                var newOutputIndex = this.calculateOutputIndex(i - 1, outputIndex, multiplier[i], outputSize[i]);
                outputIndex = newOutputIndex;
            }
            this.setOutput(this.raggedRank, outputIndex, outputTensor, outputShape);
        }
        return [outputShape, outputTensor];
    };
    RaggedTensorToTensorOp.prototype.setOutput = function (raggedRank, outputIndex, outputTensor, outputShape) {
        if (outputTensor.length === 0) {
            return;
        }
        var valuesBase = this.values;
        var outputBase = outputTensor;
        var elementShape = outputShape.slice();
        elementShape = elementShape.slice(raggedRank + 1);
        var valueElementSize = tf.util.sizeFromShape(elementShape);
        var outputIndexSize = outputIndex.length;
        // Broadcast the default value to value_element_size.  (We can skip this
        // if defaultValueTensor.size == 1, since we use fill when that's true.)
        var defaultValue = this.defaultValue;
        if (defaultValue.length !== valueElementSize && defaultValue.length !== 1) {
            var srcShape_1 = this.defaultValueShape;
            tf.tidy(function () {
                var defaultValueTensor = tf.reshape(defaultValue, srcShape_1);
                var bCastDefault = tf.broadcastTo(defaultValueTensor, elementShape);
                defaultValue = bCastDefault.dataSync();
            });
        }
        // Loop through the outputIndex array, finding contiguous regions that
        // should be copied.  Once we find the end of a contiguous region, copy it
        // and add any necessary padding (with defaultValue).
        var srcStart = 0; // Start of contiguous region (in values)
        var dstStart = 0; // Destination for contiguous region (in output)
        var dstEnd = 0; // Destination for contiguous region (in output)
        for (var srcI = 0; srcI <= outputIndexSize; ++srcI) {
            // dstI is the destination where the value at srcI should be copied.
            var dstI = srcI < outputIndexSize ? outputIndex[srcI] : -1;
            // If we're still in a contiguous region, then update dstEnd go to the
            // next srcI.
            if (dstI === dstEnd) {
                ++dstEnd;
                continue;
            }
            // We found the end of contiguous region.  This can be because we found
            // a gap (dstI > dstEnd), or a source value that shouldn't be copied
            // because it's out-of-bounds (dstI == -1), or the end of the tensor
            // (dstI === -1).
            if (dstStart < dstEnd) {
                // Copy the contiguous region.
                var src = valuesBase.subarray(srcStart * valueElementSize);
                var dst = outputBase.subarray(dstStart * valueElementSize);
                var nVals = (dstEnd - dstStart) * valueElementSize;
                copyArray(dst, src, nVals);
            }
            // Add any necessary padding (w/ defaultValue).
            if (srcI >= outputIndexSize) {
                // We reached the end of values: pad to the end of output.
                var outputSize = outputTensor.length;
                dstI = Math.floor(outputSize / valueElementSize);
            }
            if (dstI > dstEnd) {
                if (this.defaultValue.length === 1) {
                    outputBase
                        .subarray(dstEnd * valueElementSize, dstI * valueElementSize)
                        .fill(this.defaultValue[0]);
                    dstEnd = dstI;
                }
                else {
                    while (dstI > dstEnd) {
                        var dst = outputBase.slice(dstEnd * valueElementSize);
                        copyArray(dst, defaultValue, valueElementSize);
                        ++dstEnd;
                    }
                }
            }
            // Update indices.
            if (dstI < 0) {
                // srcI should be skipped -- leave it out of the contiguous region.
                srcStart = srcI + 1;
                dstStart = dstEnd;
            }
            else {
                // srcI should be copied -- include it in the contiguous region.
                srcStart = srcI;
                dstStart = dstEnd;
                dstEnd = dstStart + 1;
            }
        }
    };
    return RaggedTensorToTensorOp;
}());
function copyArray(dst, src, size) {
    for (var i = 0; i < size; i++) {
        dst[i] = src[i];
    }
}
function makeShape(shape, isPartial) {
    var e_1, _a;
    var out = [];
    try {
        for (var shape_1 = __values(shape), shape_1_1 = shape_1.next(); !shape_1_1.done; shape_1_1 = shape_1.next()) {
            var dim = shape_1_1.value;
            if (dim < 0) {
                if (!isPartial) {
                    throw new Error("Dimension ".concat(dim, " must be >= 0"));
                }
                if (dim < -1) {
                    throw new Error("Dimension ".concat(dim, " must be >= -1"));
                }
                dim = -1;
            }
            out.push(dim);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (shape_1_1 && !shape_1_1.done && (_a = shape_1.return)) _a.call(shape_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return out;
}
function raggedTensorToTensorImpl(shape, shapesShape, values, valuesShape, valuesDType, defaultValue, defaultValueShape, rowPartitionValues, rowPartitionValuesShapes, rowPartitionTypes) {
    return new RaggedTensorToTensorOp(shape, shapesShape, values, valuesShape, valuesDType, defaultValue, defaultValueShape, rowPartitionValues, rowPartitionValuesShapes, rowPartitionTypes)
        .compute();
}

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
function rangeImpl(start, stop, step, dtype) {
    var sameStartStop = start === stop;
    var increasingRangeNegativeStep = start < stop && step < 0;
    var decreasingRangePositiveStep = stop < start && step > 1;
    if (sameStartStop || increasingRangeNegativeStep ||
        decreasingRangePositiveStep) {
        return tf.util.makeZerosTypedArray(0, dtype);
    }
    var numElements = Math.abs(Math.ceil((stop - start) / step));
    var values = tf.util.makeZerosTypedArray(numElements, dtype);
    if (stop < start && step === 1) {
        // Auto adjust the step's sign if it hasn't been set
        // (or was set to 1)
        step = -1;
    }
    values[0] = start;
    for (var i = 1; i < values.length; i++) {
        values[i] = values[i - 1] + step;
    }
    return values;
}

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
var rsqrtImpl = createSimpleUnaryImpl(function (xi) { return 1 / Math.sqrt(xi); });

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
function scatterImpl(indices, updates, shape, outputSize, sliceSize, numUpdates, sliceRank, strides, defaultValue, sumDupeIndices) {
    var flattenShape = [outputSize / sliceSize, sliceSize];
    var indicesData = indices.values;
    var updatesData = updates.values;
    if (outputSize === 0) {
        return tf.buffer(shape, updates.dtype);
    }
    var outBuf = (defaultValue instanceof tf.TensorBuffer) ?
        defaultValue :
        tf.buffer(flattenShape, updates.dtype);
    if (typeof defaultValue === 'string') {
        outBuf.values.fill(defaultValue);
    }
    else if (typeof defaultValue === 'number') {
        outBuf.values.fill(defaultValue);
    }
    else if (typeof defaultValue === 'boolean') {
        outBuf.values.fill(+defaultValue);
    }
    for (var i = 0; i < numUpdates; i++) {
        var index = [];
        var flattenIndex = 0;
        for (var j = 0; j < sliceRank; j++) {
            var dim = indicesData[i * sliceRank + j];
            index.push(dim);
            flattenIndex += dim * strides[j];
        }
        if (flattenIndex < 0 || flattenIndex >= outputSize / sliceSize) {
            throw new Error("Invalid indices: ".concat(index, " does not index into ").concat(shape));
        }
        for (var k = 0; k < sliceSize; k++) {
            if (sumDupeIndices) {
                outBuf.values[flattenIndex * sliceSize + k] +=
                    updatesData[i * sliceSize + k];
            }
            else {
                outBuf.values[flattenIndex * sliceSize + k] = updates.rank === 0 ?
                    updatesData[0] :
                    updatesData[i * sliceSize + k];
            }
        }
    }
    return outBuf;
}

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
var sigmoidImpl = createSimpleUnaryImpl(function (xi) { return 1 / (1 + Math.exp(-xi)); });

function sliceImpl(vals, begin, size, shape, dtype) {
    var isContinous = tf.slice_util.isSliceContinous(shape, begin, size);
    var length = tf.util.sizeFromShape(size);
    var xStrides = tf.util.computeStrides(shape);
    if (isContinous) {
        var flatOffset = tf.slice_util.computeFlatOffset(begin, xStrides);
        if (dtype === 'string') {
            return vals.slice(flatOffset, flatOffset + length);
        }
        return vals.subarray(flatOffset, flatOffset + length);
    }
    var decodedData = dtype === 'string' ?
        tf.backend_util.fromUint8ToStringArray(vals) :
        vals;
    var inBuf = tf.buffer(shape, dtype, decodedData);
    var outBuf = tf.buffer(size, dtype);
    for (var i = 0; i < outBuf.size; ++i) {
        var outLoc = outBuf.indexToLoc(i);
        var inLoc = outLoc.map(function (idx, j) { return idx + begin[j]; });
        outBuf.set.apply(outBuf, __spreadArray([inBuf.get.apply(inBuf, __spreadArray([], __read(inLoc), false))], __read(outLoc), false));
    }
    if (dtype === 'string') {
        return tf.backend_util.fromStringArrayToUint8(outBuf.values);
    }
    return outBuf.values;
}

/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
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
function sparseFillEmptyRowsImpl(indices, indicesShape, indicesDType, values, valuesDType, denseShape, defaultValue) {
    var indicesCount = indicesShape[0];
    var denseRows = denseShape[0];
    var emptyRowIndicator = new Array(denseRows);
    var reverseIndexMap = new Array(indicesCount);
    var rank = indicesShape[1];
    if (denseRows === 0) {
        if (indicesCount !== 0) {
            throw new Error(tf.backend_util.getSparseFillEmptyRowsIndicesDenseShapeMismatch(indicesCount));
        }
        var outputIndices = tf.util.getArrayFromDType(indicesDType, 0);
        var outputValues = tf.util.getArrayFromDType(valuesDType, 0);
        return [
            outputIndices, [0, rank], outputValues, emptyRowIndicator, reverseIndexMap
        ];
    }
    var rowsAreOrdered = true;
    var lastIndicesRow = 0;
    var csrOffset = new Array(denseRows).fill(0);
    for (var i = 0; i < indicesCount; ++i) {
        // indices is a 2d tensor with shape of [N, rank]
        var row = indices[i * rank];
        if (row < 0) {
            throw new Error(tf.backend_util.getSparseFillEmptyRowsNegativeIndexErrorMessage(i, row));
        }
        if (row >= denseRows) {
            throw new Error(tf.backend_util.getSparseFillEmptyRowsOutOfRangeIndexErrorMessage(i, row, denseRows));
        }
        ++csrOffset[row];
        rowsAreOrdered = rowsAreOrdered && (row >= lastIndicesRow);
        lastIndicesRow = row;
    }
    var allRowsFull = true;
    for (var row = 0; row < denseRows; ++row) {
        // csrOffset here describes the number of elements in this dense row
        var rowEmpty = (csrOffset[row] === 0);
        emptyRowIndicator[row] = rowEmpty;
        allRowsFull = allRowsFull && !rowEmpty;
        // In filled version, each row has at least one element.
        csrOffset[row] = Math.max(csrOffset[row], 1);
        // Update csrOffset to represent the number of elements up to and
        // including denseRows + 1:
        //  csrOffset[0] == #{elements of row 0}
        //  csrOffset[1] == #{elements of row 1} + #{elements of row 0}
        //  ..
        //  csrOffset[i] == starting index for elements in row i + 1.
        if (row > 0) {
            csrOffset[row] += csrOffset[row - 1];
        }
    }
    if (allRowsFull && rowsAreOrdered) {
        var outputIndices = indices;
        var outputValues = values;
        for (var i = 0; i < indicesCount; ++i) {
            reverseIndexMap[i] = i;
        }
        return [
            outputIndices, [indicesCount, rank], outputValues, emptyRowIndicator,
            reverseIndexMap
        ];
    }
    else {
        var fullIndicesCount = csrOffset[denseRows - 1];
        var outputIndices = tf.util.getArrayFromDType(indicesDType, fullIndicesCount * rank);
        var outputValues = tf.util.getArrayFromDType(valuesDType, fullIndicesCount);
        var filledCount = new Array(denseRows).fill(0);
        // Fill in values for rows that are not missing
        for (var i = 0; i < indicesCount; ++i) {
            // indices is a 2d tensor with shape of [N, rank]
            var row = indices[i * rank];
            var offset = filledCount[row];
            var outputI = ((row === 0) ? 0 : csrOffset[row - 1]) + offset;
            filledCount[row]++; // Increment the filled count for this row.
            for (var j = 0; j < rank; ++j) {
                // indices and outputIndices are 2d tensors with shape of [N, rank]
                outputIndices[outputI * rank + j] = indices[i * rank + j];
            }
            outputValues[outputI] = values[i];
            // We'll need this reverse index map to backprop correctly.
            reverseIndexMap[i] = outputI;
        }
        // Fill in values for rows that are missing
        for (var row = 0; row < denseRows; ++row) {
            var rowCount = filledCount[row];
            if (rowCount === 0) { // We haven't filled this row
                var startingIndex = (row === 0) ? 0 : csrOffset[row - 1];
                // Remaining index values were set to zero already.
                // Just need to set the row index in the right location.
                // outputIndices is a 2d tensor with shape of [N, rank]
                outputIndices[startingIndex * rank + 0] = row;
                for (var col = 1; col < rank; ++col) {
                    outputIndices[startingIndex * rank + col] = 0;
                }
                outputValues[startingIndex] = defaultValue;
            }
        }
        return [
            outputIndices, [fullIndicesCount, rank], outputValues, emptyRowIndicator,
            reverseIndexMap
        ];
    }
}

/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
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
function sparseReshapeImpl(inputIndices, inputIndicesShape, inputDType, inputShape, targetShape) {
    var denseSize = tf.util.sizeFromShape(inputShape);
    var nnz = inputIndicesShape[0];
    var outputRank = targetShape.length;
    // Compute the output shape. Determine product of specified dimensions, and
    // find the index of the unspecified one.
    var outputShape = [];
    var product = 1;
    var unknownIndex = -1;
    for (var d = 0; d < outputRank; ++d) {
        var size = targetShape[d];
        if (size === -1) {
            if (unknownIndex !== -1) {
                throw new Error(tf.backend_util
                    .getSparseReshapeMultipleNegativeOneOutputDimErrorMessage(unknownIndex, d));
            }
            unknownIndex = d;
            outputShape.push(1);
        }
        else {
            if (size < 0) {
                throw new Error(tf.backend_util.getSparseReshapeNegativeOutputDimErrorMessage(d, size));
            }
            product *= size;
            outputShape.push(size);
        }
    }
    if (unknownIndex !== -1) {
        if (product <= 0) {
            throw new Error(tf.backend_util.getSparseReshapeEmptyTensorZeroOutputDimErrorMessage());
        }
        var missing = Math.trunc(denseSize / product);
        if (product * missing !== denseSize) {
            throw new Error(tf.backend_util.getSparseReshapeInputOutputMultipleErrorMessage(inputShape, outputShape));
        }
        outputShape[unknownIndex] = missing;
    }
    var outputSize = tf.util.sizeFromShape(outputShape);
    if (outputSize !== denseSize) {
        throw new Error(tf.backend_util.getSparseReshapeInputOutputMismatchErrorMessage(inputShape, outputShape));
    }
    var inputRank = inputShape.length;
    var inputStrides = [];
    if (inputRank > 0) {
        inputStrides[inputRank - 1] = 1;
        for (var d = inputRank - 2; d >= 0; --d) {
            inputStrides[d] = inputStrides[d + 1] * inputShape[d + 1];
        }
    }
    var outputStrides = [];
    if (outputRank > 0) {
        outputStrides[outputRank - 1] = 1;
        for (var d = outputRank - 2; d >= 0; --d) {
            outputStrides[d] = outputStrides[d + 1] * outputShape[d + 1];
        }
    }
    var newIndices = tf.util.getArrayFromDType(inputDType, nnz * outputRank);
    for (var i = 0; i < nnz; ++i) {
        var id = 0;
        for (var j = 0; j < inputRank; ++j) {
            // inputIndices is a 2d tensor with shape of [nnz, inputRank]
            id += inputIndices[i * inputRank + j] * inputStrides[j];
        }
        for (var j = 0; j < outputRank; ++j) {
            // newIndices is a 2d tensor with shape of [nnz, outputRank]
            newIndices[i * outputRank + j] = Math.trunc(id / outputStrides[j]);
            id %= outputStrides[j];
        }
    }
    return [newIndices, [nnz, outputRank], outputShape];
}

/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
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
function sparseSegmentReductionImpl(input, inputShape, inputDType, indices, segmentIds, isMean, defaultValue) {
    if (isMean === void 0) { isMean = false; }
    if (defaultValue === void 0) { defaultValue = 0; }
    var numIndices = indices.length;
    // Flatten the array to two dimensions
    var inputFlat = [inputShape[0], input.length / inputShape[0]];
    var numCol = inputFlat[1];
    // Note that the current implementation assumes that segmentIds values are
    // sorted.
    var lastSegmentIdPlusOne = numIndices > 0 ? segmentIds[numIndices - 1] + 1 : 0;
    var outputRows = lastSegmentIdPlusOne;
    if (outputRows < 0) {
        throw new Error(tf.backend_util.getSparseSegmentReductionNegativeSegmentIdsErrorMessage());
    }
    var outputShape = inputShape.slice();
    outputShape[0] = outputRows;
    var outputLength = outputShape.reduce(function (product, value) { return product * value; }, 1);
    // Output array is initialized with the value 0 by default.
    var output = tf.util.getArrayFromDType(inputDType, outputLength);
    // Note that we do not initialize the output buffer with a default value, so
    // we need to explicitly set missing indices to the default value.
    if (numIndices === 0) {
        if (outputRows > 0) {
            output.fill(defaultValue);
        }
        return [output, outputShape];
    }
    if (outputRows <= 0) {
        throw new Error(tf.backend_util.getSparseSegmentReductionNegativeSegmentIdsErrorMessage());
    }
    var start = 0, end = 1;
    // Index from which the output is not initialized.
    var uninitializedIndex = 0;
    var outIndex = segmentIds[start];
    while (true) {
        // We initialize nextIndex to 0 to avoid may be uninitialized warning
        var nextIndex = 0;
        if (end < numIndices) {
            nextIndex = segmentIds[end];
            if (outIndex === nextIndex) {
                ++end;
                continue;
            }
            // We have a new segment here.  Verify that the segment ids are growing.
            if (outIndex >= nextIndex) {
                throw new Error(tf.backend_util
                    .getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage());
            }
        }
        if (outIndex < 0 || outIndex >= outputRows) {
            throw new Error(tf.backend_util.getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage(outIndex, outputRows));
        }
        // If there is a gap between two indices, we need to set that gap to the
        // default value.
        if (outIndex > uninitializedIndex) {
            output.fill(defaultValue, uninitializedIndex * numCol, outIndex * numCol);
        }
        for (var i = start; i < end; ++i) {
            var index = indices[i];
            if (index < 0 || index >= inputFlat[0]) {
                throw new Error(tf.backend_util.getSparseSegmentReductionIndicesOutOfRangeErrorMessage(i, indices[i], inputFlat[0]));
            }
            for (var j = 0; j < numCol; j++) {
                output[outIndex * numCol + j] += input[index * numCol + j];
            }
        }
        if (isMean) {
            for (var j = 0; j < numCol; j++) {
                output[outIndex * numCol + j] /= end - start;
            }
        }
        start = end;
        ++end;
        uninitializedIndex = outIndex + 1;
        outIndex = nextIndex;
        if (end > numIndices) {
            break;
        }
    }
    // Fill the gap at the end with the default value.
    if (uninitializedIndex < outputRows) {
        output.fill(defaultValue, uninitializedIndex * numCol, outputRows * numCol);
    }
    return [output, outputShape];
}

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
var sqrtImpl = createSimpleUnaryImpl(function (xi) { return Math.sqrt(xi); });

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
var staticRegexReplaceImpl = createSimpleUnaryImpl(function (x, attrs) {
    var pattern = attrs.pattern, replaceGlobal = attrs.replaceGlobal, rewrite = attrs.rewrite;
    // TODO(mattSoulanille): Don't create a regex each time.
    return x.replace(new RegExp(pattern, replaceGlobal ? 'g' : ''), rewrite);
});

function stridedSliceImpl(outShape, xBuf, strides, begin) {
    var outBuf = tf.buffer(outShape, xBuf.dtype);
    for (var i = 0; i < outBuf.size; i++) {
        var loc = outBuf.indexToLoc(i);
        var newLoc = new Array(loc.length);
        for (var j = 0; j < newLoc.length; j++) {
            newLoc[j] = loc[j] * strides[j] + begin[j];
        }
        outBuf.set.apply(outBuf, __spreadArray([xBuf.get.apply(xBuf, __spreadArray([], __read(newLoc), false))], __read(loc), false));
    }
    return outBuf;
}

/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
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
/**
 * The StringNGramsOp class creates ngrams from ragged string data.
 * The constructor contains all attributes related to the operation such as
 * padding widths and strings, and the compute function can be used to
 * compute the ngrams for different ragged tensor inputs.
 */
var StringNGramsOp = /** @class */ (function () {
    function StringNGramsOp(separator, nGramWidths, leftPad, rightPad, padWidth, preserveShortSequences) {
        this.separator = tf.util.encodeString(separator);
        this.nGramWidths = nGramWidths;
        this.leftPad = tf.util.encodeString(leftPad);
        this.rightPad = tf.util.encodeString(rightPad);
        this.padWidth = padWidth;
        this.preserveShort = preserveShortSequences;
    }
    StringNGramsOp.prototype.getPadWidth = function (nGramWidth) {
        // Ngrams can be padded with either a fixed pad width or a dynamic pad
        // width depending on the 'padWidth' arg, but in no case should the padding
        // ever be wider than 'nGramWidth' - 1.
        return Math.min(this.padWidth < 0 ? nGramWidth - 1 : this.padWidth, nGramWidth - 1);
    };
    StringNGramsOp.prototype.getNumNGrams = function (length, nGramWidth) {
        var padWidth = this.getPadWidth(nGramWidth);
        return Math.max(0, ((length + 2 * padWidth) - nGramWidth) + 1);
    };
    StringNGramsOp.prototype.createNGrams = function (data, splitIndex, output, outputStartIndex, numNGrams, nGramWidth) {
        var _loop_1 = function (nGramIndex) {
            var padWidth = this_1.getPadWidth(nGramWidth);
            var leftPadding = Math.max(0, padWidth - nGramIndex);
            var rightPadding = Math.max(0, padWidth - (numNGrams - (nGramIndex + 1)));
            var numTokens = nGramWidth - (leftPadding + rightPadding);
            var dataStartIndex = splitIndex + (leftPadding > 0 ? 0 : nGramIndex - padWidth);
            // Calculate the total expected size of the nGram so we can reserve the
            // correct amount of space in the string.
            var nGramSize = 0;
            // Size of the left padding.
            nGramSize += leftPadding * this_1.leftPad.length;
            // Size of the tokens.
            for (var n = 0; n < numTokens; ++n) {
                nGramSize += data[dataStartIndex + n].length;
            }
            // Size of the right padding.
            nGramSize += rightPadding * this_1.rightPad.length;
            // Size of the separators.
            var numSeparators = leftPadding + rightPadding + numTokens - 1;
            nGramSize += numSeparators * this_1.separator.length;
            // Build the nGram.
            output[outputStartIndex + nGramIndex] = new Uint8Array(nGramSize);
            var nGram = output[outputStartIndex + nGramIndex];
            var nextNGramIndex = 0;
            var appendToNGram = function (str) { return str.forEach(function (value) { return nGram[nextNGramIndex++] = value; }); };
            for (var n = 0; n < leftPadding; ++n) {
                appendToNGram(this_1.leftPad);
                appendToNGram(this_1.separator);
            }
            // Only output first numTokens - 1 pairs of data and separator
            for (var n = 0; n < numTokens - 1; ++n) {
                appendToNGram(data[dataStartIndex + n]);
                appendToNGram(this_1.separator);
            }
            // Handle case when there are no tokens or no right padding as these
            // can result in consecutive separators.
            if (numTokens > 0) {
                // If we have tokens, then output last and then pair each separator
                // with the right padding that follows, to ensure nGram ends either with
                // the token or with the right pad.
                appendToNGram(data[dataStartIndex + numTokens - 1]);
                for (var n = 0; n < rightPadding; ++n) {
                    appendToNGram(this_1.separator);
                    appendToNGram(this_1.rightPad);
                }
            }
            else {
                // If we don't have tokens, then the last item inserted into the nGram
                // has been the separator from the left padding loop above. Hence,
                // output right pad and separator and make sure to finish with a
                // padding, not a separator.
                for (var n = 0; n < rightPadding - 1; ++n) {
                    appendToNGram(this_1.rightPad);
                    appendToNGram(this_1.separator);
                }
                appendToNGram(this_1.rightPad);
            }
        };
        var this_1 = this;
        for (var nGramIndex = 0; nGramIndex < numNGrams; ++nGramIndex) {
            _loop_1(nGramIndex);
        }
    };
    // Data and splits together form the definition of the ragged tensor,
    // where data is 1 dimensional and contains the values of the tensor
    // and splits denotes the indices at which each row starts.
    StringNGramsOp.prototype.compute = function (data, splits) {
        var _this = this;
        // Validate that the splits are valid indices into data, only if there are
        // splits specified.
        var inputDataSize = data.length;
        var splitsSize = splits.length;
        if (splitsSize > 0) {
            var prevSplit = splits[0];
            if (prevSplit !== 0) {
                throw new Error("First split value must be 0, got ".concat(prevSplit));
            }
            for (var i = 1; i < splitsSize; ++i) {
                var validSplits = splits[i] >= prevSplit;
                validSplits = validSplits && (splits[i] <= inputDataSize);
                if (!validSplits) {
                    throw new Error("Invalid split value ".concat(splits[i], ", must be in [").concat(prevSplit, ", ").concat(inputDataSize, "]"));
                }
                prevSplit = splits[i];
            }
            if (prevSplit !== inputDataSize) {
                throw new Error("Last split value must be data size. Expected ".concat(inputDataSize, ", got ").concat(prevSplit));
            }
        }
        var numBatchItems = splitsSize - 1;
        var nGramsSplits = tf.util.getArrayFromDType('int32', splitsSize);
        // If there is no data or size, return an empty ragged tensor.
        if (inputDataSize === 0 || splitsSize === 0) {
            var empty = new Array(inputDataSize);
            for (var i = 0; i <= numBatchItems; ++i) {
                nGramsSplits[i] = 0;
            }
            return [empty, nGramsSplits];
        }
        nGramsSplits[0] = 0;
        var _loop_2 = function (i) {
            var length = splits[i] - splits[i - 1];
            var numNGrams = 0;
            this_2.nGramWidths.forEach(function (nGramWidth) {
                numNGrams += _this.getNumNGrams(length, nGramWidth);
            });
            if (this_2.preserveShort && length > 0 && numNGrams === 0) {
                numNGrams = 1;
            }
            nGramsSplits[i] = nGramsSplits[i - 1] + numNGrams;
        };
        var this_2 = this;
        for (var i = 1; i <= numBatchItems; ++i) {
            _loop_2(i);
        }
        var nGrams = new Array(nGramsSplits[numBatchItems]);
        var _loop_3 = function (i) {
            var splitIndex = splits[i];
            var outputStartIdx = nGramsSplits[i];
            this_3.nGramWidths.forEach(function (nGramWidth) {
                var length = splits[i + 1] - splits[i];
                var numNGrams = _this.getNumNGrams(length, nGramWidth);
                _this.createNGrams(data, splitIndex, nGrams, outputStartIdx, numNGrams, nGramWidth);
                outputStartIdx += numNGrams;
            });
            // If we're preserving short sequences, check to see if no sequence was
            // generated by comparing the current output start idx to the original
            // one (nGramSplitsdata). If no ngrams were generated, then they will
            // be equal (since we increment outputStartIdx by numNGrams every
            // time we create a set of ngrams.)
            if (this_3.preserveShort && outputStartIdx === nGramsSplits[i]) {
                var dataLength = splits[i + 1] - splits[i];
                // One legitimate reason to not have any ngrams when this.preserveShort
                // is true is if the sequence itself is empty. In that case, move on.
                if (dataLength === 0) {
                    return "continue";
                }
                // We don't have to worry about dynamic padding sizes here: if padding
                // was dynamic, every sequence would have had sufficient padding to
                // generate at least one nGram.
                var nGramWidth = dataLength + 2 * this_3.padWidth;
                var numNGrams = 1;
                this_3.createNGrams(data, splitIndex, nGrams, outputStartIdx, numNGrams, nGramWidth);
            }
        };
        var this_3 = this;
        for (var i = 0; i < numBatchItems; ++i) {
            _loop_3(i);
        }
        return [nGrams, nGramsSplits];
    };
    return StringNGramsOp;
}());
function stringNGramsImpl(data, dataSplits, separator, nGramWidths, leftPad, rightPad, padWidth, preserveShortSequences) {
    return new StringNGramsOp(separator, nGramWidths, leftPad, rightPad, padWidth, preserveShortSequences)
        .compute(data, dataSplits);
}

/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
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
function split(str, delimiters, skipEmpty, result) {
    if (!str.length) {
        return;
    }
    // When the delimiter is empty, the input is split into individual characters.
    if (delimiters.length === 0) {
        for (var i = 0; i < str.length; ++i) {
            result.push(str.subarray(i, i + 1));
        }
        return;
    }
    // When there is one delimiter, the input is split only at that delimiter.
    if (delimiters.length === 1) {
        var delimiter = delimiters[0];
        var f = str.indexOf(delimiter);
        while (f !== -1) {
            var token = str.subarray(0, f);
            if (!skipEmpty || token.length !== 0) {
                result.push(token);
            }
            str = str.subarray(f + 1);
            f = str.indexOf(delimiter);
        }
        if (!skipEmpty || str.length !== 0) {
            result.push(str);
        }
        return;
    }
    // When there are multiple delimiters, the input is split at every instance
    // one of the delimiters appears.
    var tokenStart = 0;
    for (var i = 0; i < str.length + 1; i++) {
        if ((i === str.length) || (delimiters.indexOf(str[i]) !== -1)) {
            var token = str.subarray(tokenStart, i);
            if (!skipEmpty || token.length !== 0) {
                result.push(token);
            }
            tokenStart = i + 1;
        }
    }
}
function stringSplitImpl(input, delimiter, skipEmpty) {
    var batchSize = input.length;
    // Empty delimiter means split the input character by character.
    var tokens = [];
    var outputSize = 0;
    var maxNumEntries = 0;
    var numIndices = new Array(batchSize);
    for (var i = 0; i < batchSize; ++i) {
        var prevTokensLength = tokens.length;
        split(input[i], delimiter, skipEmpty, tokens);
        var nEntries = tokens.length - prevTokensLength;
        numIndices[i] = nEntries;
        outputSize += nEntries;
        maxNumEntries = Math.max(maxNumEntries, nEntries);
    }
    var indices = tf.util.getArrayFromDType('int32', outputSize * 2);
    var values = new Array(outputSize);
    var shape = [batchSize, maxNumEntries];
    var c = 0;
    for (var i = 0; i < batchSize; ++i) {
        for (var j = 0; j < numIndices[i]; ++j) {
            // indices is a 2d tensor with shape of [outputSize, 2]
            indices[c * 2] = i;
            indices[c * 2 + 1] = j;
            values[c] = tokens[c];
            ++c;
        }
    }
    return [indices, values, shape];
}

/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
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
function stringToHashBucketFastImpl(input, numBuckets) {
    var output = tf.util.getArrayFromDType('int32', input.length);
    for (var i = 0; i < input.length; ++i) {
        output[i] =
            tf.util.fingerPrint64(input[i]).modulo(numBuckets).getLowBitsUnsigned();
    }
    return output;
}

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
var subImpl = createSimpleBinaryKernelImpl((function (aValue, bValue) { return aValue - bValue; }));

/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
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
/**
 * An implementation of the tile kernel shared between webgl and cpu for string
 * tensors only.
 */
function tileImpl(xBuf, reps) {
    var newShape = new Array(xBuf.rank);
    for (var i = 0; i < newShape.length; i++) {
        newShape[i] = xBuf.shape[i] * reps[i];
    }
    var result = tf.buffer(newShape, xBuf.dtype);
    for (var i = 0; i < result.values.length; ++i) {
        var newLoc = result.indexToLoc(i);
        var originalLoc = new Array(xBuf.rank);
        for (var j = 0; j < originalLoc.length; j++) {
            originalLoc[j] = newLoc[j] % xBuf.shape[j];
        }
        var originalIndex = xBuf.locToIndex(originalLoc);
        result.values[i] = xBuf.values[originalIndex];
    }
    return result;
}

var comparePair = function (a, b) {
    var valueDiff = b.value - a.value;
    return valueDiff === 0 ? a.index - b.index : valueDiff;
};
/**
 * Partitions array where all elements smaller than the (k+1) smallest element
 * are found to the left of it, and all larger to the right of it.
 * Based on the Floyd-Rivest Algorithm, ref:
 * https://en.wikipedia.org/wiki/Floyd%E2%80%93Rivest_algorithm
 * @param array: Array to partition
 * @param left: Left index for the interval
 * @param right: Right index for the interval
 * @param k: Desired index value, where array[k] is the (k+1)th smallest element
 *           when left = 0
 */
function select$1(array, k, left, right) {
    if (left === void 0) { left = 0; }
    if (right === void 0) { right = array.length - 1; }
    while (right > left) {
        // Use select recursively to sample a smaller set of size s
        // the arbitrary constants 600 and 0.5 are used in the original
        // version to minimize execution time.
        if (right - left > 600) {
            var n = right - left + 1;
            var i_1 = k - left + 1;
            var z = Math.log(n);
            var s = 0.5 * Math.exp(2 * z / 3);
            var sd = 0.5 * Math.sqrt(z * s * (n - s) / n) * Math.sign(i_1 - n / 2);
            var newLeft = Math.max(left, Math.floor(k - i_1 * s / n + sd));
            var newRight = Math.min(right, Math.floor(k + (n - i_1) * s / n + sd));
            select$1(array, k, newLeft, newRight);
        }
        // partition the elements between left and right around t
        var t = array[k];
        var i = left;
        var j = right;
        tf.util.swap(array, left, k);
        if (comparePair(array[right], t) > 0) {
            tf.util.swap(array, left, right);
        }
        while (i < j) {
            tf.util.swap(array, i, j);
            i++;
            j--;
            while (comparePair(array[i], t) < 0) {
                i = i + 1;
            }
            while (comparePair(array[j], t) > 0) {
                j = j - 1;
            }
        }
        if (comparePair(array[left], t) === 0) {
            tf.util.swap(array, left, j);
        }
        else {
            j = j + 1;
            tf.util.swap(array, j, right);
        }
        // Adjust left and right towards the boundaries of the subset
        // containing the (k - left + 1)th smallest element.
        if (j <= k) {
            left = j + 1;
        }
        if (k <= j) {
            right = j - 1;
        }
    }
}
function topKImpl(x, xShape, xDtype, k, sorted) {
    // Reshape into a 2d tensor [batch, lastDim] and compute topk along lastDim.
    var lastDim = xShape[xShape.length - 1];
    var _a = __read([x.length / lastDim, lastDim], 2), batch = _a[0], size = _a[1];
    var allTopKVals = tf.util.getTypedArrayFromDType(xDtype, batch * k);
    var allTopKIndices = tf.util.getTypedArrayFromDType('int32', batch * k);
    var _loop_1 = function (b) {
        var offset = b * size;
        var vals = x.subarray(offset, offset + size);
        var valAndInd = new Array(vals.length);
        vals.forEach(function (value, index) { return valAndInd[index] = { value: value, index: index }; });
        if (k < valAndInd.length) {
            select$1(valAndInd, k);
            valAndInd = valAndInd.slice(0, k);
        }
        if (sorted) {
            valAndInd.sort(comparePair);
        }
        var outOffset = b * k;
        var topKVals = allTopKVals.subarray(outOffset, outOffset + k);
        var topKIndices = allTopKIndices.subarray(outOffset, outOffset + k);
        for (var i = 0; i < k; i++) {
            topKVals[i] = valAndInd[i].value;
            topKIndices[i] = valAndInd[i].index;
        }
    };
    for (var b = 0; b < batch; b++) {
        _loop_1(b);
    }
    // Reshape back to the original input shape, except that the last
    // dimension is k.
    var outputShape = xShape.slice();
    outputShape[outputShape.length - 1] = k;
    return [
        tf.buffer(outputShape, xDtype, allTopKVals),
        tf.buffer(outputShape, 'int32', allTopKIndices)
    ];
}

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
function uniqueImpl(values, axis, shape, dtype) {
    // Normalize and validate axis.
    var $axis = tf.util.parseAxisParam(axis, shape)[0];
    // Calculate the new shape that is suitable for extracting data along the
    // given axis.
    //
    // The rank is 3.
    // The size of the 1st dimension is the size of all the axes < the given axis.
    // The size of the 2nd dimension is the same as the size of the given axis.
    // The size of the 3rd dimension is the size of all the axes > the given axis.
    //
    // For example, for a 4D tensor with shape=[2, 3, 5, 4] and axis=2, the
    // newShape would be: [2*3, 5, 4].
    //
    // Note that this is not the final output shape. This will be the shape for an
    // intermediate TensorBuffer (see inputBuffer below) to allow us to extract
    // values along the given axis. To demonstrate how it works, consider the
    // following example:
    //
    // Input: a 3D tensor, with shape [1, 2, 3]
    // [
    //   [
    //      [1,2,3],
    //      [4,5,6]
    //   ]
    // ]
    // Axis: 2 (the last axis).
    // Along axis 2, we expect to extract 3 tensors: [1,4], [2,5], [3,6].
    //
    // For this example, newShape would be: [2, 3, 1], where 2 is calculated from
    // 1*2. The re-shaped data would look like:
    //
    // [
    //   [
    //     [1], [2], [3]
    //   ],
    //   [
    //     [4], [5], [6]
    //   ]
    // ]
    //
    // Then, we can construct a 3-level nested loop by the following dimension
    // order to extract the values along the axis (dimension1):
    // i: dimension1       // 0,1,2 (newShape[1])
    //   m: dimension0     // 0,1   (newShape[0])
    //     n: dimension2   // 0     (newShape[2])
    //
    //                       m, i, n
    //                      ---------
    // Iteration 0: data at [0, 0, 0] => "1"
    // Iteration 1: data at [1, 0, 0] => "4"
    // We got [1,4].
    // Iteration 2: data at [0, 1, 0] => "2"
    // Iteration 3: data at [1, 1, 0] => "5"
    // We got [2,5].
    // Iteration 4: data at [0, 2, 0] => "3"
    // Iteration 5: data at [1, 2, 0] => "6"
    // We got [3,6].
    var newShape = [1, shape[0], 1];
    for (var i = 0; i < $axis; i++) {
        newShape[0] *= shape[i];
    }
    newShape[1] = shape[$axis];
    for (var i = $axis + 1; i < shape.length; i++) {
        newShape[2] *= shape[i];
    }
    // A map from unique elements (their string representations) to their values
    // in "indices" (below).
    var uniqueElements = new Map();
    // The indices of each unique element in the original tensor along the given
    // axis. It is 1D and has the same size as the given axis.
    var indices = new Int32Array(shape[$axis]);
    // Create a buffer so we can easily extract value at a given location.
    var inputBuffer = new tf.TensorBuffer(newShape, dtype, values);
    // The indices along the given axis that have unique elements. This is a
    // de-duped version of "indices" above.
    var uniqueIndices = [];
    var is1DTensor = newShape[0] === 1 && newShape[2] === 1;
    for (var i = 0; i < shape[$axis]; i++) {
        // Extract values along the axis.
        var element = void 0;
        if (is1DTensor) {
            // Fast path for 1D tensor input.
            element = values[i].toString();
        }
        else {
            var axisValues = [];
            for (var m = 0; m < newShape[0]; m++) {
                for (var n = 0; n < newShape[2]; n++) {
                    axisValues.push(inputBuffer.get(m, i, n));
                }
            }
            element = axisValues.join(',');
        }
        // Dedup and update various indices.
        var existingIndex = uniqueElements.get(element);
        if (existingIndex != null) {
            indices[i] = existingIndex;
        }
        else {
            var uniqueIndex = uniqueElements.size;
            uniqueElements.set(element, uniqueIndex);
            indices[i] = uniqueIndex;
            uniqueIndices.push(i);
        }
    }
    // Now we know where each of the unique elements are located along the axis
    // (uniqueIndices). Extract them from input buffer and store them in the
    // output buffer.
    var outputTmpShape = newShape.slice();
    outputTmpShape[1] = uniqueElements.size;
    var outputBuffer = new tf.TensorBuffer(outputTmpShape, dtype);
    uniqueIndices.forEach(function (uniqueElementIndex, i) {
        for (var m = 0; m < newShape[0]; m++) {
            for (var n = 0; n < newShape[2]; n++) {
                outputBuffer.set(inputBuffer.get(m, uniqueElementIndex, n), m, i, n);
            }
        }
    });
    // The output shape can be calculated from the input shape with the size of
    // the given axis replaced by the number of unique elements along that axis.
    var outputShape = shape.slice();
    outputShape[$axis] = outputTmpShape[1];
    return {
        outputValues: outputBuffer.values,
        outputShape: outputShape,
        indices: indices,
    };
}

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
var addImplCPU = addImpl, bincountImplCPU = bincountImpl, bincountReduceImplCPU = bincountReduceImpl, bitwiseAndImplCPU = bitwiseAndImpl, castImplCPU = castImpl, ceilImplCPU = ceilImpl, concatImplCPU = concatImpl$1, equalImplCPU = equalImpl, expImplCPU = expImpl, expm1ImplCPU = expm1Impl, floorImplCPU = floorImpl, gatherNdImplCPU = gatherNdImpl, gatherV2ImplCPU = gatherV2Impl, greaterImplCPU = greaterImpl, greaterEqualImplCPU = greaterEqualImpl, lessImplCPU = lessImpl, lessEqualImplCPU = lessEqualImpl, linSpaceImplCPU = linSpaceImpl, logImplCPU = logImpl, maxImplCPU = maxImpl$1, maximumImplCPU = maximumImpl, minimumImplCPU = minimumImpl, multiplyImplCPU = multiplyImpl, negImplCPU = negImpl, notEqualImplCPU = notEqualImpl, prodImplCPU = prodImpl, raggedGatherImplCPU = raggedGatherImpl, raggedRangeImplCPU = raggedRangeImpl, raggedTensorToTensorImplCPU = raggedTensorToTensorImpl, rangeImplCPU = rangeImpl, rsqrtImplCPU = rsqrtImpl, scatterImplCPU = scatterImpl, sigmoidImplCPU = sigmoidImpl, simpleAbsImplCPU = simpleAbsImpl, sliceImplCPU = sliceImpl, sparseFillEmptyRowsImplCPU = sparseFillEmptyRowsImpl, sparseReshapeImplCPU = sparseReshapeImpl, sparseSegmentReductionImplCPU = sparseSegmentReductionImpl, sqrtImplCPU = sqrtImpl, staticRegexReplaceImplCPU = staticRegexReplaceImpl, stridedSliceImplCPU = stridedSliceImpl, stringNGramsImplCPU = stringNGramsImpl, stringSplitImplCPU = stringSplitImpl, stringToHashBucketFastImplCPU = stringToHashBucketFastImpl, subImplCPU = subImpl, tileImplCPU = tileImpl, topKImplCPU = topKImpl, transposeImplCPU = transposeImpl$1, uniqueImplCPU = uniqueImpl;

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
function getVecChannels(name, rank) {
    return ['x', 'y', 'z', 'w', 'u', 'v'].slice(0, rank).map(function (d) { return "".concat(name, ".").concat(d); });
}
function getChannels(name, rank) {
    if (rank === 1) {
        return [name];
    }
    return getVecChannels(name, rank);
}
function getSourceCoords$2(rank, dims) {
    if (rank === 1) {
        return 'rc';
    }
    var coords = '';
    for (var i = 0; i < rank; i++) {
        coords += dims[i];
        if (i < rank - 1) {
            coords += ',';
        }
    }
    return coords;
}

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
var PackProgram = /** @class */ (function () {
    function PackProgram(outputShape) {
        this.variableNames = ['A'];
        this.packedInputs = false;
        this.packedOutput = true;
        // Only input / output 3D tensors.
        this.outputShape = outputShape;
        this.rank = outputShape.length;
        this.enableShapeUniforms = useShapeUniforms(this.outputShape.length);
        if (this.rank === 0) {
            this.userCode = "\n        void main() {\n          setOutput(vec4(getA(), 0., 0., 0.));\n        }\n      ";
        }
        else {
            var channels = getChannels('rc', this.rank);
            var dtype = getCoordsDataType(this.rank);
            var outOfBoundsCondition = this.getOutOfBoundsCondition(channels);
            var setup = this.getSetup(channels);
            var output = this.getOutput(channels);
            this.userCode = "\n        void main() {\n          ".concat(dtype, " rc = getOutputCoords();\n\n          if(").concat(outOfBoundsCondition, ") {\n            setOutput(vec4(0));\n          } else {\n            ").concat(setup, "\n\n            setOutput(vec4(").concat(output, "));\n          }\n        }\n      ");
        }
    }
    PackProgram.prototype.getSourceCoordsArr = function (dims) {
        var coords = [];
        for (var row = 0; row <= 1; row++) {
            for (var col = 0; col <= 1; col++) {
                var coord = "".concat(row === 0 ? 'r' : 'rp1', ", ").concat(col === 0 ? 'c' : 'cp1');
                for (var d = 2; d < this.rank; d++) {
                    coord = "".concat(dims[dims.length - 1 - d], ",") + coord;
                }
                coords.push(coord);
            }
        }
        return coords;
    };
    PackProgram.prototype.getOutOfBoundsCondition = function (dims) {
        if (this.rank === 1) {
            return "rc > ".concat(this.enableShapeUniforms ? 'outShape' : this.outputShape[0]);
        }
        var cond = '';
        for (var i = this.rank - 2; i < this.rank; i++) {
            cond += "".concat(dims[i], " >= ").concat(this.enableShapeUniforms ? "outShape[".concat(i, "]") : this.outputShape[i]);
            if (i < this.rank - 1) {
                cond += '||';
            }
        }
        return cond;
    };
    PackProgram.prototype.getSetup = function (dims) {
        if (this.rank === 1) {
            return '';
        }
        var innerDims = dims.slice(-2);
        var col = this.enableShapeUniforms ? "outShape[".concat(this.rank, " - 1]") :
            this.outputShape[this.rank - 1];
        var row = this.enableShapeUniforms ? "outShape[".concat(this.rank, " - 2]") :
            this.outputShape[this.rank - 2];
        return "\n      int r = ".concat(innerDims[0], ";\n      int c = ").concat(innerDims[1], ";\n      int rp1 = r + 1;\n      int cp1 = c + 1;\n\n      bool cEdge = cp1 >= ").concat(col, ";\n      bool rEdge = rp1 >= ").concat(row, ";\n    ");
    };
    PackProgram.prototype.getOutput = function (dims) {
        var sourceCoords = this.getSourceCoordsArr(dims);
        if (this.rank === 1) {
            var outShape = this.enableShapeUniforms ? 'outShape' : this.outputShape[0];
            return "getA(rc), (rc + 1 >= ".concat(outShape, " ? 0. : getA(rc + 1)), 0, 0");
        }
        return "getA(".concat(sourceCoords[0], "),\n            cEdge ? 0. : getA(").concat(sourceCoords[1], "),\n            rEdge ? 0. : getA(").concat(sourceCoords[2], "),\n            rEdge || cEdge ? 0. : getA(").concat(sourceCoords[3], ")");
    };
    return PackProgram;
}());

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
var ReshapePackedProgram = /** @class */ (function () {
    function ReshapePackedProgram(outputShape, inputShape) {
        this.variableNames = ['A'];
        this.packedInputs = true;
        this.packedOutput = true;
        this.customUniforms = [{ name: 'inputShape', type: 'ivec3' }];
        this.outputShape = outputShape;
        this.enableShapeUniforms = useShapeUniforms(this.outputShape.length);
        var mainLoop = "";
        for (var i = 0; i < 4; i++) {
            var thisRC = "thisRC = rc;";
            if (i % 2 === 1) {
                thisRC += "thisRC.z += 1;";
            }
            if (i > 1) {
                thisRC += "thisRC.y += 1;";
            }
            mainLoop += "\n        ".concat(thisRC, "\n        ").concat(i > 0 ? "if(thisRC.y < rows && thisRC.z < cols){" : '', "\n          int flatIndex = getFlatIndex(thisRC);\n\n          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flatIndex);\n          vec2 inputRCInnerDims = vec2(float(inputRC.y),float(inputRC.z));\n\n          result[").concat(i, "] =\n            getChannel(getA(inputRC.x, inputRC.y, inputRC.z), inputRCInnerDims);\n        ").concat(i > 0 ? '}' : '', "\n      ");
        }
        this.userCode = "\n      ".concat(getReshapedInputCoords(inputShape, this.enableShapeUniforms), "\n      ").concat(this.enableShapeUniforms ? getFlatIndexFrom3DOutput() :
            getFlatIndexFrom3D(outputShape), "\n\n      void main() {\n        ivec3 rc = getOutputCoords();\n\n        vec4 result = vec4(0.);\n\n        ivec3 thisRC;\n        int rows = ").concat(this.enableShapeUniforms ? 'outShape[1]' : outputShape[1], ";\n        int cols = ").concat(this.enableShapeUniforms ? 'outShape[2]' : outputShape[2], ";\n\n        ").concat(mainLoop, "\n\n        setOutput(result);\n      }\n    ");
    }
    return ReshapePackedProgram;
}());
function getReshapedInputCoords(shape, enableShapeUniforms) {
    var coordsFromIndexSnippet = enableShapeUniforms ?
        getLogicalCoordinatesFromFlatIndexByUniform(['r', 'c', 'd'], 'inputShape') :
        getLogicalCoordinatesFromFlatIndex(['r', 'c', 'd'], shape);
    return "\n    ivec3 inputCoordsFromReshapedOutCoords(int index) {\n      ".concat(coordsFromIndexSnippet, "\n      return ivec3(r, c, d);\n    }\n  ");
}

var TextureManager = /** @class */ (function () {
    function TextureManager(gpgpu) {
        this.gpgpu = gpgpu;
        this.numUsedTextures = 0;
        this.numFreeTextures = 0;
        this._numBytesAllocated = 0;
        // Number of bytes that have been allocated and available for reuse.
        this._numBytesFree = 0;
        this.freeTextures = {};
        this.usedTextures = {};
        this.logEnabled = false;
    }
    TextureManager.prototype.acquireTexture = function (shapeRC, usage, isPacked) {
        var physicalTexType = getPhysicalFromLogicalTextureType(usage, isPacked);
        var shapeKey = getKeyFromTextureShape(shapeRC, physicalTexType, isPacked);
        if (!(shapeKey in this.freeTextures)) {
            this.freeTextures[shapeKey] = [];
        }
        if (!(shapeKey in this.usedTextures)) {
            this.usedTextures[shapeKey] = [];
        }
        var texBytes = computeBytes(shapeRC, physicalTexType, this.gpgpu.gl, this.gpgpu.textureConfig, isPacked);
        if (this.freeTextures[shapeKey].length > 0) {
            this.numFreeTextures--;
            this.numUsedTextures++;
            this._numBytesFree -= texBytes;
            this.log();
            var newTexture_1 = this.freeTextures[shapeKey].pop();
            this.usedTextures[shapeKey].push(newTexture_1);
            return newTexture_1;
        }
        var newTexture;
        if (physicalTexType === PhysicalTextureType.PACKED_2X2_FLOAT32) {
            newTexture = this.gpgpu.createPackedMatrixTexture(shapeRC[0], shapeRC[1]);
        }
        else if (physicalTexType === PhysicalTextureType.PACKED_2X2_FLOAT16) {
            newTexture =
                this.gpgpu.createFloat16PackedMatrixTexture(shapeRC[0], shapeRC[1]);
        }
        else if (physicalTexType === PhysicalTextureType.UNPACKED_FLOAT32) {
            newTexture =
                this.gpgpu.createFloat32MatrixTexture(shapeRC[0], shapeRC[1]);
        }
        else if (physicalTexType === PhysicalTextureType.UNPACKED_FLOAT16) {
            newTexture =
                this.gpgpu.createFloat16MatrixTexture(shapeRC[0], shapeRC[1]);
        }
        else if (physicalTexType === PhysicalTextureType.PACKED_4X1_UNSIGNED_BYTE) {
            newTexture =
                this.gpgpu.createUnsignedBytesMatrixTexture(shapeRC[0], shapeRC[1]);
        }
        this.usedTextures[shapeKey].push(newTexture);
        this.numUsedTextures++;
        this._numBytesAllocated += texBytes;
        this.log();
        return newTexture;
    };
    TextureManager.prototype.releaseTexture = function (texture, shape, logicalTexType, isPacked) {
        if (this.freeTextures == null) {
            // Already disposed.
            return;
        }
        var physicalTexType = getPhysicalFromLogicalTextureType(logicalTexType, isPacked);
        var shapeKey = getKeyFromTextureShape(shape, physicalTexType, isPacked);
        if (!(shapeKey in this.freeTextures)) {
            this.freeTextures[shapeKey] = [];
        }
        var texBytes = computeBytes(shape, physicalTexType, this.gpgpu.gl, this.gpgpu.textureConfig, isPacked);
        var deleteTexThreshold = tf.env()
            .getNumber('WEBGL_DELETE_TEXTURE_THRESHOLD');
        if (deleteTexThreshold !== -1 &&
            this._numBytesAllocated > deleteTexThreshold) {
            this.gpgpu.deleteMatrixTexture(texture.texture);
            this._numBytesAllocated -= texBytes;
        }
        else {
            this.freeTextures[shapeKey].push(texture);
            this.numFreeTextures++;
            this._numBytesFree += texBytes;
        }
        this.numUsedTextures--;
        var texList = this.usedTextures[shapeKey];
        var texIndex = texList && texList.indexOf(texture);
        if (texIndex == null || texIndex < 0) {
            throw new Error('Cannot release a texture that was never provided by this ' +
                'texture manager');
        }
        texList[texIndex] = texList[texList.length - 1];
        texList.pop();
        this.log();
    };
    TextureManager.prototype.log = function () {
        if (!this.logEnabled) {
            return;
        }
        var total = this.numFreeTextures + this.numUsedTextures;
        console.log('Free/Used', "".concat(this.numFreeTextures, " / ").concat(this.numUsedTextures), "(".concat(total, ")"));
        var freeRatio = this._numBytesFree / this._numBytesAllocated;
        console.log("Bytes allocated: ".concat(this._numBytesAllocated));
        console.log("Bytes unused: ".concat(this._numBytesFree, " (").concat(Math.round(100 * freeRatio), "%)"));
    };
    Object.defineProperty(TextureManager.prototype, "numBytesAllocated", {
        get: function () {
            return this._numBytesAllocated;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TextureManager.prototype, "numBytesFree", {
        get: function () {
            return this._numBytesFree;
        },
        enumerable: false,
        configurable: true
    });
    TextureManager.prototype.getNumUsedTextures = function () {
        return this.numUsedTextures;
    };
    TextureManager.prototype.getNumFreeTextures = function () {
        return this.numFreeTextures;
    };
    TextureManager.prototype.dispose = function () {
        var _this = this;
        if (this.freeTextures == null) {
            // Already disposed.
            return;
        }
        for (var texShape in this.freeTextures) {
            this.freeTextures[texShape].forEach(function (tex) {
                _this.gpgpu.deleteMatrixTexture(tex.texture);
            });
        }
        for (var texShape in this.usedTextures) {
            this.usedTextures[texShape].forEach(function (tex) {
                _this.gpgpu.deleteMatrixTexture(tex.texture);
            });
        }
        // TODO: Assign non-null value (empty object) to textures after disposed.
        this.freeTextures = null;
        this.usedTextures = null;
        this.numUsedTextures = 0;
        this.numFreeTextures = 0;
        this._numBytesAllocated = 0;
        this._numBytesFree = 0;
    };
    return TextureManager;
}());
function numBytesForInternalFormat(gl, internalFormat) {
    // tslint:disable-next-line:no-any
    var glany = gl;
    if (internalFormat === glany.R32F) {
        return 4;
    }
    else if (internalFormat === glany.R16F) {
        return 2;
    }
    else if (internalFormat === glany.RGBA32F) {
        return 16;
    }
    else if (internalFormat === gl.RGBA) {
        return 16;
    }
    else if (internalFormat === glany.RGBA16F) {
        return 8;
    }
    else if (internalFormat === glany.RGBA8) {
        return 4;
    }
    throw new Error("Unknown internal format ".concat(internalFormat));
}
function computeBytes(shape, physicalTexType, gl, textureConfig, isPacked) {
    // It is not possible to infer packed status from the texture type because
    // depending on the textureConfig, different  texture types may resolve to the
    // same internal format (e.g. in WebGL1, the internal format for
    // UNPACKED_FLOAT16 textures is gl.RGBA). Therefore we pass in `isPacked`
    // explicitly.
    var internalFormat = internalFormatForPhysicalTexType(physicalTexType, textureConfig);
    var numElements;
    if (isPacked) {
        var _a = __read(getPackedMatrixTextureShapeWidthHeight(shape[0], shape[1]), 2), packedWidth = _a[0], packedHeight = _a[1];
        numElements = packedWidth * packedHeight;
    }
    else {
        var _b = __read(getUnpackedMatrixTextureShapeWidthHeight(shape[0], shape[1]), 2), width = _b[0], height = _b[1];
        numElements = width * height;
    }
    var bytesPerElement = numBytesForInternalFormat(gl, internalFormat);
    return numElements * bytesPerElement;
}
function internalFormatForPhysicalTexType(physicalTexType, textureConfig) {
    switch (physicalTexType) {
        case PhysicalTextureType.PACKED_2X2_FLOAT32:
            return getInternalFormatForPackedMatrixTexture(textureConfig);
        case PhysicalTextureType.PACKED_2X2_FLOAT16:
            return getInternalFormatForFloat16PackedMatrixTexture(textureConfig);
        case PhysicalTextureType.UNPACKED_FLOAT32:
            return getInternalFormatForFloat32MatrixTexture(textureConfig);
        case PhysicalTextureType.UNPACKED_FLOAT16:
            return getInternalFormatForFloat16MatrixTexture(textureConfig);
        case PhysicalTextureType.PACKED_4X1_UNSIGNED_BYTE:
            return getInternalFormatForUnsignedBytesMatrixTexture(textureConfig);
        default:
            throw new Error("Unknown physical texture type ".concat(physicalTexType));
    }
}
function getPhysicalTextureForRendering(isPacked) {
    if (tf.env().getBool('WEBGL_RENDER_FLOAT32_ENABLED')) {
        if (isPacked) {
            return PhysicalTextureType.PACKED_2X2_FLOAT32;
        }
        return PhysicalTextureType.UNPACKED_FLOAT32;
    }
    if (isPacked) {
        return PhysicalTextureType.PACKED_2X2_FLOAT16;
    }
    return PhysicalTextureType.UNPACKED_FLOAT16;
}
function getPhysicalFromLogicalTextureType(logicalTexType, isPacked) {
    if (logicalTexType === TextureUsage.UPLOAD) {
        return PhysicalTextureType.PACKED_2X2_FLOAT32;
    }
    else if (logicalTexType === TextureUsage.RENDER || logicalTexType == null) {
        return getPhysicalTextureForRendering(isPacked);
    }
    else if (logicalTexType === TextureUsage.DOWNLOAD ||
        logicalTexType === TextureUsage.PIXELS) {
        return PhysicalTextureType.PACKED_4X1_UNSIGNED_BYTE;
    }
    throw new Error("Unknown logical texture type ".concat(logicalTexType));
}
function getKeyFromTextureShape(shapeRowsCol, physicalTexType, isPacked) {
    return "".concat(shapeRowsCol[0], "_").concat(shapeRowsCol[1], "_").concat(physicalTexType, "_").concat(isPacked);
}

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
var UnaryOpProgram = /** @class */ (function () {
    function UnaryOpProgram(aShape, opSnippet) {
        this.variableNames = ['A'];
        this.outputShape = aShape;
        this.enableShapeUniforms = useShapeUniforms(this.outputShape.length);
        this.userCode = "\n      float unaryOperation(float x) {\n        ".concat(opSnippet, "\n      }\n\n      void main() {\n        float x = getAAtOutCoords();\n        float y = unaryOperation(x);\n\n        setOutput(y);\n      }\n    ");
    }
    return UnaryOpProgram;
}());
var CHECK_NAN_SNIPPET$1 = "if (isnan(x)) return x;";
var LINEAR$1 = "return x;";
var ABS$1 = "return abs(x);";
var ELU$2 = "return (x >= 0.0) ? x : (exp(x) - 1.0);";
var RELU$2 = CHECK_NAN_SNIPPET$1 + "\n  return (x < 0.0) ? 0.0 : x;\n";
var RELU6$2 = CHECK_NAN_SNIPPET$1 + "\n  return (x < 0.0) ? 0.0 : min(6.0, x);\n";
var CLONE = 'return x;';
var SIGMOID$2 = "return 1.0 / (1.0 + exp(-1.0 * x));";

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
var LINEAR = "return x;";
var ELU$1 = "\n  vec4 result;\n\n  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);\n  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);\n  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);\n  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);\n\n  return result;\n";
var RELU$1 = "\n  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));\n  bvec4 isNaN = isnan(x);\n\n  result.r = isNaN.r ? x.r : result.r;\n  result.g = isNaN.g ? x.g : result.g;\n  result.b = isNaN.b ? x.b : result.b;\n  result.a = isNaN.a ? x.a : result.a;\n\n  return result;\n";
var RELU6$1 = "\n  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));\n  bvec4 isNaN = isnan(x);\n\n  result.r = isNaN.r ? x.r : result.r;\n  result.g = isNaN.g ? x.g : result.g;\n  result.b = isNaN.b ? x.b : result.b;\n  result.a = isNaN.a ? x.a : result.a;\n\n  return result;\n";
var SIGMOID$1 = "return 1.0 / (1.0 + exp(-1.0 * x));";
var UnaryOpPackedProgram = /** @class */ (function () {
    function UnaryOpPackedProgram(aShape, opSnippet) {
        this.variableNames = ['A'];
        this.packedInputs = true;
        this.packedOutput = true;
        this.outputShape = aShape;
        this.enableShapeUniforms = useShapeUniforms(this.outputShape.length);
        this.userCode = "\n      vec4 unaryOperation(vec4 x) {\n        ".concat(opSnippet, "\n      }\n\n      void main() {\n        vec4 x = getAAtOutCoords();\n        vec4 y = unaryOperation(x);\n\n        setOutput(y);\n      }\n    ");
    }
    return UnaryOpPackedProgram;
}());

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
var UnpackProgram = /** @class */ (function () {
    function UnpackProgram(outputShape) {
        this.variableNames = ['A'];
        this.packedInputs = true;
        this.packedOutput = false;
        this.outputShape = outputShape;
        this.enableShapeUniforms = useShapeUniforms(this.outputShape.length);
        var rank = outputShape.length;
        var channels = getChannels('rc', rank);
        var dtype = getCoordsDataType(rank);
        var sourceCoords = getSourceCoords$2(rank, channels);
        var innerDims = channels.slice(-2);
        var coords = rank <= 1 ? 'rc' : "vec2(".concat(innerDims.join(','), ")");
        this.userCode = "\n      void main() {\n        ".concat(dtype, " rc = getOutputCoords();\n        vec4 packedInput = getA(").concat(sourceCoords, ");\n\n        setOutput(getChannel(packedInput, ").concat(coords, "));\n      }\n    ");
    }
    return UnpackProgram;
}());

var whereImpl = tf.kernel_impls.whereImpl;
var EPSILON_FLOAT32 = 1e-7;
var EPSILON_FLOAT16 = 1e-4;
var binaryCaches = {};
function getBinaryCache(webGLVersion) {
    if (webGLVersion in binaryCaches) {
        return binaryCaches[webGLVersion];
    }
    binaryCaches[webGLVersion] = {};
    return binaryCaches[webGLVersion];
}
// Empirically determined constant used to determine size threshold for handing
// off execution to the CPU.
var CPU_HANDOFF_SIZE_THRESHOLD = tf.env().getNumber('CPU_HANDOFF_SIZE_THRESHOLD');
// Empirically determined constant used to decide the number of MB on GPU
// before we warn about high memory use. The MB are this constant * screen area
// * dpi / 1024 / 1024.
var BEFORE_PAGING_CONSTANT = 600;
function numMBBeforeWarning() {
    if (tf.env().global.screen == null) {
        return 1024; // 1 GB.
    }
    return (tf.env().global.screen.height * tf.env().global.screen.width *
        window.devicePixelRatio) *
        BEFORE_PAGING_CONSTANT / 1024 / 1024;
}
var MathBackendWebGL = /** @class */ (function (_super) {
    __extends(MathBackendWebGL, _super);
    function MathBackendWebGL(gpuResource) {
        var _this = _super.call(this) || this;
        // Maps data ids that have a pending read operation, to list of subscribers.
        _this.pendingRead = new WeakMap();
        // List of data ids that are scheduled for disposal, but are waiting on a
        // pending read operation.
        _this.pendingDisposal = new WeakSet();
        // Used to count the number of 'shallow' sliced tensors that point to the
        // same data id.
        _this.dataRefCount = new WeakMap();
        _this.numBytesInGPU = 0;
        // Accumulated time spent (including blocking) in uploading data to webgl.
        _this.uploadWaitMs = 0;
        // Accumulated time spent (including blocking in downloading data from webgl.
        _this.downloadWaitMs = 0;
        // record the last manual GL Flush time.
        _this.lastGlFlushTime = 0;
        _this.warnedAboutMemory = false;
        _this.pendingDeletes = 0;
        _this.disposed = false;
        if (!tf.env().getBool('HAS_WEBGL')) {
            throw new Error('WebGL is not supported on this device');
        }
        var newGPGPU;
        if (gpuResource != null) {
            if (gpuResource instanceof GPGPUContext) {
                newGPGPU = gpuResource;
            }
            else {
                var gl = getWebGLContext(tf.env().getNumber('WEBGL_VERSION'), gpuResource);
                newGPGPU = new GPGPUContext(gl);
            }
            _this.binaryCache = {};
            _this.gpgpuCreatedLocally = false;
        }
        else {
            var gl = getWebGLContext(tf.env().getNumber('WEBGL_VERSION'));
            newGPGPU = new GPGPUContext(gl);
            _this.binaryCache = getBinaryCache(tf.env().getNumber('WEBGL_VERSION'));
            _this.gpgpuCreatedLocally = true;
        }
        _this.gpgpu = newGPGPU;
        _this.canvas = _this.gpgpu.gl.canvas;
        _this.textureManager = new TextureManager(_this.gpgpu);
        _this.numMBBeforeWarning = numMBBeforeWarning();
        _this.texData = new tf.DataStorage(_this, tf.engine());
        return _this;
    }
    MathBackendWebGL.prototype.nextDataId = function () {
        return MathBackendWebGL.nextDataId++;
    };
    MathBackendWebGL.prototype.numDataIds = function () {
        return this.texData.numDataIds() - this.pendingDeletes;
    };
    // Writes a new entry to the data store with a WebGL texture, and registers it
    // to the texture manager.
    MathBackendWebGL.prototype.writeTexture = function (texture, shape, dtype, texHeight, texWidth, channels) {
        // Temporarily create an tensor info to make the texture compatible with
        // the runWebGLProgram's input.
        var input = this.makeTensorInfo(shape, dtype);
        var inData = this.texData.get(input.dataId);
        // Even though the input texture could be unpacked or dense packed, it is
        // always considered as unpacked for EncodeMatrixProgram.
        inData.isPacked = false;
        // Bind texture to the input tensor.
        inData.texture = { texture: texture, texShape: [texHeight, texWidth] };
        inData.texShape = [texHeight, texWidth];
        var shapeAs3D = getShapeAs3D(shape);
        var program = new EncodeMatrixProgram(shapeAs3D, false /* isByteArray */, channels);
        var output = this.runWebGLProgram(program, [input], dtype, [[texHeight, texWidth]]);
        output.shape = shape;
        // Unbind the texture from the input tensor to avoid the texture being
        // released.
        inData.texture = null;
        this.disposeIntermediateTensorInfo(input);
        return output.dataId;
    };
    MathBackendWebGL.prototype.write = function (values, shape, dtype) {
        if (tf.env().getBool('WEBGL_CHECK_NUMERICAL_PROBLEMS') ||
            tf.env().getBool('DEBUG')) {
            this.checkNumericalProblems(values);
        }
        if (dtype === 'complex64' && values != null) {
            throw new Error("Cannot write to a complex64 dtype. " +
                "Please use tf.complex(real, imag).");
        }
        var dataId = { id: this.nextDataId() };
        this.texData.set(dataId, { shape: shape, dtype: dtype, values: values, usage: TextureUsage.UPLOAD, refCount: 1 });
        return dataId;
    };
    /** Return refCount of a `TensorData`. */
    MathBackendWebGL.prototype.refCount = function (dataId) {
        if (this.texData.has(dataId)) {
            var tensorData = this.texData.get(dataId);
            return tensorData.refCount;
        }
        return 0;
    };
    /** Increase refCount of a `TextureData`. */
    MathBackendWebGL.prototype.incRef = function (dataId) {
        var texData = this.texData.get(dataId);
        texData.refCount++;
    };
    /** Decrease refCount of a `TextureData`. */
    MathBackendWebGL.prototype.decRef = function (dataId) {
        if (this.texData.has(dataId)) {
            var texData = this.texData.get(dataId);
            texData.refCount--;
        }
    };
    MathBackendWebGL.prototype.move = function (dataId, values, shape, dtype, refCount) {
        if (tf.env().getBool('DEBUG')) {
            this.checkNumericalProblems(values);
        }
        if (dtype === 'complex64') {
            throw new Error("Cannot write to a complex64 dtype. " +
                "Please use tf.complex(real, imag).");
        }
        this.texData.set(dataId, { shape: shape, dtype: dtype, values: values, usage: TextureUsage.UPLOAD, refCount: refCount });
    };
    MathBackendWebGL.prototype.disposeIntermediateTensorInfo = function (tensorInfo) {
        this.disposeData(tensorInfo.dataId);
    };
    MathBackendWebGL.prototype.readSync = function (dataId) {
        var texData = this.texData.get(dataId);
        var values = texData.values, dtype = texData.dtype, complexTensorInfos = texData.complexTensorInfos, slice = texData.slice, shape = texData.shape, isPacked = texData.isPacked;
        // The presence of `slice` indicates this tensor is a shallow slice of a
        // different tensor, and is using that original tensor's texture. Run
        // `clone` in order to copy that texture and read from it.
        if (slice != null) {
            var program = void 0;
            if (isPacked) {
                program = new UnaryOpPackedProgram(shape, CLONE);
            }
            else {
                program = new UnaryOpProgram(shape, CLONE);
            }
            var res = this.runWebGLProgram(program, [{ dataId: dataId, shape: shape, dtype: dtype }], dtype);
            var data = this.readSync(res.dataId);
            this.disposeIntermediateTensorInfo(res);
            return data;
        }
        if (values != null) {
            return this.convertAndCacheOnCPU(dataId);
        }
        if (dtype === 'string') {
            return values;
        }
        var shouldTimeProgram = this.activeTimers != null;
        var start;
        if (shouldTimeProgram) {
            start = tf.util.now();
        }
        var result;
        if (dtype === 'complex64') {
            var realValues = this.readSync(complexTensorInfos.real.dataId);
            var imagValues = this.readSync(complexTensorInfos.imag.dataId);
            result = tf.backend_util.mergeRealAndImagArrays(realValues, imagValues);
        }
        else {
            result = this.getValuesFromTexture(dataId);
        }
        if (shouldTimeProgram) {
            this.downloadWaitMs += tf.util.now() - start;
        }
        return this.convertAndCacheOnCPU(dataId, result);
    };
    MathBackendWebGL.prototype.read = function (dataId) {
        return __awaiter(this, void 0, void 0, function () {
            var subscribers_1, texData, values, shape, slice, dtype, complexTensorInfos, isPacked, program, res, data, buffer, tmpDownloadTarget, tmpData, vals, ps, realValues, imagValues, size, gl_1, dTypeVals, subscribers;
            var _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (this.pendingRead.has(dataId)) {
                            subscribers_1 = this.pendingRead.get(dataId);
                            return [2 /*return*/, new Promise(function (resolve) { return subscribers_1.push(resolve); })];
                        }
                        texData = this.texData.get(dataId);
                        values = texData.values, shape = texData.shape, slice = texData.slice, dtype = texData.dtype, complexTensorInfos = texData.complexTensorInfos, isPacked = texData.isPacked;
                        // The presence of `slice` indicates this tensor is a shallow slice of a
                        // different tensor, and is using that original tensor's texture. Run
                        // `clone` in order to copy that texture and read from it.
                        if (slice != null) {
                            program = void 0;
                            if (isPacked) {
                                program = new UnaryOpPackedProgram(shape, CLONE);
                            }
                            else {
                                program = new UnaryOpProgram(shape, CLONE);
                            }
                            res = this.runWebGLProgram(program, [{ dataId: dataId, shape: shape, dtype: dtype }], dtype);
                            data = this.read(res.dataId);
                            this.disposeIntermediateTensorInfo(res);
                            return [2 /*return*/, data];
                        }
                        if (values != null) {
                            return [2 /*return*/, this.convertAndCacheOnCPU(dataId)];
                        }
                        if (tf.env().getBool('DEBUG')) {
                            // getBool('WEBGL_DOWNLOAD_FLOAT_ENABLED') caused a blocking GPU call.
                            // For performance reason, only check it for debugging. In production,
                            // it doesn't handle this use case anyway, so behavior is not changed.
                            if (!tf.env().getBool('WEBGL_DOWNLOAD_FLOAT_ENABLED') &&
                                tf.env().getNumber('WEBGL_VERSION') === 2) {
                                throw new Error("tensor.data() with WEBGL_DOWNLOAD_FLOAT_ENABLED=false and " +
                                    "WEBGL_VERSION=2 not yet supported.");
                            }
                        }
                        buffer = null;
                        if (dtype !== 'complex64' && tf.env().get('WEBGL_BUFFER_SUPPORTED')) {
                            // Possibly copy the texture into a buffer before inserting a fence.
                            tmpDownloadTarget = this.decode(dataId);
                            tmpData = this.texData.get(tmpDownloadTarget.dataId);
                            buffer = (_b = this.gpgpu).createBufferFromTexture.apply(_b, __spreadArray([tmpData.texture.texture], __read(getDenseTexShape(shape)), false));
                        }
                        this.pendingRead.set(dataId, []);
                        if (!(dtype !== 'complex64')) return [3 /*break*/, 2];
                        // Create a fence and wait for it to resolve.
                        return [4 /*yield*/, this.gpgpu.createAndWaitForFence()];
                    case 1:
                        // Create a fence and wait for it to resolve.
                        _c.sent();
                        _c.label = 2;
                    case 2:
                        if (!(dtype === 'complex64')) return [3 /*break*/, 4];
                        return [4 /*yield*/, Promise.all([
                                this.read(complexTensorInfos.real.dataId),
                                this.read(complexTensorInfos.imag.dataId)
                            ])];
                    case 3:
                        ps = _c.sent();
                        realValues = ps[0];
                        imagValues = ps[1];
                        vals = tf.backend_util.mergeRealAndImagArrays(realValues, imagValues);
                        return [3 /*break*/, 5];
                    case 4:
                        if (buffer == null) {
                            vals = this.getValuesFromTexture(dataId);
                        }
                        else {
                            size = tf.util.sizeFromShape(shape);
                            vals = this.gpgpu.downloadFloat32MatrixFromBuffer(buffer, size);
                        }
                        _c.label = 5;
                    case 5:
                        if (tmpDownloadTarget != null) {
                            this.disposeIntermediateTensorInfo(tmpDownloadTarget);
                        }
                        if (buffer != null) {
                            gl_1 = this.gpgpu.gl;
                            callAndCheck(gl_1, function () { return gl_1.deleteBuffer(buffer); });
                        }
                        dTypeVals = this.convertAndCacheOnCPU(dataId, vals);
                        subscribers = this.pendingRead.get(dataId);
                        this.pendingRead.delete(dataId);
                        // Notify all pending reads.
                        subscribers.forEach(function (resolve) { return resolve(dTypeVals); });
                        if (this.pendingDisposal.has(dataId)) {
                            this.pendingDisposal.delete(dataId);
                            if (this.disposeData(dataId)) {
                                tf.engine().removeDataId(dataId, this);
                            }
                            this.pendingDeletes--;
                        }
                        return [2 /*return*/, dTypeVals];
                }
            });
        });
    };
    /**
     * Read tensor to a new texture that is densely packed for ease of use.
     * @param dataId The source tensor.
     * @param options
     *     customTexShape: Optional. If set, will use the user defined texture
     *     shape to create the texture.
     */
    MathBackendWebGL.prototype.readToGPU = function (dataId, options) {
        if (options === void 0) { options = {}; }
        var texData = this.texData.get(dataId);
        var values = texData.values, shape = texData.shape, slice = texData.slice, dtype = texData.dtype, isPacked = texData.isPacked, texture = texData.texture;
        if (dtype === 'complex64') {
            throw new Error('Does not support reading texture for complex64 dtype.');
        }
        // The presence of `slice` indicates this tensor is a shallow slice of a
        // different tensor, and is using that original tensor's texture. Run
        // `clone` in order to copy that texture and read from it.
        if (slice != null) {
            var program = void 0;
            if (isPacked) {
                program = new UnaryOpPackedProgram(shape, CLONE);
            }
            else {
                program = new UnaryOpProgram(shape, CLONE);
            }
            var res = this.runWebGLProgram(program, [{ dataId: dataId, shape: shape, dtype: dtype }], dtype);
            var gpuResouorce = this.readToGPU(res, options);
            this.disposeIntermediateTensorInfo(res);
            return gpuResouorce;
        }
        if (texture == null) {
            if (values != null) {
                throw new Error('Data is not on GPU but on CPU.');
            }
            else {
                throw new Error('There is no data on GPU or CPU.');
            }
        }
        // Decode the texture so that it is stored densely (using four channels).
        var tmpTarget = this.decode(dataId, options.customTexShape);
        // Make engine track this tensor, so that we can dispose it later.
        var tensorRef = tf.engine().makeTensorFromTensorInfo(tmpTarget);
        var tmpData = this.texData.get(tmpTarget.dataId);
        return Object.assign({ tensorRef: tensorRef }, tmpData.texture);
    };
    MathBackendWebGL.prototype.bufferSync = function (t) {
        var data = this.readSync(t.dataId);
        if (t.dtype === 'string') {
            try {
                // Decode the bytes into string.
                var strings = data.map(function (d) { return tf.util.decodeString(d); });
                return tf.buffer(t.shape, t.dtype, strings);
            }
            catch (_a) {
                throw new Error('Failed to decode encoded string bytes into utf-8');
            }
        }
        return tf.buffer(t.shape, t.dtype, data);
    };
    MathBackendWebGL.prototype.checkNumericalProblems = function (values) {
        if (values == null) {
            return;
        }
        for (var i = 0; i < values.length; i++) {
            var num = values[i];
            if (!canBeRepresented(num)) {
                if (tf.env().getBool('WEBGL_RENDER_FLOAT32_CAPABLE')) {
                    throw Error("The value ".concat(num, " cannot be represented with your ") +
                        "current settings. Consider enabling float32 rendering: " +
                        "'tf.env().set('WEBGL_RENDER_FLOAT32_ENABLED', true);'");
                }
                throw Error("The value ".concat(num, " cannot be represented on this device."));
            }
        }
    };
    MathBackendWebGL.prototype.getValuesFromTexture = function (dataId) {
        var _b;
        var _c = this.texData.get(dataId), shape = _c.shape, dtype = _c.dtype, isPacked = _c.isPacked;
        var size = tf.util.sizeFromShape(shape);
        if (tf.env().getBool('WEBGL_DOWNLOAD_FLOAT_ENABLED')) {
            var tmpTarget = this.decode(dataId);
            var tmpData_1 = this.texData.get(tmpTarget.dataId);
            var vals_1 = (_b = this.gpgpu)
                .downloadMatrixFromPackedTexture.apply(_b, __spreadArray([tmpData_1.texture.texture], __read(getDenseTexShape(shape)), false)).subarray(0, size);
            this.disposeIntermediateTensorInfo(tmpTarget);
            return vals_1;
        }
        var shouldUsePackedProgram = tf.env().getBool('WEBGL_PACK') && isPacked === true;
        var outputShape = shouldUsePackedProgram ? getShapeAs3D(shape) : shape;
        var program = shouldUsePackedProgram ?
            new EncodeFloatPackedProgram(outputShape) :
            new EncodeFloatProgram(outputShape);
        var output = this.runWebGLProgram(program, [{ shape: outputShape, dtype: dtype, dataId: dataId }], 'float32');
        var tmpData = this.texData.get(output.dataId);
        var vals = this.gpgpu
            .downloadByteEncodedFloatMatrixFromOutputTexture(tmpData.texture.texture, tmpData.texShape[0], tmpData.texShape[1])
            .subarray(0, size);
        this.disposeIntermediateTensorInfo(output);
        return vals;
    };
    MathBackendWebGL.prototype.timerAvailable = function () {
        return tf.env().getNumber('WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE') > 0;
    };
    MathBackendWebGL.prototype.time = function (f) {
        var _this = this;
        var oldActiveTimers = this.activeTimers;
        var newActiveTimers = [];
        var outerMostTime = false;
        if (this.programTimersStack == null) {
            this.programTimersStack = newActiveTimers;
            outerMostTime = true;
        }
        else {
            this.activeTimers.push(newActiveTimers);
        }
        this.activeTimers = newActiveTimers;
        f();
        // needing to split these up because util.flatten only accepts certain types
        var flattenedActiveTimerQueries = tf.util.flatten(this.activeTimers.map(function (d) { return d.query; }))
            .filter(function (d) { return d != null; });
        var flattenedActiveTimerNames = tf.util.flatten(this.activeTimers.map(function (d) { return d.name; }))
            .filter(function (d) { return d != null; });
        this.activeTimers = oldActiveTimers;
        if (outerMostTime) {
            this.programTimersStack = null;
        }
        var res = {
            uploadWaitMs: this.uploadWaitMs,
            downloadWaitMs: this.downloadWaitMs,
            kernelMs: null,
            wallMs: null // will be filled by the engine
        };
        return (function () { return __awaiter(_this, void 0, void 0, function () {
            var kernelMs_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(tf.env().getNumber('WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE') >
                            0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, Promise.all(flattenedActiveTimerQueries)];
                    case 1:
                        kernelMs_1 = _b.sent();
                        res['kernelMs'] = tf.util.sum(kernelMs_1);
                        res['getExtraProfileInfo'] = function () { return kernelMs_1
                            .map(function (d, i) { return ({ name: flattenedActiveTimerNames[i], ms: d }); })
                            .map(function (d) { return "".concat(d.name, ": ").concat(d.ms); })
                            .join(', '); };
                        return [3 /*break*/, 3];
                    case 2:
                        res['kernelMs'] = {
                            error: 'WebGL query timers are not supported in this environment.'
                        };
                        _b.label = 3;
                    case 3:
                        this.uploadWaitMs = 0;
                        this.downloadWaitMs = 0;
                        return [2 /*return*/, res];
                }
            });
        }); })();
    };
    MathBackendWebGL.prototype.memory = function () {
        return {
            unreliable: false,
            numBytesInGPU: this.numBytesInGPU,
            numBytesInGPUAllocated: this.textureManager.numBytesAllocated,
            numBytesInGPUFree: this.textureManager.numBytesFree
        };
    };
    MathBackendWebGL.prototype.startTimer = function () {
        if (tf.env().getNumber('WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE') > 0) {
            return this.gpgpu.beginQuery();
        }
        return { startMs: tf.util.now(), endMs: null };
    };
    MathBackendWebGL.prototype.endTimer = function (query) {
        if (tf.env().getNumber('WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE') > 0) {
            this.gpgpu.endQuery();
            return query;
        }
        query.endMs = tf.util.now();
        return query;
    };
    MathBackendWebGL.prototype.getQueryTime = function (query) {
        return __awaiter(this, void 0, void 0, function () {
            var timerQuery;
            return __generator(this, function (_b) {
                if (tf.env().getNumber('WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE') > 0) {
                    return [2 /*return*/, this.gpgpu.waitForQueryAndGetTime(query)];
                }
                timerQuery = query;
                return [2 /*return*/, timerQuery.endMs - timerQuery.startMs];
            });
        });
    };
    /**
     * Decrease the RefCount on the dataId and dispose the memory if the dataId
     * has 0 refCount. If there are pending read on the data, the disposal would
     * added to the pending delete queue. Return true if the dataId is removed
     * from backend or the backend does not contain the dataId, false if the
     * dataId is not removed. Memory may or may not be released even when dataId
     * is removed, which also depends on dataRefCount, see `releaseGPU`.
     * @param dataId
     * @oaram force Optional, remove the data regardless of refCount
     */
    MathBackendWebGL.prototype.disposeData = function (dataId, force) {
        if (force === void 0) { force = false; }
        if (this.pendingDisposal.has(dataId)) {
            return false;
        }
        // No-op if already disposed.
        if (!this.texData.has(dataId)) {
            return true;
        }
        // if force flag is set, change refCount to 0, this would ensure disposal
        // when added to the pendingDisposal queue. Memory may or may not be
        // released, which also depends on dataRefCount, see `releaseGPU`.
        if (force) {
            this.texData.get(dataId).refCount = 0;
        }
        else {
            this.texData.get(dataId).refCount--;
        }
        if (!force && this.texData.get(dataId).refCount > 0) {
            return false;
        }
        if (this.pendingRead.has(dataId)) {
            this.pendingDisposal.add(dataId);
            this.pendingDeletes++;
            return false;
        }
        this.releaseGPUData(dataId);
        var complexTensorInfos = this.texData.get(dataId).complexTensorInfos;
        if (complexTensorInfos != null) {
            this.disposeData(complexTensorInfos.real.dataId, force);
            this.disposeData(complexTensorInfos.imag.dataId, force);
        }
        this.texData.delete(dataId);
        return true;
    };
    MathBackendWebGL.prototype.releaseGPUData = function (dataId) {
        var _b = this.texData.get(dataId), texture = _b.texture, dtype = _b.dtype, texShape = _b.texShape, usage = _b.usage, isPacked = _b.isPacked, slice = _b.slice;
        var key = slice && slice.origDataId || dataId;
        var refCount = this.dataRefCount.get(key);
        if (refCount > 1) {
            this.dataRefCount.set(key, refCount - 1);
        }
        else {
            this.dataRefCount.delete(key);
            if (texture != null) {
                this.numBytesInGPU -= this.computeBytes(texShape, dtype);
                this.textureManager.releaseTexture(texture, texShape, usage, isPacked);
            }
        }
        var texData = this.texData.get(dataId);
        texData.texture = null;
        texData.texShape = null;
        texData.isPacked = false;
        texData.slice = null;
    };
    MathBackendWebGL.prototype.getTexture = function (dataId) {
        this.uploadToGPU(dataId);
        return this.texData.get(dataId).texture.texture;
    };
    /**
     * Returns internal information for the specific data bucket. Used in unit
     * tests.
     */
    MathBackendWebGL.prototype.getDataInfo = function (dataId) {
        return this.texData.get(dataId);
    };
    /*
    Tests whether all the inputs to an op are small and on the CPU. This heuristic
    determines when it would be faster to execute a kernel on the CPU. WebGL
    kernels opt into running this check and forwarding when appropriate.
    TODO(https://github.com/tensorflow/tfjs/issues/872): Develop a more
    sustainable strategy for optimizing backend execution of ops.
     */
    MathBackendWebGL.prototype.shouldExecuteOnCPU = function (inputs, sizeThreshold) {
        var _this = this;
        if (sizeThreshold === void 0) { sizeThreshold = CPU_HANDOFF_SIZE_THRESHOLD; }
        return tf.env().getBool('WEBGL_CPU_FORWARD') &&
            inputs.every(function (input) { return _this.texData.get(input.dataId).texture == null &&
                tf.util.sizeFromShape(input.shape) < sizeThreshold; });
    };
    MathBackendWebGL.prototype.getGPGPUContext = function () {
        return this.gpgpu;
    };
    MathBackendWebGL.prototype.where = function (condition) {
        tf.backend_util.warn('tf.where() in webgl locks the UI thread. ' +
            'Call tf.whereAsync() instead');
        var condVals = condition.dataSync();
        return whereImpl(condition.shape, condVals);
    };
    MathBackendWebGL.prototype.packedUnaryOp = function (x, op, dtype) {
        var program = new UnaryOpPackedProgram(x.shape, op);
        var outInfo = this.compileAndRun(program, [x], dtype);
        return tf.engine().makeTensorFromTensorInfo(outInfo);
    };
    // TODO(msoulanille) remove this once the backend has been modularized
    // a copy is needed here to break a circular dependency.
    // Also remove the op from unary_op.
    MathBackendWebGL.prototype.abs = function (x) {
        // TODO: handle cases when x is complex.
        if (this.shouldExecuteOnCPU([x]) && x.dtype !== 'complex64') {
            var outValues = simpleAbsImplCPU(this.texData.get(x.dataId).values);
            return this.makeOutput(x.shape, x.dtype, outValues);
        }
        if (tf.env().getBool('WEBGL_PACK_UNARY_OPERATIONS')) {
            return this.packedUnaryOp(x, ABS$1, x.dtype);
        }
        var program = new UnaryOpProgram(x.shape, ABS$1);
        var outInfo = this.compileAndRun(program, [x]);
        return tf.engine().makeTensorFromTensorInfo(outInfo);
    };
    MathBackendWebGL.prototype.makeTensorInfo = function (shape, dtype, values) {
        var dataId;
        if (dtype === 'string' && values != null && values.length > 0 &&
            tf.util.isString(values[0])) {
            var encodedValues = values.map(function (d) { return tf.util.encodeString(d); });
            dataId = this.write(encodedValues, shape, dtype);
        }
        else {
            dataId = this.write(values, shape, dtype);
        }
        this.texData.get(dataId).usage = null;
        return { dataId: dataId, shape: shape, dtype: dtype };
    };
    MathBackendWebGL.prototype.makeOutput = function (shape, dtype, values) {
        return tf.engine().makeTensorFromTensorInfo(this.makeTensorInfo(shape, dtype, values), this);
    };
    MathBackendWebGL.prototype.unpackTensor = function (input) {
        var program = new UnpackProgram(input.shape);
        return this.runWebGLProgram(program, [input], input.dtype);
    };
    MathBackendWebGL.prototype.packTensor = function (input) {
        var program = new PackProgram(input.shape);
        var preventEagerUnpackingOutput = true;
        return this.runWebGLProgram(program, [input], input.dtype, null /* customUniformValues */, preventEagerUnpackingOutput);
    };
    MathBackendWebGL.prototype.packedReshape = function (input, afterShape) {
        var input3DShape = __spreadArray([
            getBatchDim(input.shape)
        ], __read(getRowsCols(input.shape)), false);
        var input3D = {
            dtype: input.dtype,
            shape: input3DShape,
            dataId: input.dataId
        };
        var afterShapeAs3D = __spreadArray([
            getBatchDim(afterShape)
        ], __read(getRowsCols(afterShape)), false);
        var program = new ReshapePackedProgram(afterShapeAs3D, input3DShape);
        var preventEagerUnpackingOfOutput = true;
        var customValues = [input3DShape];
        var output = this.runWebGLProgram(program, [input3D], input.dtype, customValues, preventEagerUnpackingOfOutput);
        return { dataId: output.dataId, shape: afterShape, dtype: output.dtype };
    };
    MathBackendWebGL.prototype.decode = function (dataId, customTexShape) {
        var texData = this.texData.get(dataId);
        var isPacked = texData.isPacked, shape = texData.shape, dtype = texData.dtype;
        if (customTexShape != null) {
            var size = tf.util.sizeFromShape(shape);
            var texSize = customTexShape[0] * customTexShape[1] * 4;
            tf.util.assert(size <= texSize, function () { return 'customTexShape is too small. ' +
                'Row * Column * 4 should be equal or larger than the ' +
                'size of the tensor data.'; });
        }
        var shapeAs3D = getShapeAs3D(shape);
        var program;
        if (isPacked) {
            program = new DecodeMatrixPackedProgram(shapeAs3D);
        }
        else {
            program = new DecodeMatrixProgram(shapeAs3D);
        }
        var preventEagerUnpackingOfOutput = true;
        var customValues = [customTexShape != null ? customTexShape :
                getDenseTexShape(shapeAs3D)];
        var out = this.runWebGLProgram(program, [{ shape: shapeAs3D, dtype: dtype, dataId: dataId }], dtype, customValues, preventEagerUnpackingOfOutput, customTexShape);
        return { dtype: dtype, shape: shape, dataId: out.dataId };
    };
    MathBackendWebGL.prototype.runWebGLProgram = function (program, inputs, outputDtype, customUniformValues, preventEagerUnpackingOfOutput, customTexShape) {
        var _this = this;
        if (preventEagerUnpackingOfOutput === void 0) { preventEagerUnpackingOfOutput = false; }
        var output = this.makeTensorInfo(program.outputShape, outputDtype);
        var outData = this.texData.get(output.dataId);
        if (program.packedOutput) {
            outData.isPacked = true;
        }
        if (program.outPackingScheme === PackingScheme.DENSE) {
            var texelShape = customTexShape != null ?
                customTexShape :
                getDenseTexShape(program.outputShape);
            // For a densely packed output, we explicitly set texShape
            // so it doesn't get assigned later according to our typical packing
            // scheme wherein a single texel can only contain values from adjacent
            // rows/cols.
            outData.texShape = texelShape.map(function (d) { return d * 2; });
        }
        if (program.outTexUsage != null) {
            outData.usage = program.outTexUsage;
        }
        if (tf.util.sizeFromShape(output.shape) === 0) {
            // Short-circuit the computation since the result is empty (has 0 in its
            // shape).
            outData.values =
                tf.util.getTypedArrayFromDType(output.dtype, 0);
            return output;
        }
        var dataToDispose = [];
        var inputsData = inputs.map(function (input) {
            if (input.dtype === 'complex64') {
                throw new Error("GPGPUProgram does not support complex64 input. For complex64 " +
                    "dtypes, please separate the program into real and imaginary " +
                    "parts.");
            }
            var texData = _this.texData.get(input.dataId);
            if (texData.texture == null) {
                if (!program.packedInputs &&
                    tf.util.sizeFromShape(input.shape) <=
                        tf.env().getNumber('WEBGL_SIZE_UPLOAD_UNIFORM')) {
                    // Upload small tensors that live on the CPU as uniforms, not as
                    // textures. Do this only when the environment supports 32bit floats
                    // due to problems when comparing 16bit floats with 32bit floats.
                    // TODO(https://github.com/tensorflow/tfjs/issues/821): Make it
                    // possible for packed shaders to sample from uniforms.
                    return {
                        shape: input.shape,
                        texData: null,
                        isUniform: true,
                        uniformValues: texData.values
                    };
                }
                // This ensures that if a packed program's inputs have not yet been
                // uploaded to the GPU, they get uploaded as packed right off the bat.
                if (program.packedInputs) {
                    texData.isPacked = true;
                    texData.shape = input.shape;
                }
            }
            _this.uploadToGPU(input.dataId);
            if (!!texData.isPacked !== !!program.packedInputs) {
                input = texData.isPacked ? _this.unpackTensor(input) :
                    _this.packTensor(input);
                dataToDispose.push(input);
                texData = _this.texData.get(input.dataId);
            }
            else if (texData.isPacked &&
                !isReshapeFree(texData.shape, input.shape)) {
                // This is a special case where a texture exists for a tensor
                // but the shapes are incompatible (due to packing constraints) because
                // the tensor did not have a chance to go through the packed reshape
                // shader. This only happens when we reshape the *same* tensor to form
                // *distinct* inputs to an op, e.g. dotting a vector with itself. This
                // case will disappear once packed uploading is the default.
                var savedInput = input;
                var targetShape = input.shape;
                input.shape = texData.shape;
                input = _this.packedReshape(input, targetShape);
                dataToDispose.push(input);
                texData = _this.texData.get(input.dataId);
                savedInput.shape = targetShape;
            }
            return { shape: input.shape, texData: texData, isUniform: false };
        });
        this.uploadToGPU(output.dataId);
        var outputData = { shape: output.shape, texData: outData, isUniform: false };
        var key = makeShaderKey(program, inputsData, outputData);
        var binary = this.getAndSaveBinary(key, function () {
            return compileProgram(_this.gpgpu, program, inputsData, outputData);
        });
        var shouldTimeProgram = this.activeTimers != null;
        var query;
        if (shouldTimeProgram) {
            query = this.startTimer();
        }
        if (!tf.env().get('ENGINE_COMPILE_ONLY')) {
            runProgram(this.gpgpu, binary, inputsData, outputData, customUniformValues);
        }
        dataToDispose.forEach(function (info) { return _this.disposeIntermediateTensorInfo(info); });
        if (shouldTimeProgram) {
            query = this.endTimer(query);
            this.activeTimers.push({ name: program.constructor.name, query: this.getQueryTime(query) });
        }
        var glFlushThreshold = tf.env().getNumber('WEBGL_FLUSH_THRESHOLD');
        // Manually GL flush requested
        if (glFlushThreshold > 0) {
            var time = tf.util.now();
            if ((time - this.lastGlFlushTime) > glFlushThreshold) {
                this.gpgpu.gl.flush();
                this.lastGlFlushTime = time;
            }
        }
        if (!tf.env().getBool('WEBGL_LAZILY_UNPACK') && outData.isPacked &&
            preventEagerUnpackingOfOutput === false) {
            var unpacked = this.unpackTensor(output);
            this.disposeIntermediateTensorInfo(output);
            return unpacked;
        }
        return output;
    };
    MathBackendWebGL.prototype.compileAndRun = function (program, inputs, outputDtype, customUniformValues, preventEagerUnpackingOfOutput) {
        if (preventEagerUnpackingOfOutput === void 0) { preventEagerUnpackingOfOutput = false; }
        outputDtype = outputDtype || inputs[0].dtype;
        var outInfo = this.runWebGLProgram(program, inputs, outputDtype, customUniformValues, preventEagerUnpackingOfOutput);
        return outInfo;
    };
    MathBackendWebGL.prototype.getAndSaveBinary = function (key, getBinary) {
        if (!(key in this.binaryCache)) {
            this.binaryCache[key] = getBinary();
        }
        return this.binaryCache[key];
    };
    MathBackendWebGL.prototype.getTextureManager = function () {
        return this.textureManager;
    };
    MathBackendWebGL.prototype.dispose = function () {
        var _this = this;
        if (this.disposed) {
            return;
        }
        // Avoid disposing the compiled webgl programs during unit testing because
        // it slows down test execution.
        if (!tf.env().getBool('IS_TEST')) {
            var allKeys = Object.keys(this.binaryCache);
            allKeys.forEach(function (key) {
                _this.gpgpu.deleteProgram(_this.binaryCache[key].webGLProgram);
                delete _this.binaryCache[key];
            });
        }
        this.textureManager.dispose();
        if (this.canvas != null &&
            (typeof (HTMLCanvasElement) !== 'undefined' &&
                this.canvas instanceof HTMLCanvasElement)) {
            this.canvas.remove();
        }
        else {
            this.canvas = null;
        }
        if (this.gpgpuCreatedLocally) {
            this.gpgpu.program = null;
            this.gpgpu.dispose();
        }
        this.disposed = true;
    };
    MathBackendWebGL.prototype.floatPrecision = function () {
        var _this = this;
        if (this.floatPrecisionValue == null) {
            this.floatPrecisionValue = tf.tidy(function () {
                if (!tf.env().get('WEBGL_RENDER_FLOAT32_ENABLED')) {
                    // Momentarily switching DEBUG flag to false so we don't throw an
                    // error trying to upload a small value.
                    var debugFlag = tf.env().getBool('DEBUG');
                    tf.env().set('DEBUG', false);
                    var underflowCheckValue = _this.abs(tf.scalar(1e-8)).dataSync()[0];
                    tf.env().set('DEBUG', debugFlag);
                    if (underflowCheckValue > 0) {
                        return 32;
                    }
                }
                return 16;
            });
        }
        return this.floatPrecisionValue;
    };
    /** Returns the smallest representable number.  */
    MathBackendWebGL.prototype.epsilon = function () {
        return this.floatPrecision() === 32 ? EPSILON_FLOAT32 : EPSILON_FLOAT16;
    };
    MathBackendWebGL.prototype.uploadToGPU = function (dataId) {
        var _b;
        var texData = this.texData.get(dataId);
        var shape = texData.shape, dtype = texData.dtype, values = texData.values, texture = texData.texture, usage = texData.usage, isPacked = texData.isPacked;
        if (texture != null) {
            // Array is already on GPU. No-op.
            return;
        }
        var shouldTimeProgram = this.activeTimers != null;
        var start;
        if (shouldTimeProgram) {
            start = tf.util.now();
        }
        var texShape = texData.texShape;
        if (texShape == null) {
            // This texShape may not be the final texture shape. For packed or dense
            // textures, the texShape will be changed when textures are created.
            texShape = getTextureShapeFromLogicalShape(shape, isPacked);
            texData.texShape = texShape;
        }
        if (values != null) {
            var shapeAs3D = getShapeAs3D(shape);
            var program = void 0;
            var width = texShape[1], height = texShape[0];
            var isByteArray = values instanceof Uint8Array || values instanceof Uint8ClampedArray;
            // texture for float array is PhysicalTextureType.PACKED_2X2_FLOAT32, we
            // need to make sure the upload uses the same packed size
            if (isPacked || !isByteArray) {
                _b = __read(getPackedMatrixTextureShapeWidthHeight(texShape[0], texShape[1]), 2), width = _b[0], height = _b[1];
            }
            if (isPacked) {
                program = new EncodeMatrixPackedProgram(shapeAs3D, isByteArray);
            }
            else {
                program = new EncodeMatrixProgram(shapeAs3D, isByteArray);
            }
            // TexShape for float array needs to be the original shape, which byte
            // array needs to be packed size. This allow the data upload shape to be
            // matched with texture creation logic.
            var tempDenseInputTexShape = isByteArray ? [height, width] : texShape;
            var tempDenseInputHandle = this.makeTensorInfo(tempDenseInputTexShape, dtype);
            var tempDenseInputTexData = this.texData.get(tempDenseInputHandle.dataId);
            if (isByteArray) {
                tempDenseInputTexData.usage = TextureUsage.PIXELS;
            }
            else {
                tempDenseInputTexData.usage = TextureUsage.UPLOAD;
            }
            tempDenseInputTexData.texShape = tempDenseInputTexShape;
            this.gpgpu.uploadDenseMatrixToTexture(this.getTexture(tempDenseInputHandle.dataId), width, height, values);
            var customValues = [[height, width]];
            // We want the output to remain packed regardless of the value of
            // WEBGL_PACK.
            var preventEagerUnpacking = true;
            var encodedOutputTarget = this.runWebGLProgram(program, [tempDenseInputHandle], dtype, customValues, preventEagerUnpacking);
            // Have the original texture assume the identity of the encoded output.
            var outputTexData = this.texData.get(encodedOutputTarget.dataId);
            texData.texShape = outputTexData.texShape;
            texData.isPacked = outputTexData.isPacked;
            texData.usage = outputTexData.usage;
            if (!tf.env().get('ENGINE_COMPILE_ONLY')) {
                texData.texture = outputTexData.texture;
                // Once uploaded, don't store the values on cpu.
                texData.values = null;
                this.texData.delete(encodedOutputTarget.dataId);
            }
            else {
                this.disposeData(encodedOutputTarget.dataId);
            }
            this.disposeIntermediateTensorInfo(tempDenseInputHandle);
            if (shouldTimeProgram) {
                this.uploadWaitMs += tf.util.now() - start;
            }
        }
        else {
            var newTexture = this.acquireTexture(texShape, usage, dtype, isPacked);
            texData.texture = newTexture;
        }
    };
    MathBackendWebGL.prototype.convertAndCacheOnCPU = function (dataId, float32Values) {
        var texData = this.texData.get(dataId);
        var dtype = texData.dtype;
        if (float32Values != null) {
            texData.values = float32ToTypedArray(float32Values, dtype);
        }
        return texData.values;
    };
    MathBackendWebGL.prototype.acquireTexture = function (texShape, texType, dtype, isPacked) {
        this.numBytesInGPU += this.computeBytes(texShape, dtype);
        if (!this.warnedAboutMemory &&
            this.numBytesInGPU > this.numMBBeforeWarning * 1024 * 1024) {
            var mb = (this.numBytesInGPU / 1024 / 1024).toFixed(2);
            this.warnedAboutMemory = true;
            console.warn("High memory usage in GPU: ".concat(mb, " MB, ") +
                "most likely due to a memory leak");
        }
        return this.textureManager.acquireTexture(texShape, texType, isPacked);
    };
    MathBackendWebGL.prototype.computeBytes = function (shape, dtype) {
        return shape[0] * shape[1] * tf.util.bytesPerElement(dtype);
    };
    MathBackendWebGL.prototype.checkCompileCompletion = function () {
        var e_1, _b;
        try {
            for (var _c = __values(Object.entries(this.binaryCache)), _d = _c.next(); !_d.done; _d = _c.next()) {
                var _e = __read(_d.value, 2), binary = _e[1];
                this.checkCompletion_(binary);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    MathBackendWebGL.prototype.checkCompileCompletionAsync = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ps, _b, _c, _d, binary, _loop_1, _e, _f, _g, binary;
            var e_2, _h, e_3, _j;
            var _this = this;
            return __generator(this, function (_k) {
                ps = [];
                if (this.gpgpu.parallelCompilationExtension) {
                    try {
                        for (_b = __values(Object.entries(this.binaryCache)), _c = _b.next(); !_c.done; _c = _b.next()) {
                            _d = __read(_c.value, 2), binary = _d[1];
                            ps.push(this.checkCompletionAsync_(binary));
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_h = _b.return)) _h.call(_b);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                    return [2 /*return*/, Promise.all(ps)];
                }
                else {
                    _loop_1 = function (binary) {
                        var p = new Promise(function (resolve) {
                            try {
                                _this.checkCompletion_(binary);
                                resolve(true);
                            }
                            catch (error) {
                                throw error;
                            }
                        });
                        ps.push(p);
                    };
                    try {
                        for (_e = __values(Object.entries(this.binaryCache)), _f = _e.next(); !_f.done; _f = _e.next()) {
                            _g = __read(_f.value, 2), binary = _g[1];
                            _loop_1(binary);
                        }
                    }
                    catch (e_3_1) { e_3 = { error: e_3_1 }; }
                    finally {
                        try {
                            if (_f && !_f.done && (_j = _e.return)) _j.call(_e);
                        }
                        finally { if (e_3) throw e_3.error; }
                    }
                    return [2 /*return*/, Promise.all(ps)];
                }
            });
        });
    };
    MathBackendWebGL.prototype.checkCompletionAsync_ = function (binary) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.gpgpu.gl.getProgramParameter(binary.webGLProgram, this.gpgpu.parallelCompilationExtension.COMPLETION_STATUS_KHR)) return [3 /*break*/, 1];
                        return [2 /*return*/, this.checkCompletion_(binary)];
                    case 1: return [4 /*yield*/, tf.nextFrame()];
                    case 2:
                        _b.sent();
                        return [2 /*return*/, this.checkCompletionAsync_(binary)];
                }
            });
        });
    };
    MathBackendWebGL.prototype.checkCompletion_ = function (binary) {
        if (this.gpgpu.gl.getProgramParameter(binary.webGLProgram, this.gpgpu.gl.LINK_STATUS) === false) {
            console.log(this.gpgpu.gl.getProgramInfoLog(binary.webGLProgram));
            if (this.gpgpu.gl.getShaderParameter(binary.fragmentShader, this.gpgpu.gl.COMPILE_STATUS) === false) {
                logShaderSourceAndInfoLog(binary.source, this.gpgpu.gl.getShaderInfoLog(binary.fragmentShader));
                throw new Error('Failed to compile fragment shader.');
            }
            throw new Error('Failed to link vertex and fragment shaders.');
        }
        return true;
    };
    MathBackendWebGL.prototype.getUniformLocations = function () {
        var e_4, _b;
        try {
            for (var _c = __values(Object.values(this.binaryCache)), _d = _c.next(); !_d.done; _d = _c.next()) {
                var binary = _d.value;
                // TODO: Iterating through all binaries to build VAOs is supposed to be in
                // a seperate function, like 'setVaos'. However, to avoid breaking changes
                // for the users using parallel compile feature now, buildVao is silently
                // added here.
                this.gpgpu.buildVao(binary.webGLProgram);
                var _e = getUniformLocations(this.gpgpu, binary.program, binary.webGLProgram), variablesLocations = _e.variablesLocations, customUniformLocations = _e.customUniformLocations, infLoc = _e.infLoc, nanLoc = _e.nanLoc, outShapeLocation = _e.outShapeLocation, outShapeStridesLocation = _e.outShapeStridesLocation, outTexShapeLocation = _e.outTexShapeLocation;
                binary.variablesLocations = variablesLocations;
                binary.customUniformLocations = customUniformLocations;
                binary.infLoc = infLoc;
                binary.nanLoc = nanLoc;
                binary.outShapeLocation = outShapeLocation;
                binary.outShapeStridesLocation = outShapeStridesLocation;
                binary.outTexShapeLocation = outTexShapeLocation;
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
            }
            finally { if (e_4) throw e_4.error; }
        }
    };
    /**
     * Create a TF.js tensor out of an existing WebGL texture. A new texture will
     * be created.
     */
    MathBackendWebGL.prototype.createTensorFromGPUData = function (values, shape, dtype) {
        values.channels = values.channels || 'RGBA';
        var texture = values.texture, height = values.height, width = values.width, channels = values.channels;
        var backend = tf.engine().backend;
        // Have to throw an error, otherwise WebGL just warns and returns wrong
        // values.
        if (!backend.gpgpu.gl.isTexture(texture)) {
            throw new Error("The texture is invalid. Also, please make sure the texture and " +
                "the TFJS WebGL backend are using the same canvas. If you want to " +
                "use your own custom canvas, you have to create and use the custom " +
                "TFJS WebGL backend created from the canvas through " +
                "'new tf.MathBackendWebGL(customCanvas)'.");
        }
        var dataId = backend.writeTexture(texture, shape, dtype, height, width, channels);
        return tf.engine().makeTensorFromDataId(dataId, shape, dtype, backend);
    };
    return MathBackendWebGL;
}(tf.KernelBackend));
MathBackendWebGL.nextDataId = 0;
function float32ToTypedArray(a, dtype) {
    if (dtype === 'float32' || dtype === 'complex64') {
        return a;
    }
    else if (dtype === 'int32' || dtype === 'bool') {
        var result = (dtype === 'int32') ? new Int32Array(a.length) :
            new Uint8Array(a.length);
        for (var i = 0; i < result.length; ++i) {
            result[i] = Math.round(a[i]);
        }
        return result;
    }
    else {
        throw new Error("Unknown dtype ".concat(dtype));
    }
}

/** @license See the LICENSE file. */
// This code is auto-generated, do not modify this file!
var version = '4.11.0';

/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
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
/**
 * Enforce use of half precision textures if available on the platform.
 *
 * @doc {heading: 'Environment', namespace: 'webgl'}
 */
function forceHalfFloat() {
    tf.env().set('WEBGL_FORCE_F16_TEXTURES', true);
}

/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
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
if (tf.device_util.isBrowser()) {
    tf.registerBackend('webgl', function () { return new MathBackendWebGL(); }, 2 /* priority */);
}
var webgl = { forceHalfFloat: forceHalfFloat };

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
var CHECK_NAN_SNIPPET = "\n  if (isnan(a)) return a;\n  if (isnan(b)) return b;\n";
var BinaryOpProgram = /** @class */ (function () {
    function BinaryOpProgram(op, aShape, bShape) {
        this.variableNames = ['A', 'B'];
        this.outputShape = tf.backend_util.assertAndGetBroadcastShape(aShape, bShape);
        this.enableShapeUniforms = useShapeUniforms(this.outputShape.length);
        this.userCode = "\n      float binaryOperation(float a, float b) {\n        ".concat(op, "\n      }\n\n      void main() {\n        float a = getAAtOutCoords();\n        float b = getBAtOutCoords();\n        setOutput(binaryOperation(a, b));\n      }\n    ");
    }
    return BinaryOpProgram;
}());

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
var CHECK_NAN_SNIPPET_PACKED = "\n  result.r = isNaN.r ? NAN : result.r;\n  result.g = isNaN.g ? NAN : result.g;\n  result.b = isNaN.b ? NAN : result.b;\n  result.a = isNaN.a ? NAN : result.a;\n";
var BinaryOpPackedProgram = /** @class */ (function () {
    function BinaryOpPackedProgram(op, aShape, bShape, checkOutOfBounds) {
        if (checkOutOfBounds === void 0) { checkOutOfBounds = false; }
        this.variableNames = ['A', 'B'];
        this.supportsBroadcasting = true;
        this.packedInputs = true;
        this.packedOutput = true;
        this.outputShape = tf.backend_util.assertAndGetBroadcastShape(aShape, bShape);
        var rank = this.outputShape.length;
        this.enableShapeUniforms = useShapeUniforms(rank);
        var checkOutOfBoundsString = '';
        if (checkOutOfBounds) {
            if (rank === 0 || tf.util.sizeFromShape(this.outputShape) === 1) {
                checkOutOfBoundsString = "\n          result.y = 0.;\n          result.z = 0.;\n          result.w = 0.;\n        ";
            }
            else {
                var dtype = getCoordsDataType(rank);
                checkOutOfBoundsString = "\n          ".concat(dtype, " coords = getOutputCoords();\n        ");
                if (rank === 1) {
                    if (this.enableShapeUniforms) {
                        checkOutOfBoundsString += "\n            result.y = (coords + 1) >= outShape ? 0. : result.y;\n            result.z = 0.;\n            result.w = 0.;\n          ";
                    }
                    else {
                        checkOutOfBoundsString += "\n            result.y = (coords + 1) >= ".concat(this.outputShape[0], " ? 0. : result.y;\n            result.z = 0.;\n            result.w = 0.;\n          ");
                    }
                }
                else {
                    var channels = getChannels('coords', rank);
                    if (this.enableShapeUniforms) {
                        checkOutOfBoundsString += "\n            bool nextRowOutOfBounds =\n              (".concat(channels[rank - 2], " + 1) >= outShape[").concat(rank, " - 2];\n            bool nextColOutOfBounds =\n              (").concat(channels[rank - 1], " + 1) >= outShape[").concat(rank, " - 1];\n            result.y = nextColOutOfBounds ? 0. : result.y;\n            result.z = nextRowOutOfBounds ? 0. : result.z;\n            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;\n          ");
                    }
                    else {
                        checkOutOfBoundsString += "\n            bool nextRowOutOfBounds =\n              (".concat(channels[rank - 2], " + 1) >= ").concat(this.outputShape[rank - 2], ";\n            bool nextColOutOfBounds =\n              (").concat(channels[rank - 1], " + 1) >= ").concat(this.outputShape[rank - 1], ";\n            result.y = nextColOutOfBounds ? 0. : result.y;\n            result.z = nextRowOutOfBounds ? 0. : result.z;\n            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;\n          ");
                    }
                }
            }
        }
        this.userCode = "\n      vec4 binaryOperation(vec4 a, vec4 b) {\n        ".concat(op, "\n      }\n\n      void main() {\n        vec4 a = getAAtOutCoords();\n        vec4 b = getBAtOutCoords();\n\n        vec4 result = binaryOperation(a, b);\n        ").concat(checkOutOfBoundsString, "\n\n        setOutput(result);\n      }\n    ");
    }
    return BinaryOpPackedProgram;
}());

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
function identity(args) {
    var inputs = args.inputs, backend = args.backend;
    var x = inputs.x;
    backend.incRef(x.dataId);
    return { dataId: x.dataId, shape: x.shape, dtype: x.dtype };
}
var identityConfig = {
    kernelName: tf.Identity,
    backendName: 'webgl',
    kernelFunc: identity
};

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
/**
 * In WebGL data is stored in GPU textures which can't be efficiently copied, so
 * complex tensors share data with their real and imaginary components. Complex
 * tensors' reference to the components is tracked by refCount on the individual
 * component. The refCounts are increased by the identity call.
 *
 * When a complex tensor is disposed, it will reduce the refCount on the
 * components by calling disposeData on each.
 */
function complex(args) {
    var inputs = args.inputs, backend = args.backend;
    var real = inputs.real, imag = inputs.imag;
    var complexInfo = backend.makeTensorInfo(real.shape, 'complex64');
    var complex = backend.texData.get(complexInfo.dataId);
    var realTensorInfo = identity({ inputs: { x: real }, backend: backend });
    var imagTensorInfo = identity({ inputs: { x: imag }, backend: backend });
    complex.complexTensorInfos = { real: realTensorInfo, imag: imagTensorInfo };
    return complexInfo;
}
var complexConfig = {
    kernelName: tf.Complex,
    backendName: 'webgl',
    kernelFunc: complex
};

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
var LEAKYRELU = "return (a < 0.) ? b * a : a;";
var LEAKYRELU_PACKED = "\n  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));\n  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);\n";
function leakyRelu(args) {
    var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
    var x = inputs.x;
    var alpha = attrs.alpha;
    var $alpha = backend.makeTensorInfo([], 'float32', tf.util.createScalarValue(alpha, 'float32'));
    var program = tf.env().getBool('WEBGL_PACK_BINARY_OPERATIONS') ?
        new BinaryOpPackedProgram(LEAKYRELU_PACKED, x.shape, $alpha.shape) :
        new BinaryOpProgram(LEAKYRELU, x.shape, $alpha.shape);
    var result = backend.runWebGLProgram(program, [x, $alpha], 'float32');
    backend.disposeIntermediateTensorInfo($alpha);
    return result;
}
var leakyReluConfig = {
    kernelName: tf.LeakyRelu,
    backendName: 'webgl',
    kernelFunc: leakyRelu
};

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
var PRELU = "return (a < 0.) ? b * a : a;";
var PRELU_PACKED = "\n  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));\n  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);\n";
function prelu(args) {
    var inputs = args.inputs, backend = args.backend;
    var x = inputs.x, alpha = inputs.alpha;
    var program = tf.env().getBool('WEBGL_PACK_BINARY_OPERATIONS') ?
        new BinaryOpPackedProgram(PRELU_PACKED, x.shape, alpha.shape) :
        new BinaryOpProgram(PRELU, x.shape, alpha.shape);
    return backend.runWebGLProgram(program, [x, alpha], 'float32');
}
var preluConfig = {
    kernelName: tf.Prelu,
    backendName: 'webgl',
    kernelFunc: prelu
};

var CHECK_NAN_SNIPPET_UNARY = "if (isnan(x)) return x;";
/**
 * Template that creates a `KernelFunc` for unary ops.
 * @param opSnippet Op snippet to create `UnaryOpProgram`.
 * @param packedOpSnippet Op snippet to create `UnaryOpPackedProgram`.
 * @param dtype Optional. If set, the result has this dtype. Otherwise, the
 *     result has the same dtype as the first input. This is mainly used in
 *     comparison kernels, such as Equal, Less, Greater, etc.
 */
function unaryKernelFunc(_a) {
    var opSnippet = _a.opSnippet, packedOpSnippet = _a.packedOpSnippet, cpuKernelImpl = _a.cpuKernelImpl, dtype = _a.dtype;
    return function (_a) {
        var inputs = _a.inputs, backend = _a.backend;
        var x = inputs.x;
        var webglBackend = backend;
        var $dtype = dtype || x.dtype;
        if (webglBackend.shouldExecuteOnCPU([x]) && cpuKernelImpl != null) {
            var xData = webglBackend.texData.get(x.dataId);
            var outValues = cpuKernelImpl(xData.values, $dtype);
            return webglBackend.makeTensorInfo(x.shape, $dtype, outValues);
        }
        var shouldUsePackedProgram = tf.env().getBool('WEBGL_PACK_UNARY_OPERATIONS') && packedOpSnippet != null;
        var program;
        if (shouldUsePackedProgram) {
            program = new UnaryOpPackedProgram(x.shape, packedOpSnippet);
        }
        else {
            program = new UnaryOpProgram(x.shape, opSnippet);
        }
        return webglBackend.runWebGLProgram(program, [x], $dtype);
    };
}
/**
 * Template that creates a `KernelFunc` for binary ops.
 * @param opSnippet Op snippet to create `BinaryOpProgram`.
 * @param packedOpSnippet Op snippet to create `BinaryOpPackedProgram`.
 * @param checkOutOfBoundsForPackedProgram Whether to set checkOutOfBounds=true
 *     when creating BinaryOpPackedProgram.
 * @param dtype Optional. If set, the result has this dtype. Otherwise, the
 *     result has the same dtype as the first input. This is mainly used in
 *     comparison kernels, such as Equal, Less, Greater, etc.
 */
function binaryKernelFunc(_a) {
    var opSnippet = _a.opSnippet, packedOpSnippet = _a.packedOpSnippet, _b = _a.checkOutOfBounds, checkOutOfBounds = _b === void 0 ? false : _b, _c = _a.supportsComplex, supportsComplex = _c === void 0 ? false : _c, cpuKernelImpl = _a.cpuKernelImpl, dtype = _a.dtype;
    return function (_a) {
        var inputs = _a.inputs, backend = _a.backend;
        var a = inputs.a, b = inputs.b;
        var webglBackend = backend;
        if (supportsComplex && a.dtype === 'complex64') {
            var aData = webglBackend.texData.get(a.dataId);
            var bData = webglBackend.texData.get(b.dataId);
            var _b = __read([
                [aData.complexTensorInfos.real, bData.complexTensorInfos.real],
                [aData.complexTensorInfos.imag, bData.complexTensorInfos.imag]
            ].map(function (complexParts) {
                var _a = __read(complexParts, 2), aPart = _a[0], bPart = _a[1];
                var aHandle = {
                    dataId: aPart.dataId,
                    dtype: aPart.dtype,
                    shape: a.shape
                };
                var bHandle = {
                    dataId: bPart.dataId,
                    dtype: bPart.dtype,
                    shape: b.shape
                };
                var program = new BinaryOpProgram(opSnippet, a.shape, b.shape);
                return webglBackend.runWebGLProgram(program, [aHandle, bHandle], tf.upcastType(aPart.dtype, bPart.dtype));
            }), 2), real = _b[0], imag = _b[1];
            var complexOutput = complex({ inputs: { real: real, imag: imag }, backend: webglBackend });
            webglBackend.disposeIntermediateTensorInfo(real);
            webglBackend.disposeIntermediateTensorInfo(imag);
            // TODO(annxingyuan): Implement CPU forwarding for complex inputs.
            return complexOutput;
        }
        var $dtype = dtype || tf.upcastType(a.dtype, b.dtype);
        if ((a.dtype === 'string' || b.dtype === 'string' ||
            webglBackend.shouldExecuteOnCPU([a, b])) &&
            cpuKernelImpl != null) {
            var aVals = webglBackend.texData.get(a.dataId).values;
            var bVals = webglBackend.texData.get(b.dataId).values;
            var decodedAVals = a.dtype === 'string' ?
                // tslint:disable-next-line: no-any
                tf.backend_util.fromUint8ToStringArray(aVals) :
                aVals;
            var decodedBVals = a.dtype === 'string' ?
                // tslint:disable-next-line: no-any
                tf.backend_util.fromUint8ToStringArray(bVals) :
                bVals;
            var _c = __read(cpuKernelImpl(a.shape, b.shape, decodedAVals, decodedBVals, $dtype), 2), outValues = _c[0], outShape = _c[1];
            var out = webglBackend.makeTensorInfo(outShape, $dtype);
            var outData = webglBackend.texData.get(out.dataId);
            outData.values = outValues;
            return out;
        }
        var shouldUsePackedProgram = tf.env().getBool('WEBGL_PACK_BINARY_OPERATIONS') &&
            packedOpSnippet != null;
        var program;
        if (shouldUsePackedProgram) {
            program = new BinaryOpPackedProgram(packedOpSnippet, a.shape, b.shape, checkOutOfBounds);
        }
        else {
            program = new BinaryOpProgram(opSnippet, a.shape, b.shape);
        }
        return webglBackend.runWebGLProgram(program, [a, b], $dtype);
    };
}
function mapActivationToShaderProgram(activation, packed) {
    if (packed === void 0) { packed = false; }
    if (activation === 'linear') {
        if (packed) {
            return LINEAR;
        }
        return LINEAR$1;
    }
    else if (activation === 'relu') {
        if (packed) {
            return RELU$1;
        }
        return RELU$2;
    }
    else if (activation === 'elu') {
        if (packed) {
            return ELU$1;
        }
        return ELU$2;
    }
    else if (activation === 'relu6') {
        if (packed) {
            return RELU6$1;
        }
        return RELU6$2;
    }
    else if (activation === 'prelu') {
        if (packed) {
            return PRELU_PACKED;
        }
        return PRELU;
    }
    else if (activation === 'leakyrelu') {
        if (packed) {
            return LEAKYRELU_PACKED;
        }
        return LEAKYRELU;
    }
    else if (activation === 'sigmoid') {
        if (packed) {
            return SIGMOID$1;
        }
        return SIGMOID$2;
    }
    throw new Error("Activation ".concat(activation, " has not been implemented for the WebGL backend."));
}

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
var MatMulPackedProgram = /** @class */ (function () {
    function MatMulPackedProgram(aShape, bShape, outputShape, transposeA, transposeB, addBias, activation, hasPreluActivation, hasLeakyreluActivation) {
        if (transposeA === void 0) { transposeA = false; }
        if (transposeB === void 0) { transposeB = false; }
        if (addBias === void 0) { addBias = false; }
        if (activation === void 0) { activation = null; }
        if (hasPreluActivation === void 0) { hasPreluActivation = false; }
        if (hasLeakyreluActivation === void 0) { hasLeakyreluActivation = false; }
        this.variableNames = ['matrixA', 'matrixB'];
        this.packedInputs = true;
        this.packedOutput = true;
        this.outputShape = outputShape;
        this.enableShapeUniforms = useShapeUniforms(this.outputShape.length);
        var sharedDim = transposeA ? aShape[1] : aShape[2];
        var sharedDimensionPacked = Math.ceil(sharedDim / 2);
        var aSample = transposeA ? 'i * 2, rc.y' : 'rc.y, i * 2';
        var bSample = transposeB ? 'rc.z, i * 2' : 'i * 2, rc.z';
        var aSwizzle = transposeA ? ['a.xxyy', 'a.zzww'] : ['a.xxzz', 'a.yyww'];
        var bSwizzle = transposeB ? ['b.xzxz', 'b.ywyw'] : ['b.xyxy', 'b.zwzw'];
        var activationSnippet = '', applyActivationSnippet = '';
        if (activation) {
            if (hasPreluActivation) {
                activationSnippet = "vec4 activation(vec4 a) {\n          vec4 b = getPreluActivationWeightsAtOutCoords();\n          ".concat(activation, "\n        }");
            }
            else if (hasLeakyreluActivation) {
                activationSnippet = "vec4 activation(vec4 a) {\n          vec4 b = getLeakyreluAlphaAtOutCoords();\n          ".concat(activation, "\n        }");
            }
            else {
                activationSnippet = "vec4 activation(vec4 x) {\n          ".concat(activation, "\n        }");
            }
            applyActivationSnippet = "result = activation(result);";
        }
        var addBiasSnippet = addBias ? 'result += getBiasAtOutCoords();' : '';
        if (addBias) {
            this.variableNames.push('bias');
        }
        if (hasPreluActivation) {
            this.variableNames.push('preluActivationWeights');
        }
        if (hasLeakyreluActivation) {
            this.variableNames.push('leakyreluAlpha');
        }
        var batchASnippet = 'rc.x';
        var batchBSnippet = 'rc.x';
        if (aShape[0] < bShape[0]) {
            batchASnippet = "imod(rc.x, ".concat(aShape[0], ")");
        }
        else if (bShape[0] < aShape[0]) {
            batchBSnippet = "imod(rc.x, ".concat(bShape[0], ")");
        }
        this.userCode = "\n      ".concat(activationSnippet, "\n      // Don't use uniform for sharedDimensionPacked for performance.\n      const float sharedDimension = ").concat(sharedDimensionPacked, ".0;\n\n      vec4 dot2x2ARowBCol(ivec3 rc) {\n        vec4 result = vec4(0);\n        int batchA = ").concat(batchASnippet, ";\n        int batchB = ").concat(batchBSnippet, ";\n        for (int i = 0; i < ").concat(sharedDimensionPacked, "; i++) {\n          vec4 a = getMatrixA(batchA, ").concat(aSample, ");\n          vec4 b = getMatrixB(batchB, ").concat(bSample, ");\n\n          // These swizzled products need to be separately added.\n          // See: https://github.com/tensorflow/tfjs/issues/1735\n          result += (").concat(aSwizzle[0], " * ").concat(bSwizzle[0], ");\n          result += (").concat(aSwizzle[1], " * ").concat(bSwizzle[1], ");\n        }\n        return result;\n      }\n\n      void main() {\n        ivec3 rc = getOutputCoords();\n        vec4 result = dot2x2ARowBCol(rc);\n\n        ").concat(addBiasSnippet, "\n\n        ").concat(applyActivationSnippet, "\n\n        setOutput(result);\n      }\n    ");
    }
    return MatMulPackedProgram;
}());

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
// (Ar + Ai)(Br + Bi) =
// ArBr + ArBi + AiBr + AiBi = ArBr - AB + ArBi + AiBr
// Yr = ArBr - AB
// Yi = ArBi + AiBr
var COMPLEX_MULTIPLY = {
    REAL: 'return areal * breal - aimag * bimag;',
    IMAG: 'return areal * bimag + aimag * breal;'
};
var BinaryOpComplexProgram = /** @class */ (function () {
    function BinaryOpComplexProgram(op, aShape, bShape) {
        this.variableNames = ['AReal', 'AImag', 'BReal', 'BImag'];
        this.outputShape = tf.backend_util.assertAndGetBroadcastShape(aShape, bShape);
        this.userCode = "\n      float binaryOpComplex(\n          float areal, float aimag, float breal, float bimag) {\n        ".concat(op, "\n      }\n\n      void main() {\n        float areal = getARealAtOutCoords();\n        float aimag = getAImagAtOutCoords();\n        float breal = getBRealAtOutCoords();\n        float bimag = getBImagAtOutCoords();\n        setOutput(binaryOpComplex(areal, aimag, breal, bimag));\n      }\n    ");
    }
    return BinaryOpComplexProgram;
}());

var MUL = 'return a * b;';
function multiply(args) {
    var inputs = args.inputs, backend = args.backend;
    var a = inputs.a, b = inputs.b;
    var dtype = tf.backend_util.upcastType(a.dtype, b.dtype);
    if (a.dtype === 'complex64') {
        var aData = backend.texData.get(a.dataId);
        var bData = backend.texData.get(b.dataId);
        var realProgram = new BinaryOpComplexProgram(COMPLEX_MULTIPLY.REAL, a.shape, b.shape);
        var imagProgram = new BinaryOpComplexProgram(COMPLEX_MULTIPLY.IMAG, a.shape, b.shape);
        var inputs_1 = [
            {
                dataId: aData.complexTensorInfos.real.dataId,
                dtype: aData.complexTensorInfos.real.dtype,
                shape: a.shape
            },
            {
                dataId: aData.complexTensorInfos.imag.dataId,
                dtype: aData.complexTensorInfos.imag.dtype,
                shape: a.shape
            },
            {
                dataId: bData.complexTensorInfos.real.dataId,
                dtype: bData.complexTensorInfos.real.dtype,
                shape: b.shape
            },
            {
                dataId: bData.complexTensorInfos.imag.dataId,
                dtype: bData.complexTensorInfos.imag.dtype,
                shape: b.shape
            }
        ];
        var realPart = backend.runWebGLProgram(realProgram, inputs_1, 'float32');
        var imagPart = backend.runWebGLProgram(imagProgram, inputs_1, 'float32');
        var complexOutput = complex({ inputs: { real: realPart, imag: imagPart }, backend: backend });
        backend.disposeIntermediateTensorInfo(realPart);
        backend.disposeIntermediateTensorInfo(imagPart);
        // TODO(annxingyuan): CPU forwarding for complex inputs.
        return complexOutput;
    }
    if (backend.shouldExecuteOnCPU([a, b])) {
        var aData = backend.texData.get(a.dataId);
        var bData = backend.texData.get(b.dataId);
        var _a = __read(multiplyImplCPU(a.shape, b.shape, aData.values, bData.values, dtype), 2), outValues = _a[0], outShape = _a[1];
        var out = backend.makeTensorInfo(outShape, dtype);
        var outData = backend.texData.get(out.dataId);
        outData.values = outValues;
        return out;
    }
    var program;
    if (tf.env().getBool('WEBGL_PACK_BINARY_OPERATIONS')) {
        program = new BinaryOpPackedProgram(MUL, a.shape, b.shape);
    }
    else {
        program = new BinaryOpProgram(MUL, a.shape, b.shape);
    }
    return backend.runWebGLProgram(program, [a, b], dtype);
}
var multiplyConfig = {
    kernelName: tf.Multiply,
    backendName: 'webgl',
    kernelFunc: multiply
};

function packedReshape(input, afterShape, backend) {
    var input3DShape = __spreadArray([getBatchDim(input.shape)], __read(getRowsCols(input.shape)), false);
    var input3D = {
        dtype: input.dtype,
        shape: input3DShape,
        dataId: input.dataId
    };
    var afterShapeAs3D = __spreadArray([getBatchDim(afterShape)], __read(getRowsCols(afterShape)), false);
    var program = new ReshapePackedProgram(afterShapeAs3D, input3DShape);
    var preventEagerUnpackingOfOutput = true;
    var customValues = [input3DShape];
    var output = backend.runWebGLProgram(program, [input3D], input.dtype, customValues, preventEagerUnpackingOfOutput);
    return { dataId: output.dataId, shape: afterShape, dtype: output.dtype };
}

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
function reshape(args) {
    var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
    var x = inputs.x;
    var shape = attrs.shape;
    var webglBackend = backend;
    var xSize = tf.util.sizeFromShape(x.shape);
    var $shape = tf.util.inferFromImplicitShape(shape, xSize);
    var $xSize = tf.util.sizeFromShape($shape);
    tf.util.assert(xSize === $xSize, function () { return "The new shape (".concat($shape, ") has ").concat($xSize, " elements and the old ") +
        "shape (".concat(x.shape, ") has ").concat(xSize, " elements. The new shape and old ") +
        "shape must have the same number of elements."; });
    var xTexData = webglBackend.texData.get(x.dataId);
    if (xTexData.isPacked && !isReshapeFree(x.shape, $shape) &&
        !(xTexData.texture !== null && isReshapeFree(xTexData.shape, $shape))) {
        return packedReshape(x, $shape, webglBackend);
    }
    webglBackend.incRef(x.dataId);
    return { dataId: x.dataId, shape: $shape, dtype: x.dtype };
}
var reshapeConfig = {
    kernelName: tf.Reshape,
    backendName: 'webgl',
    kernelFunc: reshape
};

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
var MeanProgram = /** @class */ (function () {
    function MeanProgram(reduceInfo, divisor) {
        this.variableNames = ['x'];
        var windowSize = reduceInfo.windowSize, batchSize = reduceInfo.batchSize, inSize = reduceInfo.inSize, outSize = reduceInfo.outSize;
        this.outputShape = [batchSize, outSize];
        var windowSizeNearestVec4 = Math.floor(windowSize / 4) * 4;
        var windowSizeVec4Remainder = windowSize % 4;
        var updateSnippet = "sumValue += dot(values, ones);";
        if (divisor != null) {
            var denominator = 1 / divisor;
            updateSnippet = "sumValue += dot(values * ".concat(tf.util.isInt(denominator) ? denominator.toPrecision(2) :
                denominator, ", ones);");
        }
        var checkOutOfBounds = '';
        if (inSize % windowSize > 0) {
            checkOutOfBounds = "\n        if (inIdx < 0 || inIdx >= ".concat(inSize, ") {\n          return 0.0;\n        }\n      ");
        }
        this.userCode = "\n      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);\n\n      float getValue(int batch, int inIdx) {\n        ".concat(checkOutOfBounds, "\n        return getX(batch, inIdx);\n      }\n\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n        int outIdx = coords[1];\n        int inOffset = outIdx * ").concat(windowSize, ";\n\n        float sumValue = 0.0;\n\n        for (int i = 0; i < ").concat(windowSizeNearestVec4, "; i += 4) {\n          int inIdx = inOffset + i;\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            getValue(batch, inIdx + 3)\n          );\n\n          ").concat(updateSnippet, "\n        }\n\n        int inIdx = inOffset + ").concat(windowSizeNearestVec4, ";\n        if (").concat(windowSizeVec4Remainder === 1, ") {\n          vec4 values = vec4(getValue(batch, inIdx), 0.0, 0.0, 0.0);\n\n          ").concat(updateSnippet, "\n        } else if (").concat(windowSizeVec4Remainder === 2, ") {\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1), 0.0, 0.0);\n\n          ").concat(updateSnippet, "\n        } else if (").concat(windowSizeVec4Remainder === 3, ") {\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2), 0.0);\n\n          ").concat(updateSnippet, "\n        }\n        setOutput(sumValue);\n      }\n    ");
    }
    return MeanProgram;
}());

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
var ReduceProgram = /** @class */ (function () {
    function ReduceProgram(reduceInfo, reduceType) {
        this.variableNames = ['x'];
        var windowSize = reduceInfo.windowSize, batchSize = reduceInfo.batchSize, inSize = reduceInfo.inSize, outSize = reduceInfo.outSize;
        this.outputShape = [batchSize, outSize];
        var initializationValue = '0.0';
        var compareOp = "";
        if (reduceType === 'prod') {
            initializationValue = '1.0';
        }
        else if (reduceType === 'min') {
            // WebGL on Firefox Linux can't compile 1/0 so we do 1/eps.
            initializationValue = '1.0 / 1e-20';
            compareOp = "min";
        }
        else if (reduceType === 'max') {
            // WebGL on Firefox Linux can't compile 1/0 so we do 1/eps.
            initializationValue = '-1.0 / 1e-20';
            compareOp = "max";
        }
        var returnValue = "".concat(reduceType, "(").concat(reduceType, "(").concat(reduceType, "(") +
            'minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])';
        if (reduceType === 'sum') {
            returnValue = "sumValue";
        }
        else if (reduceType === 'prod') {
            returnValue = "prodValue";
        }
        else if (reduceType === 'all') {
            returnValue = "allValue";
        }
        else if (reduceType === 'any') {
            returnValue = "anyValue";
        }
        var windowSizeNearestVec4 = Math.floor(windowSize / 4) * 4;
        var windowSizeVec4Remainder = windowSize % 4;
        var updateSnippet = "\n      if (".concat(reduceType === 'sum', ") {\n        sumValue += dot(values, ones);\n      } else if (").concat(reduceType === 'prod', ") {\n        vec2 tmp = vec2(values[0], values[1]) * vec2(values[2], values[3]);\n        prodValue *= tmp[0] * tmp[1];\n      } else {\n        minMaxValue = ").concat(compareOp, "(values, minMaxValue);\n        if (").concat(reduceType === 'min', " || ").concat(reduceType === 'max', ") {\n          minMaxValue = ").concat(compareOp, "(values, minMaxValue);\n          bvec4 isNaN = isnan(values);\n          if (isNaN.r || isNaN.g || isNaN.b || isNaN.a) {\n            minMaxValue = vec4(NAN);\n          }\n        }\n      }\n    ");
        var vecType = "vec4";
        if (reduceType === 'all') {
            initializationValue = '1.0';
            updateSnippet = "\n        bool reducedAllValue = all(values);\n        float floatedReducedAllValue = float(reducedAllValue);\n        allValue = float(allValue >= 1.0 && floatedReducedAllValue >= 1.0);\n      ";
            vecType = "bvec4";
        }
        else if (reduceType === 'any') {
            initializationValue = '0.0';
            updateSnippet = "\n        bool reducedAnyValue = any(values);\n        float floatedReducedAnyValue = float(reducedAnyValue);\n        anyValue = float(anyValue >= 1.0 || floatedReducedAnyValue >= 1.0);\n      ";
            vecType = "bvec4";
        }
        var checkOutOfBounds = '';
        if (inSize % windowSize > 0) {
            checkOutOfBounds = "\n        if (inIdx < 0 || inIdx >= ".concat(inSize, ") {\n          return initializationValue;\n        }\n      ");
        }
        this.userCode = "\n      const float initializationValue = ".concat(initializationValue, ";\n      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);\n\n      float getValue(int batch, int inIdx) {\n        ").concat(checkOutOfBounds, "\n        return getX(batch, inIdx);\n      }\n\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n        int outIdx = coords[1];\n        int inOffset = outIdx * ").concat(windowSize, ";\n\n        vec4 minMaxValue = vec4(").concat(initializationValue, ");\n        float prodValue = 1.0;\n        float sumValue = 0.0;\n        float allValue = 1.0;\n        float anyValue = 0.0;\n\n        for (int i = 0; i < ").concat(windowSizeNearestVec4, "; i += 4) {\n          int inIdx = inOffset + i;\n          ").concat(vecType, " values = ").concat(vecType, "(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            getValue(batch, inIdx + 3)\n          );\n\n          ").concat(updateSnippet, "\n        }\n\n        int inIdx = inOffset + ").concat(windowSizeNearestVec4, ";\n        if (").concat(windowSizeVec4Remainder === 1, ") {\n          ").concat(vecType, " values = ").concat(vecType, "(\n            getValue(batch, inIdx),\n            initializationValue,\n            initializationValue,\n            initializationValue\n          );\n\n          ").concat(updateSnippet, "\n        } else if (").concat(windowSizeVec4Remainder === 2, ") {\n          ").concat(vecType, " values = ").concat(vecType, "(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            initializationValue,\n            initializationValue\n          );\n\n          ").concat(updateSnippet, "\n        } else if (").concat(windowSizeVec4Remainder === 3, ") {\n          ").concat(vecType, " values = ").concat(vecType, "(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            initializationValue\n          );\n\n          ").concat(updateSnippet, "\n        }\n        setOutput(").concat(returnValue, ");\n      }\n    ");
    }
    return ReduceProgram;
}());

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
// Returns an array of configuration objects that describe each stage of the
// reduction.
function getReductionStages(inShape) {
    var stages = [];
    while (stages.length === 0 || stages[stages.length - 1].outSize !== 1) {
        var outSize = stages.length ? stages[stages.length - 1].outSize : inShape[1];
        var windowSize = tf.backend_util.computeOptimalWindowSize(outSize);
        stages.push({
            inSize: outSize,
            windowSize: windowSize,
            outSize: Math.ceil(outSize / windowSize)
        });
    }
    return stages;
}
function reduce(x, dtype, reductionType, backend) {
    var reductionStages = getReductionStages(x.shape);
    var result = x;
    for (var i = 0; i < reductionStages.length; i++) {
        var _a = reductionStages[i], inSize = _a.inSize, windowSize = _a.windowSize, outSize = _a.outSize;
        var program = void 0;
        var previousResult = void 0;
        if (reductionType === 'mean') {
            program = i === 0 ?
                new MeanProgram({ windowSize: windowSize, inSize: inSize, batchSize: x.shape[0], outSize: outSize }, inSize) :
                new MeanProgram({ windowSize: windowSize, inSize: inSize, batchSize: x.shape[0], outSize: outSize });
        }
        else {
            program = new ReduceProgram({ windowSize: windowSize, inSize: inSize, batchSize: x.shape[0], outSize: outSize }, reductionType);
        }
        previousResult = result;
        result = backend.runWebGLProgram(program, [result], dtype);
        if (previousResult.dataId !== x.dataId) {
            backend.disposeIntermediateTensorInfo(previousResult);
        }
    }
    return result;
}

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
var TransposeProgram = /** @class */ (function () {
    function TransposeProgram(aShape, newDim) {
        this.variableNames = ['A'];
        var outputShape = new Array(aShape.length);
        for (var i = 0; i < outputShape.length; i++) {
            outputShape[i] = aShape[newDim[i]];
        }
        this.outputShape = outputShape;
        this.rank = outputShape.length;
        var dtype = getCoordsDataType(this.rank);
        var switched = getSwitchedCoords(newDim);
        this.userCode = "\n    void main() {\n      ".concat(dtype, " resRC = getOutputCoords();\n      setOutput(getA(").concat(switched, "));\n    }\n    ");
    }
    return TransposeProgram;
}());
function getSwitchedCoords(newDim) {
    var rank = newDim.length;
    if (rank > 6) {
        throw Error("Transpose for rank ".concat(rank, " is not yet supported"));
    }
    var originalOrder = ['resRC.x', 'resRC.y', 'resRC.z', 'resRC.w', 'resRC.u', 'resRC.v'];
    var switchedCoords = new Array(rank);
    for (var i = 0; i < newDim.length; i++) {
        switchedCoords[newDim[i]] = originalOrder[i];
    }
    return switchedCoords.join();
}

/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
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
var TransposePackedProgram = /** @class */ (function () {
    function TransposePackedProgram(aShape, newDim) {
        this.variableNames = ['A'];
        this.packedInputs = true;
        this.packedOutput = true;
        var outputShape = new Array(aShape.length);
        for (var i = 0; i < outputShape.length; i++) {
            outputShape[i] = aShape[newDim[i]];
        }
        this.outputShape = outputShape;
        this.rank = outputShape.length;
        if (this.rank > 6) {
            throw Error("Packed transpose for rank ".concat(this.rank, " is not yet supported."));
        }
        var dtype = getCoordsDataType(this.rank);
        var outputOrder = getVecChannels('rc', this.rank);
        var switchedOrder = new Array(this.rank);
        for (var i = 0; i < newDim.length; i++) {
            switchedOrder[newDim[i]] = outputOrder[i];
        }
        var innerDims = "vec2(".concat(switchedOrder.slice(-2).join(), ")");
        var nextColumn = "++".concat(outputOrder[this.rank - 1], " < ").concat(outputShape[this.rank - 1]);
        var getc = "getChannel(getA(".concat(switchedOrder.join(), "), ").concat(innerDims, ")");
        this.userCode = "\n    void main() {\n      ".concat(dtype, " rc = getOutputCoords();\n      vec4 result = vec4(0.);\n      result[0] = ").concat(getc, ";\n      if(").concat(nextColumn, ") {\n        result[1] = ").concat(getc, ";\n      }\n      --").concat(outputOrder[this.rank - 1], ";\n      if(++").concat(outputOrder[this.rank - 2], " < ").concat(outputShape[this.rank - 2], ") {\n        result[2] = ").concat(getc, ";\n        if(").concat(nextColumn, ") {\n          result[3] = ").concat(getc, ";\n        }\n      }\n      setOutput(result);\n    }\n    ");
    }
    return TransposePackedProgram;
}());

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
function transposeImpl(x, perm, backend) {
    var program = tf.env().getBool('WEBGL_PACK_ARRAY_OPERATIONS') ?
        new TransposePackedProgram(x.shape, perm) :
        new TransposeProgram(x.shape, perm);
    return backend.runWebGLProgram(program, [x], x.dtype);
}

function sumImpl(x, axis, keepDims, backend) {
    var reductionIndices = axis;
    var xRank = x.shape.length;
    var origAxes = tf.util.parseAxisParam(reductionIndices, x.shape);
    var axes = origAxes;
    var permutedAxes = tf.backend_util.getAxesPermutation(axes, xRank);
    var sumInputIsTransposed = permutedAxes != null;
    var sumInput = x;
    if (sumInputIsTransposed) {
        sumInput = transposeImpl(x, permutedAxes, backend);
        axes = tf.backend_util.getInnerMostAxes(axes.length, xRank);
    }
    tf.backend_util.assertAxesAreInnerMostDims('sum', axes, xRank);
    var _a = __read(tf.backend_util.computeOutAndReduceShapes(sumInput.shape, axes), 2), sumOutShape = _a[0], reduceShape = _a[1];
    var outShape = sumOutShape;
    if (keepDims) {
        // rather than reshape at the end, set the target shape here.
        outShape = tf.backend_util.expandShapeToKeepDim(sumOutShape, origAxes);
    }
    var inSize = tf.util.sizeFromShape(reduceShape);
    var xSize = tf.util.sizeFromShape(x.shape);
    var batchSize = xSize / inSize;
    var reshapedInput = reshape({ inputs: { x: sumInput }, attrs: { shape: [batchSize, inSize] }, backend: backend });
    var outType = tf.sumOutType(x.dtype);
    var reduced = reduce(reshapedInput, outType, 'sum', backend);
    var out = reshape({ inputs: { x: reduced }, attrs: { shape: outShape }, backend: backend });
    backend.disposeIntermediateTensorInfo(reshapedInput);
    backend.disposeIntermediateTensorInfo(reduced);
    if (sumInputIsTransposed) {
        backend.disposeIntermediateTensorInfo(sumInput);
    }
    return out;
}

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
function sum(args) {
    var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
    var x = inputs.x;
    var axis = attrs.axis, keepDims = attrs.keepDims;
    return sumImpl(x, axis, keepDims, backend);
}
var sumConfig = {
    kernelName: tf.Sum,
    backendName: 'webgl',
    kernelFunc: sum
};

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
function transpose(args) {
    var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
    var x = inputs.x;
    var perm = attrs.perm;
    var webglBackend = backend;
    var xRank = x.shape.length;
    var newShape = new Array(xRank);
    for (var i = 0; i < newShape.length; i++) {
        newShape[i] = x.shape[perm[i]];
    }
    var out;
    if (webglBackend.shouldExecuteOnCPU([x])) {
        var xTexData = webglBackend.texData.get(x.dataId);
        var values = xTexData.values;
        var outValues = transposeImplCPU(values, x.shape, x.dtype, perm, newShape);
        out = webglBackend.makeTensorInfo(newShape, x.dtype);
        var outData = webglBackend.texData.get(out.dataId);
        outData.values = outValues;
    }
    else {
        out = transposeImpl(x, perm, webglBackend);
    }
    return out;
}
var transposeConfig = {
    kernelName: tf.Transpose,
    backendName: 'webgl',
    kernelFunc: transpose
};

// Empirically determined minimal shared dimension in matmul before we forward
// to a.mul(b).sum() in order to take advantage of GPU parallelism. See
// https://github.com/tensorflow/tfjs-core/pull/1379 for benchmarks.
var MATMUL_SHARED_DIM_THRESHOLD = 1000;
function batchMatMulImpl(_a) {
    var e_1, _b;
    var a = _a.a, b = _a.b, transposeA = _a.transposeA, transposeB = _a.transposeB, backend = _a.backend, _c = _a.bias, bias = _c === void 0 ? null : _c, _d = _a.preluActivationWeights, preluActivationWeights = _d === void 0 ? null : _d, _e = _a.leakyreluAlpha, leakyreluAlpha = _e === void 0 ? 0 : _e, _f = _a.activation, activation = _f === void 0 ? null : _f;
    var aRank = a.shape.length;
    var bRank = b.shape.length;
    var innerShapeA = transposeA ? a.shape[aRank - 2] : a.shape[aRank - 1];
    var innerShapeB = transposeB ? b.shape[bRank - 1] : b.shape[bRank - 2];
    var outerShapeA = transposeA ? a.shape[aRank - 1] : a.shape[aRank - 2];
    var outerShapeB = transposeB ? b.shape[bRank - 2] : b.shape[bRank - 1];
    var outerDimsA = a.shape.slice(0, -2);
    var outerDimsB = b.shape.slice(0, -2);
    var batchDimA = tf.util.sizeFromShape(outerDimsA);
    var batchDimB = tf.util.sizeFromShape(outerDimsB);
    var outShapeOuterDims = tf.broadcast_util.assertAndGetBroadcastShape(a.shape.slice(0, -2), b.shape.slice(0, -2));
    var outShape = outShapeOuterDims.concat([outerShapeA, outerShapeB]);
    tf.util.assert(innerShapeA === innerShapeB, function () { return "Error in matMul: inner shapes (".concat(innerShapeA, ") and (") +
        "".concat(innerShapeB, ") of Tensors with shapes ").concat(a.shape, " and ") +
        "".concat(b.shape, " and transposeA=").concat(transposeA) +
        " and transposeB=".concat(transposeB, " must match."); });
    var a3dShape = transposeA ?
        [batchDimA, innerShapeA, outerShapeA] :
        [batchDimA, outerShapeA, innerShapeA];
    var b3dShape = transposeB ?
        [batchDimB, outerShapeB, innerShapeB] :
        [batchDimB, innerShapeB, outerShapeB];
    // The rest of the implementation is designed to operate on rank-3 tensors
    var a3d = reshape({ inputs: { x: a }, backend: backend, attrs: { shape: a3dShape } });
    var b3d = reshape({ inputs: { x: b }, backend: backend, attrs: { shape: b3dShape } });
    var intermediates = [a3d, b3d];
    var batchDim = Math.max(batchDimA, batchDimB);
    var sharedDim = transposeA ? a3d.shape[1] : a3d.shape[2];
    var hasBias = bias != null;
    var hasPreluActivationWeights = preluActivationWeights != null;
    var hasLeakyreluAlpha = activation === 'leakyrelu';
    var fusedActivation = activation != null ?
        mapActivationToShaderProgram(activation, true) :
        null;
    var containsFusedOps = hasBias || hasPreluActivationWeights ||
        hasLeakyreluAlpha || fusedActivation != null;
    var out;
    // Since the matrices are vectors, it is faster to call mul().sum()
    // because sum() is O(sqrt(N)) due to divide-and-conquer.
    if ((outerShapeA === 1 || outerShapeB === 1) &&
        sharedDim > MATMUL_SHARED_DIM_THRESHOLD && containsFusedOps === false) {
        var aVec = a3d;
        var bVec = b3d;
        if (transposeA) {
            aVec = transpose({ inputs: { x: a3d }, backend: backend, attrs: { perm: [0, 2, 1] } });
            intermediates.push(aVec);
        }
        if (transposeB) {
            bVec = transpose({ inputs: { x: b3d }, backend: backend, attrs: { perm: [0, 2, 1] } });
            intermediates.push(bVec);
        }
        var shouldReshapeA = outerShapeB !== 1;
        var shouldReshapeB = outerShapeB === 1;
        var aVec3d = aVec;
        if (shouldReshapeA) {
            aVec3d = reshape({
                inputs: { x: aVec },
                backend: backend,
                attrs: { shape: [batchDim, sharedDim, 1] }
            });
            intermediates.push(aVec3d);
        }
        var axis = outerShapeB === 1 ? 2 : 1;
        var bVec3d = bVec;
        if (shouldReshapeB) {
            bVec3d = reshape({
                inputs: { x: bVec },
                backend: backend,
                attrs: { shape: [batchDim, 1, sharedDim] }
            });
            intermediates.push(bVec3d);
        }
        var product = multiply({ inputs: { a: aVec3d, b: bVec3d }, backend: backend });
        out = sum({ inputs: { x: product }, backend: backend, attrs: { axis: axis, keepDims: true } });
        intermediates.push(product);
    }
    else {
        var dtype = tf.upcastType(a.dtype, b.dtype);
        var program = new MatMulPackedProgram(a3dShape, b3dShape, [batchDim, outerShapeA, outerShapeB], transposeA, transposeB, hasBias, fusedActivation, hasPreluActivationWeights, hasLeakyreluAlpha);
        var inputs = [a3d, b3d];
        if (bias != null) {
            inputs.push(bias);
        }
        if (hasPreluActivationWeights) {
            inputs.push(preluActivationWeights);
        }
        if (hasLeakyreluAlpha) {
            var $leakyreluAlpha = backend.makeTensorInfo([], 'float32', tf.util.createScalarValue(leakyreluAlpha, 'float32'));
            inputs.push($leakyreluAlpha);
            intermediates.push($leakyreluAlpha);
        }
        out = backend.runWebGLProgram(program, inputs, dtype);
    }
    var outReshaped = reshape({ inputs: { x: out }, backend: backend, attrs: { shape: outShape } });
    intermediates.push(out);
    try {
        for (var intermediates_1 = __values(intermediates), intermediates_1_1 = intermediates_1.next(); !intermediates_1_1.done; intermediates_1_1 = intermediates_1.next()) {
            var i = intermediates_1_1.value;
            backend.disposeIntermediateTensorInfo(i);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (intermediates_1_1 && !intermediates_1_1.done && (_b = intermediates_1.return)) _b.call(intermediates_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return outReshaped;
}

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
function _fusedMatMul(args) {
    var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
    var a = inputs.a, b = inputs.b, bias = inputs.bias, preluActivationWeights = inputs.preluActivationWeights;
    var transposeA = attrs.transposeA, transposeB = attrs.transposeB, activation = attrs.activation, leakyreluAlpha = attrs.leakyreluAlpha;
    return batchMatMulImpl({
        a: a,
        b: b,
        transposeA: transposeA,
        transposeB: transposeB,
        backend: backend,
        bias: bias,
        preluActivationWeights: preluActivationWeights,
        leakyreluAlpha: leakyreluAlpha,
        activation: activation
    });
}
var _fusedMatMulConfig = {
    kernelName: tf._FusedMatMul,
    backendName: 'webgl',
    kernelFunc: _fusedMatMul,
};

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
var ABS = "return abs(x);";
function abs(args) {
    var inputs = args.inputs, backend = args.backend;
    var x = inputs.x;
    // TODO: handle cases when x is complex. Once the cpu implementation
    // can handle complex values, refactor to use unaryKernelFunc.
    if (backend.shouldExecuteOnCPU([x]) && x.dtype !== 'complex64') {
        var xData = backend.texData.get(x.dataId);
        var outValues = simpleAbsImplCPU(xData.values);
        return backend.makeTensorInfo(x.shape, x.dtype, outValues);
    }
    var program;
    if (tf.env().getBool('WEBGL_PACK_UNARY_OPERATIONS')) {
        program = new UnaryOpPackedProgram(x.shape, ABS);
    }
    else {
        program = new UnaryOpProgram(x.shape, ABS);
    }
    return backend.runWebGLProgram(program, [x], x.dtype);
}
var absConfig = {
    kernelName: tf.Abs,
    backendName: 'webgl',
    kernelFunc: abs
};

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
var ACOS = CHECK_NAN_SNIPPET$1 + "\n  if (abs(x) > 1.) {\n    return NAN;\n  }\n  return acos(x);\n";
var acos = unaryKernelFunc({ opSnippet: ACOS });
var acosConfig = {
    kernelName: tf.Acos,
    backendName: 'webgl',
    kernelFunc: acos,
};

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
var ACOSH = CHECK_NAN_SNIPPET$1 + "\n  if (x < 1.0) return NAN;\nreturn log(x + sqrt(x * x - 1.0));";
var acosh = unaryKernelFunc({ opSnippet: ACOSH });
var acoshConfig = {
    kernelName: tf.Acosh,
    backendName: 'webgl',
    kernelFunc: acosh,
};

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
var ADD = 'return a + b;';
var addKernelFunc = binaryKernelFunc({
    opSnippet: ADD,
    packedOpSnippet: ADD,
    supportsComplex: true,
    cpuKernelImpl: addImplCPU
});
var addConfig = {
    kernelName: tf.Add,
    backendName: 'webgl',
    kernelFunc: addKernelFunc
};

/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
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
var AddNProgram = /** @class */ (function () {
    function AddNProgram(outputShape, shapes) {
        this.outputShape = [];
        this.outputShape = outputShape;
        this.variableNames = shapes.map(function (_, i) { return "T".concat(i); });
        var snippets = [];
        // Get target elements from every input tensor.
        this.variableNames.forEach(function (variable) {
            snippets.push("float v".concat(variable, " = get").concat(variable, "AtOutCoords();"));
        });
        // Calculate the sum of all elements.
        var operation = this.variableNames
            .map(function (variable) {
            return "v".concat(variable);
        })
            .join(' + ');
        this.userCode = "\n      void main() {\n        ".concat(snippets.join('\n        '), "\n\n        float result = ").concat(operation, ";\n        setOutput(result);\n      }\n    ");
    }
    return AddNProgram;
}());

/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
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
var AddNPackedProgram = /** @class */ (function () {
    function AddNPackedProgram(outputShape, shapes) {
        this.outputShape = [];
        this.packedInputs = true;
        this.packedOutput = true;
        this.outputShape = outputShape;
        this.variableNames = shapes.map(function (_, i) { return "T".concat(i); });
        var snippets = [];
        // Get target elements from every input tensor.
        this.variableNames.forEach(function (variable) {
            snippets.push("vec4 v".concat(variable, " = get").concat(variable, "AtOutCoords();"));
        });
        // Calculate the sum of all elements.
        var operation = this.variableNames
            .map(function (variable) {
            return "v".concat(variable);
        })
            .join(' + ');
        this.userCode = "\n      void main() {\n        ".concat(snippets.join('\n        '), "\n\n        vec4 result = ").concat(operation, ";\n        setOutput(result);\n      }\n    ");
    }
    return AddNPackedProgram;
}());

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
function addN(args) {
    var inputs = args.inputs, backend = args.backend;
    var tensors = inputs;
    if (tensors.length === 1) {
        return identity({ inputs: { x: tensors[0] }, backend: backend });
    }
    // Limit the number of uploaded textures for optimization.
    if (tensors.length > tf.env().getNumber('WEBGL_MAX_TEXTURES_IN_SHADER')) {
        var midIndex = Math.floor(tensors.length / 2);
        var leftSide = addN({ inputs: tensors.slice(0, midIndex), backend: backend });
        var rightSide = addN({ inputs: tensors.slice(midIndex), backend: backend });
        return addN({ inputs: [leftSide, rightSide], backend: backend });
    }
    var dtype = tensors.map(function (t) { return t.dtype; }).reduce(function (d1, d2) { return tf.upcastType(d1, d2); });
    var shapes = tensors.map(function (t) { return t.shape; });
    // We can make sure shapes are identical in op level.
    var usePackedOp = tf.env().getBool('WEBGL_PACK');
    var program = usePackedOp ?
        new AddNPackedProgram(tensors[0].shape, shapes) :
        new AddNProgram(tensors[0].shape, shapes);
    return backend.runWebGLProgram(program, tensors, dtype);
}
var addNConfig = {
    kernelName: tf.AddN,
    backendName: 'webgl',
    kernelFunc: addN
};

function all(args) {
    var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
    var x = inputs.x;
    var axis = attrs.axis, keepDims = attrs.keepDims;
    var xRank = x.shape.length;
    var origAxes = tf.util.parseAxisParam(axis, x.shape);
    var axes = origAxes;
    var permutedAxes = tf.backend_util.getAxesPermutation(axes, xRank);
    var permutedX = x;
    if (permutedAxes != null) {
        permutedX = transpose({ inputs: { x: x }, backend: backend, attrs: { perm: permutedAxes } });
        axes = tf.backend_util.getInnerMostAxes(axes.length, xRank);
    }
    tf.backend_util.assertAxesAreInnerMostDims('all', axes, xRank);
    var _a = __read(tf.backend_util.computeOutAndReduceShapes(permutedX.shape, axes), 2), outShape = _a[0], reduceShape = _a[1];
    var inSize = tf.util.sizeFromShape(reduceShape);
    var a2D = reshape({ inputs: { x: permutedX }, backend: backend, attrs: { shape: [-1, inSize] } });
    var reduced = reduce(a2D, a2D.dtype, 'all', backend);
    var res;
    if (keepDims) {
        var newShape = tf.backend_util.expandShapeToKeepDim(outShape, origAxes);
        res = reshape({ inputs: { x: reduced }, backend: backend, attrs: { shape: newShape } });
    }
    else {
        res = reshape({ inputs: { x: reduced }, backend: backend, attrs: { shape: outShape } });
    }
    backend.disposeIntermediateTensorInfo(a2D);
    backend.disposeIntermediateTensorInfo(reduced);
    if (permutedAxes != null) {
        backend.disposeIntermediateTensorInfo(permutedX);
    }
    return res;
}
var allConfig = {
    kernelName: tf.All,
    backendName: 'webgl',
    kernelFunc: all
};

function any(args) {
    var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
    var x = inputs.x;
    var axis = attrs.axis, keepDims = attrs.keepDims;
    var xRank = x.shape.length;
    var origAxes = tf.util.parseAxisParam(axis, x.shape);
    var axes = origAxes;
    var permutedAxes = tf.backend_util.getAxesPermutation(axes, xRank);
    var permutedX = x;
    if (permutedAxes != null) {
        permutedX = transpose({ inputs: { x: x }, backend: backend, attrs: { perm: permutedAxes } });
        axes = tf.backend_util.getInnerMostAxes(axes.length, xRank);
    }
    tf.backend_util.assertAxesAreInnerMostDims('any', axes, xRank);
    var _a = __read(tf.backend_util.computeOutAndReduceShapes(permutedX.shape, axes), 2), outShape = _a[0], reduceShape = _a[1];
    var inSize = tf.util.sizeFromShape(reduceShape);
    var a2D = reshape({ inputs: { x: permutedX }, backend: backend, attrs: { shape: [-1, inSize] } });
    var reduced = reduce(a2D, a2D.dtype, 'any', backend);
    var res;
    if (keepDims) {
        var newShape = tf.backend_util.expandShapeToKeepDim(outShape, origAxes);
        res = reshape({ inputs: { x: reduced }, backend: backend, attrs: { shape: newShape } });
    }
    else {
        res = reshape({ inputs: { x: reduced }, backend: backend, attrs: { shape: outShape } });
    }
    backend.disposeIntermediateTensorInfo(a2D);
    backend.disposeIntermediateTensorInfo(reduced);
    if (permutedAxes != null) {
        backend.disposeIntermediateTensorInfo(permutedX);
    }
    return res;
}
var anyConfig = {
    kernelName: tf.Any,
    backendName: 'webgl',
    kernelFunc: any
};

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
var ArgMinMaxProgram = /** @class */ (function () {
    function ArgMinMaxProgram(reduceInfo, op, firstPass) {
        this.variableNames = ['A'];
        var windowSize = reduceInfo.windowSize, batchSize = reduceInfo.batchSize, outSize = reduceInfo.outSize;
        if (!firstPass) {
            this.variableNames.push('bestIndicesA');
        }
        this.outputShape = [batchSize, outSize];
        var compOp = (op === 'max') ? '>' : '<';
        var indexSnippet = firstPass ?
            'inOffset + i;' :
            'round(getBestIndicesA(batch, inOffset + i));';
        this.userCode = "\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n        int outIdx = coords[1];\n        int inOffset = outIdx * ".concat(windowSize, ";\n\n        int bestIndex = inOffset;\n        float bestValue = getA(batch, bestIndex);\n\n        for (int i = 0; i < ").concat(windowSize, "; i++) {\n          int inIdx = ").concat(indexSnippet, ";\n          float candidate = getA(batch, inIdx);\n          if (candidate ").concat(compOp, " bestValue) {\n            bestValue = candidate;\n            bestIndex = inIdx;\n          }\n        }\n        setOutput(float(bestIndex));\n      }\n    ");
    }
    return ArgMinMaxProgram;
}());

/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
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
var ArgMinMaxPackedProgram = /** @class */ (function () {
    function ArgMinMaxPackedProgram(shape, windowSize, op, firstPass) {
        this.variableNames = ['A'];
        this.packedInputs = true;
        this.packedOutput = true;
        tf.util.assert(shape.length > 2, function () { return "Packed arg".concat(op.charAt(0).toUpperCase() +
            op.slice(1), " supports only inputs with rank above 2."); });
        var inSize = shape[shape.length - 1];
        var outSize = Math.ceil(inSize / windowSize);
        this.outputShape = shape.slice(0, -1);
        if (outSize > 1) {
            this.outputShape.push(outSize);
        }
        if (!firstPass) {
            this.variableNames.push('bestIndicesA');
        }
        var outShape = this.outputShape;
        var rank = outShape.length;
        var dtype = getCoordsDataType(rank);
        var coords = getChannels('coords', rank);
        var sourceLocSetup;
        var sourceRank;
        if (outSize === 1) {
            sourceRank = rank + 1;
            var sourceLocDType = getCoordsDataType(sourceRank);
            sourceLocSetup = "\n        ".concat(sourceLocDType, " sourceLocR = ").concat(sourceLocDType, "(").concat(coords.join(), ", 0);\n        ++").concat(coords[rank - 1], ";\n        ").concat(sourceLocDType, " sourceLocG = ").concat(sourceLocDType, "(").concat(coords.join(), ", 0);\n        ++").concat(coords[rank - 2], ";\n        ").concat(sourceLocDType, " sourceLocA = ").concat(sourceLocDType, "(").concat(coords.join(), ", 0);\n        --").concat(coords[rank - 1], ";\n        ").concat(sourceLocDType, " sourceLocB = ").concat(sourceLocDType, "(").concat(coords.join(), ", 0);\n        --").concat(coords[rank - 2], ";");
        }
        else {
            sourceRank = rank;
            sourceLocSetup = "\n        ".concat(dtype, " sourceLocR = coords;\n        ++").concat(coords[rank - 1], ";\n        ").concat(dtype, " sourceLocG = coords;\n        ++").concat(coords[rank - 2], ";\n        ").concat(dtype, " sourceLocA = coords;\n        --").concat(coords[rank - 1], ";\n        ").concat(dtype, " sourceLocB = coords;\n        --").concat(coords[rank - 2], ";");
        }
        var channels = ['x', 'y', 'z', 'w', 'u', 'v'].slice(0, sourceRank);
        var inChannel = '.' + channels[sourceRank - 1]; // e.g. ".b" for rank 3.
        var intChannels = channels.map(function (x) { return 'int ' + x; });
        var srcRCoords = getChannels('sourceLocR', sourceRank - 1).concat('inIdx.r');
        var srcGCoords = getChannels('sourceLocG', sourceRank - 1).concat('inIdx.g');
        var srcBCoords = getChannels('sourceLocB', sourceRank - 1).concat('inIdx.b');
        var srcACoords = getChannels('sourceLocA', sourceRank - 1).concat('inIdx.a');
        var compOp = (op === 'max') ? 'greaterThan' : 'lessThan';
        var fetchCandidateIdx = firstPass ? '' : "\n          inIdx = round(vec4(getBestIndicesAChannel(".concat(srcRCoords.join(), "),\n                             getBestIndicesAChannel(").concat(srcGCoords.join(), "),\n                             getBestIndicesAChannel(").concat(srcBCoords.join(), "),\n                             getBestIndicesAChannel(").concat(srcACoords.join(), ")));");
        var fetchValue = "vec4(\n            getAChannel(".concat(srcRCoords.join(), "),\n            hasNextCol ? getAChannel(").concat(srcGCoords.join(), ") : 0.,\n            hasNextRow ? getAChannel(").concat(srcBCoords.join(), ") : 0.,\n            hasNextRow && hasNextCol ? getAChannel(").concat(srcACoords.join(), ") : 0.)");
        var getBestIndicesAChannelSnippet = firstPass ? '' : "\n      float getBestIndicesAChannel(".concat(intChannels.join(), ") {\n        return getChannel(getBestIndicesA(").concat(channels.join(), "),\n                                          vec2(").concat(channels.slice(-2).join(), "));\n      }");
        this.userCode = "\n      float getAChannel(".concat(intChannels.join(), ") {\n        return getChannel(getA(").concat(channels.join(), "),\n                               vec2(").concat(channels.slice(-2).join(), "));\n      }\n      ").concat(getBestIndicesAChannelSnippet, "\n      void main() {\n        ").concat(dtype, " coords = getOutputCoords();\n        bool hasNextCol = ").concat(coords[rank - 1], " < ").concat(outShape[rank - 1] - 1, ";\n        bool hasNextRow = ").concat(coords[rank - 2], " < ").concat(outShape[rank - 2] - 1, ";\n        ").concat(sourceLocSetup, "\n        ivec4 srcIdx = ivec4(sourceLocR").concat(inChannel, ", sourceLocG").concat(inChannel, ",\n          sourceLocB").concat(inChannel, ", sourceLocA").concat(inChannel, ") * ").concat(windowSize, ";\n        ivec4 inIdx = srcIdx;\n        vec4 bestIndex = vec4(inIdx);\n        vec4 bestValue = ").concat(fetchValue, ";\n\n        for (int i = 0; i < ").concat(windowSize, "; i++) {\n          inIdx = srcIdx;\n          ").concat(fetchCandidateIdx, "\n          vec4 candidate = ").concat(fetchValue, ";\n          bvec4 nan = isnan(candidate);\n          bvec4 replace = bvec4(\n            vec4(").concat(compOp, "(candidate, bestValue)) * (vec4(1.0) - vec4(nan)));\n\n          bestValue = vec4(replace.x  ? candidate.x : bestValue.x,\n                           replace.y  ? candidate.y : bestValue.y,\n                           replace.z  ? candidate.z : bestValue.z,\n                           replace.w  ? candidate.w : bestValue.w);\n          bestIndex = mix(bestIndex, vec4(inIdx), vec4(replace));\n          srcIdx++;\n        }\n        setOutput(bestIndex);\n      }\n    ");
    }
    return ArgMinMaxPackedProgram;
}());

function argReduce(backend, x, reduceType, bestIndicesA) {
    if (bestIndicesA === void 0) { bestIndicesA = null; }
    var batchSize = x.shape[0];
    var inSize = x.shape[1];
    if (bestIndicesA != null) {
        batchSize = bestIndicesA.shape[0];
        inSize = bestIndicesA.shape[1];
    }
    var windowSize = tf.backend_util.computeOptimalWindowSize(inSize);
    var reduceInfo = { windowSize: windowSize, inSize: inSize, batchSize: batchSize, outSize: Math.ceil(inSize / windowSize) };
    var program = new ArgMinMaxProgram(reduceInfo, reduceType, bestIndicesA == null);
    var inputs = [x];
    if (bestIndicesA != null) {
        inputs.push(bestIndicesA);
    }
    var output = backend.runWebGLProgram(program, inputs, 'int32');
    // No need to run another GPGPU program.
    if (output.shape[1] === 1) {
        return output;
    }
    var result = argReduce(backend, x, reduceType, output);
    backend.disposeIntermediateTensorInfo(output);
    return result;
}
function argReducePacked(backend, x, reduceType, bestIndicesA) {
    if (bestIndicesA === void 0) { bestIndicesA = null; }
    var inShape = bestIndicesA != null ? bestIndicesA.shape : x.shape;
    var inSize = inShape[inShape.length - 1];
    var windowSize = tf.backend_util.computeOptimalWindowSize(inSize);
    var program = new ArgMinMaxPackedProgram(inShape, windowSize, reduceType, bestIndicesA == null);
    var inputs = bestIndicesA == null ? [x] : [x, bestIndicesA];
    var output = backend.runWebGLProgram(program, inputs, 'int32');
    if (output.shape.length === x.shape.length) {
        var result = argReducePacked(backend, x, reduceType, output);
        backend.disposeIntermediateTensorInfo(output);
        return result;
    }
    return output;
}
function argMinMaxReduce(backend, x, axis, reduceType) {
    var axes = [axis];
    tf.backend_util.assertAxesAreInnerMostDims('arg' + reduceType.charAt(0).toUpperCase() + reduceType.slice(1), axes, x.shape.length);
    if (!tf.env().getBool('WEBGL_PACK_REDUCE') || x.shape.length <= 2) {
        var intermediateTensorInfos = [];
        // Eagerly unpack x input since it is passed in to all the shaders which
        // require unpacked inputs.
        var xtexData = backend.texData.get(x.dataId);
        var xIsPacked = xtexData !== null && xtexData.isPacked;
        var xUnPacked = x;
        if (xIsPacked) {
            xUnPacked = backend.unpackTensor(x);
            intermediateTensorInfos.push(xUnPacked);
        }
        var _a = __read(tf.backend_util.computeOutAndReduceShapes(xUnPacked.shape, axes), 2), outShape = _a[0], reduceShape = _a[1];
        var inSize = tf.util.sizeFromShape(reduceShape);
        var a2D = reshape({ inputs: { x: xUnPacked }, backend: backend, attrs: { shape: [-1, inSize] } });
        intermediateTensorInfos.push(a2D);
        var reduced = argReduce(backend, a2D, reduceType);
        intermediateTensorInfos.push(reduced);
        var reshaped = reshape({ inputs: { x: reduced }, backend: backend, attrs: { shape: outShape } });
        intermediateTensorInfos.forEach(function (t) { return backend.disposeIntermediateTensorInfo(t); });
        return reshaped;
    }
    return argReducePacked(backend, x, reduceType);
}

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
function argMax(args) {
    var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
    var x = inputs.x;
    var axis = attrs.axis;
    var axes = tf.util.parseAxisParam(axis, x.shape);
    var permutedAxes = tf.backend_util.getAxesPermutation(axes, x.shape.length);
    var $x = x;
    var intermediateTensorInfos = [];
    if (permutedAxes != null) {
        $x = transpose({ inputs: { x: x }, backend: backend, attrs: { perm: permutedAxes } });
        intermediateTensorInfos.push($x);
        axes = tf.backend_util.getInnerMostAxes(axes.length, $x.shape.length);
    }
    tf.backend_util.assertAxesAreInnerMostDims('argMax', [axes[0]], $x.shape.length);
    var out = argMinMaxReduce(backend, $x, axes[0], 'max');
    intermediateTensorInfos.forEach(function (t) { return backend.disposeIntermediateTensorInfo(t); });
    return out;
}
var argMaxConfig = {
    kernelName: tf.ArgMax,
    backendName: 'webgl',
    kernelFunc: argMax
};

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
function argMin(args) {
    var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
    var x = inputs.x;
    var axis = attrs.axis;
    var axes = tf.util.parseAxisParam(axis, x.shape);
    var permutedAxes = tf.backend_util.getAxesPermutation(axes, x.shape.length);
    var $x = x;
    var intermediateTensorInfos = [];
    if (permutedAxes != null) {
        $x = transpose({ inputs: { x: x }, backend: backend, attrs: { perm: permutedAxes } });
        intermediateTensorInfos.push($x);
        axes = tf.backend_util.getInnerMostAxes(axes.length, $x.shape.length);
    }
    tf.backend_util.assertAxesAreInnerMostDims('argMin', [axes[0]], $x.shape.length);
    var out = argMinMaxReduce(backend, $x, axes[0], 'min');
    intermediateTensorInfos.forEach(function (t) { return backend.disposeIntermediateTensorInfo(t); });
    return out;
}
var argMinConfig = {
    kernelName: tf.ArgMin,
    backendName: 'webgl',
    kernelFunc: argMin
};

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
var ASIN = CHECK_NAN_SNIPPET$1 + "\n  if (abs(x) > 1.) {\n    return NAN;\n  }\n  return asin(x);\n";
var asin = unaryKernelFunc({ opSnippet: ASIN });
var asinConfig = {
    kernelName: tf.Asin,
    backendName: 'webgl',
    kernelFunc: asin,
};

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
var ASINH = CHECK_NAN_SNIPPET$1 + "return log(x + sqrt(x * x + 1.0));";
var asinh = unaryKernelFunc({ opSnippet: ASINH });
var asinhConfig = {
    kernelName: tf.Asinh,
    backendName: 'webgl',
    kernelFunc: asinh,
};

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
var ATAN = CHECK_NAN_SNIPPET$1 + "\n  return atan(x);\n";
var atan = unaryKernelFunc({ opSnippet: ATAN });
var atanConfig = {
    kernelName: tf.Atan,
    backendName: 'webgl',
    kernelFunc: atan,
};

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
var ATAN2 = CHECK_NAN_SNIPPET + "\n  return atan(a, b);\n";
var ATAN2_PACKED = "\n  vec4 result = atan(a, b);\n  bvec4 isNaNA = isnan(a);\n  bvec4 isNaNB = isnan(b);\n  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);\n  " +
    CHECK_NAN_SNIPPET_PACKED + "\n  return result;\n";
var atan2 = binaryKernelFunc({ opSnippet: ATAN2, packedOpSnippet: ATAN2_PACKED });
var atan2Config = {
    kernelName: tf.Atan2,
    backendName: 'webgl',
    kernelFunc: atan2,
};

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
var ATANH = CHECK_NAN_SNIPPET$1 + "\n  if ((x < -1.0) || (x > 1.0)) return NAN;\nreturn (log(1.0 + x) - log(1.0 - x)) / 2.0;";
var atanh = unaryKernelFunc({ opSnippet: ATANH });
var atanhConfig = {
    kernelName: tf.Atanh,
    backendName: 'webgl',
    kernelFunc: atanh,
};

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
var Pool2DProgram = /** @class */ (function () {
    function Pool2DProgram(convInfo, poolType, computePositions, flattenPositions, includeBatchInIndex) {
        if (flattenPositions === void 0) { flattenPositions = false; }
        if (includeBatchInIndex === void 0) { includeBatchInIndex = false; }
        this.variableNames = ['x'];
        if (poolType === 'avg' && computePositions) {
            throw new Error('Cannot compute positions for average pool.');
        }
        var filterWidth = convInfo.filterWidth;
        var strideHeight = convInfo.strideHeight;
        var strideWidth = convInfo.strideWidth;
        var dilationHeight = convInfo.dilationHeight;
        var dilationWidth = convInfo.dilationWidth;
        var effectiveFilterHeight = convInfo.effectiveFilterHeight;
        var effectiveFilterWidth = convInfo.effectiveFilterWidth;
        var padTop = convInfo.padInfo.top;
        var padLeft = convInfo.padInfo.left;
        this.outputShape = convInfo.outShape;
        var isAvgPool = poolType === 'avg';
        var batchFlattenPositionStr = "((batch  * ".concat(convInfo.inHeight, " + xR) * ").concat(convInfo.inWidth, " + xC) * ").concat(convInfo.inChannels, " + d");
        var flattenPositionStr = "(xR * ".concat(convInfo.inWidth, " + xC) * ").concat(convInfo.inChannels, " + d");
        var initializationValue = '0.0';
        if (!isAvgPool) {
            // WebGL on Firefox Linux can't compile 1/0 so we do 1/eps.
            initializationValue = '-1.0 / 1e-20';
        }
        if (computePositions) {
            var compareOp_1 = '>=';
            this.userCode = "\n        const ivec2 strides = ivec2(".concat(strideHeight, ", ").concat(strideWidth, ");\n        const ivec2 pads = ivec2(").concat(padTop, ", ").concat(padLeft, ");\n\n        void main() {\n          ivec4 coords = getOutputCoords();\n          int batch = coords[0];\n          int d = coords[3];\n\n          ivec2 xRCCorner = coords.yz * strides - pads;\n          int xRCorner = xRCCorner.x;\n          int xCCorner = xRCCorner.y;\n\n          // max/min x(?, ?, d) to get y(yR, yC, d).\n          // ? = to be determined\n          float minMaxValue = 0.0;\n          float minMaxValueFound = 0.0;\n          int minMaxPosition = 0;\n          float avgValue = 0.0;\n\n          for (int wR = 0; wR < ").concat(effectiveFilterHeight, ";\n              wR += ").concat(dilationHeight, ") {\n            int xR = xRCorner + wR;\n\n            if (xR < 0 || xR >= ").concat(convInfo.inHeight, ") {\n              continue;\n            }\n\n            for (int wC = 0; wC < ").concat(effectiveFilterWidth, ";\n                wC += ").concat(dilationWidth, ") {\n              int xC = xCCorner + wC;\n\n              if (xC < 0 || xC >= ").concat(convInfo.inWidth, ") {\n                continue;\n              }\n\n              float value = getX(batch, xR, xC, d);\n\n              // If a min / max value has already been found, use it. If not,\n              // use the current value.\n              float currMinMaxValue = mix(\n                  value, minMaxValue, minMaxValueFound);\n              if (value ").concat(compareOp_1, " currMinMaxValue) {\n                minMaxValue = value;\n                minMaxValueFound = 1.0;\n                minMaxPosition = ").concat(flattenPositions ? (includeBatchInIndex ? batchFlattenPositionStr :
                flattenPositionStr) :
                "wR * ".concat(effectiveFilterWidth, " + wC"), ";\n              }\n            }\n          }\n          setOutput(float(minMaxPosition));\n        }\n      ");
            return;
        }
        var compareOp = 'max';
        var returnValue = "".concat(poolType, "(").concat(poolType, "(").concat(poolType, "(") +
            'minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])';
        if (poolType === 'avg') {
            returnValue = "avgValue / max(count, 1.0)";
        }
        var filterWidthNearestVec4 = Math.floor(filterWidth / 4) * 4;
        var filterWidthVec4Remainder = filterWidth % 4;
        var updateSnippet = "\n      if (".concat(isAvgPool, ") {\n        avgValue += dot(values, ones);\n      } else {\n        minMaxValue = ").concat(compareOp, "(values, minMaxValue);\n      }\n    ");
        this.userCode = "\n      const ivec2 strides = ivec2(".concat(strideHeight, ", ").concat(strideWidth, ");\n      const ivec2 pads = ivec2(").concat(padTop, ", ").concat(padLeft, ");\n      const float initializationValue = ").concat(initializationValue, ";\n      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);\n\n      float count = 0.0;\n\n      float getValue(int batch, int xR, int xC, int d) {\n        if (xC < 0 || xC >= ").concat(convInfo.inWidth, ") {\n          return initializationValue;\n        }\n        count += 1.0;\n        return getX(batch, xR, xC, d);\n      }\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords[0];\n        int d = coords[3];\n\n        ivec2 xRCCorner = coords.yz * strides - pads;\n        int xRCorner = xRCCorner.x;\n        int xCCorner = xRCCorner.y;\n\n        // max/min x(?, ?, d) to get y(yR, yC, d).\n        // ? = to be determined\n        vec4 minMaxValue = vec4(").concat(initializationValue, ");\n        float avgValue = 0.0;\n        count = 0.0;\n\n        for (int wR = 0; wR < ").concat(effectiveFilterHeight, ";\n            wR += ").concat(dilationHeight, ") {\n          int xR = xRCorner + wR;\n\n          if (xR < 0 || xR >= ").concat(convInfo.inHeight, ") {\n            continue;\n          }\n\n          for (int wC = 0; wC < ").concat(filterWidthNearestVec4, "; wC += 4) {\n            int xC = xCCorner + wC * ").concat(dilationWidth, ";\n\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              getValue(batch, xR, xC + ").concat(dilationWidth, ", d),\n              getValue(batch, xR, xC + 2 * ").concat(dilationWidth, ", d),\n              getValue(batch, xR, xC + 3 * ").concat(dilationWidth, ", d)\n            );\n\n            ").concat(updateSnippet, "\n          }\n\n          int xC = xCCorner + ").concat(filterWidthNearestVec4, ";\n          if (").concat(filterWidthVec4Remainder === 1, ") {\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              initializationValue,\n              initializationValue,\n              initializationValue\n            );\n\n            ").concat(updateSnippet, "\n          } else if (").concat(filterWidthVec4Remainder === 2, ") {\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              getValue(batch, xR, xC + ").concat(dilationWidth, ", d),\n              initializationValue,\n              initializationValue\n            );\n\n            ").concat(updateSnippet, "\n          } else if (").concat(filterWidthVec4Remainder === 3, ") {\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              getValue(batch, xR, xC + ").concat(dilationWidth, ", d),\n              getValue(batch, xR, xC + 2 * ").concat(dilationWidth, ", d),\n              initializationValue\n            );\n\n            ").concat(updateSnippet, "\n          }\n        }\n        setOutput(").concat(returnValue, ");\n      }\n    ");
    }
    return Pool2DProgram;
}());
var Pool3DProgram = /** @class */ (function () {
    function Pool3DProgram(convInfo, poolType, computePositions, flattenPositions, includeBatchInIndex) {
        if (flattenPositions === void 0) { flattenPositions = false; }
        if (includeBatchInIndex === void 0) { includeBatchInIndex = false; }
        this.variableNames = ['x'];
        if (poolType === 'avg' && computePositions) {
            throw new Error('Cannot compute positions for average pool.');
        }
        var filterWidth = convInfo.filterWidth;
        var strideDepth = convInfo.strideDepth;
        var strideHeight = convInfo.strideHeight;
        var strideWidth = convInfo.strideWidth;
        var dilationDepth = convInfo.dilationDepth;
        var dilationHeight = convInfo.dilationHeight;
        var dilationWidth = convInfo.dilationWidth;
        var effectiveFilterDepth = convInfo.effectiveFilterDepth;
        var effectiveFilterHeight = convInfo.effectiveFilterHeight;
        var effectiveFilterWidth = convInfo.effectiveFilterWidth;
        var padFront = convInfo.padInfo.front;
        var padTop = convInfo.padInfo.top;
        var padLeft = convInfo.padInfo.left;
        this.outputShape = convInfo.outShape;
        var isAvgPool = poolType === 'avg';
        var initializationValue = '0.0';
        if (!isAvgPool) {
            // WebGL on Firefox Linux can't compile 1/0 so we do 1/eps.
            initializationValue = '-1.0 / 1e-20';
        }
        if (computePositions) {
            var compareOp_2 = '>=';
            this.userCode = "\n        const ivec3 strides =\n            ivec3(".concat(strideDepth, ", ").concat(strideHeight, ", ").concat(strideWidth, ");\n        const ivec3 pads = ivec3(").concat(padFront, ", ").concat(padTop, ", ").concat(padLeft, ");\n\n        void main() {\n          ivec5 coords = getOutputCoords();\n          int batch = coords.x;\n          int ch = coords.u;\n\n          ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;\n          int xDCorner = xCorner.x;\n          int xRCorner = xCorner.y;\n          int xCCorner = xCorner.z;\n\n          // max/min x(?, ?, ?, ch) to get y(yD, yR, yC, ch).\n          // ? = to be determined\n          float minMaxValue = 0.0;\n          float minMaxValueFound = 0.0;\n          int minMaxPosition = 0;\n\n          for (int wD = 0; wD < ").concat(effectiveFilterDepth, ";\n              wD += ").concat(dilationDepth, ") {\n            int xD = xDCorner + wD;\n\n            if (xD < 0 || xD >= ").concat(convInfo.inDepth, ") {\n              continue;\n            }\n\n            for (int wR = 0; wR < ").concat(effectiveFilterHeight, ";\n                wR += ").concat(dilationHeight, ") {\n              int xR = xRCorner + wR;\n\n              if (xR < 0 || xR >= ").concat(convInfo.inHeight, ") {\n                continue;\n              }\n\n              for (int wC = 0; wC < ").concat(effectiveFilterWidth, ";\n                  wC += ").concat(dilationWidth, ") {\n                int xC = xCCorner + wC;\n\n                if (xC < 0 || xC >= ").concat(convInfo.inWidth, ") {\n                  continue;\n                }\n\n                float value = getX(batch, xD, xR, xC, ch);\n\n                // If a min / max value has already been found, use it. If not,\n                // use the current value.\n                float currMinMaxValue = mix(\n                    value, minMaxValue, minMaxValueFound);\n                if (value ").concat(compareOp_2, " currMinMaxValue) {\n                  minMaxValue = value;\n                  minMaxValueFound = 1.0;\n                  minMaxPosition = ").concat(flattenPositions ?
                (includeBatchInIndex ?
                    "(((batch * ".concat(convInfo.inDepth, " + xD) * ").concat(convInfo.inHeight, " + xR) * ").concat(convInfo.inWidth, " + xC) * ").concat(convInfo.inChannels, " + ch") :
                    "((xD * ".concat(convInfo.inHeight, " + xR) * ").concat(convInfo.inWidth, " + xC) * ").concat(convInfo.inChannels, " + ch")) :
                "wD * ".concat(effectiveFilterHeight, " * ").concat(effectiveFilterWidth, " +\n                      wR * ").concat(effectiveFilterWidth, " + wC"), ";\n                }\n              }\n            }\n          }\n          setOutput(float(minMaxPosition));\n        }\n      ");
            return;
        }
        var compareOp = 'max';
        var returnValue = "".concat(poolType, "(").concat(poolType, "(").concat(poolType, "(") +
            'minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])';
        if (poolType === 'avg') {
            // Use `max(count, 1.0)` instead of `count` in case count === 0.0.
            // If count === 0.0, `avgValue` is always 0.0 and we change `count`'s
            // value to avoid dividing zero.
            returnValue = "avgValue / max(count, 1.0)";
        }
        var filterWidthNearestVec4 = Math.floor(filterWidth / 4) * 4;
        var filterWidthVec4Remainder = filterWidth % 4;
        var updateSnippet = "\n      if (".concat(isAvgPool, ") {\n        avgValue += dot(values, ones);\n      } else {\n        minMaxValue = ").concat(compareOp, "(values, minMaxValue);\n      }\n    ");
        this.userCode = "\n      const ivec3 strides =\n        ivec3(".concat(strideDepth, ", ").concat(strideHeight, ", ").concat(strideWidth, ");\n      const ivec3 pads = ivec3(").concat(padFront, ", ").concat(padTop, ", ").concat(padLeft, ");\n      const float initializationValue = ").concat(initializationValue, ";\n      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);\n\n      float count = 0.0;\n\n      float getValue(int batch, int xD, int xR, int xC, int ch) {\n        if (xC < 0 || xC >= ").concat(convInfo.inWidth, ") {\n          return initializationValue;\n        }\n        count += 1.0;\n        return getX(batch, xD, xR, xC, ch);\n      }\n\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int batch = coords.x;\n        int ch = coords.u;\n\n        ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;\n        int xDCorner = xCorner.x;\n        int xRCorner = xCorner.y;\n        int xCCorner = xCorner.z;\n\n        // max/min x(?, ?, ?, d) to get y(yD, yR, yC, ch).\n        // ? = to be determined\n        vec4 minMaxValue = vec4(").concat(initializationValue, ");\n        float avgValue = 0.0;\n        count = 0.0;\n\n        for (int wD = 0; wD < ").concat(effectiveFilterDepth, ";\n            wD += ").concat(dilationDepth, ") {\n          int xD = xDCorner + wD;\n\n          if (xD < 0 || xD >= ").concat(convInfo.inDepth, ") {\n            continue;\n          }\n\n          for (int wR = 0; wR < ").concat(effectiveFilterHeight, ";\n            wR += ").concat(dilationHeight, ") {\n            int xR = xRCorner + wR;\n\n            if (xR < 0 || xR >= ").concat(convInfo.inHeight, ") {\n              continue;\n            }\n\n            for (int wC = 0; wC < ").concat(filterWidthNearestVec4, "; wC += 4) {\n              int xC = xCCorner + wC * ").concat(dilationWidth, ";\n\n              vec4 values = vec4(\n                getValue(batch, xD, xR, xC, ch),\n                getValue(batch, xD, xR, xC + ").concat(dilationWidth, ", ch),\n                getValue(batch, xD, xR, xC + 2 * ").concat(dilationWidth, ", ch),\n                getValue(batch, xD, xR, xC + 3 * ").concat(dilationWidth, ", ch)\n              );\n\n              ").concat(updateSnippet, "\n            }\n\n            int xC = xCCorner + ").concat(filterWidthNearestVec4, ";\n            if (").concat(filterWidthVec4Remainder === 1, ") {\n              vec4 values = vec4(\n                getValue(batch, xD, xR, xC, ch),\n                initializationValue,\n                initializationValue,\n                initializationValue\n              );\n\n              ").concat(updateSnippet, "\n            } else if (").concat(filterWidthVec4Remainder === 2, ") {\n              vec4 values = vec4(\n                getValue(batch, xD, xR, xC, ch),\n                getValue(batch, xD, xR, xC + ").concat(dilationWidth, ", ch),\n                initializationValue,\n                initializationValue\n              );\n\n              ").concat(updateSnippet, "\n            } else if (").concat(filterWidthVec4Remainder === 3, ") {\n              vec4 values = vec4(\n                getValue(batch, xD, xR, xC, ch),\n                getValue(batch, xD, xR, xC + ").concat(dilationWidth, ", ch),\n                getValue(batch, xD, xR, xC + 2 * ").concat(dilationWidth, ", ch),\n                initializationValue\n              );\n\n              ").concat(updateSnippet, "\n            }\n          }\n        }\n        setOutput(").concat(returnValue, ");\n      }\n    ");
    }
    return Pool3DProgram;
}());

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
function avgPool(args) {
    var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
    var x = inputs.x;
    assertNotComplex(x, 'avgPool');
    var filterSize = attrs.filterSize, strides = attrs.strides, pad = attrs.pad, dimRoundingMode = attrs.dimRoundingMode;
    var dilations = 1;
    tf.util.assert(tf.backend_util.eitherStridesOrDilationsAreOne(strides, dilations), function () { return 'Error in avgPool: Either strides or dilations must be 1. ' +
        "Got strides ".concat(strides, " and dilations '").concat(dilations, "'"); });
    var convInfo = tf.backend_util.computePool2DInfo(x.shape, filterSize, strides, dilations, pad, dimRoundingMode);
    if (convInfo.filterWidth === 1 && convInfo.filterHeight === 1 &&
        tf.util.arraysEqual(convInfo.inShape, convInfo.outShape)) {
        return identity({ inputs: { x: x }, backend: backend });
    }
    var avgPoolProgram = new Pool2DProgram(convInfo, 'avg', false);
    return backend.runWebGLProgram(avgPoolProgram, [x], 'float32');
}
var avgPoolConfig = {
    kernelName: tf.AvgPool,
    backendName: 'webgl',
    kernelFunc: avgPool
};

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
function avgPool3D(args) {
    var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
    var x = inputs.x;
    var filterSize = attrs.filterSize, strides = attrs.strides, pad = attrs.pad, dimRoundingMode = attrs.dimRoundingMode, dataFormat = attrs.dataFormat;
    var dilations = [1, 1, 1];
    var convInfo = tf.backend_util.computePool3DInfo(x.shape, filterSize, strides, dilations, pad, dimRoundingMode, dataFormat);
    var avgPoolProgram = new Pool3DProgram(convInfo, 'avg', false);
    return backend.runWebGLProgram(avgPoolProgram, [x], 'float32');
}
var avgPool3DConfig = {
    kernelName: tf.AvgPool3D,
    backendName: 'webgl',
    kernelFunc: avgPool3D
};

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
var AvgPool2DBackpropProgram = /** @class */ (function () {
    function AvgPool2DBackpropProgram(convInfo) {
        this.variableNames = ['dy'];
        this.outputShape = convInfo.inShape;
        var filterHeight = convInfo.filterHeight;
        var filterWidth = convInfo.filterWidth;
        var strideHeight = convInfo.strideHeight;
        var strideWidth = convInfo.strideWidth;
        var dilationHeight = convInfo.dilationHeight;
        var dilationWidth = convInfo.dilationWidth;
        var effectiveFilterHeight = convInfo.effectiveFilterHeight;
        var effectiveFilterWidth = convInfo.effectiveFilterWidth;
        var padTop = effectiveFilterHeight - 1 - convInfo.padInfo.top;
        var padLeft = effectiveFilterWidth - 1 - convInfo.padInfo.left;
        var avgMultiplier = 1 / (filterHeight * filterWidth);
        this.userCode = "\n      const ivec2 pads = ivec2(".concat(padTop, ", ").concat(padLeft, ");\n      const float avgMultiplier = float(").concat(avgMultiplier, ");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n\n        ivec2 dyRCCorner = coords.yz - pads;\n        int dyRCorner = dyRCCorner.x;\n        int dyCCorner = dyRCCorner.y;\n\n        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        for (int wR = 0; wR < ").concat(effectiveFilterHeight, ";\n            wR += ").concat(dilationHeight, ") {\n          float dyR = float(dyRCorner + wR) / ").concat(strideHeight, ".0;\n\n          if (dyR < 0.0 || dyR >= ").concat(convInfo.outHeight, ".0 || fract(dyR) > 0.0) {\n            continue;\n          }\n          int idyR = int(dyR);\n\n          for (int wC = 0; wC < ").concat(effectiveFilterWidth, ";\n            wC+= ").concat(dilationWidth, ") {\n            float dyC = float(dyCCorner + wC) / ").concat(strideWidth, ".0;\n\n            if (dyC < 0.0 || dyC >= ").concat(convInfo.outWidth, ".0 ||\n                fract(dyC) > 0.0) {\n              continue;\n            }\n            int idyC = int(dyC);\n\n            float dyValue = getDy(b, idyR, idyC, d);\n\n            dotProd += dyValue * avgMultiplier;\n          }\n        }\n        setOutput(dotProd);\n      }\n    ");
    }
    return AvgPool2DBackpropProgram;
}());
var AvgPool3DBackpropProgram = /** @class */ (function () {
    function AvgPool3DBackpropProgram(convInfo) {
        this.variableNames = ['dy'];
        this.outputShape = convInfo.inShape;
        var filterDepth = convInfo.filterDepth;
        var filterHeight = convInfo.filterHeight;
        var filterWidth = convInfo.filterWidth;
        var strideDepth = convInfo.strideDepth;
        var strideHeight = convInfo.strideHeight;
        var strideWidth = convInfo.strideWidth;
        var dilationDepth = convInfo.dilationDepth;
        var dilationHeight = convInfo.dilationHeight;
        var dilationWidth = convInfo.dilationWidth;
        var effectiveFilterDepth = convInfo.effectiveFilterDepth;
        var effectiveFilterHeight = convInfo.effectiveFilterHeight;
        var effectiveFilterWidth = convInfo.effectiveFilterWidth;
        var padFront = effectiveFilterDepth - 1 - convInfo.padInfo.front;
        var padTop = effectiveFilterHeight - 1 - convInfo.padInfo.top;
        var padLeft = effectiveFilterWidth - 1 - convInfo.padInfo.left;
        var avgMultiplier = 1 / (filterDepth * filterHeight * filterWidth);
        this.userCode = "\n      const ivec3 pads = ivec3(".concat(padFront, ", ").concat(padTop, ", ").concat(padLeft, ");\n      const float avgMultiplier = float(").concat(avgMultiplier, ");\n\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int batch = coords.x;\n        int ch = coords.u;\n\n        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;\n        int dyDCorner = dyCorner.x;\n        int dyRCorner = dyCorner.y;\n        int dyCCorner = dyCorner.z;\n\n        // Convolve dy(?, ?, ?, d) with pos mask(:, :, :, ch) to get\n        // dx(xD, xR, xC, ch).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n\n        for (int wD = 0; wD < ").concat(effectiveFilterDepth, ";\n            wD += ").concat(dilationDepth, ") {\n          float dyD = float(dyDCorner + wD) / ").concat(strideDepth, ".0;\n\n          if (dyD < 0.0 || dyD >= ").concat(convInfo.outDepth, ".0 || fract(dyD) > 0.0) {\n            continue;\n          }\n          int idyD = int(dyD);\n\n          for (int wR = 0; wR < ").concat(effectiveFilterHeight, ";\n              wR += ").concat(dilationHeight, ") {\n            float dyR = float(dyRCorner + wR) / ").concat(strideHeight, ".0;\n\n            if (dyR < 0.0 || dyR >= ").concat(convInfo.outHeight, ".0 ||\n                fract(dyR) > 0.0) {\n              continue;\n            }\n            int idyR = int(dyR);\n\n            for (int wC = 0; wC < ").concat(effectiveFilterWidth, ";\n                wC += ").concat(dilationWidth, ") {\n              float dyC = float(dyCCorner + wC) / ").concat(strideWidth, ".0;\n\n              if (dyC < 0.0 || dyC >= ").concat(convInfo.outWidth, ".0 ||\n                  fract(dyC) > 0.0) {\n                continue;\n              }\n              int idyC = int(dyC);\n\n              float dyValue = getDy(batch, idyD, idyR, idyC, ch);\n\n              dotProd += dyValue * avgMultiplier;\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ");
    }
    return AvgPool3DBackpropProgram;
}());

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
function avgPool3DGrad(args) {
    var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
    var dy = inputs.dy, input = inputs.input;
    var x = input;
    var filterSize = attrs.filterSize, strides = attrs.strides, pad = attrs.pad, dimRoundingMode = attrs.dimRoundingMode;
    var dilations = [1, 1, 1];
    var convInfo = tf.backend_util.computePool3DInfo(x.shape, filterSize, strides, dilations, pad, dimRoundingMode);
    var avgPoolBackpropProgram = new AvgPool3DBackpropProgram(convInfo);
    return backend.runWebGLProgram(avgPoolBackpropProgram, [dy], x.dtype);
}
var avgPool3DGradConfig = {
    kernelName: tf.AvgPool3DGrad,
    backendName: 'webgl',
    kernelFunc: avgPool3DGrad
};

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
function avgPoolGrad(args) {
    var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
    var dy = inputs.dy, input = inputs.input;
    var x = input;
    assertNotComplex([dy, input], 'avgPoolGrad');
    var filterSize = attrs.filterSize, strides = attrs.strides, pad = attrs.pad;
    var convInfo = tf.backend_util.computePool2DInfo(x.shape, filterSize, strides, 1 /* dilations */, pad);
    var avgPoolBackpropProgram = new AvgPool2DBackpropProgram(convInfo);
    return backend.runWebGLProgram(avgPoolBackpropProgram, [dy], x.dtype);
}
var avgPoolGradConfig = {
    kernelName: tf.AvgPoolGrad,
    backendName: 'webgl',
    kernelFunc: avgPoolGrad
};

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
function batchMatMul(args) {
    var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
    var a = inputs.a, b = inputs.b;
    var transposeA = attrs.transposeA, transposeB = attrs.transposeB;
    return batchMatMulImpl({ a: a, b: b, transposeA: transposeA, transposeB: transposeB, backend: backend });
}
var batchMatMulConfig = {
    kernelName: tf.BatchMatMul,
    backendName: 'webgl',
    kernelFunc: batchMatMul,
};

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
var BatchNormProgram = /** @class */ (function () {
    function BatchNormProgram(xShape, meanShape, varianceShape, offsetShape, scaleShape, varianceEpsilon) {
        this.outputShape = [];
        this.variableNames = ['x', 'mean', 'variance'];
        tf.backend_util.assertAndGetBroadcastShape(xShape, meanShape);
        tf.backend_util.assertAndGetBroadcastShape(xShape, varianceShape);
        var offsetSnippet = '0.0';
        if (offsetShape != null) {
            tf.backend_util.assertAndGetBroadcastShape(xShape, offsetShape);
            this.variableNames.push('offset');
            offsetSnippet = 'getOffsetAtOutCoords()';
        }
        var scaleSnippet = '1.0';
        if (scaleShape != null) {
            tf.backend_util.assertAndGetBroadcastShape(xShape, scaleShape);
            this.variableNames.push('scale');
            scaleSnippet = 'getScaleAtOutCoords()';
        }
        this.outputShape = xShape;
        this.userCode = "\n      void main() {\n        float x = getXAtOutCoords();\n        float mean = getMeanAtOutCoords();\n        float variance = getVarianceAtOutCoords();\n        float offset = ".concat(offsetSnippet, ";\n        float scale = ").concat(scaleSnippet, ";\n        float inv = scale * inversesqrt(variance + float(").concat(varianceEpsilon, "));\n        setOutput(dot(vec3(x, -mean, offset), vec3(inv, inv, 1)));\n      }\n    ");
    }
    return BatchNormProgram;
}());

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
var BatchNormPackedProgram = /** @class */ (function () {
    function BatchNormPackedProgram(xShape, meanShape, varianceShape, offsetShape, scaleShape, varianceEpsilon) {
        this.packedInputs = true;
        this.packedOutput = true;
        this.variableNames = ['x', 'mean', 'variance'];
        tf.backend_util.assertAndGetBroadcastShape(xShape, meanShape);
        tf.backend_util.assertAndGetBroadcastShape(xShape, varianceShape);
        var offsetSnippet = 'vec4(0.0)';
        if (offsetShape != null) {
            tf.backend_util.assertAndGetBroadcastShape(xShape, offsetShape);
            this.variableNames.push('offset');
            offsetSnippet = 'getOffsetAtOutCoords()';
        }
        var scaleSnippet = 'vec4(1.0)';
        if (scaleShape != null) {
            tf.backend_util.assertAndGetBroadcastShape(xShape, scaleShape);
            this.variableNames.push('scale');
            scaleSnippet = 'getScaleAtOutCoords()';
        }
        this.outputShape = xShape;
        this.userCode = "\n      void main() {\n        vec4 offset = ".concat(offsetSnippet, ";\n        vec4 scale = ").concat(scaleSnippet, ";\n\n        vec4 x = getXAtOutCoords();\n        vec4 mean = getMeanAtOutCoords();\n        vec4 variance = getVarianceAtOutCoords();\n\n        vec4 inv = scale * inversesqrt(variance + vec4(").concat(varianceEpsilon, "));\n\n        setOutput((x - mean) * inv + offset);\n      }\n    ");
    }
    return BatchNormPackedProgram;
}());

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
var batchNorm = function (_a) {
    var inputs = _a.inputs, backend = _a.backend, attrs = _a.attrs;
    var x = inputs.x, mean = inputs.mean, variance = inputs.variance, offset = inputs.offset, scale = inputs.scale;
    tf.util.assert(mean.shape.length === variance.shape.length, function () { return 'Batch normalization gradient requires mean and variance to have ' +
        'equal ranks.'; });
    tf.util.assert(offset == null || mean.shape.length === offset.shape.length, function () { return 'Batch normalization gradient requires mean and offset to have ' +
        'equal ranks.'; });
    tf.util.assert(scale == null || mean.shape.length === scale.shape.length, function () { return 'Batch normalization gradient requires mean and scale to have ' +
        'equal ranks.'; });
    var varianceEpsilon = attrs.varianceEpsilon;
    if (varianceEpsilon == null) {
        varianceEpsilon = 0.001;
    }
    var finalInputs = [x, mean, variance];
    var offsetShape = null;
    if (offset != null) {
        offsetShape = offset.shape;
        finalInputs.push(offset);
    }
    var scaleShape = null;
    if (scale != null) {
        scaleShape = scale.shape;
        finalInputs.push(scale);
    }
    var program = tf.env().getBool('WEBGL_PACK_NORMALIZATION') ?
        new BatchNormPackedProgram(x.shape, mean.shape, variance.shape, offsetShape, scaleShape, varianceEpsilon) :
        new BatchNormProgram(x.shape, mean.shape, variance.shape, offsetShape, scaleShape, varianceEpsilon);
    var output = backend.runWebGLProgram(program, finalInputs, finalInputs[0].dtype);
    return output;
};
var batchNormConfig = {
    kernelName: tf.FusedBatchNorm,
    backendName: 'webgl',
    kernelFunc: batchNorm,
};

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
var SliceProgram = /** @class */ (function () {
    function SliceProgram(destSize) {
        this.variableNames = ['source'];
        this.outputShape = destSize;
        this.rank = destSize.length;
        var dtype = getCoordsDataType(this.rank);
        this.customUniforms = [{ name: 'start', arrayIndex: this.rank, type: 'int' }];
        var sourceCoords = getCoords$1(this.rank);
        var body;
        var coordSum = destSize.map(function (_, i) {
            return "sourceLoc.".concat(coords[i], " = start[").concat(i, "] + coords.").concat(coords[i], ";");
        });
        body = "\n        ".concat(dtype, " sourceLoc;\n        ").concat(dtype, " coords = getOutputCoords();\n        ").concat(coordSum.join('\n'), "\n      ");
        this.userCode = "\n      void main() {\n        ".concat(body, "\n        setOutput(getSource(").concat(sourceCoords, "));\n      }\n    ");
    }
    return SliceProgram;
}());
var coords = ['x', 'y', 'z', 'w', 'u', 'v'];
function getCoords$1(rank) {
    if (rank === 1) {
        return 'sourceLoc';
    }
    else if (rank <= 6) {
        return coords.slice(0, rank).map(function (x) { return 'sourceLoc.' + x; }).join(',');
    }
    else {
        throw Error("Slicing for rank ".concat(rank, " is not yet supported"));
    }
}

/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
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
var SlicePackedProgram = /** @class */ (function () {
    function SlicePackedProgram(destSize) {
        this.variableNames = ['source'];
        this.packedInputs = true;
        this.packedOutput = true;
        this.outputShape = destSize;
        this.rank = destSize.length;
        this.customUniforms = [{ name: 'start', arrayIndex: this.rank, type: 'int' }];
        var dtype = getCoordsDataType(this.rank);
        var coords = getChannels('coords', this.rank);
        var sourceLoc = getChannels('sourceLoc', this.rank);
        var innerDims = this.rank === 1 ? 'sourceLoc' : "vec2(".concat(sourceLoc.slice(-2).join(), ")");
        var getChannel = "getChannel(getSource(".concat(sourceLoc.join(), "), ").concat(innerDims, ")");
        var upperRow = "\n      result.x = ".concat(getChannel, ";\n      if (++").concat(coords[this.rank - 1], " < ").concat(destSize[this.rank - 1], ") {\n        ++").concat(sourceLoc[this.rank - 1], ";\n        result.y = ").concat(getChannel, ";\n        --").concat(sourceLoc[this.rank - 1], ";\n      }\n    ");
        var lowerRow = this.rank === 1 ? '' : "\n      --".concat(coords[this.rank - 1], ";\n      if (++").concat(coords[this.rank - 2], " < ").concat(destSize[this.rank - 2], ") {\n        ++").concat(sourceLoc[this.rank - 2], ";\n        result.z = ").concat(getChannel, ";\n        if (++").concat(coords[this.rank - 1], " < ").concat(destSize[this.rank - 1], ") {\n          ++").concat(sourceLoc[this.rank - 1], ";\n          result.w = ").concat(getChannel, ";\n        }\n      }\n    ");
        var sourceLocSetup = this.rank <= 4 ?
            "sourceLoc = coords +\n            ".concat(dtype, "(").concat(destSize.map(function (_, i) { return "start[".concat(i, "]"); }).join(), ");") :
            destSize.map(function (_, i) { return "".concat(sourceLoc[i], " = ").concat(coords[i], " + start[").concat(i, "];"); })
                .join('\n');
        this.userCode = "\n      void main() {\n        ".concat(dtype, " coords = getOutputCoords();\n        ").concat(dtype, " sourceLoc;\n        ").concat(sourceLocSetup, "\n        vec4 result = vec4(0.);\n        ").concat(upperRow, "\n        ").concat(lowerRow, "\n        setOutput(result);\n      }\n    ");
    }
    return SlicePackedProgram;
}());

function shallowSlice(x, begin, size, backend) {
    var xTexData = backend.texData.get(x.dataId);
    var t = backend.makeTensorInfo(size, x.dtype);
    var newTexData = backend.texData.get(t.dataId);
    // Copy texture data from the original tensor.
    Object.assign(newTexData, xTexData);
    newTexData.refCount = 1;
    newTexData.shape = size;
    newTexData.dtype = x.dtype;
    var flatOffset = tf.slice_util.computeFlatOffset(begin, tf.util.computeStrides(x.shape));
    if (xTexData.slice) {
        // We are slicing an already sliced tensor, so we have to accumulate
        // the offset.
        flatOffset += xTexData.slice.flatOffset;
    }
    newTexData.slice = {
        flatOffset: flatOffset,
        // Point to the original dataId, which is used to do ref counting.
        origDataId: xTexData.slice && xTexData.slice.origDataId || x.dataId
    };
    // Increase the ref count for that data bucket.
    var refCount = backend.dataRefCount.get(newTexData.slice.origDataId) || 1;
    backend.dataRefCount.set(newTexData.slice.origDataId, refCount + 1);
    return t;
}
function slice(args) {
    var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
    var x = inputs.x;
    var begin = attrs.begin, size = attrs.size;
    var _a = __read(tf.slice_util.parseSliceParams(x, begin, size), 2), $begin = _a[0], $size = _a[1];
    tf.slice_util.assertParamsValid(x, $begin, $size);
    if (tf.util.sizeFromShape($size) === 0) {
        return backend.makeTensorInfo($size, x.dtype, []);
    }
    // Run on cpu if dtype is string. For string, the backend represents it
    // as Uint8Array[], where each Uint8Array is a character. Given that the
    // computation is only on the outer array, uploading the whole data onto
    // gpu is wasteful. Also, currently webgl doesn't have a design to
    // upload and retrieve Uint8Array[] between cpu and gpu. Therefore, we
    // just run the kernel on cpu if dtype is string.
    if (backend.shouldExecuteOnCPU([x]) || x.dtype === 'string') {
        var xTexData = backend.texData.get(x.dataId);
        var outValues = sliceImplCPU(xTexData.values, $begin, $size, x.shape, x.dtype);
        return backend.makeTensorInfo($size, x.dtype, outValues);
    }
    var isPacked = backend.texData.get(x.dataId).isPacked;
    var isContinous = tf.slice_util.isSliceContinous(x.shape, $begin, $size);
    if (isPacked || !isContinous) {
        var program = tf.env().getBool('WEBGL_PACK_ARRAY_OPERATIONS') ?
            new SlicePackedProgram($size) :
            new SliceProgram($size);
        var customValues = [$begin];
        return backend.runWebGLProgram(program, [x], x.dtype, customValues);
    }
    backend.uploadToGPU(x.dataId);
    return shallowSlice(x, $begin, $size, backend);
}
var sliceConfig = {
    kernelName: tf.Slice,
    backendName: 'webgl',
    kernelFunc: slice
};

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
var batchToSpaceND = function (args) {
    var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
    var x = inputs.x;
    var blockShape = attrs.blockShape, crops = attrs.crops;
    tf.util.assert(x.shape.length <= 4, function () { return 'batchToSpaceND for rank > 4 with a WebGL backend not ' +
        'implemented yet'; });
    var prod = blockShape.reduce(function (a, b) { return a * b; });
    var reshaped = tf.backend_util.getReshaped(x.shape, blockShape, prod);
    var permuted = tf.backend_util.getPermuted(reshaped.length, blockShape.length);
    var reshapedPermuted = tf.backend_util.getReshapedPermuted(x.shape, blockShape, prod);
    var sliceBeginCoords = tf.backend_util.getSliceBeginCoords(crops, blockShape.length);
    var sliceSize = tf.backend_util.getSliceSize(reshapedPermuted, crops, blockShape.length);
    var toDispose = [];
    var reshapedIntermediate = reshape({ inputs: { x: x }, backend: backend, attrs: { shape: reshaped } });
    var transposedIntermediate = transpose({ inputs: { x: reshapedIntermediate }, backend: backend, attrs: { perm: permuted } });
    var reshapedIntermediate2 = reshape({
        inputs: { x: transposedIntermediate },
        backend: backend,
        attrs: { shape: reshapedPermuted }
    });
    var sliced = slice({
        inputs: { x: reshapedIntermediate2 },
        backend: backend,
        attrs: { begin: sliceBeginCoords, size: sliceSize }
    });
    toDispose.push(reshapedIntermediate);
    toDispose.push(transposedIntermediate);
    toDispose.push(reshapedIntermediate2);
    toDispose.forEach(function (t) { return backend.disposeIntermediateTensorInfo(t); });
    return sliced;
};
var batchToSpaceNDConfig = {
    kernelName: tf.BatchToSpaceND,
    backendName: 'webgl',
    kernelFunc: batchToSpaceND
};

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
function bincount(args) {
    var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
    var x = inputs.x, weights = inputs.weights;
    var size = attrs.size;
    var xVals = backend.readSync(x.dataId);
    var weightsVals = backend.readSync(weights.dataId);
    var outVals = bincountImplCPU(xVals, weightsVals, weights.dtype, weights.shape, size);
    return backend.makeTensorInfo([size], weights.dtype, outVals);
}
var bincountConfig = {
    kernelName: tf.Bincount,
    backendName: 'webgl',
    kernelFunc: bincount
};

var BITWISEAND = "\n  int r = int(a.r) & int(b.r);\n  int g = int(a.g) & int(b.g);\n  int rb = int(a.b) & int(b.b);\n  int ra = int(a.a) & int(b.a);\n  return vec4(r, g, rb, ra);\n";
var BITWISEAND_UNPACKED = "\n  return float(int(a.r) & int(b.r));\n";
function bitwiseAnd(args) {
    var inputs = args.inputs, backend = args.backend;
    var a = inputs.a, b = inputs.b;
    var shouldUsePackedProgram = tf.env().getBool('WEBGL_PACK_BINARY_OPERATIONS');
    var versionNumber = tf.env().getNumber('WEBGL_VERSION');
    // The type of a and b are ensured to be `int32` in core, therefore no need to
    // consider other type situations.
    if ((backend.shouldExecuteOnCPU([a, b])) || versionNumber === 1) {
        var aVals = backend.texData.get(a.dataId).values;
        var bVals = backend.texData.get(b.dataId).values;
        var _a = __read(bitwiseAndImplCPU(a.shape, b.shape, aVals, bVals, a.dtype), 2), outValues = _a[0], outShape = _a[1];
        var out = backend.makeTensorInfo(outShape, a.dtype);
        var outData = backend.texData.get(out.dataId);
        outData.values = outValues;
        return out;
    }
    var program;
    if (shouldUsePackedProgram) {
        program = new BinaryOpPackedProgram(BITWISEAND, a.shape, b.shape, false);
    }
    else {
        program = new BinaryOpProgram(BITWISEAND_UNPACKED, a.shape, b.shape);
    }
    return backend.runWebGLProgram(program, [a, b], a.dtype);
}
var bitwiseAndConfig = {
    kernelName: tf.BitwiseAnd,
    backendName: 'webgl',
    kernelFunc: bitwiseAnd
};

/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
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
function broadcastArgs(args) {
    var inputs = args.inputs, backend = args.backend;
    var s0 = inputs.s0, s1 = inputs.s1;
    var s0Vals = backend.readSync(s0.dataId);
    var s1Vals = backend.readSync(s1.dataId);
    var broadcastShape = tf.backend_util.assertAndGetBroadcastShape(Array.from(s0Vals), Array.from(s1Vals));
    return backend.makeTensorInfo([broadcastShape.length], 'int32', Int32Array.from(broadcastShape));
}
var broadcastArgsConfig = {
    kernelName: tf.BroadcastArgs,
    backendName: 'webgl',
    kernelFunc: broadcastArgs
};

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
var NOT_EQUAL = "return float(a != b);";
var notEqual = binaryKernelFunc({ opSnippet: NOT_EQUAL, cpuKernelImpl: notEqualImplCPU, dtype: 'bool' });
var notEqualConfig = {
    kernelName: tf.NotEqual,
    backendName: 'webgl',
    kernelFunc: notEqual,
};

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
function real(args) {
    var inputs = args.inputs, backend = args.backend;
    var input = inputs.input;
    var inputData = backend.texData.get(input.dataId);
    return identity({ inputs: { x: inputData.complexTensorInfos.real }, backend: backend });
}
var realConfig = {
    kernelName: tf.Real,
    backendName: 'webgl',
    kernelFunc: real
};

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
var TO_INT = "return float(int(x));";
function int(input, backend) {
    var program = new UnaryOpProgram(input.shape, TO_INT);
    var output = backend.runWebGLProgram(program, [input], 'int32');
    return { dataId: output.dataId, shape: output.shape, dtype: output.dtype };
}

function cast(args) {
    var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
    var x = inputs.x;
    var dtype = attrs.dtype;
    // Casting to complex64.
    if (dtype === 'complex64') {
        if (x.dtype === 'complex64') {
            return identity({ inputs: { x: x }, backend: backend });
        }
        // TODO(annxingyuan): Import kernel function once zeros is modularized.
        var zerosTensor = tf__namespace.zeros(x.shape);
        var floatX = cast({ inputs: { x: x }, backend: backend, attrs: { dtype: 'float32' } });
        var result = complex({ inputs: { real: floatX, imag: zerosTensor }, backend: backend });
        zerosTensor.dispose();
        backend.disposeIntermediateTensorInfo(floatX);
        return result;
    }
    // Casting from complex64
    if (x.dtype === 'complex64') {
        var realPart = real({ inputs: { input: x }, backend: backend });
        var result = cast({ inputs: { x: realPart }, backend: backend, attrs: { dtype: dtype } });
        backend.disposeIntermediateTensorInfo(realPart);
        return result;
    }
    if (!tf.util.hasEncodingLoss(x.dtype, dtype)) {
        // We don't change the underlying data, since we cast to higher
        // precision.
        var result = identity({ inputs: { x: x }, backend: backend });
        return { dataId: result.dataId, shape: result.shape, dtype: dtype };
    }
    if (backend.shouldExecuteOnCPU([x])) {
        var values = backend.texData.get(x.dataId).values;
        var _a = __read(castImplCPU(values, x.shape, x.dtype, dtype), 3), resultShape = _a[0], resultType = _a[1], resultData = _a[2];
        return backend.makeTensorInfo(resultShape, resultType, resultData);
    }
    if (dtype === 'int32') {
        return int(x, backend);
    }
    if (dtype === 'bool') {
        var zerosTensorInfo = backend.makeTensorInfo([], 'bool', tf.util.getTypedArrayFromDType('bool', 1));
        var binaryInputs = { a: x, b: zerosTensorInfo };
        var result = notEqual({ inputs: binaryInputs, backend: backend });
        backend.disposeIntermediateTensorInfo(zerosTensorInfo);
        return result;
    }
    throw new Error("Error in Cast: failed to cast ".concat(x.dtype, " to ").concat(dtype));
}
var castConfig = {
    kernelName: tf.Cast,
    backendName: 'webgl',
    kernelFunc: cast
};

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
var CEIL = "return ceil(x);";
var ceil = unaryKernelFunc({ opSnippet: CEIL, packedOpSnippet: CEIL, cpuKernelImpl: ceilImplCPU });
var ceilConfig = {
    kernelName: tf.Ceil,
    backendName: 'webgl',
    kernelFunc: ceil
};

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
var ClipProgram = /** @class */ (function () {
    function ClipProgram(aShape) {
        this.variableNames = ['A'];
        this.customUniforms = [
            { name: 'minVal', type: 'float' },
            { name: 'maxVal', type: 'float' }
        ];
        this.outputShape = aShape;
        this.userCode = "\n\n      void main() {\n        float value = getAAtOutCoords();\n        if (isnan(value)) {\n          setOutput(value);\n          return;\n        }\n\n        setOutput(clamp(value, minVal, maxVal));\n      }\n    ";
    }
    return ClipProgram;
}());

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
var ClipPackedProgram = /** @class */ (function () {
    function ClipPackedProgram(aShape) {
        this.variableNames = ['A'];
        this.packedInputs = true;
        this.packedOutput = true;
        this.customUniforms = [
            { name: 'minVal', type: 'float' },
            { name: 'maxVal', type: 'float' }
        ];
        this.outputShape = aShape;
        this.userCode = "\n      void main() {\n        vec4 value = getAAtOutCoords();\n\n        if (any(isnan(value))) {\n          setOutput(value);\n          return;\n        }\n\n        setOutput(clamp(value, vec4(minVal), vec4(maxVal)));\n      }\n    ";
    }
    return ClipPackedProgram;
}());

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
function clipByValue(args) {
    var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
    var x = inputs.x;
    var clipValueMin = attrs.clipValueMin, clipValueMax = attrs.clipValueMax;
    var program;
    if (tf.env().getBool('WEBGL_PACK_CLIP')) {
        program = new ClipPackedProgram(x.shape);
    }
    else {
        program = new ClipProgram(x.shape);
    }
    var customValues = [[clipValueMin], [clipValueMax]];
    return backend.runWebGLProgram(program, [x], x.dtype, customValues);
}
var clipByValueConfig = {
    kernelName: tf.ClipByValue,
    backendName: 'webgl',
    kernelFunc: clipByValue
};

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
var ComplexAbsProgram = /** @class */ (function () {
    function ComplexAbsProgram(shape) {
        this.variableNames = ['real', 'imag'];
        this.outputShape = shape;
        this.userCode = "\n      void main() {\n        float re = abs(getRealAtOutCoords());\n        float im = abs(getImagAtOutCoords());\n        float mx = max(re, im);\n\n        // sadly the length function in glsl is not underflow-safe\n        // (at least not on Intel GPUs). So the safe solution is\n        // to ensure underflow-safety in all cases.\n        setOutput(\n          mx == 0.0 ? 0.0 : mx * length(vec2(1, min(re, im)/mx))\n        );\n      }\n    ";
    }
    return ComplexAbsProgram;
}());

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
// Returns a TensorInfo with the complex shape and the dataId of the
// underlying part. We need to do this because a reshaped complex tensor is
// not reflected in its parts.
function makeComplexComponentTensorInfo(complexTensor, complexPart) {
    return {
        dataId: complexPart.dataId,
        dtype: complexPart.dtype,
        shape: complexTensor.shape
    };
}
function complexAbs(args) {
    var inputs = args.inputs, backend = args.backend;
    var x = inputs.x;
    var xData = backend.texData.get(x.dataId);
    var program = new ComplexAbsProgram(x.shape);
    var programInputs = [
        makeComplexComponentTensorInfo(x, xData.complexTensorInfos.real),
        makeComplexComponentTensorInfo(x, xData.complexTensorInfos.imag),
    ];
    return backend.runWebGLProgram(program, programInputs, programInputs[0].dtype);
}
var complexAbsConfig = {
    kernelName: tf.ComplexAbs,
    backendName: 'webgl',
    kernelFunc: complexAbs
};

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
var ConcatProgram = /** @class */ (function () {
    // Concats 2d tensors along axis=1. See comments in MathBackendWebGL.concat().
    function ConcatProgram(shapes) {
        this.outputShape = [];
        this.outputShape = tf.backend_util.computeOutShape(shapes, 1 /* axis */);
        this.variableNames = shapes.map(function (_, i) { return "T".concat(i); });
        var offsets = new Array(shapes.length - 1);
        offsets[0] = shapes[0][1];
        for (var i = 1; i < offsets.length; i++) {
            offsets[i] = offsets[i - 1] + shapes[i][1];
        }
        var snippets = ["if (yC < ".concat(offsets[0], ") setOutput(getT0(yR, yC));")];
        for (var i = 1; i < offsets.length; i++) {
            var shift = offsets[i - 1];
            snippets.push("else if (yC < ".concat(offsets[i], ") ") +
                "setOutput(getT".concat(i, "(yR, yC-").concat(shift, "));"));
        }
        var lastIndex = offsets.length;
        var lastShift = offsets[offsets.length - 1];
        snippets.push("else setOutput(getT".concat(lastIndex, "(yR, yC-").concat(lastShift, "));"));
        this.userCode = "\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int yR = coords.x;\n        int yC = coords.y;\n\n        ".concat(snippets.join('\n        '), "\n      }\n    ");
    }
    return ConcatProgram;
}());

/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
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
var ConcatPackedProgram = /** @class */ (function () {
    function ConcatPackedProgram(shapes, axis) {
        this.packedInputs = true;
        this.packedOutput = true;
        this.outputShape = [];
        this.outputShape = tf.backend_util.computeOutShape(shapes, axis);
        var shape = this.outputShape;
        var rank = shape.length;
        var dtype = getCoordsDataType(rank);
        var coords = getChannels('coords', rank);
        var channels = ['x', 'y', 'z', 'w', 'u', 'v'].slice(0, rank);
        this.variableNames = shapes.map(function (_, i) { return "T".concat(i); });
        var offsets = new Array(shapes.length - 1);
        offsets[0] = shapes[0][axis];
        for (var i = 1; i < offsets.length; i++) {
            offsets[i] = offsets[i - 1] + shapes[i][axis];
        }
        var channel = channels[axis];
        var lastChannels = channels.slice(-2);
        var allChannels = channels.join();
        var getValueSnippet = "if (".concat(channel, " < ").concat(offsets[0], ") {\n        return getChannel(\n            getT0(").concat(allChannels, "), vec2(").concat(lastChannels.join(), "));\n        }");
        for (var i = 1; i < offsets.length; i++) {
            var shift_1 = offsets[i - 1];
            // Note: the >= comparison below may seem unnecessary given the check
            // above but is needed to workaround branch execution issues on some
            // devices. It makes all the conditions exclusive without relying on
            // execution order.
            getValueSnippet += "\n        if (".concat(channel, " < ").concat(offsets[i], "  && ").concat(channel, " >= ").concat(offsets[i - 1], ") {\n          return getChannel(\n            getT").concat(i, "(").concat(shiftedChannels(channels, channel, shift_1), "),\n            vec2(").concat(shiftedChannels(lastChannels, channel, shift_1), "));\n        }");
        }
        var lastIndex = offsets.length;
        var shift = offsets[offsets.length - 1];
        getValueSnippet += "\n        return getChannel(\n          getT".concat(lastIndex, "(").concat(shiftedChannels(channels, channel, shift), "),\n          vec2(").concat(shiftedChannels(lastChannels, channel, shift), "));");
        this.userCode = "\n      float getValue(".concat(channels.map(function (x) { return 'int ' + x; }), ") {\n        ").concat(getValueSnippet, "\n      }\n\n      void main() {\n        ").concat(dtype, " coords = getOutputCoords();\n        vec4 result = vec4(getValue(").concat(coords, "), 0., 0., 0.);\n\n        ").concat(coords[rank - 1], " = ").concat(coords[rank - 1], " + 1;\n        if (").concat(coords[rank - 1], " < ").concat(shape[rank - 1], ") {\n          result.g = getValue(").concat(coords, ");\n        }\n\n        ").concat(coords[rank - 2], " = ").concat(coords[rank - 2], " + 1;\n        if (").concat(coords[rank - 2], " < ").concat(shape[rank - 2], ") {\n          result.a = getValue(").concat(coords, ");\n        }\n\n        ").concat(coords[rank - 1], " = ").concat(coords[rank - 1], " - 1;\n        if (").concat(coords[rank - 2], " < ").concat(shape[rank - 2], " &&\n            ").concat(coords[rank - 1], " < ").concat(shape[rank - 1], ") {\n          result.b = getValue(").concat(coords, ");\n        }\n        setOutput(result);\n      }\n    ");
    }
    return ConcatPackedProgram;
}());
/**
 * Return an expression for coordinates into a vector where a given channel
 * will be offset by [shift].
 *
 * @param channels the channels to consider
 * @param channel the channel we want shifted
 * @param shift  the amount to subtract from the channel.
 *
 * @returns a string of the form 'x, y-[shift], z' where any one channel can
 * have the shift applied.
 */
function shiftedChannels(channels, channel, shift) {
    var channelIdx = channels.indexOf(channel);
    var res = channels.map(function (c, idx) {
        if (idx === channelIdx) {
            return "".concat(c, " - ").concat(shift);
        }
        else {
            return c;
        }
    });
    return res.join();
}

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
function imag(args) {
    var inputs = args.inputs, backend = args.backend;
    var input = inputs.input;
    var inputData = backend.texData.get(input.dataId);
    return identity({ inputs: { x: inputData.complexTensorInfos.imag }, backend: backend });
}
var imagConfig = {
    kernelName: tf.Imag,
    backendName: 'webgl',
    kernelFunc: imag
};

function concatImpl(inputs, axis, backend) {
    var e_1, _a;
    var dtype = inputs[0].dtype;
    if (dtype === 'complex64') {
        var reals = inputs.map(function (t) { return real({ inputs: { input: t }, backend: backend }); });
        var imags = inputs.map(function (t) { return imag({ inputs: { input: t }, backend: backend }); });
        var realConcated = concatImpl(reals, axis, backend);
        var imagConcated = concatImpl(imags, axis, backend);
        var result_1 = complex({ inputs: { real: realConcated, imag: imagConcated }, backend: backend });
        reals.forEach(function (r) { return backend.disposeIntermediateTensorInfo(r); });
        imags.forEach(function (i) { return backend.disposeIntermediateTensorInfo(i); });
        backend.disposeIntermediateTensorInfo(realConcated);
        backend.disposeIntermediateTensorInfo(imagConcated);
        return result_1;
    }
    var runOnCpu = backend.shouldExecuteOnCPU(inputs);
    // Run on cpu if dtype is string. For string, the backend represents it
    // as Uint8Array[], where each Uint8Array is a character. Given that the
    // computation is only on the outer array, uploading the whole data onto
    // gpu is wasteful. Also, currently webgl doesn't have a design to
    // upload and retrieve Uint8Array[] between cpu and gpu. Therefore, we
    // just run the kernel on cpu if dtype is string.
    if (dtype === 'string') {
        runOnCpu = true;
    }
    if (runOnCpu) {
        // Any concat of n-dimensional tensors across any axis can be reduced to
        // a concatenation of two-dimensional tensors across the axis 1 by first
        // partitioning the axes of the original tensors into those less than the
        // axis to be concatenated and the rest. Then reshape the tensors
        // into a two-dimensional tensor by collapsing these two sets of axes and
        // concatenate the resulting matrices across the axis 1, finally reshaping
        // the result to have the proper shape.
        var tensors2D_1 = inputs.map(function (t) {
            var innerSize = tf.util.sizeFromShape(t.shape.slice(axis));
            var shape = [-1, innerSize];
            return reshape({ inputs: { x: t }, backend: backend, attrs: { shape: shape } });
        });
        var inputsValShapes = tensors2D_1.map(function (t) {
            return { vals: backend.readSync(t.dataId), shape: t.shape };
        });
        // Concats 2d tensors along axis=1.
        var outShape_1 = tf.backend_util.computeOutShape(tensors2D_1.map(function (t) { return t.shape; }), 1 /* axis */);
        var simplyConcat = tensors2D_1[0].shape[0] === 1;
        var outVals = concatImplCPU(inputsValShapes, outShape_1, dtype, simplyConcat);
        var finalOutShape = tf.backend_util.computeOutShape(inputs.map(function (t) { return t.shape; }), axis);
        var outInfo = backend.makeTensorInfo(finalOutShape, dtype, outVals);
        tensors2D_1.forEach(function (t) { return backend.disposeIntermediateTensorInfo(t); });
        return outInfo;
    }
    // Keep only non-empty tensors (ignore tensors with 0 in their shape).
    var $inputs = inputs.filter(function (t) { return tf.util.sizeFromShape(t.shape) > 0; });
    var shouldPack = tf.env().getBool('WEBGL_PACK_ARRAY_OPERATIONS') &&
        $inputs[0].shape.length > 1;
    if ($inputs.length === 1) {
        // Clone tensor.
        var program_1 = shouldPack ?
            new UnaryOpProgram(inputs[0].shape, CLONE) :
            new UnaryOpPackedProgram(inputs[0].shape, CLONE);
        return backend.runWebGLProgram(program_1, inputs, dtype);
    }
    var maxTexturesInShader = tf.env().getNumber('WEBGL_MAX_TEXTURES_IN_SHADER');
    if ($inputs.length > maxTexturesInShader) {
        var reducedInputs = [];
        for (var i = 0; i < $inputs.length; i += maxTexturesInShader) {
            var subArray = $inputs.slice(i, i + maxTexturesInShader);
            reducedInputs.push(concatImpl(subArray, axis, backend));
        }
        var result_2 = concatImpl(reducedInputs, axis, backend);
        try {
            for (var reducedInputs_1 = __values(reducedInputs), reducedInputs_1_1 = reducedInputs_1.next(); !reducedInputs_1_1.done; reducedInputs_1_1 = reducedInputs_1.next()) {
                var i = reducedInputs_1_1.value;
                backend.disposeIntermediateTensorInfo(i);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (reducedInputs_1_1 && !reducedInputs_1_1.done && (_a = reducedInputs_1.return)) _a.call(reducedInputs_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return result_2;
    }
    if (shouldPack) {
        var program_2 = new ConcatPackedProgram($inputs.map(function (t) { return t.shape; }), axis);
        return backend.runWebGLProgram(program_2, $inputs, dtype);
    }
    var _b = computeTensors2D($inputs, axis, backend), tensors2D = _b.tensors2D, outShape = _b.outShape;
    var program = new ConcatProgram(tensors2D.map(function (t) { return t.shape; }));
    var result = backend.runWebGLProgram(program, tensors2D, dtype);
    tensors2D.forEach(function (r) { return backend.disposeIntermediateTensorInfo(r); });
    var reshapedResult = reshape({ inputs: { x: result }, attrs: { shape: outShape }, backend: backend });
    backend.disposeIntermediateTensorInfo(result);
    return reshapedResult;
}
function computeTensors2D(inputs, axis, backend) {
    // Any concat of n-dimensional tensors across any axis can be reduced to
    // a concatenation of two-dimensional tensors across the axis 1 by first
    // partitioning the axes of the original tensors into those less than the
    // axis to be concatenated and the rest. Then reshape the tensors
    // into a two-dimensional tensor by collapsing these two sets of axes and
    // concatenate the resulting matrices across the axis 1, finally reshaping
    // the result to have the proper shape.
    var outShape = tf.backend_util.computeOutShape(inputs.map(function (t) { return t.shape; }), axis);
    var tensors2D = inputs.map(function (x) { return reshape({
        inputs: { x: x },
        attrs: { shape: [-1, tf.util.sizeFromShape(x.shape.slice(axis))] },
        backend: backend
    }); });
    return { tensors2D: tensors2D, outShape: outShape };
}

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
function concat(args) {
    var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
    var axis = attrs.axis;
    var $axis = tf.util.parseAxisParam(axis, inputs[0].shape)[0];
    var shapes = inputs.map(function (t) { return t.shape; });
    tf.backend_util.assertParamsConsistent(shapes, $axis);
    var outShape = tf.backend_util.computeOutShape(inputs.map(function (t) { return t.shape; }), $axis);
    if (tf.util.sizeFromShape(outShape) === 0) {
        return backend.makeTensorInfo(outShape, inputs[0].dtype, []);
    }
    // Keep only non-empty tensors (ignore tensors with 0 in their shape).
    var $inputs = inputs.filter(function (t) { return tf.util.sizeFromShape(t.shape) > 0; });
    if ($inputs.length === 1) {
        return identity({ inputs: { x: $inputs[0] }, backend: backend });
    }
    return concatImpl($inputs, $axis, backend);
}
var concatConfig = {
    kernelName: tf.Concat,
    backendName: 'webgl',
    kernelFunc: concat
};

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
var Conv2DProgram = /** @class */ (function () {
    function Conv2DProgram(convInfo, addBias, activation, hasPreluActivationWeights, hasLeakyreluAlpha) {
        if (addBias === void 0) { addBias = false; }
        if (activation === void 0) { activation = null; }
        if (hasPreluActivationWeights === void 0) { hasPreluActivationWeights = false; }
        if (hasLeakyreluAlpha === void 0) { hasLeakyreluAlpha = false; }
        this.variableNames = ['x', 'W'];
        this.outputShape = convInfo.outShape;
        var padTop = convInfo.padInfo.top;
        var padLeft = convInfo.padInfo.left;
        var strideHeight = convInfo.strideHeight;
        var strideWidth = convInfo.strideWidth;
        var dilationHeight = convInfo.dilationHeight;
        var dilationWidth = convInfo.dilationWidth;
        var filterHeight = convInfo.filterHeight;
        var filterWidth = convInfo.filterWidth;
        var inputDepthNearestVec4 = Math.floor(convInfo.inChannels / 4) * 4;
        var inputDepthVec4Remainder = convInfo.inChannels % 4;
        var isChannelsLast = convInfo.dataFormat === 'channelsLast';
        var rowDim = isChannelsLast ? 1 : 2;
        var colDim = isChannelsLast ? 2 : 3;
        var channelDim = isChannelsLast ? 3 : 1;
        var activationSnippet = '', applyActivationSnippet = '';
        if (activation) {
            if (hasPreluActivationWeights) {
                activationSnippet = "float activation(float a) {\n          float b = getPreluActivationWeightsAtOutCoords();\n          ".concat(activation, "\n        }");
            }
            else if (hasLeakyreluAlpha) {
                activationSnippet = "float activation(float a) {\n          float b = getLeakyreluAlphaAtOutCoords();\n          ".concat(activation, "\n        }");
            }
            else {
                activationSnippet = "\n          float activation(float x) {\n            ".concat(activation, "\n          }\n        ");
            }
            applyActivationSnippet = "result = activation(result);";
        }
        var addBiasSnippet = addBias ? 'result += getBiasAtOutCoords();' : '';
        if (addBias) {
            this.variableNames.push('bias');
        }
        if (hasPreluActivationWeights) {
            this.variableNames.push('preluActivationWeights');
        }
        if (hasLeakyreluAlpha) {
            this.variableNames.push('leakyreluAlpha');
        }
        this.userCode = "\n      ".concat(activationSnippet, "\n\n      const ivec2 strides = ivec2(").concat(strideHeight, ", ").concat(strideWidth, ");\n      const ivec2 pads = ivec2(").concat(padTop, ", ").concat(padLeft, ");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords[0];\n        int d2 = coords[").concat(channelDim, "];\n\n        ivec2 xRCCorner =\n            ivec2(coords[").concat(rowDim, "], coords[").concat(colDim, "]) * strides - pads;\n        int xRCorner = xRCCorner.x;\n        int xCCorner = xRCCorner.y;\n\n        // Convolve x(?, ?, d1) with w(:, :, d1, d2) to get y(yR, yC, d2).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        for (int wR = 0; wR < ").concat(filterHeight, "; wR++) {\n          int xR = xRCorner + wR * ").concat(dilationHeight, ";\n\n          if (xR < 0 || xR >= ").concat(convInfo.inHeight, ") {\n            continue;\n          }\n\n          for (int wC = 0; wC < ").concat(filterWidth, "; wC++) {\n            int xC = xCCorner + wC * ").concat(dilationWidth, ";\n\n            if (xC < 0 || xC >= ").concat(convInfo.inWidth, ") {\n              continue;\n            }\n\n            for (int d1 = 0; d1 < ").concat(inputDepthNearestVec4, "; d1 += 4) {\n              vec4 wValues = vec4(\n                getW(wR, wC, d1, d2),\n                getW(wR, wC, d1 + 1, d2),\n                getW(wR, wC, d1 + 2, d2),\n                getW(wR, wC, d1 + 3, d2)\n              );\n\n              if (").concat(isChannelsLast, ") {\n                vec4 xValues = vec4(\n                  getX(batch, xR, xC, d1),\n                  getX(batch, xR, xC, d1 + 1),\n                  getX(batch, xR, xC, d1 + 2),\n                  getX(batch, xR, xC, d1 + 3)\n                );\n                dotProd += dot(xValues, wValues);\n              } else {\n                vec4 xValues = vec4(\n                  getX(batch, d1, xR, xC),\n                  getX(batch, d1 + 1, xR, xC),\n                  getX(batch, d1 + 2, xR, xC),\n                  getX(batch, d1 + 3, xR, xC)\n                );\n                dotProd += dot(xValues, wValues);\n              }\n            }\n\n            if (").concat(inputDepthVec4Remainder === 1, ") {\n\n              if (").concat(isChannelsLast, ") {\n                dotProd +=\n                    getX(batch, xR, xC, ").concat(inputDepthNearestVec4, ") *\n                    getW(wR, wC, ").concat(inputDepthNearestVec4, ", d2);\n              } else {\n                dotProd +=\n                    getX(batch, ").concat(inputDepthNearestVec4, ", xR, xC) *\n                    getW(wR, wC, ").concat(inputDepthNearestVec4, ", d2);\n              }\n\n            } else if (").concat(inputDepthVec4Remainder === 2, ") {\n              vec2 wValues = vec2(\n                getW(wR, wC, ").concat(inputDepthNearestVec4, ", d2),\n                getW(wR, wC, ").concat(inputDepthNearestVec4, " + 1, d2)\n              );\n\n              if (").concat(isChannelsLast, ") {\n                vec2 xValues = vec2(\n                  getX(batch, xR, xC, ").concat(inputDepthNearestVec4, "),\n                  getX(batch, xR, xC, ").concat(inputDepthNearestVec4, " + 1)\n                );\n                dotProd += dot(xValues, wValues);\n              } else {\n                vec2 xValues = vec2(\n                  getX(batch, ").concat(inputDepthNearestVec4, ", xR, xC),\n                  getX(batch, ").concat(inputDepthNearestVec4, " + 1, xR, xC)\n                );\n                dotProd += dot(xValues, wValues);\n              }\n\n            } else if (").concat(inputDepthVec4Remainder === 3, ") {\n              vec3 wValues = vec3(\n                getW(wR, wC, ").concat(inputDepthNearestVec4, ", d2),\n                getW(wR, wC, ").concat(inputDepthNearestVec4, " + 1, d2),\n                getW(wR, wC, ").concat(inputDepthNearestVec4, " + 2, d2)\n              );\n\n              if (").concat(isChannelsLast, ") {\n                vec3 xValues = vec3(\n                  getX(batch, xR, xC, ").concat(inputDepthNearestVec4, "),\n                  getX(batch, xR, xC, ").concat(inputDepthNearestVec4, " + 1),\n                  getX(batch, xR, xC, ").concat(inputDepthNearestVec4, " + 2)\n                );\n                dotProd += dot(xValues, wValues);\n              } else {\n                vec3 xValues = vec3(\n                  getX(batch, ").concat(inputDepthNearestVec4, ", xR, xC),\n                  getX(batch, ").concat(inputDepthNearestVec4, " + 1, xR, xC),\n                  getX(batch, ").concat(inputDepthNearestVec4, " + 2, xR, xC)\n                );\n                dotProd += dot(xValues, wValues);\n              }\n\n            }\n          }\n        }\n\n        float result = dotProd;\n        ").concat(addBiasSnippet, "\n        ").concat(applyActivationSnippet, "\n        setOutput(result);\n      }\n    ");
    }
    return Conv2DProgram;
}());
var Conv3DProgram = /** @class */ (function () {
    function Conv3DProgram(convInfo) {
        this.variableNames = ['x', 'W'];
        this.outputShape = convInfo.outShape;
        var padFront = convInfo.padInfo.front;
        var padTop = convInfo.padInfo.top;
        var padLeft = convInfo.padInfo.left;
        var strideDepth = convInfo.strideDepth;
        var strideHeight = convInfo.strideHeight;
        var strideWidth = convInfo.strideWidth;
        var dilationDepth = convInfo.dilationDepth;
        var dilationHeight = convInfo.dilationHeight;
        var dilationWidth = convInfo.dilationWidth;
        var filterDepth = convInfo.filterDepth;
        var filterHeight = convInfo.filterHeight;
        var filterWidth = convInfo.filterWidth;
        var inputDepthNearestVec4 = Math.floor(convInfo.inChannels / 4) * 4;
        var inputDepthVec4Remainder = convInfo.inChannels % 4;
        this.userCode = "\n      const ivec3 strides = ivec3(".concat(strideDepth, ", ").concat(strideHeight, ", ").concat(strideWidth, ");\n      const ivec3 pads = ivec3(").concat(padFront, ", ").concat(padTop, ", ").concat(padLeft, ");\n\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int batch = coords.x;\n        int d2 = coords.u;\n\n        ivec3 xFRCCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;\n        int xFCorner = xFRCCorner.x;\n        int xRCorner = xFRCCorner.y;\n        int xCCorner = xFRCCorner.z;\n\n        // Convolve x(?, ?, ?, d1) with w(:, :, :, d1, d2) to get\n        // y(yF, yR, yC, d2). ? = to be determined. : = across all\n        // values in that axis.\n        float dotProd = 0.0;\n        for (int wF = 0; wF < ").concat(filterDepth, "; wF++) {\n          int xF = xFCorner + wF * ").concat(dilationDepth, ";\n\n          if (xF < 0 || xF >= ").concat(convInfo.inDepth, ") {\n            continue;\n          }\n\n          for (int wR = 0; wR < ").concat(filterHeight, "; wR++) {\n            int xR = xRCorner + wR * ").concat(dilationHeight, ";\n\n            if (xR < 0 || xR >= ").concat(convInfo.inHeight, ") {\n              continue;\n            }\n\n            for (int wC = 0; wC < ").concat(filterWidth, "; wC++) {\n              int xC = xCCorner + wC * ").concat(dilationWidth, ";\n\n              if (xC < 0 || xC >= ").concat(convInfo.inWidth, ") {\n                continue;\n              }\n\n              for (int d1 = 0; d1 < ").concat(inputDepthNearestVec4, "; d1 += 4) {\n                vec4 xValues = vec4(\n                  getX(batch, xF, xR, xC, d1),\n                  getX(batch, xF, xR, xC, d1 + 1),\n                  getX(batch, xF, xR, xC, d1 + 2),\n                  getX(batch, xF, xR, xC, d1 + 3)\n                );\n                vec4 wValues = vec4(\n                  getW(wF, wR, wC, d1, d2),\n                  getW(wF, wR, wC, d1 + 1, d2),\n                  getW(wF, wR, wC, d1 + 2, d2),\n                  getW(wF, wR, wC, d1 + 3, d2)\n                );\n\n                dotProd += dot(xValues, wValues);\n              }\n\n              if (").concat(inputDepthVec4Remainder === 1, ") {\n                dotProd +=\n                  getX(batch, xF, xR, xC, ").concat(inputDepthNearestVec4, ") *\n                  getW(wF, wR, wC, ").concat(inputDepthNearestVec4, ", d2);\n              } else if (").concat(inputDepthVec4Remainder === 2, ") {\n                vec2 xValues = vec2(\n                  getX(batch, xF, xR, xC, ").concat(inputDepthNearestVec4, "),\n                  getX(batch, xF, xR, xC, ").concat(inputDepthNearestVec4, " + 1)\n                );\n                vec2 wValues = vec2(\n                  getW(wF, wR, wC, ").concat(inputDepthNearestVec4, ", d2),\n                  getW(wF, wR, wC, ").concat(inputDepthNearestVec4, " + 1, d2)\n                );\n                dotProd += dot(xValues, wValues);\n              } else if (").concat(inputDepthVec4Remainder === 3, ") {\n                vec3 xValues = vec3(\n                  getX(batch, xF, xR, xC, ").concat(inputDepthNearestVec4, "),\n                  getX(batch, xF, xR, xC, ").concat(inputDepthNearestVec4, " + 1),\n                  getX(batch, xF, xR, xC, ").concat(inputDepthNearestVec4, " + 2)\n                );\n                vec3 wValues = vec3(\n                  getW(wF, wR, wC, ").concat(inputDepthNearestVec4, ", d2),\n                  getW(wF, wR, wC, ").concat(inputDepthNearestVec4, " + 1, d2),\n                  getW(wF, wR, wC, ").concat(inputDepthNearestVec4, " + 2, d2)\n                );\n                dotProd += dot(xValues, wValues);\n              }\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ");
    }
    return Conv3DProgram;
}());

/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
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
var Conv2DPackedProgram = /** @class */ (function () {
    function Conv2DPackedProgram(convInfo, addBias, activation, hasPreluActivation, hasLeakyReluAlpha) {
        if (addBias === void 0) { addBias = false; }
        if (activation === void 0) { activation = null; }
        if (hasPreluActivation === void 0) { hasPreluActivation = false; }
        if (hasLeakyReluAlpha === void 0) { hasLeakyReluAlpha = false; }
        this.variableNames = ['x', 'W'];
        this.packedInputs = true;
        this.packedOutput = true;
        this.customUniforms = [
            { name: 'pads', type: 'ivec2' },
            { name: 'strides', type: 'ivec2' },
            { name: 'dilations', type: 'ivec2' },
            { name: 'inDims', type: 'ivec2' },
        ];
        this.outputShape = convInfo.outShape;
        this.enableShapeUniforms = useShapeUniforms(this.outputShape.length);
        var padLeft = convInfo.padInfo.left;
        var strideWidth = convInfo.strideWidth;
        var dilationWidth = convInfo.dilationWidth;
        var filterHeight = convInfo.filterHeight;
        var filterWidth = convInfo.filterWidth;
        var texelsAcross = filterWidth;
        var mainLoop = "\n       int xR; int xC; int xCOffset;\n       vec4 wTexel; vec4 previous; vec4 final;";
        for (var c = 0; c < filterWidth; c++) {
            mainLoop += "\n           vec4 xTexelC".concat(c * 2, ";\n           int xTexelC").concat(c * 2, "Ready;\n           vec4 xTexelC").concat(c * 2 + 1, ";\n           int xTexelC").concat(c * 2 + 1, "Ready;\n           vec4 xC").concat(c, ";");
        }
        /**
         * This vectorized implementation works by gathering the values needed for
         * each output channel's dot product into vec4's and then multiplying them
         * all together (this happens in the final double for-loop below). Most of
         * the main loop consists of constructing these vec4's with the minimum
         * number of texture2D calls, which means making use of all four returned
         * values from a texture2D call at once.
         */
        mainLoop += "\n     for (int r = 0; r < ".concat(filterHeight, "; r++) {\n      for (int d1 = 0; d1 < ").concat(convInfo.inChannels, "; d1 += 2) {\n       ");
        for (var c = 0; c < filterWidth; c++) {
            mainLoop += "\n           xTexelC".concat(c * 2, " = vec4(0.0);\n           xTexelC").concat(c * 2, "Ready = 0;\n           xTexelC").concat(c * 2 + 1, " = vec4(0.0);\n           xTexelC").concat(c * 2 + 1, "Ready = 0;\n           xC").concat(c, " = vec4(0.0);");
        }
        mainLoop += "\n         xR = xRCorner + r * dilations[0];\n         if (xR >=0 && xR < inDims[0]) {\n       ";
        for (var texelC = 0; texelC < (texelsAcross + 1) / 2; texelC++) {
            var colIndex = texelC * 2;
            mainLoop += "\n           xC = xCCorner + ".concat(colIndex * dilationWidth, ";\n           ");
            if (strideWidth === 1) {
                if (colIndex < filterWidth) {
                    // If padding is odd, the outer texels have to be composed.
                    if (padLeft % 2 === 1) {
                        // TODO: Ensure vec4 previous does not result in redundant sample,
                        // and avoid setting xTexelRC's that exceed the boundary in the
                        // first place rather than resetting them to vec4(0)).
                        // To compute xCOffset:
                        // - If padding is odd, we must add 1 to ensure we ask for an
                        // even-numbered row.
                        // - We subtract 2 to access the previous texel.
                        mainLoop += "\n                 xCOffset = xC + 1;\n                 if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC".concat(colIndex, "Ready == 0) {\n                   xTexelC").concat(colIndex, " = getX(batch, xR, xCOffset, d1);\n\n                   // Need to manually clear unused channels in case\n                   // we're reading from recycled texture.\n                   if (xCOffset + 1 >= inDims[1]) {\n                     xTexelC").concat(colIndex, ".zw = vec2(0.0);\n                   }\n                   xTexelC").concat(colIndex, "Ready = 1;\n                 }\n               ");
                        // This texel has been read in previous iteration if the dilation
                        // is 1.
                        if (dilationWidth === 1 && colIndex > 0) {
                            mainLoop += "\n                 xC".concat(colIndex, " = vec4(xTexelC").concat(colIndex - 2, ".zw, xTexelC").concat(colIndex, ".xy);\n                 ");
                        }
                        else {
                            mainLoop += "\n                   xCOffset = xC + 1 - 2;\n\n                   if (xCOffset >= 0 && xCOffset < inDims[1]) {\n                     previous = getX(batch, xR, xCOffset, d1);\n\n                     // Need to manually clear unused channels in case\n                     // we're reading from recycled texture.\n                     if (xCOffset + 1 >= inDims[1]) {\n                       previous.zw = vec2(0.0);\n                     }\n\n                     xC".concat(colIndex, " = vec4(previous.zw, xTexelC").concat(colIndex, ".xy);\n                   } else {\n                     xC").concat(colIndex, " = vec4(0.0, 0.0, xTexelC").concat(colIndex, ".xy);\n                   }\n                   ");
                        }
                    }
                    else {
                        // Padding is even, so xRC corresponds to a single texel.
                        mainLoop += "\n                 if (xC >= 0 && xC < inDims[1] && xTexelC".concat(colIndex, "Ready == 0) {\n                   xTexelC").concat(colIndex, " = getX(batch, xR, xC, d1);\n                   if (xC + 1 >= inDims[1]) {\n                     xTexelC").concat(colIndex, ".zw = vec2(0.0);\n                   }\n                   xTexelC").concat(colIndex, "Ready = 1;\n                 }\n\n                 xC").concat(colIndex, " = xTexelC").concat(colIndex, ";\n                 ");
                    }
                    if (colIndex + 1 < filterWidth) {
                        // If dilation is even, the second entry should match the first
                        // (either both are composed or both are single samples). But if
                        // dilation is odd, then the second entry should be the opposite
                        // of the first (if the first is composed, the second is a single
                        // sample, and vice versa.)
                        var nextTexelOffset = padLeft % 2 === 0 ?
                            tf.util.nearestLargerEven(dilationWidth) :
                            dilationWidth;
                        if ((dilationWidth % 2 === 0 && padLeft % 2 === 1) ||
                            (dilationWidth % 2 !== 0 && padLeft % 2 !== 1)) {
                            mainLoop += "\n                   xCOffset = xC + imod(pads[1], 2) + ".concat(nextTexelOffset, ";\n\n                   if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC").concat(colIndex + 1, "Ready == 0) {\n                     xTexelC").concat(colIndex + 1, " = getX(batch, xR, xCOffset, d1);\n\n                     // Need to manually clear unused channels in case\n                     // we're reading from recycled texture.\n                     if (xCOffset + 1 >= inDims[1]) {\n                       xTexelC").concat(colIndex + 1, ".zw = vec2(0.0);\n                     }\n                     xTexelC").concat(colIndex + 1, "Ready = 1;\n                   }\n                   ");
                            // If dilation > 1 then the xRC's will not be able to share any
                            // values, so each xRC will require two unique calls to getX.
                            if (dilationWidth > 1) {
                                mainLoop += "\n                     xCOffset -= 2;\n                     if (xCOffset >= 0 && xCOffset < inDims[1]) {\n                      previous = getX(batch, xR, xCOffset, d1);\n                      xC".concat(colIndex + 1, " = vec4(previous.zw, xTexelC").concat(colIndex + 1, ".xy);\n                     } else {\n                      xC").concat(colIndex + 1, " = vec4(0.0, 0.0, xTexelC").concat(colIndex + 1, ".xy);\n                     }\n                     ");
                            }
                            else {
                                mainLoop += "\n                     xC".concat(colIndex + 1, " = vec4(xTexelC").concat(colIndex, ".zw, xTexelC").concat(colIndex + 1, ".xy);\n                     ");
                            }
                        }
                        else {
                            // If dilation is 1 and padding is odd, we have already read the
                            // texel when constructing the previous x value. Here we can
                            // simply skip the texture read.
                            if (nextTexelOffset === 1) {
                                mainLoop += "\n                     xC".concat(colIndex + 1, " = xTexelC").concat(colIndex, ";\n                     ");
                            }
                            else {
                                mainLoop += "\n                     xCOffset = xC + ".concat(nextTexelOffset, ";\n\n                     if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC").concat(colIndex + 1, "Ready == 0) {\n                       xTexelC").concat(colIndex + 1, " = getX(batch, xR, xCOffset, d1);\n                       if (xCOffset + 1 >= inDims[1]) {\n                         xTexelC").concat(colIndex + 1, ".zw = vec2(0.0);\n                       }\n                       xTexelC").concat(colIndex + 1, "Ready = 1;\n                     }\n\n                     xC").concat(colIndex + 1, " = xTexelC").concat(colIndex + 1, ";\n                     ");
                            }
                        }
                    }
                }
            }
            else { // stride === 2
                if (colIndex < filterWidth) {
                    // Depending on whether padLeft is even or odd, we want either the
                    // xy or zw channels from X texels for xC${colIndex}. If padLeft is
                    // even, xC${colIndex +1} is simply the zw channels of texels we've
                    // already sampled. But if padLeft is odd, xC{$c + 1}.zw will
                    // need to come from the xy channels of a new texel, hence the `
                    // vec4
                    // final` initialized below.
                    if (padLeft % 2 === 1) {
                        mainLoop += "\n                 xCOffset = xC + 1 - strides[1];\n                 if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC".concat(colIndex, "Ready == 0) {\n                   xTexelC").concat(colIndex, " = getX(batch, xR, xCOffset, d1);\n                   // Need to manually clear unused channels in case\n                   // we're reading from recycled texture.\n                   if (xCOffset + 1 >= inDims[1]) {\n                     xTexelC").concat(colIndex, ".zw = vec2(0.0);\n                   }\n                   xTexelC").concat(colIndex, "Ready = 1;\n                 }\n\n                 if(xC + 1 >= 0 && xC + 1 < inDims[1] && xTexelC").concat(colIndex + 1, "Ready == 0) {\n                   xTexelC").concat(colIndex + 1, " = getX(batch, xR, xC + 1, d1);\n                   // Need to manually clear unused channels in case\n                   // we're reading from recycled texture.\n                   if (xC + 2 >= inDims[1]) {\n                     xTexelC").concat(colIndex + 1, ".zw = vec2(0.0);\n                   }\n                   xTexelC").concat(colIndex + 1, "Ready = 1;\n                 }\n\n                 xC").concat(colIndex, " = vec4(xTexelC").concat(colIndex, ".zw, xTexelC").concat(colIndex + 1, ".zw);\n               ");
                        if (colIndex + 1 < filterWidth) {
                            mainLoop += "\n                   final = vec4(0.0);\n                   xCOffset = xC + 1 + strides[1];\n                   if(xCOffset >= 0 && xCOffset < inDims[1]) {\n                     final = getX(batch, xR, xCOffset, d1);\n                   }\n                   xC".concat(colIndex + 1, " = vec4(xTexelC").concat(colIndex + 1, ".xy, final.xy);\n                 ");
                        }
                    }
                    else {
                        mainLoop += "\n                 if(xC >= 0 && xC < inDims[1] && xTexelC".concat(colIndex, "Ready == 0) {\n                   xTexelC").concat(colIndex, " = getX(batch, xR, xC, d1);\n                   if (xC + 1 >= inDims[1]) {\n                     xTexelC").concat(colIndex, ".zw = vec2(0.0);\n                   }\n                   xTexelC").concat(colIndex, "Ready = 1;\n                 }\n\n                 xCOffset = xC + strides[1];\n                 if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC").concat(colIndex + 1, "Ready == 0) {\n                   xTexelC").concat(colIndex + 1, " = getX(batch, xR, xCOffset, d1);\n                   if (xCOffset + 1 >= inDims[1]) {\n                     xTexelC").concat(colIndex + 1, ".zw = vec2(0.);\n                   }\n                   xTexelC").concat(colIndex + 1, "Ready = 1;\n                 }\n\n                 xC").concat(colIndex, " = vec4(\n                   xTexelC").concat(colIndex, ".xy, xTexelC").concat(colIndex + 1, ".xy);\n               ");
                        if (colIndex + 1 < filterWidth) {
                            mainLoop += "\n                   xC".concat(colIndex + 1, " = vec4(xTexelC").concat(colIndex, ".zw, xTexelC").concat(colIndex + 1, ".zw);\n                 ");
                        }
                    }
                }
            }
            // localize the dotProd accumulation within the loop, the theory is for
            // GPU with limited cache, accumulate sum across large amount of
            // veriables will cause lots of cache misses. (i.e. 5x5 filter will have
            // 50 variables)
            if (colIndex < filterWidth) {
                mainLoop += "\n             wTexel = getW(r, ".concat(colIndex, ", d1, d2);\n             dotProd += xC").concat(colIndex, ".xxzz * vec4(wTexel.xy, wTexel.xy);\n             if(d1 + 1 < ").concat(convInfo.inChannels, ") {\n               dotProd += xC").concat(colIndex, ".yyww * vec4(wTexel.zw, wTexel.zw);\n             }\n           ");
                if (colIndex + 1 < filterWidth) {
                    mainLoop += "\n               wTexel = getW(r, ".concat(colIndex + 1, ", d1, d2);\n               dotProd += xC").concat(colIndex + 1, ".xxzz * vec4(wTexel.xy, wTexel.xy);\n               if(d1 + 1 < ").concat(convInfo.inChannels, ") {\n                 dotProd += xC").concat(colIndex + 1, ".yyww * vec4(wTexel.zw, wTexel.zw);\n               }\n             ");
                }
            }
        }
        mainLoop += "\n     }\n   ";
        mainLoop += "\n     }\n   ";
        mainLoop += "\n     }\n   ";
        var activationSnippet = '', applyActivationSnippet = '';
        if (activation) {
            if (hasPreluActivation) {
                activationSnippet = "vec4 activation(vec4 a) {\n           vec4 b = getPreluActivationWeightsAtOutCoords();\n           ".concat(activation, "\n         }");
            }
            else if (hasLeakyReluAlpha) {
                activationSnippet = "vec4 activation(vec4 a) {\n           vec4 b = getLeakyreluAlphaAtOutCoords();\n           ".concat(activation, "\n         }");
            }
            else {
                activationSnippet = "vec4 activation(vec4 x) {\n           ".concat(activation, "\n         }");
            }
            applyActivationSnippet = "result = activation(result);";
        }
        var addBiasSnippet = addBias ? 'result += getBiasAtOutCoords();' : '';
        if (addBias) {
            this.variableNames.push('bias');
        }
        if (hasPreluActivation) {
            this.variableNames.push('preluActivationWeights');
        }
        if (hasLeakyReluAlpha) {
            this.variableNames.push('leakyreluAlpha');
        }
        this.userCode = "\n       ".concat(activationSnippet, "\n\n       void main() {\n         ivec4 coords = getOutputCoords();\n         int batch = coords.x;\n         ivec2 xRCCorner = coords.yz * strides - pads;\n         int d2 = coords.w;\n         int xRCorner = xRCCorner.x;\n         int xCCorner = xRCCorner.y;\n\n         //intialize dotProd with a small epsilon seems to reduce GPU accuracy loss.\n         vec4 dotProd = vec4(0.000000000000001);\n\n         ").concat(mainLoop, "\n\n         vec4 result = dotProd - vec4(0.000000000000001);\n         ").concat(addBiasSnippet, "\n         ").concat(applyActivationSnippet, "\n         setOutput(result);\n       }\n     ");
    }
    return Conv2DPackedProgram;
}());

/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
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
var Im2ColPackedProgram = /** @class */ (function () {
    function Im2ColPackedProgram(outputShape, convInfo) {
        this.variableNames = ['A'];
        this.packedInputs = true;
        this.packedOutput = true;
        this.customUniforms = [
            { name: 'inputShape', type: 'ivec4' },
            { name: 'pad', type: 'ivec2' },
            { name: 'stride', type: 'ivec2' },
            { name: 'dilation', type: 'ivec2' },
            { name: 'inChannels', type: 'int' },
            { name: 'itemsPerBlockRow', type: 'int' },
            { name: 'outWidth', type: 'int' },
        ];
        this.outputShape = outputShape;
        this.enableShapeUniforms = useShapeUniforms(this.outputShape.length);
        var dataFormat = convInfo.dataFormat;
        var glsl = getGlslDifferences();
        var isChannelsLast = dataFormat === 'channelsLast';
        var rowDim = isChannelsLast ? 1 : 2;
        var colDim = isChannelsLast ? 2 : 3;
        var boundsCheckingSnippet = this.enableShapeUniforms ?
            'if(blockIndex < outShape[2] && pos < outShape[1]) {' :
            "if(blockIndex < ".concat(outputShape[2], " && pos < ").concat(outputShape[1], ") {");
        var unrolled = "";
        for (var row = 0; row <= 1; row++) {
            for (var col = 0; col <= 1; col++) {
                unrolled += "\n          blockIndex = rc.z + ".concat(col, ";\n          pos = rc.y + ").concat(row, ";\n\n          ").concat(boundsCheckingSnippet, "\n            offsetY = int(blockIndex / outWidth) * stride[0] - pad[0];\n            d0 = offsetY + dilation[0] * (pos / itemsPerBlockRow);\n\n            if(d0 < inputShape[").concat(rowDim, "] && d0 >= 0) {\n              // Use custom imod instead mod. On Intel GPU, mod may generate\n              // unexpected value.\n              // https://github.com/tensorflow/tfjs/issues/5447\n              offsetX = imod(blockIndex, outWidth) * stride[1] - pad[1];\n              d1 = offsetX + dilation[1] * (imod(pos, itemsPerBlockRow) /\n                  inChannels);\n\n              if(d1 < inputShape[").concat(colDim, "] && d1 >= 0) {\n\n                ch = imod(pos, inChannels);\n\n                if (").concat(isChannelsLast, ") {\n                  innerDims = vec2(d1, ch);\n                  result[").concat(row * 2 + col, "] = getChannel(\n                    getA(rc.x, d0, int(innerDims.x),\n                    int(innerDims.y)), innerDims);\n                } else {\n                  innerDims = vec2(d0, d1);\n                  result[").concat(row * 2 + col, "] = getChannel(\n                    getA(rc.x, ch, int(innerDims.x),\n                    int(innerDims.y)), innerDims);\n                }\n              }\n            }\n          }\n        ");
            }
        }
        this.userCode = "\n      void main() {\n        ivec3 rc = getOutputCoords();\n\n        vec4 result = vec4(0);\n\n        int blockIndex, pos, offsetY, d0, offsetX, d1, ch;\n        vec2 innerDims;\n\n        ".concat(unrolled, "\n\n        ").concat(glsl.output, " = result;\n      }\n    ");
    }
    return Im2ColPackedProgram;
}());

// Both conv2dByMatMul and conv2dWithIm2Row fuse height and width into one
// dimension to compute batchMatMul, so bias and activation weights are also
// supposed to fuse the two dimensions into one.
//
// This function computes the target shape for fusing height and width
// dimensions. Returning null means the shape is already compatible.
//
// Even though the bias is not supposed to be a 3-D or a 4-D (including
// batch) tensor and PReLU activiation weights is not supposed to be a 4-D
// tensor, we still need to support them, because we haven't disabled
// them for NHWC format.
// https://github.com/tensorflow/tfjs/blob/b53bd47e880367ae57493f0ea628abaf08db2d5d/tfjs-core/src/ops/fused/conv2d.ts#L181-L196
function getShapeForBatchMatMul(shape, isChannelsLast) {
    var length = shape.length;
    if (length >= 3) {
        return isChannelsLast ? __spreadArray(__spreadArray([], __read(shape.slice(0, -3) /* batch */), false), [
            shape[length - 3] * shape[length - 2] /* height * width */,
            shape[length - 1] /* channel */
        ], false) : __spreadArray(__spreadArray([], __read(shape.slice(0, -3) /* batch */), false), [
            shape[length - 3] /* channel */,
            shape[length - 2] * shape[length - 1] /* height * width */
        ], false);
    }
    else if (!isChannelsLast && length === 1 && shape[0] > 1) {
        return [shape[0], 1];
    }
    else {
        return null;
    }
}
// For 1x1 kernels that iterate through every point in the input, convolution
// can be expressed as matrix multiplication (without need for memory
// remapping).
function conv2dByMatMul(_a) {
    var e_1, _b;
    var x = _a.x, filter = _a.filter, convInfo = _a.convInfo, backend = _a.backend, _c = _a.bias, bias = _c === void 0 ? null : _c, _d = _a.preluActivationWeights, preluActivationWeights = _d === void 0 ? null : _d, _e = _a.leakyreluAlpha, leakyreluAlpha = _e === void 0 ? 0 : _e, _f = _a.activation, activation = _f === void 0 ? null : _f;
    // Reshapes conv2D input to 2D tensors, uses matMul and then reshape the
    // result from 2D to 4D.
    var xShape = x.shape;
    var xTexData = backend.texData.get(x.dataId);
    var sharedMatMulDim = convInfo.inChannels;
    var outerShapeX = xShape[0] * xShape[1] * xShape[2];
    var outerShapeFilter = convInfo.outChannels;
    var isChannelsLast = convInfo.dataFormat === 'channelsLast';
    var transposeA = false;
    var transposeB = false;
    var out;
    var intermediates = [];
    if (preluActivationWeights != null) {
        var targetShape = getShapeForBatchMatMul(preluActivationWeights.shape, isChannelsLast);
        if (targetShape != null) {
            preluActivationWeights = reshape({
                inputs: { x: preluActivationWeights },
                backend: backend,
                attrs: { shape: targetShape }
            });
            intermediates.push(preluActivationWeights);
        }
    }
    if (bias != null) {
        var targetShape = getShapeForBatchMatMul(bias.shape, isChannelsLast);
        if (targetShape != null) {
            bias = reshape({ inputs: { x: bias }, backend: backend, attrs: { shape: targetShape } });
            intermediates.push(bias);
        }
    }
    // TODO: Once reduction ops are packed, batchMatMul will always be packed
    // and we can remove this condition.
    var batchMatMulWillBeUnpacked = (outerShapeX === 1 || outerShapeFilter === 1) &&
        sharedMatMulDim > MATMUL_SHARED_DIM_THRESHOLD;
    // The algorithm in the if condition assumes (1) the output will be packed,
    // (2) x is packed, (3) x isChannelsLast, (4)  x's packed texture is already
    // on GPU, (5) col is odd, (6) the width, height and inChannels are the same
    // for xTexData.shape and xShape.
    var canOptimize = !batchMatMulWillBeUnpacked && xTexData.isPacked &&
        isChannelsLast && xTexData.texture != null && xShape[2] % 2 !== 0 &&
        tf.util.arraysEqual(xTexData.shape.slice(-3), xShape.slice(-3));
    if (canOptimize) {
        // We avoid expensive packed 2x2 reshape by padding col count to next,
        // even number. When col is odd, the result of packed batchMatMul is
        // the same (has the same texture layout and and values in the texture) as
        // it is for next even col. We make the odd-cols tensor to look like
        // even-cols tensor before the operation and, after the batchMatMul,
        // fix the even-cols result to have odd number of cols.
        var targetShape = xShape[0] * xShape[1] * (xShape[2] + 1);
        var xReshaped_1 = {
            dataId: x.dataId,
            shape: [1, targetShape, convInfo.inChannels],
            dtype: x.dtype
        };
        // xTexData.shape gets referenced from GPGPUBinary.inShapeInfos.
        // Decrementing col count, after batchMatMul->...->compileProgram leads to
        // invalid col count within the reference in GPGPUBinary.inShapeInfos.
        // Alternative fix would be to provide a copy to GPGPUBinary.inShapeInfos
        // in compileProgram method, but that would affect compilation of all
        // programs - instead, provide a copy here, with even col count, before
        // calling batchMatMul->...->compileProgram and after that, the original
        // xTexData.shape is restored.
        var originalXTexDataShape = xTexData.shape;
        xTexData.shape = xTexData.shape.slice();
        xTexData.shape[xTexData.shape.length - 2]++;
        tf.util.assert(isReshapeFree(xTexData.shape, xReshaped_1.shape), function () { return "packed reshape ".concat(xTexData.shape, " to ").concat(xReshaped_1.shape, " isn't free"); });
        var filterReshaped = reshape({
            inputs: { x: filter },
            backend: backend,
            attrs: { shape: [1, convInfo.inChannels, convInfo.outChannels] }
        });
        intermediates.push(filterReshaped);
        var pointwiseConv = batchMatMulImpl({
            a: xReshaped_1,
            b: filterReshaped,
            backend: backend,
            transposeA: transposeA,
            transposeB: transposeB,
            bias: bias,
            activation: activation,
            preluActivationWeights: preluActivationWeights,
            leakyreluAlpha: leakyreluAlpha
        });
        var pointwiseConvTexData = backend.texData.get(pointwiseConv.dataId);
        tf.util.assert(pointwiseConvTexData.isPacked, function () { return 'batchMatMul result is expected to be packed'; });
        // Restore the input shape to original.
        xTexData.shape = originalXTexDataShape;
        // Set the output shape - there is no need for expensive reshape as data
        // layout is already correct.
        pointwiseConvTexData.shape = convInfo.outShape;
        out = identity({ inputs: { x: pointwiseConv }, backend: backend });
        out.shape = convInfo.outShape;
        intermediates.push(pointwiseConv);
    }
    else {
        var numCols = convInfo.outHeight * convInfo.outWidth;
        var xReshaped = reshape({
            inputs: { x: x },
            backend: backend,
            attrs: {
                shape: isChannelsLast ?
                    [convInfo.batchSize, numCols, convInfo.inChannels] :
                    [convInfo.batchSize, convInfo.inChannels, numCols]
            }
        });
        var filterReshaped = reshape({
            inputs: { x: filter },
            backend: backend,
            attrs: { shape: [1, convInfo.inChannels, convInfo.outChannels] }
        });
        var result = batchMatMulImpl({
            a: isChannelsLast ? xReshaped : filterReshaped,
            b: isChannelsLast ? filterReshaped : xReshaped,
            transposeA: !isChannelsLast,
            transposeB: transposeB,
            backend: backend,
            bias: bias,
            activation: activation,
            preluActivationWeights: preluActivationWeights,
            leakyreluAlpha: leakyreluAlpha
        });
        out = reshape({ inputs: { x: result }, backend: backend, attrs: { shape: convInfo.outShape } });
        intermediates.push(xReshaped);
        intermediates.push(filterReshaped);
        intermediates.push(result);
    }
    try {
        for (var intermediates_1 = __values(intermediates), intermediates_1_1 = intermediates_1.next(); !intermediates_1_1.done; intermediates_1_1 = intermediates_1.next()) {
            var i = intermediates_1_1.value;
            backend.disposeIntermediateTensorInfo(i);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (intermediates_1_1 && !intermediates_1_1.done && (_b = intermediates_1.return)) _b.call(intermediates_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return out;
}
// Implements the im2row algorithm as outlined in "High Performance
// Convolutional Neural Networks for Document Processing" (Suvisoft, 2006)
function conv2dWithIm2Row(_a) {
    var e_2, _b;
    var x = _a.x, filter = _a.filter, convInfo = _a.convInfo, backend = _a.backend, _c = _a.bias, bias = _c === void 0 ? null : _c, _d = _a.preluActivationWeights, preluActivationWeights = _d === void 0 ? null : _d, _e = _a.leakyreluAlpha, leakyreluAlpha = _e === void 0 ? 0 : _e, _f = _a.activation, activation = _f === void 0 ? null : _f;
    // Rearranges conv2d input so each block to be convolved over forms the
    // column of a new matrix with shape [filterWidth * filterHeight *
    // inChannels, outHeight * outWidth]. The filter is also rearranged so each
    // output channel forms a row of a new matrix with shape [outChannels,
    // filterWidth * filterHeight * inChannels]. The convolution is then
    // computed by multiplying these matrices and reshaping the result.
    var filterWidth = convInfo.filterWidth, filterHeight = convInfo.filterHeight, inChannels = convInfo.inChannels, outWidth = convInfo.outWidth, outHeight = convInfo.outHeight, dataFormat = convInfo.dataFormat;
    var isChannelsLast = dataFormat === 'channelsLast';
    var sharedDim = filterWidth * filterHeight * inChannels;
    var numCols = outHeight * outWidth;
    var x2ColShape = [convInfo.batchSize, sharedDim, numCols];
    var transposeA = true;
    var transposeB = false;
    var intermediates = [];
    if (preluActivationWeights != null) {
        var targetShape = getShapeForBatchMatMul(preluActivationWeights.shape, isChannelsLast);
        if (targetShape != null) {
            preluActivationWeights = reshape({
                inputs: { x: preluActivationWeights },
                backend: backend,
                attrs: { shape: targetShape }
            });
            intermediates.push(preluActivationWeights);
        }
    }
    if (bias != null) {
        var targetShape = getShapeForBatchMatMul(bias.shape, isChannelsLast);
        if (targetShape != null) {
            bias = reshape({ inputs: { x: bias }, backend: backend, attrs: { shape: targetShape } });
            intermediates.push(bias);
        }
    }
    var w2Row = reshape({
        inputs: { x: filter },
        backend: backend,
        attrs: { shape: [1, sharedDim, tf.util.sizeFromShape(filter.shape) / sharedDim] }
    });
    intermediates.push(w2Row);
    var im2ColProgram = new Im2ColPackedProgram(x2ColShape, convInfo);
    var customValues = [
        x.shape, [convInfo.padInfo.top, convInfo.padInfo.left],
        [convInfo.strideHeight, convInfo.strideWidth],
        [convInfo.dilationHeight, convInfo.dilationWidth], [convInfo.inChannels],
        [convInfo.filterWidth * convInfo.inChannels], [convInfo.outWidth]
    ];
    var im2Col = backend.runWebGLProgram(im2ColProgram, [x], 'float32', customValues);
    var im2ColReshaped = reshape({ inputs: { x: im2Col }, backend: backend, attrs: { shape: x2ColShape } });
    intermediates.push(im2Col);
    intermediates.push(im2ColReshaped);
    var hasBias = bias != null;
    var hasPreluActivationWeights = preluActivationWeights != null;
    var hasLeakyreluAlpha = activation === 'leakyrelu';
    var fusedActivation = activation ? mapActivationToShaderProgram(activation, true) : null;
    var matmulProgram = new MatMulPackedProgram(isChannelsLast ? im2ColReshaped.shape :
        w2Row.shape, isChannelsLast ? w2Row.shape :
        im2ColReshaped.shape, isChannelsLast ? [convInfo.batchSize, numCols, convInfo.outChannels] :
        [convInfo.batchSize, convInfo.outChannels, numCols], transposeA, transposeB, hasBias, fusedActivation, hasPreluActivationWeights, hasLeakyreluAlpha);
    var inputs = isChannelsLast ? [im2ColReshaped, w2Row] : [w2Row, im2ColReshaped];
    if (bias) {
        inputs.push(bias);
    }
    if (hasPreluActivationWeights) {
        inputs.push(preluActivationWeights);
    }
    if (hasLeakyreluAlpha) {
        var $leakyreluAlpha = backend.makeTensorInfo([], 'float32', tf.util.createScalarValue(leakyreluAlpha, 'float32'));
        inputs.push($leakyreluAlpha);
        intermediates.push($leakyreluAlpha);
    }
    var product = backend.runWebGLProgram(matmulProgram, inputs, 'float32');
    var out = reshape({ inputs: { x: product }, backend: backend, attrs: { shape: convInfo.outShape } });
    intermediates.push(product);
    try {
        for (var intermediates_2 = __values(intermediates), intermediates_2_1 = intermediates_2.next(); !intermediates_2_1.done; intermediates_2_1 = intermediates_2.next()) {
            var i = intermediates_2_1.value;
            backend.disposeIntermediateTensorInfo(i);
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (intermediates_2_1 && !intermediates_2_1.done && (_b = intermediates_2.return)) _b.call(intermediates_2);
        }
        finally { if (e_2) throw e_2.error; }
    }
    return out;
}

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
function conv2d(args) {
    var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
    var x = inputs.x, filter = inputs.filter;
    var strides = attrs.strides, pad = attrs.pad, dataFormat = attrs.dataFormat, dilations = attrs.dilations, dimRoundingMode = attrs.dimRoundingMode;
    var $dataFormat = tf.backend_util.convertConv2DDataFormat(dataFormat);
    var convInfo = tf.backend_util.computeConv2DInfo(x.shape, filter.shape, strides, dilations, pad, dimRoundingMode, false /* depthwise */, $dataFormat);
    var out;
    if (convInfo.filterHeight === 1 && convInfo.filterWidth === 1 &&
        convInfo.dilationHeight === 1 && convInfo.dilationWidth === 1 &&
        convInfo.strideHeight === 1 && convInfo.strideWidth === 1 &&
        (convInfo.padInfo.type === 'SAME' || convInfo.padInfo.type === 'VALID')) {
        out = conv2dByMatMul({ x: x, filter: filter, convInfo: convInfo, backend: backend });
    }
    else if (convInfo.strideWidth <= 2 && $dataFormat === 'channelsLast'
        && tf.env().getBool('WEBGL_EXP_CONV')) {
        var program = new Conv2DPackedProgram(convInfo);
        var customValues = [
            [convInfo.padInfo.top, convInfo.padInfo.left],
            [convInfo.strideHeight, convInfo.strideWidth],
            [convInfo.dilationHeight, convInfo.dilationWidth],
            [convInfo.inHeight, convInfo.inWidth]
        ];
        out =
            backend.runWebGLProgram(program, [x, filter], 'float32', customValues);
    }
    else if (tf.env().getBool('WEBGL_CONV_IM2COL')) {
        out = conv2dWithIm2Row({ x: x, filter: filter, convInfo: convInfo, backend: backend });
    }
    else {
        var program = new Conv2DProgram(convInfo);
        out = backend.runWebGLProgram(program, [x, filter], 'float32');
    }
    var outReshaped = reshape({ inputs: { x: out }, backend: backend, attrs: { shape: convInfo.outShape } });
    backend.disposeIntermediateTensorInfo(out);
    return outReshaped;
}
var conv2DConfig = {
    kernelName: tf.Conv2D,
    backendName: 'webgl',
    kernelFunc: conv2d,
};

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
var Conv2DDerFilterProgram = /** @class */ (function () {
    function Conv2DDerFilterProgram(convInfo) {
        this.variableNames = ['x', 'dy'];
        this.outputShape = convInfo.filterShape;
        var strideHeight = convInfo.strideHeight;
        var strideWidth = convInfo.strideWidth;
        var padTop = convInfo.padInfo.top;
        var padLeft = convInfo.padInfo.left;
        var isChannelsLast = convInfo.dataFormat === 'channelsLast';
        this.userCode = "\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int wR = coords.x;\n        int wC = coords.y;\n        int d1 = coords.z;\n        int d2 = coords.w;\n\n        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n\n        for (int b = 0; b < ".concat(convInfo.batchSize, "; b++) {\n          for (int yR = 0; yR < ").concat(convInfo.outHeight, "; yR++) {\n            int xR = wR + yR * ").concat(strideHeight, " - ").concat(padTop, ";\n\n            if (xR < 0 || xR >= ").concat(convInfo.inHeight, ") {\n              continue;\n            }\n\n            for (int yC = 0; yC < ").concat(convInfo.outWidth, "; yC++) {\n              int xC = wC + yC * ").concat(strideWidth, " - ").concat(padLeft, ";\n\n              if (xC < 0 || xC >= ").concat(convInfo.inWidth, ") {\n                continue;\n              }\n\n              ").concat(isChannelsLast ?
            "float dyValue = getDy(b, yR, yC, d2);\n              float xValue = getX(b, xR, xC, d1);\n              dotProd += (xValue * dyValue);" :
            "float dyValue = getDy(b, d2, yR, yC);\n              float xValue = getX(b, d1, xR, xC);\n              dotProd += (xValue * dyValue);", "\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ");
    }
    return Conv2DDerFilterProgram;
}());
var Conv2DDerInputProgram = /** @class */ (function () {
    function Conv2DDerInputProgram(convInfo) {
        this.variableNames = ['dy', 'W'];
        this.outputShape = convInfo.inShape;
        var filterHeight = convInfo.filterHeight;
        var filterWidth = convInfo.filterWidth;
        var strideHeight = convInfo.strideHeight;
        var strideWidth = convInfo.strideWidth;
        var isChannelsLast = convInfo.dataFormat === 'channelsLast';
        var padTop = filterHeight - 1 - convInfo.padInfo.top;
        var padLeft = filterWidth - 1 - convInfo.padInfo.left;
        var rowDim = isChannelsLast ? 1 : 2;
        var colDim = isChannelsLast ? 2 : 3;
        var channelDim = isChannelsLast ? 3 : 1;
        this.userCode = "\n      const ivec2 pads = ivec2(".concat(padTop, ", ").concat(padLeft, ");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords[0];\n        int d1 = coords[").concat(channelDim, "];\n\n        ivec2 dyCorner = ivec2(coords[").concat(rowDim, "], coords[").concat(colDim, "]) - pads;\n        int dyRCorner = dyCorner.x;\n        int dyCCorner = dyCorner.y;\n\n        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        for (int wR = 0; wR < ").concat(filterHeight, "; wR++) {\n          float dyR = float(dyRCorner + wR) / ").concat(strideHeight, ".0;\n\n          if (dyR < 0.0 || dyR >= ").concat(convInfo.outHeight, ".0 || fract(dyR) > 0.0) {\n            continue;\n          }\n          int idyR = int(dyR);\n\n          int wRPerm = ").concat(filterHeight, " - 1 - wR;\n\n          for (int wC = 0; wC < ").concat(filterWidth, "; wC++) {\n            float dyC = float(dyCCorner + wC) / ").concat(strideWidth, ".0;\n\n            if (dyC < 0.0 || dyC >= ").concat(convInfo.outWidth, ".0 ||\n                fract(dyC) > 0.0) {\n              continue;\n            }\n            int idyC = int(dyC);\n\n            int wCPerm = ").concat(filterWidth, " - 1 - wC;\n\n            for (int d2 = 0; d2 < ").concat(convInfo.outChannels, "; d2++) {\n\n              if (").concat(isChannelsLast, ") {\n                float xValue = getDy(batch, idyR, idyC, d2);\n                float wValue = getW(wRPerm, wCPerm, d1, d2);\n                dotProd += xValue * wValue;\n              } else {\n                float xValue = getDy(batch, d2, idyR, idyC);\n                float wValue = getW(wRPerm, wCPerm, d1, d2);\n                dotProd += xValue * wValue;\n              }\n\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ");
    }
    return Conv2DDerInputProgram;
}());
var Conv3DDerFilterProgram = /** @class */ (function () {
    function Conv3DDerFilterProgram(convInfo) {
        this.variableNames = ['x', 'dy'];
        this.outputShape = convInfo.filterShape;
        var strideDepth = convInfo.strideDepth;
        var strideHeight = convInfo.strideHeight;
        var strideWidth = convInfo.strideWidth;
        var padFront = convInfo.padInfo.front;
        var padTop = convInfo.padInfo.top;
        var padLeft = convInfo.padInfo.left;
        this.userCode = "\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int wF = coords.x;\n        int wR = coords.y;\n        int wC = coords.z;\n        int d1 = coords.w;\n        int d2 = coords.u;\n\n        float dotProd = 0.0;\n\n        for (int b = 0; b < ".concat(convInfo.batchSize, "; b++) {\n          for (int yF = 0; yF < ").concat(convInfo.outDepth, "; yF++) {\n            int xF = wF + yF * ").concat(strideDepth, " - ").concat(padFront, ";\n\n            if (xF < 0 || xF >= ").concat(convInfo.inDepth, ") {\n              continue;\n            }\n\n            for (int yR = 0; yR < ").concat(convInfo.outHeight, "; yR++) {\n              int xR = wR + yR * ").concat(strideHeight, " - ").concat(padTop, ";\n\n              if (xR < 0 || xR >= ").concat(convInfo.inHeight, ") {\n                continue;\n              }\n\n              for (int yC = 0; yC < ").concat(convInfo.outWidth, "; yC++) {\n                int xC = wC + yC * ").concat(strideWidth, " - ").concat(padLeft, ";\n\n                if (xC < 0 || xC >= ").concat(convInfo.inWidth, ") {\n                  continue;\n                }\n\n                float dyValue = getDy(b, yF, yR, yC, d2);\n                float xValue = getX(b, xF, xR, xC, d1);\n                dotProd += (xValue * dyValue);\n              }\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ");
    }
    return Conv3DDerFilterProgram;
}());
var Conv3DDerInputProgram = /** @class */ (function () {
    function Conv3DDerInputProgram(convInfo) {
        this.variableNames = ['dy', 'W'];
        this.outputShape = convInfo.inShape;
        var filterDepth = convInfo.filterDepth;
        var filterHeight = convInfo.filterHeight;
        var filterWidth = convInfo.filterWidth;
        var strideDepth = convInfo.strideDepth;
        var strideHeight = convInfo.strideHeight;
        var strideWidth = convInfo.strideWidth;
        var padFront = filterDepth - 1 - convInfo.padInfo.front;
        var padTop = filterHeight - 1 - convInfo.padInfo.top;
        var padLeft = filterWidth - 1 - convInfo.padInfo.left;
        this.userCode = "\n      const ivec3 pads = ivec3(".concat(padFront, ", ").concat(padTop, ", ").concat(padLeft, ");\n\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int batch = coords.x;\n        int d1 = coords.u;\n\n\n        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;\n        int dyFCorner = dyCorner.x;\n        int dyRCorner = dyCorner.y;\n        int dyCCorner = dyCorner.z;\n\n        float dotProd = 0.0;\n        for (int wF = 0; wF < ").concat(filterDepth, "; wF++) {\n          float dyF = float(dyFCorner + wF) / ").concat(strideDepth, ".0;\n\n          if (dyF < 0.0 || dyF >= ").concat(convInfo.outDepth, ".0 || fract(dyF) > 0.0) {\n            continue;\n          }\n          int idyF = int(dyF);\n\n          int wFPerm = ").concat(filterDepth, " - 1 - wF;\n\n          for (int wR = 0; wR < ").concat(filterHeight, "; wR++) {\n            float dyR = float(dyRCorner + wR) / ").concat(strideHeight, ".0;\n\n            if (dyR < 0.0 || dyR >= ").concat(convInfo.outHeight, ".0 ||\n              fract(dyR) > 0.0) {\n              continue;\n            }\n            int idyR = int(dyR);\n\n            int wRPerm = ").concat(filterHeight, " - 1 - wR;\n\n            for (int wC = 0; wC < ").concat(filterWidth, "; wC++) {\n              float dyC = float(dyCCorner + wC) / ").concat(strideWidth, ".0;\n\n              if (dyC < 0.0 || dyC >= ").concat(convInfo.outWidth, ".0 ||\n                  fract(dyC) > 0.0) {\n                continue;\n              }\n              int idyC = int(dyC);\n\n              int wCPerm = ").concat(filterWidth, " - 1 - wC;\n\n              for (int d2 = 0; d2 < ").concat(convInfo.outChannels, "; d2++) {\n                float xValue = getDy(batch, idyF, idyR, idyC, d2);\n                float wValue = getW(wFPerm, wRPerm, wCPerm, d1, d2);\n                dotProd += xValue * wValue;\n              }\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ");
    }
    return Conv3DDerInputProgram;
}());

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
function conv2DBackpropFilter(args) {
    var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
    var x = inputs.x, dy = inputs.dy;
    var strides = attrs.strides, pad = attrs.pad, dataFormat = attrs.dataFormat, dimRoundingMode = attrs.dimRoundingMode, filterShape = attrs.filterShape;
    var $dataFormat = tf.backend_util.convertConv2DDataFormat(dataFormat);
    var convInfo = tf.backend_util.computeConv2DInfo(x.shape, filterShape, strides, 1 /* dilations */, pad, dimRoundingMode, false /* depthwise */, $dataFormat);
    var program = new Conv2DDerFilterProgram(convInfo);
    return backend.runWebGLProgram(program, [x, dy], 'float32');
}
var conv2DBackpropFilterConfig = {
    kernelName: tf.Conv2DBackpropFilter,
    backendName: 'webgl',
    kernelFunc: conv2DBackpropFilter,
};

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
var Conv2DDerInputPackedProgram = /** @class */ (function () {
    function Conv2DDerInputPackedProgram(convInfo) {
        this.variableNames = ['dy', 'W'];
        this.packedInputs = true;
        this.packedOutput = true;
        this.customUniforms = [
            { name: 'strides', type: 'vec2' },
        ];
        this.outputShape = convInfo.inShape;
        this.enableShapeUniforms = useShapeUniforms(this.outputShape.length);
        var filterHeight = convInfo.filterHeight;
        var filterWidth = convInfo.filterWidth;
        var padTop = filterHeight - 1 - convInfo.padInfo.top;
        var padLeft = filterWidth - 1 - convInfo.padInfo.left;
        this.userCode = "\n      const ivec2 pads = ivec2(".concat(padTop, ", ").concat(padLeft, ");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords[0];\n        int d1 = coords[3];\n\n        ivec2 dyCorner = ivec2(coords[1], coords[2]) - pads;\n        int dyRCorner = dyCorner.x;\n        int dyCCorner = dyCorner.y;\n\n        vec4 result = vec4(0.);\n        for (int wR = 0; wR < ").concat(filterHeight, "; wR++) {\n          float dyR = float(dyRCorner + wR) / strides[0];\n          if (dyR < 0.0 || dyR >= ").concat(convInfo.outHeight, ".0 || fract(dyR) > 0.0) {\n            continue;\n          }\n          int idyR = int(dyR);\n          int wRPerm = ").concat(filterHeight, " - 1 - wR;\n\n          for (int wC = 0; wC < ").concat(filterWidth, "; wC++) {\n            int wCPerm = ").concat(filterWidth, " - 1 - wC;\n\n            float dyC = float(dyCCorner + wC) / strides[1];\n            bool idyCVal = (dyC >= 0.0) && (dyC < ").concat(convInfo.outWidth, ".0)\n              && (fract(dyC) == 0.0);\n            int idyC = int(dyC);\n\n            float dyC2 = float(dyCCorner + wC + 1) / strides[1];\n            bool idyCVal2 = (dyC2 >= 0.0) && (dyC2 < ").concat(convInfo.outWidth, ".0)\n              && (fract(dyC2) == 0.0);\n            int idyC2 = int(dyC2);\n\n            if (idyCVal && idyCVal2) {\n              for (int d2 = 0; d2 < ").concat(convInfo.outChannels, "; d2 += 2) {\n                vec4 wValue = getW(wRPerm, wCPerm, d1, d2);\n                vec4 dySample = getDy(batch, idyR, idyC, d2);\n                vec4 dySample2 = (idyC / 2 == idyC2 / 2) ?\n                  dySample : getDy(batch, idyR, idyC2, d2);\n\n                vec2 dyValue = mod(float(idyC), 2.) == 0. ?\n                  dySample.xy : dySample.zw;\n                result.xy += vec2(dot(dyValue, wValue.xy),\n                  dot(dyValue, wValue.zw));\n\n                dyValue = mod(float(idyC2), 2.) == 0. ?\n                  dySample2.xy : dySample2.zw;\n                result.zw += vec2(dot(dyValue, wValue.xy),\n                  dot(dyValue, wValue.zw));\n              }\n            } else if (idyCVal) {\n              for (int d2 = 0; d2 < ").concat(convInfo.outChannels, "; d2 += 2) {\n                vec4 wValue = getW(wRPerm, wCPerm, d1, d2);\n                vec4 dySample = getDy(batch, idyR, idyC, d2);\n                vec2 dyValue = mod(float(idyC), 2.) == 0. ?\n                  dySample.xy : dySample.zw;\n                result.xy += vec2(dot(dyValue, wValue.xy),\n                  dot(dyValue, wValue.zw));\n              }\n            } else if (idyCVal2) {\n              for (int d2 = 0; d2 < ").concat(convInfo.outChannels, "; d2 += 2) {\n                vec4 wValue = getW(wRPerm, wCPerm, d1, d2);\n                vec4 dySample = getDy(batch, idyR, idyC2, d2);\n                vec2 dyValue = mod(float(idyC2), 2.) == 0. ?\n                  dySample.xy : dySample.zw;\n                result.zw += vec2(dot(dyValue, wValue.xy),\n                  dot(dyValue, wValue.zw));\n              }\n            }\n          }\n        }\n        setOutput(result);\n      }\n    ");
    }
    return Conv2DDerInputPackedProgram;
}());

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
function conv2DBackpropInput(args) {
    var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
    var dy = inputs.dy, filter = inputs.filter;
    var inputShape = attrs.inputShape, strides = attrs.strides, pad = attrs.pad, dataFormat = attrs.dataFormat, dimRoundingMode = attrs.dimRoundingMode;
    var $dataFormat = tf.backend_util.convertConv2DDataFormat(dataFormat);
    var convInfo = tf.backend_util.computeConv2DInfo(inputShape, filter.shape, strides, 1 /* dilations */, pad, dimRoundingMode, false, $dataFormat);
    if (tf.env().getBool('WEBGL_PACK_CONV2DTRANSPOSE') &&
        $dataFormat === 'channelsLast') {
        var customValues = [
            [convInfo.strideHeight, convInfo.strideWidth],
        ];
        var program = new Conv2DDerInputPackedProgram(convInfo);
        return backend.runWebGLProgram(program, [dy, filter], 'float32', customValues);
    }
    else {
        var program = new Conv2DDerInputProgram(convInfo);
        return backend.runWebGLProgram(program, [dy, filter], 'float32');
    }
}
var conv2DBackpropInputConfig = {
    kernelName: tf.Conv2DBackpropInput,
    backendName: 'webgl',
    kernelFunc: conv2DBackpropInput,
};

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
function conv3D(args) {
    var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
    var x = inputs.x, filter = inputs.filter;
    var strides = attrs.strides, pad = attrs.pad, dilations = attrs.dilations;
    var convInfo = tf.backend_util.computeConv3DInfo(x.shape, filter.shape, strides, dilations, pad);
    var program = new Conv3DProgram(convInfo);
    return backend.runWebGLProgram(program, [x, filter], 'float32');
}
var conv3DConfig = {
    kernelName: tf.Conv3D,
    backendName: 'webgl',
    kernelFunc: conv3D,
};

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
function conv3DBackpropFilterV2(args) {
    var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
    var x = inputs.x, dy = inputs.dy;
    var strides = attrs.strides, pad = attrs.pad, filterShape = attrs.filterShape;
    var convInfo = tf.backend_util.computeConv3DInfo(x.shape, filterShape, strides, 1 /* dilations */, pad);
    var program = new Conv3DDerFilterProgram(convInfo);
    return backend.runWebGLProgram(program, [x, dy], 'float32');
}
var conv3DBackpropFilterV2Config = {
    kernelName: tf.Conv3DBackpropFilterV2,
    backendName: 'webgl',
    kernelFunc: conv3DBackpropFilterV2
};

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
function conv3DBackpropInput(args) {
    var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
    var dy = inputs.dy, filter = inputs.filter;
    var pad = attrs.pad, strides = attrs.strides, inputShape = attrs.inputShape;
    var convInfo = tf.backend_util.computeConv3DInfo(inputShape, filter.shape, strides, 1 /* dilations */, pad);
    var program = new Conv3DDerInputProgram(convInfo);
    return backend.runWebGLProgram(program, [dy, filter], 'float32');
}
var conv3DBackpropInputConfig = {
    kernelName: tf.Conv3DBackpropInputV2,
    backendName: 'webgl',
    kernelFunc: conv3DBackpropInput,
};

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
var COS = CHECK_NAN_SNIPPET_UNARY + "\n  return cos(x);\n";
var COS_PACKED = "\n  vec4 result = cos(x);\n  bvec4 isNaN = isnan(x);\n  ".concat(CHECK_NAN_SNIPPET_PACKED, "\n  return result;\n");
var cos = unaryKernelFunc({ opSnippet: COS, packedOpSnippet: COS_PACKED });
var cosConfig = {
    kernelName: tf.Cos,
    backendName: 'webgl',
    kernelFunc: cos,
};

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
var COSH = "\n  float e2x = exp(-x);\n  return (e2x + 1.0 / e2x) / 2.0;\n";
var cosh = unaryKernelFunc({ opSnippet: COSH });
var coshConfig = {
    kernelName: tf.Cosh,
    backendName: 'webgl',
    kernelFunc: cosh,
};

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
var CropAndResizeProgram = /** @class */ (function () {
    function CropAndResizeProgram(imageShape, boxShape, cropSize, method, extrapolationValue) {
        this.variableNames = ['Image', 'Boxes', 'BoxInd'];
        this.outputShape = [];
        var _a = __read(imageShape, 4), batch = _a[0], imageHeight = _a[1], imageWidth = _a[2], depth = _a[3];
        var _b = __read(boxShape, 1), numBoxes = _b[0];
        var _c = __read(cropSize, 2), cropHeight = _c[0], cropWidth = _c[1];
        this.outputShape = [numBoxes, cropHeight, cropWidth, depth];
        var methodId = method === 'bilinear' ? 1 : 0;
        var _d = __read(["".concat(imageHeight - 1, ".0"), "".concat(imageWidth - 1, ".0")], 2), inputHeightFloat = _d[0], inputWidthFloat = _d[1];
        var _e = __read(cropHeight > 1 ?
            [
                "".concat((imageHeight - 1) / (cropHeight - 1)),
                '(y2-y1) * height_ratio',
                "y1*".concat(inputHeightFloat, " + float(y)*(height_scale)"),
            ] :
            [
                '0.0',
                '0.0',
                "0.5 * (y1+y2) * ".concat(inputHeightFloat),
            ], 3), heightRatio = _e[0], heightScale = _e[1], inY = _e[2];
        var _f = __read(cropWidth > 1 ?
            [
                "".concat((imageWidth - 1) / (cropWidth - 1)),
                '(x2-x1) * width_ratio',
                "x1*".concat(inputWidthFloat, " + float(x)*(width_scale)"),
            ] :
            [
                '0.0',
                '0.0',
                "0.5 * (x1+x2) * ".concat(inputWidthFloat),
            ], 3), widthRatio = _f[0], widthScale = _f[1], inX = _f[2];
        // Reference implementation
        // tslint:disable-next-line:max-line-length
        // https://github.com/tensorflow/tensorflow/blob/master/tensorflow/core/kernels/crop_and_resize_op_gpu.cu.cc
        this.userCode = "\n      const float height_ratio = float(".concat(heightRatio, ");\n      const float width_ratio = float(").concat(widthRatio, ");\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int y = coords[1];\n        int x = coords[2];\n        int d = coords[3];\n\n        // get box vals\n        float y1 = getBoxes(b,0);\n        float x1 = getBoxes(b,1);\n        float y2 = getBoxes(b,2);\n        float x2 = getBoxes(b,3);\n\n        // get image in batch index\n        int bInd = round(getBoxInd(b));\n        if(bInd < 0 || bInd >= ").concat(batch, ") {\n          return;\n        }\n\n        float height_scale = ").concat(heightScale, ";\n        float width_scale = ").concat(widthScale, ";\n\n        float in_y = ").concat(inY, ";\n        if( in_y < 0.0 || in_y > ").concat(inputHeightFloat, " ) {\n          setOutput(float(").concat(extrapolationValue, "));\n          return;\n        }\n        float in_x = ").concat(inX, ";\n        if( in_x < 0.0 || in_x > ").concat(inputWidthFloat, " ) {\n          setOutput(float(").concat(extrapolationValue, "));\n          return;\n        }\n\n        vec2 sourceFracIndexCR = vec2(in_x,in_y);\n        if(").concat(methodId, " == 1) {\n          // Compute the four integer indices.\n          ivec2 sourceFloorCR = ivec2(sourceFracIndexCR);\n          ivec2 sourceCeilCR = ivec2(ceil(sourceFracIndexCR));\n\n          float topLeft = getImage(b, sourceFloorCR.y, sourceFloorCR.x, d);\n          float bottomLeft = getImage(b, sourceCeilCR.y, sourceFloorCR.x, d);\n          float topRight = getImage(b, sourceFloorCR.y, sourceCeilCR.x, d);\n          float bottomRight = getImage(b, sourceCeilCR.y, sourceCeilCR.x, d);\n\n          vec2 fracCR = sourceFracIndexCR - vec2(sourceFloorCR);\n\n          float top = topLeft + (topRight - topLeft) * fracCR.x;\n          float bottom = bottomLeft + (bottomRight - bottomLeft) * fracCR.x;\n          float newValue = top + (bottom - top) * fracCR.y;\n          setOutput(newValue);\n        } else {\n          // Compute the coordinators of nearest neighbor point.\n          ivec2 sourceNearestCR = ivec2(floor(\n            sourceFracIndexCR + vec2(0.5,0.5)));\n          float newValue = getImage(b, sourceNearestCR.y, sourceNearestCR.x, d);\n          setOutput(newValue);\n        }\n      }\n    ");
    }
    return CropAndResizeProgram;
}());

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
var cropAndResize = function (args) {
    var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
    var image = inputs.image, boxes = inputs.boxes, boxInd = inputs.boxInd;
    var cropSize = attrs.cropSize, method = attrs.method, extrapolationValue = attrs.extrapolationValue;
    var program = new CropAndResizeProgram(image.shape, boxes.shape, cropSize, method, extrapolationValue);
    return backend.runWebGLProgram(program, [image, boxes, boxInd], 'float32');
};
var cropAndResizeConfig = {
    kernelName: tf.CropAndResize,
    backendName: 'webgl',
    kernelFunc: cropAndResize
};

var CumOpType;
(function (CumOpType) {
    CumOpType["Prod"] = "*";
    CumOpType["Sum"] = "+";
})(CumOpType || (CumOpType = {}));
var CumProgram = /** @class */ (function () {
    function CumProgram(op, outputShape, exclusive, reverse) {
        this.op = op;
        this.outputShape = outputShape;
        this.variableNames = ['x'];
        this.customUniforms = [{ name: 'index', type: 'float' }];
        var rank = this.outputShape.length;
        var initVal = this.op === CumOpType.Prod ? '1.0' : '0.0';
        var val = exclusive ? initVal : "getX(".concat(getCoords(rank, 'coords', this.op), ")");
        var length = this.outputShape[this.outputShape.length - 1];
        var condition = '';
        var idxString = '';
        // When exclusive is set, the cum op becomes roll op that copies the
        // value from the previous index based on the direction specified by the
        // reverse flag.
        if (exclusive) {
            condition = reverse ? "end != ".concat(length - 1) : 'end != 0';
            idxString = reverse ? 'end + 1' : 'end - 1';
        }
        else {
            condition = reverse ? "end + pow2 < ".concat(length) : 'end >= pow2';
            idxString = (reverse ? 'end + pow2' : 'end - pow2');
        }
        this.userCode = "\n      void main() {\n        ".concat(getCoordsDataType(rank), " coords = getOutputCoords();\n        int end = ").concat(getFinalCoord(rank, 'coords', this.op), ";\n        float val = ").concat(val, ";\n        int pow2 = int(pow(2.0, index));\n        if (").concat(condition, ") {\n          int idx = ").concat(idxString, ";\n          ").concat(getFinalCoord(rank, 'coords', this.op), " = idx;\n          val ").concat(this.op, "= getX(").concat(getCoords(rank, 'coords', this.op), ");\n        }\n        setOutput(val);\n      }\n    ");
    }
    return CumProgram;
}());
function getCoords(rank, name, op) {
    if (rank === 1) {
        return "".concat(name);
    }
    else if (rank === 2) {
        return "".concat(name, ".x, ").concat(name, ".y");
    }
    else if (rank === 3) {
        return "".concat(name, ".x, ").concat(name, ".y, ").concat(name, ".z");
    }
    else if (rank === 4) {
        return "".concat(name, ".x, ").concat(name, ".y, ").concat(name, ".z, ").concat(name, ".w");
    }
    else {
        throw new Error("Cumulative ".concat(op, " for rank ").concat(rank, " is not yet supported"));
    }
}
function getFinalCoord(rank, name, op) {
    if (rank === 1) {
        return "".concat(name);
    }
    else if (rank === 2) {
        return "".concat(name, ".y");
    }
    else if (rank === 3) {
        return "".concat(name, ".z");
    }
    else if (rank === 4) {
        return "".concat(name, ".w");
    }
    else {
        throw new Error("Cumulative ".concat(op, " for rank ").concat(rank, " is not yet supported"));
    }
}

/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
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
function cumImpl(op, x, backend, axis, exclusive, reverse) {
    var xRank = x.shape.length;
    var permutation = tf.backend_util.getAxesPermutation([axis], xRank);
    var permutedX = x;
    if (permutation != null) {
        permutedX = transpose({ inputs: { x: x }, backend: backend, attrs: { perm: permutation } });
    }
    var permutedAxis = tf.backend_util.getInnerMostAxes(1, xRank)[0];
    if (permutedAxis !== xRank - 1) {
        throw new Error("WebGL cumprod shader expects an inner-most axis=".concat(x.shape.length - 1, " ") +
            "but got axis=".concat(axis));
    }
    var size = permutedX.shape[permutedAxis];
    var result = identity({ inputs: { x: permutedX }, backend: backend });
    // Use cum parallel algorithm, inspired by:
    // https://developer.nvidia.com/gpugems/gpugems3/part-vi-gpu-computing/chapter-39-parallel-prefix-sum-scan-cuda
    // Note: although the algorithm is called sum, it works for any associtative
    // operator with an identity.
    for (var i = 0; i <= Math.ceil(Math.log2(size)) - 1; i++) {
        var program = new CumProgram(op, permutedX.shape, false, reverse);
        var customValues = [[i]];
        var prevResult = result;
        result =
            backend.runWebGLProgram(program, [result], result.dtype, customValues);
        backend.disposeIntermediateTensorInfo(prevResult);
    }
    // For exclusive cum, shift the end result in the direction of product or sum
    // and add 1 for product or 0 for sum to the front index.
    if (exclusive) {
        var program = new CumProgram(op, permutedX.shape, exclusive, reverse);
        var prevResult = result;
        result = backend.runWebGLProgram(program, [result], result.dtype);
        backend.disposeIntermediateTensorInfo(prevResult);
    }
    if (permutation != null) {
        var reversePermutation = tf.backend_util.getUndoAxesPermutation(permutation);
        var reverseTransposedResult = transpose({ inputs: { x: result }, backend: backend, attrs: { perm: reversePermutation } });
        backend.disposeIntermediateTensorInfo(result);
        backend.disposeIntermediateTensorInfo(permutedX);
        return reverseTransposedResult;
    }
    return result;
}

/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
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
function cumprod(args) {
    var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
    var x = inputs.x;
    var axis = attrs.axis, exclusive = attrs.exclusive, reverse = attrs.reverse;
    return cumImpl(CumOpType.Prod, x, backend, axis, exclusive, reverse);
}
var cumprodConfig = {
    kernelName: tf.Cumprod,
    backendName: 'webgl',
    kernelFunc: cumprod
};

/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
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
function cumsum(args) {
    var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
    var x = inputs.x;
    var axis = attrs.axis, exclusive = attrs.exclusive, reverse = attrs.reverse;
    return cumImpl(CumOpType.Sum, x, backend, axis, exclusive, reverse);
}
var cumsumConfig = {
    kernelName: tf.Cumsum,
    backendName: 'webgl',
    kernelFunc: cumsum
};

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
function denseBincount(args) {
    var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
    var x = inputs.x, weights = inputs.weights;
    var size = attrs.size, binaryOutput = attrs.binaryOutput;
    if (x.shape.length === 1) {
        var xVals = backend.readSync(x.dataId);
        var weightsVals = backend.readSync(weights.dataId);
        var outVals = bincountImplCPU(xVals, weightsVals, weights.dtype, weights.shape, size);
        return backend.makeTensorInfo([size], weights.dtype, outVals);
    }
    else if (x.shape.length === 2) {
        var xBuf = backend.bufferSync(x);
        var weightsBuf = backend.bufferSync(weights);
        var outBuf = bincountReduceImplCPU(xBuf, weightsBuf, size, binaryOutput);
        return backend.makeTensorInfo(outBuf.shape, weights.dtype, outBuf.values);
    }
    throw new Error("Error in denseBincount: input must be at most rank 2, but got rank" +
        "".concat(x.shape.length, "."));
}
var denseBincountConfig = {
    kernelName: tf.DenseBincount,
    backendName: 'webgl',
    kernelFunc: denseBincount
};

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
var DepthToSpaceProgram = /** @class */ (function () {
    function DepthToSpaceProgram(outputShape, blockSize, dataFormat) {
        this.variableNames = ['x'];
        this.outputShape = [];
        this.outputShape = outputShape;
        this.blockSize = blockSize;
        this.dataFormat = dataFormat;
        this.userCode = "\n    void main() {\n      ivec4 coords = getOutputCoords();\n      int b = coords[0];\n      int h = ".concat(this.getHeightCoordString(), ";\n      int w = ").concat(this.getWidthCoordString(), ";\n      int d = ").concat(this.getDepthCoordString(), ";\n\n      int in_h = h / ").concat(blockSize, ";\n      int offset_h = imod(h, ").concat(blockSize, ");\n      int in_w = w / ").concat(blockSize, ";\n      int offset_w = imod(w, ").concat(blockSize, ");\n      int offset_d = (offset_h * ").concat(blockSize, " + offset_w) *\n        ").concat(this.getOutputDepthSize(), ";\n      int in_d = d + offset_d;\n\n      float result = ").concat(this.getInputSamplingString(), ";\n      setOutput(result);\n    }\n  ");
    }
    DepthToSpaceProgram.prototype.getHeightCoordString = function () {
        if (this.dataFormat === 'NHWC') {
            return "coords[1]";
        }
        else {
            return "coords[2]";
        }
    };
    DepthToSpaceProgram.prototype.getWidthCoordString = function () {
        if (this.dataFormat === 'NHWC') {
            return "coords[2]";
        }
        else {
            return "coords[3]";
        }
    };
    DepthToSpaceProgram.prototype.getDepthCoordString = function () {
        if (this.dataFormat === 'NHWC') {
            return "coords[3]";
        }
        else {
            return "coords[1]";
        }
    };
    DepthToSpaceProgram.prototype.getOutputDepthSize = function () {
        if (this.dataFormat === 'NHWC') {
            return this.outputShape[3];
        }
        else {
            return this.outputShape[1];
        }
    };
    DepthToSpaceProgram.prototype.getInputSamplingString = function () {
        if (this.dataFormat === 'NHWC') {
            return "getX(b, in_h, in_w, in_d)";
        }
        else {
            return "getX(b, in_d, in_h, in_w)";
        }
    };
    return DepthToSpaceProgram;
}());

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
function depthToSpace(args) {
    var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
    var x = inputs.x;
    var blockSize = attrs.blockSize, dataFormat = attrs.dataFormat;
    var batchSize = x.shape[0];
    var inputHeight = (dataFormat === 'NHWC') ? x.shape[1] : x.shape[2];
    var inputWidth = (dataFormat === 'NHWC') ? x.shape[2] : x.shape[3];
    var inputDepth = (dataFormat === 'NHWC') ? x.shape[3] : x.shape[1];
    var outputHeight = inputHeight * blockSize;
    var outputWidth = inputWidth * blockSize;
    var outputDepth = inputDepth / (blockSize * blockSize);
    var outputShape = (dataFormat === 'NHWC') ?
        [batchSize, outputHeight, outputWidth, outputDepth] :
        [batchSize, outputDepth, outputHeight, outputWidth];
    var program = new DepthToSpaceProgram(outputShape, blockSize, dataFormat);
    return backend.runWebGLProgram(program, [x], x.dtype);
}
var depthToSpaceConfig = {
    kernelName: tf.DepthToSpace,
    backendName: 'webgl',
    kernelFunc: depthToSpace
};

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
var DepthwiseConv2DProgram = /** @class */ (function () {
    function DepthwiseConv2DProgram(convInfo, addBias, activation, hasPreluActivation, hasLeakyReluAlpha) {
        if (addBias === void 0) { addBias = false; }
        if (activation === void 0) { activation = null; }
        if (hasPreluActivation === void 0) { hasPreluActivation = false; }
        if (hasLeakyReluAlpha === void 0) { hasLeakyReluAlpha = false; }
        this.variableNames = ['x', 'W'];
        this.customUniforms = [
            { name: 'pads', type: 'ivec2' },
            { name: 'strides', type: 'ivec2' },
            { name: 'dilations', type: 'ivec2' },
            { name: 'inDims', type: 'ivec2' },
        ];
        this.outputShape = convInfo.outShape;
        this.enableShapeUniforms = useShapeUniforms(this.outputShape.length);
        var filterHeight = convInfo.filterHeight;
        var filterWidth = convInfo.filterWidth;
        var channelMul = convInfo.outChannels / convInfo.inChannels;
        var activationSnippet = '', applyActivationSnippet = '';
        if (activation) {
            if (hasPreluActivation) {
                activationSnippet = "float activation(float a) {\n          float b = getPreluActivationWeightsAtOutCoords();\n          ".concat(activation, "\n        }");
            }
            else if (hasLeakyReluAlpha) {
                activationSnippet = "float activation(float a) {\n          float b = getLeakyreluAlphaAtOutCoords();\n          ".concat(activation, "\n        }");
            }
            else {
                activationSnippet = "\n          float activation(float x) {\n            ".concat(activation, "\n          }\n        ");
            }
            applyActivationSnippet = "result = activation(result);";
        }
        var addBiasSnippet = addBias ? 'result += getBiasAtOutCoords();' : '';
        if (addBias) {
            this.variableNames.push('bias');
        }
        if (hasPreluActivation) {
            this.variableNames.push('preluActivationWeights');
        }
        if (hasLeakyReluAlpha) {
            this.variableNames.push('leakyreluAlpha');
        }
        this.userCode = "\n      ".concat(activationSnippet, "\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords.x;\n        ivec2 xRCCorner = coords.yz * strides - pads;\n        int d2 = coords.w;\n        int d1 = d2 / ").concat(channelMul, ";\n        int q = d2 - d1 * ").concat(channelMul, ";\n\n        int xRCorner = xRCCorner.x;\n        int xCCorner = xRCCorner.y;\n\n        // Convolve x(?, ?, d1) with w(:, :, d1, q) to get y(yR, yC, d2).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        // TO DO(dsmilkov): Flatten the two for loops and vec4 the operations.\n        for (int wR = 0; wR < ").concat(filterHeight, "; wR++) {\n          int xR = xRCorner + wR * dilations[0];\n\n          if (xR < 0 || xR >= inDims[0]) {\n            continue;\n          }\n\n          for (int wC = 0; wC < ").concat(filterWidth, "; wC++) {\n            int xC = xCCorner + wC * dilations[1];\n\n            if (xC < 0 || xC >= inDims[1]) {\n              continue;\n            }\n\n            float xVal = getX(batch, xR, xC, d1);\n            float wVal = getW(wR, wC, d1, q);\n            dotProd += xVal * wVal;\n          }\n        }\n\n        float result = dotProd;\n        ").concat(addBiasSnippet, "\n        ").concat(applyActivationSnippet, "\n        setOutput(result);\n      }\n    ");
    }
    return DepthwiseConv2DProgram;
}());

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
var DepthwiseConvPacked2DProgram = /** @class */ (function () {
    function DepthwiseConvPacked2DProgram(convInfo, addBias, activation, hasPreluActivation, hasLeakyReluAlpha) {
        if (addBias === void 0) { addBias = false; }
        if (activation === void 0) { activation = null; }
        if (hasPreluActivation === void 0) { hasPreluActivation = false; }
        if (hasLeakyReluAlpha === void 0) { hasLeakyReluAlpha = false; }
        this.variableNames = ['x', 'W'];
        this.packedInputs = true;
        this.packedOutput = true;
        this.customUniforms = [
            { name: 'pads', type: 'ivec2' },
            { name: 'strides', type: 'ivec2' },
            { name: 'dilations', type: 'ivec2' },
            { name: 'inDims', type: 'ivec2' },
        ];
        this.outputShape = convInfo.outShape;
        this.enableShapeUniforms = useShapeUniforms(this.outputShape.length);
        var channelMul = convInfo.outChannels / convInfo.inChannels;
        var padLeft = convInfo.padInfo.left;
        var strideWidth = convInfo.strideWidth;
        var dilationWidth = convInfo.dilationWidth;
        var filterHeight = convInfo.filterHeight;
        var filterWidth = convInfo.filterWidth;
        var texelsAcross = filterWidth;
        var mainLoop = "\n      int xR; int xC; int xCOffset;\n      vec4 wTexel; vec4 previous; vec4 final;";
        for (var c = 0; c < filterWidth; c++) {
            mainLoop += "\n          vec4 xTexelC".concat(c * 2, ";\n          int xTexelC").concat(c * 2, "Ready;\n          vec4 xTexelC").concat(c * 2 + 1, ";\n          int xTexelC").concat(c * 2 + 1, "Ready;\n          vec4 xC").concat(c, ";");
        }
        /**
         * This vectorized implementation works by gathering the values needed for
         * each output channel's dot product into vec4's and then multiplying them
         * all together (this happens in the final double for-loop below). Most of
         * the main loop consists of constructing these vec4's with the minimum
         * number of texture2D calls, which means making use of all four returned
         * values from a texture2D call at once.
         */
        mainLoop += "\n    for (int r = 0; r < ".concat(filterHeight, "; r++) {\n      ");
        for (var c = 0; c < filterWidth; c++) {
            mainLoop += "\n          xTexelC".concat(c * 2, " = vec4(0.0);\n          xTexelC").concat(c * 2, "Ready = 0;\n          xTexelC").concat(c * 2 + 1, " = vec4(0.0);\n          xTexelC").concat(c * 2 + 1, "Ready = 0;\n          xC").concat(c, " = vec4(0.0);");
        }
        mainLoop += "\n        xR = xRCorner + r * dilations[0];\n        if (xR >=0 && xR < inDims[0]) {\n      ";
        for (var texelC = 0; texelC < (texelsAcross + 1) / 2; texelC++) {
            var colIndex = texelC * 2;
            mainLoop += "\n          xC = xCCorner + ".concat(colIndex * dilationWidth, ";\n          ");
            if (strideWidth === 1) {
                if (colIndex < filterWidth) {
                    // If padding is odd, the outer texels have to be composed.
                    if (padLeft % 2 === 1) {
                        // TODO: Ensure vec4 previous does not result in redundant sample,
                        // and avoid setting xTexelRC's that exceed the boundary in the
                        // first place rather than resetting them to vec4(0)).
                        // To compute xCOffset:
                        // - If padding is odd, we must add 1 to ensure we ask for an
                        // even-numbered row.
                        // - We subtract 2 to access the previous texel.
                        mainLoop += "\n                xCOffset = xC + 1;\n                if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC".concat(colIndex, "Ready == 0) {\n                  xTexelC").concat(colIndex, " = getX(batch, xR, xCOffset, d1);\n\n                  // Need to manually clear unused channels in case\n                  // we're reading from recycled texture.\n                  if (xCOffset + 1 >= inDims[1]) {\n                    xTexelC").concat(colIndex, ".zw = vec2(0.0);\n                  }\n                  xTexelC").concat(colIndex, "Ready = 1;\n                }\n              ");
                        // This texel has been read in previous iteration if the dilation
                        // is 1.
                        if (dilationWidth === 1 && colIndex > 0) {
                            mainLoop += "\n                xC".concat(colIndex, " = vec4(xTexelC").concat(colIndex - 2, ".zw, xTexelC").concat(colIndex, ".xy);\n                ");
                        }
                        else {
                            mainLoop += "\n                  xCOffset = xC + 1 - 2;\n\n                  if (xCOffset >= 0 && xCOffset < inDims[1]) {\n                    previous = getX(batch, xR, xCOffset, d1);\n\n                    // Need to manually clear unused channels in case\n                    // we're reading from recycled texture.\n                    if (xCOffset + 1 >= inDims[1]) {\n                      previous.zw = vec2(0.0);\n                    }\n\n                    xC".concat(colIndex, " = vec4(previous.zw, xTexelC").concat(colIndex, ".xy);\n                  } else {\n                    xC").concat(colIndex, " = vec4(0.0, 0.0, xTexelC").concat(colIndex, ".xy);\n                  }\n                  ");
                        }
                    }
                    else {
                        // Padding is even, so xRC corresponds to a single texel.
                        mainLoop += "\n                if (xC >= 0 && xC < inDims[1] && xTexelC".concat(colIndex, "Ready == 0) {\n                  xTexelC").concat(colIndex, " = getX(batch, xR, xC, d1);\n                  if (xC + 1 >= inDims[1]) {\n                    xTexelC").concat(colIndex, ".zw = vec2(0.0);\n                  }\n                  xTexelC").concat(colIndex, "Ready = 1;\n                }\n\n                xC").concat(colIndex, " = xTexelC").concat(colIndex, ";\n                ");
                    }
                    if (colIndex + 1 < filterWidth) {
                        // If dilation is even, the second entry should match the first
                        // (either both are composed or both are single samples). But if
                        // dilation is odd, then the second entry should be the opposite
                        // of the first (if the first is composed, the second is a single
                        // sample, and vice versa.)
                        var nextTexelOffset = padLeft % 2 === 0 ?
                            tf.util.nearestLargerEven(dilationWidth) :
                            dilationWidth;
                        if ((dilationWidth % 2 === 0 && padLeft % 2 === 1) ||
                            (dilationWidth % 2 !== 0 && padLeft % 2 !== 1)) {
                            mainLoop += "\n                  xCOffset = xC + imod(pads[1], 2) + ".concat(nextTexelOffset, ";\n\n                  if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC").concat(colIndex + 1, "Ready == 0) {\n                    xTexelC").concat(colIndex + 1, " = getX(batch, xR, xCOffset, d1);\n\n                    // Need to manually clear unused channels in case\n                    // we're reading from recycled texture.\n                    if (xCOffset + 1 >= inDims[1]) {\n                      xTexelC").concat(colIndex + 1, ".zw = vec2(0.0);\n                    }\n                    xTexelC").concat(colIndex + 1, "Ready = 1;\n                  }\n                  ");
                            // If dilation > 1 then the xRC's will not be able to share any
                            // values, so each xRC will require two unique calls to getX.
                            if (dilationWidth > 1) {
                                mainLoop += "\n                    xCOffset -= 2;\n                    if (xCOffset >= 0 && xCOffset < inDims[1]) {\n                     previous = getX(batch, xR, xCOffset, d1);\n                     xC".concat(colIndex + 1, " = vec4(previous.zw, xTexelC").concat(colIndex + 1, ".xy);\n                    } else {\n                     xC").concat(colIndex + 1, " = vec4(0.0, 0.0, xTexelC").concat(colIndex + 1, ".xy);\n                    }\n                    ");
                            }
                            else {
                                mainLoop += "\n                    xC".concat(colIndex + 1, " = vec4(xTexelC").concat(colIndex, ".zw, xTexelC").concat(colIndex + 1, ".xy);\n                    ");
                            }
                        }
                        else {
                            // If dilation is 1 and padding is odd, we have already read the
                            // texel when constructing the previous x value. Here we can
                            // simply skip the texture read.
                            if (nextTexelOffset === 1) {
                                mainLoop += "\n                    xC".concat(colIndex + 1, " = xTexelC").concat(colIndex, ";\n                    ");
                            }
                            else {
                                mainLoop += "\n                    xCOffset = xC + ".concat(nextTexelOffset, ";\n\n                    if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC").concat(colIndex + 1, "Ready == 0) {\n                      xTexelC").concat(colIndex + 1, " = getX(batch, xR, xCOffset, d1);\n                      if (xCOffset + 1 >= inDims[1]) {\n                        xTexelC").concat(colIndex + 1, ".zw = vec2(0.0);\n                      }\n                      xTexelC").concat(colIndex + 1, "Ready = 1;\n                    }\n\n                    xC").concat(colIndex + 1, " = xTexelC").concat(colIndex + 1, ";\n                    ");
                            }
                        }
                    }
                }
            }
            else { // stride === 2
                if (colIndex < filterWidth) {
                    // Depending on whether padLeft is even or odd, we want either the
                    // xy or zw channels from X texels for xC${colIndex}. If padLeft is
                    // even, xC${colIndex +1} is simply the zw channels of texels we've
                    // already sampled. But if padLeft is odd, xC{$c + 1}.zw will
                    // need to come from the xy channels of a new texel, hence the `
                    // vec4
                    // final` initialized below.
                    if (padLeft % 2 === 1) {
                        mainLoop += "\n                xCOffset = xC + 1 - strides[1];\n                if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC".concat(colIndex, "Ready == 0) {\n                  xTexelC").concat(colIndex, " = getX(batch, xR, xCOffset, d1);\n                  // Need to manually clear unused channels in case\n                  // we're reading from recycled texture.\n                  if (xCOffset + 1 >= inDims[1]) {\n                    xTexelC").concat(colIndex, ".zw = vec2(0.0);\n                  }\n                  xTexelC").concat(colIndex, "Ready = 1;\n                }\n\n                if(xC + 1 >= 0 && xC + 1 < inDims[1] && xTexelC").concat(colIndex + 1, "Ready == 0) {\n                  xTexelC").concat(colIndex + 1, " = getX(batch, xR, xC + 1, d1);\n                  // Need to manually clear unused channels in case\n                  // we're reading from recycled texture.\n                  if (xC + 2 >= inDims[1]) {\n                    xTexelC").concat(colIndex + 1, ".zw = vec2(0.0);\n                  }\n                  xTexelC").concat(colIndex + 1, "Ready = 1;\n                }\n\n                xC").concat(colIndex, " = vec4(xTexelC").concat(colIndex, ".zw, xTexelC").concat(colIndex + 1, ".zw);\n              ");
                        if (colIndex + 1 < filterWidth) {
                            mainLoop += "\n                  final = vec4(0.0);\n                  xCOffset = xC + 1 + strides[1];\n                  if(xCOffset >= 0 && xCOffset < inDims[1]) {\n                    final = getX(batch, xR, xCOffset, d1);\n                  }\n                  xC".concat(colIndex + 1, " = vec4(xTexelC").concat(colIndex + 1, ".xy, final.xy);\n                ");
                        }
                    }
                    else {
                        mainLoop += "\n                if(xC >= 0 && xC < inDims[1] && xTexelC".concat(colIndex, "Ready == 0) {\n                  xTexelC").concat(colIndex, " = getX(batch, xR, xC, d1);\n                  if (xC + 1 >= inDims[1]) {\n                    xTexelC").concat(colIndex, ".zw = vec2(0.0);\n                  }\n                  xTexelC").concat(colIndex, "Ready = 1;\n                }\n\n                xCOffset = xC + strides[1];\n                if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC").concat(colIndex + 1, "Ready == 0) {\n                  xTexelC").concat(colIndex + 1, " = getX(batch, xR, xCOffset, d1);\n                  if (xCOffset + 1 >= inDims[1]) {\n                    xTexelC").concat(colIndex + 1, ".zw = vec2(0.);\n                  }\n                  xTexelC").concat(colIndex + 1, "Ready = 1;\n                }\n\n                xC").concat(colIndex, " = vec4(\n                  xTexelC").concat(colIndex, ".xy, xTexelC").concat(colIndex + 1, ".xy);\n              ");
                        if (colIndex + 1 < filterWidth) {
                            mainLoop += "\n                  xC".concat(colIndex + 1, " = vec4(xTexelC").concat(colIndex, ".zw, xTexelC").concat(colIndex + 1, ".zw);\n                ");
                        }
                    }
                }
            }
            // localize the dotProd accumulation within the loop, the theory is for
            // GPU with limited cache, accumulate sum across large amount of
            // veriables will cause lots of cache misses. (i.e. 5x5 filter will have
            // 50 variables)
            if (colIndex < filterWidth) {
                mainLoop += "\n            wTexel = getW(r, ".concat(colIndex, ", d1, q);\n            dotProd += xC").concat(colIndex, " * vec4(wTexel.xz, wTexel.xz);\n          ");
                if (colIndex + 1 < filterWidth) {
                    mainLoop += "\n              wTexel = getW(r, ".concat(colIndex + 1, ", d1, q);\n              dotProd += xC").concat(colIndex + 1, " * vec4(wTexel.xz, wTexel.xz);\n            ");
                }
            }
        }
        mainLoop += "\n    }\n  ";
        mainLoop += "\n      }\n    ";
        var activationSnippet = '', applyActivationSnippet = '';
        if (activation) {
            if (hasPreluActivation) {
                activationSnippet = "vec4 activation(vec4 a) {\n          vec4 b = getPreluActivationWeightsAtOutCoords();\n          ".concat(activation, "\n        }");
            }
            else if (hasLeakyReluAlpha) {
                activationSnippet = "vec4 activation(vec4 a) {\n          vec4 b = getLeakyreluAlphaAtOutCoords();\n          ".concat(activation, "\n        }");
            }
            else {
                activationSnippet = "vec4 activation(vec4 x) {\n          ".concat(activation, "\n        }");
            }
            applyActivationSnippet = "result = activation(result);";
        }
        var addBiasSnippet = addBias ? 'result += getBiasAtOutCoords();' : '';
        if (addBias) {
            this.variableNames.push('bias');
        }
        if (hasPreluActivation) {
            this.variableNames.push('preluActivationWeights');
        }
        if (hasLeakyReluAlpha) {
            this.variableNames.push('leakyreluAlpha');
        }
        this.userCode = "\n      ".concat(activationSnippet, "\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords.x;\n        ivec2 xRCCorner = coords.yz * strides - pads;\n        int d2 = coords.w;\n        int d1 = d2 / ").concat(channelMul, ";\n        int q = d2 - d1 * ").concat(channelMul, ";\n        int xRCorner = xRCCorner.x;\n        int xCCorner = xRCCorner.y;\n\n        //intialize dotProd with a small epsilon seems to reduce GPU accuracy loss.\n        vec4 dotProd = vec4(0.000000000000001);\n\n        ").concat(mainLoop, "\n\n        vec4 result = dotProd - vec4(0.000000000000001);\n        ").concat(addBiasSnippet, "\n        ").concat(applyActivationSnippet, "\n        setOutput(result);\n      }\n    ");
    }
    return DepthwiseConvPacked2DProgram;
}());

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
function depthwiseConv2dNative(args) {
    var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
    var x = inputs.x, filter = inputs.filter;
    var strides = attrs.strides, pad = attrs.pad, dilations = attrs.dilations, dimRoundingMode = attrs.dimRoundingMode;
    var $dilations = dilations;
    if ($dilations == null) {
        $dilations = [1, 1];
    }
    tf.util.assert(tf.backend_util.eitherStridesOrDilationsAreOne(strides, $dilations), function () { return 'Error in depthwiseConv2d: Either strides or dilations must be ' +
        "1. Got strides ".concat(strides, " and dilations '").concat($dilations, "'"); });
    var convInfo = tf.backend_util.computeConv2DInfo(x.shape, filter.shape, strides, $dilations, pad, dimRoundingMode, true /* depthwise */);
    var program;
    if (tf.env().getBool('WEBGL_PACK_DEPTHWISECONV') && convInfo.strideWidth <= 2 &&
        convInfo.outChannels / convInfo.inChannels === 1) {
        program = new DepthwiseConvPacked2DProgram(convInfo);
    }
    else {
        program = new DepthwiseConv2DProgram(convInfo);
    }
    var customValues = [
        [convInfo.padInfo.top, convInfo.padInfo.left],
        [convInfo.strideHeight, convInfo.strideWidth],
        [convInfo.dilationHeight, convInfo.dilationWidth],
        [convInfo.inHeight, convInfo.inWidth]
    ];
    return backend.runWebGLProgram(program, [x, filter], 'float32', customValues);
}
var depthwiseConv2dNativeConfig = {
    kernelName: tf.DepthwiseConv2dNative,
    backendName: 'webgl',
    kernelFunc: depthwiseConv2dNative,
};

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
var DepthwiseConv2DDerFilterProgram = /** @class */ (function () {
    function DepthwiseConv2DDerFilterProgram(convInfo) {
        this.variableNames = ['x', 'dy'];
        this.outputShape = convInfo.filterShape;
        var strideHeight = convInfo.strideHeight;
        var strideWidth = convInfo.strideWidth;
        var padTop = convInfo.padInfo.top;
        var padLeft = convInfo.padInfo.left;
        var channelMul = convInfo.outChannels / convInfo.inChannels;
        this.userCode = "\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int wR = coords.x;\n        int wC = coords.y;\n        int d1 = coords.z;\n        int dm = coords.w;\n        int d2 = d1 * ".concat(channelMul, " + dm;\n\n        float dotProd = 0.0;\n\n        // TO DO: Vec4 over the batch size\n        for (int b = 0; b < ").concat(convInfo.batchSize, "; b++) {\n          for (int yR = 0; yR < ").concat(convInfo.outHeight, "; yR++) {\n            int xR = wR + yR * ").concat(strideHeight, " - ").concat(padTop, ";\n\n            if (xR < 0 || xR >= ").concat(convInfo.inHeight, ") {\n              continue;\n            }\n\n            for (int yC = 0; yC < ").concat(convInfo.outWidth, "; yC++) {\n              int xC = wC + yC * ").concat(strideWidth, " - ").concat(padLeft, ";\n\n              if (xC < 0 || xC >= ").concat(convInfo.inWidth, ") {\n                continue;\n              }\n\n              float dyValue = getDy(b, yR, yC, d2);\n              float xValue = getX(b, xR, xC, d1);\n              dotProd += (xValue * dyValue);\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ");
    }
    return DepthwiseConv2DDerFilterProgram;
}());
var DepthwiseConv2DDerInputProgram = /** @class */ (function () {
    function DepthwiseConv2DDerInputProgram(convInfo) {
        this.variableNames = ['dy', 'W'];
        this.outputShape = convInfo.inShape;
        var filterHeight = convInfo.filterHeight;
        var filterWidth = convInfo.filterWidth;
        var strideHeight = convInfo.strideHeight;
        var strideWidth = convInfo.strideWidth;
        var padTop = filterHeight - 1 - convInfo.padInfo.top;
        var padLeft = filterWidth - 1 - convInfo.padInfo.left;
        var channelMul = convInfo.outChannels / convInfo.inChannels;
        this.userCode = "\n      const ivec2 pads = ivec2(".concat(padTop, ", ").concat(padLeft, ");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords[0];\n        int d1 = coords[3];\n        ivec2 dyCorner = coords.yz - pads;\n        int dyRCorner = dyCorner.x;\n        int dyCCorner = dyCorner.y;\n\n        float dotProd = 0.0;\n\n        for (int wR = 0; wR < ").concat(filterHeight, "; wR++) {\n          float dyR = float(dyRCorner + wR) / ").concat(strideHeight, ".0;\n\n          if (dyR < 0.0 || dyR >= ").concat(convInfo.outHeight, ".0 || fract(dyR) > 0.0) {\n            continue;\n          }\n          int idyR = int(dyR);\n\n          int wRPerm = ").concat(filterHeight, " - 1 - wR;\n\n          for (int wC = 0; wC < ").concat(filterWidth, "; wC++) {\n            float dyC = float(dyCCorner + wC) / ").concat(strideWidth, ".0;\n\n            if (dyC < 0.0 || dyC >= ").concat(convInfo.outWidth, ".0 ||\n                fract(dyC) > 0.0) {\n              continue;\n            }\n            int idyC = int(dyC);\n\n            int wCPerm = ").concat(filterWidth, " - 1 - wC;\n\n            // TO DO: Vec4 over the channelMul\n            for (int dm = 0; dm < ").concat(channelMul, "; dm++) {\n              int d2 = d1 * ").concat(channelMul, " + dm;\n              float xValue = getDy(batch, idyR, idyC, d2);\n              float wValue = getW(wRPerm, wCPerm, d1, dm);\n              dotProd += xValue * wValue;\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ");
    }
    return DepthwiseConv2DDerInputProgram;
}());

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
function depthwiseConv2dNativeBackpropFilter(args) {
    var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
    var x = inputs.x, dy = inputs.dy;
    var strides = attrs.strides, dilations = attrs.dilations, pad = attrs.pad, dimRoundingMode = attrs.dimRoundingMode, filterShape = attrs.filterShape;
    var convInfo = tf.backend_util.computeConv2DInfo(x.shape, filterShape, strides, dilations, pad, dimRoundingMode, true /* depthwise */);
    var program = new DepthwiseConv2DDerFilterProgram(convInfo);
    return backend.runWebGLProgram(program, [x, dy], 'float32');
}
var depthwiseConv2dNativeBackpropFilterConfig = {
    kernelName: tf.DepthwiseConv2dNativeBackpropFilter,
    backendName: 'webgl',
    kernelFunc: depthwiseConv2dNativeBackpropFilter
};

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
function depthwiseConv2dNativeBackpropInput(args) {
    var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
    var dy = inputs.dy, filter = inputs.filter;
    var strides = attrs.strides, dilations = attrs.dilations, pad = attrs.pad, dimRoundingMode = attrs.dimRoundingMode, inputShape = attrs.inputShape;
    var convInfo = tf.backend_util.computeConv2DInfo(inputShape, filter.shape, strides, dilations, pad, dimRoundingMode, true /* depthwise */);
    var program = new DepthwiseConv2DDerInputProgram(convInfo);
    return backend.runWebGLProgram(program, [dy, filter], 'float32');
}
var depthwiseConv2dNativeBackpropInputConfig = {
    kernelName: tf.DepthwiseConv2dNativeBackpropInput,
    backendName: 'webgl',
    kernelFunc: depthwiseConv2dNativeBackpropInput
};

/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
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
var DiagProgram = /** @class */ (function () {
    function DiagProgram(size) {
        this.variableNames = ['X'];
        this.outputShape = [size, size];
        this.userCode = "\n      void main() {\n          ivec2 coords = getOutputCoords();\n          float val = coords[0] == coords[1] ? getX(coords[0]) : 0.0;\n          setOutput(val);\n      }\n    ";
    }
    return DiagProgram;
}());

function diag(args) {
    var inputs = args.inputs, backend = args.backend;
    var x = inputs.x;
    var outShape = __spreadArray(__spreadArray([], __read(x.shape), false), __read(x.shape), false);
    var xSize = tf.util.sizeFromShape(x.shape);
    var flat = reshape({ inputs: { x: x }, backend: backend, attrs: { shape: [xSize] } });
    var program = new DiagProgram(xSize);
    var res = backend.runWebGLProgram(program, [flat], flat.dtype);
    var out = reshape({ inputs: { x: res }, backend: backend, attrs: { shape: outShape } });
    backend.disposeIntermediateTensorInfo(flat);
    backend.disposeIntermediateTensorInfo(res);
    return out;
}
var diagConfig = {
    kernelName: tf.Diag,
    backendName: 'webgl',
    kernelFunc: diag
};

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
var Dilation2DProgram = /** @class */ (function () {
    function Dilation2DProgram(convInfo) {
        this.variableNames = ['x', 'W'];
        this.outputShape = convInfo.outShape;
        var inHeight = convInfo.inHeight, inWidth = convInfo.inWidth, padInfo = convInfo.padInfo, strideHeight = convInfo.strideHeight, strideWidth = convInfo.strideWidth, filterHeight = convInfo.filterHeight, filterWidth = convInfo.filterWidth, dilationHeight = convInfo.dilationHeight, dilationWidth = convInfo.dilationWidth;
        var padTop = padInfo.top, padLeft = padInfo.left;
        this.userCode = "\n      const ivec2 strides = ivec2(".concat(strideHeight, ", ").concat(strideWidth, ");\n      const ivec2 pads = ivec2(").concat(padTop, ", ").concat(padLeft, ");\n      const float neg_infinity = -3.4e38;\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords.x;\n        int d1 = coords.w;\n        ivec2 outTopLeftCorner =\n            coords.yz * strides - pads;\n        int hBeg = outTopLeftCorner.x;\n        int wBeg = outTopLeftCorner.y;\n\n        float curVal = neg_infinity;\n        for (int h = 0; h < ").concat(filterHeight, "; h++) {\n          int hIn = hBeg + h * ").concat(dilationHeight, ";\n\n          if (hIn >= 0 && hIn < ").concat(inHeight, ") {\n            for (int w = 0; w < ").concat(filterWidth, "; w++) {\n              int wIn = wBeg + w * ").concat(dilationWidth, ";\n\n              if (wIn >= 0 && wIn < ").concat(inWidth, ") {\n                float xVal = getX(batch, hIn, wIn, d1);\n                float wVal = getW(h, w, d1);\n\n                float val = xVal + wVal;\n                if (val > curVal) {\n                  curVal = val;\n                }\n              }\n            }\n          }\n        }\n\n        float result = curVal;\n        setOutput(result);\n      }\n    ");
    }
    return Dilation2DProgram;
}());

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
function dilation2D(args) {
    var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
    var x = inputs.x, filter = inputs.filter;
    var strides = attrs.strides, pad = attrs.pad, dilations = attrs.dilations;
    var convInfo = tf.backend_util.computeDilation2DInfo(x.shape, filter.shape, strides, pad, 'NHWC' /* dataFormat */, dilations);
    var out;
    var program = new Dilation2DProgram(convInfo);
    out = backend.runWebGLProgram(program, [x, filter], 'float32');
    var outReshaped = reshape({ inputs: { x: out }, backend: backend, attrs: { shape: convInfo.outShape } });
    backend.disposeIntermediateTensorInfo(out);
    return outReshaped;
}
var dilation2DConfig = {
    kernelName: tf.Dilation2D,
    backendName: 'webgl',
    kernelFunc: dilation2D,
};

function einsum(args) {
    var e_1, _a, e_2, _b;
    var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
    var equation = attrs.equation;
    var tensors = inputs;
    var _c = tf.backend_util.decodeEinsumEquation(equation, tensors.length), allDims = _c.allDims, summedDims = _c.summedDims, idDims = _c.idDims;
    tf.backend_util.checkEinsumDimSizes(allDims.length, idDims, tensors);
    var _d = tf.backend_util.getEinsumComputePath(summedDims, idDims), path = _d.path, steps = _d.steps;
    var nSteps = steps.length;
    var out = null;
    var numDimsRemaining = allDims.length;
    var tensorsToDispose = [];
    for (var i = 0; i < nSteps; ++i) {
        try {
            for (var _e = (e_1 = void 0, __values(steps[i])), _f = _e.next(); !_f.done; _f = _e.next()) {
                var idTerm = _f.value;
                var _g = tf.backend_util.getEinsumPermutation(numDimsRemaining, idDims[idTerm]), perm = _g.permutationIndices, dimsToExpand = _g.expandDims;
                var x = void 0;
                if (tf.backend_util.isIdentityPermutation(perm)) {
                    x = tensors[idTerm];
                }
                else {
                    x = transpose({ inputs: { x: tensors[idTerm] }, backend: backend, attrs: { perm: perm } });
                    tensorsToDispose.push(x);
                }
                var targetShape = x.shape.slice();
                for (var k = 0; k < dimsToExpand.length; ++k) {
                    targetShape.splice(dimsToExpand[k], 0, 1);
                }
                if (!tf.util.arraysEqual(x.shape, targetShape)) {
                    x = reshape({ inputs: { x: x }, backend: backend, attrs: { shape: targetShape } });
                    tensorsToDispose.push(x);
                }
                if (out === null) {
                    out = x;
                }
                else {
                    // tslint:disable-next-line: no-unnecessary-type-assertion
                    out = multiply({ inputs: { a: x, b: out }, backend: backend });
                    tensorsToDispose.push(out);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_f && !_f.done && (_a = _e.return)) _a.call(_e);
            }
            finally { if (e_1) throw e_1.error; }
        }
        if (i < nSteps - 1) {
            if (path[i] >= 0) {
                out = sum({
                    inputs: { x: out },
                    backend: backend,
                    attrs: {
                        axis: path[i] - (allDims.length - numDimsRemaining),
                        keepDims: false
                    }
                });
                tensorsToDispose.push(out);
            }
            numDimsRemaining--;
        }
    }
    try {
        // Clean up intermediate tensors.
        for (var tensorsToDispose_1 = __values(tensorsToDispose), tensorsToDispose_1_1 = tensorsToDispose_1.next(); !tensorsToDispose_1_1.done; tensorsToDispose_1_1 = tensorsToDispose_1.next()) {
            var tensorInfo = tensorsToDispose_1_1.value;
            if (tensorInfo === out) {
                continue;
            }
            backend.disposeIntermediateTensorInfo(tensorInfo);
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (tensorsToDispose_1_1 && !tensorsToDispose_1_1.done && (_b = tensorsToDispose_1.return)) _b.call(tensorsToDispose_1);
        }
        finally { if (e_2) throw e_2.error; }
    }
    return out;
}
var einsumConfig = {
    kernelName: tf.Einsum,
    backendName: 'webgl',
    kernelFunc: einsum
};

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
var ELU = "return (x >= 0.0) ? x : (exp(x) - 1.0);";
var ELU_PACKED = "\n  vec4 result;\n\n  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);\n  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);\n  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);\n  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);\n\n  return result;\n";
var elu = unaryKernelFunc({ opSnippet: ELU, packedOpSnippet: ELU_PACKED });
var eluConfig = {
    kernelName: tf.Elu,
    backendName: 'webgl',
    kernelFunc: elu
};

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
var ELU_DER = "return (b >= 0.0) ? a : a * (b + 1.0);";
var ELU_DER_PACKED = "\n  vec4 bGTEZero = vec4(greaterThanEqual(b, vec4(0.)));\n  return (bGTEZero * a) + ((vec4(1.0) - bGTEZero) * (a * (b + vec4(1.0))));\n";
var eluGrad = function (args) {
    var inputs = args.inputs, backend = args.backend;
    var dy = inputs.dy, y = inputs.y;
    var program = tf.env().getBool('WEBGL_PACK_BINARY_OPERATIONS') ?
        new BinaryOpPackedProgram(ELU_DER_PACKED, dy.shape, y.shape) :
        new BinaryOpProgram(ELU_DER, dy.shape, y.shape);
    return backend.runWebGLProgram(program, [dy, y], dy.dtype);
};
var eluGradConfig = {
    kernelName: tf.EluGrad,
    backendName: 'webgl',
    kernelFunc: eluGrad
};

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
var PACKED_EQUAL = "\n  return vec4(equal(a, b));\n";
var EQUAL = "return float(a == b);";
var equal = binaryKernelFunc({
    opSnippet: EQUAL,
    packedOpSnippet: PACKED_EQUAL,
    dtype: 'bool',
    cpuKernelImpl: equalImplCPU,
});
var equalConfig = {
    kernelName: tf.Equal,
    backendName: 'webgl',
    kernelFunc: equal
};

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
var ERF = "\n  // Error function is calculated approximately with elementary function.\n  // See \"Handbook of Mathematical Functions with Formulas,\n  // Graphs, and Mathematical Tables\", Abramowitz and Stegun.\n  float p = ".concat(tf.backend_util.ERF_P, ";\n  float a1 = ").concat(tf.backend_util.ERF_A1, ";\n  float a2 = ").concat(tf.backend_util.ERF_A2, ";\n  float a3 = ").concat(tf.backend_util.ERF_A3, ";\n  float a4 = ").concat(tf.backend_util.ERF_A4, ";\n  float a5 = ").concat(tf.backend_util.ERF_A5, ";\n\n  float sign = sign(x);\n  x = abs(x);\n  float t = 1.0 / (1.0 + p * x);\n  return sign * (1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x));\n");
var erf = unaryKernelFunc({ opSnippet: ERF });
var erfConfig = {
    kernelName: tf.Erf,
    backendName: 'webgl',
    kernelFunc: erf,
};

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
var EXP = CHECK_NAN_SNIPPET_UNARY + "\n  return exp(x);\n";
var EXP_PACKED = "\n  vec4 result = exp(x);\n  bvec4 isNaN = isnan(x);\n  result.r = isNaN.r ? x.r : result.r;\n  result.g = isNaN.g ? x.g : result.g;\n  result.b = isNaN.b ? x.b : result.b;\n  result.a = isNaN.a ? x.a : result.a;\n\n  return result;\n";
var exp = unaryKernelFunc({
    opSnippet: EXP,
    packedOpSnippet: EXP_PACKED,
    cpuKernelImpl: expImplCPU,
    dtype: 'float32',
});
var expConfig = {
    kernelName: tf.Exp,
    backendName: 'webgl',
    kernelFunc: exp
};

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
function expandDims(args) {
    var inputs = args.inputs, attrs = args.attrs, backend = args.backend;
    var dim = attrs.dim;
    var input = inputs.input;
    var inputRank = input.shape.length;
    var newShape = input.shape.slice();
    var $dim = dim;
    if (dim < 0) {
        // Negative value is counted from the tail of rank.
        tf.util.assert(-(inputRank + 1) <= dim, function () { return "Axis must be in the interval [".concat(-(inputRank + 1), ", ").concat(inputRank, "]"); });
        $dim = inputRank + dim + 1;
    }
    newShape.splice($dim, 0, 1);
    return reshape({ inputs: { x: input }, backend: backend, attrs: { shape: newShape } });
}
var expandDimsConfig = {
    kernelName: tf.ExpandDims,
    backendName: 'webgl',
    kernelFunc: expandDims,
};

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
var EXPM1 = "return exp(x) - 1.0;";
var expm1 = unaryKernelFunc({ opSnippet: EXPM1, packedOpSnippet: EXPM1, cpuKernelImpl: expm1ImplCPU });
var expm1Config = {
    kernelName: tf.Expm1,
    backendName: 'webgl',
    kernelFunc: expm1
};

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
var FFTProgram = /** @class */ (function () {
    function FFTProgram(component, inputShape, inverse) {
        this.variableNames = ['real', 'imag'];
        var innerDim = inputShape[1];
        this.outputShape = inputShape;
        var exponentMultiplierSnippet = inverse ? "2.0 * ".concat(Math.PI) : "-2.0 * ".concat(Math.PI);
        var resultDenominator = inverse ? "".concat(innerDim, ".0") : '1.0';
        var opString;
        if (component === 'real') {
            opString = 'return real * expR - imag * expI;';
        }
        else if (component === 'imag') {
            opString = 'return real * expI + imag * expR;';
        }
        else {
            throw new Error("FFT component must be either \"real\" or \"imag\", got ".concat(component, "."));
        }
        this.userCode = "\n      const float exponentMultiplier = ".concat(exponentMultiplierSnippet, ";\n\n      float unaryOpComplex(float real, float expR, float imag, float expI) {\n        ").concat(opString, "\n      }\n\n      float mulMatDFT(int batch, int index) {\n        float indexRatio = float(index) / float(").concat(innerDim, ");\n        float exponentMultiplierTimesIndexRatio =\n            exponentMultiplier * indexRatio;\n\n        float result = 0.0;\n\n        for (int i = 0; i < ").concat(innerDim, "; i++) {\n          // x = (-2|2 * PI / N) * index * i;\n          float x = exponentMultiplierTimesIndexRatio * float(i);\n          float expR = cos(x);\n          float expI = sin(x);\n          float real = getReal(batch, i);\n          float imag = getImag(batch, i);\n\n          result +=\n              unaryOpComplex(real, expR, imag, expI) / ").concat(resultDenominator, ";\n        }\n\n        return result;\n      }\n\n      void main() {\n        ivec2 coords = getOutputCoords();\n        setOutput(mulMatDFT(coords[0], coords[1]));\n      }\n    ");
    }
    return FFTProgram;
}());

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
function fftImpl(x, inverse, backend) {
    var xData = backend.texData.get(x.dataId);
    var inputSize = tf.util.sizeFromShape(x.shape);
    // Collapse all outer dimensions to a single batch dimension.
    var innerDimensionSize = x.shape[x.shape.length - 1];
    var batch = inputSize / innerDimensionSize;
    var input2D = reshape({ inputs: { x: x }, backend: backend, attrs: { shape: [batch, innerDimensionSize] } });
    var xShape = input2D.shape;
    var realProgram = new FFTProgram('real', xShape, inverse);
    var imagProgram = new FFTProgram('imag', xShape, inverse);
    var inputs = [
        {
            dataId: xData.complexTensorInfos.real.dataId,
            dtype: xData.complexTensorInfos.real.dtype,
            shape: xShape
        },
        {
            dataId: xData.complexTensorInfos.imag.dataId,
            dtype: xData.complexTensorInfos.imag.dtype,
            shape: xShape
        }
    ];
    var realPart = backend.runWebGLProgram(realProgram, inputs, 'float32');
    var imagPart = backend.runWebGLProgram(imagProgram, inputs, 'float32');
    var complexOutput = complex({ inputs: { real: realPart, imag: imagPart }, backend: backend });
    backend.disposeIntermediateTensorInfo(realPart);
    backend.disposeIntermediateTensorInfo(imagPart);
    var complexOutputReshaped = reshape({ inputs: { x: complexOutput }, backend: backend, attrs: { shape: x.shape } });
    backend.disposeIntermediateTensorInfo(input2D);
    backend.disposeIntermediateTensorInfo(complexOutput);
    return complexOutputReshaped;
}

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
function fft(args) {
    var inputs = args.inputs, backend = args.backend;
    var input = inputs.input;
    return fftImpl(input, false /* inverse */, backend);
}
var fftConfig = {
    kernelName: tf.FFT,
    backendName: 'webgl',
    kernelFunc: fft
};

/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
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
var FillProgram = /** @class */ (function () {
    function FillProgram(shape, value) {
        this.outputShape = [];
        this.customUniforms = [{ name: 'value', type: 'float' }];
        this.variableNames = ['x'];
        this.outputShape = shape;
        this.userCode = "\n      void main() {\n        // Input can be obtained from uniform value.\n        setOutput(value);\n      }\n    ";
    }
    return FillProgram;
}());

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
function fill(args) {
    var backend = args.backend, attrs = args.attrs;
    var shape = attrs.shape, value = attrs.value;
    var dtype = attrs.dtype;
    dtype = dtype || tf.util.inferDtype(value);
    if (dtype === 'string') {
        // String type should be handled in CPU memory.
        var values = tf.util.getArrayFromDType(dtype, tf.util.sizeFromShape(shape));
        values.fill(value);
        return backend.makeTensorInfo(shape, dtype, values);
    }
    else {
        var program = new FillProgram(shape, value);
        var customValues = [[value]];
        return backend.runWebGLProgram(program, [], dtype, customValues);
    }
}
var fillConfig = {
    kernelName: tf.Fill,
    backendName: 'webgl',
    kernelFunc: fill
};

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
var FlipLeftRightProgram = /** @class */ (function () {
    function FlipLeftRightProgram(imageShape) {
        this.variableNames = ['Image'];
        this.outputShape = [];
        var imageWidth = imageShape[2];
        this.outputShape = imageShape;
        this.userCode = "\n        void main() {\n          ivec4 coords = getOutputCoords();\n          int x = coords[2];\n\n          int coordX = ".concat(imageWidth, " - x - 1;\n          float outputValue;\n          if(coordX >= 0 && coordX < ").concat(imageWidth, ") {\n            outputValue = getImage(coords[0], coords[1], coordX, coords[3]);\n          } else {\n            outputValue = getImage(coords[0], coords[1], coords[2], coords[3]);\n          }\n          setOutput(outputValue);\n        }\n    ");
    }
    return FlipLeftRightProgram;
}());

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
var flipLeftRightConfig = {
    kernelName: tf.FlipLeftRight,
    backendName: 'webgl',
    kernelFunc: function (_a) {
        var inputs = _a.inputs, backend = _a.backend;
        var image = inputs.image;
        var webglBackend = backend;
        var program = new FlipLeftRightProgram(image.shape);
        var output = webglBackend.runWebGLProgram(program, [image], image.dtype);
        return output;
    }
};

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
var FLOOR = "return floor(x);";
var floor = unaryKernelFunc({ opSnippet: FLOOR, packedOpSnippet: FLOOR, cpuKernelImpl: floorImplCPU });
var floorConfig = {
    kernelName: tf.Floor,
    backendName: 'webgl',
    kernelFunc: floor,
};

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
// We use native integer division to deal with floating point imprecision. Since
// we implement floor division and glsl implements truncated division, we
// correct for this by subtracting 1 from result when the result is negative and
// there is a remainder.
var INT_DIV = "\n  float s = sign(a) * sign(b);\n  int ia = round(a);\n  int ib = round(b);\n  if (ib != 0) {\n    // Windows (D3D) wants guaranteed non-zero int division at compile-time.\n    return float(idiv(ia, ib, s));\n  } else {\n    return NAN;\n  }\n";
var INT_DIV_PACKED = "\n  ivec4 ia = round(a);\n  ivec4 ib = round(b);\n  bvec4 cond = notEqual(ib, ivec4(0));\n  ivec4 result = ivec4(0);\n  vec4 s = sign(a) * sign(b);\n\n  // Windows (D3D) wants guaranteed non-zero int division at compile-time.\n  if (cond[0]) {\n    result[0] = idiv(ia[0], ib[0], s[0]);\n  }\n  if (cond[1]) {\n    result[1] = idiv(ia[1], ib[1], s[1]);\n  }\n  if (cond[2]) {\n    result[2] = idiv(ia[2], ib[2], s[2]);\n  }\n  if (cond[3]) {\n    result[3] = idiv(ia[3], ib[3], s[3]);\n  }\n  return vec4(result);\n";
var floorDiv = binaryKernelFunc({ opSnippet: INT_DIV, packedOpSnippet: INT_DIV_PACKED, dtype: 'int32' });
var floorDivConfig = {
    kernelName: tf.FloorDiv,
    backendName: 'webgl',
    kernelFunc: floorDiv
};

var FromPixelsProgram = /** @class */ (function () {
    function FromPixelsProgram(outputShape) {
        this.variableNames = ['A'];
        var glsl = getGlslDifferences();
        var _a = __read(outputShape, 2), height = _a[0], width = _a[1];
        this.outputShape = outputShape;
        this.userCode = "\n      void main() {\n        ivec3 coords = getOutputCoords();\n        int texR = coords[0];\n        int texC = coords[1];\n        int depth = coords[2];\n        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(".concat(width, ".0, ").concat(height, ".0);\n\n        vec4 values = ").concat(glsl.texture2D, "(A, uv);\n        float value;\n        if (depth == 0) {\n          value = values.r;\n        } else if (depth == 1) {\n          value = values.g;\n        } else if (depth == 2) {\n          value = values.b;\n        } else if (depth == 3) {\n          value = values.a;\n        }\n\n        setOutput(floor(value * 255.0 + 0.5));\n      }\n    ");
    }
    return FromPixelsProgram;
}());

var FromPixelsPackedProgram = /** @class */ (function () {
    function FromPixelsPackedProgram(outputShape) {
        this.variableNames = ['A'];
        this.packedInputs = false;
        this.packedOutput = true;
        var glsl = getGlslDifferences();
        var _a = __read(outputShape, 2), height = _a[0], width = _a[1];
        this.outputShape = outputShape;
        this.userCode = "\n      void main() {\n        ivec3 coords = getOutputCoords();\n        int texR = coords[0];\n        int texC = coords[1];\n        int depth = coords[2];\n\n        vec4 result = vec4(0.);\n\n        for(int row=0; row<=1; row++) {\n          for(int col=0; col<=1; col++) {\n            texC = coords[1] + row;\n            depth = coords[2] + col;\n\n            vec2 uv = (vec2(texC, texR) + halfCR) /\n                       vec2(".concat(width, ".0, ").concat(height, ".0);\n            vec4 values = ").concat(glsl.texture2D, "(A, uv);\n            float value;\n            if (depth == 0) {\n              value = values.r;\n            } else if (depth == 1) {\n              value = values.g;\n            } else if (depth == 2) {\n              value = values.b;\n            } else if (depth == 3) {\n              value = values.a;\n            }\n\n            result[row * 2 + col] = floor(value * 255.0 + 0.5);\n          }\n        }\n\n        ").concat(glsl.output, " = result;\n      }\n    ");
    }
    return FromPixelsPackedProgram;
}());

var fromPixelsConfig = {
    kernelName: tf.FromPixels,
    backendName: 'webgl',
    kernelFunc: fromPixels,
};
var fromPixels2DContext;
var willReadFrequently = tf.env().getBool('CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU');
function fromPixels(args) {
    var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
    var pixels = inputs.pixels;
    var numChannels = attrs.numChannels;
    var isVideo = typeof (HTMLVideoElement) !== 'undefined' &&
        pixels instanceof HTMLVideoElement;
    var isImage = typeof (HTMLImageElement) !== 'undefined' &&
        pixels instanceof HTMLImageElement;
    var _a = __read(isVideo ?
        [
            pixels.videoWidth,
            pixels.videoHeight
        ] :
        [pixels.width, pixels.height], 2), width = _a[0], height = _a[1];
    var texShape = [height, width];
    var outShape = [height, width, numChannels];
    if (isImage || isVideo) {
        var newWillReadFrequently = tf.env().getBool('CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU');
        if (fromPixels2DContext == null ||
            newWillReadFrequently !== willReadFrequently) {
            willReadFrequently = newWillReadFrequently;
            fromPixels2DContext =
                document.createElement('canvas').getContext('2d', { willReadFrequently: willReadFrequently });
        }
        fromPixels2DContext.canvas.width = width;
        fromPixels2DContext.canvas.height = height;
        fromPixels2DContext.drawImage(pixels, 0, 0, width, height);
        pixels = fromPixels2DContext.canvas;
    }
    var tempPixelHandle = backend.makeTensorInfo(texShape, 'int32');
    // This is a byte texture with pixels.
    backend.texData.get(tempPixelHandle.dataId).usage = TextureUsage.PIXELS;
    backend.gpgpu.uploadPixelDataToTexture(backend.getTexture(tempPixelHandle.dataId), pixels);
    var program = tf.env().getBool('WEBGL_PACK') ?
        new FromPixelsPackedProgram(outShape) :
        new FromPixelsProgram(outShape);
    var res = backend.runWebGLProgram(program, [tempPixelHandle], 'int32');
    backend.disposeData(tempPixelHandle.dataId);
    return res;
}

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
function fusedConv2d(args) {
    var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
    var x = inputs.x, filter = inputs.filter, bias = inputs.bias, preluActivationWeights = inputs.preluActivationWeights;
    var strides = attrs.strides, pad = attrs.pad, dataFormat = attrs.dataFormat, dilations = attrs.dilations, dimRoundingMode = attrs.dimRoundingMode, activation = attrs.activation, leakyreluAlpha = attrs.leakyreluAlpha;
    var $dataFormat = tf.backend_util.convertConv2DDataFormat(dataFormat);
    var convInfo = tf.backend_util.computeConv2DInfo(x.shape, filter.shape, strides, dilations, pad, dimRoundingMode, false /* depthwise */, $dataFormat);
    var out;
    var intermediates = [];
    var hasBias = bias != null;
    var hasPreluActivationWeights = preluActivationWeights != null;
    var hasLeakyreluAlpha = activation === 'leakyrelu';
    var prepareInputs = function () {
        var inputs = [x, filter];
        // If the input is a 1-D tensor, align it with the channels.
        //
        // For fusedConv2d, the inputs (x, W, bias, preluActivationWeights) are
        // supposed to be aligned with the dataFormat. The 4-D tensor inputs or
        // scalar inputs are originally aligned, but the 1-D tensor inputs are
        // supposed to be aligned with the channels (only bias and PReLU activation
        // weights could be a 1-D tensor).
        var alignInputWithDataFormat = function (input, dataFormat) {
            if (dataFormat === 'NCHW' && input.shape.length === 1 &&
                input.shape[0] !== 1) {
                var alignedInput = reshape({
                    inputs: { x: input },
                    backend: backend,
                    attrs: { shape: [input.shape[0], 1, 1] }
                });
                intermediates.push(alignedInput);
                return alignedInput;
            }
            return input;
        };
        if (hasBias) {
            inputs.push(alignInputWithDataFormat(bias, dataFormat));
        }
        if (hasPreluActivationWeights) {
            inputs.push(alignInputWithDataFormat(preluActivationWeights, dataFormat));
        }
        if (hasLeakyreluAlpha) {
            var $leakyreluAlpha = backend.makeTensorInfo([], 'float32', tf.util.createScalarValue(leakyreluAlpha, 'float32'));
            inputs.push($leakyreluAlpha);
            intermediates.push($leakyreluAlpha);
        }
        return inputs;
    };
    if (convInfo.filterHeight === 1 && convInfo.filterWidth === 1 &&
        convInfo.dilationHeight === 1 && convInfo.dilationWidth === 1 &&
        convInfo.strideHeight === 1 && convInfo.strideWidth === 1 &&
        (convInfo.padInfo.type === 'SAME' || convInfo.padInfo.type === 'VALID')) {
        out = conv2dByMatMul({
            x: x,
            filter: filter,
            convInfo: convInfo,
            backend: backend,
            bias: bias,
            activation: activation,
            preluActivationWeights: preluActivationWeights,
            leakyreluAlpha: leakyreluAlpha
        });
    }
    else if (convInfo.strideWidth <= 2 && $dataFormat === 'channelsLast'
        && tf.env().getBool('WEBGL_EXP_CONV')) {
        var fusedActivation = activation ? mapActivationToShaderProgram(activation, true) : null;
        var program = new Conv2DPackedProgram(convInfo, hasBias, fusedActivation, hasPreluActivationWeights, hasLeakyreluAlpha);
        var customValues = [
            [convInfo.padInfo.top, convInfo.padInfo.left],
            [convInfo.strideHeight, convInfo.strideWidth],
            [convInfo.dilationHeight, convInfo.dilationWidth],
            [convInfo.inHeight, convInfo.inWidth]
        ];
        var inputs_1 = prepareInputs();
        out = backend.runWebGLProgram(program, inputs_1, 'float32', customValues);
    }
    else if (tf.env().getBool('WEBGL_CONV_IM2COL')) {
        out = conv2dWithIm2Row({
            x: x,
            filter: filter,
            convInfo: convInfo,
            backend: backend,
            bias: bias,
            activation: activation,
            preluActivationWeights: preluActivationWeights,
            leakyreluAlpha: leakyreluAlpha
        });
    }
    else {
        var fusedActivation = activation ? mapActivationToShaderProgram(activation, false) : null;
        var program = new Conv2DProgram(convInfo, hasBias, fusedActivation, hasPreluActivationWeights, hasLeakyreluAlpha);
        var inputs_2 = prepareInputs();
        out = backend.runWebGLProgram(program, inputs_2, 'float32');
    }
    var outReshaped = reshape({ inputs: { x: out }, backend: backend, attrs: { shape: convInfo.outShape } });
    intermediates.push(out);
    intermediates.forEach(function (t) { return backend.disposeIntermediateTensorInfo(t); });
    return outReshaped;
}
var fusedConv2DConfig = {
    kernelName: tf.FusedConv2D,
    backendName: 'webgl',
    kernelFunc: fusedConv2d,
};

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
function fusedDepthwiseConv2D(args) {
    var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
    var x = inputs.x, filter = inputs.filter, bias = inputs.bias, preluActivationWeights = inputs.preluActivationWeights;
    var strides = attrs.strides, pad = attrs.pad, dilations = attrs.dilations, dimRoundingMode = attrs.dimRoundingMode, activation = attrs.activation, leakyreluAlpha = attrs.leakyreluAlpha;
    var intermediates = [];
    var $dilations = dilations;
    if ($dilations == null) {
        $dilations = [1, 1];
    }
    tf.util.assert(tf.backend_util.eitherStridesOrDilationsAreOne(strides, $dilations), function () { return 'Error in depthwiseConv2d: Either strides or dilations must be ' +
        "1. Got strides ".concat(strides, " and dilations '").concat($dilations, "'"); });
    var convInfo = tf.backend_util.computeConv2DInfo(x.shape, filter.shape, strides, $dilations, pad, dimRoundingMode, true /* depthwise */);
    var shouldPackDepthwiseConv = tf.env().getBool('WEBGL_PACK_DEPTHWISECONV') &&
        convInfo.strideWidth <= 2 &&
        convInfo.outChannels / convInfo.inChannels === 1;
    var fusedActivation = activation ?
        mapActivationToShaderProgram(activation, shouldPackDepthwiseConv) :
        null;
    var programInputs = [x, filter];
    var hasBias = bias != null;
    var hasPreluActivationWeights = preluActivationWeights != null;
    var hasLeakyreluAlpha = activation === 'leakyrelu';
    if (hasBias) {
        programInputs.push(bias);
    }
    if (hasPreluActivationWeights) {
        programInputs.push(preluActivationWeights);
    }
    if (hasLeakyreluAlpha) {
        var $leakyreluAlpha = backend.makeTensorInfo([], 'float32', tf.util.createScalarValue(leakyreluAlpha, 'float32'));
        programInputs.push($leakyreluAlpha);
        intermediates.push($leakyreluAlpha);
    }
    var program;
    if (shouldPackDepthwiseConv) {
        program = new DepthwiseConvPacked2DProgram(convInfo, hasBias, fusedActivation, hasPreluActivationWeights, hasLeakyreluAlpha);
    }
    else {
        program = new DepthwiseConv2DProgram(convInfo, hasBias, fusedActivation, hasPreluActivationWeights, hasLeakyreluAlpha);
    }
    var customValues = [
        [convInfo.padInfo.top, convInfo.padInfo.left],
        [convInfo.strideHeight, convInfo.strideWidth],
        [convInfo.dilationHeight, convInfo.dilationWidth],
        [convInfo.inHeight, convInfo.inWidth]
    ];
    var result = backend.runWebGLProgram(program, programInputs, 'float32', customValues);
    intermediates.forEach(function (t) { return backend.disposeIntermediateTensorInfo(t); });
    return result;
}
var fusedDepthwiseConv2DConfig = {
    kernelName: tf.FusedDepthwiseConv2D,
    backendName: 'webgl',
    kernelFunc: fusedDepthwiseConv2D,
};

var GatherNDProgram = /** @class */ (function () {
    function GatherNDProgram(sliceDim, strides, shape, paramsShape) {
        this.sliceDim = sliceDim;
        this.strides = strides;
        this.paramsShape = paramsShape;
        this.variableNames = ['x', 'indices'];
        this.outputShape = shape;
        var dtype = getCoordsDataType(shape.length);
        var mainLoop = "\n    int index;";
        for (var j = 0; j < this.sliceDim; j++) {
            mainLoop += "\n          index = round(getIndices(coords[0], ".concat(j, "));\n          out_of_bounds = out_of_bounds || index < 0;\n          out_of_bounds = out_of_bounds || index >= ").concat(this.paramsShape[j], ";\n          flattenIndex += index * ").concat(this.strides[j], ";");
        }
        this.userCode = "\n         void main() {\n          ".concat(dtype, " coords = getOutputCoords();\n          int flattenIndex = 0;\n          bool out_of_bounds = false;\n\n          ").concat(mainLoop, "\n\n          setOutput(out_of_bounds ? 0.0 : getX(flattenIndex, coords[1]));\n        }\n      ");
    }
    return GatherNDProgram;
}());

function gatherNd(args) {
    var inputs = args.inputs, backend = args.backend;
    var params = inputs.params, indices = inputs.indices;
    var indicesShape = indices.shape;
    var sliceRank = indicesShape[indicesShape.length - 1];
    var paramsSize = tf.util.sizeFromShape(params.shape);
    var _a = __read(tf.backend_util.prepareAndValidate(params, indices), 4), resultShape = _a[0], numSlices = _a[1], sliceSize = _a[2], strides = _a[3];
    var flattenIndices = reshape({ inputs: { x: indices }, backend: backend, attrs: { shape: [numSlices, sliceRank] } });
    var flattenX = reshape({
        inputs: { x: params },
        backend: backend,
        attrs: { shape: [(tf.util.sizeFromShape(params.shape) / sliceSize), sliceSize] }
    });
    if (backend.shouldExecuteOnCPU([params, indices]) ||
        params.dtype === 'string') {
        var indicesData = backend.readSync(indices.dataId);
        var paramsBuf = backend.bufferSync(params);
        var outValue = gatherNdImplCPU(indicesData, paramsBuf, params.dtype, numSlices, sliceRank, sliceSize, strides, params.shape, paramsSize);
        return backend.makeTensorInfo(resultShape, params.dtype, outValue.values);
    }
    var program = new GatherNDProgram(sliceRank, strides, [numSlices, sliceSize], params.shape);
    var res = backend.runWebGLProgram(program, [flattenX, flattenIndices], flattenX.dtype);
    var reshaped = reshape({ inputs: { x: res }, backend: backend, attrs: { shape: resultShape } });
    backend.disposeIntermediateTensorInfo(flattenIndices);
    backend.disposeIntermediateTensorInfo(flattenX);
    backend.disposeIntermediateTensorInfo(res);
    return reshaped;
}
var gatherNdConfig = {
    kernelName: tf.GatherNd,
    backendName: 'webgl',
    kernelFunc: gatherNd
};

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
var GatherProgram = /** @class */ (function () {
    function GatherProgram(aShape, outputShape) {
        this.variableNames = ['A', 'indices'];
        this.outputShape = outputShape;
        this.rank = outputShape.length;
        var dtype = getCoordsDataType(this.rank);
        var sourceCoords = getSourceCoords$1(aShape);
        this.userCode = "\n      void main() {\n        ".concat(dtype, " resRC = getOutputCoords();\n        int index = int(getIndices(resRC.x, resRC.z));\n        float inBounds = (index >= 0) && (index < ").concat(aShape[2], ") ? 1.0 : 0.0;\n        setOutput(inBounds * getA(").concat(sourceCoords, "));\n      }\n    ");
    }
    return GatherProgram;
}());
// The input and output are always flattened into rank 4 tensors.
function getSourceCoords$1(aShape, axis) {
    var currentCoords = ['resRC.x', 'resRC.y', 'resRC.z', 'resRC.w'];
    var sourceCoords = [];
    for (var i = 0; i < aShape.length; i++) {
        if (i === 2) {
            sourceCoords.push('index');
        }
        else {
            sourceCoords.push("".concat(currentCoords[i]));
        }
    }
    return sourceCoords.join();
}

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
function gatherV2(args) {
    var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
    var x = inputs.x, indices = inputs.indices;
    var axis = attrs.axis, batchDims = attrs.batchDims;
    var parsedAxis = tf.util.parseAxisParam(axis, x.shape)[0];
    if (tf.env().get('DEBUG')) {
        // In debug mode, throw error when any index is out of bound.
        // Otherwise, just fill out of bounds with zeroes.
        var indicesVals = backend.readSync(indices.dataId);
        var axisDim_1 = x.shape[parsedAxis];
        var _loop_1 = function (i) {
            var index = indicesVals[i];
            tf.util.assert(index <= axisDim_1 - 1 && index >= 0, function () { return "GatherV2: the index value ".concat(index, " is not in [0, ").concat(axisDim_1 - 1, "]"); });
        };
        for (var i = 0; i < indicesVals.length; ++i) {
            _loop_1(i);
        }
    }
    var shapeInfo = tf.backend_util.segment_util.collectGatherOpShapeInfo(x, indices, parsedAxis, batchDims);
    var indicesSize = tf.util.sizeFromShape(indices.shape);
    var toDispose = [];
    var flattenX = reshape({
        inputs: { x: x },
        backend: backend,
        attrs: {
            shape: [
                shapeInfo.batchSize, shapeInfo.outerSize, shapeInfo.dimSize,
                shapeInfo.sliceSize
            ]
        }
    });
    var flattenIndex = reshape({
        inputs: { x: indices },
        backend: backend,
        attrs: { shape: [shapeInfo.batchSize, indicesSize / shapeInfo.batchSize] }
    });
    toDispose.push(flattenX);
    toDispose.push(flattenIndex);
    var flattenOutputShape = [
        shapeInfo.batchSize, shapeInfo.outerSize, indicesSize / shapeInfo.batchSize,
        shapeInfo.sliceSize
    ];
    if (backend.shouldExecuteOnCPU([x, indices]) || x.dtype === 'string') {
        var indicesBuf = backend.bufferSync(flattenIndex);
        var xBuf = backend.bufferSync(flattenX);
        var outBuf = gatherV2ImplCPU(xBuf, indicesBuf, flattenOutputShape);
        toDispose.forEach(function (t) { return backend.disposeIntermediateTensorInfo(t); });
        return backend.makeTensorInfo(shapeInfo.outputShape, outBuf.dtype, outBuf.values);
    }
    var program = new GatherProgram(flattenX.shape, flattenOutputShape);
    var res = backend.runWebGLProgram(program, [flattenX, flattenIndex], flattenX.dtype);
    toDispose.push(res);
    var reshaped = reshape({ inputs: { x: res }, backend: backend, attrs: { shape: shapeInfo.outputShape } });
    toDispose.forEach(function (t) { return backend.disposeIntermediateTensorInfo(t); });
    return reshaped;
}
var gatherV2Config = {
    kernelName: tf.GatherV2,
    backendName: 'webgl',
    kernelFunc: gatherV2
};

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
var GREATER = "return float(a > b);";
var GREATER_PACKED = "\n  return vec4(greaterThan(a, b));\n";
var greater = binaryKernelFunc({
    opSnippet: GREATER,
    packedOpSnippet: GREATER_PACKED,
    cpuKernelImpl: greaterImplCPU,
    dtype: 'bool'
});
var greaterConfig = {
    kernelName: tf.Greater,
    backendName: 'webgl',
    kernelFunc: greater
};

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
var GREATER_EQUAL = "return float(a >= b);";
var GREATER_EQUAL_PACKED = "\n  return vec4(greaterThanEqual(a, b));\n";
var greaterEqual = binaryKernelFunc({
    opSnippet: GREATER_EQUAL,
    packedOpSnippet: GREATER_EQUAL_PACKED,
    dtype: 'bool',
    cpuKernelImpl: greaterEqualImplCPU
});
var greaterEqualConfig = {
    kernelName: tf.GreaterEqual,
    backendName: 'webgl',
    kernelFunc: greaterEqual
};

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
function ifft(args) {
    var inputs = args.inputs, backend = args.backend;
    var input = inputs.input;
    return fftImpl(input, true /* inverse */, backend);
}
var ifftConfig = {
    kernelName: tf.IFFT,
    backendName: 'webgl',
    kernelFunc: ifft
};

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
var IS_FINITE = "return float(!isnan(x) && !isinf(x));";
var isFinite = unaryKernelFunc({ opSnippet: IS_FINITE, dtype: 'bool' });
var isFiniteConfig = {
    kernelName: tf.IsFinite,
    backendName: 'webgl',
    kernelFunc: isFinite,
};

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
var IS_INF = "return float(isinf(x));";
var isInf = unaryKernelFunc({ opSnippet: IS_INF, dtype: 'bool' });
var isInfConfig = {
    kernelName: tf.IsInf,
    backendName: 'webgl',
    kernelFunc: isInf,
};

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
var IS_NAN = "return float(isnan(x));";
var isNaN = unaryKernelFunc({ opSnippet: IS_NAN, dtype: 'bool' });
var isNaNConfig = {
    kernelName: tf.IsNan,
    backendName: 'webgl',
    kernelFunc: isNaN,
};

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
var LESS = "return float(a < b);";
var LESS_PACKED = "\n  return vec4(lessThan(a, b));\n";
var less = binaryKernelFunc({
    opSnippet: LESS,
    packedOpSnippet: LESS_PACKED,
    cpuKernelImpl: lessImplCPU,
    dtype: 'bool'
});
var lessConfig = {
    kernelName: tf.Less,
    backendName: 'webgl',
    kernelFunc: less
};

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
var LESS_EQUAL = "return float(a <= b);";
var LESS_EQUAL_PACKED = "\n  return vec4(lessThanEqual(a, b));\n";
var lessEqual = binaryKernelFunc({
    opSnippet: LESS_EQUAL,
    packedOpSnippet: LESS_EQUAL_PACKED,
    cpuKernelImpl: lessEqualImplCPU,
    dtype: 'bool'
});
var lessEqualConfig = {
    kernelName: tf.LessEqual,
    backendName: 'webgl',
    kernelFunc: lessEqual
};

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
function linSpace(args) {
    var backend = args.backend, attrs = args.attrs;
    var start = attrs.start, stop = attrs.stop, num = attrs.num;
    // TODO: Use CPU implementation due to the precision problem in Safari.
    var outVals = linSpaceImplCPU(start, stop, num);
    return backend.makeTensorInfo([outVals.length], 'float32', outVals);
}
var linSpaceConfig = {
    kernelName: tf.LinSpace,
    backendName: 'webgl',
    kernelFunc: linSpace
};

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
// Windows chrome return 0 if the input is negative value. We will specifically
// return NaN if the input is 0 to solve compatiblity issue.
var LOG = CHECK_NAN_SNIPPET_UNARY + "\n  return x < 0.0 ? 0./0. : log(x);\n";
var LOG_PACKED = "\n  vec4 result = log(x);\n  bvec4 isNaN = isnan(x);\n  result.r = isNaN.r ? x.r : (x.r < 0.0 ? 0./0. : result.r);\n  result.g = isNaN.g ? x.g : (x.g < 0.0 ? 0./0. : result.g);\n  result.b = isNaN.b ? x.b : (x.b < 0.0 ? 0./0. : result.b);\n  result.a = isNaN.a ? x.a : (x.a < 0.0 ? 0./0. : result.a);\n  return result;\n";
var log = unaryKernelFunc({ opSnippet: LOG, packedOpSnippet: LOG_PACKED, cpuKernelImpl: logImplCPU });
var logConfig = {
    kernelName: tf.Log,
    backendName: 'webgl',
    kernelFunc: log
};

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
var LOG1P = CHECK_NAN_SNIPPET_UNARY + "\n  return log(1.0 + x);\n";
var log1p = unaryKernelFunc({ opSnippet: LOG1P });
var log1pConfig = {
    kernelName: tf.Log1p,
    backendName: 'webgl',
    kernelFunc: log1p,
};

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
var LOGICAL_AND = "return float(a >= 1.0 && b >= 1.0);";
var LOGICAL_AND_PACKED = "\n  return vec4(\n    vec4(greaterThanEqual(a, vec4(1.0))) *\n    vec4(greaterThanEqual(b, vec4(1.0))));\n";
var logicalAnd = binaryKernelFunc({
    opSnippet: LOGICAL_AND,
    packedOpSnippet: LOGICAL_AND_PACKED,
    dtype: 'bool'
});
var logicalAndConfig = {
    kernelName: tf.LogicalAnd,
    backendName: 'webgl',
    kernelFunc: logicalAnd
};

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
var LOGICAL_NOT = "return float(!(x >= 1.0));";
var logicalNot = unaryKernelFunc({ opSnippet: LOGICAL_NOT });
var logicalNotConfig = {
    kernelName: tf.LogicalNot,
    backendName: 'webgl',
    kernelFunc: logicalNot,
};

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
var LOGICAL_OR = "return float(a >= 1.0 || b >= 1.0);";
var LOGICAL_OR_PACKED = "\n  return min(\n    vec4(greaterThanEqual(a, vec4(1.0))) +\n    vec4(greaterThanEqual(b, vec4(1.0))),\n    vec4(1.0));\n";
var logicalOr = binaryKernelFunc({ opSnippet: LOGICAL_OR, packedOpSnippet: LOGICAL_OR_PACKED, dtype: 'bool' });
var logicalOrConfig = {
    kernelName: tf.LogicalOr,
    backendName: 'webgl',
    kernelFunc: logicalOr
};

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
var LRNProgram = /** @class */ (function () {
    function LRNProgram(xShape, radius, bias, alpha, beta) {
        this.variableNames = ['x'];
        this.outputShape = [];
        var rad = radius;
        var maxD = xShape[3] - 1;
        this.outputShape = xShape;
        // optimize pow(bias + alpha * sum, -beta)
        // src: https://github.com/tensorflow/tensorflow/..
        // blob/26033a1644a9c4a5fbe3170ab2e864b6a4ccd4ca/..
        // tensorflow/core/kernels/mkl_lrn_op.cc#L320
        var powOperator;
        var basis = "float(".concat(bias, ") + float(").concat(alpha, ") * sum");
        if (beta === 0.5) {
            powOperator = "inversesqrt(".concat(basis, ")");
        }
        else if (beta === 1.0) {
            powOperator = "1.0/(".concat(basis, ")");
        }
        else {
            powOperator = "exp(log(".concat(basis, ") * float(-").concat(beta, "));");
        }
        this.userCode = "\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int r = coords[1];\n        int c = coords[2];\n        int d = coords[3];\n        float x = getX(b, r, c, d);\n        float sum = 0.0;\n        for (int j = -".concat(rad, "; j <= ").concat(rad, "; j++) {\n          int idx = d + j;\n          if (idx >= 0 && idx <=  ").concat(maxD, ") {\n            float z = getX(b, r, c, idx);\n            sum += z * z;\n          }\n        }\n        float val = x * ").concat(powOperator, ";\n        setOutput(val);\n      }\n    ");
    }
    return LRNProgram;
}());

/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
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
var LRNPackedProgram = /** @class */ (function () {
    function LRNPackedProgram(xShape, radius, bias, alpha, beta) {
        this.variableNames = ['x'];
        this.outputShape = [];
        this.packedInputs = true;
        this.packedOutput = true;
        var rad = radius;
        var maxD = xShape[3] - 1;
        this.outputShape = xShape;
        // optimize pow(bias + alpha * sum, -beta)
        // src: https://github.com/tensorflow/tensorflow/..
        // blob/26033a1644a9c4a5fbe3170ab2e864b6a4ccd4ca/..
        // tensorflow/core/kernels/mkl_lrn_op.cc#L320
        var powOperator;
        var basis = "float(".concat(bias, ") + float(").concat(alpha, ") * sum");
        if (beta === 0.5) {
            powOperator = "inversesqrt(".concat(basis, ")");
        }
        else if (beta === 1.0) {
            powOperator = "1.0/(".concat(basis, ")");
        }
        else {
            powOperator = "exp(log(".concat(basis, ") * float(-").concat(beta, "));");
        }
        this.userCode = "\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords.x;\n        int r = coords.y;\n        int c = coords.z;\n        int d = coords.w;\n\n        bool hasNextCol = d < ".concat(this.outputShape[3], ";\n        bool hasNextRow = c < ").concat(this.outputShape[2], ";\n\n        vec4 sum = vec4(0.);\n        vec4 xFragAtOutputCoords = getX(b, r, c, d);\n\n        vec4 xAtOutputCoords = vec4(\n          getChannel(xFragAtOutputCoords, vec2(c, d)),\n          hasNextCol ?\n            getChannel(xFragAtOutputCoords, vec2(c, d + 1)) : 0.0,\n          hasNextRow ?\n            getChannel(xFragAtOutputCoords , vec2(c + 1, d)) : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getChannel(xFragAtOutputCoords, vec2(c + 1, d + 1)) : 0.0\n        );\n\n        int firstChannel = d - ").concat(rad, ";\n        vec2 cache = vec2(0.);\n        if(firstChannel >= 0){\n          vec4 firstChannelFrag = getX(b, r, c, firstChannel);\n          cache.x = getChannel(firstChannelFrag, vec2(c, firstChannel));\n            if(hasNextRow){\n              cache.y = getChannel(firstChannelFrag, vec2(c + 1, firstChannel));\n            }\n        }\n\n        ivec2 depth = ivec2(d, d + 1);\n        for (int j = - ").concat(rad, "; j <= ").concat(rad, "; j++) {\n          ivec2 idx = depth + j;\n          bvec2 aboveLowerBound = greaterThanEqual(idx, ivec2(0));\n          bvec2 belowUpperBound = lessThanEqual(idx, ivec2(").concat(maxD, "));\n\n          bool depthInRange = aboveLowerBound.x && belowUpperBound.x;\n          bool depthPlusOneInRange = aboveLowerBound.y && belowUpperBound.y;\n\n          if(depthInRange || depthPlusOneInRange){\n            vec4 z = vec4(0.);\n            vec4 xFragAtCurrentDepth;\n            z.xz = cache.xy;\n            if(depthPlusOneInRange && hasNextCol){\n              xFragAtCurrentDepth = idx.y != d ?\n                getX(b, r, c, idx.y) : xFragAtOutputCoords;\n              z.y = getChannel(xFragAtCurrentDepth, vec2(c, idx.y));\n              if(hasNextRow){\n                z.w = getChannel(xFragAtCurrentDepth, vec2(c + 1, idx.y));\n              }\n            }\n            cache.xy = z.yw;\n            sum += z * z;\n          }\n        }\n        vec4 result = xAtOutputCoords * ").concat(powOperator, ";\n        setOutput(result);\n      }\n    ");
    }
    return LRNPackedProgram;
}());

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
var lrn = function (args) {
    var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
    var x = inputs.x;
    var depthRadius = attrs.depthRadius, bias = attrs.bias, alpha = attrs.alpha, beta = attrs.beta;
    var program = tf.env().getBool('WEBGL_PACK_NORMALIZATION') ?
        new LRNPackedProgram(x.shape, depthRadius, bias, alpha, beta) :
        new LRNProgram(x.shape, depthRadius, bias, alpha, beta);
    return backend.runWebGLProgram(program, [x], x.dtype);
};
// tslint:disable-next-line: variable-name
var LRNConfig = {
    kernelName: tf.LRN,
    backendName: 'webgl',
    kernelFunc: lrn
};

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
var LRNGradProgram = /** @class */ (function () {
    function LRNGradProgram(inputShape, depthRadius, bias, alpha, beta) {
        this.variableNames = ['inputImage', 'outputImage', 'dy'];
        this.outputShape = [];
        this.outputShape = inputShape;
        this.depth = inputShape[3];
        this.depthRadius = depthRadius;
        this.bias = bias;
        this.alpha = alpha;
        this.beta = beta;
        this.userCode = "\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int r = coords[1];\n        int c = coords[2];\n\n        float result = 0.0;\n        for (int d = 0; d < ".concat(this.depth, "; ++d) {\n          int depthBegin = int(max(0.0, float(d - ").concat(depthRadius, ")));\n          int depthEnd = int(min(float(").concat(this.depth, "),\n              float(d + ").concat(depthRadius, " + 1)));\n\n          const int MIN_DEPTH_BEGIN = 0;\n          const int MAX_DEPTH_END = ").concat(this.depth, ";\n\n          float norm = 0.0;\n          for (int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k) {\n            if (k < depthBegin){\n              continue;\n            }\n            else if (k >= depthBegin && k < depthEnd) {\n              norm += getInputImage(b, r, c, k) * getInputImage(b, r, c, k);\n            }\n            else {\n              break;\n            }\n          }\n\n          norm = float(").concat(alpha, ") * norm + float(").concat(bias, ");\n\n          for(int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k){\n            if (k < depthBegin){\n              continue;\n            }\n            else if (k >= depthBegin && k < depthEnd){\n              float dyi = -2.0 * float(").concat(alpha, ")\n                * float(").concat(beta, ")\n                * getInputImage(b, r, c, k) * getOutputImage(b, r, c, d)\n                / norm;\n              if (k == d) {\n                dyi += pow(norm, -1.0 * ").concat(beta, ");\n              }\n              if (k == coords[3]) {\n                dyi *= getDy(b, r, c, d);\n                result += dyi;\n              }\n            }\n            else {\n              break;\n            }\n          }\n      }\n      setOutput(result);\n      }\n    ");
    }
    return LRNGradProgram;
}());

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
var lrnGrad = function (args) {
    var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
    var x = inputs.x, y = inputs.y, dy = inputs.dy;
    var depthRadius = attrs.depthRadius, bias = attrs.bias, alpha = attrs.alpha, beta = attrs.beta;
    var program = new LRNGradProgram(x.shape, depthRadius, bias, alpha, beta);
    return backend.runWebGLProgram(program, [x, y, dy], x.dtype);
};
// tslint:disable-next-line: variable-name
var LRNGradConfig = {
    kernelName: tf.LRNGrad,
    backendName: 'webgl',
    kernelFunc: lrnGrad
};

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
function maxImpl(x, reduceShape, outShape, backend) {
    var inSize = tf.util.sizeFromShape(reduceShape);
    var xSize = tf.util.sizeFromShape(x.shape);
    var batchSize = xSize / inSize;
    var reshapedInput = reshape({ inputs: { x: x }, attrs: { shape: [batchSize, inSize] }, backend: backend });
    var reduced = reduce(reshapedInput, x.dtype, 'max', backend);
    var reshapedOutput = reshape({ inputs: { x: reduced }, attrs: { shape: outShape }, backend: backend });
    backend.disposeIntermediateTensorInfo(reshapedInput);
    backend.disposeIntermediateTensorInfo(reduced);
    return reshapedOutput;
}

function max(args) {
    var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
    var x = inputs.x;
    var reductionIndices = attrs.reductionIndices, keepDims = attrs.keepDims;
    var xRank = x.shape.length;
    var origAxes = tf.util.parseAxisParam(reductionIndices, x.shape);
    var axes = origAxes;
    var permutedAxes = tf.backend_util.getAxesPermutation(axes, xRank);
    var maxInputIsTransposed = permutedAxes != null;
    var shouldExecuteOnCPU = backend.shouldExecuteOnCPU([x]);
    var maxInput = x;
    if (maxInputIsTransposed) {
        if (shouldExecuteOnCPU) {
            var xTexData = backend.texData.get(maxInput.dataId);
            var values = xTexData.values;
            var newShape = new Array(xRank);
            for (var i = 0; i < newShape.length; i++) {
                newShape[i] = x.shape[permutedAxes[i]];
            }
            var maxInputValues = transposeImplCPU(values, x.shape, x.dtype, permutedAxes, newShape);
            maxInput = backend.makeTensorInfo(newShape, x.dtype);
            var maxInputData = backend.texData.get(maxInput.dataId);
            maxInputData.values = maxInputValues;
        }
        else {
            maxInput = transposeImpl(x, permutedAxes, backend);
        }
        axes = tf.backend_util.getInnerMostAxes(axes.length, xRank);
    }
    tf.backend_util.assertAxesAreInnerMostDims('max', axes, xRank);
    var _a = __read(tf.backend_util.computeOutAndReduceShapes(maxInput.shape, axes), 2), maxOutShape = _a[0], reduceShape = _a[1];
    var outShape = maxOutShape;
    if (keepDims) {
        // rather than reshape at the end, set the target shape here.
        outShape = tf.backend_util.expandShapeToKeepDim(maxOutShape, origAxes);
    }
    var out;
    if (shouldExecuteOnCPU) {
        var xTexData = backend.texData.get(maxInput.dataId);
        var values = xTexData.values;
        var outValues = maxImplCPU(values, tf.util.sizeFromShape(reduceShape), outShape, x.dtype);
        out = backend.makeTensorInfo(outShape, x.dtype);
        var outData = backend.texData.get(out.dataId);
        outData.values = outValues;
    }
    else {
        out = maxImpl(maxInput, reduceShape, outShape, backend);
    }
    if (maxInputIsTransposed) {
        backend.disposeIntermediateTensorInfo(maxInput);
    }
    return out;
}
var maxConfig = {
    kernelName: tf.Max,
    backendName: 'webgl',
    kernelFunc: max
};

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
var MAXIMUM = CHECK_NAN_SNIPPET + "\n  return max(a, b);\n";
var MAXIMUM_PACKED = "\n  vec4 result = vec4(max(a, b));\n  bvec4 isNaNA = isnan(a);\n  bvec4 isNaNB = isnan(b);\n  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);\n  " +
    CHECK_NAN_SNIPPET_PACKED + "\n  return result;\n";
var maximum = binaryKernelFunc({
    opSnippet: MAXIMUM,
    packedOpSnippet: MAXIMUM_PACKED,
    cpuKernelImpl: maximumImplCPU
});
var maximumConfig = {
    kernelName: tf.Maximum,
    backendName: 'webgl',
    kernelFunc: maximum
};

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
function maxPool(args) {
    var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
    var x = inputs.x;
    assertNotComplex(x, 'maxPool');
    var filterSize = attrs.filterSize, strides = attrs.strides, pad = attrs.pad, dimRoundingMode = attrs.dimRoundingMode;
    var dilations = 1;
    tf.util.assert(tf.backend_util.eitherStridesOrDilationsAreOne(strides, dilations), function () { return 'Error in maxPool: Either strides or dilations must be 1. ' +
        "Got strides ".concat(strides, " and dilations '").concat(dilations, "'"); });
    var convInfo = tf.backend_util.computePool2DInfo(x.shape, filterSize, strides, dilations, pad, dimRoundingMode);
    if (convInfo.filterWidth === 1 && convInfo.filterHeight === 1 &&
        tf.util.arraysEqual(convInfo.inShape, convInfo.outShape)) {
        return identity({ inputs: { x: x }, backend: backend });
    }
    var maxPoolProgram = new Pool2DProgram(convInfo, 'max', false);
    return backend.runWebGLProgram(maxPoolProgram, [x], x.dtype);
}
var maxPoolConfig = {
    kernelName: tf.MaxPool,
    backendName: 'webgl',
    kernelFunc: maxPool
};

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
function maxPool3d(args) {
    var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
    var x = inputs.x;
    var filterSize = attrs.filterSize, strides = attrs.strides, pad = attrs.pad, dataFormat = attrs.dataFormat, dimRoundingMode = attrs.dimRoundingMode;
    var dilations = [1, 1, 1];
    var convInfo = tf.backend_util.computePool3DInfo(x.shape, filterSize, strides, dilations, pad, dimRoundingMode, dataFormat);
    var maxPoolProgram = new Pool3DProgram(convInfo, 'max', false);
    return backend.runWebGLProgram(maxPoolProgram, [x], x.dtype);
}
var maxPool3DConfig = {
    kernelName: tf.MaxPool3D,
    backendName: 'webgl',
    kernelFunc: maxPool3d
};

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
var MaxPool2DBackpropProgram = /** @class */ (function () {
    function MaxPool2DBackpropProgram(convInfo) {
        this.variableNames = ['dy', 'maxPos'];
        this.outputShape = convInfo.inShape;
        var strideHeight = convInfo.strideHeight;
        var strideWidth = convInfo.strideWidth;
        var dilationHeight = convInfo.dilationHeight;
        var effectiveFilterHeight = convInfo.effectiveFilterHeight;
        var effectiveFilterWidth = convInfo.effectiveFilterWidth;
        var padTop = effectiveFilterHeight - 1 - convInfo.padInfo.top;
        var padLeft = effectiveFilterWidth - 1 - convInfo.padInfo.left;
        var lastIndex = effectiveFilterHeight * effectiveFilterWidth - 1;
        this.userCode = "\n      const ivec2 pads = ivec2(".concat(padTop, ", ").concat(padLeft, ");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n\n        ivec2 dyRCCorner = coords.yz - pads;\n        int dyRCorner = dyRCCorner.x;\n        int dyCCorner = dyRCCorner.y;\n\n        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        for (int wR = 0; wR < ").concat(effectiveFilterHeight, ";\n          wR += ").concat(dilationHeight, ") {\n          float dyR = float(dyRCorner + wR) / ").concat(strideHeight, ".0;\n\n          if (dyR < 0.0 || dyR >= ").concat(convInfo.outHeight, ".0 || fract(dyR) > 0.0) {\n            continue;\n          }\n          int idyR = int(dyR);\n\n          for (int wC = 0; wC < ").concat(effectiveFilterWidth, "; wC++) {\n            float dyC = float(dyCCorner + wC) / ").concat(strideWidth, ".0;\n\n            if (dyC < 0.0 || dyC >= ").concat(convInfo.outWidth, ".0 ||\n                fract(dyC) > 0.0) {\n              continue;\n            }\n            int idyC = int(dyC);\n\n            float dyValue = getDy(b, idyR, idyC, d);\n            int maxPosValue = ").concat(lastIndex, " - int(getMaxPos(b, idyR, idyC, d));\n\n            // Get the current value, check it against the value from the\n            // position matrix.\n            int curPosValue = wR * ").concat(effectiveFilterWidth, " + wC;\n            float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);\n\n            dotProd += dyValue * mask;\n          }\n        }\n        setOutput(dotProd);\n      }\n    ");
    }
    return MaxPool2DBackpropProgram;
}());
var MaxPool3DBackpropProgram = /** @class */ (function () {
    function MaxPool3DBackpropProgram(convInfo) {
        this.variableNames = ['dy', 'maxPos'];
        this.outputShape = convInfo.inShape;
        var strideDepth = convInfo.strideDepth;
        var strideHeight = convInfo.strideHeight;
        var strideWidth = convInfo.strideWidth;
        var dilationDepth = convInfo.dilationDepth;
        var dilationHeight = convInfo.dilationHeight;
        var dilationWidth = convInfo.dilationWidth;
        var effectiveFilterDepth = convInfo.effectiveFilterDepth;
        var effectiveFilterHeight = convInfo.effectiveFilterHeight;
        var effectiveFilterWidth = convInfo.effectiveFilterWidth;
        var padFront = effectiveFilterDepth - 1 - convInfo.padInfo.front;
        var padTop = effectiveFilterHeight - 1 - convInfo.padInfo.top;
        var padLeft = effectiveFilterWidth - 1 - convInfo.padInfo.left;
        var lastIndex = effectiveFilterDepth * effectiveFilterHeight * effectiveFilterWidth - 1;
        this.userCode = "\n      const ivec3 pads = ivec3(".concat(padFront, ", ").concat(padTop, ", ").concat(padLeft, ");\n\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int batch = coords.x;\n        int ch = coords.u;\n\n        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;\n        int dyDCorner = dyCorner.x;\n        int dyRCorner = dyCorner.y;\n        int dyCCorner = dyCorner.z;\n\n        // Convolve dy(?, ?, ?, ch) with pos mask(:, :, :, d) to get\n        // dx(xD, xR, xC, ch).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n\n        for (int wD = 0; wD < ").concat(effectiveFilterDepth, ";\n           wD += ").concat(dilationDepth, ") {\n          float dyD = float(dyDCorner + wD) / ").concat(strideDepth, ".0;\n\n          if (dyD < 0.0 || dyD >= ").concat(convInfo.outDepth, ".0 || fract(dyD) > 0.0) {\n            continue;\n          }\n          int idyD = int(dyD);\n\n          for (int wR = 0; wR < ").concat(effectiveFilterHeight, ";\n              wR += ").concat(dilationHeight, ") {\n            float dyR = float(dyRCorner + wR) / ").concat(strideHeight, ".0;\n\n            if (dyR < 0.0 || dyR >= ").concat(convInfo.outHeight, ".0 ||\n                fract(dyR) > 0.0) {\n              continue;\n            }\n            int idyR = int(dyR);\n\n            for (int wC = 0; wC < ").concat(effectiveFilterWidth, ";\n                wC += ").concat(dilationWidth, ") {\n              float dyC = float(dyCCorner + wC) / ").concat(strideWidth, ".0;\n\n              if (dyC < 0.0 || dyC >= ").concat(convInfo.outWidth, ".0 ||\n                  fract(dyC) > 0.0) {\n                continue;\n              }\n              int idyC = int(dyC);\n\n              float dyValue = getDy(batch, idyD, idyR, idyC, ch);\n              int maxPosValue = ").concat(lastIndex, " -\n                  int(getMaxPos(batch, idyD, idyR, idyC, ch));\n\n              // Get the current value, check it against the value from the\n              // position matrix.\n              int curPosValue =\n                  wD * ").concat(effectiveFilterHeight, " * ").concat(effectiveFilterWidth, " +\n                  wR * ").concat(effectiveFilterWidth, " + wC;\n              float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);\n\n              dotProd += dyValue * mask;\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ");
    }
    return MaxPool3DBackpropProgram;
}());

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
function maxPool3DGrad(args) {
    var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
    var dy = inputs.dy, input = inputs.input;
    var x = input;
    var filterSize = attrs.filterSize, strides = attrs.strides, pad = attrs.pad, dimRoundingMode = attrs.dimRoundingMode;
    var dilations = [1, 1, 1];
    var convInfo = tf.backend_util.computePool3DInfo(x.shape, filterSize, strides, dilations, pad, dimRoundingMode);
    var maxPool3dPositionsProgram = new Pool3DProgram(convInfo, 'max', true /* get positions */);
    var maxPool3dPositions = backend.runWebGLProgram(maxPool3dPositionsProgram, [x], x.dtype);
    var maxPoolBackpropProgram = new MaxPool3DBackpropProgram(convInfo);
    var result = backend.runWebGLProgram(maxPoolBackpropProgram, [dy, maxPool3dPositions], x.dtype);
    backend.disposeIntermediateTensorInfo(maxPool3dPositions);
    return result;
}
var maxPool3DGradConfig = {
    kernelName: tf.MaxPool3DGrad,
    backendName: 'webgl',
    kernelFunc: maxPool3DGrad
};

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
function maxPoolGrad(args) {
    var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
    var dy = inputs.dy, input = inputs.input, output = inputs.output;
    var x = input;
    assertNotComplex([input, output], 'maxPoolGrad');
    var filterSize = attrs.filterSize, strides = attrs.strides, pad = attrs.pad, dimRoundingMode = attrs.dimRoundingMode;
    var convInfo = tf.backend_util.computePool2DInfo(x.shape, filterSize, strides, 1 /* dilations */, pad, dimRoundingMode);
    var getPositions = true;
    var maxPoolPositionsProgram = new Pool2DProgram(convInfo, 'max', getPositions);
    var maxPoolPositions = backend.runWebGLProgram(maxPoolPositionsProgram, [x], x.dtype);
    var maxPoolBackPropProgram = new MaxPool2DBackpropProgram(convInfo);
    var result = backend.runWebGLProgram(maxPoolBackPropProgram, [dy, maxPoolPositions], x.dtype);
    backend.disposeIntermediateTensorInfo(maxPoolPositions);
    return result;
}
var maxPoolGradConfig = {
    kernelName: tf.MaxPoolGrad,
    backendName: 'webgl',
    kernelFunc: maxPoolGrad
};

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
function maxPoolWithArgmaxImpl(x, includeBatchInIndex, convInfo, backend) {
    var program = new Pool2DProgram(convInfo, 'max', false);
    var poolOutput = backend.runWebGLProgram(program, [x], 'float32');
    program = new Pool2DProgram(convInfo, 'max', true, true, includeBatchInIndex);
    var indexOutput = backend.runWebGLProgram(program, [x], 'float32');
    return [poolOutput, indexOutput];
}

var maxPoolWithArgmaxConfig = {
    kernelName: tf.MaxPoolWithArgmax,
    backendName: 'webgl',
    kernelFunc: function (_a) {
        var inputs = _a.inputs, attrs = _a.attrs, backend = _a.backend;
        var x = inputs.x;
        var filterSize = attrs.filterSize, strides = attrs.strides, pad = attrs.pad, includeBatchInIndex = attrs.includeBatchInIndex;
        var webglBackend = backend;
        tf.util.assert(x.shape.length === 4, function () { return "Error in maxPool: input must be rank 4 but got rank ".concat(x.shape.length, "."); });
        var dilations = [1, 1];
        tf.util.assert(tf.backend_util.eitherStridesOrDilationsAreOne(strides, dilations), function () { return 'Error in maxPool: Either strides or dilations must be 1. ' +
            "Got strides ".concat(strides, " and dilations '").concat(dilations, "'"); });
        var convInfo = tf.backend_util.computePool2DInfo(x.shape, filterSize, strides, dilations, pad);
        var _b = __read(maxPoolWithArgmaxImpl(x, includeBatchInIndex, convInfo, webglBackend), 2), result = _b[0], indexes = _b[1];
        return [result, indexes];
    }
};

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
function meanImpl(x, reduceShape, outShape, backend) {
    var inSize = tf.util.sizeFromShape(reduceShape);
    var xSize = tf.util.sizeFromShape(x.shape);
    var batchSize = xSize / inSize;
    var reshapedInput = reshape({ inputs: { x: x }, attrs: { shape: [batchSize, inSize] }, backend: backend });
    var reduced = reduce(reshapedInput, 'float32', 'mean', backend);
    var reshapedOutput = reshape({ inputs: { x: reduced }, attrs: { shape: outShape }, backend: backend });
    backend.disposeIntermediateTensorInfo(reshapedInput);
    backend.disposeIntermediateTensorInfo(reduced);
    return reshapedOutput;
}

var meanConfig = {
    kernelName: tf.Mean,
    backendName: 'webgl',
    kernelFunc: function (_a) {
        var e_1, _b;
        var inputs = _a.inputs, attrs = _a.attrs, backend = _a.backend;
        var x = inputs.x;
        var keepDims = attrs.keepDims, axis = attrs.axis;
        var webglBackend = backend;
        var xRank = x.shape.length;
        var origAxes = tf.util.parseAxisParam(axis, x.shape);
        var axes = origAxes;
        var permutedAxes = tf.backend_util.getAxesPermutation(axes, xRank);
        var meanInputIsTransposed = permutedAxes != null;
        var shouldExecuteOnCPU = webglBackend.shouldExecuteOnCPU([x]);
        var intermediates = [];
        var meanInput = x;
        if (meanInputIsTransposed) {
            if (shouldExecuteOnCPU) {
                var xTexData = webglBackend.texData.get(meanInput.dataId);
                var values = xTexData.values;
                var newShape = new Array(xRank);
                for (var i = 0; i < newShape.length; i++) {
                    newShape[i] = x.shape[permutedAxes[i]];
                }
                var meanInputValues = transposeImplCPU(values, x.shape, x.dtype, permutedAxes, newShape);
                meanInput = webglBackend.makeTensorInfo(newShape, x.dtype);
                var meanInputData = webglBackend.texData.get(meanInput.dataId);
                meanInputData.values = meanInputValues;
            }
            else {
                meanInput = transposeImpl(x, permutedAxes, webglBackend);
            }
            intermediates.push(meanInput);
            axes = tf.backend_util.getInnerMostAxes(axes.length, xRank);
        }
        tf.backend_util.assertAxesAreInnerMostDims('sum', axes, xRank);
        var _c = __read(tf.backend_util.computeOutAndReduceShapes(meanInput.shape, axes), 2), meanOutShape = _c[0], reduceShape = _c[1];
        var outShape = meanOutShape;
        if (keepDims) {
            // rather than reshape at the end, set the target shape here.
            outShape = tf.backend_util.expandShapeToKeepDim(meanOutShape, origAxes);
        }
        var out = meanImpl(meanInput, reduceShape, outShape, webglBackend);
        try {
            for (var intermediates_1 = __values(intermediates), intermediates_1_1 = intermediates_1.next(); !intermediates_1_1.done; intermediates_1_1 = intermediates_1.next()) {
                var i = intermediates_1_1.value;
                webglBackend.disposeIntermediateTensorInfo(i);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (intermediates_1_1 && !intermediates_1_1.done && (_b = intermediates_1.return)) _b.call(intermediates_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return out;
    }
};

function min(args) {
    var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
    var x = inputs.x;
    var axis = attrs.axis, keepDims = attrs.keepDims;
    var xRank = x.shape.length;
    var origAxes = tf.util.parseAxisParam(axis, x.shape);
    var axes = origAxes;
    var permutedAxes = tf.backend_util.getAxesPermutation(axes, xRank);
    var permutedX = x;
    if (permutedAxes != null) {
        permutedX = transpose({ inputs: { x: x }, backend: backend, attrs: { perm: permutedAxes } });
        axes = tf.backend_util.getInnerMostAxes(axes.length, x.shape.length);
    }
    tf.backend_util.assertAxesAreInnerMostDims('min', axes, xRank);
    var _a = __read(tf.backend_util.computeOutAndReduceShapes(permutedX.shape, axes), 2), outShape = _a[0], reduceShape = _a[1];
    var inSize = tf.util.sizeFromShape(reduceShape);
    var a2D = reshape({ inputs: { x: permutedX }, backend: backend, attrs: { shape: [-1, inSize] } });
    var reduced = reduce(a2D, a2D.dtype, 'min', backend);
    var res;
    if (keepDims) {
        var newShape = tf.backend_util.expandShapeToKeepDim(outShape, origAxes);
        res = reshape({ inputs: { x: reduced }, backend: backend, attrs: { shape: newShape } });
    }
    else {
        res = reshape({ inputs: { x: reduced }, backend: backend, attrs: { shape: outShape } });
    }
    backend.disposeIntermediateTensorInfo(a2D);
    backend.disposeIntermediateTensorInfo(reduced);
    if (permutedAxes != null) {
        backend.disposeIntermediateTensorInfo(permutedX);
    }
    return res;
}
var minConfig = {
    kernelName: tf.Min,
    backendName: 'webgl',
    kernelFunc: min
};

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
var MINIMUM = CHECK_NAN_SNIPPET + "\n  return min(a, b);\n";
var MINIMUM_PACKED = "\n  vec4 result = vec4(min(a, b));\n  bvec4 isNaNA = isnan(a);\n  bvec4 isNaNB = isnan(b);\n  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);\n  " +
    CHECK_NAN_SNIPPET_PACKED + "\n  return result;\n";
var minimum = binaryKernelFunc({
    opSnippet: MINIMUM,
    packedOpSnippet: MINIMUM_PACKED,
    cpuKernelImpl: minimumImplCPU
});
var minimumConfig = {
    kernelName: tf.Minimum,
    backendName: 'webgl',
    kernelFunc: minimum
};

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
var MirrorPadProgram = /** @class */ (function () {
    function MirrorPadProgram(xShape, paddings, mode) {
        this.variableNames = ['x'];
        this.outputShape = paddings.map(function (p, i) { return p[0] /* beforePad */ + xShape[i] + p[1]; } /* afterPad */);
        var rank = xShape.length;
        var dtype = getCoordsDataType(rank);
        var start = paddings.map(function (p) { return p[0]; }).join(',');
        var end = paddings.map(function (p, i) { return p[0] + xShape[i]; }).join(',');
        var unpackedCoords = ['coords[0]', 'coords[1]', 'coords[2]', 'coords[3]'].slice(0, rank);
        var offset = mode === 'reflect' ? 0 : 1;
        if (rank === 1) {
            this.userCode = "\n        int start = ".concat(start, ";\n        int end = ").concat(end, ";\n\n        void main() {\n          int outC = getOutputCoords();\n          if (outC < start) {\n            outC = start * 2 - outC - ").concat(offset, ";\n          } else if(outC >= end) {\n            outC = (end - 1) * 2 - outC + ").concat(offset, ";\n          }\n          setOutput(getX(outC - start));\n        }\n      ");
            return;
        }
        this.userCode = "\n      ".concat(dtype, " start = ").concat(dtype, "(").concat(start, ");\n      ").concat(dtype, " end = ").concat(dtype, "(").concat(end, ");\n\n      void main() {\n        ").concat(dtype, " outC = getOutputCoords();\n        for (int i = 0; i < ").concat(rank, "; i++) {\n          if (outC[i] < start[i]) {\n            outC[i] = start[i] * 2 - outC[i] - ").concat(offset, ";\n          } else if(outC[i] >= end[i]) {\n            outC[i] = (end[i] - 1) * 2 - outC[i] + ").concat(offset, ";\n          }\n        }\n        ").concat(dtype, " coords = outC - start;\n        setOutput(getX(").concat(unpackedCoords, "));\n      }\n    ");
    }
    return MirrorPadProgram;
}());

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
/**
 * Example shader code for
 * `mirrorPad(tf.tensor1d([1, 2, 3], 'int32'), [[2, 2]], 'reflect')`
 * ```
 *    const int start = int(2);
 *    const int end = int(5);
 *
 *    void main() {
 *       int outputLoc = getOutputCoords();
 *       vec4 result = vec4(0.);
 *
 *       int rc = outputLoc;
 *
 *       int source = rc;
 *       if (source < start) {
 *         source = start * 2 - source - 0;
 *       } else if (source >= end) {
 *         source = (end - 1) * 2 - source + 0;
 *       }
 *       source -= start;
 *
 *       result[0] = getChannel(getX(source), source);
 *       rc += 1;
 *       if(rc < 6) {
 *          int source = rc;
 *          if (source < start) {
 *            source = start * 2 - source - 0;
 *          } else if (source >= end) {
 *            source = (end - 1) * 2 - source + 0;
 *          }
 *          source -= start;
 *
 *         result[1] = getChannel(getX(source), source);
 *       }
 *
 *       setOutput(result);
 *     }
 * ```
 */
var MirrorPadPackedProgram = /** @class */ (function () {
    function MirrorPadPackedProgram(xShape, paddings, mode) {
        this.variableNames = ['x'];
        this.packedInputs = true;
        this.packedOutput = true;
        this.outputShape = paddings.map(function (p, i) { return p[0] /* beforePad */ + xShape[i] + p[1]; } /* afterPad */);
        var rank = xShape.length;
        var dtype = getCoordsDataType(rank);
        var start = paddings.map(function (p) { return p[0]; }).join(',');
        var end = paddings.map(function (p, i) { return p[0] + xShape[i]; }).join(',');
        var coords = getChannels('rc', rank);
        var source = getChannels('source', rank);
        var cLimit = "".concat(coords[rank - 1], " < ").concat(this.outputShape[rank - 1]);
        var innerDims = rank === 1 ? 'source' : "vec2(".concat(source.slice(-2).join(), ")");
        var offset = mode === 'reflect' ? 0 : 1;
        var mainLoop = '';
        if (rank === 1) {
            var padSetup = "\n        ".concat(dtype, " source = rc;\n        if (source < start) {\n          source = start * 2 - source - ").concat(offset, ";\n        } else if (source >= end) {\n          source = (end - 1) * 2 - source + ").concat(offset, ";\n        }\n        source -= start;\n      ");
            mainLoop = "\n        ".concat(dtype, " rc = outputLoc;\n        ").concat(padSetup, "\n        result[0] = getChannel(getX(").concat(source.join(), "), ").concat(innerDims, ");\n        ").concat(coords[rank - 1], " += 1;\n        if(").concat(cLimit, ") {\n          ").concat(padSetup, "\n          result[1] = getChannel(getX(").concat(source.join(), "), ").concat(innerDims, ");\n        }\n      ");
        }
        else {
            var padSetup = "\n        ".concat(dtype, " source = rc;\n        ").concat(dtype, " lt = ").concat(dtype, "(lessThan(source, start));\n        ").concat(dtype, " gte = ").concat(dtype, "(greaterThanEqual(source, end));\n        ").concat(dtype, " orig = 1 - (lt + gte);\n        source = orig * source +\n                lt * (start * 2 - source - ").concat(offset, ") +\n                gte * ((end - 1) * 2 - source + ").concat(offset, ");\n        source -= start;\n      ");
            mainLoop = "\n        ".concat(dtype, " rc = outputLoc;\n        ").concat(padSetup, "\n        result[0] = getChannel(getX(").concat(source.join(), "), ").concat(innerDims, ");\n        ").concat(coords[rank - 1], " += 1;\n        if(").concat(cLimit, ") {\n          ").concat(padSetup, "\n          result[1] = getChannel(getX(").concat(source.join(), "), ").concat(innerDims, ");\n        }\n        rc = outputLoc;\n        ").concat(coords[rank - 2], " += 1;\n        if(").concat(coords[rank - 2], " < ").concat(this.outputShape[rank - 2], ") {\n          ").concat(padSetup, "\n          result[2] = getChannel(getX(").concat(source.join(), "), ").concat(innerDims, ");\n          ").concat(coords[rank - 1], " += 1;\n          if(").concat(cLimit, ") {\n            ").concat(padSetup, "\n            result[3] = getChannel(getX(").concat(source.join(), "), ").concat(innerDims, ");\n          }\n        }\n      ");
        }
        this.userCode = "\n      const ".concat(dtype, " start = ").concat(dtype, "(").concat(start, ");\n      const ").concat(dtype, " end = ").concat(dtype, "(").concat(end, ");\n\n      void main() {\n        ").concat(dtype, " outputLoc = getOutputCoords();\n        vec4 result = vec4(0.);\n        ").concat(mainLoop, "\n        setOutput(result);\n      }\n    ");
    }
    return MirrorPadPackedProgram;
}());

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
var mirrorPadKernelFunc = function (_a) {
    var inputs = _a.inputs, backend = _a.backend, attrs = _a.attrs;
    var x = inputs.x;
    var paddings = attrs.paddings, mode = attrs.mode;
    var program = tf.env().getBool('WEBGL_PACK_ARRAY_OPERATIONS') ?
        new MirrorPadPackedProgram(x.shape, paddings, mode) :
        new MirrorPadProgram(x.shape, paddings, mode);
    var output = backend.runWebGLProgram(program, [x], x.dtype);
    return output;
};
var mirrorPadConfig = {
    kernelName: tf.MirrorPad,
    backendName: 'webgl',
    kernelFunc: mirrorPadKernelFunc,
};

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
var MOD = "if (b == 0.0) return NAN;\n  return mod(a, b);";
var MOD_PACKED = "\n  vec4 result = mod(a, b);\n  bvec4 isNaN = equal(b, vec4(0.0));\n  " +
    CHECK_NAN_SNIPPET_PACKED + "\n  return result;\n";
var mod = binaryKernelFunc({
    opSnippet: MOD,
    packedOpSnippet: MOD_PACKED,
});
var modConfig = {
    kernelName: tf.Mod,
    backendName: 'webgl',
    kernelFunc: mod
};

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
var MultinomialProgram = /** @class */ (function () {
    function MultinomialProgram(batchSize, numOutcomes, numSamples) {
        this.variableNames = ['probs'];
        this.customUniforms = [{ name: 'seed', type: 'float' }];
        this.outputShape = [batchSize, numSamples];
        this.userCode = "\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n\n        float r = random(seed);\n        float cdf = 0.0;\n\n        for (int i = 0; i < ".concat(numOutcomes - 1, "; i++) {\n          cdf += getProbs(batch, i);\n\n          if (r < cdf) {\n            setOutput(float(i));\n            return;\n          }\n        }\n\n        // If no other event happened, last event happened.\n        setOutput(float(").concat(numOutcomes - 1, "));\n      }\n    ");
    }
    return MultinomialProgram;
}());

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
// Without the equality check div produces 0.9999 for a = b, which when
// floored can cause errors.
var DIV = "\nif (a == b) {\n  return 1.0;\n};\nreturn a / b;";
// We do the same as in ./binaryop_gpu, with vec4 and ivec4.
// On Linux, the vectorized implementation produces NaNs when a and b are 0.
var DIV_PACKED = "\n  // vec4 one = vec4(equal(a, b));\n  // return one + (vec4(1.0) - one) * a / b;\n  vec4 result = a / b;\n  if(a.x == b.x) {\n    result.x = 1.;\n  }\n  if(a.y == b.y) {\n    result.y = 1.;\n  }\n  if(a.z == b.z) {\n    result.z = 1.;\n  }\n  if(a.w == b.w) {\n    result.w = 1.;\n  }\n\n  return result;\n";
var realDiv = binaryKernelFunc({ opSnippet: DIV, packedOpSnippet: DIV_PACKED, checkOutOfBounds: true });
var realDivConfig = {
    kernelName: tf.RealDiv,
    backendName: 'webgl',
    kernelFunc: realDiv,
};

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
var SUB = 'return a - b;';
var sub = binaryKernelFunc({
    opSnippet: SUB,
    packedOpSnippet: SUB,
    supportsComplex: true,
    cpuKernelImpl: subImplCPU
});
var subConfig = {
    kernelName: tf.Sub,
    backendName: 'webgl',
    kernelFunc: sub
};

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
function softmax(args) {
    var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
    var logits = inputs.logits;
    var dim = attrs.dim;
    var axes = tf.util.parseAxisParam([dim], logits.shape);
    var maxLogit = max({
        inputs: { x: logits },
        backend: backend,
        attrs: { reductionIndices: axes, keepDims: false }
    });
    var expandedShape = tf.backend_util.expandShapeToKeepDim(maxLogit.shape, axes);
    var maxLogitsReshaped = reshape({ inputs: { x: maxLogit }, backend: backend, attrs: { shape: expandedShape } });
    var a = sub({ inputs: { a: logits, b: maxLogitsReshaped }, backend: backend });
    var b = exp({ inputs: { x: a }, backend: backend });
    var sumExp = sum({ inputs: { x: b }, backend: backend, attrs: { axis: axes, keepDims: false } });
    var sumExpReshaped = reshape({ inputs: { x: sumExp }, backend: backend, attrs: { shape: expandedShape } });
    var res = realDiv({ inputs: { a: b, b: sumExpReshaped }, backend: backend });
    backend.disposeIntermediateTensorInfo(maxLogit);
    backend.disposeIntermediateTensorInfo(maxLogitsReshaped);
    backend.disposeIntermediateTensorInfo(a);
    backend.disposeIntermediateTensorInfo(b);
    backend.disposeIntermediateTensorInfo(sumExp);
    backend.disposeIntermediateTensorInfo(sumExpReshaped);
    return res;
}
var softmaxConfig = {
    kernelName: tf.Softmax,
    backendName: 'webgl',
    kernelFunc: softmax
};

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
function multinomial(args) {
    var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
    var logits = inputs.logits;
    var numSamples = attrs.numSamples, seed = attrs.seed, normalized = attrs.normalized;
    var probs = normalized ?
        logits :
        softmax({ inputs: { logits: logits }, backend: backend, attrs: { dim: logits.shape.length - 1 } });
    var batchSize = probs.shape[0];
    var numOutcomes = probs.shape[1];
    var program = new MultinomialProgram(batchSize, numOutcomes, numSamples);
    var customValues = [[seed]];
    var res = backend.runWebGLProgram(program, [probs], 'int32', customValues);
    if (!normalized) {
        backend.disposeIntermediateTensorInfo(probs);
    }
    return res;
}
var multinomialConfig = {
    kernelName: tf.Multinomial,
    backendName: 'webgl',
    kernelFunc: multinomial
};

var NEG = CHECK_NAN_SNIPPET$1 + "\n  return -x;\n";
var NEG_PACKED = "\n  vec4 result = -x;\n  bvec4 isNaN = isnan(x);\n\n  result.r = isNaN.r ? x.r : result.r;\n  result.g = isNaN.g ? x.g : result.g;\n  result.b = isNaN.b ? x.b : result.b;\n  result.a = isNaN.a ? x.a : result.a;\n\n  return result;\n";
// This doesn't use unaryKernelFunc because negImplCPU is not of type
// SimpleUnaryKernelImplCPU.
function neg(args) {
    var inputs = args.inputs, backend = args.backend;
    var x = inputs.x;
    if (backend.shouldExecuteOnCPU([x])) {
        var xData = backend.texData.get(x.dataId);
        var _a = __read(negImplCPU(xData.values, x.shape, x.dtype), 2), outValues = _a[0], newShape = _a[1];
        return backend.makeTensorInfo(newShape, x.dtype, outValues);
    }
    var program;
    if (tf.env().getBool('WEBGL_PACK_UNARY_OPERATIONS')) {
        program = new UnaryOpPackedProgram(x.shape, NEG_PACKED);
    }
    else {
        program = new UnaryOpProgram(x.shape, NEG);
    }
    return backend.runWebGLProgram(program, [x], x.dtype);
}
var negConfig = {
    kernelName: tf.Neg,
    backendName: 'webgl',
    kernelFunc: neg
};

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
var nonMaxSuppressionV3Impl = tf.kernel_impls.nonMaxSuppressionV3Impl;
function nonMaxSuppressionV3(args) {
    tf.backend_util.warn('tf.nonMaxSuppression() in webgl locks the UI thread. ' +
        'Call tf.nonMaxSuppressionAsync() instead');
    var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
    var boxes = inputs.boxes, scores = inputs.scores;
    var maxOutputSize = attrs.maxOutputSize, iouThreshold = attrs.iouThreshold, scoreThreshold = attrs.scoreThreshold;
    var boxesVals = backend.readSync(boxes.dataId);
    var scoresVals = backend.readSync(scores.dataId);
    var selectedIndices = nonMaxSuppressionV3Impl(boxesVals, scoresVals, maxOutputSize, iouThreshold, scoreThreshold).selectedIndices;
    return backend.makeTensorInfo([selectedIndices.length], 'int32', new Int32Array(selectedIndices));
}
var nonMaxSuppressionV3Config = {
    kernelName: tf.NonMaxSuppressionV3,
    backendName: 'webgl',
    kernelFunc: nonMaxSuppressionV3
};

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
var nonMaxSuppressionV4Impl = tf.kernel_impls.nonMaxSuppressionV4Impl;
function nonMaxSuppressionV4(args) {
    tf.backend_util.warn('tf.nonMaxSuppression() in webgl locks the UI thread. ' +
        'Call tf.nonMaxSuppressionAsync() instead');
    var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
    var boxes = inputs.boxes, scores = inputs.scores;
    var maxOutputSize = attrs.maxOutputSize, iouThreshold = attrs.iouThreshold, scoreThreshold = attrs.scoreThreshold, padToMaxOutputSize = attrs.padToMaxOutputSize;
    var boxesVals = backend.readSync(boxes.dataId);
    var scoresVals = backend.readSync(scores.dataId);
    var _a = nonMaxSuppressionV4Impl(boxesVals, scoresVals, maxOutputSize, iouThreshold, scoreThreshold, padToMaxOutputSize), selectedIndices = _a.selectedIndices, validOutputs = _a.validOutputs;
    return [
        backend.makeTensorInfo([selectedIndices.length], 'int32', new Int32Array(selectedIndices)),
        backend.makeTensorInfo([], 'int32', new Int32Array([validOutputs]))
    ];
}
var nonMaxSuppressionV4Config = {
    kernelName: tf.NonMaxSuppressionV4,
    backendName: 'webgl',
    kernelFunc: nonMaxSuppressionV4
};

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
var nonMaxSuppressionV5Impl = tf.kernel_impls.nonMaxSuppressionV5Impl;
function nonMaxSuppressionV5(args) {
    tf.backend_util.warn('tf.nonMaxSuppression() in webgl locks the UI thread. ' +
        'Call tf.nonMaxSuppressionAsync() instead');
    var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
    var boxes = inputs.boxes, scores = inputs.scores;
    var maxOutputSize = attrs.maxOutputSize, iouThreshold = attrs.iouThreshold, scoreThreshold = attrs.scoreThreshold, softNmsSigma = attrs.softNmsSigma;
    var boxesVals = backend.readSync(boxes.dataId);
    var scoresVals = backend.readSync(scores.dataId);
    var maxOutputSizeVal = maxOutputSize;
    var iouThresholdVal = iouThreshold;
    var scoreThresholdVal = scoreThreshold;
    var softNmsSigmaVal = softNmsSigma;
    var _a = nonMaxSuppressionV5Impl(boxesVals, scoresVals, maxOutputSizeVal, iouThresholdVal, scoreThresholdVal, softNmsSigmaVal), selectedIndices = _a.selectedIndices, selectedScores = _a.selectedScores;
    return [
        backend.makeTensorInfo([selectedIndices.length], 'int32', new Int32Array(selectedIndices)),
        backend.makeTensorInfo([selectedScores.length], 'float32', new Float32Array(selectedScores))
    ];
}
var nonMaxSuppressionV5Config = {
    kernelName: tf.NonMaxSuppressionV5,
    backendName: 'webgl',
    kernelFunc: nonMaxSuppressionV5
};

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
var OneHotProgram = /** @class */ (function () {
    function OneHotProgram(numIndices, depth, onValue, offValue) {
        this.variableNames = ['indices'];
        this.outputShape = [numIndices, depth];
        this.userCode = "\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int index = round(getIndices(coords.x));\n        setOutput(mix(float(".concat(offValue, "), float(").concat(onValue, "),\n                      float(index == coords.y)));\n      }\n    ");
    }
    return OneHotProgram;
}());

var oneHot = function (args) {
    var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
    var indices = inputs.indices;
    var dtype = attrs.dtype, depth = attrs.depth, onValue = attrs.onValue, offValue = attrs.offValue;
    var indicesSize = tf.util.sizeFromShape(indices.shape);
    var program = new OneHotProgram(indicesSize, depth, onValue, offValue);
    var reshaped = reshape({ inputs: { x: indices }, backend: backend, attrs: { shape: [indicesSize] } });
    var result = backend.runWebGLProgram(program, [reshaped], dtype);
    backend.disposeIntermediateTensorInfo(reshaped);
    var outShape = __spreadArray(__spreadArray([], __read(indices.shape), false), [depth], false);
    var out = reshape({ inputs: { x: result }, backend: backend, attrs: { shape: outShape } });
    backend.disposeIntermediateTensorInfo(result);
    return out;
};
var oneHotConfig = {
    kernelName: tf.OneHot,
    backendName: 'webgl',
    kernelFunc: oneHot
};

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
function zerosLike(args) {
    var inputs = args.inputs, backend = args.backend;
    var x = inputs.x;
    if (x.dtype === 'complex64') {
        var realPart = real({ inputs: { input: x }, backend: backend });
        var r = zerosLike({ inputs: { x: realPart }, backend: backend });
        var imagPart = imag({ inputs: { input: x }, backend: backend });
        var i = zerosLike({ inputs: { x: imagPart }, backend: backend });
        var result = complex({ inputs: { real: r, imag: i }, backend: backend });
        backend.disposeIntermediateTensorInfo(realPart);
        backend.disposeIntermediateTensorInfo(r);
        backend.disposeIntermediateTensorInfo(imagPart);
        backend.disposeIntermediateTensorInfo(i);
        return result;
    }
    else {
        return fill({
            attrs: {
                shape: x.shape,
                dtype: x.dtype,
                value: x.dtype === 'string' ? '' : 0
            },
            backend: backend
        });
    }
}
var zerosLikeConfig = {
    kernelName: tf.ZerosLike,
    backendName: 'webgl',
    kernelFunc: zerosLike
};

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
function onesLike(args) {
    var inputs = args.inputs, backend = args.backend;
    var x = inputs.x;
    if (x.dtype === 'string') {
        throw new Error('onesLike is not supported under string dtype');
    }
    else if (x.dtype === 'complex64') {
        var realPart = real({ inputs: { input: x }, backend: backend });
        var r = onesLike({ inputs: { x: realPart }, backend: backend });
        var imagPart = imag({ inputs: { input: x }, backend: backend });
        var i = zerosLike({ inputs: { x: imagPart }, backend: backend });
        var result = complex({ inputs: { real: r, imag: i }, backend: backend });
        backend.disposeIntermediateTensorInfo(realPart);
        backend.disposeIntermediateTensorInfo(r);
        backend.disposeIntermediateTensorInfo(imagPart);
        backend.disposeIntermediateTensorInfo(i);
        return result;
    }
    else {
        // TODO(cais, smilkov): Add WebGL shader for onesLike:
        //   https://github.com/tensorflow/tfjs/issues/1293
        return fill({ attrs: { shape: x.shape, dtype: x.dtype, value: 1 }, backend: backend });
    }
}
var onesLikeConfig = {
    kernelName: tf.OnesLike,
    backendName: 'webgl',
    kernelFunc: onesLike
};

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
function pack(args) {
    var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
    var axis = attrs.axis;
    if (inputs.length === 1) {
        return expandDims({ inputs: { input: inputs[0] }, backend: backend, attrs: { dim: axis } });
    }
    var shape = inputs[0].shape;
    var dtype = inputs[0].dtype;
    inputs.forEach(function (t) {
        tf.util.assertShapesMatch(shape, t.shape, 'All tensors passed to stack must have matching shapes');
        tf.util.assert(dtype === t.dtype, function () { return 'All tensors passed to stack must have matching dtypes'; });
    });
    var intermediateTensorInfos = [];
    var expandedTensors = inputs.map(function (t) {
        var expandedT = expandDims({ inputs: { input: t }, backend: backend, attrs: { dim: axis } });
        intermediateTensorInfos.push(expandedT);
        return expandedT;
    });
    var result = concat({ inputs: expandedTensors, backend: backend, attrs: { axis: axis } });
    intermediateTensorInfos.forEach(function (t) { return backend.disposeIntermediateTensorInfo(t); });
    return result;
}
var packConfig = {
    kernelName: tf.Pack,
    backendName: 'webgl',
    kernelFunc: pack
};

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
var PadProgram = /** @class */ (function () {
    function PadProgram(xShape, paddings, constantValue) {
        this.variableNames = ['x'];
        this.customUniforms = [{ name: 'value', type: 'float' }];
        this.outputShape = paddings.map(function (p, i) { return p[0] /* beforePad */ + xShape[i] + p[1]; } /* afterPad */);
        var rank = xShape.length;
        var type = getCoordsDataType(rank);
        var start = paddings.map(function (p) { return p[0]; }).join(',');
        var end = paddings.map(function (p, i) { return p[0] + xShape[i]; }).join(',');
        var unpackedCoords = ['coords[0]', 'coords[1]', 'coords[2]', 'coords[3]'].slice(0, rank);
        if (rank === 1) {
            this.userCode = "\n        int start = ".concat(start, ";\n        int end = ").concat(end, ";\n\n        void main() {\n          int outC = getOutputCoords();\n          if (outC < start || outC >= end) {\n            setOutput(value);\n          } else {\n            setOutput(getX(outC - start));\n          }\n        }\n      ");
            return;
        }
        this.userCode = "\n      ".concat(type, " start = ").concat(type, "(").concat(start, ");\n      ").concat(type, " end = ").concat(type, "(").concat(end, ");\n\n      void main() {\n        ").concat(type, " outC = getOutputCoords();\n        if (any(lessThan(outC, start)) || any(greaterThanEqual(outC, end))) {\n          setOutput(value);\n        } else {\n          ").concat(type, " coords = outC - start;\n          setOutput(getX(").concat(unpackedCoords, "));\n        }\n      }\n    ");
    }
    return PadProgram;
}());

/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
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
var PadPackedProgram = /** @class */ (function () {
    function PadPackedProgram(xShape, paddings, constantValue) {
        this.variableNames = ['x'];
        this.packedInputs = true;
        this.packedOutput = true;
        this.customUniforms = [{ name: 'value', type: 'float' }];
        this.outputShape = paddings.map(function (p, i) { return p[0] /* beforePad */ + xShape[i] + p[1]; } /* afterPad */);
        var rank = xShape.length;
        var dtype = getCoordsDataType(rank);
        var start = paddings.map(function (p) { return p[0]; }).join(',');
        var end = paddings.map(function (p, i) { return p[0] + xShape[i]; }).join(',');
        var coords = getChannels('rc', rank);
        var source = getChannels('source', rank);
        var cLimit = "".concat(coords[rank - 1], " < ").concat(this.outputShape[rank - 1]);
        var innerDims = rank === 1 ? 'source' : "vec2(".concat(source.slice(-2).join(), ")");
        var componentSetup = [
            "".concat(dtype, " rc = outputLoc;"),
            "".concat(coords[rank - 1], " += 1;\n       if(").concat(cLimit, ") {\n      "),
            rank === 1 ? '' : "}\n       rc = outputLoc;\n       ".concat(coords[rank - 2], " += 1;\n       if(").concat(coords[rank - 2], " < ").concat(this.outputShape[rank - 2], ") {"),
            rank === 1 ? '' : "  ".concat(coords[rank - 1], " += 1;\n         if(").concat(cLimit, ") {")
        ];
        var paddingArea = rank === 1 ?
            'rc < start || rc >= end' :
            'any(lessThan(rc, start)) || any(greaterThanEqual(rc, end))';
        var mainLoop = '';
        for (var i = 0, j = rank === 1 ? 2 : 4; i < j; i++) {
            mainLoop += "\n        ".concat(componentSetup[i], "\n        if (").concat(paddingArea, ") {\n          result[").concat(i, "] = float(value);\n        } else {\n          ").concat(dtype, " source = rc - start;\n          result[").concat(i, "] = getChannel(getX(").concat(source.join(), "), ").concat(innerDims, ");\n        }\n      ");
        }
        mainLoop += (rank === 1 ? "} " : "}}");
        this.userCode = "\n      const ".concat(dtype, " start = ").concat(dtype, "(").concat(start, ");\n      const ").concat(dtype, " end = ").concat(dtype, "(").concat(end, ");\n\n      void main() {\n        ").concat(dtype, " outputLoc = getOutputCoords();\n        vec4 result = vec4(0.);\n        ").concat(mainLoop, "\n        setOutput(result);\n      }\n    ");
    }
    return PadPackedProgram;
}());

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
var padV2 = function (args) {
    var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
    var x = inputs.x;
    var paddings = attrs.paddings, constantValue = attrs.constantValue;
    if (tf.util.sizeFromShape(x.shape) === 0) {
        // Short-circuit the computation, since x doesn't have value, only
        // the shape is used to compute output shape to pad.
        var outputShape = paddings.map(function (p, i) { return p[0] /* beforePad */ + x.shape[i] + p[1]; } /* afterPad */);
        return fill({
            backend: backend,
            attrs: { shape: outputShape, value: constantValue, dtype: x.dtype }
        });
    }
    var program = tf.env().getBool('WEBGL_PACK_ARRAY_OPERATIONS') ?
        new PadPackedProgram(x.shape, paddings, constantValue) :
        new PadProgram(x.shape, paddings, constantValue);
    var customValues = [[constantValue]];
    return backend.runWebGLProgram(program, [x], x.dtype, customValues);
};
var padV2Config = {
    kernelName: tf.PadV2,
    backendName: 'webgl',
    kernelFunc: padV2
};

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
var POW = "\n  if(a < 0.0 && floor(b) < b){\n    return NAN;\n  }\n  if (b == 0.0) {\n    return 1.0;\n  }\n  return (round(mod(b, 2.0)) != 1) ?\n      pow(abs(a), b) : sign(a) * pow(abs(a), b);\n";
var POW_PACKED = "\n  // isModRound1 has 1 for components with round(mod(b, 2.0)) == 1, 0 otherwise.\n  vec4 isModRound1 = vec4(equal(round(mod(b, 2.0)), ivec4(1)));\n  vec4 multiplier = sign(a) * isModRound1 + (vec4(1.0) - isModRound1);\n  vec4 result = multiplier * pow(abs(a), b);\n\n  // Ensure that a^0 = 1, including 0^0 = 1 as this correspond to TF and JS\n  bvec4 isExpZero = equal(b, vec4(0.0));\n  result.r = isExpZero.r ? 1.0 : result.r;\n  result.g = isExpZero.g ? 1.0 : result.g;\n  result.b = isExpZero.b ? 1.0 : result.b;\n  result.a = isExpZero.a ? 1.0 : result.a;\n\n  bvec4 isNaN1 = lessThan(a, vec4(0.0));\n  bvec4 isNaN2 = lessThan(floor(b), b);\n  bvec4 isNaN = bvec4(isNaN1.x && isNaN2.x, isNaN1.y && isNaN2.y, isNaN1.z && isNaN2.z, isNaN1.w && isNaN2.w);\n  " +
    CHECK_NAN_SNIPPET_PACKED + "\n  return result;\n";
var pow = binaryKernelFunc({ opSnippet: POW, packedOpSnippet: POW_PACKED });
var powConfig = {
    kernelName: tf.Pow,
    backendName: 'webgl',
    kernelFunc: pow
};

function prod(args) {
    var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
    var x = inputs.x;
    var axis = attrs.axis, keepDims = attrs.keepDims;
    var xRank = x.shape.length;
    var toDispose = [];
    var origAxes = tf.util.parseAxisParam(axis, x.shape);
    var axes = origAxes;
    var permutedAxes = tf.backend_util.getAxesPermutation(axes, xRank);
    var permutedX = x;
    if (permutedAxes != null) {
        permutedX = transpose({ inputs: { x: x }, backend: backend, attrs: { perm: permutedAxes } });
        axes = tf.backend_util.getInnerMostAxes(axes.length, xRank);
        toDispose.push(permutedX);
    }
    tf.backend_util.assertAxesAreInnerMostDims('prod', axes, xRank);
    var res;
    if (backend.shouldExecuteOnCPU([permutedX])) {
        var xVals = backend.texData.get(permutedX.dataId).values;
        var _a = prodImplCPU(permutedX.shape, permutedX.dtype, xVals, axes), outVals = _a.outVals, outShape = _a.outShape, outDtype = _a.outDtype;
        res = backend.makeTensorInfo(outShape, outDtype, outVals);
    }
    else {
        var _b = __read(tf.backend_util.computeOutAndReduceShapes(permutedX.shape, axes), 2), outShape = _b[0], reduceShape = _b[1];
        var inSize = tf.util.sizeFromShape(reduceShape);
        var a2D = reshape({ inputs: { x: permutedX }, backend: backend, attrs: { shape: [-1, inSize] } });
        var outputDType = tf.sumOutType(x.dtype);
        var reduced = reduce(a2D, outputDType, 'prod', backend);
        res = reshape({ inputs: { x: reduced }, backend: backend, attrs: { shape: outShape } });
        toDispose.push(a2D);
        toDispose.push(reduced);
    }
    if (keepDims) {
        toDispose.push(res);
        var newShape = tf.backend_util.expandShapeToKeepDim(res.shape, origAxes);
        res = reshape({ inputs: { x: res }, backend: backend, attrs: { shape: newShape } });
    }
    toDispose.forEach(function (t) { return backend.disposeIntermediateTensorInfo(t); });
    return res;
}
var prodConfig = {
    kernelName: tf.Prod,
    backendName: 'webgl',
    kernelFunc: prod
};

function raggedGather(args) {
    var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
    var paramsNestedSplits = inputs.paramsNestedSplits, paramsDenseValues = inputs.paramsDenseValues, indices = inputs.indices;
    attrs.outputRaggedRank;
    var $paramsNestedSplits = paramsNestedSplits.map(function (t) { return backend.readSync(t.dataId); });
    var $paramsNestedSplitsShapes = paramsNestedSplits.map(function (t) { return t.shape; });
    var $paramsDenseValues = backend.readSync(paramsDenseValues.dataId);
    var $indices = backend.readSync(indices.dataId);
    var _a = __read(raggedGatherImplCPU($paramsNestedSplits, $paramsNestedSplitsShapes, $paramsDenseValues, paramsDenseValues.shape, paramsDenseValues.dtype, $indices, indices.shape), 3), outputNestedSplits = _a[0], outputDenseValues = _a[1], outputDenseValuesShape = _a[2];
    var outputNestedSplitsTensors = outputNestedSplits.map(function (splits) { return backend.makeTensorInfo([splits.length], 'int32', splits); });
    var outputDenseValuesTensor = backend.makeTensorInfo(outputDenseValuesShape, paramsDenseValues.dtype, outputDenseValues);
    return outputNestedSplitsTensors.concat([outputDenseValuesTensor]);
}
var raggedGatherConfig = {
    kernelName: tf.RaggedGather,
    backendName: 'webgl',
    kernelFunc: raggedGather,
};

function raggedRange(args) {
    var inputs = args.inputs, backend = args.backend;
    var starts = inputs.starts, limits = inputs.limits, deltas = inputs.deltas;
    var $starts = backend.readSync(starts.dataId);
    var $limits = backend.readSync(limits.dataId);
    var $deltas = backend.readSync(deltas.dataId);
    var _a = __read(raggedRangeImplCPU($starts, starts.shape, starts.dtype, $limits, limits.shape, $deltas, deltas.shape), 2), rtNestedSplitsData = _a[0], rtDenseValuesData = _a[1];
    var rtNestedSplits = backend.makeTensorInfo([rtNestedSplitsData.length], 'int32', rtNestedSplitsData);
    var rtDenseValues = backend.makeTensorInfo([rtDenseValuesData.length], starts.dtype, rtDenseValuesData);
    return [rtNestedSplits, rtDenseValues];
}
var raggedRangeConfig = {
    kernelName: tf.RaggedRange,
    backendName: 'webgl',
    kernelFunc: raggedRange,
};

function raggedTensorToTensor(args) {
    var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
    var shape = inputs.shape, values = inputs.values, defaultValue = inputs.defaultValue, rowPartitionTensors = inputs.rowPartitionTensors;
    var rowPartitionTypes = attrs.rowPartitionTypes;
    var $shape = backend.readSync(shape.dataId);
    var $values = backend.readSync(values.dataId);
    var $defaultValue = backend.readSync(defaultValue.dataId);
    var $rowPartitionValues = rowPartitionTensors.map(function (t) { return backend.readSync(t.dataId); });
    var rowPartitionValuesShapes = rowPartitionTensors.map(function (t) { return t.shape; });
    var _a = __read(raggedTensorToTensorImplCPU($shape, shape.shape, $values, values.shape, values.dtype, $defaultValue, defaultValue.shape, $rowPartitionValues, rowPartitionValuesShapes, rowPartitionTypes), 2), outputShape = _a[0], output = _a[1];
    return backend.makeTensorInfo(outputShape, values.dtype, output);
}
var raggedTensorToTensorConfig = {
    kernelName: tf.RaggedTensorToTensor,
    backendName: 'webgl',
    kernelFunc: raggedTensorToTensor,
};

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
var range = function (args) {
    var backend = args.backend, attrs = args.attrs;
    var start = attrs.start, stop = attrs.stop, step = attrs.step, dtype = attrs.dtype;
    var values = rangeImplCPU(start, stop, step, dtype);
    return backend.makeTensorInfo([values.length], dtype, values);
};
var rangeConfig = {
    kernelName: tf.Range,
    backendName: 'webgl',
    kernelFunc: range
};

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
var RECIPROCAL = "return 1.0 / x;";
var reciprocal = unaryKernelFunc({ opSnippet: RECIPROCAL });
var reciprocalConfig = {
    kernelName: tf.Reciprocal,
    backendName: 'webgl',
    kernelFunc: reciprocal,
};

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
var RELU = CHECK_NAN_SNIPPET$1 + "\n  return (x < 0.0) ? 0.0 : x;\n";
var RELU_PACKED = "\n  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));\n  bvec4 isNaN = isnan(x);\n\n  result.r = isNaN.r ? x.r : result.r;\n  result.g = isNaN.g ? x.g : result.g;\n  result.b = isNaN.b ? x.b : result.b;\n  result.a = isNaN.a ? x.a : result.a;\n\n  return result;\n";
var relu = unaryKernelFunc({ opSnippet: RELU, packedOpSnippet: RELU_PACKED });
var reluConfig = {
    kernelName: tf.Relu,
    backendName: 'webgl',
    kernelFunc: relu
};

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
var RELU6 = CHECK_NAN_SNIPPET$1 + "\n  return (x < 0.0) ? 0.0 : min(6.0, x);\n";
var RELU6_PACKED = "\n  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));\n  bvec4 isNaN = isnan(x);\n\n  result.r = isNaN.r ? x.r : result.r;\n  result.g = isNaN.g ? x.g : result.g;\n  result.b = isNaN.b ? x.b : result.b;\n  result.a = isNaN.a ? x.a : result.a;\n\n  return result;\n";
var relu6 = unaryKernelFunc({ opSnippet: RELU6, packedOpSnippet: RELU6_PACKED });
var relu6Config = {
    kernelName: tf.Relu6,
    backendName: 'webgl',
    kernelFunc: relu6
};

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
var ResizeBilinearProgram = /** @class */ (function () {
    function ResizeBilinearProgram(inputShape, newHeight, newWidth, alignCorners, halfPixelCenters) {
        this.variableNames = ['A'];
        this.outputShape = [];
        var _a = __read(inputShape, 4), batch = _a[0], oldHeight = _a[1], oldWidth = _a[2], depth = _a[3];
        this.outputShape = [batch, newHeight, newWidth, depth];
        var effectiveInSize = [
            (alignCorners && newHeight > 1) ? oldHeight - 1 : oldHeight,
            (alignCorners && newWidth > 1) ? oldWidth - 1 : oldWidth
        ];
        var effectiveOutSize = [
            (alignCorners && newHeight > 1) ? newHeight - 1 : newHeight,
            (alignCorners && newWidth > 1) ? newWidth - 1 : newWidth
        ];
        var sourceFracIndexRC;
        if (halfPixelCenters) {
            sourceFracIndexRC =
                "(vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC" +
                    " - vec2(0.5)";
        }
        else {
            sourceFracIndexRC = "vec2(yRC) * effectiveInputOverOutputRatioRC";
        }
        this.userCode = "\n      const vec2 effectiveInputOverOutputRatioRC = vec2(\n          ".concat(effectiveInSize[0] / effectiveOutSize[0], ",\n          ").concat(effectiveInSize[1] / effectiveOutSize[1], ");\n      const vec2 inputShapeRC = vec2(").concat(oldHeight, ".0, ").concat(oldWidth, ".0);\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        ivec2 yRC = coords.yz;\n\n        // Fractional source index.\n        vec2 sourceFracIndexRC = ").concat(sourceFracIndexRC, ";\n\n        // Compute the four integer indices.\n        ivec2 sourceFloorRC = ivec2(max(sourceFracIndexRC, vec2(0.0)));\n        ivec2 sourceCeilRC = ivec2(\n          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));\n\n        float topLeft = getA(b, sourceFloorRC.x, sourceFloorRC.y, d);\n        float bottomLeft = getA(b, sourceCeilRC.x, sourceFloorRC.y, d);\n        float topRight = getA(b, sourceFloorRC.x, sourceCeilRC.y, d);\n        float bottomRight = getA(b, sourceCeilRC.x, sourceCeilRC.y, d);\n\n        vec2 fracRC = sourceFracIndexRC - vec2(sourceFloorRC);\n\n        float top = topLeft + (topRight - topLeft) * fracRC.y;\n        float bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;\n        float newValue = top + (bottom - top) * fracRC.x;\n\n        setOutput(newValue);\n      }\n    ");
    }
    return ResizeBilinearProgram;
}());

/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
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
var ResizeBilinearPackedProgram = /** @class */ (function () {
    function ResizeBilinearPackedProgram(inputShape, newHeight, newWidth, alignCorners, halfPixelCenters) {
        this.variableNames = ['A'];
        this.packedInputs = true;
        this.packedOutput = true;
        this.outputShape = [];
        var _a = __read(inputShape, 4), batch = _a[0], oldHeight = _a[1], oldWidth = _a[2], depth = _a[3];
        this.outputShape = [batch, newHeight, newWidth, depth];
        var effectiveInSize = [
            (alignCorners && newHeight > 1) ? oldHeight - 1 : oldHeight,
            (alignCorners && newWidth > 1) ? oldWidth - 1 : oldWidth
        ];
        var effectiveOutSize = [
            (alignCorners && newHeight > 1) ? newHeight - 1 : newHeight,
            (alignCorners && newWidth > 1) ? newWidth - 1 : newWidth
        ];
        var sourceFracIndexRC;
        if (halfPixelCenters) {
            sourceFracIndexRC = "(vec3(yRC) + vec3(0.5)) * " +
                "effectiveInputOverOutputRatioRC - vec3(0.5)";
        }
        else {
            sourceFracIndexRC = "vec3(yRC) * effectiveInputOverOutputRatioRC";
        }
        this.userCode = "\n      const vec3 effectiveInputOverOutputRatioRC = vec3(\n          ".concat(effectiveInSize[0] / effectiveOutSize[0], ",\n          ").concat(effectiveInSize[1] / effectiveOutSize[1], ",\n          ").concat(effectiveInSize[1] / effectiveOutSize[1], ");\n      const vec3 inputShapeRC = vec3(").concat(oldHeight, ".0, ").concat(oldWidth, ".0,\n                                     ").concat(oldWidth, ".0);\n\n      float getAValue(int b, int r, int c, int d) {\n        return getChannel(getA(b, r, c, d), vec2(c, d));\n      }\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        // Calculate values for next column in yRC.z.\n        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);\n\n        // Fractional source index.\n        vec3 sourceFracIndexRC = ").concat(sourceFracIndexRC, ";\n\n        // Compute the four integer indices.\n        ivec3 sourceFloorRC = ivec3(max(sourceFracIndexRC, vec3(0.0)));\n        ivec3 sourceCeilRC = ivec3(\n          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));\n\n        // Should we calculate next column and row elements in 2x2 packed cell.\n        bool hasNextCol = d < ").concat(depth - 1, ";\n        bool hasNextRow = coords.z < ").concat(newWidth - 1, ";\n\n        // In parallel, construct four corners for all four components in\n        // packed 2x2 cell.\n        vec4 topLeft = vec4(\n          getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d),\n          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d + 1)\n                     : 0.0,\n          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d)\n                     : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d + 1) : 0.0);\n\n        vec4 bottomLeft = vec4(\n          getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d),\n          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d + 1)\n                     : 0.0,\n          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d)\n                     : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d + 1) : 0.0);\n\n        vec4 topRight = vec4(\n          getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d),\n          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d + 1)\n                     : 0.0,\n          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d)\n                     : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d + 1) : 0.0);\n\n        vec4 bottomRight = vec4(\n          getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d),\n          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d + 1)\n                     : 0.0,\n          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d)\n                     : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d + 1) : 0.0);\n\n        vec3 fracRC = sourceFracIndexRC - vec3(sourceFloorRC);\n\n        vec4 top = mix(topLeft, topRight, fracRC.yyzz);\n        vec4 bottom = mix(bottomLeft, bottomRight, fracRC.yyzz);\n        vec4 newValue = mix(top, bottom, fracRC.x);\n\n        setOutput(newValue);\n      }\n    ");
    }
    return ResizeBilinearPackedProgram;
}());

function resizeBilinear(args) {
    var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
    var images = inputs.images;
    var alignCorners = attrs.alignCorners, halfPixelCenters = attrs.halfPixelCenters, size = attrs.size;
    var _a = __read(size, 2), newHeight = _a[0], newWidth = _a[1];
    var program = tf.env().getBool('WEBGL_PACK_IMAGE_OPERATIONS') ?
        new ResizeBilinearPackedProgram(images.shape, newHeight, newWidth, alignCorners, halfPixelCenters) :
        new ResizeBilinearProgram(images.shape, newHeight, newWidth, alignCorners, halfPixelCenters);
    return backend.runWebGLProgram(program, [images], 'float32');
}
var resizeBilinearConfig = {
    kernelName: tf.ResizeBilinear,
    backendName: 'webgl',
    kernelFunc: resizeBilinear
};

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
var ResizeBilinearBackpropProgram = /** @class */ (function () {
    function ResizeBilinearBackpropProgram(dyShape, inputShape, alignCorners) {
        this.variableNames = ['dy'];
        this.outputShape = [];
        this.outputShape = inputShape;
        var _a = __read(inputShape, 3), xHeight = _a[1], xWidth = _a[2];
        var _b = __read(dyShape, 3), yHeight = _b[1], yWidth = _b[2];
        // In the backwards pass, we want to find the pixels that were generated for
        // each pixel in the input image the forward pass and add the corresponding
        // coefficient from dy to the gradient (with some interpolation).
        var effectiveXSize = [
            (alignCorners && yHeight > 1) ? xHeight - 1 : xHeight,
            (alignCorners && yWidth > 1) ? xWidth - 1 : xWidth
        ];
        var effectiveYSize = [
            (alignCorners && yHeight > 1) ? yHeight - 1 : yHeight,
            (alignCorners && yWidth > 1) ? yWidth - 1 : yWidth
        ];
        var heightScale = effectiveXSize[0] / effectiveYSize[0];
        var widthScale = effectiveXSize[1] / effectiveYSize[1];
        var invHeightScale = 1 / heightScale;
        var invWidthScale = 1 / widthScale;
        // This defines the size of the window of values around a particular
        // index in dy that we want to search for contributions to dx.
        var winHeight = (Math.ceil(invHeightScale) * 2) + 2;
        var winWidth = (Math.ceil(invWidthScale) * 2) + 2;
        this.userCode = "\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        int r = coords[1];\n        int c = coords[2];\n\n        float accumulator = 0.0;\n\n        const float heightScale = float(".concat(heightScale, ");\n        const float widthScale = float(").concat(widthScale, ");\n\n        const float invHeightScale = float(").concat(invHeightScale, ");\n        const float invWidthScale = float(").concat(invWidthScale, ");\n\n        const int winHeight = int(").concat(winHeight, ");\n        const int winWidth = int(").concat(winWidth, ");\n\n        // Compute bounds for where in dy we will look\n        float startRLerp = floor(float(r) * invHeightScale);\n        int startDyR = int(startRLerp - float(winHeight / 2));\n\n        float startCLerp = floor(float(c) * invWidthScale);\n        int startDyC = int(startCLerp - float(winWidth / 2));\n\n        // Loop over dy\n        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {\n          int dyR = dyROffset + startDyR;\n\n          // Guard against the window exceeding the bounds of dy\n          if (dyR < 0 || dyR >= ").concat(yHeight, ") {\n            continue;\n          }\n\n          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {\n            int dyC = dyCOffset + startDyC;\n\n            // Guard against the window exceeding the bounds of dy\n            if (dyC < 0 || dyC >= ").concat(yWidth, ") {\n              continue;\n            }\n\n            float dxR = float(dyR) * heightScale;\n            int topDxRIndex = int(floor(dxR));\n            int bottomDxRIndex = int(min(ceil(dxR), ").concat(xHeight - 1, ".0));\n            float dxRLerp = dxR - float(topDxRIndex);\n            float inverseDxRLerp = 1.0 - dxRLerp;\n\n            float dxC = float(dyC) * widthScale;\n            int leftDxCIndex = int(floor(dxC));\n            int rightDxCIndex = int(min(ceil(dxC), ").concat(xWidth - 1, ".0));\n            float dxCLerp = dxC - float(leftDxCIndex);\n            float inverseDxCLerp = 1.0 - dxCLerp;\n\n            if (r == topDxRIndex && c == leftDxCIndex) {\n              // topLeft\n              accumulator +=\n                getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;\n            }\n\n            if (r == topDxRIndex && c == rightDxCIndex) {\n              // topRight\n              accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;\n            }\n\n            if (r == bottomDxRIndex && c == leftDxCIndex) {\n              // bottomLeft\n              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;\n            }\n\n            if (r == bottomDxRIndex && c == rightDxCIndex) {\n              // bottomRight\n              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;\n            }\n          }\n        }\n        // End loop over dy\n\n        setOutput(accumulator);\n      }\n    ");
    }
    return ResizeBilinearBackpropProgram;
}());

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
function resizeBilinearGrad(args) {
    var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
    var images = inputs.images, dy = inputs.dy;
    var alignCorners = attrs.alignCorners;
    var program = new ResizeBilinearBackpropProgram(dy.shape, images.shape, alignCorners);
    return backend.runWebGLProgram(program, [dy], dy.dtype);
}
var resizeBilinearGradConfig = {
    kernelName: tf.ResizeBilinearGrad,
    backendName: 'webgl',
    kernelFunc: resizeBilinearGrad
};

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
var ResizeNearestNeighborProgram = /** @class */ (function () {
    function ResizeNearestNeighborProgram(inputShape, newHeight, newWidth, alignCorners, halfPixelCenters) {
        this.variableNames = ['A'];
        this.outputShape = [];
        var _a = __read(inputShape, 4), batch = _a[0], oldHeight = _a[1], oldWidth = _a[2], depth = _a[3];
        this.outputShape = [batch, newHeight, newWidth, depth];
        var effectiveInSize = [
            (alignCorners && newHeight > 1) ? oldHeight - 1 : oldHeight,
            (alignCorners && newWidth > 1) ? oldWidth - 1 : oldWidth
        ];
        var effectiveOutSize = [
            (alignCorners && newHeight > 1) ? newHeight - 1 : newHeight,
            (alignCorners && newWidth > 1) ? newWidth - 1 : newWidth
        ];
        // When align corners is false, we rounds the value with floor.
        var roundBase = alignCorners ? '0.5' : '0.0';
        var sourceFracIndexRC;
        if (halfPixelCenters) {
            sourceFracIndexRC =
                "max((vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC" +
                    ", vec2(0.0))";
        }
        else {
            sourceFracIndexRC = "vec2(yRC) * effectiveInputOverOutputRatioRC";
        }
        this.userCode = "\n      const vec2 effectiveInputOverOutputRatioRC = vec2(\n          ".concat(effectiveInSize[0] / effectiveOutSize[0], ",\n          ").concat(effectiveInSize[1] / effectiveOutSize[1], ");\n      const vec2 inputShapeRC = vec2(").concat(oldHeight, ".0, ").concat(oldWidth, ".0);\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        ivec2 yRC = coords.yz;\n\n        // Fractional source index.\n        vec2 sourceFracIndexRC = ").concat(sourceFracIndexRC, ";\n\n        // Compute the coordinators of nearest neighbor point.\n        ivec2 sourceNearestRC = ivec2(\n          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + ").concat(roundBase, ")));\n        float newValue = getA(b, sourceNearestRC.x, sourceNearestRC.y, d);\n\n        setOutput(newValue);\n      }\n    ");
    }
    return ResizeNearestNeighborProgram;
}());

/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
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
var ResizeNearestNeighborPackedProgram = /** @class */ (function () {
    function ResizeNearestNeighborPackedProgram(inputShape, newHeight, newWidth, alignCorners, halfPixelCenters) {
        this.variableNames = ['A'];
        this.packedInputs = true;
        this.packedOutput = true;
        this.outputShape = [];
        var _a = __read(inputShape, 4), batch = _a[0], oldHeight = _a[1], oldWidth = _a[2], depth = _a[3];
        this.outputShape = [batch, newHeight, newWidth, depth];
        var effectiveInSize = [
            (alignCorners && newHeight > 1) ? oldHeight - 1 : oldHeight,
            (alignCorners && newWidth > 1) ? oldWidth - 1 : oldWidth
        ];
        var effectiveOutSize = [
            (alignCorners && newHeight > 1) ? newHeight - 1 : newHeight,
            (alignCorners && newWidth > 1) ? newWidth - 1 : newWidth
        ];
        // When align corners is false, we rounds the value with floor.
        var roundBase = alignCorners ? '0.5' : '0.0';
        var sourceFracIndexRC;
        if (halfPixelCenters) {
            sourceFracIndexRC = "max((vec3(yRC) + vec3(0.5)) * " +
                "effectiveInputOverOutputRatioRC, vec3(0.0))";
        }
        else {
            sourceFracIndexRC = "vec3(yRC) * effectiveInputOverOutputRatioRC";
        }
        this.userCode = "\n      const vec3 effectiveInputOverOutputRatioRC = vec3(\n          ".concat(effectiveInSize[0] / effectiveOutSize[0], ",\n          ").concat(effectiveInSize[1] / effectiveOutSize[1], ",\n          ").concat(effectiveInSize[1] / effectiveOutSize[1], ");\n      const vec3 inputShapeRC = vec3(").concat(oldHeight, ".0, ").concat(oldWidth, ".0,\n                                     ").concat(oldWidth, ".0);\n\n      float getAValue(int b, int r, int c, int d) {\n        return getChannel(getA(b, r, c, d), vec2(c, d));\n      }\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        // Calculate values for next column in yRC.z.\n        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);\n\n        // Fractional source index.\n        vec3 sourceFracIndexRC = ").concat(sourceFracIndexRC, ";\n\n        // Compute the coordinators of nearest neighbor point.\n        ivec3 sourceNearestRC = ivec3(\n          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + ").concat(roundBase, ")));\n\n        // Should we calculate next column and row elements in 2x2 packed cell.\n        bool hasNextCol = d < ").concat(depth - 1, ";\n        bool hasNextRow = coords.z < ").concat(newWidth - 1, ";\n\n        vec4 newValue = vec4(\n          getAValue(b, sourceNearestRC.x, sourceNearestRC.y, d),\n          hasNextCol ? getAValue(b, sourceNearestRC.x, sourceNearestRC.y, d + 1)\n                     : 0.0,\n          hasNextRow ? getAValue(b, sourceNearestRC.x, sourceNearestRC.z, d)\n                     : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getAValue(b, sourceNearestRC.x, sourceNearestRC.z, d + 1) : 0.0);\n\n        setOutput(newValue);\n      }\n    ");
    }
    return ResizeNearestNeighborPackedProgram;
}());

function resizeNearestNeighbor(args) {
    var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
    var images = inputs.images;
    var alignCorners = attrs.alignCorners, halfPixelCenters = attrs.halfPixelCenters, size = attrs.size;
    var _a = __read(size, 2), newHeight = _a[0], newWidth = _a[1];
    var program = tf.env().getBool('WEBGL_PACK_IMAGE_OPERATIONS') ?
        new ResizeNearestNeighborPackedProgram(images.shape, newHeight, newWidth, alignCorners, halfPixelCenters) :
        new ResizeNearestNeighborProgram(images.shape, newHeight, newWidth, alignCorners, halfPixelCenters);
    return backend.runWebGLProgram(program, [images], images.dtype);
}
var resizeNearestNeighborConfig = {
    kernelName: tf.ResizeNearestNeighbor,
    backendName: 'webgl',
    kernelFunc: resizeNearestNeighbor
};

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
var ResizeNearestNeigborBackpropProgram = /** @class */ (function () {
    function ResizeNearestNeigborBackpropProgram(dyShape, inputShape, alignCorners) {
        this.variableNames = ['dy'];
        this.outputShape = [];
        this.outputShape = inputShape;
        var _a = __read(inputShape, 3), xHeight = _a[1], xWidth = _a[2];
        var _b = __read(dyShape, 3), yHeight = _b[1], yWidth = _b[2];
        // In the backwards pass, we want to find the pixels that were generated for
        // each pixel in the input image the forward pass and add the corresponding
        // coefficient from dy to the gradient (with some interpolation).
        var effectiveXSize = [
            (alignCorners && yHeight > 1) ? xHeight - 1 : xHeight,
            (alignCorners && yWidth > 1) ? xWidth - 1 : xWidth
        ];
        var effectiveYSize = [
            (alignCorners && yHeight > 1) ? yHeight - 1 : yHeight,
            (alignCorners && yWidth > 1) ? yWidth - 1 : yWidth
        ];
        var heightScale = effectiveXSize[0] / effectiveYSize[0];
        var widthScale = effectiveXSize[1] / effectiveYSize[1];
        var invHeightScale = 1 / heightScale;
        var invWidthScale = 1 / widthScale;
        // This defines the size of the window of values around a particular
        // index in dy that we want to search for contributions to dx.
        var winHeight = (Math.ceil(invHeightScale) * 2) + 2;
        var winWidth = (Math.ceil(invWidthScale) * 2) + 2;
        this.userCode = "\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        int r = coords[1];\n        int c = coords[2];\n\n        float accumulator = 0.0;\n\n        const float heightScale = float(".concat(heightScale, ");\n        const float widthScale = float(").concat(widthScale, ");\n\n        const float invHeightScale = float(").concat(invHeightScale, ");\n        const float invWidthScale = float(").concat(invWidthScale, ");\n\n        const int winHeight = int(").concat(winHeight, ");\n        const int winWidth = int(").concat(winWidth, ");\n\n        // Compute bounds for where in dy we will look\n        float startRLerp = floor(float(r) * invHeightScale);\n        int startDyR = int(floor(startRLerp - float(winHeight / 2)));\n\n        float startCLerp = floor(float(c) * invWidthScale);\n        int startDyC = int(floor(startCLerp - float(winWidth / 2)));\n\n        // Loop over dy\n        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {\n          int dyR = dyROffset + startDyR;\n\n          // Guard against the window exceeding the bounds of dy\n          if (dyR < 0 || dyR >= ").concat(yHeight, ") {\n            continue;\n          }\n\n          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {\n            int dyC = dyCOffset + startDyC;\n\n            // Guard against the window exceeding the bounds of dy\n            if (dyC < 0 || dyC >= ").concat(yWidth, ") {\n              continue;\n            }\n\n            float sourceFracRow =\n              float(").concat(effectiveXSize[0], ") *\n                (float(dyR) / float(").concat(effectiveYSize[0], "));\n\n            float sourceFracCol =\n                float(").concat(effectiveXSize[1], ") *\n                  (float(dyC) / float(").concat(effectiveYSize[1], "));\n\n            int sourceNearestRow = int(min(\n                float(int(").concat(xHeight, ") - 1),\n                ").concat(alignCorners, " ? float(round(sourceFracRow)) :\n                                  float(floor(sourceFracRow))));\n\n            int sourceNearestCol = int(min(\n                float(int(").concat(xWidth, ") - 1),\n                ").concat(alignCorners, " ? float(round(sourceFracCol)) :\n                                  float(floor(sourceFracCol))));\n\n            if (r == sourceNearestRow && c == sourceNearestCol) {\n              accumulator += getDy(b, dyR, dyC, d);\n            }\n          }\n        }\n        // End loop over dy\n\n        setOutput(accumulator);\n      }\n    ");
    }
    return ResizeNearestNeigborBackpropProgram;
}());

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
function resizeNearestNeighborGrad(args) {
    var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
    var images = inputs.images, dy = inputs.dy;
    var alignCorners = attrs.alignCorners;
    var program = new ResizeNearestNeigborBackpropProgram(dy.shape, images.shape, alignCorners);
    return backend.runWebGLProgram(program, [dy], dy.dtype);
}
var resizeNearestNeighborGradConfig = {
    kernelName: tf.ResizeNearestNeighborGrad,
    backendName: 'webgl',
    kernelFunc: resizeNearestNeighborGrad
};

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
var ReverseProgram = /** @class */ (function () {
    function ReverseProgram(xShape, axis) {
        this.variableNames = ['x'];
        var rank = xShape.length;
        if (rank > 4) {
            throw new Error("WebGL backend: Reverse of rank-".concat(rank, " tensor is not yet supported"));
        }
        this.outputShape = xShape;
        if (rank === 1) {
            this.userCode = "\n        void main() {\n          int coord = getOutputCoords();\n          setOutput(getX(".concat(xShape[0], " - coord - 1));\n        }\n      ");
            return;
        }
        var getInCoord = function (i) {
            if (axis.indexOf(i) !== -1 && xShape[i] !== 1) {
                return "".concat(xShape[i], " - coords[").concat(i, "] - 1");
            }
            return "coords[".concat(i, "]");
        };
        var inCoords = xShape.map(function (_, i) { return getInCoord(i); }).join(',');
        var type = getCoordsDataType(rank);
        this.userCode = "\n      void main() {\n        ".concat(type, " coords = getOutputCoords();\n        setOutput(getX(").concat(inCoords, "));\n      }\n    ");
    }
    return ReverseProgram;
}());

/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
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
var ReversePackedProgram = /** @class */ (function () {
    function ReversePackedProgram(xShape, axis) {
        this.variableNames = ['x'];
        this.packedInputs = true;
        this.packedOutput = true;
        var rank = xShape.length;
        if (rank > 4) {
            throw new Error("WebGL backend: Reverse of rank-".concat(rank, " tensor is not yet supported"));
        }
        this.outputShape = xShape;
        var channels = getChannels('rc', rank);
        var nextColumn = "".concat(channels[rank - 1], " + 1 < ").concat(this.outputShape[rank - 1]);
        var nextRow = "".concat(channels[rank - 2], " + 1 < ").concat(this.outputShape[rank - 2]);
        var type = getCoordsDataType(rank);
        if (rank === 1) {
            this.userCode = "\n        void main(){\n          int rc = getOutputCoords();\n          vec4 result = vec4(0.);\n          result.r = getChannel(getX(".concat(xShape[0], " - rc - 1),\n            ").concat(xShape[0], " - rc - 1);\n          if(").concat(nextColumn, "){\n              result.g = getChannel(getX(").concat(xShape[0], " - (rc  + 1) - 1),\n                ").concat(xShape[0], " - (rc  + 1) - 1);\n          }\n          setOutput(result);\n        }\n      ");
        }
        else {
            this.userCode = "\n        void main() {\n          ".concat(type, " rc = getOutputCoords();\n          vec4 result = vec4(0.);\n          result.r = ").concat(getR(channels.slice()), ";\n          if(").concat(nextColumn, "){\n            result.g = ").concat(getG(channels.slice()), ";\n          }\n          if(").concat(nextRow, ") {\n            result.b = ").concat(getB(channels.slice()), ";\n            if(").concat(nextColumn, ") {\n              result.a = ").concat(getA(channels.slice()), ";\n            }\n          }\n          setOutput(result);\n        }\n    ");
        }
        function getR(channels) {
            return getChannel(channels);
        }
        function getG(channels) {
            channels[rank - 1] = '(' + channels[rank - 1] + " + 1)";
            return getChannel(channels);
        }
        function getB(channels) {
            channels[rank - 2] = '(' + channels[rank - 2] + " + 1)";
            return getChannel(channels);
        }
        function getA(channels) {
            channels[rank - 1] = '(' + channels[rank - 1] + " + 1)";
            channels[rank - 2] = '(' + channels[rank - 2] + " + 1)";
            return getChannel(channels);
        }
        function getChannel(channels) {
            var inCoordsArray = xShape.map(function (_, i) { return getInCoord(i, channels); });
            var inCoords = inCoordsArray.join(',');
            var innerDims = inCoordsArray.slice(-2).join(',');
            return "getChannel(getX(".concat(inCoords, "), vec2(").concat(innerDims, "))");
        }
        function getInCoord(i, channels1) {
            if (axis.indexOf(i) !== -1 && xShape[i] !== 1) {
                return "".concat(xShape[i], " - ").concat(channels1[i], " - 1");
            }
            else {
                return "".concat(channels1[i]);
            }
        }
    }
    return ReversePackedProgram;
}());

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
function reverse(args) {
    var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
    var x = inputs.x;
    var dims = attrs.dims;
    var xRank = x.shape.length;
    var $dims = tf.util.parseAxisParam(dims, x.shape);
    if (xRank === 0) {
        return identity({ inputs: { x: x }, backend: backend });
    }
    var program = tf.env().getBool('WEBGL_PACK_ARRAY_OPERATIONS') ?
        new ReversePackedProgram(x.shape, $dims) :
        new ReverseProgram(x.shape, $dims);
    return backend.runWebGLProgram(program, [x], x.dtype);
}
var reverseConfig = {
    kernelName: tf.Reverse,
    backendName: 'webgl',
    kernelFunc: reverse
};

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
var RotateProgram = /** @class */ (function () {
    function RotateProgram(imageShape, fillValue) {
        this.variableNames = ['Image'];
        this.outputShape = [];
        this.customUniforms = [{ name: 'params', type: 'vec4' }];
        var imageHeight = imageShape[1];
        var imageWidth = imageShape[2];
        this.outputShape = imageShape;
        var fillSnippet = '';
        if (typeof fillValue === 'number') {
            fillSnippet = "float outputValue = ".concat(fillValue.toFixed(2), ";");
        }
        else {
            fillSnippet = "\n        vec3 fill = vec3(".concat(fillValue.join(','), ");\n        float outputValue = fill[coords[3]];");
        }
        this.userCode = "\n        void main() {\n          ivec4 coords = getOutputCoords();\n          int x = coords[2];\n          int y = coords[1];\n          float coordXFloat = (float(x) - params[0]) * params[3] -\n            (float(y) - params[1]) * params[2];\n          float coordYFloat = (float(x) - params[0]) * params[2] +\n            (float(y) - params[1]) * params[3];\n          int coordX = int(round(coordXFloat + params[0]));\n          int coordY = int(round(coordYFloat + params[1]));\n          ".concat(fillSnippet, "\n          if(coordX >= 0 && coordX < ").concat(imageWidth, " && coordY >= 0 && coordY < ").concat(imageHeight, ") {\n            outputValue = getImage(coords[0], coordY, coordX, coords[3]);\n          }\n          setOutput(outputValue);\n        }\n    ");
    }
    return RotateProgram;
}());

var rotateWithOffsetConfig = {
    kernelName: tf.RotateWithOffset,
    backendName: 'webgl',
    kernelFunc: function (_a) {
        var inputs = _a.inputs, attrs = _a.attrs, backend = _a.backend;
        var image = inputs.image;
        var radians = attrs.radians, fillValue = attrs.fillValue, center = attrs.center;
        var webglBackend = backend;
        var program = new RotateProgram(image.shape, fillValue);
        var _b = __read(tf.backend_util.getImageCenter(center, image.shape[1], image.shape[2]), 2), centerX = _b[0], centerY = _b[1];
        var customValues = [[centerX, centerY, Math.sin(radians), Math.cos(radians)]];
        var output = webglBackend.runWebGLProgram(program, [image], image.dtype, customValues);
        return output;
    }
};

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
var ROUND = "\n  // OpenGL ES does not support round function.\n  // The algorithm is based on banker's rounding.\n  float base = floor(x);\n  if ((x - base) < 0.5) {\n    return floor(x);\n  } else if ((x - base) > 0.5) {\n    return ceil(x);\n  } else {\n    if (mod(base, 2.0) == 0.0) {\n      return base;\n    } else {\n      return base + 1.0;\n    }\n  }\n";
var round = unaryKernelFunc({ opSnippet: ROUND });
var roundConfig = {
    kernelName: tf.Round,
    backendName: 'webgl',
    kernelFunc: round,
};

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
var RSQRT = "return inversesqrt(x);";
var rsqrt = unaryKernelFunc({ opSnippet: RSQRT, cpuKernelImpl: rsqrtImplCPU });
var rsqrtConfig = {
    kernelName: tf.Rsqrt,
    backendName: 'webgl',
    kernelFunc: rsqrt
};

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
var ScatterProgram = /** @class */ (function () {
    function ScatterProgram(updateSize, sliceDim, indicesRank, updatesRank, strides, shape, summingDupeIndex, defaultIsTensor) {
        if (defaultIsTensor === void 0) { defaultIsTensor = false; }
        this.variableNames = ['updates', 'indices', 'defaultValue'];
        this.outputShape = shape;
        var stridesType = getCoordsDataType(strides.length);
        var dtype = getCoordsDataType(shape.length);
        var indicesString = '';
        if (indicesRank === 1) {
            indicesString = 'i';
        }
        else if (indicesRank === 2) {
            indicesString = 'i, j';
        }
        var indicesSnippet = "getIndices(".concat(indicesString, ")");
        var updatesString = '';
        if (updatesRank === 1) {
            updatesString = 'i';
        }
        else if (updatesRank === 2) {
            updatesString = 'i, coords[1]';
        }
        var updatesSnippet = "getUpdates(".concat(updatesString, ")");
        var defaultValuesString = '';
        if (defaultIsTensor) {
            defaultValuesString = 'coords[0], coords[1]';
        }
        var defaultValueSnippet = "getDefaultValue(".concat(defaultValuesString, ")");
        var strideString = sliceDim > 1 ? 'strides[j]' : 'strides';
        this.userCode = "\n        ".concat(stridesType, " strides = ").concat(stridesType, "(").concat(strides, ");\n\n        void main() {\n          ").concat(dtype, " coords = getOutputCoords();\n          float sum = 0.0;\n          bool found = false;\n          for (int i = 0; i < ").concat(updateSize, "; i++) {\n            int flattenedIndex = 0;\n            for (int j = 0; j < ").concat(sliceDim, "; j++) {\n              int index = round(").concat(indicesSnippet, ");\n              flattenedIndex += index * ").concat(strideString, ";\n            }\n            if (flattenedIndex == coords[0]) {\n              sum += ").concat(updatesSnippet, ";\n              found = true;\n            }\n          }\n          setOutput(mix(").concat(defaultValueSnippet, ", sum, float(found)));\n        }\n      ");
    }
    return ScatterProgram;
}());

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
var ScatterPackedProgram = /** @class */ (function () {
    function ScatterPackedProgram(updateSize, sliceDim, indicesRank, updatesRank, strides, shape, summingDupeIndex, defaultIsTensor) {
        if (defaultIsTensor === void 0) { defaultIsTensor = false; }
        this.variableNames = ['updates', 'indices', 'defaultValue'];
        this.packedInputs = true;
        this.packedOutput = true;
        this.outputShape = shape;
        var stridesType = getCoordsDataType(strides.length);
        var dtype = getCoordsDataType(shape.length);
        var indicesString = '';
        if (indicesRank === 1) {
            indicesString = 'i';
        }
        else if (indicesRank === 2) {
            indicesString = 'i, j';
        }
        var indicesSnippet = "getIndices(".concat(indicesString, ")");
        var updatesString = '';
        if (updatesRank === 1) {
            updatesString = 'i';
        }
        else if (updatesRank === 2) {
            updatesString = 'i, coords[1]';
        }
        var updatesSnippet = "getUpdates(".concat(updatesString, ")");
        var defaultValuesString = '';
        if (defaultIsTensor) {
            defaultValuesString = 'coords[0], coords[1]';
        }
        var defaultValueSnippet = "getDefaultValue(".concat(defaultValuesString, ")");
        var strideString = sliceDim > 1 ? 'strides[j]' : 'strides';
        var strideString2 = sliceDim > 1 ? 'strides[j + 1]' : 'strides';
        this.userCode = "\n        ".concat(stridesType, " strides = ").concat(stridesType, "(").concat(strides, ");\n\n        void main() {\n          ").concat(dtype, " coords = getOutputCoords();\n          vec4 sum = vec4(0.);\n          vec4 found = vec4(0.);\n          for (int i = 0; i < ").concat(updateSize, "; i+=2) {\n            ivec2 flattenedIndex = ivec2(0);\n            for (int j = 0; j < ").concat(sliceDim, "; j+=2) {\n              ivec4 index = round(").concat(indicesSnippet, ");\n              flattenedIndex += index.xz * ").concat(strideString, ";\n              if (j + 1 < ").concat(sliceDim, ") {\n                flattenedIndex += index.yw * ").concat(strideString2, ";\n              }\n            }\n            if (flattenedIndex[0] == coords[0] || flattenedIndex[1] == coords[0] ||\n                flattenedIndex[0] == coords[0] + 1 || flattenedIndex[1] == coords[0] + 1) {\n              vec4 updVals = ").concat(updatesSnippet, ";\n              if (flattenedIndex[0] == coords[0]) {\n                sum.xy += updVals.xy;\n                found.xy = vec2(1.);\n              } else if (flattenedIndex[0] == coords[0] + 1) {\n                sum.zw += updVals.xy;\n                found.zw = vec2(1.);\n              }\n              if (flattenedIndex[1] == coords[0]) {\n                sum.xy += updVals.zw;\n                found.xy = vec2(1.);\n              } else if (flattenedIndex[1] == coords[0] + 1) {\n                sum.zw += updVals.zw;\n                found.zw = vec2(1.);\n              }\n            }\n          }\n          setOutput(mix(").concat(defaultValueSnippet, ", sum, found));\n        }\n      ");
    }
    return ScatterPackedProgram;
}());

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
function scatterNd(args) {
    var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
    var indices = inputs.indices, updates = inputs.updates;
    var shape = attrs.shape;
    var _a = tf.backend_util.calculateShapes(updates, indices, shape), sliceRank = _a.sliceRank, numUpdates = _a.numUpdates, sliceSize = _a.sliceSize, strides = _a.strides, outputSize = _a.outputSize;
    var flattenShape = [outputSize / sliceSize, sliceSize];
    if (outputSize === 0) {
        return backend.makeTensorInfo(shape, indices.dtype);
    }
    var flattenIndices = reshape({ inputs: { x: indices }, backend: backend, attrs: { shape: [numUpdates, sliceRank] } });
    var flattenX = reshape({ inputs: { x: updates }, backend: backend, attrs: { shape: [numUpdates, sliceSize] } });
    var defaultValue = backend.makeTensorInfo([], 'float32', new Float32Array([0])); // scalar(0)
    var program;
    if (tf.env().getBool('WEBGL_PACK')) {
        program = new ScatterPackedProgram(numUpdates, sliceRank, flattenIndices.shape.length, flattenX.shape.length, strides, flattenShape);
    }
    else {
        program = new ScatterProgram(numUpdates, sliceRank, flattenIndices.shape.length, flattenX.shape.length, strides, flattenShape);
    }
    var res = backend.runWebGLProgram(program, [flattenX, flattenIndices, defaultValue], flattenX.dtype);
    var reshaped = reshape({ inputs: { x: res }, backend: backend, attrs: { shape: shape } });
    backend.disposeIntermediateTensorInfo(flattenIndices);
    backend.disposeIntermediateTensorInfo(flattenX);
    backend.disposeIntermediateTensorInfo(res);
    backend.disposeIntermediateTensorInfo(defaultValue);
    return reshaped;
}
var scatterNdConfig = {
    kernelName: tf.ScatterNd,
    backendName: 'webgl',
    kernelFunc: scatterNd
};

/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
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
var SearchSortedProgram = /** @class */ (function () {
    function SearchSortedProgram(batchSize, numInputs, numValues, side) {
        this.variableNames = ['sortedSequence', 'values'];
        this.customUniforms = [{ name: 'numInputs', type: 'int' }];
        this.outputShape = [batchSize, numValues];
        var webGL2LoopHead = 'while (left < right) {';
        // WebGL1 doesn't accept non constant loop conditions, so upper bound loop
        // iterations.
        var webGL1LoopHead = "for (int i = 0; i < ".concat(Math.ceil(Math.log2(numInputs + 1)), "; ++i) { if (left >= right) break;");
        var loopHead = tf.env().getNumber('WEBGL_VERSION') === 2 ? webGL2LoopHead :
            webGL1LoopHead;
        // left corresponds to lower bound and right to upper bound.
        var boundComparator = side === 'left' ? '<' : '<=';
        this.userCode = "\n       int findBound(int batch, float value) {\n         int left = 0;\n         int right = numInputs;\n         int mid;\n         ".concat(loopHead, "\n           mid = (left + right) / 2;\n           if (getSortedSequence(batch, mid) ").concat(boundComparator, " value) {\n             left = mid + 1;\n           } else {\n             right = mid;\n           }\n         }\n         return right;\n       }\n\n       void main() {\n         ivec2 coords = getOutputCoords();\n         int batch = coords[0];\n         int valueIndex = coords[1];\n\n         float value = getValues(batch, valueIndex);\n\n         setOutput(float(findBound(batch, value)));\n       }\n     ");
    }
    return SearchSortedProgram;
}());

/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
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
function searchSorted(args) {
    var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
    var sortedSequence = inputs.sortedSequence, values = inputs.values;
    var side = attrs.side;
    var program = new SearchSortedProgram(sortedSequence.shape[0], sortedSequence.shape[1], values.shape[1], side);
    var customValues = [[sortedSequence.shape[1]]];
    return backend.runWebGLProgram(program, [sortedSequence, values], 'int32', customValues);
}
var searchSortedConfig = {
    kernelName: tf.SearchSorted,
    backendName: 'webgl',
    kernelFunc: searchSorted,
};

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
var SelectProgram = /** @class */ (function () {
    function SelectProgram(cRank, shape, rank) {
        this.variableNames = ['c', 'a', 'b'];
        this.outputShape = shape;
        var cCoords;
        var abCoords;
        if (rank > 4) {
            throw Error("Where for rank ".concat(rank, " is not yet supported"));
        }
        if (rank === 1) {
            abCoords = "resRC";
            cCoords = "resRC";
        }
        else {
            var currentCoords = ['resRC.x', 'resRC.y', 'resRC.z', 'resRC.w'];
            var cCoordVars = [];
            var abCoordVars = [];
            for (var i = 0; i < shape.length; i++) {
                abCoordVars.push("".concat(currentCoords[i]));
                if (i < cRank) {
                    cCoordVars.push("".concat(currentCoords[i]));
                }
            }
            cCoords = cCoordVars.join();
            abCoords = abCoordVars.join();
        }
        var dtype = getCoordsDataType(rank);
        this.userCode = "\n      void main() {\n        ".concat(dtype, " resRC = getOutputCoords();\n        float cVal = getC(").concat(cCoords, ");\n        if (cVal >= 1.0) {\n          setOutput(getA(").concat(abCoords, "));\n        } else {\n          setOutput(getB(").concat(abCoords, "));\n        }\n      }\n    ");
    }
    return SelectProgram;
}());

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
function select(args) {
    var inputs = args.inputs, backend = args.backend;
    var condition = inputs.condition, t = inputs.t, e = inputs.e;
    var program = new SelectProgram(condition.shape.length, t.shape, t.shape.length);
    return backend.runWebGLProgram(program, [condition, t, e], tf.upcastType(t.dtype, e.dtype));
}
var selectConfig = {
    kernelName: tf.Select,
    backendName: 'webgl',
    kernelFunc: select
};

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
var SELU = "\n  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.\n  // see: https://arxiv.org/abs/1706.02515\n  float scaleAlpha = ".concat(tf.backend_util.SELU_SCALEALPHA, ";\n  float scale = ").concat(tf.backend_util.SELU_SCALE, ";\n  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);\n");
var selu = unaryKernelFunc({ opSnippet: SELU });
var seluConfig = {
    kernelName: tf.Selu,
    backendName: 'webgl',
    kernelFunc: selu,
};

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
var SIGMOID = CHECK_NAN_SNIPPET_UNARY + "\n  return 1.0 / (1.0 + exp(-1.0 * x));\n";
var SIGMOID_PACKED = "\n  vec4 result = 1.0 / (1.0 + exp(-1.0 * x));\n  bvec4 isNaN = isnan(x);\n\n  result.r = isNaN.r ? x.r : result.r;\n  result.g = isNaN.g ? x.g : result.g;\n  result.b = isNaN.b ? x.b : result.b;\n  result.a = isNaN.a ? x.a : result.a;\n\n  return result;\n";
var sigmoid = unaryKernelFunc({
    opSnippet: SIGMOID,
    packedOpSnippet: SIGMOID_PACKED,
    cpuKernelImpl: sigmoidImplCPU
});
var sigmoidConfig = {
    kernelName: tf.Sigmoid,
    backendName: 'webgl',
    kernelFunc: sigmoid,
};

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
// Sign does not propagate NANs.
var SIGN = "\n  if (isnan(x)) { return 0.0; }\n  return sign(x);\n";
var sign = unaryKernelFunc({ opSnippet: SIGN });
var signConfig = {
    kernelName: tf.Sign,
    backendName: 'webgl',
    kernelFunc: sign,
};

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
var SIN = CHECK_NAN_SNIPPET_UNARY + "\n  return sin(x);\n";
var SIN_PACKED = "\n  vec4 result = sin(x);\n  bvec4 isNaN = isnan(x);\n  ".concat(CHECK_NAN_SNIPPET_PACKED, "\n  return result;\n");
var sin = unaryKernelFunc({ opSnippet: SIN, packedOpSnippet: SIN_PACKED });
var sinConfig = {
    kernelName: tf.Sin,
    backendName: 'webgl',
    kernelFunc: sin,
};

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
var SINH = "\n  float e2x = exp(x);\n  return (e2x - 1.0 / e2x) / 2.0;\n";
var sinh = unaryKernelFunc({ opSnippet: SINH });
var sinhConfig = {
    kernelName: tf.Sinh,
    backendName: 'webgl',
    kernelFunc: sinh,
};

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
var SOFTPLUS = "\n  float epsilon = 1.1920928955078125e-7;\n  float threshold = log(epsilon) + 2.0;\n\n  bool too_large = x > -threshold;\n  bool too_small = x < threshold;\n\n  float result;\n  float exp_x = exp(x);\n\n  if (too_large){\n    result = x;\n  }\n  else if (too_small){\n    result = exp_x;\n  }\n  else{\n    result = log(exp_x + 1.0);\n  }\n  return result;\n";
var softplus = unaryKernelFunc({ opSnippet: SOFTPLUS });
var softplusConfig = {
    kernelName: tf.Softplus,
    backendName: 'webgl',
    kernelFunc: softplus,
};

var spaceToBatchND = function (args) {
    var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
    var x = inputs.x;
    var blockShape = attrs.blockShape, paddings = attrs.paddings;
    tf.util.assert(x.shape.length <= 4, function () { return 'spaceToBatchND for rank > 4 with a WebGL backend not ' +
        'implemented yet'; });
    var prod = blockShape.reduce(function (a, b) { return a * b; });
    var completePaddings = [[0, 0]];
    completePaddings.push.apply(completePaddings, __spreadArray([], __read(paddings), false));
    for (var i = 1 + blockShape.length; i < x.shape.length; ++i) {
        completePaddings.push([0, 0]);
    }
    var toDispose = [];
    var paddedX = padV2({
        inputs: { x: x },
        backend: backend,
        attrs: { paddings: completePaddings, constantValue: 0 }
    });
    var reshapedPaddedShape = tf.backend_util.getReshaped(paddedX.shape, blockShape, prod, false);
    var permutedReshapedPaddedPermutation = tf.backend_util.getPermuted(reshapedPaddedShape.length, blockShape.length, false);
    var flattenShape = tf.backend_util.getReshapedPermuted(paddedX.shape, blockShape, prod, false);
    var reshapedPaddedX = reshape({ inputs: { x: paddedX }, backend: backend, attrs: { shape: reshapedPaddedShape } });
    var paddedXT = transpose({
        inputs: { x: reshapedPaddedX },
        backend: backend,
        attrs: { perm: permutedReshapedPaddedPermutation }
    });
    var result = reshape({ inputs: { x: paddedXT }, backend: backend, attrs: { shape: flattenShape } });
    toDispose.push(paddedX);
    toDispose.push(reshapedPaddedX);
    toDispose.push(paddedXT);
    toDispose.forEach(function (t) { return backend.disposeIntermediateTensorInfo(t); });
    return result;
};
var spaceToBatchNDConfig = {
    kernelName: tf.SpaceToBatchND,
    backendName: 'webgl',
    kernelFunc: spaceToBatchND
};

function sparseFillEmptyRows(args) {
    var inputs = args.inputs, backend = args.backend;
    var indices = inputs.indices, values = inputs.values, denseShape = inputs.denseShape, defaultValue = inputs.defaultValue;
    if (denseShape.shape.length !== 1) {
        throw new Error("Dense shape must be a vector, saw:\n         ".concat(denseShape.shape));
    }
    if (indices.shape.length !== 2) {
        throw new Error("Indices must be a matrix, saw:\n         ".concat(indices.shape));
    }
    if (values.shape.length !== 1) {
        throw new Error("Values must be a vector, saw:\n         ".concat(values.shape));
    }
    if (defaultValue.shape.length !== 0) {
        throw new Error("Default value must be a scalar, saw:\n        ".concat(defaultValue.shape));
    }
    var $indices = backend.readSync(indices.dataId);
    var $values = backend.readSync(values.dataId);
    var $denseShape = backend.readSync(denseShape.dataId);
    var $defaultValue = backend.readSync(defaultValue.dataId)[0];
    var _a = __read(sparseFillEmptyRowsImplCPU($indices, indices.shape, indices.dtype, $values, values.dtype, $denseShape, $defaultValue), 5), outputIndices = _a[0], outputIndicesShape = _a[1], outputValues = _a[2], emptyRowIndicator = _a[3], reverseIndexMap = _a[4];
    return [
        backend.makeTensorInfo(outputIndicesShape, indices.dtype, outputIndices),
        backend.makeTensorInfo([outputIndicesShape[0]], values.dtype, outputValues),
        backend.makeTensorInfo([emptyRowIndicator.length], 'bool', new Uint8Array(emptyRowIndicator.map(function (value) { return Number(value); }))),
        backend.makeTensorInfo([reverseIndexMap.length], indices.dtype, new Int32Array(reverseIndexMap)),
    ];
}
var sparseFillEmptyRowsConfig = {
    kernelName: tf.SparseFillEmptyRows,
    backendName: 'webgl',
    kernelFunc: sparseFillEmptyRows,
};

function sparseReshape(args) {
    var inputs = args.inputs, backend = args.backend;
    var inputIndices = inputs.inputIndices, inputShape = inputs.inputShape, newShape = inputs.newShape;
    if (inputIndices.shape.length !== 2) {
        throw new Error("Input indices should be a matrix but received shape ".concat(inputIndices.shape));
    }
    if (inputShape.shape.length !== 1) {
        throw new Error("Input shape should be a vector but received shape ".concat(inputShape.shape));
    }
    if (newShape.shape.length !== 1) {
        throw new Error("Target shape should be a vector but received shape ".concat(newShape.shape));
    }
    var $inputShape = Array.from(backend.readSync(inputShape.dataId));
    var $inputIndices = backend.readSync(inputIndices.dataId);
    var targetShape = Array.from(backend.readSync(newShape.dataId));
    var _a = __read(sparseReshapeImplCPU($inputIndices, inputIndices.shape, inputIndices.dtype, $inputShape, targetShape), 3), newIndices = _a[0], indicesShape = _a[1], outputShape = _a[2];
    return [
        backend.makeTensorInfo(indicesShape, inputIndices.dtype, newIndices),
        backend.makeTensorInfo([outputShape.length], newShape.dtype, new Int32Array(outputShape)),
    ];
}
var sparseReshapeConfig = {
    kernelName: tf.SparseReshape,
    backendName: 'webgl',
    kernelFunc: sparseReshape,
};

function sparseSegmentMean(args) {
    var inputs = args.inputs, backend = args.backend;
    var data = inputs.data, indices = inputs.indices, segmentIds = inputs.segmentIds;
    if (data.shape.length < 1) {
        throw new Error("Data should be at least 1 dimensional but received scalar");
    }
    if (indices.shape.length !== 1) {
        throw new Error("Indices should be a vector but received shape\n              ".concat(indices.shape));
    }
    if (segmentIds.shape.length !== 1) {
        throw new Error("Segment ids should be a vector but received shape\n              ".concat(segmentIds.shape));
    }
    var $data = backend.readSync(data.dataId);
    var $indices = backend.readSync(indices.dataId);
    var $segmentIds = backend.readSync(segmentIds.dataId);
    var _a = __read(sparseSegmentReductionImplCPU($data, data.shape, data.dtype, $indices, $segmentIds, true), 2), outputData = _a[0], outputDataShape = _a[1];
    return backend.makeTensorInfo(outputDataShape, data.dtype, outputData);
}
var sparseSegmentMeanConfig = {
    kernelName: tf.SparseSegmentMean,
    backendName: 'webgl',
    kernelFunc: sparseSegmentMean,
};

function sparseSegmentSum(args) {
    var inputs = args.inputs, backend = args.backend;
    var data = inputs.data, indices = inputs.indices, segmentIds = inputs.segmentIds;
    if (data.shape.length < 1) {
        throw new Error("Data should be at least 1 dimensional but received scalar");
    }
    if (indices.shape.length !== 1) {
        throw new Error("Indices should be a vector but received shape\n             ".concat(indices.shape));
    }
    if (segmentIds.shape.length !== 1) {
        throw new Error("Segment ids should be a vector but received shape\n             ".concat(segmentIds.shape));
    }
    var $data = backend.readSync(data.dataId);
    var $indices = backend.readSync(indices.dataId);
    var $segmentIds = backend.readSync(segmentIds.dataId);
    var _a = __read(sparseSegmentReductionImplCPU($data, data.shape, data.dtype, $indices, $segmentIds), 2), outputData = _a[0], outputDataShape = _a[1];
    return backend.makeTensorInfo(outputDataShape, data.dtype, outputData);
}
var sparseSegmentSumConfig = {
    kernelName: tf.SparseSegmentSum,
    backendName: 'webgl',
    kernelFunc: sparseSegmentSum,
};

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
function sparseToDense(args) {
    var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
    var sparseIndices = inputs.sparseIndices, sparseValues = inputs.sparseValues, defaultValue = inputs.defaultValue;
    var outputShape = attrs.outputShape;
    var _a = tf.backend_util.calculateShapes(sparseValues, sparseIndices, outputShape), sliceRank = _a.sliceRank, numUpdates = _a.numUpdates, sliceSize = _a.sliceSize, strides = _a.strides, outputSize = _a.outputSize;
    var sumDupeIndices = false;
    if (sparseValues.dtype === 'string') {
        var indicesBuf = backend.bufferSync(sparseIndices);
        var updatesBuf = backend.bufferSync(sparseValues);
        var $defaultValue = tf.util.decodeString(backend.readSync(defaultValue.dataId)[0]);
        var outBuf = scatterImplCPU(indicesBuf, updatesBuf, outputShape, outputSize, sliceSize, numUpdates, sliceRank, strides, $defaultValue, sumDupeIndices);
        return backend.makeTensorInfo(outputShape, outBuf.dtype, outBuf.values);
    }
    var program = new ScatterProgram(numUpdates, sliceRank, sparseIndices.shape.length, sparseValues.shape.length, strides, [outputSize, 1], sumDupeIndices);
    var res = backend.runWebGLProgram(program, [sparseValues, sparseIndices, defaultValue], sparseValues.dtype);
    var reshaped = reshape({ inputs: { x: res }, backend: backend, attrs: { shape: outputShape } });
    backend.disposeIntermediateTensorInfo(res);
    return reshaped;
}
var sparseToDenseConfig = {
    kernelName: tf.SparseToDense,
    backendName: 'webgl',
    kernelFunc: sparseToDense
};

function splitV(args) {
    var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
    var x = inputs.x;
    var numOrSizeSplits = attrs.numOrSizeSplits, axis = attrs.axis;
    var $axis = tf.util.parseAxisParam(axis, x.shape)[0];
    var splitSizes = tf.backend_util.prepareSplitSize(x, numOrSizeSplits, $axis);
    var xRank = x.shape.length;
    var begin = new Array(xRank).fill(0);
    var size = x.shape.slice();
    return splitSizes.map(function (s) {
        var sliceSize = __spreadArray([], __read(size), false);
        sliceSize[$axis] = s;
        var sliceT = slice({ inputs: { x: x }, backend: backend, attrs: { begin: begin, size: sliceSize } });
        begin[$axis] += s;
        return sliceT;
    });
}
var splitVConfig = {
    kernelName: tf.SplitV,
    backendName: 'webgl',
    kernelFunc: splitV
};

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
var SQRT = "return sqrt(x);";
var sqrt = unaryKernelFunc({ opSnippet: SQRT, packedOpSnippet: SQRT, cpuKernelImpl: sqrtImplCPU });
var sqrtConfig = {
    kernelName: tf.Sqrt,
    backendName: 'webgl',
    kernelFunc: sqrt
};

/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
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
var SQUARE = "return x * x;";
var square = unaryKernelFunc({ opSnippet: SQUARE });
var squareConfig = {
    kernelName: tf.Square,
    backendName: 'webgl',
    kernelFunc: square,
};

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
var SQUARED_DIFFERENCE = 'return (a - b) * (a - b);';
var squaredDifference = binaryKernelFunc({ opSnippet: SQUARED_DIFFERENCE, packedOpSnippet: SQUARED_DIFFERENCE });
var squaredDifferenceConfig = {
    kernelName: tf.SquaredDifference,
    backendName: 'webgl',
    kernelFunc: squaredDifference,
};

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
function staticRegexReplace(args) {
    var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
    var x = inputs.x;
    if (x.dtype !== 'string') {
        throw new Error('Input must be of datatype string');
    }
    var $x = backend.readSync(x.dataId);
    var stringInput = tf.backend_util.fromUint8ToStringArray($x);
    var output = staticRegexReplaceImplCPU(stringInput, 'string', attrs);
    return backend.makeTensorInfo(x.shape, 'string', output);
}
var staticRegexReplaceConfig = {
    kernelName: tf.StaticRegexReplace,
    backendName: 'webgl',
    kernelFunc: staticRegexReplace,
};

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
function step(_a) {
    var inputs = _a.inputs, attrs = _a.attrs, backend = _a.backend;
    var x = inputs.x;
    var opSnippet = CHECK_NAN_SNIPPET$1 + "\n    return x > 0.0 ? 1.0 : float(".concat(attrs.alpha, ");\n  ");
    var program = new UnaryOpProgram(x.shape, opSnippet);
    return backend.runWebGLProgram(program, [x], x.dtype);
}
var stepConfig = {
    kernelName: tf.Step,
    backendName: 'webgl',
    kernelFunc: step,
};

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
var StridedSliceProgram = /** @class */ (function () {
    function StridedSliceProgram(begin, strides, size) {
        this.variableNames = ['x'];
        this.outputShape = size;
        var rank = size.length;
        var inputDtype = getCoordsDataType(size.length);
        var dtype = getCoordsDataType(size.length);
        var newCoords = '';
        if (rank === 1) {
            newCoords = 'coords * strides + begin';
        }
        else {
            var outputAxis_1 = 0;
            newCoords =
                size.map(function (_, i) {
                    outputAxis_1++;
                    return size.length === 1 ?
                        "coords * strides[".concat(i, "] + begin[").concat(i, "]") :
                        "coords[".concat(outputAxis_1 - 1, "] * strides[").concat(i, "] + begin[").concat(i, "]");
                })
                    .join(',');
        }
        this.userCode = "\n      ".concat(inputDtype, " begin = ").concat(inputDtype, "(").concat(begin, ");\n      ").concat(inputDtype, " strides = ").concat(inputDtype, "(").concat(strides, ");\n\n      void main() {\n        ").concat(dtype, " coords = getOutputCoords();\n        setOutput(getX(").concat(newCoords, "));\n      }\n    ");
    }
    return StridedSliceProgram;
}());

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
function stridedSlice(args) {
    var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
    var x = inputs.x;
    var begin = attrs.begin, end = attrs.end, strides = attrs.strides, beginMask = attrs.beginMask, endMask = attrs.endMask, ellipsisMask = attrs.ellipsisMask, newAxisMask = attrs.newAxisMask, shrinkAxisMask = attrs.shrinkAxisMask;
    var _a = tf.slice_util.sliceInfo(x.shape, begin, end, strides, beginMask, endMask, ellipsisMask, newAxisMask, shrinkAxisMask), finalShapeSparse = _a.finalShapeSparse, finalShape = _a.finalShape, isIdentity = _a.isIdentity, sliceDim0 = _a.sliceDim0, isSimpleSlice = _a.isSimpleSlice, $begin = _a.begin, $end = _a.end, $strides = _a.strides;
    var result;
    if (isIdentity) {
        // Optimization #1, slice is a no-op plus reshape
        result = reshape({ inputs: { x: x }, backend: backend, attrs: { shape: finalShape } });
    }
    else if (sliceDim0 || isSimpleSlice) {
        // Optimization #2, slice is memory contiguous (only occurs in dim 0)
        tf.util.assert(x.shape.length >= 1, function () { return "Input must have rank at least 1, got: ".concat(x.shape.length); });
        var size = tf.slice_util.computeOutShape($begin, $end, $strides);
        // To tolerate begin[0] > end[0] (a 0-output slice), we min(begin, end).
        var sliced = slice({ inputs: { x: x }, backend: backend, attrs: { begin: $begin, size: size } });
        result =
            reshape({ inputs: { x: sliced }, backend: backend, attrs: { shape: finalShape } });
        backend.disposeIntermediateTensorInfo(sliced);
    }
    else {
        var shouldExecuteOnCPU = backend.shouldExecuteOnCPU([x]);
        if (shouldExecuteOnCPU) {
            // tslint:disable-next-line: no-unnecessary-type-assertion
            var values = backend.readSync(x.dataId);
            // tslint:disable-next-line: no-unnecessary-type-assertion
            var xBuf = tf.buffer(x.shape, x.dtype, values);
            var resultValues = stridedSliceImplCPU(finalShapeSparse, xBuf, $strides, $begin);
            result = backend.makeTensorInfo(finalShape, x.dtype, resultValues.values);
        }
        else {
            var program = new StridedSliceProgram($begin, $strides, finalShapeSparse);
            result = backend.runWebGLProgram(program, [x], x.dtype);
        }
    }
    var resultReshaped = reshape({ inputs: { x: result }, backend: backend, attrs: { shape: finalShape } });
    backend.disposeIntermediateTensorInfo(result);
    return resultReshaped;
}
var stridedSliceConfig = {
    kernelName: tf.StridedSlice,
    backendName: 'webgl',
    kernelFunc: stridedSlice
};

function stringNGrams(args) {
    var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
    var separator = attrs.separator, nGramWidths = attrs.nGramWidths, leftPad = attrs.leftPad, rightPad = attrs.rightPad, padWidth = attrs.padWidth, preserveShortSequences = attrs.preserveShortSequences;
    var data = inputs.data, dataSplits = inputs.dataSplits;
    var $data = backend.readSync(data.dataId);
    var $dataSplits = backend.readSync(dataSplits.dataId);
    var _a = __read(stringNGramsImplCPU($data, $dataSplits, separator, nGramWidths, leftPad, rightPad, padWidth, preserveShortSequences), 2), nGrams = _a[0], nGramsSplits = _a[1];
    return [
        backend.makeTensorInfo([nGrams.length], 'string', nGrams),
        backend.makeTensorInfo(dataSplits.shape, 'int32', nGramsSplits),
    ];
}
var stringNGramsConfig = {
    kernelName: tf.StringNGrams,
    backendName: 'webgl',
    kernelFunc: stringNGrams,
};

function stringSplit(args) {
    var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
    var skipEmpty = attrs.skipEmpty;
    var input = inputs.input, delimiter = inputs.delimiter;
    if (input.dtype !== 'string') {
        throw new Error('Input must be of datatype string');
    }
    if (input.shape.length !== 1) {
        throw new Error("Input must be a vector, got shape: ".concat(input.shape));
    }
    if (delimiter.shape.length !== 0) {
        throw new Error("Delimiter must be a scalar, got shape: ".concat(delimiter.shape));
    }
    var $input = backend.readSync(input.dataId);
    var $delimiter = backend.readSync(delimiter.dataId)[0];
    var _a = __read(stringSplitImplCPU($input, $delimiter, skipEmpty), 3), indices = _a[0], values = _a[1], shape = _a[2];
    var outputSize = values.length;
    return [
        backend.makeTensorInfo([outputSize, 2], 'int32', indices),
        backend.makeTensorInfo([outputSize], 'string', values),
        backend.makeTensorInfo([2], 'int32', new Int32Array(shape))
    ];
}
var stringSplitConfig = {
    kernelName: tf.StringSplit,
    backendName: 'webgl',
    kernelFunc: stringSplit,
};

/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
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
function stringToHashBucketFast(args) {
    var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
    var numBuckets = attrs.numBuckets;
    var input = inputs.input;
    if (input.dtype !== 'string') {
        throw new Error('Input must be of datatype string');
    }
    if (numBuckets <= 0) {
        throw new Error("Number of buckets must be at least 1");
    }
    var $input = backend.readSync(input.dataId);
    var output = stringToHashBucketFastImplCPU($input, numBuckets);
    return backend.makeTensorInfo(input.shape, 'int32', output);
}
var stringToHashBucketFastConfig = {
    kernelName: tf.StringToHashBucketFast,
    backendName: 'webgl',
    kernelFunc: stringToHashBucketFast,
};

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
var TAN = "return tan(x);";
var tan = unaryKernelFunc({ opSnippet: TAN });
var tanConfig = {
    kernelName: tf.Tan,
    backendName: 'webgl',
    kernelFunc: tan,
};

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
var TANH = "\n  float e2x = exp(-2.0 * abs(x));\n  return sign(x) * (1.0 - e2x) / (1.0 + e2x);\n";
var tanh = unaryKernelFunc({ opSnippet: TANH });
var tanhConfig = {
    kernelName: tf.Tanh,
    backendName: 'webgl',
    kernelFunc: tanh,
};

/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
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
function tensorScatterUpdate(args) {
    var inputs = args.inputs, backend = args.backend; args.attrs;
    var tensor = inputs.tensor, indices = inputs.indices, updates = inputs.updates;
    var _b = tf.backend_util.calculateShapes(updates, indices, tensor.shape), sliceRank = _b.sliceRank, numUpdates = _b.numUpdates, sliceSize = _b.sliceSize, strides = _b.strides, outputSize = _b.outputSize;
    var flattenShape = [outputSize / sliceSize, sliceSize];
    if (outputSize === 0) {
        return backend.makeTensorInfo(tensor.shape, indices.dtype);
    }
    var flattenIndices = reshape({ inputs: { x: indices }, backend: backend, attrs: { shape: [numUpdates, sliceRank] } });
    var flattenX = reshape({ inputs: { x: updates }, backend: backend, attrs: { shape: [numUpdates, sliceSize] } });
    var flattenTensor = reshape({ inputs: { x: tensor }, backend: backend, attrs: { shape: flattenShape } });
    var program = new ScatterProgram(numUpdates, sliceRank, flattenIndices.shape.length, flattenX.shape.length, strides, flattenShape, false, true);
    var res = backend.runWebGLProgram(program, [flattenX, flattenIndices, flattenTensor], flattenTensor.dtype);
    var reshaped = reshape({ inputs: { x: res }, backend: backend, attrs: { shape: tensor.shape } });
    backend.disposeIntermediateTensorInfo(flattenIndices);
    backend.disposeIntermediateTensorInfo(flattenX);
    backend.disposeIntermediateTensorInfo(flattenTensor);
    backend.disposeIntermediateTensorInfo(res);
    return reshaped;
}
var tensorScatterUpdateConfig = {
    kernelName: tf.TensorScatterUpdate,
    backendName: 'webgl',
    kernelFunc: tensorScatterUpdate
};

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
var TileProgram = /** @class */ (function () {
    function TileProgram(aShape, reps) {
        this.variableNames = ['A'];
        var outputShape = new Array(aShape.length);
        for (var i = 0; i < outputShape.length; i++) {
            outputShape[i] = aShape[i] * reps[i];
        }
        this.outputShape = outputShape;
        this.rank = outputShape.length;
        var dtype = getCoordsDataType(this.rank);
        var sourceCoords = getSourceCoords(aShape);
        this.userCode = "\n      void main() {\n        ".concat(dtype, " resRC = getOutputCoords();\n        setOutput(getA(").concat(sourceCoords, "));\n      }\n    ");
    }
    return TileProgram;
}());
function getSourceCoords(aShape) {
    var rank = aShape.length;
    if (rank > 5) {
        throw Error("Tile for rank ".concat(rank, " is not yet supported"));
    }
    if (rank === 1) {
        return "imod(resRC, ".concat(aShape[0], ")");
    }
    var currentCoords = ['resRC.x', 'resRC.y', 'resRC.z', 'resRC.w', 'resRC.u'];
    var sourceCoords = [];
    for (var i = 0; i < aShape.length; i++) {
        sourceCoords.push("imod(".concat(currentCoords[i], ", ").concat(aShape[i], ")"));
    }
    return sourceCoords.join();
}

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
function tile(params) {
    var inputs = params.inputs, backend = params.backend, attrs = params.attrs;
    var x = inputs.x;
    var reps = attrs.reps;
    // tile gpu program cannot handle rank > 5 case.
    if (x.dtype === 'string' || x.shape.length > 5) {
        // Even thought string tensor is always on CPU, just to be consistent on how
        // to access tensor data.
        var data = backend.readSync(x.dataId);
        var value = x.dtype === 'string' ?
            data.map(function (d) { return tf.util.decodeString(d); }) :
            data;
        var buf = tf.buffer(x.shape, x.dtype, value);
        var outBuf = tileImplCPU(buf, reps);
        return backend.makeTensorInfo(outBuf.shape, outBuf.dtype, outBuf.values);
    }
    var program = new TileProgram(x.shape, reps);
    var output = backend.runWebGLProgram(program, [x], x.dtype);
    return output;
}
var tileConfig = {
    kernelName: tf.Tile,
    backendName: 'webgl',
    kernelFunc: tile,
};

// Based on Algorithm 2 of Bitonic Top K, ref:
// https://anilshanbhag.in/static/papers/gputopk_sigmod18.pdf
// The original algorithm is based on computing the top K only, however
// since for TFJS we require the indices of the top K values as well then the
// algorithm found here is a bit modified. Rather than producing the values
// at each step, the indices containing the top K are generated instead.
// The output values are not generated to reduce the number of outputs in the
// GPU, the values can easily be retrieved from the indices using a gather
// op.
var SwapProgram = /** @class */ (function () {
    /**
     * @param shape desired output shape (can be larger than input shape, output
     *                                    will be padded with -Infinity)
     */
    function SwapProgram(shape) {
        this.variableNames = ['x', 'indices'];
        // |n| Size of the original input of TopK.
        // |firstPass|indicates if this is the first time swap is being used which
        // means no indices input containing the top K is present yet.
        // |inc| Swaps pairs of indices (0, inc), (1, inc + 1), (2, inc + 2) ...
        this.customUniforms = [
            { name: 'n', type: 'int' },
            { name: 'firstPass', type: 'int' },
            { name: 'negativeInf', type: 'float' },
            { name: 'dir', type: 'int' },
            { name: 'inc', type: 'int' }
        ];
        this.outputShape = shape;
        this.userCode = "\n       void main() {\n         ivec2 coords = getOutputCoords();\n         int batch = coords[0];\n         int elemIdx = coords[1];\n\n         // We compare elements pair-wise within a group of size 2 * inc.\n         // The comparing rule for each group alternates between ascending\n         // and descending. Within each group, we compare each pair at\n         // positions i and i+inc. To decide whether an element at position i\n         // is x0 or x1, we mod it by 2 * inc, if the result is smaller than\n         // inc, it is in the first half of the group, we denote it as x0,\n         // otherwise we denote it as x1.\n         // For example, as shown in the Bitonic top K paper referenced above,\n         // Figure5(a) shows that element[1] is in the\n         // second half of the group when group size is 2, but it is in the\n         // first half of the group when group size is 4.\n\n         bool isFirstInPair = imod(elemIdx, 2 * inc) < inc;\n         int i = isFirstInPair ? elemIdx : elemIdx - inc;\n\n         int i0 = firstPass == 1 ? i : int(getIndices(batch, i));\n         int i1 = firstPass == 1 ? i + inc : int(getIndices(batch, i + inc));\n         float x0 = i0 < n ? getX(batch, i0) : negativeInf;\n         float x1 = i1 < n ? getX(batch, i1) : negativeInf;\n\n         // Denotes which direction indices are in (ascending or descending).\n         bool reverse = imod(elemIdx, 2 * dir) >= dir;\n         bool isGreater = x0 > x1 || (x0 == x1 && i1 > i0);\n         if (reverse == isGreater) { // Elements in opposite order of direction\n           int iTemp = i0;\n           i0 = i1;\n           i1 = iTemp;\n         }\n         if (isFirstInPair) {\n            setOutput(float(i0));\n         } else {\n            setOutput(float(i1));\n         }\n       }\n     ";
    }
    return SwapProgram;
}());
var MergeProgram = /** @class */ (function () {
    /**
     * @param shape desired output shape (must be half of the input size)
     */
    function MergeProgram(shape) {
        this.variableNames = ['x', 'indices'];
        // |n| Size of the original input of TopK
        // |firstPass| indicates if this is the first time swap is being used which
        // means no indices input containing the top K is present yet.
        // |k| Top k elements desired
        this.customUniforms = [
            { name: 'n', type: 'int' },
            { name: 'firstPass', type: 'int' },
            { name: 'k', type: 'int' }
        ];
        this.outputShape = shape;
        this.userCode = "\n    void main() {\n         // Takes max of indices (0, k), (1, k + 1), (2, k + 2) ...\n         ivec2 coords = getOutputCoords();\n         int batch = coords[0];\n         int elemIdx = coords[1];\n\n         // The output size is half of the previous size.\n         // If the previous sequence is | | | | _ _ _ _  | | | |  _ _ _ _ (k=4),\n         // we only need to output the indices at positions |, the indices at\n         // positions _ can be thrown away, see Figure5(b) After Phase 2\n         // (Merge phase) in the Bitonic Top K paper referenced above.\n         // For example, the paper shows we only need to output the orange bars.\n         // The output sequence should look like this | | | | | | | |.\n         // Because the sequence is halved, to map the output index back\n         // to the previous sequence to find the corresponding value,\n         // we need to double the index. When we double the index,\n         // we basically interpolate a position, so 2i looks like\n         // | _ | _ | _ | _ | _ | _ | _. We move the | to the first k position\n         // of each 2k positions by - elemIdx % k. E.g. for output at\n         // index 4,5,6,7, we want to get the corresponding element at\n         // original index 8,9,10,11, for output at index 8,9,10,11,\n         // we want to get the corresponding element at original index\n         // 16,17,18,19, so on and so forth.\n\n         int i = elemIdx < k ? elemIdx : (elemIdx * 2 - imod(elemIdx, k));\n         int i0 = firstPass == 1 ? i : int(getIndices(batch, i));\n         int i1 = firstPass == 1 ? i + k : int(getIndices(batch, i + k));\n\n         float x0 = getX(batch, i0);\n         float x1 = i1 < n ? getX(batch, i1) : x0;\n\n         setOutput(x0 >= x1 ? float(i0) : float(i1));\n       }\n     ";
    }
    return MergeProgram;
}());

function disposeIntermediateTensorInfoOrNull(backend, tensorInfo) {
    if (tensorInfo !== null) {
        backend.disposeIntermediateTensorInfo(tensorInfo);
    }
}
function roundUpToPow2(num) {
    var pow2 = 1;
    while (pow2 < num) {
        pow2 *= 2;
    }
    return pow2;
}
// Based on Algorithm 2 of Bitonic Top K, ref:
// https://anilshanbhag.in/static/papers/gputopk_sigmod18.pdf
function topK(args) {
    var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
    var x = inputs.x;
    var k = attrs.k, sorted = attrs.sorted;
    // Empirically determined constant used to determine last dim threshold for
    // handing off execution to the CPU.
    var TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD = tf.env().getNumber('TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD');
    // Empirically determined constant used to determine k threshold for handing
    // off execution to the CPU.
    var TOPK_K_CPU_HANDOFF_THRESHOLD = tf.env().getNumber('TOPK_K_CPU_HANDOFF_THRESHOLD');
    var xShape = x.shape;
    var lastDim = xShape[xShape.length - 1];
    if (backend.shouldExecuteOnCPU([x]) ||
        lastDim < TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD ||
        k > TOPK_K_CPU_HANDOFF_THRESHOLD) {
        var xVals = backend.readSync(x.dataId);
        var _a = __read(topKImplCPU(xVals, xShape, x.dtype, k, sorted), 2), allTopKVals = _a[0], allTopKIndices = _a[1];
        return [
            backend.makeTensorInfo(allTopKVals.shape, allTopKVals.dtype, allTopKVals.values),
            backend.makeTensorInfo(allTopKIndices.shape, allTopKIndices.dtype, allTopKIndices.values)
        ];
    }
    if (k === 0) {
        xShape[xShape.length - 1] = 0;
        return [
            backend.makeTensorInfo(xShape, x.dtype, []),
            backend.makeTensorInfo(xShape, 'int32', [])
        ];
    }
    if (lastDim === 1 /* firstPass */) {
        return [
            x, fill({ attrs: { shape: xShape, dtype: 'int32', value: 0 }, backend: backend })
        ];
    }
    // Eagerly unpack x input since it is passed in to all the shaders which
    // require unpacked inputs.
    var xtexData = backend.texData.get(x.dataId);
    var xIsPacked = xtexData !== null && xtexData.isPacked;
    var xUnPacked = xIsPacked ? backend.unpackTensor(x) : x;
    // Reshape into a 2d tensor [batch, lastDim] and compute topk along lastDim.
    var xSize = tf.util.sizeFromShape(xShape);
    var batch = xSize / lastDim;
    var x2D = reshape({ inputs: { x: xUnPacked }, attrs: { shape: [batch, lastDim] }, backend: backend });
    if (xIsPacked) {
        disposeIntermediateTensorInfoOrNull(backend, xUnPacked);
    }
    var kPow2 = roundUpToPow2(k);
    var lastDimPow2 = roundUpToPow2(lastDim);
    // Only the indices containing the top K are kept at every step to reduce
    // number of outputs in the GPU algorithms, so once the final set of indices
    // is computed then gather is used to grab the corresponding values
    // from the original input.
    var indices = null;
    // GPU algorithm always takes in an indices input but this input is not used
    // on the first run of a GPU algorithm, therefore if indices is null we simply
    // pass in x2D instead of it but the value will not actually be used
    var getInputs = function () { return indices === null ? [x2D, x2D] : [x2D, indices]; };
    var runSwap = function (dir, inc, shape) {
        var inputs = getInputs();
        var program = new SwapProgram(shape);
        var fistPass = indices === null ? 1 : 0;
        var customValues = [[lastDim], [fistPass], [Number.NEGATIVE_INFINITY], [dir], [inc]];
        var prevIndices = indices;
        indices = backend.runWebGLProgram(program, inputs, 'int32', customValues);
        disposeIntermediateTensorInfoOrNull(backend, prevIndices);
    };
    // Step 1: local sort
    for (var len = 1; len < kPow2; len *= 2) {
        var dir = len * 2;
        for (var inc = len; inc >= 1; inc /= 2) {
            runSwap(dir, inc, [batch, lastDimPow2]);
        }
    }
    // Step 2: merge
    for (var indicesSize = lastDimPow2; indicesSize > kPow2; indicesSize /= 2) {
        var inputs_1 = getInputs();
        var mergeProgram = new MergeProgram([batch, indicesSize / 2]);
        var firstPass = indices === null ? 1 : 0;
        var customValues = [[lastDim], [firstPass], [kPow2]];
        var prevIndices_1 = indices;
        indices =
            backend.runWebGLProgram(mergeProgram, inputs_1, 'int32', customValues);
        disposeIntermediateTensorInfoOrNull(backend, prevIndices_1);
        // Step 3: rebuild
        var len = kPow2 / 2;
        var dir = len * 2;
        for (var inc = len; inc >= 1; inc /= 2) {
            runSwap(dir, inc, indices.shape);
        }
    }
    // Keep only the requested top K results instead of kPow2
    var prevIndices = indices;
    indices = slice({ inputs: { x: indices }, backend: backend, attrs: { begin: 0, size: [batch, k] } });
    disposeIntermediateTensorInfoOrNull(backend, prevIndices);
    // Gather values on last dimension
    var values = gatherV2({ inputs: { x: x2D, indices: indices }, backend: backend, attrs: { axis: 1, batchDims: 1 } });
    disposeIntermediateTensorInfoOrNull(backend, x2D);
    // Reshape back to the original input shape, except that the last
    // dimension is k.
    var newShape = xShape.slice(0, -1);
    newShape.push(k);
    prevIndices = indices;
    indices = reshape({ inputs: { x: indices }, attrs: { shape: newShape }, backend: backend });
    disposeIntermediateTensorInfoOrNull(backend, prevIndices);
    var prevValues = values;
    values = reshape({ inputs: { x: values }, attrs: { shape: newShape }, backend: backend });
    disposeIntermediateTensorInfoOrNull(backend, prevValues);
    return [values, indices];
}
var topKConfig = {
    kernelName: tf.TopK,
    backendName: 'webgl',
    kernelFunc: topK
};

/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
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
var TransformProgram = /** @class */ (function () {
    function TransformProgram(imageHeight, imageWidth, interpolation, fillMode, fillValue, outShape) {
        this.variableNames = ['Image', 'Transforms'];
        this.outputShape = outShape;
        var interpolationModeId = interpolation === 'nearest' ? 1 : 2;
        var fillModeId;
        switch (fillMode) {
            case 'constant':
                fillModeId = 1;
                break;
            case 'reflect':
                fillModeId = 2;
                break;
            case 'wrap':
                fillModeId = 3;
                break;
            case 'nearest':
                fillModeId = 4;
                break;
            default:
                fillModeId = 1;
                break;
        }
        this.userCode = "\n            float mapCoord(float outCoord, float len) {\n              float inCoord = outCoord;\n              if(".concat(fillModeId, " == 2) {\n                if (inCoord < 0.0) {\n                  if (len <= 1.0) {\n                    inCoord = 0.0;\n                  } else {\n                    float sz2 = 2.0 * len;\n                    if (inCoord < sz2) {\n                      inCoord = sz2 * float(int(float(-inCoord / sz2))) +\n                      inCoord;\n                    }\n                    inCoord = inCoord < -len ? inCoord + sz2 : -inCoord - 1.0;\n                  }\n                } else if (inCoord > len - 1.0) {\n                  if (len <= 1.0) {\n                    inCoord = 0.0;\n                  } else {\n                    float sz2 = 2.0 * len;\n                    inCoord -= sz2 * float(int(float(inCoord / sz2)));\n                    if (inCoord >= len) {\n                      inCoord = sz2 - inCoord - 1.0;\n                    }\n                  }\n                }\n                return clamp(inCoord, 0.0, len - 1.0);\n              } else if (").concat(fillModeId, " == 3) {\n                if (inCoord < 0.0) {\n                  if (len <= 1.0) {\n                    inCoord = 0.0;\n                  } else {\n                    float sz = len - 1.0;\n                    inCoord += len * (float(int(float(-inCoord / sz))) + 1.0);\n                  }\n                } else if (inCoord > len - 1.0) {\n                  if (len <= 1.0) {\n                    inCoord = 0.0;\n                  } else {\n                    float sz = len - 1.0;\n                    inCoord -= len * float(int(float(inCoord / sz)));\n                  }\n                }\n                return clamp(inCoord, 0.0, len - 1.0);\n              } else if (").concat(fillModeId, " == 4) {\n                return clamp(outCoord, 0.0, len - 1.0);\n              } else {\n                return outCoord;\n              }\n            }\n\n            float readWithFillValue(int batch, int coordY, int coordX,\n              int channel) {\n              float outputValue;\n              if (0 <= coordY && coordY < ").concat(imageHeight, " && 0 <= coordX && coordX < ").concat(imageWidth, ") {\n                  outputValue = getImage(batch, coordY, coordX, channel);\n              } else {\n                outputValue = float(").concat(fillValue, ");\n              }\n              return outputValue;\n            }\n\n            void main() {\n              ivec4 coords = getOutputCoords();\n              float outputValue;\n              int batch = coords[0];\n              int x = coords[2];\n              int y = coords[1];\n              int channel = coords[3];\n              float xf = float(x);\n              float yf = float(y);\n              float a1 = getTransforms(batch, 0);\n              float a2 = getTransforms(batch, 1);\n              float a3 = getTransforms(batch, 2);\n              float b1 = getTransforms(batch, 3);\n              float b2 = getTransforms(batch, 4);\n              float b3 = getTransforms(batch, 5);\n              float c1 = getTransforms(batch, 6);\n              float c2 = getTransforms(batch, 7);\n              float projection = c1 * xf + c2 * yf + 1.0;\n              if (projection == 0.0) {\n                outputValue = float(").concat(fillValue, ");\n              } else {\n                float inX = (a1 * xf + a2 * yf + a3) / projection;\n                float inY = (b1 * xf + b2 * yf + b3) / projection;\n                float mapX = mapCoord(inX, float(").concat(imageWidth, "));\n                float mapY = mapCoord(inY, float(").concat(imageHeight, "));\n\n                if (").concat(interpolationModeId, " == 1) {\n                  int coordY = int(round(mapY));\n                  int coordX = int(round(mapX));\n                  outputValue = readWithFillValue(batch, coordY, coordX,\n                    channel);\n                } else {\n                  float yFloor = floor(mapY);\n                  float xFloor = floor(mapX);\n                  float yCeil = yFloor + 1.0;\n                  float xCeil = xFloor + 1.0;\n                  float valueYFloor = (xCeil - mapX) *\n                  readWithFillValue(batch, int(yFloor), int(xFloor), channel) +\n                  (mapX - xFloor) *\n                  readWithFillValue(batch, int(yFloor), int(xCeil), channel);\n                  float valueYCeil = (xCeil - mapX) *\n                  readWithFillValue(batch, int(yCeil), int(xFloor), channel) +\n                  (mapX - xFloor) *\n                  readWithFillValue(batch, int(yCeil), int(xCeil), channel);\n                  outputValue = (yCeil - mapY) * valueYFloor +\n                  (mapY - yFloor) * valueYCeil;\n                }\n              }\n              setOutput(outputValue);\n            }\n        ");
    }
    return TransformProgram;
}());

function transform(args) {
    var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
    var image = inputs.image, transforms = inputs.transforms;
    var interpolation = attrs.interpolation, fillMode = attrs.fillMode, fillValue = attrs.fillValue, outputShape = attrs.outputShape;
    var _a = __read(image.shape, 4), batch = _a[0], imageHeight = _a[1], imageWidth = _a[2], numChannels = _a[3];
    var _b = __read(outputShape != null ? outputShape : [imageHeight, imageWidth], 2), outHeight = _b[0], outWidth = _b[1];
    var outShape = [batch, outHeight, outWidth,
        numChannels];
    var program = new TransformProgram(imageHeight, imageWidth, interpolation, fillMode, fillValue, outShape);
    return backend.runWebGLProgram(program, [image, transforms], 'float32');
}
var transformConfig = {
    kernelName: tf.Transform,
    backendName: 'webgl',
    kernelFunc: transform
};

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
function unique(args) {
    var inputs = args.inputs, attrs = args.attrs, backend = args.backend;
    var axis = attrs.axis;
    var x = inputs.x;
    assertNotComplex(x, 'unique');
    // For now, always forward calculation to the CPU backend.
    console.warn('WARNING: ', 'UI might be locked temporarily as data is being downloaded');
    var values = backend.readSync(x.dataId);
    var _a = uniqueImplCPU(values, axis, x.shape, x.dtype), outputValues = _a.outputValues, outputShape = _a.outputShape, indices = _a.indices;
    return [
        backend.makeTensorInfo(outputShape, x.dtype, outputValues),
        backend.makeTensorInfo([indices.length], 'int32', indices),
    ];
}
var uniqueConfig = {
    kernelName: tf.Unique,
    backendName: 'webgl',
    kernelFunc: unique,
};

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
function unpack(args) {
    var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
    var value = inputs.value;
    var axis = attrs.axis;
    if (axis < 0) {
        axis += value.shape.length;
    }
    var x = value;
    var xRank = x.shape.length;
    var num = value.shape[axis];
    var outShape = new Array(xRank - 1);
    var outIndex = 0;
    for (var i = 0; i < xRank; i++) {
        if (i !== axis) {
            outShape[outIndex++] = x.shape[i];
        }
    }
    var toDispose = [];
    var begin = new Array(xRank).fill(0);
    var size = x.shape.slice();
    size[axis] = 1;
    var res = new Array(num);
    for (var i = 0; i < res.length; i++) {
        begin[axis] = i;
        var sliced = slice({ inputs: { x: x }, backend: backend, attrs: { begin: begin, size: size } });
        var reshaped = reshape({ inputs: { x: sliced }, backend: backend, attrs: { shape: outShape } });
        res[i] = reshaped;
        toDispose.push(sliced);
    }
    toDispose.forEach(function (t) { return backend.disposeIntermediateTensorInfo(t); });
    return res;
}
var unpackConfig = {
    kernelName: tf.Unpack,
    backendName: 'webgl',
    kernelFunc: unpack
};

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
var SegmentOpProgram = /** @class */ (function () {
    function SegmentOpProgram(segOpInfo, segOpType) {
        this.variableNames = ['x', 'segmentIds'];
        var windowSize = segOpInfo.windowSize;
        var batchSize = segOpInfo.batchSize;
        var inSize = segOpInfo.inSize;
        var numSegments = segOpInfo.numSegments;
        var outSize = numSegments * Math.ceil(inSize / windowSize);
        this.outputShape = [batchSize, outSize];
        var initializationValue = '0.0';
        var returnValue = "sumValue";
        var windowSizeNearestVec4 = Math.floor(windowSize / 4) * 4;
        var windowSizeVec4Remainder = windowSize % 4;
        var updateSnippet = "\n        sumValue += dot(values, segFilter);\n    ";
        var checkValueOutOfBounds = '';
        if (inSize % windowSize > 0) {
            checkValueOutOfBounds = "\n        if (inIdx < 0 || inIdx >= ".concat(inSize, ") {\n          return initializationValue;\n        }\n      ");
        }
        var checkSegmentIdOutOfBounds = '';
        if (inSize % windowSize > 0) {
            checkSegmentIdOutOfBounds = "\n        if (inIdx < 0 || inIdx >= ".concat(inSize, ") {\n          return -1.0;\n        }\n      ");
        }
        this.userCode = "\n      const float initializationValue = ".concat(initializationValue, ";\n\n      float getValue(int batch, int inIdx) {\n        ").concat(checkValueOutOfBounds, "\n        return getX(batch, inIdx);\n      }\n\n      float getSegmentIdAtIndex(int inIdx) {\n        ").concat(checkSegmentIdOutOfBounds, "\n        return getSegmentIds(inIdx);\n      }\n\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n        int outIdx = coords[1];\n        int inOffset = int(floor(float(outIdx) / float(\n          ").concat(numSegments, ")) * float(").concat(windowSize, "));\n        int currentSeg = int(mod(float(outIdx), float(").concat(numSegments, ")));\n\n        float sumValue = 0.0;\n\n        for (int i = 0; i < ").concat(windowSizeNearestVec4, "; i += 4) {\n          int inIdx = inOffset + i;\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            getValue(batch, inIdx + 3)\n          );\n\n          vec4 segFilter = vec4(\n            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 3)) == currentSeg ? 1 : 0\n          );\n\n          ").concat(updateSnippet, "\n        }\n\n        int inIdx = inOffset + ").concat(windowSizeNearestVec4, ";\n        if (").concat(windowSizeVec4Remainder === 1, ") {\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            initializationValue,\n            initializationValue,\n            initializationValue\n          );\n\n          int inIdxSeg = int(getSegmentIdAtIndex(inIdx));\n\n          vec4 segFilter = vec4(\n            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,\n            0,\n            0,\n            0\n          );\n\n          ").concat(updateSnippet, "\n        } else if (").concat(windowSizeVec4Remainder === 2, ") {\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            initializationValue,\n            initializationValue\n          );\n\n          vec4 segFilter = vec4(\n            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,\n              0,\n              0\n          );\n\n          ").concat(updateSnippet, "\n        } else if (").concat(windowSizeVec4Remainder === 3, ") {\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            initializationValue\n          );\n\n          vec4 segFilter = vec4(\n            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,\n            0\n          );\n\n          ").concat(updateSnippet, "\n        }\n        setOutput(").concat(returnValue, ");\n      }\n    ");
    }
    return SegmentOpProgram;
}());

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
function unsortedSegmentSum(args) {
    var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
    var x = inputs.x, segmentIds = inputs.segmentIds;
    var numSegments = attrs.numSegments;
    var xRank = x.shape.length;
    var toDispose = [];
    var axis = 0;
    var permutation = tf.backend_util.getAxesPermutation([axis], xRank);
    var permutedX = x;
    if (permutation != null) {
        permutedX = transpose({ inputs: { x: x }, backend: backend, attrs: { perm: permutation } });
        toDispose.push(permutedX);
        axis = tf.backend_util.getInnerMostAxes(1, xRank)[0];
    }
    var outShape = tf.backend_util.segment_util.computeOutShape(permutedX.shape, axis, numSegments);
    var inSize = tf.util.sizeFromShape([permutedX.shape[axis]]);
    var a2D = reshape({ inputs: { x: permutedX }, backend: backend, attrs: { shape: [-1, inSize] } });
    toDispose.push(a2D);
    var outputDType = tf.sumOutType(x.dtype);
    var segOpCompute = function (x, segOpType, segmentIds, dtype, numSegments) {
        var batchSize = x.shape[0];
        var inSize = x.shape[1];
        var windowSize = tf.backend_util.segment_util.segOpComputeOptimalWindowSize(inSize, numSegments);
        var segOpInfo = { windowSize: windowSize, inSize: inSize, batchSize: batchSize, numSegments: numSegments };
        var program = new SegmentOpProgram(segOpInfo, segOpType);
        var output = backend.compileAndRun(program, [x, segmentIds], dtype);
        toDispose.push(output);
        // No need to run another GPGPU program.
        if (output.shape[1] === numSegments) {
            return output;
        }
        var rangeInfo = range({
            backend: backend,
            attrs: { start: 0, stop: numSegments, step: 1, dtype: 'float32' }
        });
        var tileInfo = tile({
            inputs: { x: rangeInfo },
            backend: backend,
            attrs: { reps: [inSize / windowSize] }
        });
        toDispose.push(rangeInfo);
        toDispose.push(tileInfo);
        var result = segOpCompute(output, segOpType, tileInfo, dtype, numSegments);
        return result;
    };
    var segOpResult = segOpCompute(a2D, 'unsortedSegmentSum', segmentIds, outputDType, numSegments);
    var reshaped = reshape({ inputs: { x: segOpResult }, backend: backend, attrs: { shape: outShape } });
    var result = reshaped;
    if (permutation != null) {
        toDispose.push(reshaped);
        var perm = tf.backend_util.getUndoAxesPermutation(permutation);
        result = transpose({ inputs: { x: result }, backend: backend, attrs: { perm: perm } });
    }
    toDispose.forEach(function (t) { return backend.disposeIntermediateTensorInfo(t); });
    return result;
}
var unsortedSegmentSumConfig = {
    kernelName: tf.UnsortedSegmentSum,
    backendName: 'webgl',
    kernelFunc: unsortedSegmentSum
};

var e_1, _a;
// List all kernel configs here
var kernelConfigs = [
    _fusedMatMulConfig,
    absConfig,
    acosConfig,
    acoshConfig,
    addConfig,
    addNConfig,
    allConfig,
    anyConfig,
    argMaxConfig,
    argMinConfig,
    asinConfig,
    asinhConfig,
    atanConfig,
    atan2Config,
    atanhConfig,
    avgPoolConfig,
    avgPool3DConfig,
    avgPool3DGradConfig,
    avgPoolGradConfig,
    batchMatMulConfig,
    batchNormConfig,
    batchToSpaceNDConfig,
    bincountConfig,
    bitwiseAndConfig,
    broadcastArgsConfig,
    castConfig,
    ceilConfig,
    clipByValueConfig,
    complexConfig,
    complexAbsConfig,
    concatConfig,
    conv2DConfig,
    conv2DBackpropFilterConfig,
    conv2DBackpropInputConfig,
    conv3DConfig,
    conv3DBackpropFilterV2Config,
    conv3DBackpropInputConfig,
    cosConfig,
    coshConfig,
    cropAndResizeConfig,
    cumprodConfig,
    cumsumConfig,
    denseBincountConfig,
    depthToSpaceConfig,
    depthwiseConv2dNativeConfig,
    depthwiseConv2dNativeBackpropFilterConfig,
    depthwiseConv2dNativeBackpropInputConfig,
    diagConfig,
    dilation2DConfig,
    einsumConfig,
    eluConfig,
    eluGradConfig,
    equalConfig,
    erfConfig,
    expConfig,
    expandDimsConfig,
    expm1Config,
    fftConfig,
    fillConfig,
    flipLeftRightConfig,
    floorConfig,
    floorDivConfig,
    fromPixelsConfig,
    fusedConv2DConfig,
    fusedDepthwiseConv2DConfig,
    gatherNdConfig,
    gatherV2Config,
    greaterConfig,
    greaterEqualConfig,
    identityConfig,
    ifftConfig,
    imagConfig,
    isFiniteConfig,
    isInfConfig,
    isNaNConfig,
    leakyReluConfig,
    lessConfig,
    lessEqualConfig,
    linSpaceConfig,
    logConfig,
    log1pConfig,
    logicalAndConfig,
    logicalNotConfig,
    logicalOrConfig,
    LRNConfig,
    LRNGradConfig,
    maxConfig,
    maximumConfig,
    maxPoolConfig,
    maxPool3DConfig,
    maxPool3DGradConfig,
    maxPoolGradConfig,
    maxPoolWithArgmaxConfig,
    meanConfig,
    minConfig,
    minimumConfig,
    mirrorPadConfig,
    modConfig,
    multinomialConfig,
    multiplyConfig,
    negConfig,
    nonMaxSuppressionV3Config,
    nonMaxSuppressionV4Config,
    nonMaxSuppressionV5Config,
    notEqualConfig,
    oneHotConfig,
    onesLikeConfig,
    packConfig,
    padV2Config,
    powConfig,
    preluConfig,
    prodConfig,
    raggedGatherConfig,
    raggedRangeConfig,
    raggedTensorToTensorConfig,
    rangeConfig,
    realConfig,
    realDivConfig,
    reciprocalConfig,
    reluConfig,
    relu6Config,
    reshapeConfig,
    resizeBilinearConfig,
    resizeBilinearGradConfig,
    resizeNearestNeighborConfig,
    resizeNearestNeighborGradConfig,
    reverseConfig,
    rotateWithOffsetConfig,
    roundConfig,
    rsqrtConfig,
    scatterNdConfig,
    searchSortedConfig,
    selectConfig,
    seluConfig,
    sigmoidConfig,
    signConfig,
    sinConfig,
    sinhConfig,
    sliceConfig,
    softmaxConfig,
    softplusConfig,
    spaceToBatchNDConfig,
    sparseFillEmptyRowsConfig,
    sparseReshapeConfig,
    sparseSegmentMeanConfig,
    sparseSegmentSumConfig,
    sparseToDenseConfig,
    splitVConfig,
    sqrtConfig,
    squareConfig,
    squaredDifferenceConfig,
    staticRegexReplaceConfig,
    stepConfig,
    stridedSliceConfig,
    stringNGramsConfig,
    stringSplitConfig,
    stringToHashBucketFastConfig,
    subConfig,
    sumConfig,
    tanConfig,
    tanhConfig,
    tensorScatterUpdateConfig,
    tileConfig,
    topKConfig,
    transformConfig,
    transposeConfig,
    uniqueConfig,
    unpackConfig,
    unsortedSegmentSumConfig,
    zerosLikeConfig
];
try {
    for (var kernelConfigs_1 = __values(kernelConfigs), kernelConfigs_1_1 = kernelConfigs_1.next(); !kernelConfigs_1_1.done; kernelConfigs_1_1 = kernelConfigs_1.next()) {
        var kernelConfig = kernelConfigs_1_1.value;
        tf.registerKernel(kernelConfig);
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (kernelConfigs_1_1 && !kernelConfigs_1_1.done && (_a = kernelConfigs_1.return)) _a.call(kernelConfigs_1);
    }
    finally { if (e_1) throw e_1.error; }
}

exports.GPGPUContext = GPGPUContext;
exports.MathBackendWebGL = MathBackendWebGL;
exports.forceHalfFloat = forceHalfFloat;
exports.gpgpu_util = gpgpu_util;
exports.setWebGLContext = setWebGLContext;
exports.version_webgl = version;
exports.webgl = webgl;
exports.webgl_util = webgl_util;
//# sourceMappingURL=tf-backend-webgl.node.js.map
