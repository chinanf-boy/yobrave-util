# yobrave-util [![Build Status](https://travis-ci.org/chinanf-boy/yobrave-util.svg?branch=master)](https://travis-ci.org/chinanf-boy/yobrave-util) [![codecov](https://codecov.io/gh/chinanf-boy/yobrave-util/badge.svg?branch=master)](https://codecov.io/gh/chinanf-boy/yobrave-util?branch=master) [![explain](http://llever.com/explain.svg)](https://github.com/chinanf-boy/yobrave-util-explain)

「 my util 」

[中文](./readme.md) | ~~[english](./readme.en.md)~~

## Install

```
npm i -g yobrave-util
```

## Usage

```js
const yobraveUtil = require('yobrave-util');

yobraveUtil('unicorns');
//=> 'unicorns & rainbows'
```

## API

### yobraveUtil(input, [options])

#### input

| name: | input        |
| ----- | ------------ |
| Type: | `string`     |
| Desc: | Lorem ipsum. |

#### options

##### foo

| name:    | foo          |
| -------- | ------------ |
| Type:    | `boolean`    |
| Default: | `false`      |
| Desc:    | Lorem ipsum. |

## CLI

```
npm install --global yobrave-util
```

```
$ yobrave-util --help

  Usage
    yobrave-util [input]

  Options
    --foo  Lorem ipsum [Default: false]

  Examples
    $ yobrave-util ponies
    ponies & rainbows
```

## concat

- [two-log](https://github.com/chinanf-boy/two-log) just two log with ora/winston
- [weoptions](https://github.com/chinanf-boy/weoptions) need global store object with id

## License

MIT © [chinanf-boy](http://llever.com)
