const fs = require('fs');

const text = fs.readFileSync(process.argv[2]).toString();

console.log(text);
