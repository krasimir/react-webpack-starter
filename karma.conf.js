var webpack = require('webpack');

module.exports = function (config) {
  config.set({
    browsers: [ 'PhantomJS' ], //run in Chrome
    singleRun: true, //just run once by default
    frameworks: [ 'mocha' ], //use the mocha test framework
    files: [
      'tests.webpack.js' //just load this file
    ],
    preprocessors: {
      'tests.webpack.js': [ 'webpack', 'sourcemap' ] //preprocess with webpack and our sourcemap loader
    },
    reporters: [ 'dots' ], //report results in this format
    webpack: { //kind of a copy of your webpack config
      devtool: 'source-map', //just do inline source maps instead of the default
      module: {
        loaders: [
          {
            test: /(\.jsx|\.js)$/,
            loader: 'babel',
            exclude: /(node_modules|bower_components)/
          }
        ]
      }
    },
    webpackServer: {
      noInfo: true //please don't spam the console when running in karma!
    }
  });
};