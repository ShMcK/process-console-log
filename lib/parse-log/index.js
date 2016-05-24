"use strict";
var parse_type_1 = require('./parse-type');
function parseLog(logged) {
    var logs = JSON.parse(logged);
    var toLog = logs.map(function (log) {
        return parse_type_1.default(log);
    });
    console.log.apply(console, toLog);
    return toLog;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = parseLog;
