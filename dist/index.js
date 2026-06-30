"use strict";var m=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var g=m(function(y,v){
var f=require('@stdlib/assert-is-ndarray-like/dist'),d=require('@stdlib/assert-is-integer/dist').isPrimitive,h=require('@stdlib/ndarray-base-normalize-index/dist'),l=require('@stdlib/ndarray-shape/dist'),o=require('@stdlib/array-base-join/dist'),s=require('@stdlib/error-tools-fmtprodmsg/dist');function p(e){var r,i,a,n,u,t;if(!f(e))throw new TypeError(s('1q34f',e));if(n=l(e),u=n.length,r=arguments.length-1,r<u)throw new RangeError(s('1q3KY',o(n,","),r));if(r>u)throw new RangeError(s('1q3KZ',o(n,","),r));for(i=[],t=1;t<=r;t++){if(a=arguments[t],!d(a))throw new TypeError(s('1q3FR',a));if(a=h(a,n[t-1]-1),a===-1)return;i.push(a)}return e.get.apply(e,i)}v.exports=p
});var c=g();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
