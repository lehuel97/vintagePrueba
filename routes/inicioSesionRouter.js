const express = require('express');

const router = express.Router();

const controladorInicioSesion = require('../controller/inicioSesionController');

router.get('/inicio-sesion', (req, res) => {
    const products = controladorInicioSesion.leerTodos();
    console.log('volvi del controlador')
    res.render('inicio-sesion', { products });
});
module.exports = router;