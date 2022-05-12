import { Router } from "express";
const router = Router();

import { db } from "../database/createConnection.js";



router.get("/api/movies", async (req, res) => {
    const movies = await db.all(`SELECT * FROM movies`);
    res.send({"data": movies})
})

router.post("/api/movies", (req, res) => {
    db.run("INSERT INTO movies (title) VALUES (?)", [req.body.title || "unknown title"])
    res.send({ "movie posted": req.body.title});
})

export default router;