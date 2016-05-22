const {
	initProcessLogger
} = require('../../lib');

initProcessLogger();

console.log('hello');
console.log(12);
console.log(true);
console.log(null);
console.log(undefined);
console.log(NaN);
console.log(new Date());
console.log({
	a: 1
});
console.log([1, 2, 3]);
