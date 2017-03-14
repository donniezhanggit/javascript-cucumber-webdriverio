const { defineSupportCode }     = require('cucumber');
const webdriverio               = require('webdriverio');

// exports.driver = driver;

defineSupportCode(function({ After, Before }) {

    Before(function() {
        // return this.driver.init({ browserName: 'chrome' });
        return this
            .driver
            .init({ browserName: 'chrome' });
    });

    Before(function() {
        exports.driver = this.driver;
        // return this
        //     .driver
        //     .url('http://www.google.com');
    });

    After(function() {
        return this
            .driver
            .end();
    });


    // function driver() {
    //     console.log('here');
    //     return this.driver;
    // }

});