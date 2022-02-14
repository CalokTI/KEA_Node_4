//import express

const express = require("express");
const app = express();

//tells express to parse body as json
app.use(express.json());

//or like this
//const app = require("express")();


//endpoint callback function
app.get("/about", (req, res) => {
    res.send({ "info": "this is a api for movies, /movies" });
});

app.post("/opinion", (req, res) => {
    console.log(req.body);
    if (req.body.msg === "breathtaking") {
        res.send({ msg: "No, you are breathtaking" })
    } else {
        res.send(req.body);
    }
});

//PORT - at the bottom 
app.listen(8080);