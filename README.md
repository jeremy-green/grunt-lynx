# grunt-lynx

> Lynx task runner for grunt.

## Getting Started
This plugin requires Grunt `~0.4.4`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-lynx --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-lynx');
```

## The "lynx" task

### Overview
In your project's Gruntfile, add a section named `lynx` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  lynx: {
    options: {
      // Task-specific options go here.
    }
  },
});
```

### Options

#### args
Type: `Array`

An array of commandline arguments to pass to the Lynx browser. For a list or available arguments, make sure Lynx is installed and run `man lynx`.

#### output
Type: `String`
Default value: `-dump`

The type of output. Either `-dump` or `-source`.

#### url
Type: `String`

A string value that is used to do something else with whatever else.

#### dest
Type: `String`

The output destination

### Usage Examples

```js
grunt.initConfig({
  lynx: {
    options: {
      args: ['-head'],
      output: '-source',
      url: 'localhost',
      dest: 'output/site.txt'
    }
  }
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
