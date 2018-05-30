'use strict';

import cp = require('child_process');
import JSONStdio = require('json-stdio');
import path = require('path');
import util = require('util');
const child = path.resolve(__dirname + '/child.js');

export const parseCommandp = function (cmd: string): Promise<Array<string>> {
  return new Promise(function (resolve, reject) {
    parseCommand(cmd, function (err, v) {
      err ? reject(err) : resolve(v);
    });
  });
};

export type ErrValCallback = (err: null | Error, val?: Array<string>) => void;

export const parseCommand = function (cmd: string, cb: ErrValCallback) {
  
  const k = cp.spawn('bash');
  const p = JSONStdio.createParser();
  k.stdin.end(`node ${child} ${cmd};\n`);
  
  k.stdout.pipe(p)
  .once('error', function (err) {
    this.removeAllListeners();
    cb(err);
  })
  .once(JSONStdio.stdEventName, function (d) {
    this.removeAllListeners();
    if (d && Array.isArray(d.args)) {
      cb(null, d.args.slice(2));
    }
    else {
      cb(new Error('Command could not be parsed ' + util.inspect(d)));
    }
    
  });
  
};



