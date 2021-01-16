const cp = require('child_process');

// cp.exec("open https://www.google.com");

// cp.exec("ls", (err, data, stderr) => {
//   if (err) {
//     console.log(stderr);
//   }
//   console.log(data);
// })

cp.exec("node readStream", (err, data, stderr) => {
  if (err) {
    console.log(stderr);
  }
  console.log(data);
})