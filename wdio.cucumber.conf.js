exports.config = {
    
        /**
         * server configurations
         */
        host: '0.0.0.0',
        port: 4444,
        path: '/wd/hub',
    
        /**
         * specify test files
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
            }
        ],
    
        /**
         * test configurations
         */
        baseUrl: 'http://localhost:8080',
        deprecationWarnings: true,
        logLevel: 'silent',
        coloredLogs: true,
        screenshotPath: 'results/screenshots',
        waitforTimeout: 5000,
        framework: 'cucumber',
    
        reporters: [
            'spec',
            'json'
        ],
        reporterOptions: {
            outputDir: './results/',
            combined: true,
            filename: 'wdio-results'
        },
    
        cucumberOpts: {
            timeout: 15000,
            // format: ['pretty', 'json:results/test-result.json'],
            require: [
                './features/step_definitions/common.steps.js',
                './features/step_definitions/google.steps.js'
            ],
            ignoreUndefinedDefinitions: true,
            snippets: false
        },

        beforeScenario: function (scenario) {
            console.log('beforeScenario');
        },

        afterScenario: function (scenario) {
            console.log('afterScenario');
        },
    };