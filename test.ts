/// <reference path="bundle.d.ts" />
/// <reference path="typings/index.d.ts" />

import { parse } from 'content-type';
import assert = require('assert');

assert.equal(parse('text/html; charset=utf-8').type, 'text/html');
