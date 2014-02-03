/*
 * grunt-lynx
 * https://github.com/jeremy-green/grunt-lynx
 *
 * Copyright (c) 2013 Jeremy Green
 * Licensed under the MIT license.
 */
'use strict';

module.exports = function (grunt) {
  var _ = grunt.util._;

  grunt.registerTask('lynx', 'Lynx task runner for grunt.', function () {
    var done = this.async();
    var options = this.options();
    var args = [];

    if (options.auth !== 'undefined') {
      args.push('-auth=' + options.auth.username + ':' + options.auth.password);
    }

    args.push('-dump', options.url);

    grunt.util.spawn({
      cmd: 'lynx',
      args: args
    }, function (error, result, code) {
      grunt.log.writeln('Saving report to ' + options.dest);
      grunt.file.write(options.dest, result.stdout);
      done(error);
    });

  });
};
