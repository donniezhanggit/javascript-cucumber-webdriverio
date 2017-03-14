const glob  = require('glob').sync;
const path  = require('path');
const pages = path.join(__dirname, '../../', 'pages', '*.page.js');

module.exports.load = function(world) {

    return glob(pages)
        .forEach(pagePath => {

            let pageName = path.basename(pagePath);
            let name = pageName.substr(0, pageName.length - 8) + 'Page';

            world[name] = require(pagePath);
            world[name].setDriver(world.driver);
        });

};