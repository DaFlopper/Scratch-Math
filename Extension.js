(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};
    
    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    // Define the 'math' block
    ext.math = function(num1, num2, callback) {
        var result = parseFloat(num1) + parseFloat(num2);
        callback(result);
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            ['R', '%n + %n', 'math', 1, 1],
        ],
        menus: {},
        url: 'https://github.com/DaFlopper/Scratch-Math/blob/main/README.md'
    };

    // Register the extension
    ScratchExtensions.register('Math Extension', descriptor, ext);
})({});
