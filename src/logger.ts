import assignTypes from './assign-types';

export default function initProcessLogger(): void {
  if (global.console && global.console.log) {
    const originalLog = global.console.log;

    global.console.log = function(...args: any[]) {
      originalLog.apply(this, assignTypes(args));
    };
  };
}
