"use strict";var g=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var v=g(function(w,o){
var m=require('@stdlib/assert-is-ndarray-like/dist'),f=require('@stdlib/assert-is-integer/dist').isPrimitive,d=require('@stdlib/ndarray-base-normalize-index/dist'),h=require('@stdlib/ndarray-shape/dist'),u=require('@stdlib/error-tools-fmtprodmsg/dist');function l(e){var r,t,a,i,s,n;if(!m(e))throw new TypeError(u('null4f',e));if(i=h(e),s=i.length,r=arguments.length-1,r<s)throw new RangeError("invalid invocation. Insufficient arguments. Array shape: (%s). Number of indices: %u.",i.join(","),r);if(r>s)throw new RangeError("invalid invocation. Too many arguments. Array shape: (%s). Number of indices: %u.",i.join(","),r);for(t=[],n=1;n<=r;n++){if(a=arguments[n],!f(a))throw new TypeError(u("invalid argument. Index arguments must be integers. Value: `%s`.",a));if(a=d(a,i[n-1]-1),a===-1)return;t.push(a)}return e.get.apply(e,t)}o.exports=l
});var p=v();module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
