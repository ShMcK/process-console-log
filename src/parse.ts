export default function parseLog(logged: Type[]) {
  return logged.map((item) => {
    switch (item.type) {
      case 'string':
        return item.output.toString();
      case 'date':
        return new Date(item.output);
      // number, array, object, etc.
      default:
        return JSON.parse(item.output);
    }
  }).forEach((result) => {
    console.log(result);
  });
}
