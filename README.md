

# Parse a command using bash/OS

### Installation

```bash
 $ npm i parse-command 
```

### Usage

```javascript
const {parseCommand} = require('parse-command');

parseCommand('--foo=5 --bar="/a file/path" --zoom -z', function(err, val){
   // val is parsed array
   // val => [ '--foo=5', '--bar=/a file/path', '--zoom', '-z' ]
});

// using promises
const {parseCommandp} = require('parse-command');

parseCommandp('--foo=5 --bar="/a file/path" --zoom -z').then(function(val){
   // val is parsed array
   // val => [ '--foo=5', '--bar=/a file/path', '--zoom', '-z' ]
});

```



