"use strict";
const parse_type_1 = require('./parse-type');
function parseLog(logged) {
    const logs = JSON.parse(logged);
    const toLog = logs.map((log) => {
        return parse_type_1.default(log);
    });
    console.log(...toLog[0]);
    return toLog;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = parseLog;
