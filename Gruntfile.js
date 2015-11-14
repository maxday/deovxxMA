'use strict';

module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-compass');

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
    concat: {
      math: {
        src: ['js/math.add.js', 'js/math.mult.js', 'js/math.calc.js'],
        dest: 'generated/all.js',
      },
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

  });









  grunt.registerTask('run', [
    'concat:math',
    'connect:server'
  ]);

  grunt.registerTask('default', [
    'run'
  ])

};
