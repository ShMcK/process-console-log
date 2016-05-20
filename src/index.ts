import prune from './prune';

if (window.console && console.log) {
  const originalLog = console.log;

  console.log = function(...args) {
    originalLog.apply(this, assignTypes(args));
  };
}

function assignTypes(args: any[]): Type[] {
  const types = args.map((arg) => typeof arg);

  // if any output is a string, type is string
  if (types.indexOf('string') > -1) {
    return [].concat({
      type: 'string',
      output: types.join(' ')
    });
  }

  types.map(function(type, index) {
    // handle dates
    if (Object.prototype.toString.call(type) === '[object Date]') {
      return {
        type: 'date',
        output: args[index].toString()
      };
    }
    // handle all other types
    return {
      type,
      output: JSON.parse(prune(args[index], 6, 50))
    };
  });
}
