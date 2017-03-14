const { defineSupportCode }     = require('cucumber');
const webdriverio               = require('webdriverio');

function World() {
    this.driver = webdriverio.remote( {browserName: 'chrome'} );
}

defineSupportCode(function({setWorldConstructor}) {
    setWorldConstructor(World);
});

defineSupportCode(function({ setDefaultTimeout }) {
    setDefaultTimeout(10 * 1000);
});
