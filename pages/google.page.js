const page    = require('./page');
const should    = require('should');

const googlePage = Object.create(page, {

    searchResults: { get: function() { return $$('#ires .g .r a'); } },
    searchBox: { get: function() { return $('#lst-ib'); } },

    searchFor: { value: function(target) {
        this.searchBox.setValue(target);
        this.searchBox.addValue("Enter");
    }},

    select: { value: function(target) {
        let result = this.searchResults.find((element) => element.getText() == target);
        should.exist(result, `'${target}' was not in the list of results`);
        result.click();
    }},
});

module.exports = googlePage;