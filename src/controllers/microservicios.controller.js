const controllermicroservicios = {};

// Renderizar el formulario
controllermicroservicios.renderMicroserviciosForm = (req, res) =>{
    //res.send('microservicio agregado');
    res.render('microservicios/new-microservicio');
};
//Crear microservicio
controllermicroservicios.createMicroservicios = (req, res) =>{
    console.log(req.body)
    res.send('Nuevo microservicio');
};
controllermicroservicios.renderMicroservicios = (req, res) =>{
    res.send('render microservicios');
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