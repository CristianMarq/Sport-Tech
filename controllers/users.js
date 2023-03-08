const {request, response} = require('express');

const userGet = (req = request, res = response) => {
    res.status(200).json({
        msg: 'Todo Ok desde userGet'
    })
};

module.exports = {
    userGet
}