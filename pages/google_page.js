const common_page   = require('./common_page');
const hooks         = require('../features/support/hooks');

const google_page = Object.create(common_page, {

    // ---- selectors ---- //
    // search_box: { get: function() { return hooks.driver.element('#lst-ib'); } },
    search_results: { get: function() { return hooks.driver.elements('#ires .g .r a'); } },

    // search_box: function() { return hooks.driver.element('#lst-ib'); },

    // search_box: { value: function() { return hooks.driver.element('#lst-ib'); } },

    // startUp : function () {
    //     if (platform == 'desktop') {
    //         return this
    //             .init()
    //             .windowHandleMaximize()
    //             .windowHandleSize(resolution);
    //     } else {
    //         return this
    //             .init();
    //     }
    // },

    search_box: function() {
        return hooks.driver.element('#lst-ib');
    },



//     open: { value: function(path) {
//     hooks.driver.url(path);
// }}

    // ---- page methods ---- //
    perform_search: { value: function(search_text) {
        // this.search_box.setValue(search_text);
        // this.search_box.submitForm();


        this.search_box.setValue(search_text);


        // hooks.driver.element('#lst-ib').setValue(search_text);
    }}

});

module.exports = google_page;