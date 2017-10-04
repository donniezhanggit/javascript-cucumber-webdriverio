const { defineSupportCode }     = require('cucumber');
const page                      = require('../../pages/google.page');

defineSupportCode(function({Given, When, Then}) {

    When(/^I search for "([^"]*)?"$/, function (target) {
        page.searchFor(target);
    });

    When(/^select "([^"]*)?" in the search results$/, function (result) {
        page.select(result);
    });

});