import prune from './prune';

export default function assignTypes(args: any[]): Type[] {
  const types = args.map((arg) => typeof arg);

  // if any output is a string, type is string
  if (types.indexOf('string') > -1) {
    return [].concat({
      type: 'string',
      output: args.join(' ')
    });
  }

  return args.map(function(arg, index) {
    let type = null;
    switch (Object.prototype.toString.call(arg) {
      case '[object Array]':
        type = 'array';
        break;
      case '[object Date]':
        type = 'date';
        break;
      default:
        type = typeof arg;
    }
    return { type, output: arg };
  });
}
