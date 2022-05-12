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

app.get("/aboutclient/:name", (req, res) =>{
    res.send(req.params.name)
})

app.post("/opinion", (req, res) => {
    console.log(req.body);
    if (req.body.msg === "breathtaking") {
        res.send({ msg: "No, you are breathtaking" })
    } else {
        res.send(req.body);
    }
});


//write a get route that handles /libraries

app.get("/libraries/", (req, res) => {
    const book1 = req.query.book1;
    console.log(book1);
    res.send(req.query)
})

app.get("/libraries/:id", (req, res) => {
    const id = req.params.id;
    console.log(id);

})


//PORT - at the bottom 
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log('Server started at http://localhost:' + port);
});