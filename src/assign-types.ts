import {inspect} from 'util';

function getType(output: any): string {
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

// https://nodejs.org/api/util.html#util_util_inspect_object_options
const inspectOptions = {
  depth: null
};

function stripArray(output: string): string {
  return output[0]; // .match(/^\[\s(.+)\s\]$/)
}

// (a, b, c) => [{type, output}]
export default function assignTypes(...args: any[]): string[] {
  const types = args.map((output: any) => {
    output = stripArray(output);
    const type: string = getType(output);
    switch (type) {
      case 'object':
      case 'array':
        output = inspect(output, inspectOptions);
        break;
      case 'undefined':
      case 'null':
      case 'NaN':
        output = type;
        break;
    }
    // output = typeof output !== 'string' ? JSON.stringify(output) : output;
    const print = JSON.stringify({ type, output: output.toString() });
    return print;
  });
  return types;
}
