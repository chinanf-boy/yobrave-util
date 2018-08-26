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

test('newObj', t => {
	let old = { a: 1 };
	let n = m.newObj(old);
	t.true(n !== old);
});

test('relative', t => {
	let p = m.relative('./readme.md');
	t.true(p.includes('readme.md'));
});

test('resolvePath', t => {
	let p = m.resolvePath('./readme.md');
	t.true(p.includes(__dirname));
});
