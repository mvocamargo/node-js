const fs = require('fs');

const writeStream = fs.createWriteStream("./assets/myFile.txt", "UTF-8");
const readStream = fs.createReadStream("./assets/Readme.md", "UTF-8");

// writeStream.write("hello");
// writeStream.write(" world\n");

// Copy content of a file to another
// readStream.on("data", data => {
//   writeStream.write(data);
// })
// Also copy content of a file to another
// readStream.pipe(writeStream);

/**
 * Add terminal inputs directly to the file streamed
 */
process.stdin.pipe(writeStream);