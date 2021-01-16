const fs = require('fs');

fs.renameSync("./assets/generated.json", "./assets/jsonData.json");

fs.rename("./assets/notes.md", "./new-directory/notes.md", err => {
  if (err) {
    throw err;
  }
});

setTimeout(() => {
  fs.unlinkSync("./assets/image.jpeg");
}, 4000);