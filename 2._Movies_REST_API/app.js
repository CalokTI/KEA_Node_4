const express = require("express");
const app = express();

app.use(express.json());

let idCounter = 3;

const movieArray = [
    { id: 0, title: "Face/Off" },
    { id: 1, title: "USS Indianapolis: Men of Courage" },
    { id: 2, title: "Con Air" },
    { id: 3, title: "Knowing" }
]

app.get("/movies", (req, res) => {
    res.send({data: movieArray});
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

app.post("/movies", (req, res) => {

    const movie = { id: ++idCounter, title: req.body.title }
    movieArray.push(movie);

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

    const index = movieArray.findIndex(movie => movie.id === Number(req.params.id));

    if(index !== -1) {
        const originalMovie = movieArray[index];
        movieArray[index] = { ...originalMovie, ...req.body, id: Number(req.params.id)}
        res.send({ "movie patch": movieArray[index] });
    } else {
        res.status(404).send({});
    }
   
})


//delete
app.delete("/movies/:id", (req, res) => {

    const index = movieArray.findIndex(movie => movie.id === Number(req.params.id));
    const movie = movieArray[index];
    
    if (index === -1) {
        res.send({ "error": "No match for id" });
    } else {
        movieArray.splice(index, 1);
        res.send({"movie deleted": movie});
    } 

})



const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log('Server started at http://localhost:' + port);
});