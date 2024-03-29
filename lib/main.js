/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

'use strict';

// MODULES //

var isString = require( '@stdlib/assert-is-string' ).isPrimitive;
var ctors = require( '@stdlib/array-typed-ctors' );
var defaults = require( '@stdlib/array-defaults' );
var format = require( '@stdlib/string-format' );


// VARIABLES //

var DEFAULT_DTYPE = defaults.get( 'dtypes.real' );


// MAIN //

/**
* Creates a typed array.
*
* @param {(NonNegativeInteger|TypedArray|ArrayLikeObject|ArrayBuffer)} [arg] - a length, typed array, array-like object, or buffer
* @param {NonNegativeInteger} [byteOffset=0] - byte offset
* @param {NonNegativeInteger} [length] - view length
* @param {string} [dtype="float64"] - data type
* @throws {TypeError} must provide a recognized data type
* @returns {TypedArray} typed array
*
* @example
* var arr = realarray();
* // returns <Float64Array>
*
* @example
* var arr = realarray( 2 );
* // returns <Float64Array>[ 0.0, 0.0 ]
*
* @example
* var arr = realarray( 2, 'float32' );
* // returns <Float32Array>[ 0.0, 0.0 ]
*
* @example
* var arr = realarray( [ 0.5, 0.5 ] );
* // returns <Float64Array>[ 0.5, 0.5 ]
*
* @example
* var arr = realarray( [ 5, -3 ], 'int32' );
* // returns <Int32Array>[ 5, -3 ]
*
* @example
* var arr1 = realarray( [ 5, 3 ], 'int32' );
* var arr2 = realarray( arr1 );
* // returns <Float64Array>[ 5.0, 3.0 ]
*
* @example
* var arr1 = realarray( [ 5, 3 ], 'int32' );
* var arr2 = realarray( arr1, 'uint32' );
* // returns <Uint32Array>[ 5, 3 ]
*
* @example
* var ArrayBuffer = require( '@stdlib/array-buffer' );
*
* var buf = new ArrayBuffer( 16 );
* var arr = realarray( buf );
* // returns <Float64Array>[ 0.0, 0.0 ]
*
* @example
* var ArrayBuffer = require( '@stdlib/array-buffer' );
*
* var buf = new ArrayBuffer( 16 );
* var arr = realarray( buf, 'float32' );
* // returns <Float32Array>[ 0.0, 0.0, 0.0, 0.0 ]
*
* @example
* var ArrayBuffer = require( '@stdlib/array-buffer' );
*
* var buf = new ArrayBuffer( 16 );
* var arr = realarray( buf, 8 );
* // returns <Float64Array>[ 0.0 ]
*
* @example
* var ArrayBuffer = require( '@stdlib/array-buffer' );
*
* var buf = new ArrayBuffer( 16 );
* var arr = realarray( buf, 8, 'float32' );
* // returns <Float32Array>[ 0.0, 0.0 ]
*
* @example
* var ArrayBuffer = require( '@stdlib/array-buffer' );
*
* var buf = new ArrayBuffer( 32 );
* var arr = realarray( buf, 8, 2 );
* // returns <Float64Array>[ 0.0, 0.0 ]
*
* @example
* var ArrayBuffer = require( '@stdlib/array-buffer' );
*
* var buf = new ArrayBuffer( 32 );
* var arr = realarray( buf, 8, 2, 'int32' );
* // returns <Int32Array>[ 0, 0 ]
*/
function realarray() {
	var nargs;
	var dtype;
	var ctor;

	nargs = arguments.length;
	if ( nargs && isString( arguments[ nargs-1 ] ) ) {
		nargs -= 1;
		dtype = arguments[ nargs ];
	} else {
		dtype = DEFAULT_DTYPE;
	}
	ctor = ctors( dtype );
	if ( ctor === null ) {
		throw new TypeError( format( 'invalid argument. Must provide a recognized data type. Value: `%s`.', dtype ) );
	}
	if ( nargs <= 0 ) {
		return new ctor( 0 );
	}
	if ( nargs === 1 ) {
		return new ctor( arguments[0] );
	}
	if ( nargs === 2 ) {
		return new ctor( arguments[0], arguments[1] );
	}
	return new ctor( arguments[0], arguments[1], arguments[2] );
}


// EXPORTS //

module.exports = realarray;
