import {inspect} from 'util';
import getType from './get-type';

// https://nodejs.org/api/util.html#util_util_inspect_object_options
const inspectOptions = {
  depth: null
};

// (a, b, c) => [{type, output}]
export default function assignTypes(...args: any[]): string {
  return JSON.stringify(
    args.map((output: any) => {
      const type: string = getType(output);
      switch (type) {
        case 'object':
        case 'array':
          output = JSON.stringify(output);
          output = inspect(output, inspectOptions);
          output = output.substring(1, output.length - 1);
          return { type, output };
        case 'undefined':
        case 'null':
        case 'NaN':
          return { type };
      }
      return { type, output };
    })
  );
}
