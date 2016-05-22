"use strict";
var util_1 = require('util');
function getType(output) {
    switch (Object.prototype.toString.call(output)) {
        case '[object Array]':
            return 'array';
        case '[object Date]':
            return 'date';
        case '[object Null]':
            return 'null';
        case '[object Number]':
            return (output !== output) ? 'NaN' : 'number';
    }
    return typeof output;
}
var inspectOptions = {
    depth: null
};
function stripArray(output) {
    return output[0];
}
function assignTypes() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i - 0] = arguments[_i];
    }
    return args.map(function (output) {
        output = stripArray(output);
        var type = getType(output);
        if (type === 'object' || type === 'array') {
            output = util_1.inspect(output, inspectOptions);
        }
        return { type: type, output: output };
    });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = assignTypes;
