const webdriverio               = require('webdriverio');
const { defineSupportCode }     = require('cucumber');

defineSupportCode(function({Given, When, Then}) {
    // Given('I am on the Cucumber.js GitHub repository', {timeout: 10 * 1000}, function() {
    //     return this.driver.get('https://github.com/cucumber/cucumber-js/tree/master');
    // });

    Given('I am on {stringInDoubleQuotes}', function (stringInDoubleQuotes) {
        // Write code here that turns the phrase above into concrete actions
        // callback(null, 'pending');
        // return this.driver.init();
        return 'pending';
    });

    When('I search for {stringInDoubleQuotes}', function (stringInDoubleQuotes, callback) {
        // Write code here that turns the phrase above into concrete actions
        // callback(null, 'pending');
        return 'pending';
    });


    When('select {stringInDoubleQuotes} in the search results', function (stringInDoubleQuotes, callback) {
        // Write code here that turns the phrase above into concrete actions
        // callback(null, 'pending');
        return 'pending';
    });


    Then('I am presented with the {stringInDoubleQuotes} homepage', function (stringInDoubleQuotes) {
        // Write code here that turns the phrase above into concrete actions
        // callback(null, 'pending');
        return 'pending';
    });



});