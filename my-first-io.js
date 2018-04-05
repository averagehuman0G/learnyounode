const fs = require('fs');

const text = fs.readFileSync(process.argv[2]).toString();

const lines = text.split('\n').length - 1;

console.log(lines);
