#!/usr/bin/env node

const yParser = require('yargs-parser');
const command = require('../lib/command/index');

const args = yParser(process.argv.slice(2));
const cwd = process.cwd();
command({ cwd, args });
