const commandLineArgs   = require('command-line-args');
const shell				= require('shelljs');
const fs				= require('fs');
const path				= require('path');
const os 				= require('os').platform();

const home 				= process.env.HOME;
const test 				= process.env.TEST;

const dirProject 		= path.join(__dirname);
const dirResults		= path.join(dirProject, 'testResults');
const dirScreenshots    = path.join(dirResults, 'screenshots');

const script_options = commandLineArgs(
    [
        { name: 'test', type: Boolean }
    ]
);

createDirectories();

if (script_options.test) {
    shell.exec('./node_modules/.bin/cucumber-js');
}


function createDirectories() {
    if (!fs.existsSync(dirResults)) {
        fs.mkdirSync(dirResults);
    }

    if (!fs.existsSync(dirScreenshots)) {
        fs.mkdirSync(dirScreenshots);
    }
}