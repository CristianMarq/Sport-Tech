const {Router} = require('express');
const {userGet} = require('../controllers/users.js');

const router = Router();

router.get('',userGet);

module.exports = {router}