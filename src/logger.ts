import assignTypes from './assign-types';

if (window.console && console.log) {
  const originalLog = console.log;

  console.log = function(...args) {
    originalLog.apply(this, assignTypes(args));
  };
}
