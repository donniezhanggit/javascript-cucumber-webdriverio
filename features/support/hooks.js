const { defineSupportCode }     = require('cucumber');
const webdriverio               = require('webdriverio');

// exports.driver = driver;

defineSupportCode(function({ After, Before }) {

    Before(function() {
        return this
            .driver
            .init({ browserName: 'chrome' });
    });

    Before(function() {
        exports.driver = this.driver;
    });

    After(function() {
        return this
            .driver
            .end();
    });

});