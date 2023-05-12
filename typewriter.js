const sentence = "hello there from lighthouse labs";

let delay = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay);
  
  delay += 50;
}
setTimeout(() => {
  process.stdout.write('\n');
}, delay);

//OR


// let timeout = 0;
// for (const i in sentence) {
//   timeout = i * 50
//   const char = sentence[i];
//     setTimeout(() => {
//     process.stdout.write(char);
//   }, timeout)
//   };
// setTimeout(() => {
//   process.stdout.write("\n")
// }, timeout);