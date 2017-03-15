const hooks = require('../features/support/hooks');

function Page() {}

Page.prototype.open = function(path) {
    return hooks.driver.url(path);
};

module.exports = new Page();
