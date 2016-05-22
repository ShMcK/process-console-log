"use strict";
function parseLog(logged) {
    return logged.map(function (_a) {
        var type = _a.type, output = _a.output;
        switch (type) {
            case 'string':
                return output.toString();
            case 'date':
                console.log(new Date(output));
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
            case 'array':
            case 'object':
                return JSON.parse(output);
            default:
                return "Error. type: " + type + ", output: " + output;
        }
    }).forEach(function (result) {
        console.log(result);
    });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = parseLog;
