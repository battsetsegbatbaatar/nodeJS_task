const fs = require("node:fs");
const http = require("http");

const host = "localhost";
const port = 8000;

const requestListener = function (req, res) {
  if (req.url === "/user") {
    res.writeHead(200, ("Context-Type", "text/plain"));
    res.end("Hi Finished!!!!!");
  } else {
    res.writeHead(500, ("Context-Type", "application/json"));
    res.end(JSON.stringify(reading()));

    // fs.readFile("input.json", "utf-8", function (err, data) {
    //   if (err) {
    //     console.error(err);
    //     return;
    //   }
    //   const user = JSON.parse(data);
    //   res.writeHead(500, ("Context-Type", "application/json"));
    //   res.end(JSON.stringify(user));
    // });
  }
};
const server = http.createServer(requestListener);
server.listen(port, host, () => {
  return console.log(`Server is running on http://${host}:${port}`);
});

// const read = (res) => {
//  fs.readFile("input.json", "utf-8", function (err, data) {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     const user = JSON.parse(data);
//     res.writeHead(200, ("Context-Type", "application/json"));
//     res.end(JSON.stringify(user));
//   });
// };

const reading = () => {
  const text = fs.readFileSync("index.json", "utf-8");
  return JSON.parse(text);
};
// const listen = function (req, res) {};
// const create = (data) => {
//   fs.readFile("input.json", "utf-8", function (err, json) {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     const previousData = JSON.parse(json);

//     previousData.push(data);
//     fs.writeFile("input.json", JSON.stringify(previousData), (err) => {
//       if (err) {
//         console.error(err);
//         return;
//       }
//     });
//   });
// };
// create({
//   ip: "1234.22.11",
//   port: 5000,
//   id: 4,
//   name: "Battsetseg",
// });

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
