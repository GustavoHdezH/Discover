const { Router } = require('express')
const router = Router()

const { renderMicroserviciosForm,
    createMicroservicios,
    renderMicroservicios,
    renderEditMicroserviciosForm,
    updateMicroservicios,
    deleteMicroservicios } = require('../controllers/microservicios.controller')


//Agregar microservicios
router.get('/microservicios/add', renderMicroserviciosForm)

router.post('/microservicios/new-microservicio', createMicroservicios)


// Optener todos los microservicios
router.get('/microservicios', renderMicroservicios)

// Editar microservicios
router.get('/microservicios/edit/:id', renderEditMicroserviciosForm)

router.put('/microservicios/edit/:id', updateMicroservicios)

//Eliminar microservicios
router.delete('/microservicios/delete/:id', deleteMicroservicios)

module.exports = router

// El metodo get devuelve el formulario para ingresar datos
// El metodo post recibe datos desde el servidor
// El metodo put actualiza la información que se recibe del formulario