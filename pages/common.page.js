const page      = require('./page');
const should    = require('should');

const CommonPage = Object.create(page, {

    open: { value: function(path) {
        return this
            .driver
            .url(path);
    }},

    checkPageUrl: { value: function(expectedUrl) {
        return this
            .driver
            .getUrl()
            .then(function(actualUrl) {
                actualUrl.should.be.equal(expectedUrl);
            });
    }}

});

module.exports = CommonPage;