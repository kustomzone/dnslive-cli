const request = require('request');
const fs = require('fs');

let argv = process.argv;
let argc = process.argv.length;

if(argc != 4) {
  console.log("Syntax error: node dnslive.js <domain> <signature>");
}
else {
  let domain = argv[2];
  let data = encodeURI(fs.readFileSync(argv[2]));
  let sig = argv[3];

  request('https://dns.live/dns/?zone='+domain+'&data='+data+'&sig='+sig,function(err,res,body) {
    if(body.includes('?'))
      console.log("Error occurred: "+body);
    else
      console.log("Domain "+domain+" updated successfully. Please wait a few minutes for it to propogate.");
  });
}
