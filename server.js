const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));


/**
 * Express engine HBS
 */
hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');


/*app.get('/', (req, res) => {
    let salida = {
        nombre: 'Rafael Munoz Pérez',
        empresa: 'CRELO SOFTWARE',
        RFC: 'MUPR920721DJ9',
        correo: 'crelsoftware@gmail.com',
        url: req.url
    }
    res.send(salida);
});*/

app.get('/', (req, res) => {
    res.render('home',{
        nombre: 'Rafael mUnoZ PerEz'
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(port, () => {
    console.log(`Escuchando desde puerto ${port}`);
});