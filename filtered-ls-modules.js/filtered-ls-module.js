const fs = require('fs');
const path = require('path');

function filteredLs(dir, ext, callback) {
  fs.readdir(dir, (err, list) => {
    if (err) {
      return callback(err);
    }
    const filesWithExt = list.filter(file => {
      return path.extname(file).slice(1) == ext;
    });

    filesWithExt.forEach(file => callback(null, file));
  });
}

module.exports = filteredLs;
