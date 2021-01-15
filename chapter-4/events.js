const events = require('events');

const emitter = new events.EventEmitter();

emitter.on("customEvent", (message, user) => {
  console.log(`${user}: ${message}`);
});

// emitter.emit("customEvent", "Hello World", "Computer");
// emitter.emit("customEvent", "Nice!!", "Marcus");

process.stdin.on("data", data => {
  const input = data.toString().trim();
  if (input === "exit") {
    emitter.emit("customEvent", "Goodbye!", "unhuman");
    process.exit();
  }
  emitter.emit("customEvent", input, "human");

})