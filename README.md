

# Parse a command using bash/OS

```javascript
const {parseCommand} = require('parse-command');

parseCommand('--foo=5 --bar="/a file/path" --zoom -z', function(err, val){
   // val is parsed array
});

// using promises
const {parseCommandp} = require('parse-command');

parseCommandp('--foo=5 --bar="/a file/path" --zoom -z').then(function(val){
   // val is parsed array
});

```



