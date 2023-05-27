const { Socket } = require("socket.io")

const io = require("socket.io")(3001,{
    cors: {origins: "*"}
})
// Son eventos de escucha y enviado 
io.on("connection", (socket) => {
    
    socket.on("message", (payload) =>{
        console.log(`Se ha recibido una oferta`, payload);
        socket.emit("message", payload);
    });

    socket.on("message", (payload) =>{
        console.log(`Se ha recibido una oferta`, payload);
        socket.emit("message", payload);
    });

    socket.on("perrito", (payload) =>{
        console.log(`Se ha recibido una oferta`, payload);
        socket.emit("message", payload);
    });

});

socket.on("disconect", () => {
    console.log(`Conexión cerrada`);
});

socket

/**
On es escuchar
Emit es enviar
 */