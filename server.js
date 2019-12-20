const express = require('express');
const app = express();

app.use(express.static(__dirname+'/public'));

app.get('/', (req, res) => {
    let salida = {
        nombre: 'Rafael Munoz Pérez',
        empresa: 'CRELO SOFTWARE',
        RFC: 'MUPR920721DJ9',
        correo: 'crelsoftware@gmail.com',
        url: req.url
    }
    res.send(salida);
});

app.get('/data', (req, res) => {
    res.send('Hola data');
});

app.listen(8080, ()=>{
    console.log('Escuchando desde puerto 8080');
});