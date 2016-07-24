"use strict";
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
        case '[object Error]':
            return 'error';
        default:
            return typeof output;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = getType;
