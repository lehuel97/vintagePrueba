const express = require('express')
const app = express()
const path = require('path');
app.use(express.static('public'));

const homeRouter = require('./routes/homeRouter');
const productRouter = require('./routes/productRouter');
const registerRouter = require('./routes/registerRouter');
const inicioSesionRouter = require('./routes/inicioSesionRouter');
const carritoRouter = require('./routes/carritoRouter');

app.set('view engine', 'ejs')

app.listen(3000, () => {
    console.log('Servidor funcionando');
});

app.use('/', homeRouter);
app.use('/productos', productRouter);
app.use('/registro', registerRouter);
app.use('/inicio-sesion', inicioSesionRouter);
app.use('/carrito', carritoRouter);