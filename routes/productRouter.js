const express = require('express');

const router = express.Router();

const controladorProducto = require('../controller/productController');

router.get('/producto', (req, res) => {
    const products = controladorProducto.leerTodos();
    res.render('detail-product', { products });
});
module.exports = router;