//Importación
const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');

//Instanciado
const app = express();
const port = 3000;

//Bootstrap CSS
app.use('/bootstrap-css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));

//Bootstrap JS
app.use('/bootstrap-js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));

//jQuery
app.use('/jquery', express.static(path.join(__dirname, 'node_modules/jquery/dist')));

//Fontawesome
app.use('/fontawesome', express.static(path.join(__dirname, 'node_modules/@fortawesome/fontawesome-free')));

app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));

//Handlebars config.
app.engine('handlebars', engine({
    defaultLayout: 'main',
    layoutsDir: 'views/'
}));

app.set('view engine', 'handlebars');
app.set('views', './views');

// Ruta raíz
app.get('/', (req, res) => {
    const productos = ['banana', 'cebollas', 'pimenton','papas', 'lechuga', 'tomate'];
    res.render('main', { productos });
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});