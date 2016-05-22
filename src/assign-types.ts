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
      if (output !== output) {
        return 'NaN';
      } else {
        return 'number';
      }
  }
  return typeof output;
}

// (a, b, c) => [{type, output}]
export default function assignTypes(...args: any[]): Type[] {
  return args.map((output) => {
    const type = getType(output);
    if (type === 'object' || type === 'array') {
      // display nested
      output = inspect(output, {
        depth: null
      });
    }
    return { type, output };
  });
}
