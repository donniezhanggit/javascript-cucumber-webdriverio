const webdriverio               = require('webdriverio');
const { defineSupportCode }     = require('cucumber');
const page                      = require('../../pages/common_page');


defineSupportCode(function({Given, When, Then}) {

    Given('I am on {stringInDoubleQuotes}', function (url) {
        return this
            .driver
            .url(url);
    });

    // TODO: for POP later
    // Given('I am on {stringInDoubleQuotes}', function (url) {
        // page.open(this, url);
    // });

});