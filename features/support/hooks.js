const { defineSupportCode } = require('cucumber');
const webdriverio           = require('webdriverio');



defineSupportCode(function({ After, Before }) {
    // const client = webdriverio.remote({ browserName: 'chrome' });

    Before(function() {
        return this.driver.init({ browserName: 'chrome' });
    });

    After(function() {
        return this.driver.end();
    });
});