// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,t=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,a=n.__defineSetter__,u=n.__lookupGetter__,f=n.__lookupSetter__;r=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var l,c,y,s;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(u.call(e,r)||f.call(e,r)?(l=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=l):e[r]=t.value),y="get"in t,s="set"in t,c&&(y||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(e,r,t.get),s&&a&&a.call(e,r,t.set),e};var l=r;function c(e,r,t){l(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function y(e){return"string"==typeof e}var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function h(){return s&&"symbol"==typeof Symbol.toStringTag}var m=Object.prototype.toString;var p=Object.prototype.hasOwnProperty;function g(e,r){return null!=e&&p.call(e,r)}var w="function"==typeof Symbol?Symbol.toStringTag:"";var b=h()?function(e){var r,t,n;if(null==e)return m.call(e);t=e[w],r=g(e,w);try{e[w]=void 0}catch(r){return m.call(e)}return n=m.call(e),r?e[w]=t:delete e[w],n}:function(e){return m.call(e)},v=String.prototype.valueOf;var d=h();function E(e){return"object"==typeof e&&(e instanceof String||(d?function(e){try{return v.call(e),!0}catch(e){return!1}}(e):"[object String]"===b(e)))}function _(e){return y(e)||E(e)}function A(){var e,r=arguments,t=r[0],n="https://stdlib.io/e/"+t+"?";for(e=1;e<r.length;e++)n+="&arg[]="+encodeURIComponent(r[e]);return n}c(_,"isPrimitive",y),c(_,"isObject",E);var T="function"==typeof Float64Array;var j="function"==typeof Float64Array?Float64Array:null;var x="function"==typeof Float64Array?Float64Array:void 0;var B=function(){var e,r,t;if("function"!=typeof j)return!1;try{r=new j([1,3.14,-3.14,NaN]),t=r,e=(T&&t instanceof Float64Array||"[object Float64Array]"===b(t))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?x:function(){throw new Error("not implemented")},L="function"==typeof Float32Array;var S=Number.POSITIVE_INFINITY,R="function"==typeof Float32Array?Float32Array:null;var V="function"==typeof Float32Array?Float32Array:void 0;var k=function(){var e,r,t;if("function"!=typeof R)return!1;try{r=new R([1,3.14,-3.14,5e40]),t=r,e=(L&&t instanceof Float32Array||"[object Float32Array]"===b(t))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===S}catch(r){e=!1}return e}()?V:function(){throw new Error("not implemented")},I="function"==typeof Int16Array;var O="function"==typeof Int16Array?Int16Array:null;var M="function"==typeof Int16Array?Int16Array:void 0;var C=function(){var e,r,t;if("function"!=typeof O)return!1;try{r=new O([1,3.14,-3.14,32768]),t=r,e=(I&&t instanceof Int16Array||"[object Int16Array]"===b(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-32768===r[3]}catch(r){e=!1}return e}()?M:function(){throw new Error("not implemented")},N="function"==typeof Int32Array;var P="function"==typeof Int32Array?Int32Array:null;var U="function"==typeof Int32Array?Int32Array:void 0;var F=function(){var e,r,t;if("function"!=typeof P)return!1;try{r=new P([1,3.14,-3.14,2147483648]),t=r,e=(N&&t instanceof Int32Array||"[object Int32Array]"===b(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-2147483648===r[3]}catch(r){e=!1}return e}()?U:function(){throw new Error("not implemented")},Y="function"==typeof Int8Array;var W="function"==typeof Int8Array?Int8Array:null;var G="function"==typeof Int8Array?Int8Array:void 0;var J=function(){var e,r,t;if("function"!=typeof W)return!1;try{r=new W([1,3.14,-3.14,128]),t=r,e=(Y&&t instanceof Int8Array||"[object Int8Array]"===b(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-128===r[3]}catch(r){e=!1}return e}()?G:function(){throw new Error("not implemented")},X="function"==typeof Uint16Array;var q="function"==typeof Uint16Array?Uint16Array:null;var z="function"==typeof Uint16Array?Uint16Array:void 0;var D=function(){var e,r,t;if("function"!=typeof q)return!1;try{r=new q(r=[1,3.14,-3.14,65536,65537]),t=r,e=(X&&t instanceof Uint16Array||"[object Uint16Array]"===b(t))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?z:function(){throw new Error("not implemented")},H="function"==typeof Uint32Array;var K="function"==typeof Uint32Array?Uint32Array:null;var Q="function"==typeof Uint32Array?Uint32Array:void 0;var Z=function(){var e,r,t;if("function"!=typeof K)return!1;try{r=new K(r=[1,3.14,-3.14,4294967296,4294967297]),t=r,e=(H&&t instanceof Uint32Array||"[object Uint32Array]"===b(t))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?Q:function(){throw new Error("not implemented")},$="function"==typeof Uint8Array;var ee="function"==typeof Uint8Array?Uint8Array:null;var re="function"==typeof Uint8Array?Uint8Array:void 0;var te=function(){var e,r,t;if("function"!=typeof ee)return!1;try{r=new ee(r=[1,3.14,-3.14,256,257]),t=r,e=($&&t instanceof Uint8Array||"[object Uint8Array]"===b(t))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?re:function(){throw new Error("not implemented")},ne="function"==typeof Uint8ClampedArray;var oe="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;var ie="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0;var ae=function(){var e,r,t;if("function"!=typeof oe)return!1;try{r=new oe([-1,0,1,3.14,4.99,255,256]),t=r,e=(ne&&t instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===b(t))&&0===r[0]&&0===r[1]&&1===r[2]&&3===r[3]&&5===r[4]&&255===r[5]&&255===r[6]}catch(r){e=!1}return e}()?ie:function(){throw new Error("not implemented")};function ue(e){return"number"==typeof e}var fe=Number,le=fe.prototype.toString;var ce=h();function ye(e){return"object"==typeof e&&(e instanceof fe||(ce?function(e){try{return le.call(e),!0}catch(e){return!1}}(e):"[object Number]"===b(e)))}function se(e){return ue(e)||ye(e)}c(se,"isPrimitive",ue),c(se,"isObject",ye);var he=fe.NEGATIVE_INFINITY,me=Math.floor;function pe(e){return me(e)===e}function ge(e){return e<S&&e>he&&pe(e)}function we(e){return ue(e)&&ge(e)}function be(e){return ye(e)&&ge(e.valueOf())}function ve(e){return we(e)||be(e)}function de(e){return we(e)&&e>=0}function Ee(e){return be(e)&&e.valueOf()>=0}function _e(e){return de(e)||Ee(e)}c(ve,"isPrimitive",we),c(ve,"isObject",be),c(_e,"isPrimitive",de),c(_e,"isObject",Ee);function Ae(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&pe(e.length)&&e.length>=0&&e.length<=4294967295}function Te(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&pe(e.length)&&e.length>=0&&e.length<=9007199254740991}var je="function"==typeof ArrayBuffer;function xe(e){return je&&e instanceof ArrayBuffer||"[object ArrayBuffer]"===b(e)}var Be=Array.isArray?Array.isArray:function(e){return"[object Array]"===b(e)};function Le(e){return"object"==typeof e&&null!==e&&!Be(e)}var Se=/./;function Re(e){return"boolean"==typeof e}var Ve=Boolean.prototype.toString;var ke=h();function Ie(e){return"object"==typeof e&&(e instanceof Boolean||(ke?function(e){try{return Ve.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===b(e)))}function Oe(e){return Re(e)||Ie(e)}function Me(){return new Function("return this;")()}c(Oe,"isPrimitive",Re),c(Oe,"isObject",Ie);var Ce="object"==typeof self?self:null,Ne="object"==typeof window?window:null,Pe="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Ue="object"==typeof Pe?Pe:null;var Fe=function(e){if(arguments.length){if(!Re(e))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+e+"`.");if(e)return Me()}if(Ce)return Ce;if(Ne)return Ne;if(Ue)return Ue;throw new Error("unexpected error. Unable to resolve global object.")}(),Ye=Fe.document&&Fe.document.childNodes,We=Int8Array;function Ge(){return/^\s*function\s*([^(]*)/i}var Je=/^\s*function\s*([^(]*)/i;function Xe(e){return null!==e&&"object"==typeof e}function qe(e){var r,t,n,o;if(("Object"===(t=b(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=Je.exec(n.toString()))return r[1]}return Xe(o=e)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}c(Ge,"REGEXP",Je),c(Xe,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError("invalid argument. Must provide a function. Value: `"+e+"`.");return function(r){var t,n;if(!Be(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(Xe));var ze="function"==typeof Se||"object"==typeof We||"function"==typeof Ye?function(e){return qe(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?qe(e).toLowerCase():r};function De(e){return"function"===ze(e)}function He(e,r){if(!(this instanceof He))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!ue(e))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+e+"`.");if(!ue(r))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+r+"`.");return l(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:e}),l(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:r}),this}c(He,"BYTES_PER_ELEMENT",8),c(He.prototype,"BYTES_PER_ELEMENT",8),c(He.prototype,"byteLength",16),c(He.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),c(He.prototype,"toJSON",(function(){var e={type:"Complex128"};return e.re=this.re,e.im=this.im,e}));var Ke="function"==typeof Math.fround?Math.fround:null,Qe=new k(1);var Ze="function"==typeof Ke?Ke:function(e){return Qe[0]=e,Qe[0]};function $e(e,r){if(!(this instanceof $e))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!ue(e))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+e+"`.");if(!ue(r))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+r+"`.");return l(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:Ze(e)}),l(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:Ze(r)}),this}function er(e){return e instanceof He||e instanceof $e||"object"==typeof e&&null!==e&&"number"==typeof e.re&&"number"==typeof e.im}function rr(e){return pe(e/2)}function tr(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&g(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}c($e,"BYTES_PER_ELEMENT",4),c($e.prototype,"BYTES_PER_ELEMENT",4),c($e.prototype,"byteLength",8),c($e.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),c($e.prototype,"toJSON",(function(){var e={type:"Complex64"};return e.re=this.re,e.im=this.im,e}));var nr=tr()?Symbol.iterator:null;function or(e,r,t){l(e,r,{configurable:!1,enumerable:!1,get:t})}function ir(e){return e.re}function ar(e){return e.im}function ur(e,r){return new k(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*r,2*(e.length-r))}function fr(e,r){return new B(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*r,2*(e.length-r))}function lr(e,r){return e[r]}function cr(e,r){return e.get(r)}function yr(e,r,t){e[r]=t}function sr(e,r,t){e.set(t,r)}function hr(e){var r=Boolean(e.get&&e.set);return{data:e,accessors:r,getter:r?cr:lr,setter:r?sr:yr}}function mr(e){var r,t,n;for(r=[];!(t=e.next()).done;)if(Ae(n=t.value)&&n.length>=2)r.push(n[0],n[1]);else{if(!er(n))return new TypeError("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `"+n+"`.");r.push(ir(n),ar(n))}return r}function pr(e,r,t){var n,o,i,a;for(n=[],a=-1;!(o=e.next()).done;)if(a+=1,Ae(i=r.call(t,o.value,a))&&i.length>=2)n.push(i[0],i[1]);else{if(!er(i))return new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+i+"`.");n.push(ir(i),ar(i))}return n}function gr(e,r){var t,n,o,i;for(t=r.length,i=0,o=0;o<t;o++){if(!er(n=r[o]))return null;e[i]=ir(n),e[i+1]=ar(n),i+=2}return e}var wr=2*k.BYTES_PER_ELEMENT,br=tr();function vr(e){return e instanceof Ar||"object"==typeof e&&null!==e&&("Complex64Array"===e.constructor.name||"Complex128Array"===e.constructor.name)&&"number"==typeof e._length&&"object"==typeof e._buffer}function dr(e){return e===Ar||"Complex128Array"===e.name}function Er(e){return"object"==typeof e&&null!==e&&"Complex64Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===wr}function _r(e){return"object"==typeof e&&null!==e&&"Complex128Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===2*wr}function Ar(){var e,r,t,n;if(r=arguments.length,!(this instanceof Ar))return 0===r?new Ar:1===r?new Ar(arguments[0]):2===r?new Ar(arguments[0],arguments[1]):new Ar(arguments[0],arguments[1],arguments[2]);if(0===r)t=new k(0);else if(1===r)if(de(arguments[0]))t=new k(2*arguments[0]);else if(Te(arguments[0]))if((n=(t=arguments[0]).length)&&Be(t)&&er(t[0])){if(null===(t=gr(new k(2*n),t))){if(!rr(n))throw new RangeError("invalid argument. Array-like object input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new k(arguments[0])}}else{if(Er(t))t=ur(t,0);else if(_r(t))t=fr(t,0);else if(!rr(n))throw new RangeError("invalid argument. Array-like object and typed array input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new k(t)}else if(xe(arguments[0])){if(!pe((t=arguments[0]).byteLength/wr))throw new RangeError("invalid argument. ArrayBuffer byte length must be a multiple of "+wr+". Byte length: `"+t.byteLength+"`.");t=new k(t)}else{if(!Le(arguments[0]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+arguments[0]+"`.");if(t=arguments[0],!1===br)throw new TypeError("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `"+t+"`.");if(!De(t[nr]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+t+"`.");if(!De((t=t[nr]()).next))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable.");if((t=mr(t))instanceof Error)throw t;t=new k(t)}else{if(!xe(t=arguments[0]))throw new TypeError("invalid argument. First argument must be an array buffer. Value: `"+t+"`.");if(!de(e=arguments[1]))throw new TypeError("invalid argument. Byte offset must be a nonnegative integer. Value: `"+e+"`.");if(!pe(e/wr))throw new RangeError("invalid argument. Byte offset must be a multiple of "+wr+". Value: `"+e+"`.");if(2===r){if(!pe((n=t.byteLength-e)/wr))throw new RangeError("invalid arguments. ArrayBuffer view byte length must be a multiple of "+wr+". View byte length: `"+n+"`.");t=new k(t,e)}else{if(!de(n=arguments[2]))throw new TypeError("invalid argument. Length must be a nonnegative integer. Value: `"+n+"`.");if(n*wr>t.byteLength-e)throw new RangeError("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `"+n*wr+"`.");t=new k(t,e,2*n)}}return c(this,"_buffer",t),c(this,"_length",t.length/2),this}function Tr(e){return e.re}function jr(e){return e.im}function xr(e){var r,t,n;for(r=[];!(t=e.next()).done;)if(Ae(n=t.value)&&n.length>=2)r.push(n[0],n[1]);else{if(!er(n))return new TypeError("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `"+n+"`.");r.push(Tr(n),jr(n))}return r}function Br(e,r,t){var n,o,i,a;for(n=[],a=-1;!(o=e.next()).done;)if(a+=1,Ae(i=r.call(t,o.value,a))&&i.length>=2)n.push(i[0],i[1]);else{if(!er(i))return new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+i+"`.");n.push(Tr(i),jr(i))}return n}function Lr(e,r){var t,n,o,i;for(t=r.length,i=0,o=0;o<t;o++){if(!er(n=r[o]))return null;e[i]=Tr(n),e[i+1]=jr(n),i+=2}return e}c(Ar,"BYTES_PER_ELEMENT",wr),c(Ar,"name","Complex64Array"),c(Ar,"from",(function(e){var r,t,n,o,i,a,u,f,l,c,y;if(!De(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!dr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!De(n=arguments[1]))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");t>2&&(r=arguments[2])}if(vr(e)){if(u=e.length,n){for(i=(o=new this(u))._buffer,y=0,c=0;c<u;c++){if(er(l=n.call(r,e.get(c),c)))i[y]=ir(l),i[y+1]=ar(l);else{if(!(Ae(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");i[y]=l[0],i[y+1]=l[1]}y+=2}return o}return new this(e)}if(Te(e)){if(n){for(u=e.length,a=hr(e),c=0;c<u;c++)if(!er(a.getter(e,c))){f=!0;break}if(f){if(!rr(u))throw new RangeError("invalid argument. First argument must have a length which is a multiple of two. Length: `"+u+"`.");for(i=(o=new this(u/2))._buffer,c=0;c<u;c++)i[c]=n.call(r,a.getter(e,c),c);return o}for(i=(o=new this(u))._buffer,y=0,c=0;c<u;c++){if(er(l=n.call(r,a.getter(e,c),c)))i[y]=ir(l),i[y+1]=ar(l);else{if(!(Ae(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");i[y]=l[0],i[y+1]=l[1]}y+=2}return o}return new this(e)}if(Le(e)&&br&&De(e[nr])){if(!De((i=e[nr]()).next))throw new TypeError("invalid argument. First argument must be an array-like object or an iterable.");if((a=n?pr(i,n,r):mr(i))instanceof Error)throw a;for(i=(o=new this(u=a.length/2))._buffer,c=0;c<u;c++)i[c]=a[c];return o}throw new TypeError("invalid argument. First argument must be an array-like object or an iterable. Value: `"+e+"`.")})),c(Ar,"of",(function(){var e,r;if(!De(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!dr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)})),or(Ar.prototype,"buffer",(function(){return this._buffer.buffer})),or(Ar.prototype,"byteLength",(function(){return this._buffer.byteLength})),or(Ar.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),c(Ar.prototype,"BYTES_PER_ELEMENT",Ar.BYTES_PER_ELEMENT),c(Ar.prototype,"copyWithin",(function(e,r){if(!vr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*e,2*r):this._buffer.copyWithin(2*e,2*r,2*arguments[2]),this})),c(Ar.prototype,"entries",(function(){var e,r,t,n,o,i,a;if(!vr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,e=this._buffer,n=this._length,i=-1,a=-2,c(t={},"next",(function(){var r;if(i+=1,o||i>=n)return{done:!0};return r=new $e(e[a+=2],e[a+1]),{value:[i,r],done:!1}})),c(t,"return",(function(e){if(o=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),nr&&c(t,nr,(function(){return r.entries()})),t})),c(Ar.prototype,"get",(function(e){var r;if(!vr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!de(e))throw new TypeError("invalid argument. Must provide a nonnegative integer. Value: `"+e+"`.");if(!(e>=this._length))return new $e((r=this._buffer)[e*=2],r[e+1])})),or(Ar.prototype,"length",(function(){return this._length})),c(Ar.prototype,"set",(function(e){var r,t,n,o,i,a,u,f,l;if(!vr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!de(t=arguments[1]))throw new TypeError("invalid argument. Index argument must be a nonnegative integer. Value: `"+t+"`.")}else t=0;if(er(e)){if(t>=this._length)throw new RangeError("invalid argument. Index argument is out-of-bounds. Value: `"+t+"`.");return n[t*=2]=ir(e),void(n[t+1]=ar(e))}if(vr(e)){if(t+(a=e._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e._buffer,l=n.byteOffset+t*wr,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(o=new k(r.length),f=0;f<r.length;f++)o[f]=r[f];r=o}for(t*=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2}else{if(!Te(e))throw new TypeError("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `"+e+"`.");for(a=e.length,f=0;f<a;f++)if(!er(e[f])){i=!0;break}if(i){if(!rr(a))throw new RangeError("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `"+a+"`.");if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e,l=n.byteOffset+t*wr,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(o=new k(a),f=0;f<a;f++)o[f]=r[f];r=o}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=e[f],n[t]=ir(u),n[t+1]=ar(u),t+=2}}));var Sr=2*B.BYTES_PER_ELEMENT,Rr=tr();function Vr(e){return e instanceof Mr||"object"==typeof e&&null!==e&&("Complex64Array"===e.constructor.name||"Complex128Array"===e.constructor.name)&&"number"==typeof e._length&&"object"==typeof e._buffer}function kr(e){return e===Mr||"Complex64Array"===e.name}function Ir(e){return"object"==typeof e&&null!==e&&"Complex64Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===Sr/2}function Or(e){return"object"==typeof e&&null!==e&&"Complex128Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===Sr}function Mr(){var e,r,t,n;if(r=arguments.length,!(this instanceof Mr))return 0===r?new Mr:1===r?new Mr(arguments[0]):2===r?new Mr(arguments[0],arguments[1]):new Mr(arguments[0],arguments[1],arguments[2]);if(0===r)t=new B(0);else if(1===r)if(de(arguments[0]))t=new B(2*arguments[0]);else if(Te(arguments[0]))if((n=(t=arguments[0]).length)&&Be(t)&&er(t[0])){if(null===(t=Lr(new B(2*n),t))){if(!rr(n))throw new RangeError("invalid argument. Array-like object input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new B(arguments[0])}}else{if(Ir(t))t=ur(t,0);else if(Or(t))t=fr(t,0);else if(!rr(n))throw new RangeError("invalid argument. Array-like object and typed array input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new B(t)}else if(xe(arguments[0])){if(!pe((t=arguments[0]).byteLength/Sr))throw new RangeError("invalid argument. ArrayBuffer byte length must be a multiple of "+Sr+". Byte length: `"+t.byteLength+"`.");t=new B(t)}else{if(!Le(arguments[0]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+arguments[0]+"`.");if(t=arguments[0],!1===Rr)throw new TypeError("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `"+t+"`.");if(!De(t[nr]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+t+"`.");if(!De((t=t[nr]()).next))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable.");if((t=xr(t))instanceof Error)throw t;t=new B(t)}else{if(!xe(t=arguments[0]))throw new TypeError("invalid argument. First argument must be an array buffer. Value: `"+t+"`.");if(!de(e=arguments[1]))throw new TypeError("invalid argument. Byte offset must be a nonnegative integer. Value: `"+e+"`.");if(!pe(e/Sr))throw new RangeError("invalid argument. Byte offset must be a multiple of "+Sr+". Value: `"+e+"`.");if(2===r){if(!pe((n=t.byteLength-e)/Sr))throw new RangeError("invalid arguments. ArrayBuffer view byte length must be a multiple of "+Sr+". View byte length: `"+n+"`.");t=new B(t,e)}else{if(!de(n=arguments[2]))throw new TypeError("invalid argument. Length must be a nonnegative integer. Value: `"+n+"`.");if(n*Sr>t.byteLength-e)throw new RangeError("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `"+n*Sr+"`.");t=new B(t,e,2*n)}}return c(this,"_buffer",t),c(this,"_length",t.length/2),this}c(Mr,"BYTES_PER_ELEMENT",Sr),c(Mr,"name","Complex128Array"),c(Mr,"from",(function(e){var r,t,n,o,i,a,u,f,l,c,y;if(!De(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!kr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!De(n=arguments[1]))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");t>2&&(r=arguments[2])}if(Vr(e)){if(u=e.length,n){for(i=(o=new this(u))._buffer,y=0,c=0;c<u;c++){if(er(l=n.call(r,e.get(c),c)))i[y]=Tr(l),i[y+1]=jr(l);else{if(!(Ae(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");i[y]=l[0],i[y+1]=l[1]}y+=2}return o}return new this(e)}if(Te(e)){if(n){for(u=e.length,a=hr(e),c=0;c<u;c++)if(!er(a.getter(e,c))){f=!0;break}if(f){if(!rr(u))throw new RangeError("invalid argument. First argument must have a length which is a multiple of two. Length: `"+u+"`.");for(i=(o=new this(u/2))._buffer,c=0;c<u;c++)i[c]=n.call(r,a.getter(e,c),c);return o}for(i=(o=new this(u))._buffer,y=0,c=0;c<u;c++){if(er(l=n.call(r,a.getter(e,c),c)))i[y]=Tr(l),i[y+1]=jr(l);else{if(!(Ae(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");i[y]=l[0],i[y+1]=l[1]}y+=2}return o}return new this(e)}if(Le(e)&&Rr&&De(e[nr])){if(!De((i=e[nr]()).next))throw new TypeError("invalid argument. First argument must be an array-like object or an iterable.");if((a=n?Br(i,n,r):xr(i))instanceof Error)throw a;for(i=(o=new this(u=a.length/2))._buffer,c=0;c<u;c++)i[c]=a[c];return o}throw new TypeError("invalid argument. First argument must be an array-like object or an iterable. Value: `"+e+"`.")})),c(Mr,"of",(function(){var e,r;if(!De(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!kr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)})),or(Mr.prototype,"buffer",(function(){return this._buffer.buffer})),or(Mr.prototype,"byteLength",(function(){return this._buffer.byteLength})),or(Mr.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),c(Mr.prototype,"BYTES_PER_ELEMENT",Mr.BYTES_PER_ELEMENT),c(Mr.prototype,"copyWithin",(function(e,r){if(!Vr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*e,2*r):this._buffer.copyWithin(2*e,2*r,2*arguments[2]),this})),c(Mr.prototype,"entries",(function(){var e,r,t,n,o,i,a;if(!Vr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,e=this._buffer,n=this._length,i=-1,a=-2,c(t={},"next",(function(){var r;if(i+=1,o||i>=n)return{done:!0};return r=new He(e[a+=2],e[a+1]),{value:[i,r],done:!1}})),c(t,"return",(function(e){if(o=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),nr&&c(t,nr,(function(){return r.entries()})),t})),c(Mr.prototype,"get",(function(e){var r;if(!Vr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!de(e))throw new TypeError("invalid argument. Must provide a nonnegative integer. Value: `"+e+"`.");if(!(e>=this._length))return new He((r=this._buffer)[e*=2],r[e+1])})),or(Mr.prototype,"length",(function(){return this._length})),c(Mr.prototype,"set",(function(e){var r,t,n,o,i,a,u,f,l;if(!Vr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!de(t=arguments[1]))throw new TypeError("invalid argument. Index argument must be a nonnegative integer. Value: `"+t+"`.")}else t=0;if(er(e)){if(t>=this._length)throw new RangeError("invalid argument. Index argument is out-of-bounds. Value: `"+t+"`.");return n[t*=2]=Tr(e),void(n[t+1]=jr(e))}if(Vr(e)){if(t+(a=e._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e._buffer,l=n.byteOffset+t*Sr,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(o=new B(r.length),f=0;f<r.length;f++)o[f]=r[f];r=o}for(t*=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2}else{if(!Te(e))throw new TypeError("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `"+e+"`.");for(a=e.length,f=0;f<a;f++)if(!er(e[f])){i=!0;break}if(i){if(!rr(a))throw new RangeError("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `"+a+"`.");if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e,l=n.byteOffset+t*Sr,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(o=new B(a),f=0;f<a;f++)o[f]=r[f];r=o}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=e[f],n[t]=Tr(u),n[t+1]=jr(u),t+=2}}));var Cr={float64:B,float32:k,int16:C,int32:F,int8:J,uint16:D,uint32:Z,uint8:te,uint8c:ae,complex64:Ar,complex128:Mr};function Nr(e){return Cr[e]||null}function Pr(){var e,r,t;if(null===(t=Nr(r=(e=arguments.length)&&y(arguments[e-1])?arguments[e-=1]:"float64")))throw new TypeError(A("0162k",r));return e<=0?new t(0):1===e?new t(arguments[0]):2===e?new t(arguments[0],arguments[1]):new t(arguments[0],arguments[1],arguments[2])}export{Pr as default};
//# sourceMappingURL=mod.js.map
