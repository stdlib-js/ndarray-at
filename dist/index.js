"use strict";var g=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var v=g(function(w,o){"use strict";var m=require("@stdlib/assert-is-ndarray-like"),f=require("@stdlib/assert-is-integer").isPrimitive,d=require("@stdlib/ndarray-base-normalize-index"),h=require("@stdlib/ndarray-shape"),u=require("@stdlib/string-format");function l(e){var r,t,a,i,s,n;if(!m(e))throw new TypeError(u("invalid argument. First argument must be an ndarray. Value: `%s`.",e));if(i=h(e),s=i.length,r=arguments.length-1,r<s)throw new RangeError("invalid invocation. Insufficient arguments. Array shape: (%s). Number of indices: %u.",i.join(","),r);if(r>s)throw new RangeError("invalid invocation. Too many arguments. Array shape: (%s). Number of indices: %u.",i.join(","),r);for(t=[],n=1;n<=r;n++){if(a=arguments[n],!f(a))throw new TypeError(u("invalid argument. Index arguments must be integers. Value: `%s`.",a));if(a=d(a,i[n-1]-1),a===-1)return;t.push(a)}return e.get.apply(e,t)}o.exports=l});var p=v();module.exports=p;
/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
