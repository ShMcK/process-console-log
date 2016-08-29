const isObject = o => {
  let a = Object.prototype.toString.call(o);
  return a.match(/^\[object ([A-Z][a-z]+)\]/);
};

// return the type of the output
// example:
//  [object Date] -> 'date'
//  string -> 'string'
export default function getType(output: any): string {
  const obj = isObject(output);
  if (obj && obj[1]) {
    let objType = obj[1].toLowerCase();
    if (objType === 'number') {
      return (output !== output) ? 'NaN' : 'number';
    }
    return objType;
  }
  return typeof output;
}

console.log(getType('Ada Lovelace'));
