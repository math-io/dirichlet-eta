'use strict';

// MODULES //

var powm1 = require( 'math-powm1' );
var zeta = require( 'math-riemann-zeta' );
var LN2 = require( 'const-ln2' );


// ETA //

/**
* FUNCTION: eta( s )
*	Evaluates the Dirichlet eta function.
*
* @param {Number} s - input value
* @returns {Number} function value
*/
function eta( s ) {
	if ( s !== s ) {
		return NaN;
	}
	if ( s === 1 ) {
		// Alternating harmonic series...
		return LN2;
	}
	return -powm1( 2, 1-s ) * zeta( s );
} // end FUNCTION eta()


// EXPORTS //

module.exports = eta;
