if (window.console && console.log) {
    var originalLog_1 = console.log;
    console.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        originalLog_1.apply(this, assignTypes(args));
    };
}
function assignTypes(args) {
    var types = args.map(function (arg) {
        return typeof arg;
    });
    if (types.indexOf('string') > -1) {
        return [].concat({
            type: 'string',
            output: types.join(' ')
        });
    }
    types.map(function (type, index) {
        if (Object.prototype.toString.call(type) === '[object Date]') {
            return {
                type: 'date',
                output: args[index]
            };
        }
        return {
            type: type,
            output: JSON.parse(args[index])
        };
    });
}
