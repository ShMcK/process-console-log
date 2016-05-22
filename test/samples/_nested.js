const {
	initProcessLogger
} = require('../../lib');

initProcessLogger();

console.log({
	a: {
		b: {
			c: {
				d: {
					e: 1
				}
			}
		}
	}
});

console.log([1, [2, [3, [4, [5]]]]]);
