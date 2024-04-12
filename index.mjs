// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-ndarray-like@v0.2.1-esm/index.mjs";import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-normalize-index@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-shape@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";function t(t){var o,d,a,m,h,p;if(!r(t))throw new TypeError(n("1q34f",t));if(h=(m=i(t)).length,(o=arguments.length-1)<h)throw new RangeError("invalid invocation. Insufficient arguments. Array shape: (%s). Number of indices: %u.",m.join(","),o);if(o>h)throw new RangeError("invalid invocation. Too many arguments. Array shape: (%s). Number of indices: %u.",m.join(","),o);for(d=[],p=1;p<=o;p++){if(!e(a=arguments[p]))throw new TypeError(n("1q3FR",a));if(-1===(a=s(a,m[p-1]-1)))return;d.push(a)}return t.get.apply(t,d)}export{t as default};
//# sourceMappingURL=index.mjs.map
