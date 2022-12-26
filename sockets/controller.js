
const socketController = ( socket ) => {

    console.log('Cliente conectado', socket.id);

    socket.on('disconnect', ()=>{

        console.log('cliente desconectado');

    });

    socket.on('evento-emitido', ( payload, callback ) => {

        const id = '1234';
        callback( id );
        socket.broadcast.emit('desde-server', payload);

    } );

}

module.exports = {
    socketController
};