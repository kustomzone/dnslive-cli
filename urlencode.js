const fs = require('fs');

let argv = process.argv;
let argc = process.argv.length;

if(argc != 3) {
  console.log("Syntax error: node urlencode.js <file>");
}
else {
  let data = encodeURI(fs.readFileSync(argv[2]));
  console.log(data);
}
