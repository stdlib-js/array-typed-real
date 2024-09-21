<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Typed Arrays

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Create a typed array.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

To use in Observable,

```javascript
realarray = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/array-typed-real@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var realarray = require( 'path/to/vendor/umd/array-typed-real/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-typed-real@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.realarray;
})();
</script>
```

#### realarray( \[dtype] )

Creates a [typed array][mdn-typed-array] having a specified data type `dtype`.

```javascript
var arr = realarray();
// returns <Float64Array>
```

The function recognizes the following data types:

-   `float64`: double-precision floating-point numbers (IEEE 754)
-   `float32`: single-precision floating-point numbers (IEEE 754)
-   `int32`: 32-bit two's complement signed integers
-   `uint32`: 32-bit unsigned integers
-   `int16`: 16-bit two's complement signed integers
-   `uint16`: 16-bit unsigned integers
-   `int8`: 8-bit two's complement signed integers
-   `uint8`: 8-bit unsigned integers
-   `uint8c`: 8-bit unsigned integers clamped to `0-255`

By default, the output [typed array][mdn-typed-array] data type is `float64`. To specify an alternative data type, provide a `dtype` argument.

```javascript
var arr = realarray( 'int32' );
// returns <Int32Array>
```

#### realarray( length\[, dtype] )

Returns a [typed array][mdn-typed-array] having a specified `length`.

```javascript
var arr1 = realarray( 5 );
// returns <Float64Array>[ 0.0, 0.0, 0.0, 0.0, 0.0 ]

var arr2 = realarray( 5, 'uint8' );
// returns <Uint8Array>[ 0, 0, 0, 0, 0 ]
```

#### realarray( realarray\[, dtype] )

Creates a [typed array][mdn-typed-array] from another [typed array][mdn-typed-array].

```javascript
var arr1 = realarray( [ 5.0, -3.0, 2.0 ] );
// returns <Float64Array>[ 5.0, -3.0, 2.0 ]

var arr2 = realarray( arr1 );
// returns <Float64Array>[ 5.0, -3.0, 2.0 ]

var arr3 = realarray( arr1, 'int32' );
// returns <Int32Array>[ 5, -3, 2 ]
```

#### realarray( obj\[, dtype] )

Creates a [typed array][mdn-typed-array] from an array-like object or iterable.

```javascript
var arr1 = realarray( [ 0.5, 0.5, 0.5 ] );
// returns <Float64Array>[ 0.5, 0.5, 0.5 ]

var arr2 = realarray( [ 0.5, 0.5, 0.5 ], 'float32' );
// returns <Float32Array>[ 0.5, 0.5, 0.5 ]
```

#### realarray( buffer\[, byteOffset\[, length]]\[, dtype] )

Returns a [typed array][mdn-typed-array] view of an [`ArrayBuffer`][mdn-arraybuffer].

```javascript
var ArrayBuffer = require( '@stdlib/array-buffer' );
var buf = new ArrayBuffer( 32 );

var arr1 = realarray( buf );
// returns <Float64Array>[ 0.0, 0.0, 0.0, 0.0 ]

var arr2 = realarray( buf, 'float32' );
// returns <Float32Array>[ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ]

var arr3 = realarray( buf, 16 );
// returns <Float64Array>[ 0.0, 0.0 ]

var arr4 = realarray( buf, 16, 'float32' );
// returns <Float32Array>[ 0.0, 0.0, 0.0, 0.0 ]

var arr5 = realarray( buf, 16, 1 );
// returns <Float64Array>[ 0.0 ]

var arr6 = realarray( buf, 10, 4, 'int16' );
// returns <Int16Array>[ 0, 0, 0, 0 ]
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-typed-real@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var arr = realarray( 100, 'float64' );

var i;
for ( i = 0; i < arr.length; i++ ) {
    arr[ i ] = randu() * 100.0;
}
console.log( arr );

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/array-float64`][@stdlib/array/float64]</span><span class="delimiter">: </span><span class="description">Float64Array.</span>
-   <span class="package-name">[`@stdlib/array-float32`][@stdlib/array/float32]</span><span class="delimiter">: </span><span class="description">Float32Array.</span>
-   <span class="package-name">[`@stdlib/array-int32`][@stdlib/array/int32]</span><span class="delimiter">: </span><span class="description">Int32Array.</span>
-   <span class="package-name">[`@stdlib/array-uint32`][@stdlib/array/uint32]</span><span class="delimiter">: </span><span class="description">Uint32Array.</span>
-   <span class="package-name">[`@stdlib/array-int16`][@stdlib/array/int16]</span><span class="delimiter">: </span><span class="description">Int16Array.</span>
-   <span class="package-name">[`@stdlib/array-uint16`][@stdlib/array/uint16]</span><span class="delimiter">: </span><span class="description">Uint16Array.</span>
-   <span class="package-name">[`@stdlib/array-int8`][@stdlib/array/int8]</span><span class="delimiter">: </span><span class="description">Int8Array.</span>
-   <span class="package-name">[`@stdlib/array-uint8`][@stdlib/array/uint8]</span><span class="delimiter">: </span><span class="description">Uint8Array.</span>
-   <span class="package-name">[`@stdlib/array-uint8c`][@stdlib/array/uint8c]</span><span class="delimiter">: </span><span class="description">Uint8ClampedArray.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/array-typed-real.svg
[npm-url]: https://npmjs.org/package/@stdlib/array-typed-real

[test-image]: https://github.com/stdlib-js/array-typed-real/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/array-typed-real/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/array-typed-real/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/array-typed-real?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/array-typed-real.svg
[dependencies-url]: https://david-dm.org/stdlib-js/array-typed-real/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/array-typed-real/tree/deno
[deno-readme]: https://github.com/stdlib-js/array-typed-real/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/array-typed-real/tree/umd
[umd-readme]: https://github.com/stdlib-js/array-typed-real/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/array-typed-real/tree/esm
[esm-readme]: https://github.com/stdlib-js/array-typed-real/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/array-typed-real/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/array-typed-real/main/LICENSE

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[mdn-arraybuffer]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer

<!-- <related-links> -->

[@stdlib/array/float64]: https://github.com/stdlib-js/array-float64/tree/umd

[@stdlib/array/float32]: https://github.com/stdlib-js/array-float32/tree/umd

[@stdlib/array/int32]: https://github.com/stdlib-js/array-int32/tree/umd

[@stdlib/array/uint32]: https://github.com/stdlib-js/array-uint32/tree/umd

[@stdlib/array/int16]: https://github.com/stdlib-js/array-int16/tree/umd

[@stdlib/array/uint16]: https://github.com/stdlib-js/array-uint16/tree/umd

[@stdlib/array/int8]: https://github.com/stdlib-js/array-int8/tree/umd

[@stdlib/array/uint8]: https://github.com/stdlib-js/array-uint8/tree/umd

[@stdlib/array/uint8c]: https://github.com/stdlib-js/array-uint8c/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
