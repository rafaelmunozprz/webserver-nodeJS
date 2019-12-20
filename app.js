const http = require('http');
http.createServer((req,res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});
    let salida = {
        nombre: 'Rafael Munoz Pérez',
        empresa: 'CRELO SOFTWARE',
        RFC: 'MUPR920721DJ9',
        correo: 'crelsoftware@gmail.com',
        url: req.url
    }
    res.write(JSON.stringify(salida));
    res.end();
}).listen(8080);

console.log(`Escuchando el puerto 8080`);