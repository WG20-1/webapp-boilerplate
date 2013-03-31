module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		requirejs: {
			compile: {
				options: {
					appDir: "app/",
					baseUrl: "scripts",
					dir: "dist",
					mainConfigFile: "app/scripts/main.js",
					name: "main",
					optimizeCss: "standard"
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-requirejs');

	grunt.registerTask('default', [
		'requirejs'
	]);
};