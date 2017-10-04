const { defineSupportCode }     = require('cucumber');
const page                      = require('../../pages/page');

defineSupportCode(function({Given, When, Then}) {

    Given(/^I am on "([^"]*)?"$/, function (url) {
        page.open(url);
    });

    Then(/^I am presented with the page "([^"]*)?"$/, function (url) {
        page.checkUrl(url);
    });

});