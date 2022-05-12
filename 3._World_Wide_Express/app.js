const express = require("express");
const app = express();

const fetch = require('node-fetch');
//import fetch from "node-fetch";

const animalsUtils = require("./animals/animalsUtils.js");

console.log("You like this many animals", animalsUtils.calculateFavoriteAnimals());

const animalsRouter = require("./routers/animalsrouter.js");

app.use(express.static(__dirname + '/public'));

app.use(animalsRouter);


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/frontpage/frontpage.html")
})

app.get("/message", (req, res) => {
    res.send("<h1>Welcome to World Wide Express</h1>")
})

app.get("/weather", (req, res) => {
    res.sendFile(__dirname + "/public/weather.html")
})

app.get("/proxy", (req, res) => {

    fetch('https://www.google.com/')
        .then(response => response.text())
        .then(text => {
            res.send(text)
        })
})

app.get("/proxytoo", async (req, res) => {
    const response = await fetch('https://www.google.com/');
    const body = await response.text();
    res.send(body)
})

/*
Assignment
    use node-fetch
    create a route with the endpoint /proxy
    query google

    use res.text()

    and display it to the client who requests /proxy

    bonus: use async/await to make it look nicer

*/





const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server started on PORT:', PORT);
});