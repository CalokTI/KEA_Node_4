import express from "express";
const app = express();

app.use(express.static('/public'));

import http from "http";
const server = http.createServer(app);

import { Server } from "socket.io";
const io = new Server(server);

io.on("connection", (socket) => {
    console.log(socket.id);

    socket.on("a client changed the color", ({ data }) => {
        console.log(data);

        //only emits to own socket
        // socket.emit("change the color", { data });
        
        //broadcast to all other sockets, but not self
        //socket.broadcast.emit("change the color", { data });

        //emits to all sockets in the namespace
        io.emit("change the color", { data });
    })
})



import path from "path";


app.get("/", (req, res) => {
    res.sendFile(path.resolve("./public/colors.html"))
})


const PORT = 3000;
server.listen(PORT);