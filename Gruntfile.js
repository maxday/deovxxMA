'use strict';

module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    connect: {
      server: {
        options: {
          keepalive: true,
          port: 9000,
          hostname: 'localhost',
          middleware: function(connect, options, middlewares) {
            middlewares.unshift(function(req, res, next) {
              res.setHeader('X-MyCustomHeader', "gruntPower");
              next();
            });
            return middlewares;
          }
        },

      }
    },


    compass: {
      server: {
        options: {
          sourcemap: true,
          sassDir: 'styles',
          cssDir: 'generatedStyles'
        }
      }
    },


    watch: {
      compass: {
        files: ['styles/main.scss'],
        tasks: ['compass:server']
      }
    }
  });









  grunt.registerTask('run', [
    'connect:server'
  ]);

  grunt.registerTask('default', [
    'run'
  ])

};
