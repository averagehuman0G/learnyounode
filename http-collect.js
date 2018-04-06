const http = require('http');

const getReq = http.get(process.argv[2], res => {
  res.setEncoding('utf8');
  let data = '';
  res.on('data', chunk => {
    data += chunk;
  });
  res.on('error', console.error);
  res.on('end', () => {
    console.log(data.length);
    console.log(data);
  });
});

getReq.on('error', console.error);
