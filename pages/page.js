// const hooks     = require('../features/support/hooks');
const should    = require('should');

function Page() {}

Page.prototype.open = function(path) {
    browser.url(path);
};

Page.prototype.checkUrl = function(expectedUrl) {
    browser.getUrl().should.be.equal(expectedUrl);
};

module.exports = new Page();
