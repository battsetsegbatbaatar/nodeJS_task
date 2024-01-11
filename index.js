const express = require("express");

const port = 8080;
const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/users", (req, res) => {
  res.send([{}]);
});

app.post("/users", (req, res) => {
  create({
    ip: "1234.22.11",
    port: 5000,
    id: 4,
    name: "Battsetseg",
  });
});

app.put("/users", (req, res) => {
  create({
    id: 10,
    firstname: "Bella",
    lastname: "Swan",
    email: "Swanbella@yahoo.com",
  });
});

app.listen(port, () => {
  console.log("server is running on http://localhost:" + port);
});

const create = (data) => {
  console.log(req.method);
  fs.readFile("input.json", "utf-8", function (err, json) {
    if (err) {
      console.error(err);
      return;
    }
    const previousData = JSON.parse(json);
    previousData.push(data);
    fs.writeFile("input.json", JSON.stringify(previousData), (err) => {
      if (err) {
        console.error(err);
        return;
      }
    });
  });
};
