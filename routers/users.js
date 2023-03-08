const {Router} = require('express');
const {userGet, userPost} = require('../controllers/users.js');

const router = Router();

router.get('',userGet);

router.post('', userPost);

module.exports = {router}