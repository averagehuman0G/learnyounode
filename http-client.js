const http = require('http');

const getReq = http.get(process.argv[2], res => {
  res.setEncoding('utf8');
  res.on('data', chunk => {
    console.log(chunk);
  });
  res.on('error', console.error);
});

getReq.on('error', console.error);
