'use strict';

// MODULES //

var tape = require( 'tape' );
var eta = require( './../lib' );


// FIXTURES //




// TESTS //

tape( 'main export is a function', function test( t ) {
	t.equal( typeof eta, 'function', 'main export is a function' );
	t.end();
});
