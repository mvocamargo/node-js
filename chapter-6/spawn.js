const cp = require('child_process');

const questionApp = cp.spawn("node", ["questions-module.js"]);

questionApp.stdin.write("Marcus \n");
questionApp.stdin.write("SP \n");
questionApp.stdin.write("Nothing \n");

questionApp.stdout.on("data", data => {
  console.log(`from the question app: ${data}`);
})

questionApp.on("close", () => {
  console.log('questionApp exited');
})