// Karma configuration
// Generated on Tue Feb 20 2018 18:15:26 GMT-0300 (Hora oficial do Brasil)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha','chai'],


    // list of files / patterns to load in the browser
    files: [
      "public/vendors/jquery/jquery.js",
      "public/vendors/bootstrap/js/bootstrap.js",
      "public/vendors/angular/angular.js",
      "public/vendors/angular/angular-ui-router.js",
      "public/vendors/angular/angular-mocks.js",
      "public/app/js/main.js",
      "public/app/js/components/produto/produto-service.js",
      "public/app/js/components/produto/produto-list-controller.js",
      "public/app/js/components/produto/produto-list-component.js",
      "public/app/js/components/login/login-service.js",
      "public/app/js/rotas.js",
      "test/unit-test/**/*.spec.js"
    ],


    // list of files / patterns to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
