const loggerMin = `
'use strict';
const util = require('util');

function getType(output) {
  switch (Object.prototype.toString.call(output)) {
    case '[object Array]':
      return 'array';
    case '[object Date]':
      return 'date';
    case '[object Null]':
      return 'null';
    case '[object Number]':
      // NaN !== NaN
      return (output !== output) ? 'NaN' : 'number';
  }
  return typeof output;
}
const inspectOptions = {
  depth: null
};
function assignTypes(args) {
  return JSON.stringify(
    args.map((output) => {
      const type = getType(output);
      switch (type) {
        case 'object':
        case 'array':
          output = JSON.stringify(output);
          output = util.inspect(output, inspectOptions);
          output = output.substring(1, output.length - 1);
          break;
        case 'undefined':
        case 'null':
        case 'NaN':
          return { type };
      }
      return { type, output };
    })
  );
}

if (console && console.log) {
  const originalLog = console.log;

  console.log = (...args) => {
    originalLog.apply(this, [assignTypes(args)]);
  };
};
`;
export default loggerMin;
