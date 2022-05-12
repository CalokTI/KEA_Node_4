const express = require("express");
const app = express();

app.use(express.static(__dirname + '/public'));

const fs = require("fs");

const nav = fs.readFileSync("./public/components/nav.html");
const frontpage = fs.readFileSync("./public/pages/frontpage/frontpage.html")
const cheese = fs.readFileSync("./public/pages/cheesegallery/cheesegallery.html")
const footer = fs.readFileSync("./public/components/footer.html");




app.get("/", (req, res) => {
    res.send( nav + frontpage + footer )
})

app.get("/cheese", (req, res) => {
    res.send(nav + cheese + footer)
})







const port = process.env.PORT || 3000;
app.listen(port);
console.log('Server started at http://localhost:' + port);