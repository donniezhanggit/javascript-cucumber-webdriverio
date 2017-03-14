function Page() {}

Page.prototype.setDriver = function(driver) {
    this.driver = driver;
};

module.exports = new Page();