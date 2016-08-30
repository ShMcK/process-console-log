import test from 'ava';
import getType from '../lib/logger/get-type';

test('gets string', t => {
  const result = getType('a string');
  const expected = 'string';
  t.is(result, expected);
});

test('gets number', t => {
  const result = getType(42);
  const expected = 'number';
  t.is(result, expected);
});

test('gets array', t => {
  const result = getType([1, 2, 3]);
  const expected = 'array';
  t.is(result, expected);
});

test('gets object', t => {
  const result = getType({a : 1});
  const expected = 'object';
  t.is(result, expected);
})
