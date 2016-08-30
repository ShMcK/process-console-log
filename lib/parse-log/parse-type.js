"use strict";
function parseOutputByType({ type, output }) {
    switch (type) {
        case 'function':
        case 'string':
            return output;
        case 'boolean':
        case 'symbol':
        case 'array':
        case 'object':
            return JSON.parse(output);
        case 'date': return new Date(output);
        case 'number': return Number(output);
        case 'null': return null;
        case 'undefined': return undefined;
        case 'NaN': return NaN;
        case 'error':
            if (output.match(/^Error\n/)) {
                return output;
            }
        default: return `Error. type: ${type}, output: ${output}`;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = parseOutputByType;
