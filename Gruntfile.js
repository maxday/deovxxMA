'use strict';

module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-concat');

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
    }
  });

  grunt.registerTask('run', [
    'concat:math',
    'connect:server'
  ]);

  grunt.registerTask('default', [
    'run'
  ])

};
