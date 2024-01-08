const fs = require("node:fs");

fs.readFile("input.txt", "utf-8", function (err, data = 1) {
  if (err) {
    console.error(err);
    return;
  }

  console.log(`ta ${data} unshij baina`);
  const context = String(Number(data) + 1);
  fs.writeFile("input.txt", context, function (err) {
    if (err) {
      console.error(err);
      return;
    }
  });
});

fs.readFile("input.txt", "utf-8", function (err, data) {
  if (err) {
    console.error(err);
    return;
  }

  console.log(`ta ${data} unshij baina`);
  const context = String(Number(data) + 2);
  fs.writeFile("input.txt", context, function (err) {
    if (err) {
      console.error(err);
      return;
    }
  });
});
