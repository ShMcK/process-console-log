import assignTypes from './assign-types';

export default function initProcessLogger() {
  if (window.console && console.log) {
    const originalLog = console.log;

    window.console.log = function(...args) {
      originalLog.apply(this, assignTypes(args));
    };
  }
}
