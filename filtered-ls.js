const fs = require('fs');
const path = require('path');

fs.readdir(process.argv[2], (err, list) => {
  if (err) {
    return console.log(err);
  }
  const filesWithExt = list.filter(file => {
    return path.extname(file).slice(1) == process.argv[3];
  });
  filesWithExt.forEach(file => console.log(file));
});
