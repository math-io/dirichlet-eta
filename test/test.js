'use strict';

// MODULES //

var tape = require( 'tape' );
var abs = require( 'math-abs' );
var pow = require( 'math-power' );
var LN2 = require( 'const-ln2' );
var PI = require( 'const-pi' );
var EPS = require( 'const-eps-float64' );
var eta = require( './../lib' );


// FIXTURES //




// TESTS //

tape( 'main export is a function', function test( t ) {
	t.equal( typeof eta, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN`, the function returns `NaN`', function test( t ) {
	var v = eta( NaN );
	t.ok( v !== v, 'returns NaN when provided a NaN' );
	t.end();
});

tape( 'if provided `1`, the function returns `ln(2)` (alternating harmonic series)', function test( t ) {
	var v = eta( 1.0 );
	t.equal( v, LN2, 'returns ln(2)' );
	t.end();
});

tape( 'if provided `0`, the function returns `0.5`', function test( t ) {
	var v = eta( 0.0 );
	t.equal( v, 0.5, 'returns 0.5' );
	t.end();
});

tape( 'if provided `-1`, the function returns `0.25` (Abel sum)', function test( t ) {
	var v = eta( -1.0 );
	t.equal( v, 0.25, 'returns 0.25' );
	t.end();
});

tape( 'if provided `2`, the function returns `π²/12`', function test( t ) {
	var expected;
	var delta;
	var tol;
	var s;
	var v;

	// https://oeis.org/A072691
	expected = 0.822467033424113218236207583323012594609474950603399218867779114685003735201600436916814450309879352652002;

	s = 2.0;
	v = eta( s );

	delta = abs( v - expected );
	tol = EPS * abs( expected );

	t.ok( delta <= tol, 'within tolerance. s: '+s+'. v: '+v+'. E: '+expected+' Δ: '+delta+'. tol: '+tol );
	t.end();
});

tape( 'if provided `4`, the function returns `7π**4/720`', function test( t ) {
	var expected;
	var delta;
	var tol;
	var s;
	var v;

	expected = 7.0 * pow( PI, 4 ) / 720.0;

	s = 4.0;
	v = eta( s );

	delta = abs( v - expected );
	tol = EPS * abs( expected );

	t.ok( delta <= tol, 'within tolerance. s: '+s+'. v: '+v+'. E: '+expected+' Δ: '+delta+'. tol: '+tol );
	t.end();
});

tape( 'if provided `6`, the function returns `31π**7/30240`', function test( t ) {
	var expected;
	var delta;
	var tol;
	var s;
	var v;

	expected = 31.0 * pow( PI, 6 ) / 30240.0;

	s = 6.0;
	v = eta( s );

	delta = abs( v - expected );
	tol = EPS * abs( expected );

	t.ok( delta <= tol, 'within tolerance. s: '+s+'. v: '+v+'. E: '+expected+' Δ: '+delta+'. tol: '+tol );
	t.end();
});

tape( 'if provided `8`, the function returns `127π**8/1209600`', function test( t ) {
	var expected;
	var delta;
	var tol;
	var s;
	var v;

	expected = 127.0 * pow( PI, 8 ) / 1209600.0;

	s = 8.0;
	v = eta( s );

	delta = abs( v - expected );
	tol = EPS * abs( expected );

	t.ok( delta <= tol, 'within tolerance. s: '+s+'. v: '+v+'. E: '+expected+' Δ: '+delta+'. tol: '+tol );
	t.end();
});

tape( 'if provided `10`, the function returns `73π**10/6842880`', function test( t ) {
	var expected;
	var delta;
	var tol;
	var s;
	var v;

	expected = 73.0 * pow( PI, 10 ) / 6842880.0;

	s = 10.0;
	v = eta( s );

	delta = abs( v - expected );
	tol = EPS * abs( expected );

	t.ok( delta <= tol, 'within tolerance. s: '+s+'. v: '+v+'. E: '+expected+' Δ: '+delta+'. tol: '+tol );
	t.end();
});

tape( 'if provided `12`, the function returns `1414477π**12/1307674368000`', function test( t ) {
	var expected;
	var delta;
	var tol;
	var s;
	var v;

	expected = 1414477.0 * pow( PI, 12 ) / 1307674368000.0;

	s = 12.0;
	v = eta( s );

	delta = abs( v - expected );
	tol = EPS * abs( expected );

	t.ok( delta <= tol, 'within tolerance. s: '+s+'. v: '+v+'. E: '+expected+' Δ: '+delta+'. tol: '+tol );
	t.end();
});
