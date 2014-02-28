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
    var output = '-dump';

    if (options.listonly !== 'undefined' && options.listonly === true) {
      args.push('-listonly');
    }

    if (options.useragent !== 'undefined') {
      args.push('-useragent=' + options.useragent);
    }

    if (options.mimeHeader !== 'undefined' && options.mimeHeader === true) {
      args.push('-mime_header');
    }

    /**
     * @todo  hack to remove all other options but still allow auth -
     *        in the future look for a more better way to push the vars
     *        via node
     */
    if (options.head !== 'undefined' && options.head === true) {
      args = [];
      args.push('-head');
    }

    if (options.auth !== 'undefined') {
      args.push('-auth=' + options.auth.username + ':' + options.auth.password);
    }

    if (options.source !== 'undefined' && options.source === true) {
      output = '-source';
    }

    args.push(output, options.url);

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
