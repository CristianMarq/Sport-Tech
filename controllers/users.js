const {request, response} = require('express');

const userGet = (req = request, res = response) => {
    res.status(200).json({
        msg: 'Todo Ok desde userGet'
    })
};

const userPost = (req = request, res = response) => {
    const body = req.body;

    res.json({msg: 'Todo bien ', body})
}
module.exports = {
    userGet,
    userPost
}