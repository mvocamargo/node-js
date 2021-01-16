const fs = require('fs');

// rename dir
// fs.renameSync("./new-directory", "./directory");

// remove dir

/**
 * it's necessary delete all files from directory before
 * remove itself
 */
fs.readdirSync("./new-directory").forEach(fileName => {
  fs.unlinkSync(`./new-directory/${fileName}`);
});

fs.rmdir("./new-directory", err => {
  if (err) {
    throw err;
  }

  console.log("directory removed");
})