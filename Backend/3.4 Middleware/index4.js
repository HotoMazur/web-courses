import express from "express";
import {dirname} from "path";
import {fileURLToPath} from "url";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url))

app.use(bodyParser.urlencoded({extend: true}))

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html")
})

app.post("/submit", (req, res) => {
  let bandName = req.body.street + req.body.pet;
  res.send("<h1>Your band name is: </h1><p>${bandName}</p>")
  console.log(bandName);
})


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
