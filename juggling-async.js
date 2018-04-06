const http = require('http');
let map = {};
const reqOne = http.get(process.argv[2], res => {
  res.setEncoding('utf8');
  let data = '';
  res.on('data', chunk => {
    data += chunk;
  });
  res.on('error', console.error);
  res.on('end', () => {
    map.first = () => console.log(data);
    printAll();
  });
});

const reqTwo = http.get(process.argv[3], res => {
  res.setEncoding('utf8');
  let data = '';
  res.on('data', chunk => {
    data += chunk;
  });
  res.on('error', console.error);
  res.on('end', () => {
    map.second = () => console.log(data);
    printAll();
  });
});

const reqThree = http.get(process.argv[4], res => {
  res.setEncoding('utf8');
  let data = '';
  res.on('data', chunk => {
    data += chunk;
  });
  res.on('error', console.error);
  res.on('end', () => {
    map.third = () => console.log(data);
    printAll();
  });
});
reqOne.on('error', console.error);
reqTwo.on('error', console.error);
reqThree.on('error', console.error);

function printAll() {
  if (Object.keys(map).length === 3) {
    map.first();
    map.second();
    map.third();
  }
}
