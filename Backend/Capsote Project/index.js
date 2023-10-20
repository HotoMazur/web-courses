import bodyParser from "body-parser";
import express from "express";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}))

const days = ["Sunday", "Monday", "Tuesday", "Wensday", "Thursday", "Friday", "Saturday"]
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let tasks = [];

function getTimes() {
    let todayDateString = days[new Date().getDay()];
    let todayDateNumber = new Date().getDate();
    let todayMonth = months[new Date().getMonth()];
    let time = {todayDateString: todayDateString, todayDateNumber: todayDateNumber, todayMonth: todayMonth}
    return time;
}

app.get("/", (req, res) => {
  let time = getTimes();
  res.render("index.ejs", { tasks: tasks, time: time });
});

app.post("/submit", (req, res)=>{
    let newTask = req.body["newTask"];
    tasks.push(newTask);
    let time = getTimes();
    res.render("index.ejs", { tasks: tasks, time: time})
})

app.listen(port, () => {
  console.log("Listen the port " + port);
});
