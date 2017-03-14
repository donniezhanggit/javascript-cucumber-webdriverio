const commonPage   = require('./common.page');

const selectors = {
    searchBox: '#lst-ib',
    searchResults: '#ires .g .r a'
};

const googlePage = Object.create(commonPage, {

    performSearch: { value: function(searchText) {
        return this
            .driver
            .setValue(selectors.searchBox, searchText)
            .keys('Enter')
            .waitForValue(selectors.searchBox, 10000);
    }},

    selectResult: { value: function(expectedLink) {
        return this
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