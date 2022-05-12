<script>
    import io from "socket.io-client";

    const socket = io();

    let lastPersonToChangeColor;


    function changeColor(event) {
        console.log(event.target.value);
        socket.emit("colorChanged", {data: event.target.value})
    }

    socket.on("changeColor", ({data, username }) => {
        document.body.style.backgroundColor = data; // don't do this, 
        lastPersonToChangeColor = username;
    })


</script>
<div>Last person to change the backgroundColor: {lastPersonToChangeColor || "unknown"} </div>
<input type="color" on:change={changeColor} />