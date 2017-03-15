const commonPage    = require('./common.page');
const hooks         = require('../features/support/hooks');

const selectors = {
    searchBox: '#lst-ib',
    searchResults: '#ires .g .r a'
};

const googlePage = Object.create(commonPage, {

    performSearch: { value: function(searchText) {
        return hooks
            .driver
            .setValue(selectors.searchBox, searchText)
            .waitForValue(selectors.searchBox, 10000)
            .keys('Enter');
    }},

    selectResult: { value: function(expectedLink) {
        return hooks
            .driver
            .waitForVisible(selectors.searchResults, 10000)
            .getText(selectors.searchResults)
            .then(function(results) {
                for (let i = 0; i < results.length; i++) {
                    if (results[i].toUpperCase().indexOf(expectedLink)) {
                        return this
                            .click(`=${results[i]}`);
                    }
                }
            });
    }}

});

module.exports = googlePage;