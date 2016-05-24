"use strict";
var util_1 = require('util');
var get_type_1 = require('./get-type');
var inspectOptions = {
    depth: null
};
function assignTypes() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i - 0] = arguments[_i];
    }
    return JSON.stringify(args.map(function (output) {
        var type = get_type_1.default(output);
        switch (type) {
            case 'object':
            case 'array':
                output = JSON.stringify(output);
                output = util_1.inspect(output, inspectOptions);
                output = output.substring(1, output.length - 1);
                break;
            case 'undefined':
            case 'null':
            case 'NaN':
                return { type: type };
        }
        return { type: type, output: output };
    }));
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = assignTypes;
