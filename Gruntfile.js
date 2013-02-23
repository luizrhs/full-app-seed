module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');

	grunt.initConfig({

		less: {
			development: {
				files: {
					"app/css/global.css": "app/css/**/*.less"
				}
			}
		},

		jshint: {
			files: ['app/js/**/*.js', '!app/js/vendor/*','Gruntfile.js', 'test/unit/**/*Spec.js', 'test/e2e/*Spec.js']
		},

		watch: {
			files: ['<%= jshint.files %>', 'app/css/**/*.less'],
			tasks: ['jshint', 'concat', 'less']
		},

		connect: {
			server: {
				options: {
					port: 9001,
					base: 'app',
					keepalive: true
				}
			}
		},

		concat: {
			options: {
				separator: ";"
			},
			dist: {
				src: ['app/js/**/*.js', '!app/js/vendor/*'],
				dest: 'app/.dist-js/main.js'
			}
		}

	});

};
