const controllermicroservicios = {};

const Servicios = require('../models/servicios');

// Renderizar el formulario
controllermicroservicios.renderMicroserviciosForm = (req, res) =>{
    //res.send('microservicio agregado');
    res.render('microservicios/new-microservicio');
};
//Crear microservicio
controllermicroservicios.createMicroservicios = async (req, res) =>{
    //Se obtienen los datos desde el formulario
    const {container, port, server, discover, code, team} = req.body;
    //Se pasan las propiedades que se requiere para crear el objeto
    const newServicios = Servicios({
        container,port, server, discover, code, team
    })
    //Se guarda el objeto en la colleccion
    await newServicios.save();
    console.log(newServicios)
    res.send('Nuevo microservicio');
};
// Renderizar microservicios
controllermicroservicios.renderMicroservicios = async (req, res) =>{
    //find({}).lean(); resuelve el problema
    //Handlebars: Access has been denied to resolve the property
    const servicios = await Servicios.find({}).lean();
    // Se renderiza la vista en el navegador y se pasan los microservicios como objeto
    res.render('microservicios/all-microservicios', { servicios });
    
};

// Editar microservicios
controllermicroservicios.renderEditMicroserviciosForm = (req,res) => {
    res.send('formulario para editar microservicio')
};
controllermicroservicios.updateMicroservicios = (req,res) => {
    res.send('Se actualizo el microservicio');
};

// eliminar microservicios
controllermicroservicios.deleteMicroservicios = (req,res) => {
    res.send('microservicio eliminado');
};

module.exports = controllermicroservicios;