const fs = require('fs');

if ( fs.existsSync("new-directory") ) {
  console.log("already exists!!!");
} else {
  fs.mkdir("new-directory", err => {
    if (err) {
      throw err;
    }
  
    console.log("directory created");
  })
}

