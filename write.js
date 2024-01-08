const fs = require("node:fs/promises");

const writeText = "hey..";
fs.writeFile("input.txt", writeText, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(writeText);
});
const write = JSON.stringify({ ip: "1234.22.11", port: 3000 });
console.log(JSON.parse(write));
fs.writeFile("input.json", write, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(write);
});
