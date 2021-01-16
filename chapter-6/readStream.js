const fs = require('fs');

const readStream = fs.createReadStream("./assets/Readme.md", "utf-8");

let fileText = "";

console.log("type something...");
readStream.on("data", data => {
  console.log(`I read ${data.length -1} characters of text`);
  fileText += data;
});

readStream.once("data", data => {
  // console.log(data);
})

readStream.on("end", () => {
  console.log("Finished reading file");
  console.log(`I total I read ${fileText.length - 1} characters of text`);
})