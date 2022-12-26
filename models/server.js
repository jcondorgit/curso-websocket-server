const express = require('express');
const cors = require('cors');
const { socketController } = require('../sockets/controller');

class Server{


    constructor(){
        //crear la aplicación de express como propiedad de la clase
        this.app = express();
        this.port = process.env.PORT;
        //socket io
        this.server = require('http').createServer( this.app );
        this.io = require('socket.io')( this.server );

        this.path = {}

        //Middlewares
        this.middlewares();

        //rutas de la aplicación
        this.routes();

        this.socket();
    }

    middlewares(){
        
        //CORS
        this.app.use(cors());
       
        //DIRECTORIO PÚBLICO
        this.app.use(express.static('public'));
       
    }

    routes(){

        /* this.app.use(this.path.usuarioAuth, require('../routes/auth')); */

    }

    socket(){
        
        this.io.on('connection', socketController)
        
    }

    listen(){
        //process.env.PORT variables globales
        this.server.listen(this.port, ()=>{
            console.log('Servidor corriendo en puerto', this.port);
        });
    }

}

module.exports = Server;