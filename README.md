Dirichlet Eta Function
===
[![NPM version][npm-image]][npm-url] [![Build Status][build-image]][build-url] [![Coverage Status][coverage-image]][coverage-url] [![Dependencies][dependencies-image]][dependencies-url]

> [Dirichlet eta][eta-function] function.

The [Dirichlet eta][eta-function] function is defined by the [Dirichlet series][dirichlet-series]

<!-- <equation class="equation" label="eq:dirichlet_eta_function" align="center" raw="\eta(s) = \sum_{n=1}^{\infty} \frac{(-1)^{n-1}}{n^s} = \frac{1}{1^s} - \frac{1}{2^s} + \frac{1}{3^s} - \frac{1}{4^s} + \cdots" alt="Dirichlet eta function"> -->

<!-- </equation> -->

where `s` is a complex variable equal to `σ + ti`. The series is convergent for all complex numbers having a real part greater than `0`.

The [Dirichlet eta][eta-function] function is an alternating sum and also known as the __alternating zeta function__. The series corresponds to the Dirichlet series expansion of the [Riemann zeta][zeta-function] function, leading to the following relation

<!-- <equation class="equation" label="eq:dirichlet_riemann_relation" align="center" raw="\eta(s) = (1-2^{1-s})\zeta(s)" alt="Dirichlet-Riemann zeta relation"> -->

<!-- </equation> -->

where `ζ(s)` is the [Riemann zeta][zeta-function] function.


## Installation

``` bash
$ npm install math-dirichlet-eta
```


## Usage

``` javascript
var eta = require( 'math-dirichlet-eta' );
```

#### eta( s )

Evaluates the [Dirichlet eta][eta-function] function as a function of a real variable `s`.

``` javascript
var v = eta( 0 ); // Abel sum of 1-1+1-1+...
// returns 0.5

v = eta( -1.0 ); // Abel sum of 1-2+3-4+...
// returns 0.25

v = eta( 1.0 ); // alternating harmonic series
// returns 0.6931471805599453 => ln(2)

v = eta( 3.14 );
// returns ~0.9096

v = eta( NaN );
// returns NaN
```


## Examples

``` javascript
var linspace = require( 'compute-linspace' );
var eta = require( 'math-dirichlet-eta' );

var s = linspace( -50, 50, 200 );
var v;
var i;

for ( i = 0; i < s.length; i++ ) {
	v = eta( s[ i ] );
	console.log( 's: %d, η(s): %d', s[ i ], v );
}
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


---
## Tests

### Unit

This repository uses [tape][tape] for unit tests. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul][istanbul] as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


### Browser Support

This repository uses [Testling][testling] for browser testing. To run the tests in a (headless) local web browser, execute the following command in the top-level application directory:

``` bash
$ make test-browsers
```

To view the tests in a local web browser,

``` bash
$ make view-browser-tests
```

<!-- [![browser support][browsers-image]][browsers-url] -->


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2016. The [Compute.io][compute-io] Authors.


[npm-image]: http://img.shields.io/npm/v/math-dirichlet-eta.svg
[npm-url]: https://npmjs.org/package/math-dirichlet-eta

[build-image]: http://img.shields.io/travis/math-io/dirichlet-eta/master.svg
[build-url]: https://travis-ci.org/math-io/dirichlet-eta

[coverage-image]: https://img.shields.io/codecov/c/github/math-io/dirichlet-eta/master.svg
[coverage-url]: https://codecov.io/github/math-io/dirichlet-eta?branch=master

[dependencies-image]: http://img.shields.io/david/math-io/dirichlet-eta.svg
[dependencies-url]: https://david-dm.org/math-io/dirichlet-eta

[dev-dependencies-image]: http://img.shields.io/david/dev/math-io/dirichlet-eta.svg
[dev-dependencies-url]: https://david-dm.org/dev/math-io/dirichlet-eta

[github-issues-image]: http://img.shields.io/github/issues/math-io/dirichlet-eta.svg
[github-issues-url]: https://github.com/math-io/dirichlet-eta/issues

[tape]: https://github.com/substack/tape
[istanbul]: https://github.com/gotwarlost/istanbul
[testling]: https://ci.testling.com

[compute-io]: https://github.com/compute-io/
[eta-function]: https://en.wikipedia.org/wiki/Dirichlet_eta_function
[dirichlet-series]: https://en.wikipedia.org/wiki/Dirichlet_series
[zeta-function]: https://github.com/math-io/riemann-zeta
