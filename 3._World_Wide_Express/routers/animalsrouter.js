const router = require("express").Router();

const animalsUtils = require("../animals/animalsUtils.js");

router.get("/amountoffavoriteanimals", (req, res) => {
    res.send({ amount: animalsUtils.calculateFavoriteAnimals() })
})

router.get("/favoriteanimals", (req, res) => {
    res.redirect("/amountoffavoriteanimals")
})

router.get("/cuteanimal", (req, res) => {
    if (req.query.cute === "Yes") {
        return res.send({ animal: "Giraf" })
    }
    res.send({ animal: "snake" })
})





/* module.exports = {
    router
};
 */

module.exports = router;