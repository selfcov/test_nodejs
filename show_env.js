#!/usr/bin/env node

'use strict';

console.log(process.env);

var json_string = JSON.stringify(process.env);
var json_buffer = new Buffer(json_string);
console.log(json_buffer.toString('base64'));
