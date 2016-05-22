"use strict";
function parseType(_a) {
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
            if (output[0] === "'") {
                output = output.substring(1, output.length - 1);
            }
            return JSON.parse(output);
        default:
            return "Error. type: " + type + ", output: " + output;
    }
}
function parseLog(logged) {
    return parseType(JSON.parse(logged));
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = parseLog;
