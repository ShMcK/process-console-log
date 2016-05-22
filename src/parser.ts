function parseType({type, output}): any {
  switch (type) {
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
      return JSON.parse(output);
    case 'array':
    case 'object':
      if (output[0] === "'") {
        output = output.substring(1, output.length - 1);
      }
      return JSON.parse(output);
    default:
      return `Error. type: ${type}, output: ${output}`;
  }
}

export default function parseLog(logged: string): any {
  return parseType(JSON.parse(logged));
}
