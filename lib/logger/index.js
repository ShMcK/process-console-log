"use strict";
var assign_types_1 = require('./assign-types');
function initProcessLogger() {
    if (console && console.log) {
        var originalLog_1 = console.log;
        console.log = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            originalLog_1.apply(this, [assign_types_1.default(args)]);
        };
    }
    ;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = initProcessLogger;