const webdriverio               = require('webdriverio');
const should                    = require('should');
const { defineSupportCode }     = require('cucumber');
const page                      = require('../../pages/google_page');

defineSupportCode(function({Given, When, Then}) {

    // When('I search for {stringInDoubleQuotes}', function (search_text) {
    //     return this
    //         .driver
    //         .element('#lst-ib')
    //         .setValue(search_text)
    //         .keys('Enter')
    //         .waitForValue('#lst-ib', 10000);
    // });
    //
    // TODO: for POP later
    When('I search for {stringInDoubleQuotes}', function (search_text) {
        page.perform_search(search_text);
    });
    //
    // When('select {stringInDoubleQuotes} in the search results', function (expected_link) {
    //     return this
    //         .driver
    //         .waitForVisible('#ires .g .r a', 10000)
    //         .getText('#ires .g .r a')
    //         .then(function(results) {
    //             for (let i = 0; i < results.length; i++) {
    //                 if (results[i].toUpperCase().indexOf(expected_link)) {
    //                     return this
    //                         .click(`=${results[i]}`);
    //                 }
    //             }
    //         });
    // });
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