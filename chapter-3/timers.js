const waitTime = 3000;
const waitInterval = 500;
let currentTIme = 0;

const incTime = () => {
  currentTIme += waitInterval;
  const p = Math.floor((currentTIme / waitTime) * 100);
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(`waiting... ${p}%`);
  // console.log(`wating ${currentTIme / 1000} second(s)`);
}

console.log(`setting a ${waitTime / 1000} second(s) delay`);

const timerFinished = () => {
  clearInterval(interval);
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  console.log("done");
};


const interval = setInterval(incTime, waitInterval);
setTimeout(timerFinished, waitTime);