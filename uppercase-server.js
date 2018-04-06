const http = require('http');
const util = require('util');
const stream = require('stream');

const port = process.argv[2];

const Transform = stream.Transform;

function UpperCase(options) {
  Transform.call(this, options);
}

util.inherits(UpperCase, Transform);

UpperCase.prototype._transform = function(chunk, encoding, callback) {
  const upperCasedChunk = chunk.toString().toUpperCase();
  this.push(upperCasedChunk);
  callback();
};

const server = http.createServer((req, res) => {
  if (req.method == 'POST') {
    const upperCase = new UpperCase();
    req.pipe(upperCase).pipe(res);
  } else {
    res.end('I only take POST requests');
  }
});

server.listen(port);
