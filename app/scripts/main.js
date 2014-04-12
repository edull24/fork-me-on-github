/*global require*/
'use strict';

require.config({
    'baseUrl': 'scripts',
    'shim': {
        'foundation': {
            'deps': [
                'jquery',
                'fastclick'
            ]
        },
        // Add Foundation components here.
        // Example:
        // 'foundation.topbar': {
        //     'deps': [
        //         'foundation'
        //     ]
        // },
        // 'foundation.alert': {
        //     'deps': [
        //         'foundation'
        //     ]
        // },
        'handlebars': {
            'exports': 'Handlebars',
            'init': function() {
                // Since we are setting the config
                // option wrap: true in the requirejs
                // grunt task, we must make sure Handlebars
                // gets registered as a global variable since
                // Handlebars isn't an AMD module.
                return Handlebars;
            }
        }
    },
    'paths': {
        'jquery': '../bower_components/jquery/dist/jquery',
        'fastclick': '../bower_components/fastclick/lib/fastclick',
        'foundation': '../bower_components/foundation/js/foundation/foundation',
        // Add Foundation components here.
        // Example:
        // 'foundation.topbar': '../bower_components/foundation/js/foundation/foundation.topbar',
        // 'foundation.alert': '../bower_components/foundation/js/foundation/foundation.alert',
        'handlebars': '../bower_components/handlebars/handlebars.runtime.min'
    }
});

require(
[
    'app',
    'foundation',
    // Add Foundation components here.
    // Example:
    // 'foundation.topbar',
    // 'foundation.alert'
],
function(app) {

    app.init();

});
