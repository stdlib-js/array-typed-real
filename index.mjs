// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/array-typed-ctors@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/array-defaults@v0.3.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";var n=e.get("dtypes.real");function d(){var e,d,i;if(d=(e=arguments.length)&&t(arguments[e-1])?arguments[e-=1]:n,null===(i=s(d)))throw new TypeError(r("02D2Y",d));return e<=0?new i(0):1===e?new i(arguments[0]):2===e?new i(arguments[0],arguments[1]):new i(arguments[0],arguments[1],arguments[2])}export{d as default};
//# sourceMappingURL=index.mjs.map
