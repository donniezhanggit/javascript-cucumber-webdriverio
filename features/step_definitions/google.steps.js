const webdriverio               = require('webdriverio');
const should                    = require('should');
const { defineSupportCode }     = require('cucumber');
const page                      = require('../../pages/google.page');

defineSupportCode(function({Given, When, Then}) {

    When('I search for {stringInDoubleQuotes}', function (searchText) {
        return page.performSearch(searchText);
    });

    When('select {stringInDoubleQuotes} in the search results', function (expectedLink) {
        return page.selectResult(expectedLink);
    });
    //
    // Then('I am presented with the {stringInDoubleQuotes} homepage', function (expected_url) {
    //     return this
    //         .driver
    //         .getUrl()
    //         .then(function(actual_url) {
    //             actual_url.should.be.equal(expected_url);
    //         });
    // });

});