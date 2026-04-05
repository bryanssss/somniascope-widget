(function(global) {
    var SomniaScopeWidget = {};

    SomniaScopeWidget.init = function(options) {
        // Initialization code here
        console.log('SomniaScopeWidget initialized with options:', options);
        // Additional setup can be done here
    };

    // Expose API to the global object
    global.SomniaScopeWidget = SomniaScopeWidget;
})(typeof window !== 'undefined' ? window : this);