function Page() {

}

Page.prototype.open = function(path) {
    this.driver.url(path);
};

// current form for POP would need to pass context back and forth
// Page.prototype.open = function(context, path) {
//     context.driver.url(path);
// };

module.exports = new Page();