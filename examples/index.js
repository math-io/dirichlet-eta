'use strict';

var linspace = require( 'compute-linspace' );
var eta = require( './../lib' );

var s = linspace( -50, 50, 200 );
var v;
var i;

for ( i = 0; i < s.length; i++ ) {
	v = eta( s[ i ] );
	console.log( 's: %d, η(s): %d', s[ i ], v );
}
