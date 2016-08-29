import assignTypes from './logger/assign-types';

export {default as parseLog} from './parse-log';
export {default as logger} from './logger/logger-min';

export default function setProcessLogger(): any {
  if (console && console.log) {
    const originalLog = console.log;
    return function(...args: any[]) {
      originalLog.apply(this, [assignTypes(args)]);
    };
  };
}
