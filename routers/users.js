const {Router} = require('express');
const {userGet, userPost, userPut} = require('../controllers/users.js');

const router = Router();

router.get('',userGet);

router.post('', userPost);

router.put('/:id', userPut);

module.exports = {router}