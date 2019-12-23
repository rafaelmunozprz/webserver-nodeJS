const hbs = require('hbs');
/**
 * Retorna mediante una funcion en año vigente
 */
hbs.registerHelper('getAnio', ()=>{
    return new Date().getFullYear();
})

/**
 * Transforma una cadena capitalizada
 */
hbs.registerHelper('capitalizar', texto => {
    let palabras = texto.split(' ');
    palabras.forEach((palabra,idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });
    
    return palabras.join(' ');
})