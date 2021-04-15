const { router } = require("../server");

const controllerindex = {};

controllerindex.index = (req, res) => {
    res.send("Usuario")
};

controllerindex.index = (req, res) => {
    res.send('Usuario agregado');
    
};

module.exports = controllerindex;