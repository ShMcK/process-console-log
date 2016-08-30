"use strict";
const assign_types_1 = require('./assign-types');
const setLogger = console => {
    if (console && console.log) {
        const originalLog = console.log;
        return (...args) => {
            originalLog.apply(this, [assign_types_1.default(args)]);
        };
    }
    ;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = setLogger;
