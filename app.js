const {Server} = require('./models/service.js');
require('dotenv/config');

const server = new Server();

server.listen();