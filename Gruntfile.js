'use strict';

module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-karma');

  grunt.initConfig({
    connect: {
      server: {
        options: {
          //keepalive: true,
          port: 9000,
          livereload: 35729,
          hostname: 'localhost',
          middleware: function(connect, options, middlewares) {
            middlewares.unshift(function(req, res, next) {
              res.setHeader('X-MyCustomHeader', "gruntPower");
              next();
            });
            return middlewares;
          }
        }
      },
      test: {
        options: {
          port: 9001,
        }
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


    watch: {
      compass: {
        files: ['styles/main.scss'],
        tasks: ['compass:server']
      },
      livereload: {
        options: {
          livereload: '<%= connect.server.options.livereload %>'
        },
        files: [
          'generatedStyles/main.css','index.html'
        ]
      }
    },


    karma: {
      unit: {
        configFile: 'test/karma.conf.js',
        singleRun: true
      }
    }


  });





  grunt.registerTask('test', [
    'connect:test',
    'karma'
  ]);



  grunt.registerTask('run', [
    'connect:server',
    'watch'
  ]);

  grunt.registerTask('default', [
    'run'
  ])

};
