#!/usr/bin/env node
import yargs = require("yargs");
import { hideBin } from "yargs/helpers";
import { execSync } from 'child_process';
import fs = require("fs");

const name = 'classml-cli';

yargs(hideBin(process.argv))
  .command('init', 'initialize a new classml project', undefined, (argv) => {
    try {
      execSync('npm init -y');
      const packageJson = JSON.parse(fs.readFileSync('package.json').toString());
      packageJson['scripts'] = {
        'build': 'classml build',
        'start': 'classml start'
      };
      fs.writeFileSync('package.json', JSON.stringify(packageJson));
    } catch (err) {
      console.error(name + ' error: ', err);
    }
  })
  .option('javascript', {
    alias: 'js',
    type: 'boolean',
    description: 'Make a JavaScript project instead of TypeScript'
  })
  .argv;
