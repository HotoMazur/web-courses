import express from "express";

const app = express();
const port = 3000;


app.get("/", (req, res) => {
    const newDay = new Date("1995-02-12");
    const day = newDay.getDay();
    if (day === 0 || day === 6) {
        res.render("index.ejs", {dayType: "weekend", text: ", it's time to have fun"});
    } else {
        res.render("index.ejs", {dayType: "weekday", text: ", it's time to work hard"});
    }
});


app.listen(port, () => {
    console.log("Listen on port " + port)
})