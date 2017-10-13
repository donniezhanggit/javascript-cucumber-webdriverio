exports.config = {
    
        /**
         * server configurations
         */
        host: '0.0.0.0',
        // host: '127.0.0.1',
        port: 4444,
        path: '/wd/hub',
    
        /**
         * specify test test-files
         */
        specs: [
            './features/*.feature'
        ],
        exclude: [
            
        ],
    
        /**
         * capabilities
         */
        maxInstances: 10,
        capabilities: [
            {
                // maxInstances: 1,
                browserName: 'chrome'
            },
            // {
            //     browserName: 'firefox'
            // }
        ],



        services: [
            'selenium-standalone'
        ],
        seleniumLogs: './logs/selenium.log',

        /**
         * test configurations
         */
        // baseUrl: 'http://localhost:8080',
        deprecationWarnings: true,

        // Level of logging verbosity: silent | verbose | command | data | result | error
        logLevel: 'silent',
        coloredLogs: true,
        screenshotPath: 'results/screenshots',
        waitforTimeout: 20000,

        framework: 'cucumber',
        cucumberOpts: {
            timeout: 15000,
            require: [
                './features/step_definitions/common.steps.js',
                './features/step_definitions/google.steps.js'
            ],
            ignoreUndefinedDefinitions: true,
            snippets: true
        },
        reporters: [
            'spec',
            'junit',
            'allure'
        ],
        reporterOptions: {
            allure: {
                outputDir: './results/allure'
            },
            junit: {
                outputDir: './results/'
            }
        },


        // Gets executed before test execution begins. At this point you can access to all global
        // variables like `browser`. It is the perfect place to define custom commands.
        before: function (capabilities, specs) {
            // throttle
        },

        // Hook that gets executed before the suite starts
        beforeSuite: function (suite) {

        },

        // Runs before a Cucumber Feature
        beforeFeature: function (feature) {
            // throttle - catch @throttled
        },
        //
        // Runs after a Cucumber Feature
        afterFeature: function (feature) {

        },

        // Runs before each test scenario
        beforeScenario: function (scenario) {
            // browser.url('/');
        },

        // Runs after each test scenario
        afterScenario: function (scenario) {

        },

        // Gets executed after all tests are done. You still have access to all global variables from
        // the test.
        // after: function (result, capabilities, specs) {
        // },

        // Gets executed after all workers got shut down and the process is about to exit.
        // onComplete: function(exitCode, config, capabilities) {
        // }

    };