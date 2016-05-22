"use strict";
function getType(arg) {
    switch (Object.prototype.toString.call(arg)) {
        case '[object Array]':
            return 'array';
        case '[object Date]':
            return 'date';
        case '[object Null]':
            return 'null';
        case '[object Number]':
            if (arg !== arg) {
                return 'NaN';
            }
            else {
                return 'number';
            }
    }
    return typeof arg;
}
function assignTypes() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i - 0] = arguments[_i];
    }
    return args.map(function (arg) {
        return { type: getType(arg), output: arg };
    });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = assignTypes;
