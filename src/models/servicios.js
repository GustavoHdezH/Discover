const { Schema, model } = require('mongoose');

const Servicio = new Schema({
    container: { type: String, required: true},
    port: { type: String, required: true },
    server: { type: String, required: true },
    discover: { type: String, required: true },
    code : { type: String, required: true },
    team: { type: String, required: true }
    },
    {timestamps: true});

module.exports = model('servicio', Servicio);