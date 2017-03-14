const { defineSupportCode }     = require('cucumber');
const path                      = require('path');
const fs                        = require('fs');

defineSupportCode(function({ After, Before }) {

    Before(function() {
        return this
            .driver
            .init({ browserName: 'chrome' });
    });

    After(function() {
        return this
            .driver
            .end();
    });

    After(function(scenario) {

        // console.log(`scenario: ${scenario.scenario.scenario}`);
        // console.log(`scenario: ${scenario.scenarioResult.scenario}`);
        //
        // for (property in scenario) {
        //     console.log(`property: ${property}`);
        // }

        // if (scenario.isFailed()) {
        //     let screenshotsPath = path.join(__dirname, '/../../', 'testResults', 'screenshots');
        //     console.log(`screenshotsPath: ${screenshotsPath}`);
        //
        //     return this
        //         .driver
        //         .saveScreenshot()
        //         .then(function(screenshot) {
        //             fs.writeFileSync(screenshotsPath, screenshot, { encoding: 'base64' });
        //         });
        // }

    })

});