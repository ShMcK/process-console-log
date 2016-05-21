"use strict";
function assignTypes(args) {
    var types = args.map(function (arg) { return typeof arg; });
    if (types.indexOf('string') > -1) {
        return [].concat({
            type: 'string',
            output: args.join(' ')
        });
    }
    return args.map(function (arg, index) {
        var type = null;
        switch (Object.prototype.toString.call(arg)) {
            case '[object Array]':
                type = 'array';
                break;
            case '[object Date]':
                type = 'date';
                break;
            default:
                type = typeof arg;
        }
        return { type: type, output: arg };
    });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = assignTypes;
