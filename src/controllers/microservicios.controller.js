const controllermicroservicios = {};

const Servicios = require('../models/servicios');

// Renderizar el formulario
controllermicroservicios.renderMicroserviciosForm = (req, res) =>{
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
    req.flash('success_msg','Contenedor agregador');
    res.redirect('/microservicios/add');
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
controllermicroservicios.renderEditMicroserviciosForm = async (req,res) => {
    //Se añade propiedad .lean() para renderizar el objeto
    const servicios = await Servicios.findById(req.params.id).lean();
    res.render('microservicios/edit-microservicios', {servicios});
};
controllermicroservicios.updateMicroservicios = async (req, res) => {
    const {container, port, server, discover, code, team} = req.body;
    await Servicios.findByIdAndUpdate(req.params.id, { container,port, server, discover, code, team});
    req.flash('success_msg','Contenedor actualizo correctamente');
    res.redirect('/microservicios');
};

// eliminar microservicios
controllermicroservicios.deleteMicroservicios = async (req,res) => {
    await Servicios.findByIdAndDelete(req.params.id);
    //req.flash('success_msg','Contenedor borrado correctamente');
    res.redirect('/microservicios')
};

module.exports = controllermicroservicios;
/**
 * @module controllermicroservicios
 * @desc Este modulo se encarga de hacer las operaciones para la creación, edición,
 * eliminación y actualización de los contendores. 
 */