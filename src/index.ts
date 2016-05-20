if (window.console && console.log) {
  const originalLog = console.log;

  console.log = function(...args) {
    originalLog.apply(this, assignTypes(args));
  };
}

function assignTypes(args: any[]): Type[] {
  const types = args.map(function(arg) {
    return typeof arg;
  });

  // if any output is a string, type is string
  if (types.indexOf('string') > -1) {
    return [].concat({
      type: 'string',
      output: types.join(' ')
    });
  }

  types.map(function(type, index) {
    if (Object.prototype.toString.call(type) === '[object Date]') {
      return {
        type: 'date',
        output: args[index]
      };
    }
    return {
      type,
      output: JSON.parse(args[index])
    };
  });
}
