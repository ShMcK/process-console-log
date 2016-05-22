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
	const logged = parser([JSON.stringify({
		type: 'string',
		output: 'This is a string'
	})]);
	console.log(logged);
	t.is(console.log.calledWith('This is a string'), true);
});

test('parse a simple number', t => {
	const logged = parser([JSON.stringify({
		type: 'number',
		output: '2'
	})]);
	console.log(logged);
	t.is(console.log.calledWith(2), true);
});

test('parse a simple boolean', t => {
	const logged = parser([JSON.stringify({
		type: 'boolean',
		output: 'true'
	})]);
	console.log(logged);
	t.is(console.log.calledWith(true), true);
});

test('parse a simple date', t => {
	const date = new Date();
	const logged = parser([JSON.stringify({
		type: 'date',
		output: date
	})]);
	console.log(logged);
	t.is(console.log.calledWith(date), true);
});

test('parse undefined', t => {
	const logged = parser([JSON.stringify({
		type: 'undefined',
		output: 'undefined'
	})]);
	console.log(logged);
	t.is(console.log.calledWith(undefined), true);
});

test('parse null', t => {
	const logged = parser([JSON.stringify({
		type: 'null',
		output: 'null'
	})]);
	console.log(logged);
	t.is(console.log.calledWith(null), true);
});

test('parse NaN', t => {
	const logged = parser([JSON.stringify({
		type: 'NaN',
		output: 'NaN'
	})]);
	console.log(logged);
	t.is(console.log.calledWith(NaN), true);
});

test('parse a simple object', t => {
	const logged = parser([JSON.stringify({
		type: 'object',
		output: '{"a": 1, "b": 2}'
	})]);
	console.log(logged);
	t.is(console.log.calledWith({
		a: 1,
		b: 2
	}), true);
});

test('parse a simple array', t => {
	const logged = parser([JSON.stringify({
		type: 'array',
		output: '[1, 2, 3]'
	})]);
	console.log(logged);
	t.is(console.log.calledWith([1, 2, 3]), true);
});

test('parse a nested object', t => {
	const logged = parser([JSON.stringify({
		type: 'object',
		output: '{"a": { "b": { "c": { "d": { "e": 1 }}}}}'
	})]);
	console.log(logged);
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
	const logged = parser([JSON.stringify({
		type: 'array',
		output: '[1, [2, [3, [4, [5]]]]]'
	})]);
	console.log(logged);
	t.is(console.log.calledWith([1, [2, [3, [4, [5]]]]]), true);
});
