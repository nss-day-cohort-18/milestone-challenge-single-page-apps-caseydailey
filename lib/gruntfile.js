module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      files: ['../javascripts/**/*.js'], //location of javascript files
      options: {
        predef: ["document", "console", "$", "XMLHttpRequest" ], //allows for predefined things not found in js
        esnext: true, //allows for ES6 
        globalstrict: true,
        globals: {CarLot: true} //name value pairs, allows to define global vars used in many files.
      }
    },
    //copy moves it through the directory structure (so they're not buried deep)
    copy: { //for bootstrap and jquery - only need to do the first time.
          bootstrap: {
            expand: true,
            cwd: 'node_modules/bootstrap/dist',
            src: ['**'],
            dest: '../dist'
          }, 
          jquery: {
            expand: true,
            cwd: 'node_modules/jquery/dist',
            src: ['**'],
            dest: '../dist'
          }  
        },

    watch: { //automatically watch for changes
      javascripts: {
        files: ['../javascripts/**/*.js'], 
        tasks: ['jshint']
      }
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['jshint', 'copy', 'watch']);//must copy before you watch
};