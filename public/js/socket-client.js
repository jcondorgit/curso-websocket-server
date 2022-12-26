//Referencias html
const online = document.getElementById('lblOnline');
const offline = document.getElementById('lblOffline');
const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar = document.querySelector('#btnEnviar');

const socket = io();

socket.on('connect', ()=>{

    offline.style.display = 'none';
    online.style.display = '';

})

socket.on('disconnect', ()=>{

    online.style.display = 'none';
    offline.style.display = '';

})

socket.on('desde-server', ( payload )=>{

    console.log( 'desde el server: ', payload );

})

btnEnviar.addEventListener('click', ()=>{
    
    const mensaje = txtMensaje.value;
    const payload = {
        mensaje,
        id:'123',
        fecha: new Date().getTime()
    }
    socket.emit('evento-emitido', payload, ( id ) => {
        console.log('valores guardados en el backend', id);
    })


})