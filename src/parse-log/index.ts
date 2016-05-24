import parseOutputByType from './parse-type';


// [{ "type": "x", "output": "y"}]
export default function parseLog(logged: string): any {
  const logs: Type[] = JSON.parse(logged);
  const toLog = logs.map((log: Type) => {
    return parseOutputByType(log);
  });
  // log to console
  console.log(...toLog);
  return toLog;
}
