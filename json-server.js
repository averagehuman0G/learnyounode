const http = require('http');
const url = require('url');

const port = process.argv[2];

const server = http.createServer((req, res) => {
  const urlObj = url.parse(req.url);

  if (urlObj.pathname === '/api/parsetime') {
    const dateQuery = urlObj.query.split('=')[1];
    const date = new Date(dateQuery);
    const dateFormatted = {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds(),
    };
    res.writeHead(200, {
      'Content-Type': 'application/json',
    });
    res.end(JSON.stringify(dateFormatted));
  } else if (urlObj.pathname === '/api/unixtime') {
    const dateQuery = urlObj.query.split('=')[1];
    const date = new Date(dateQuery);
    const dateFormatted = {
      unixtime: date.getTime(),
    };
    res.writeHead(200, {
      'Content-Type': 'application/json',
    });
    res.end(JSON.stringify(dateFormatted));
  } else {
    res.end();
  }
});

server.on('error', console.error);

server.listen(port);
