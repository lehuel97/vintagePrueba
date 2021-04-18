const express = require('express');

const router = express.Router();

const controladorCarrito = require('../controller/carritoController');

router.get('/carrito', (req, res) => {
    const products = controladorCarrito.leerTodos();
    res.render('carrito', { products });
});
module.exports = router;