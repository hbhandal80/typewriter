const sentence = "hello there from lighthouse labs";
const sentenceBreak = (sentence + '\n');
let delay = 0;
for (const char of sentenceBreak) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay);
  delay += 100;
}