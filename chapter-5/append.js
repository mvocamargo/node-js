const fs = require('fs');
const jsonData = require("./assets/generated.json");

jsonData.friends.forEach(f => {
  fs.appendFile("./new-directory/friends.md", `${f.id}: ${f.name} \n`, err => {
    if (err) {
      throw err;
    }
  });
});
