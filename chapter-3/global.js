const path = require("path");

console.log(__dirname);
console.log(__filename);

console.log(`O nome do arquivo é ${path.basename(__filename)}`);