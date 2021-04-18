let productos = require('../data/datosProductos')

let productController = {

    leerTodos: function() {
        console.log('leo productos desde data')
        return productos
    }
}

module.exports = productController