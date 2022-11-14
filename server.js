const express = require("express");
const path = require("path");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const cors = require("cors");

const trackRouter =  require("./src/router");

app.use(express.json());


app.use(cors());

app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(trackRouter)


var clickMarker = {}
var idLinks = {}
io.on("connection", (socket) => {
    
    console.log('new connection');
    
    socket.emit('on_connect', 'Connected')


    socket.on("on_click", data => {
        console.log(data)    
        clickMarker[data[0]] = data[1]
        idLinks[socket.id] =  data[0]
        socket.broadcast.emit("update_markers",clickMarker) 
     });
});
server.listen(5000,() => {
    console.log('started server'); 
});