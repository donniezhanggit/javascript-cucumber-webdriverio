const { defineSupportCode }     = require('cucumber');
const webdriverio               = require('webdriverio');
const pageLoader                = require('./pageLoader');
const client                    = webdriverio.remote({ browserName: 'chrome' });

/*
TODO:
- driver config via devices.json
- wdio
-- addCommands
-- default waits
 */

function World() {
    this.driver = client;
    pageLoader.load(this);
}

defineSupportCode(function({setWorldConstructor}) {
    setWorldConstructor(World);
});

defineSupportCode(function({ setDefaultTimeout }) {
    setDefaultTimeout(10 * 1000);
});
