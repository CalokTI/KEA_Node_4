//https://www.npmjs.com/package/express
import express from "express";
const app = express();

import _ from "./password.js";

//https://www.npmjs.com/package/express-session
import session from "express-session";

app.use(session({
    secret: 'grumpy cat', //change this and don't push it, store in some other file?
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  }))


//https://www.npmjs.com/package/helmet
import helmet from "helmet";
app.use(helmet());

//https://www.npmjs.com/package/express-rate-limit
import rateLimit from "express-rate-limit";

const authLimiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 10, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

app.use("/auth",authLimiter);

app.get("/auth", (req, res, next) => {
    res.send({ message: "You are trying to log in"});
})

const baseLimiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

app.use(baseLimiter);

import coffeeRouter from "./routers/coffee.js";
app.use(coffeeRouter);


app.use(express.static("public"));
import path from "path";
console.log(path.resolve("public")); //used when package is set to module


app.get("/computer", (req, res) => {
    res.sendFile(path.resolve("public/computer.html"));
})


app.use("/frontdoor",ipLogger); //targets a specific endpoint

function ipLogger(req, res, next){
    console.log(req.ip);
    next();
}

function guardHouse(req, res, next) {
    const username = "Hans";
    //req.customVariable.username = "Hans";

    if (username === "Hans") {
        req.username = "Hans";
        next();
    } else {
        res.send({ message: "You don't have permission to enter." })
    }

}

app.get("/frontdoor", guardHouse, (req, res) => {
    res.send({ doorbell: `You have permission to enter, ${req.username}` });
})


function greeter(req, res, next) {
    console.log("Welcome to the mansion.");
    next();
}


app.get("/room", greeter, (req, res, next) => {
    //res.send({message: "You are in room 1"})
    console.log("You are in room 1, but I will lead you to room 2");
    next();
})

app.get("/room", greeter, (req, res) => {
    res.send({ message: "You are in room 2" })
})

app.get("*", (req, res) => { //matches everything, keep at the end
    res.send("<h1>ACCESS DENIED</h1>")
})


const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log('Server started at http://localhost:' + port);
});