<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

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

# at

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return an [`ndarray`][@stdlib/ndarray/ctor] element.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/ndarray-at
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var at = require( '@stdlib/ndarray-at' );
```

#### at( x\[, ...indices] )

Returns an [`ndarray`][@stdlib/ndarray/ctor] element.

```javascript
var array = require( '@stdlib/ndarray-array' );

var x = array( [ [ 1, 2 ], [ 3, 4 ] ] );
// returns <ndarray>

var v = at( x, 0, 0 );
// returns 1

v = at( x, 0, 1 );
// returns 2

v = at( x, 1, 0 );
// returns 3

v = at( x, 1, 1 );
// returns 4
```

The function accepts the following arguments:

-   **x**: input [`ndarray`][@stdlib/ndarray/ctor].
-   **indices**: index arguments. The number of index arguments **must** equal the number of dimensions.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If provided out-of-bounds indices, the function always returns `undefined`.

    ```javascript
    var array = require( '@stdlib/ndarray-array' );

    var x = array( [ [ 1, 2 ], [ 3, 4 ] ] );
    // returns <ndarray>

    var v = at( x, 10, 20 );
    // returns undefined
    ```

-   Negative indices are resolved relative to the last element along the respective dimension, with the last element corresponding to `-1`.

    ```javascript
    var array = require( '@stdlib/ndarray-array' );

    var x = array( [ [ 1, 2 ], [ 3, 4 ] ] );
    // returns <ndarray>

    var v = at( x, -1, -1 );
    // returns 4

    v = at( x, -2, -2 );
    // returns 1
    ```

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

<!-- eslint-disable new-cap -->

```javascript
var cartesianProduct = require( '@stdlib/array-cartesian-product' );
var zeroTo = require( '@stdlib/array-zero-to' );
var discreteUniform = require( '@stdlib/random-array-discrete-uniform' );
var array = require( '@stdlib/ndarray-array' );
var at = require( '@stdlib/ndarray-at' );

// Define a two-dimensional array:
var shape = [ 5, 5 ];
var x = array( discreteUniform( 25, -100, 100 ), {
    'shape': shape
});

// Define lists of dimension indices:
var i0 = zeroTo( shape[ 0 ], 'generic' );
var i1 = zeroTo( shape[ 1 ], 'generic' );

// Create a list of index pairs:
var indices = cartesianProduct( i0, i1 );

// Print array contents...
var idx;
var i;
for ( i = 0; i < x.length; i++ ) {
    idx = indices[ i ];
    console.log( 'x[%d,%d] = %d', idx[ 0 ], idx[ 1 ], at( x, idx[ 0 ], idx[ 1 ] ) );
}
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

-   <span class="package-name">[`@stdlib/ndarray-array`][@stdlib/ndarray/array]</span><span class="delimiter">: </span><span class="description">multidimensional arrays.</span>
-   <span class="package-name">[`@stdlib/ndarray-slice`][@stdlib/ndarray/slice]</span><span class="delimiter">: </span><span class="description">return a read-only view of an input ndarray.</span>

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

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/ndarray-at.svg
[npm-url]: https://npmjs.org/package/@stdlib/ndarray-at

[test-image]: https://github.com/stdlib-js/ndarray-at/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/ndarray-at/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/ndarray-at/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/ndarray-at?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/ndarray-at.svg
[dependencies-url]: https://david-dm.org/stdlib-js/ndarray-at/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/ndarray-at/tree/deno
[deno-readme]: https://github.com/stdlib-js/ndarray-at/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/ndarray-at/tree/umd
[umd-readme]: https://github.com/stdlib-js/ndarray-at/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/ndarray-at/tree/esm
[esm-readme]: https://github.com/stdlib-js/ndarray-at/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/ndarray-at/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/ndarray-at/main/LICENSE

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/ndarray-ctor

<!-- <related-links> -->

[@stdlib/ndarray/array]: https://github.com/stdlib-js/ndarray-array

[@stdlib/ndarray/slice]: https://github.com/stdlib-js/ndarray-slice

<!-- </related-links> -->

</section>

<!-- /.links -->
