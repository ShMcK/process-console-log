import assignTypes from './assign-types';

export default function initProcessLogger(): void {
  if (console && console.log) {
    const originalLog = console.log;

    console.log = function(...args: any[]) {
      originalLog.apply(this, assignTypes(args));
    };
  };
}
