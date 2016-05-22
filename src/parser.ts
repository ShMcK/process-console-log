export default function parseLog(logged: Type[]): void {
  return logged.map(({type, output}) => {
    switch (type) {
      case 'string':
        return output.toString();
      case 'date':
        console.log(new Date(output));
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
      case 'array':
      case 'object':
        return JSON.parse(output);
      default:
        return `Error. type: ${type}, output: ${output}`;
    }
  }).forEach((result) => {
    console.log(result);
  });
}
