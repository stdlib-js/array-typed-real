// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(o):n(o)+e,i&&(e="-"+e)),e}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(e){var r,n,u;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===e.specifier||10!==r)&&(u=4294967295+u+1),u<0?(n=(-u).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=u.toString(r),u||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===a.call(e.specifier)?a.call(n):o.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function f(e){return"string"==typeof e}var l=Math.abs,c=String.prototype.toLowerCase,s=String.prototype.toUpperCase,y=String.prototype.replace,h=/e\+(\d)$/,p=/e-(\d)$/,g=/^(\d+)$/,m=/^(\d+)e/,w=/\.0$/,b=/\.0*e/,d=/(\..*[^0])0*e/;function v(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":l(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=y.call(n,d,"$1e"),n=y.call(n,b,"e"),n=y.call(n,w,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=y.call(n,h,"e+0$1"),n=y.call(n,p,"e-0$1"),e.alternate&&(n=y.call(n,g,"$1."),n=y.call(n,m,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===s.call(e.specifier)?s.call(n):c.call(n)}function E(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function T(e,r,t){var n=r-e.length;return n<0?e:e=t?e+E(n):E(n)+e}var A=String.fromCharCode,_=isNaN,x=Array.isArray;function j(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function k(e){var r,t,n,o,a,l,c,s,y;if(!x(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(l="",c=1,s=0;s<e.length;s++)if(f(n=e[s]))l+=n;else{if(r=void 0!==n.precision,!(n=j(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,y=0;y<t.length;y++)switch(o=t.charAt(y)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,_(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,_(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!_(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=_(a)?String(n.arg):A(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=v(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=T(n.arg,n.width,n.padRight)),l+=n.arg||"",c+=1}return l}var V=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function S(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function L(e){var r,t,n,i;for(t=[],i=0,n=V.exec(e);n;)(r=e.slice(i,V.lastIndex-n[0].length)).length&&t.push(r),t.push(S(n)),i=V.lastIndex,n=V.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function R(e){return"string"==typeof e}function B(e){var r,t,n;if(!R(e))throw new TypeError(B("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=L(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return k.apply(null,t)}var I,C=Object.prototype,O=C.toString,F=C.__defineGetter__,M=C.__defineSetter__,N=C.__lookupGetter__,U=C.__lookupSetter__;I=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===O.call(e))throw new TypeError(B("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===O.call(t))throw new TypeError(B("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(N.call(e,r)||U.call(e,r)?(n=e.__proto__,e.__proto__=C,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&F&&F.call(e,r,t.get),a&&M&&M.call(e,r,t.set),e};var P=I;function Y(e,r,t){P(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function W(e){return"string"==typeof e}var $="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function G(){return $&&"symbol"==typeof Symbol.toStringTag}var Z=Object.prototype.toString,X=Object.prototype.hasOwnProperty;function J(e,r){return null!=e&&X.call(e,r)}var z="function"==typeof Symbol?Symbol:void 0,D="function"==typeof z?z.toStringTag:"",K=G()?function(e){var r,t,n;if(null==e)return Z.call(e);t=e[D],r=J(e,D);try{e[D]=void 0}catch(r){return Z.call(e)}return n=Z.call(e),r?e[D]=t:delete e[D],n}:function(e){return Z.call(e)},q=String.prototype.valueOf,H=G();function Q(e){return"object"==typeof e&&(e instanceof String||(H?function(e){try{return q.call(e),!0}catch(e){return!1}}(e):"[object String]"===K(e)))}function ee(e){return W(e)||Q(e)}function re(){var e,r=arguments,t=r[0],n="https://stdlib.io/e/"+t+"?";for(e=1;e<r.length;e++)n+="&arg[]="+encodeURIComponent(r[e]);return n}Y(ee,"isPrimitive",W),Y(ee,"isObject",Q);var te="function"==typeof Float64Array,ne="function"==typeof Float64Array?Float64Array:null,ie="function"==typeof Float64Array?Float64Array:void 0,oe=function(){var e,r,t;if("function"!=typeof ne)return!1;try{r=new ne([1,3.14,-3.14,NaN]),t=r,e=(te&&t instanceof Float64Array||"[object Float64Array]"===K(t))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?ie:function(){throw new Error("not implemented")},ae="function"==typeof Float32Array,ue=Number.POSITIVE_INFINITY,fe="function"==typeof Float32Array?Float32Array:null,le="function"==typeof Float32Array?Float32Array:void 0,ce=function(){var e,r,t;if("function"!=typeof fe)return!1;try{r=new fe([1,3.14,-3.14,5e40]),t=r,e=(ae&&t instanceof Float32Array||"[object Float32Array]"===K(t))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===ue}catch(r){e=!1}return e}()?le:function(){throw new Error("not implemented")},se="function"==typeof Int16Array,ye="function"==typeof Int16Array?Int16Array:null,he="function"==typeof Int16Array?Int16Array:void 0,pe=function(){var e,r,t;if("function"!=typeof ye)return!1;try{r=new ye([1,3.14,-3.14,32768]),t=r,e=(se&&t instanceof Int16Array||"[object Int16Array]"===K(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-32768===r[3]}catch(r){e=!1}return e}()?he:function(){throw new Error("not implemented")},ge="function"==typeof Int32Array,me="function"==typeof Int32Array?Int32Array:null,we="function"==typeof Int32Array?Int32Array:void 0,be=function(){var e,r,t;if("function"!=typeof me)return!1;try{r=new me([1,3.14,-3.14,2147483648]),t=r,e=(ge&&t instanceof Int32Array||"[object Int32Array]"===K(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-2147483648===r[3]}catch(r){e=!1}return e}()?we:function(){throw new Error("not implemented")},de="function"==typeof Int8Array,ve="function"==typeof Int8Array?Int8Array:null,Ee="function"==typeof Int8Array?Int8Array:void 0,Te=function(){var e,r,t;if("function"!=typeof ve)return!1;try{r=new ve([1,3.14,-3.14,128]),t=r,e=(de&&t instanceof Int8Array||"[object Int8Array]"===K(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-128===r[3]}catch(r){e=!1}return e}()?Ee:function(){throw new Error("not implemented")},Ae="function"==typeof Uint16Array,_e="function"==typeof Uint16Array?Uint16Array:null,xe="function"==typeof Uint16Array?Uint16Array:void 0,je=function(){var e,r,t;if("function"!=typeof _e)return!1;try{r=new _e(r=[1,3.14,-3.14,65536,65537]),t=r,e=(Ae&&t instanceof Uint16Array||"[object Uint16Array]"===K(t))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?xe:function(){throw new Error("not implemented")},ke="function"==typeof Uint32Array,Ve="function"==typeof Uint32Array?Uint32Array:null,Se="function"==typeof Uint32Array?Uint32Array:void 0,Le=function(){var e,r,t;if("function"!=typeof Ve)return!1;try{r=new Ve(r=[1,3.14,-3.14,4294967296,4294967297]),t=r,e=(ke&&t instanceof Uint32Array||"[object Uint32Array]"===K(t))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?Se:function(){throw new Error("not implemented")},Re="function"==typeof Uint8Array,Be="function"==typeof Uint8Array?Uint8Array:null,Ie="function"==typeof Uint8Array?Uint8Array:void 0,Ce=function(){var e,r,t;if("function"!=typeof Be)return!1;try{r=new Be(r=[1,3.14,-3.14,256,257]),t=r,e=(Re&&t instanceof Uint8Array||"[object Uint8Array]"===K(t))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?Ie:function(){throw new Error("not implemented")},Oe="function"==typeof Uint8ClampedArray,Fe="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null,Me="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0,Ne=function(){var e,r,t;if("function"!=typeof Fe)return!1;try{r=new Fe([-1,0,1,3.14,4.99,255,256]),t=r,e=(Oe&&t instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===K(t))&&0===r[0]&&0===r[1]&&1===r[2]&&3===r[3]&&5===r[4]&&255===r[5]&&255===r[6]}catch(r){e=!1}return e}()?Me:function(){throw new Error("not implemented")};function Ue(e){return"number"==typeof e}var Pe=Number,Ye=Pe.prototype.toString,We=G();function $e(e){return"object"==typeof e&&(e instanceof Pe||(We?function(e){try{return Ye.call(e),!0}catch(e){return!1}}(e):"[object Number]"===K(e)))}function Ge(e){return Ue(e)||$e(e)}Y(Ge,"isPrimitive",Ue),Y(Ge,"isObject",$e);var Ze=Pe.NEGATIVE_INFINITY,Xe=Math.floor;function Je(e){return Xe(e)===e}function ze(e){return e<ue&&e>Ze&&Je(e)}function De(e){return Ue(e)&&ze(e)}function Ke(e){return $e(e)&&ze(e.valueOf())}function qe(e){return De(e)||Ke(e)}function He(e){return De(e)&&e>=0}function Qe(e){return Ke(e)&&e.valueOf()>=0}function er(e){return He(e)||Qe(e)}function rr(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&Je(e.length)&&e.length>=0&&e.length<=4294967295}function tr(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&Je(e.length)&&e.length>=0&&e.length<=9007199254740991}Y(qe,"isPrimitive",De),Y(qe,"isObject",Ke),Y(er,"isPrimitive",He),Y(er,"isObject",Qe);var nr="function"==typeof ArrayBuffer;function ir(e){return nr&&e instanceof ArrayBuffer||"[object ArrayBuffer]"===K(e)}var or=Array.isArray?Array.isArray:function(e){return"[object Array]"===K(e)};function ar(e){return"object"==typeof e&&null!==e&&!or(e)}var ur=/./;function fr(e){return"boolean"==typeof e}var lr=Boolean,cr=Boolean.prototype.toString,sr=G();function yr(e){return"object"==typeof e&&(e instanceof lr||(sr?function(e){try{return cr.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===K(e)))}function hr(e){return fr(e)||yr(e)}function pr(){return new Function("return this;")()}Y(hr,"isPrimitive",fr),Y(hr,"isObject",yr);var gr="object"==typeof self?self:null,mr="object"==typeof window?window:null,wr="object"==typeof globalThis?globalThis:null,br=function(e){if(arguments.length){if(!fr(e))throw new TypeError(B("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return pr()}if(wr)return wr;if(gr)return gr;if(mr)return mr;throw new Error("unexpected error. Unable to resolve global object.")}(),dr=br.document&&br.document.childNodes,vr=Int8Array;function Er(){return/^\s*function\s*([^(]*)/i}var Tr=/^\s*function\s*([^(]*)/i;function Ar(e){return null!==e&&"object"==typeof e}function _r(e){var r,t,n,i;if(("Object"===(t=K(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=Tr.exec(n.toString()))return r[1]}return Ar(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}Y(Er,"REGEXP",Tr),Y(Ar,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(B("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!or(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(Ar));var xr="function"==typeof ur||"object"==typeof vr||"function"==typeof dr?function(e){return _r(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?_r(e).toLowerCase():r};function jr(e){return"function"===xr(e)}function kr(e,r){if(!(this instanceof kr))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Ue(e))throw new TypeError(B("invalid argument. Real component must be a number. Value: `%s`.",e));if(!Ue(r))throw new TypeError(B("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return P(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:e}),P(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:r}),this}Y(kr,"BYTES_PER_ELEMENT",8),Y(kr.prototype,"BYTES_PER_ELEMENT",8),Y(kr.prototype,"byteLength",16),Y(kr.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),Y(kr.prototype,"toJSON",(function(){var e={type:"Complex128"};return e.re=this.re,e.im=this.im,e}));var Vr="function"==typeof Math.fround?Math.fround:null,Sr=new ce(1),Lr="function"==typeof Vr?Vr:function(e){return Sr[0]=e,Sr[0]};function Rr(e,r){if(!(this instanceof Rr))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Ue(e))throw new TypeError(B("invalid argument. Real component must be a number. Value: `%s`.",e));if(!Ue(r))throw new TypeError(B("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return P(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:Lr(e)}),P(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:Lr(r)}),this}function Br(e){return e instanceof kr||e instanceof Rr||"object"==typeof e&&null!==e&&"number"==typeof e.re&&"number"==typeof e.im}function Ir(e){return Je(e/2)}function Cr(){return"function"==typeof z&&"symbol"==typeof z("foo")&&J(z,"iterator")&&"symbol"==typeof z.iterator}Y(Rr,"BYTES_PER_ELEMENT",4),Y(Rr.prototype,"BYTES_PER_ELEMENT",4),Y(Rr.prototype,"byteLength",8),Y(Rr.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),Y(Rr.prototype,"toJSON",(function(){var e={type:"Complex64"};return e.re=this.re,e.im=this.im,e}));var Or=Cr()?Symbol.iterator:null;function Fr(e,r,t){P(e,r,{configurable:!1,enumerable:!1,get:t})}function Mr(e){return e.re}function Nr(e){return e.im}function Ur(e,r){return new ce(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*r,2*(e.length-r))}function Pr(e,r){return new oe(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*r,2*(e.length-r))}var Yr={float64:function(e,r){return e[r]},float32:function(e,r){return e[r]},int32:function(e,r){return e[r]},int16:function(e,r){return e[r]},int8:function(e,r){return e[r]},uint32:function(e,r){return e[r]},uint16:function(e,r){return e[r]},uint8:function(e,r){return e[r]},uint8c:function(e,r){return e[r]},generic:function(e,r){return e[r]},default:function(e,r){return e[r]}};function Wr(e){var r=Yr[e];return"function"==typeof r?r:Yr.default}var $r={complex128:function(e,r){return e.get(r)},complex64:function(e,r){return e.get(r)},default:function(e,r){return e.get(r)}};function Gr(e){var r=$r[e];return"function"==typeof r?r:$r.default}function Zr(e){var r,t,n;for(r=[];!(t=e.next()).done;)if(rr(n=t.value)&&n.length>=2)r.push(n[0],n[1]);else{if(!Br(n))return new TypeError(B("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));r.push(Mr(n),Nr(n))}return r}function Xr(e,r,t){var n,i,o,a;for(n=[],a=-1;!(i=e.next()).done;)if(a+=1,rr(o=r.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!Br(o))return new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(Mr(o),Nr(o))}return n}function Jr(e,r){var t,n,i,o;for(t=r.length,o=0,i=0;i<t;i++){if(!Br(n=r[i]))return null;e[o]=Mr(n),e[o+1]=Nr(n),o+=2}return e}var zr=2*ce.BYTES_PER_ELEMENT,Dr=Cr();function Kr(e){return e instanceof et||"object"==typeof e&&null!==e&&("Complex64Array"===e.constructor.name||"Complex128Array"===e.constructor.name)&&"number"==typeof e._length&&"object"==typeof e._buffer}function qr(e){return e===et||"Complex128Array"===e.name}function Hr(e){return"object"==typeof e&&null!==e&&"Complex64Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===zr}function Qr(e){return"object"==typeof e&&null!==e&&"Complex128Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===2*zr}function et(){var e,r,t,n;if(r=arguments.length,!(this instanceof et))return 0===r?new et:1===r?new et(arguments[0]):2===r?new et(arguments[0],arguments[1]):new et(arguments[0],arguments[1],arguments[2]);if(0===r)t=new ce(0);else if(1===r)if(He(arguments[0]))t=new ce(2*arguments[0]);else if(tr(arguments[0]))if((n=(t=arguments[0]).length)&&or(t)&&Br(t[0])){if(null===(t=Jr(new ce(2*n),t))){if(!Ir(n))throw new RangeError(B("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new ce(arguments[0])}}else{if(Hr(t))t=Ur(t,0);else if(Qr(t))t=Pr(t,0);else if(!Ir(n))throw new RangeError(B("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new ce(t)}else if(ir(arguments[0])){if(!Je((t=arguments[0]).byteLength/zr))throw new RangeError(B("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",zr,t.byteLength));t=new ce(t)}else{if(!ar(arguments[0]))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(t=arguments[0],!1===Dr)throw new TypeError(B("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!jr(t[Or]))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(!jr((t=t[Or]()).next))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if((t=Zr(t))instanceof Error)throw t;t=new ce(t)}else{if(!ir(t=arguments[0]))throw new TypeError(B("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!He(e=arguments[1]))throw new TypeError(B("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",e));if(!Je(e/zr))throw new RangeError(B("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",zr,e));if(2===r){if(!Je((n=t.byteLength-e)/zr))throw new RangeError(B("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",zr,n));t=new ce(t,e)}else{if(!He(n=arguments[2]))throw new TypeError(B("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*zr>t.byteLength-e)throw new RangeError(B("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*zr));t=new ce(t,e,2*n)}}return Y(this,"_buffer",t),Y(this,"_length",t.length/2),this}function rt(e){return e.re}function tt(e){return e.im}function nt(e){var r,t,n;for(r=[];!(t=e.next()).done;)if(rr(n=t.value)&&n.length>=2)r.push(n[0],n[1]);else{if(!Br(n))return new TypeError(B("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));r.push(rt(n),tt(n))}return r}function it(e,r,t){var n,i,o,a;for(n=[],a=-1;!(i=e.next()).done;)if(a+=1,rr(o=r.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!Br(o))return new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(rt(o),tt(o))}return n}function ot(e,r){var t,n,i,o;for(t=r.length,o=0,i=0;i<t;i++){if(!Br(n=r[i]))return null;e[o]=rt(n),e[o+1]=tt(n),o+=2}return e}Y(et,"BYTES_PER_ELEMENT",zr),Y(et,"name","Complex64Array"),Y(et,"from",(function(e){var r,t,n,i,o,a,u,f,l,c,s,y;if(!jr(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!qr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!jr(n=arguments[1]))throw new TypeError(B("invalid argument. Second argument must be a function. Value: `%s`.",n));t>2&&(r=arguments[2])}if(Kr(e)){if(f=e.length,n){for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Br(c=n.call(r,e.get(s),s)))o[y]=Mr(c),o[y+1]=Nr(c);else{if(!(rr(c)&&c.length>=2))throw new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(e)}if(tr(e)){if(n){for(f=e.length,u=e.get&&e.set?Gr("default"):Wr("default"),s=0;s<f;s++)if(!Br(u(e,s))){l=!0;break}if(l){if(!Ir(f))throw new RangeError(B("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,f));for(o=(i=new this(f/2))._buffer,s=0;s<f;s++)o[s]=n.call(r,u(e,s),s);return i}for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Br(c=n.call(r,u(e,s),s)))o[y]=Mr(c),o[y+1]=Nr(c);else{if(!(rr(c)&&c.length>=2))throw new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(e)}if(ar(e)&&Dr&&jr(e[Or])){if(!jr((o=e[Or]()).next))throw new TypeError(B("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if((a=n?Xr(o,n,r):Zr(o))instanceof Error)throw a;for(o=(i=new this(f=a.length/2))._buffer,s=0;s<f;s++)o[s]=a[s];return i}throw new TypeError(B("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))})),Y(et,"of",(function(){var e,r;if(!jr(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!qr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)})),Fr(et.prototype,"buffer",(function(){return this._buffer.buffer})),Fr(et.prototype,"byteLength",(function(){return this._buffer.byteLength})),Fr(et.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),Y(et.prototype,"BYTES_PER_ELEMENT",et.BYTES_PER_ELEMENT),Y(et.prototype,"copyWithin",(function(e,r){if(!Kr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*e,2*r):this._buffer.copyWithin(2*e,2*r,2*arguments[2]),this})),Y(et.prototype,"entries",(function(){var e,r,t,n,i,o,a;if(!Kr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,e=this._buffer,n=this._length,o=-1,a=-2,Y(t={},"next",(function(){var r;return o+=1,i||o>=n?{done:!0}:(r=new Rr(e[a+=2],e[a+1]),{value:[o,r],done:!1})})),Y(t,"return",(function(e){return i=!0,arguments.length?{value:e,done:!0}:{done:!0}})),Or&&Y(t,Or,(function(){return r.entries()})),t})),Y(et.prototype,"get",(function(e){var r;if(!Kr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!He(e))throw new TypeError(B("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return new Rr((r=this._buffer)[e*=2],r[e+1])})),Fr(et.prototype,"length",(function(){return this._length})),Y(et.prototype,"set",(function(e){var r,t,n,i,o,a,u,f,l;if(!Kr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!He(t=arguments[1]))throw new TypeError(B("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(Br(e)){if(t>=this._length)throw new RangeError(B("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));return n[t*=2]=Mr(e),void(n[t+1]=Nr(e))}if(Kr(e)){if(t+(a=e._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e._buffer,l=n.byteOffset+t*zr,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new ce(r.length),f=0;f<r.length;f++)i[f]=r[f];r=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2}else{if(!tr(e))throw new TypeError(B("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e));for(a=e.length,f=0;f<a;f++)if(!Br(e[f])){o=!0;break}if(o){if(!Ir(a))throw new RangeError(B("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",a));if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e,l=n.byteOffset+t*zr,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new ce(a),f=0;f<a;f++)i[f]=r[f];r=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=e[f],n[t]=Mr(u),n[t+1]=Nr(u),t+=2}}));var at=2*oe.BYTES_PER_ELEMENT,ut=Cr();function ft(e){return e instanceof yt||"object"==typeof e&&null!==e&&("Complex64Array"===e.constructor.name||"Complex128Array"===e.constructor.name)&&"number"==typeof e._length&&"object"==typeof e._buffer}function lt(e){return e===yt||"Complex64Array"===e.name}function ct(e){return"object"==typeof e&&null!==e&&"Complex64Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===at/2}function st(e){return"object"==typeof e&&null!==e&&"Complex128Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===at}function yt(){var e,r,t,n;if(r=arguments.length,!(this instanceof yt))return 0===r?new yt:1===r?new yt(arguments[0]):2===r?new yt(arguments[0],arguments[1]):new yt(arguments[0],arguments[1],arguments[2]);if(0===r)t=new oe(0);else if(1===r)if(He(arguments[0]))t=new oe(2*arguments[0]);else if(tr(arguments[0]))if((n=(t=arguments[0]).length)&&or(t)&&Br(t[0])){if(null===(t=ot(new oe(2*n),t))){if(!Ir(n))throw new RangeError(B("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new oe(arguments[0])}}else{if(ct(t))t=Ur(t,0);else if(st(t))t=Pr(t,0);else if(!Ir(n))throw new RangeError(B("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new oe(t)}else if(ir(arguments[0])){if(!Je((t=arguments[0]).byteLength/at))throw new RangeError(B("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",at,t.byteLength));t=new oe(t)}else{if(!ar(arguments[0]))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(t=arguments[0],!1===ut)throw new TypeError(B("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!jr(t[Or]))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(!jr((t=t[Or]()).next))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if((t=nt(t))instanceof Error)throw t;t=new oe(t)}else{if(!ir(t=arguments[0]))throw new TypeError(B("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!He(e=arguments[1]))throw new TypeError(B("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",e));if(!Je(e/at))throw new RangeError(B("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",at,e));if(2===r){if(!Je((n=t.byteLength-e)/at))throw new RangeError(B("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",at,n));t=new oe(t,e)}else{if(!He(n=arguments[2]))throw new TypeError(B("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*at>t.byteLength-e)throw new RangeError(B("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*at));t=new oe(t,e,2*n)}}return Y(this,"_buffer",t),Y(this,"_length",t.length/2),this}Y(yt,"BYTES_PER_ELEMENT",at),Y(yt,"name","Complex128Array"),Y(yt,"from",(function(e){var r,t,n,i,o,a,u,f,l,c,s,y;if(!jr(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!lt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!jr(n=arguments[1]))throw new TypeError(B("invalid argument. Second argument must be a function. Value: `%s`.",n));t>2&&(r=arguments[2])}if(ft(e)){if(f=e.length,n){for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Br(c=n.call(r,e.get(s),s)))o[y]=rt(c),o[y+1]=tt(c);else{if(!(rr(c)&&c.length>=2))throw new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(e)}if(tr(e)){if(n){for(f=e.length,u=e.get&&e.set?Gr("default"):Wr("default"),s=0;s<f;s++)if(!Br(u(e,s))){l=!0;break}if(l){if(!Ir(f))throw new RangeError(B("invalid argument. First argument must have a length which is a multiple of two. Length: `%u`.",f));for(o=(i=new this(f/2))._buffer,s=0;s<f;s++)o[s]=n.call(r,u(e,s),s);return i}for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Br(c=n.call(r,u(e,s),s)))o[y]=rt(c),o[y+1]=tt(c);else{if(!(rr(c)&&c.length>=2))throw new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(e)}if(ar(e)&&ut&&jr(e[Or])){if(!jr((o=e[Or]()).next))throw new TypeError(B("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if((a=n?it(o,n,r):nt(o))instanceof Error)throw a;for(o=(i=new this(f=a.length/2))._buffer,s=0;s<f;s++)o[s]=a[s];return i}throw new TypeError(B("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))})),Y(yt,"of",(function(){var e,r;if(!jr(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!lt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)})),Fr(yt.prototype,"buffer",(function(){return this._buffer.buffer})),Fr(yt.prototype,"byteLength",(function(){return this._buffer.byteLength})),Fr(yt.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),Y(yt.prototype,"BYTES_PER_ELEMENT",yt.BYTES_PER_ELEMENT),Y(yt.prototype,"copyWithin",(function(e,r){if(!ft(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*e,2*r):this._buffer.copyWithin(2*e,2*r,2*arguments[2]),this})),Y(yt.prototype,"entries",(function(){var e,r,t,n,i,o,a;if(!ft(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,e=this._buffer,n=this._length,o=-1,a=-2,Y(t={},"next",(function(){var r;return o+=1,i||o>=n?{done:!0}:(r=new kr(e[a+=2],e[a+1]),{value:[o,r],done:!1})})),Y(t,"return",(function(e){return i=!0,arguments.length?{value:e,done:!0}:{done:!0}})),Or&&Y(t,Or,(function(){return r.entries()})),t})),Y(yt.prototype,"get",(function(e){var r;if(!ft(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!He(e))throw new TypeError(B("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return new kr((r=this._buffer)[e*=2],r[e+1])})),Fr(yt.prototype,"length",(function(){return this._length})),Y(yt.prototype,"set",(function(e){var r,t,n,i,o,a,u,f,l;if(!ft(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!He(t=arguments[1]))throw new TypeError(B("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(Br(e)){if(t>=this._length)throw new RangeError(B("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));return n[t*=2]=rt(e),void(n[t+1]=tt(e))}if(ft(e)){if(t+(a=e._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e._buffer,l=n.byteOffset+t*at,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new oe(r.length),f=0;f<r.length;f++)i[f]=r[f];r=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2}else{if(!tr(e))throw new TypeError(B("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e));for(a=e.length,f=0;f<a;f++)if(!Br(e[f])){o=!0;break}if(o){if(!Ir(a))throw new RangeError(B("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",a));if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e,l=n.byteOffset+t*at,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new oe(a),f=0;f<a;f++)i[f]=r[f];r=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=e[f],n[t]=rt(u),n[t+1]=tt(u),t+=2}}));var ht={float64:oe,float32:ce,int16:pe,int32:be,int8:Te,uint16:je,uint32:Le,uint8:Ce,uint8c:Ne,complex64:et,complex128:yt};function pt(e){return ht[e]||null}return function(){var e,r,t;if(null===(t=pt(r=(e=arguments.length)&&W(arguments[e-1])?arguments[e-=1]:"float64")))throw new TypeError(re("02D2Y,KZ",r));return e<=0?new t(0):1===e?new t(arguments[0]):2===e?new t(arguments[0],arguments[1]):new t(arguments[0],arguments[1],arguments[2])}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).realarray=r();
//# sourceMappingURL=browser.js.map
