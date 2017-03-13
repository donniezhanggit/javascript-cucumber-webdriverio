const webdriverio               = require('webdriverio');
const { defineSupportCode }     = require('cucumber');

// TODO: create device load solution with devices.js
function CustomWorld() {
    this.driver = webdriverio.remote( {browserName: 'chrome'} );

    // TODO: maybe something like
    // this.google_page(this.driver);
}

defineSupportCode(function({setWorldConstructor}) {
    setWorldConstructor(CustomWorld);
});

defineSupportCode(function({ setDefaultTimeout }) {
    setDefaultTimeout(10 * 1000);
});
