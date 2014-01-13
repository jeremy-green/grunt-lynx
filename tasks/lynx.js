/*
 * grunt-lynx
 */
'use strict';

module.exports = function (grunt) {

  grunt.registerTask('lynx', 'Lynx', function () {
    var done = this.async();
    var options = this.options();

    grunt.util.spawn({
      cmd: 'lynx',
      args: [
        '-dump',
        options.url
      ]
    }, function (error, result, code) {
      grunt.log.writeln('Saving report to ' + options.dest);
      grunt.file.write(options.dest, result.stdout);
      done(error);
    });

  });
};
