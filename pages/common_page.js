const hooks = require('../features/support/hooks');

function Page() {

}

Page.prototype.open = function(path) {
    hooks.driver.url(path);
};

// current form for POP would need to pass context back and forth
// Page.prototype.open = function(context, path) {
//     context.driver.url(path);
// };

module.exports = new Page();

// const common_page = Object.create(hooks, {
//
//     open: { value: function(path) {
//         world.driver.url(path);
//     }}
//
// });
//
// module.exports = common_page;