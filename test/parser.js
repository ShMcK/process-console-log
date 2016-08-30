// import test from 'ava';
// import parser from '../lib/parse-log';
// import sinon from 'sinon';
//
// test.beforeEach(t => {
// 	t.context.log = console.log;
// 	console.log = sinon.spy();
// });
//
// test.afterEach(t => {
// 	console.log = t.context.log;
// });
//
// test('parse a simple string', t => {
// 	const logged = parser('[{\"type\":\"string\",\"output\":\"This is a string\"}]');
// 	console.log(logged);
// 	const expected = ["This is a string"];
// 	t.deepEqual(logged, expected);
// });
//
// test('parse a simple number', t => {
// 	const logged = parser('[{\"type\":\"number\",\"output\":\"2\"}]');
// 	const expected = [2];
// 	t.deepEqual(logged, expected);
// });
//
// test('parse a simple boolean', t => {
// 	const logged = parser('[{\"type\":\"boolean\",\"output\":\"true\"}]');
// 	const expected = [true];
// 	t.deepEqual(logged, expected);
// });
//
// test('parse a simple date', t => {
// 	const date = new Date();
// 	const logged = parser([`{\"type\":\"date\",\"output\":\"${date}\"}`]);
// 	const expected = [date];
// 	t.deepEqual(logged[0] instanceof Date, true);
// });
//
// test('parse undefined', t => {
// 	const logged = parser('[{\"type\":\"undefined\"}]');
// 	const expected = [undefined];
// 	t.deepEqual(logged, expected);
// });
//
// test('parse null', t => {
// 	const logged = parser('[{\"type\":\"null\"}]');
// 	const expected = [null];
// 	t.deepEqual(logged, expected);
// });
//
// test('parse NaN', t => {
// 	const logged = parser('[{\"type\":\"NaN\",\"output\":\"NaN\"}]');
// 	const expected = ["NaN"];
// 	t.deepEqual(logged, expected);
// });
//
// test('parse a simple object', t => {
// 	const logged = parser([`{\"type\":\"object\",\"output\":\"{\"a\": 1,\"b\": 2}\"}}`])
// 	const expected = [{
// 		a: 1,
// 		b: 2
// 	}];
// 	console.log(logged);
// 	console.log(expected)
// 	t.deepEqual(logged, expected);
// });
//
// test('parse a simple array', t => {
// 	const logged = parser(['{\"type\":\"array\",\"output\":\"[1,2,3]\"}']);
// 	const expected = [
// 		[1, 2, 3]
// 	];
// 	t.deepEqual(logged, expected);
// });
//
// test('parse a nested object', t => {
// 	const logged = parser([JSON.stringify({
// 		type: 'object',
// 		output: '{"a":{"b":{"c":{"d":{"e": 1}}}}}'
// 	})]);
// 	console.log(logged);
// 	t.is(console.log.calledWith({
// 		a: {
// 			b: {
// 				c: {
// 					d: {
// 						e: 1
// 					}
// 				}
// 			}
// 		}
// 	}), true);
// });
//
// test('parse a nested array', t => {
// 	const logged = parser([JSON.stringify({
// 		type: 'array',
// 		output: '[1,[2,[3,[4,[5]]]]]'
// 	})]);
// 	console.log(logged);
// 	t.is(console.log.calledWith([1, [2, [3, [4, [5]]]]]), true);
// });
//
// test('parse a nested array', t => {
// 	const logged = parser([JSON.stringify({
// 		type: 'array',
// 		output: '[1,[2,[3,[4,[5]]]]]'
// 	})]);
// 	console.log(logged);
// 	t.is(console.log.calledWith([1, [2, [3, [4, [5]]]]]), true);
// });
