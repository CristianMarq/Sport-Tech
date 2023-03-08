const express = require('express');
const cors = require('cors');
const {router} = require('../routers/users.js');

class Server {
    constructor(){
        this.app = express();
        this.paths = {
            user: '/api/users'
        }
        this.port = process.env.PORT;

        // routers
        this.routers();

        // middlewares
        this.middlewares();
    }

    routers(){
        this.app.use(this.paths.user, router);
    }

    middlewares(){
        this.app.use(express.static('public'));
        this.app.use(cors());
        this.app.use(express.json());
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Servidor desplegado en http://localhost:${this.port}`)
        })
    }
    

}

module.exports = {Server}