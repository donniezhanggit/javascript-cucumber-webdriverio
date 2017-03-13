const common_page = require('./common_page');

const google_page = Object.create(common_page, {

    // ---- selectors ---- //
    search_box: { get: function() { return this.driver.element('#lst-ib'); } },
    search_results: { get: function() { return this.driver.elements('#ires .g .r a'); } },

    // ---- page methods ---- //
    perform_search: { value: function(search_text) {
        this.search_box.setValue(search_text);
        this.search_box.submitForm();
    }}

});

module.exports = google_page;