module.exports = function( grunt ) {

	grunt.initConfig({
		pkg: grunt.file.readJSON( 'package.json' ),
		//
		// AUTOMATIC CODE ANALYSIS
		// @see http://www.jshint.com/
		// @see http://www.jshint.com/docs/
		//
		jshint: {
			src: [
				'app/scripts/*.js',
				'app/scripts/models/*.js',
				'app/scripts/collections/*.js',
				'app/scripts/views/*.js',
				'app/scripts/templates/*.js',
			],
			options: {
				// Syntaxic rules
				// @see https://github.com/millermedeiros/amd-utils/blob/master/.jshintrc
				// @see https://github.com/airbnb/javascript/blob/master/linters/SublimeLinter/SublimeLinter.sublime-settings
				'passfail'      : false, // Stop on first error.
				'maxerr'        : 50,    // Maximum error before stopping.

				// Predefined globals whom JSHint will ignore.
				'browser'       : true,  // Standard browser globals e.g. `window`, `document`.
				'couch'         : false,
				'dojo'          : false,
				'jquery'        : true,
				'mootools'      : false,
				'node'          : false,
				'prototypejs'   : false,
				'rhino'         : false,
				'wsh'           : false,

				// Custom globals.
				'predef'        : [
					'define',
					'require'
				],

				// Development.
				// 'debug'         : false, // Allow debugger statements e.g. browser breakpoints.
				// 'devel'         : false, // Allow developments statements e.g. `console.log();`.

				// EcmaScript 5.
				'es5'           : false, // Allow EcmaScript 5 syntax.
				'globalstrict'  : false, // Allow global 'use strict' (also enables 'strict').
				'strict'        : false, // Require `use strict` pragma  in every file.

				// The Good Parts.
				'asi'           : false, // Tolerate Automatic Semicolon Insertion (no semicolons).
				'bitwise'       : false, // Prohibit bitwise operators (&, |, ^, etc.).
				'boss'          : true,  // Tolerate assignments inside if, for & while. Usually conditions & loops are for comparison, not assignments.
				'curly'         : false, // Require {} for every new block or scope.
				'eqeqeq'        : true,  // Require triple equals i.e. `===`.
				'eqnull'        : true,  // Tolerate use of `== null`.
				'evil'          : false, // Tolerate use of `eval`.
				'expr'          : false, // Tolerate `ExpressionStatement` as Programs.
				'forin'         : false, // Tolerate `for in` loops without `hasOwnPrototype`.
				'immed'         : true,  // Require immediate invocations to be wrapped in parens e.g. `( function(){}() );`
				'latedef'       : false, // Prohibit variable use before definition.
				'laxbreak'      : false, // Tolerate unsafe line breaks e.g. `return [\n] x` without semicolons.
				'loopfunc'      : false, // Allow functions to be defined within loops.
				'noarg'         : true,  // Prohibit use of `arguments.caller` and `arguments.callee`.
				'regexdash'     : true,  // Tolerate unescaped last dash i.e. `[-...]`.
				'regexp'        : false, // Prohibit `.` and `[^...]` in regular expressions.
				'scripturl'     : false, // Tolerate script-targeted URLs.
				'shadow'        : false, // Allows re-define variables later in code e.g. `var x=1; x=2;`.
				'supernew'      : false, // Tolerate `new function () { ... };` and `new Object;`.
				'undef'         : false, // Require all non-global variables be declared before they are used.
				'unused'        : true,  // Warns when a variable is defined and never used.

				// Personal styling prefrences.
				'newcap'        : true,  // Require capitalization of all constructor functions e.g. `new F()`.
				'noempty'       : true,  // Prohipit use of empty blocks.
				'nomen'         : false, // Prohibit use of initial or trailing underbars in names.
				// 'nonew'         : true,  // Prohibit use of constructors for side-effects.
				'onevar'        : false, // Allow only one `var` statement per function.
				'plusplus'      : false, // Prohibit use of `++` & `--`.
				'sub'           : false, // Tolerate all forms of subscript notation besides dot notation e.g. `dict['key']` instead of `dict.key`.
				'trailing'      : true,  // Prohibit trailing whitespaces.
				'white'         : false, // Check against strict whitespace and indentation rules.
				'camelcase'     : true,  // Force all variable names to use either camelCase style or UPPER_CASE with underscores.
				'indent'        : 4,     // Force specific tab width
				'quotmark'      : 'single' // Ensure the consistency of quotation marks
			}
		},
		//
		// AMD PACKAGING
		// @see http://requirejs.org/docs/optimization.html
		// @see https://github.com/jrburke/r.js/blob/master/build/example.build.js
		//
		requirejs: {
			dist: {
				options: {
					appDir: 'app/',
					baseUrl: 'scripts',
					mainConfigFile: 'app/scripts/main.js',
					name: 'main',
					dir: 'dist',
					optimize: 'uglify2',
					optimizeCss: 'standard',
					preserveLicenseComments: false,
					generateSourceMaps: true
				}
			},
			dev: {
				options: {
					appDir: 'app/',
					baseUrl: 'scripts',
					mainConfigFile: 'app/scripts/main.js',
					name: 'main',
					dir: 'dev',
					optimize: 'none',
					optimizeCss: 'none'
				}
			}
		}
	});

	grunt.loadNpmTasks( 'grunt-contrib-jshint' );
	grunt.loadNpmTasks( 'grunt-requirejs' );

	grunt.registerTask( 'default', [
		'jshint'
	]);

	grunt.registerTask( 'dev', [
		'jshint',
		'requirejs:dev'
	]);

	grunt.registerTask( 'dist', [
		'jshint',
		'requirejs:dist'
	]);
};