import assignTypes from './assign-types';

const setLogger = console => {
  if (console && console.log) {
    const originalLog = console.log;
    return (...args: any[]) => {
      originalLog.apply(this, [assignTypes(args)]);
    };
  };
};
export default setLogger;
