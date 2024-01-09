const fs = require("node:fs");
const http = require("http");

const host = "localhost";
const port = 8000;

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end("My first server! Hi .... I'm BG");
};
const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
http.createServer((req,res)=>{
  const read = () => {
    fs.readFile("input.json", "utf-8", function (err, data) {
      if (err) {
        console.error(err);
        return;
      }
      console.log(JSON.parse(data));
    });
  };
  read();
  res.writeHead(200=>{
    "Context-Type":"plain/html"
})
res.end
})

const read = () => {
  fs.readFile("input.json", "utf-8", function (err, data) {
    if (err) {
      console.error(err);
      return;
    }
    console.log(JSON.parse(data));
  });
};
read();

const create = (data) => {
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
create({
  ip: "1234.22.11",
  port: 5000,
  id: 4,
  name: "Battsetseg",
});

// const update = (id, data, option) => {
//   fs.readFile("input.json", "utf-8", (err, json) => {
//     if (err) return console.error(err);
//     const previousData = JSON.parse(json);
//     const dataToUpdate = previousData.find((element) => element.id === id);
//     const newArray = previousData.filter((element) => element.id !== id);
//     newArray.push(...dataToUpdate, ...data);
//     fs.writeFile("input.json", JSON.stringify(newArray), (err) => {
//       if (err) return console.error(err);
//     });
//   });
// };
// update(7, { name: "BG..." });

// const delete =(id, data)=>{
//   fs.readFile("input.json",'utf-8',(err,json)=>{
//     if (err) return console.error(err);
//     const previousData=J
//   })
// }
