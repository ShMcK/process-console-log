"use strict";
var isObject = function (o) {
    var a = Object.prototype.toString.call(o);
    return a.match(/^\[object ([A-Z][a-z]+)\]/);
};
function getType(output) {
    var obj = isObject(output);
    if (obj && obj[1]) {
        var objType = obj[1].toLowerCase();
        if (objType === 'number') {
            return (output !== output) ? 'NaN' : 'number';
        }
        return objType;
    }
    return typeof output;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = getType;
console.log(getType('Ada Lovelace'));
