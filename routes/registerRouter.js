const express = require('express');

const router = express.Router();

const controladorRegistro = require('../controller/registerController');

router.get('/registro', (req, res) => {
    const products = controladorRegistro.leerTodos();
    console.log('registro funcionando')
    res.render('registro', { products });
});
module.exports = router;