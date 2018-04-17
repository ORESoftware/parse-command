const {parseCommand, parseCommandp} = require('..');

parseCommand('age', function (err, val) {
  if (err) throw err;
  console.log('val:', val);
});

parseCommandp('--foo=5 --bar="/a file/path" --zoom -z').then(function (val) {
  // val is parsed array
  console.log('the val:', val);
})
.catch(function (err) {
  console.error(err);
});