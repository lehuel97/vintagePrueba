let productos = require('../data/datosProductos')

let homeController = {

    leerTodos: function() {
        console.log('leo productos desde data')
        return productos
    }
}

module.exports = homeController