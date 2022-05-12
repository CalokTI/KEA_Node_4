import Router from "express";
const router = Router();

//const router = require("express").Router();

router.get("/fillcoffee", (req, res, next) => {
    req.session.coffeeAmount = 100;
    res.send({message: "slurp"});
});


router.get("/drinkcoffee", (req, res, next) => {
    req.session.coffeeAmount -= 20;
    if (req.session.coffeeAmount < 0){
        req.session.coffeeAmount = 0;
    }
    res.send({message: `slurp, you have ${req.session.coffeeAmount} coffee left`});
});

router.get("/checkcoffee", (req, res, next) => {
    res.send({message: ` ${req.session.coffeeAmount}`});
});

export default router;