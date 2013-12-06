'use strict';

module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({

        lynx: {
            options: {
                url: 'http://www.mutatedcreativity.com',
            }
        }
    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    // By default, lint and run all tests.
    grunt.registerTask('default', ['lynx']);

};
