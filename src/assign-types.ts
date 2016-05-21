import prune from './prune';

function getType(arg: any): string {
  switch (Object.prototype.toString.call(arg)) {
    case '[object Array]':
      return 'array';
    case '[object Date]':
      return 'date';
    default:
      return typeof arg;
  }
}

// (a, b, c) => [{type, output}]
export default function assignTypes(...args: any[]): Type[] {
  return args.map((arg) => {
    return { type: getType(arg), output: arg };
  });
}
