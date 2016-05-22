import {execFile} from 'child_process';

export default function run(...files: string[]) {
  const child = execFile('node', files, (error, stdout, stderr) => {
    if (error) {
      throw error;
    }
    console.log(stdout);
  });
}
