const command_line_args = require('command-line-args');
const shell				= require('shelljs');
const fs				= require('fs');
const path				= require('path');
const os 				= require('os').platform();

const home 				= process.env.HOME;
const test 				= process.env.TEST;

const dir_project 		= path.join(__dirname);
const dir_results		= path.join(dir_project, 'test_results');
const dir_screenshots   = path.join(dir_results, 'screenshots');

// TODO: finish script options
const script_options = command_line_args(
    [
        { name: 'test', type: Boolean }
    ]
);

createDirectories();

if (script_options.test) {
    shell.exec('./node_modules/.bin/cucumber-js');
}


function createDirectories() {
    if (!fs.existsSync(dir_results)) {
        fs.mkdirSync(dir_results);
    }

    if (!fs.existsSync(dir_screenshots)) {
        fs.mkdirSync(dir_screenshots);
    }
}