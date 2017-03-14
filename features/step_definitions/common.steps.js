const { defineSupportCode }     = require('cucumber');

defineSupportCode(function({Given, When, Then}) {

    Given('I am on {stringInDoubleQuotes}', function (destinationUrl) {
        return this.commonPage.open(destinationUrl);
    });

    Then('I am presented with the {stringInDoubleQuotes} homepage', function (expectedUrl) {
        return this.commonPage.checkPageUrl(expectedUrl)
    });

});