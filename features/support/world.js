// const webdriverio               = require('webdriverio');
// const { defineSupportCode }     = require('cucumber');
// const devices                   = require('./devices');


// let desiredCapabilities = {
//     browserName: 'chrome'
// };


// TODO: Make use of CustomWorld and replace generic `World`
// function CustomWorld() {
//     console.log('Custom World');
//     this.driver = webdriverio.remote( {browserName: 'chrome'} ).init();
// }
//
// defineSupportCode(function({setWorldConstructor}) {
//     setWorldConstructor(CustomWorld);
// });

// defineSupportCode(function({ setDefaultTimeout }) {
//     setDefaultTimeout(10 * 1000);
// });

// // TODO: add other browsers and appium by creating a devices.json solution
// function getDesiredCapabilities() {
//     let desiredCapabilities = {
//         browserName: 'chrome'
//     };
// }


function World( {attach, parameters }) {
    attach = attach
    parameters = parameters
}