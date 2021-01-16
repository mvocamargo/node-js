const fs = require('fs');

//Sync way
console.log("start");
const text = fs.readFileSync("./assets/Readme.md", "utf-8");
console.log(text);
console.log("end");

// Async way
console.log("start 2");
fs.readFile("./assets/Readme.md", {
  encoding: "utf-8"
}, (err, content) => {
  console.log(content);
});
// console.log(text);
console.log("end 2");

// Async way

fs.readFile("./assets/WhatsApp-Image-2020-11-23-at-10.30.09-600x600.jpeg", (err, img) => {

  if (err) {
    console.log(err.message);
    process.exit();
  }

  console.log(img);
});
// console.log(text);
