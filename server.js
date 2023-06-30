//const socket=require("socket.io");


// importing express
const express=require('express');
//setup our express=express allow us to create server
const app=express();
//making a server using http and express
const server=require('http').Server(app);


//giving public folder to my express app
app.use(express.static('public'));

//importing socket.io and it linking with server

const io=require('socket.io')(server);

io.on('connection',(socket)=>{
    console.log("connection is established",socket.id);
    socket.on('message',(data)=>{   //user sending msg giving that msg to io
        io.emit('message',data);  //emitting this msg to all socket;
        
    
    })
    socket.on('diconnected',()=>{
        console.log("user has left the chat");
     })
})
// this is port on which my server will run
const port=8000;
server.listen(port,()=>{
    console.log(`server is runnin on:${port}`);
})
