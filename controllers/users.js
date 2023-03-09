const {request, response} = require('express');

const userGet = (req = request, res = response) => {
    const {limite, desde } = req.query;

    res.status(200).json({
        msg: 'Todo Ok desde userGet',
        limite, 
        desde
    })
};

const userPost = (req = request, res = response) => {
    const body = req.body;

    res.json({msg: 'Todo bien ', body})
}

const userPut = (req = request, res = response) => {
    const {id} = req.params;

    res.status(202).json({
        msg: 'Jugador Actualizado',
        id
    })
}
module.exports = {
    userGet,
    userPost,
    userPut
}