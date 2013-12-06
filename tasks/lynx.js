/*
 * grunt-lynx
 */

'use strict';

module.exports = function (grunt) {

  grunt.registerTask('lynx', 'Lynx', function () {
    //var options = this.options();
    //var cb = this.async();

    /*
    var done = this.async(),
      src = [].concat(this.filesSrc),
      options = this.options({
        transport: null,
        recipients: [],
        from: 'nodemailer <sender@example.com>',
        subject: '',
        html: '',
        text: ''
      }),
      srcHtml = options.html,
      srcTxt = options.text,
      transport,
      subject;
     */

    grunt.util.spawn({
      cmd: 'lynx',
      args: {
        dump: true,
        url: 'http://www.mutatedcreativity.com'
      }
    }, function (err) {
      done(!err);
    });


  });
};
