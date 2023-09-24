// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/array-typed-ctors@esm/index.mjs";function e(){var e,n,i;if(n=(e=arguments.length)&&t(arguments[e-1])?arguments[e-=1]:"float64",null===(i=s(n)))throw new TypeError(r("02D2Y,KZ",n));return e<=0?new i(0):1===e?new i(arguments[0]):2===e?new i(arguments[0],arguments[1]):new i(arguments[0],arguments[1],arguments[2])}export{e as default};
//# sourceMappingURL=index.mjs.map
