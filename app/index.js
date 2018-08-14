const authenticator = require('authenticator');
const secret = 'WWWWXXXXYYYYZZZZ';
const code = authenticator.generateToken(secret);

function pbcopy(data) { // https://stackoverflow.com/questions/7778539/copy-to-clipboard-in-node-js
  const proc = require('child_process').spawn('pbcopy');
  proc.stdin.write(data); proc.stdin.end();
}

console.log(code);
pbcopy(code);
