const webdriverio               = require('webdriverio');
const { defineSupportCode }     = require('cucumber');
const page                      = require('../../pages/common.page');


defineSupportCode(function({Given, When, Then}) {

    Given('I am on {stringInDoubleQuotes}', function (url) {
        return page.open(url);
    });

});