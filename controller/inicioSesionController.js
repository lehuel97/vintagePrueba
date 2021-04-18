let productos = require('../data/datosProductos')

let inicioSesionController = {

    leerTodos: function() {
        console.log('leo productos desde data')
        return productos
    }
}

module.exports = inicioSesionController