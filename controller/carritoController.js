let productos = require('../data/datosProductos')

let carritoController = {

    leerTodos: function() {
        console.log('leo productos desde data')
        return productos
    }
}

module.exports = carritoController