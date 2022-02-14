const express = require("express");
const app = express();

//tells express to parse body as json
app.use(express.json());


//counter for id
let idCounter = 4;

//temp array for movies
const movieArray = [
    { id: 0, title: "Face/Off" },
    { id: 1, title: "USS Indianapolis: Men of Courage" },
    { id: 2, title: "Con Air" },
    { id: 3, title: "Knowing" }
]

//movies rest api
//get
app.get("/", (req, res) => {

    res.send({ "msg": "Movies API, uses /movies" })
})

app.get("/movies", (req, res) => {

    res.send({ "movies": movieArray });
})

app.get("/movies/:id", (req, res) => {

    const id = req.params.id;
    const movie = movieArray.find(movie => movie.id === Number.parseInt(id));

    if (movie) {
        res.send({ "movie": movie })
    } else {
        res.send({ "error": "No match for id" })
    }
})

//post
app.post("/movies/", (req, res) => {

    const movie = { id: idCounter, title: req.body.title }
    movieArray.push(movie);
    idCounter++;

    res.send({ "movie posted": movie });
})

//put
app.put("/movies/:id", (req, res) => {

    const id = Number.parseInt(req.params.id);
    const index = movieArray.findIndex(movie => movie.id === id);

    if (index === -1) {
        res.send({ "error": "No match for id" })
    } else {
        req.body.id = id;
        movieArray[index] = req.body;
        res.send({ "movie put": movieArray[index] })
    }

})

//patch
app.patch("/movies/:id", (req, res) => {

    const id = Number.parseInt(req.params.id);
    const index = movieArray.findIndex(movie => movie.id === id);

    if (req.body.title) {
        movieArray[index].title = req.body.title;
    }

    res.send({ "movie patch": movieArray[index] });

})


//delete
app.delete("/movies/:id", (req, res) => {

    const id = Number.parseInt(req.params.id);
    const index = movieArray.findIndex(movie => movie.id === id);
    const movie = movieArray[index];

    if (index === -1) {
        res.send({ "error": "No match for id" });
    } else {
        movieArray.splice(index, 1);
        res.send({"movie deleted": movie});
    }

})


app.listen(8080);