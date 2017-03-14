const { defineSupportCode }     = require('cucumber');

defineSupportCode(function({Given, When, Then}) {

    When('I search for {stringInDoubleQuotes}', function (searchText) {
        return this.googlePage.performSearch(searchText);
    });

    When('select {stringInDoubleQuotes} in the search results', function (expectedLink) {
        return this.googlePage.selectResult(expectedLink);
    });

});