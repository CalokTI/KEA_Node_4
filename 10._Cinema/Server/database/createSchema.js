import { db } from "./createConnection.js";

const deleteMode = true;

if (deleteMode) {
    db.exec("DROP TABLE IF EXISTS movies;");
    console.log("table movies dropped");
}

db.exec(`CREATE TABLE IF NOT EXISTS movies (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title VARCHAR(100)
)`)

//seeding
if (deleteMode) {
    db.run(`INSERT INTO movies (title) VALUES ('Face/Off')`)
    db.run(`INSERT INTO movies (title) VALUES ('USS Indianapolis: Men of Courage')`)
    db.run(`INSERT INTO movies (title) VALUES ('Con Air')`)
    db.run(`INSERT INTO movies (title) VALUES ('Knowing')`)
}
