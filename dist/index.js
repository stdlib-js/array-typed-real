"use strict";var u=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var n=u(function(f,a){
var i=require('@stdlib/assert-is-string/dist').isPrimitive,s=require('@stdlib/error-tools-fmtprodmsg/dist'),g=require('@stdlib/array-typed-ctors/dist');function m(){var r,e,t;if(r=arguments.length,r&&i(arguments[r-1])?(r-=1,e=arguments[r]):e="float64",t=g(e),t===null)throw new TypeError(s('02D2Y',e));return r<=0?new t(0):r===1?new t(arguments[0]):r===2?new t(arguments[0],arguments[1]):new t(arguments[0],arguments[1],arguments[2])}a.exports=m
});var o=n();module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
