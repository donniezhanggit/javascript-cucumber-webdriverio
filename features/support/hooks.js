const { defineSupportCode }     = require('cucumber');
const webdriverio               = require('webdriverio');

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