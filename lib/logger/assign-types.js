"use strict";
const util_1 = require('util');
const get_type_1 = require('./get-type');
const inspectOptions = {
    depth: null
};
function assignTypes(...args) {
    return JSON.stringify(args.map((output) => {
        const type = get_type_1.default(output);
        switch (type) {
            case 'object':
            case 'array':
                output = JSON.stringify(output);
                output = util_1.inspect(output, inspectOptions);
                output = output.substring(1, output.length - 1);
                return { type, output };
            case 'undefined':
            case 'null':
            case 'NaN':
                return { type };
        }
        return { type, output };
    }));
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = assignTypes;
