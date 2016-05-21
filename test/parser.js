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
	console.log('hi');
	console.log.calledWith('yo');
});

test('parse a simple number', t => {
	console.log('hi');
	console.log.calledWith('hi');
});
