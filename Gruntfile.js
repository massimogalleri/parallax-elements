module.exports = function(grunt){

  grunt.initConfig({

      // create development version js
      concat: {
        main: {
          options: {
            banner: "\n",
            process: function(src, filepath) {
              return '\n\n// Source: ' + filepath + '\n\n' + src ;
            },
          },
          src: [
            'node_modules/gsap/src/minified/TweenMax.min.js',
          ],
          dest: 'vendors.js',
          nonull: true
        },
      },



  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.registerTask('default', ['concat']);

  // run grunt


};