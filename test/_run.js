"use strict";
var child_process_1 = require('child_process');
function run() {
    var files = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        files[_i - 0] = arguments[_i];
    }
    var child = child_process_1.execFile('node', files, function (error, stdout, stderr) {
        if (error) {
            throw error;
        }
        console.log(stdout);
    });
}
exports.__esModule = true;
exports["default"] = run;
