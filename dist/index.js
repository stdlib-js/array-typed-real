"use strict";var u=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var n=u(function(d,a){
var i=require('@stdlib/assert-is-string/dist').isPrimitive,s=require('@stdlib/array-typed-ctors/dist'),g=require('@stdlib/array-defaults/dist'),m=require('@stdlib/error-tools-fmtprodmsg/dist'),v=g.get("dtypes.real");function o(){var r,e,t;if(r=arguments.length,r&&i(arguments[r-1])?(r-=1,e=arguments[r]):e=v,t=s(e),t===null)throw new TypeError(m('02D2Y',e));return r<=0?new t(0):r===1?new t(arguments[0]):r===2?new t(arguments[0],arguments[1]):new t(arguments[0],arguments[1],arguments[2])}a.exports=o
});var l=n();module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
