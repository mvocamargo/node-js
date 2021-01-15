const [ , , firstName, lastName] = process.argv;

const grab = flag => {
  let indexAfterFlag = process.argv.indexOf(flag) + 1;
  return process.argv[indexAfterFlag];
}

const greeting = grab("--greeting");
const user = grab("--user");

console.log(process.pid)
console.log(process.versions.node)
console.log(process.argv)

console.log( `Your name is ${firstName} ${lastName}`);

console.log( `Greeting user: ${greeting}, ${user}`);