(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};
    
    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    // Define the 'addition' block
    ext.addition = function(num1, num2, callback) {
        var result = parseFloat(num1) + parseFloat(num2);
        callback(result);
    };
    
    // Define the 'subtraction' block
    ext.subtraction = function(num1, num2, callback) {
        var result = parseFloat(num1) - parseFloat(num2);
        callback(result);
    };
    
    // Define the 'multiplication' block
    ext.multiplication = function(num1, num2, callback) {
        var result = parseFloat(num1) * parseFloat(num2);
        callback(result);
    };
    
    // Define the 'division' block
    ext.division = function(num1, num2, callback) {
        var result = parseFloat(num1) / parseFloat(num2);
        callback(result);
    };
    
    // Define the 'numb1 > numb2' block
    ext.numb1_greater_than_numb2 = function(num1, num2) {
        return parseFloat(num1) > parseFloat(num2);
    };
    
    // Define the 'numb1 < numb2' block
    ext.numb1_less_than_numb2 = function(num1, num2) {
        return parseFloat(num1) < parseFloat(num2);
    };
    
    // Define the 'equal' block
    ext.equal = function(val1, val2) {
        return parseFloat(val1) === parseFloat(val2);
    };
    
    // Define the 'add to equals' block
    ext.add_to_equals = function(num1, num2, eq, callback) {
        var result = parseFloat(num1) + parseFloat(num2);
        if (result === parseFloat(eq)) {
            callback();
        }
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            ['R', '%n + %n', 'addition', 1, 1],
            ['R', '%n - %n', 'subtraction', 1, 1],
            ['R', '%n * %n', 'multiplication', 3, 6],
            ['R', '%n / %n', 'division', 3, 6],
            ['b', '%n > %n', 'numb1_greater_than_numb2', 3, 6],
            ['b', '%n < %n', 'numb1_less_than_numb2', 3, 6],
            ['', '%n = %n', 'equal', 3, 3],
            ['w', 'add %n to %n = %n', 'add_to_equals', 1, 1, 2]
        ],
        menus: {},
        url: 'https://github.com/DaFlopper/Scratch-Math/blob/main/README.md'
    };

    // Register the extension
    ScratchExtensions.register('Math Extension', descriptor, ext);
})({});
