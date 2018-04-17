'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const cp = require("child_process");
const JSONStdio = require("json-stdio");
const path = require("path");
const util = require("util");
const child = path.resolve(__dirname + '/child.js');
exports.parseCommandp = function (cmd) {
    return new Promise(function (resolve, reject) {
        exports.parseCommand(cmd, function (err, v) {
            err ? reject(err) : resolve(v);
        });
    });
};
exports.parseCommand = function (cmd, cb) {
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
