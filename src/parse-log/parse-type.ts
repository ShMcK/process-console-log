export default function parseOutputByType({type, output}): any {
  switch (type) {
    case 'function':
    case 'string':
      return output;
    case 'date':
      return new Date(output);
    case 'number':
      return Number(output);
    case 'null':
      return null;
    case 'undefined':
      return undefined;
    case 'NaN':
      return NaN;
    case 'boolean':
    case 'symbol':
    case 'array':
    case 'object':
      return JSON.parse(output);
    case 'error':
      if (output.match(/^Error\n/)) {
        // stack trace
        return output;
      }
      /* falls through */
    default:
      return `Error. type: ${type}, output: ${output}`;
  }
}
