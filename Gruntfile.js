'use strict';

module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-connect');

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
    }
  });

  grunt.registerTask('run', [
    'connect:server'
  ]);

  grunt.registerTask('default', [
    'run'
  ])

};
