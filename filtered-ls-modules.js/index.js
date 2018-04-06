const filteredLs = require('./filtered-ls-module');

filteredLs(process.argv[2], process.argv[3], (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
