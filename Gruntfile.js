module.exports = function(grunt) {

	grunt.initConfig({
	    jshint: {
	      all: ['js/*.js']
	    },

	    browserSync: {
	            default_options: {
	                bsFiles: {
	                    src : [
	                        'css/*.css',
	                        '*.html'
	                    ]
	                },
	                options: {
	                    watchTask: true,
	                    server: {
	                    	baseDir: './'
	                    }
	                }
	            }
	    }
	  });

	
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-browser-sync');

  grunt.registerTask('default', ['jshint', 'browserSync']);

};
