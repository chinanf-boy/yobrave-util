'use strict';
const tc = require('turbocolor');

const toS = (str, num = 2) => JSON.stringify(str, null, num);

const getPath = p => require('path').resolve(p);

const readFile = p => require('fs').readFileSync(p, 'utf8');

exports = module.exports = {
	r: tc.red,
	g: tc.green,
	m: tc.magenta,
	c: tc.cyan,
	y: tc.yellow,
	b: tc.blue,
	toS,
	getPath,
	readFile,
};
