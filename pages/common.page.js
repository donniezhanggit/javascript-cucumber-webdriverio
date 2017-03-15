const hooks     = require('../features/support/hooks');
const should    = require('should');

function Page() {}

Page.prototype.open = function(path) {
    return hooks.driver.url(path);
};

Page.prototype.checkUrl = function(expectedUrl) {
    return hooks.driver.getUrl()
        .then(function(actualUrl) {
            actualUrl.should.be.equal(expectedUrl);
        });
};

module.exports = new Page();
