import test from 'ava';
import m from '.';

test('color', t => {
	t.true(!!m.r);
	t.true(!!m.g);
	t.true(!!m.m);
	t.true(!!m.c);
	t.true(!!m.y);
	t.true(!!m.b);
});

test('toS', t => {
	m.toS({ a: 1 });
	t.true(!!m.toS);
});

test('getPath', t => {
	m.getPath('./readme.md');
	t.true(!!m.getPath);
});

test('readFile', t => {
	m.readFile('./readme.md');
	t.true(!!m.readFile);
});
