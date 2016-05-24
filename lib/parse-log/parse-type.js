"use strict";
function parseOutputByType(_a) {
    var type = _a.type, output = _a.output;
    switch (type) {
        case 'string':
            return output;
        case 'date':
            return new Date(output);
        case 'number':
            return Number(output);
        case 'null':
            return null;
        case 'undefined':
            return undefined;
        case 'NaN':
            return NaN;
        case 'boolean':
            return JSON.parse(output);
        case 'array':
        case 'object':
            return JSON.parse(output);
        default:
            return "Error. type: " + type + ", output: " + output;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = parseOutputByType;
