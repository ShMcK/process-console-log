import test from 'ava';
import parser from '../lib/parser';
import sinon from 'sinon';

test.beforeEach(t => {
	t.context.log = console.log;
	console.log = sinon.spy();
});

test.afterEach(t => {
	console.log = t.context.log;
});

test('parse a simple string', t => {
	parser([{
		type: 'string',
		output: 'This is a string'
	}]);
	t.is(console.log.calledWith('This is a string'), true);
});

test('parse a simple number', t => {
	parser([{
		type: 'number',
		output: '2'
	}]);
	t.is(console.log.calledWith(2), true);
});

test('parse a simple boolean', t => {
	parser([{
		type: 'boolean',
		output: 'true'
	}]);
	t.is(console.log.calledWith(true), true);
});

test('parse a simple date', t => {
	const date = new Date();
	parser([{
		type: 'date',
		output: date
	}]);
	t.is(console.log.calledWith(date), true);
});

test('parse undefined', t => {
	parser([{
		type: 'undefined',
		output: undefined
	}]);
	t.is(console.log.calledWith(undefined), true);
});

test('parse null', t => {
	parser([{
		type: 'null',
		output: null
	}]);
	t.is(console.log.calledWith(null), true);
});

test('parse NaN', t => {
	parser([{
		type: 'NaN',
		output: NaN
	}]);
	t.is(console.log.calledWith(NaN), true);
});

test('parse a simple object', t => {
	parser([{
		type: 'object',
		output: '{"a": 1, "b": 2}'
	}]);
	t.is(console.log.calledWith({
		a: 1,
		b: 2
	}), true);
});

test('parse a simple array', t => {
	parser([{
		type: 'array',
		output: '[1, 2, 3]'
	}]);
	t.is(console.log.calledWith([1, 2, 3]), true);
});

test('parse a nested object', t => {
	parser([{
		type: 'object',
		output: '{"a": { "b": { "c": { "d": { "e": 1 }}}}}'
	}]);
	t.is(console.log.calledWith({
		a: {
			b: {
				c: {
					d: {
						e: 1
					}
				}
			}
		}
	}), true);
});

test('parse a nested array', t => {
	parser([{
		type: 'array',
		output: '[1, [2, [3, [4, [5]]]]]'
	}]);
	t.is(console.log.calledWith([1, [2, [3, [4, [5]]]]]), true);
});
