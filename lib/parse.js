"use strict";
function parseLog(logged) {
    return logged.map(function (item) {
        switch (item.type) {
            case 'string':
                return item.output.toString();
            case 'date':
                return new Date(item.output);
            default:
                return JSON.parse(item.output);
        }
    }).forEach(function (result) {
        console.log(result);
    });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = parseLog;
