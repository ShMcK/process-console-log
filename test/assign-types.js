import test from 'ava';
import assignTypes from '../lib/assign-types';

test('assigns string', t => {
	const input = 'This is a string';
	const expected = [{
		type: 'string',
		output: 'This is a string'
	}];
	t.deepEqual(assignTypes(input), expected);
});

test('assigns number', t => {
	const input = 12;
	const expected = [{
		type: 'number',
		output: 12
	}];
	t.deepEqual(assignTypes(input), expected);
});

test('assigns object', t => {
	const input = {
		a: 1,
		b: 2
	};
	const expected = [{
		type: 'object',
		output: {
			a: 1,
			b: 2
		}
	}];
	t.deepEqual(assignTypes(input), expected);
});

test('assigns array', t => {
	const input = [1, 2, 3];
	const expected = [{
		type: 'array',
		output: [1, 2, 3]
	}];
	t.deepEqual(assignTypes(input), expected);
});

test('assigns date', t => {
	var date = new Date();
	const input = date;
	const expected = [{
		type: 'date',
		output: date
	}];
	t.deepEqual(assignTypes(input), expected);
});

test('multiple strings', t => {
	const expected = [{
		type: 'string',
		output: 'This is a string'
	}, {
		type: 'string',
		output: 'Another string'
	}];
	t.deepEqual(assignTypes(
		'This is a string', 'Another string'
	), expected);
});

test('multiple numbers', t => {
	const expected = [{
		type: 'number',
		output: 1
	}, {
		type: 'number',
		output: 2
	}];
	t.deepEqual(assignTypes(1, 2), expected);
});

test('large objects', t => {
	const input = {
		a: {
			b: {
				c: {
					d: 2
				}
			}
		}
	};
	const expected = [{
		type: 'object',
		output: input
	}];
	t.deepEqual(assignTypes(input), expected);
});

test('nested arrays', t => {
	const input = [1, [2, [3, [4, [5]]]]];
	const expected = [{
		type: 'array',
		output: input
	}];
	t.deepEqual(assignTypes(input), expected);
})
