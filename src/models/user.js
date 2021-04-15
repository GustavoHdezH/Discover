const {Schema, models} = requiere('mongoose');
const bcryptjs =  require ('bcryptjs');

new Usuario = new Schema({
    name : { type: String, required: true},
    email: { type: String, required: true},
    password: { type: String, required: true}
},
    { timestamp: true
});

//Encriptar la contraseña
Usuario.methods.encryptPassword = async password => {
    const salt = await bcryptjs.genSalt(10);
    return await bcryptjs.hash(password, salt);
};

//Decifrar la contraseña
Usuario.methods.dencryptPassword = async function (password) {
    return await bcryptjs.compare(password, this.password);
};

module.exports = model('usuario', Usuario);