const fs = require('fs');

// const files = fs.readdirSync("./assets");
fs.readdir("./assets", (err, files) => {

  if( err ) {
    throw err;
  }

  console.log("complete")
});

