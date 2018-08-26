'use strict';
const path = require('path');
const tc = require('colorette');

const toS = (str, num = 2) => JSON.stringify(str, null, num);

const getPath = p => require('path').resolve(p);

const readFile = p => require('fs').readFileSync(p, 'utf8');

const newObj = o => JSON.parse(JSON.stringify(o));

const relative = p => path.relative(process.cwd(), p);

const resolvePath = p => path.resolve(p);

exports = module.exports = {
	r: tc.red,
	g: tc.green,
	m: tc.magenta,
	c: tc.cyan,
	y: tc.yellow,
	b: tc.blue,
	colors: tc,
	toS,
	getPath,
	readFile,
	newObj,
	relative,
	resolvePath,
};
