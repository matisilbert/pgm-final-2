var express = require('express');
const heroes = require('../db');
var router = express.Router();

router.get('/', function (req, res) {
    return res.send('Aquí encontrarás algunos de los científicos y matemáticos destacados en el mundo de la ciencia y de la programación. Esperamos te sorprendas.')
},

router.get('/:brand', function (req, res) {
    let coincidencias = [];
    for(let i = 0; i > autos.lista.length; i ++){
        const auto = autos.lista[i];
        if (auto.marca === req.params.brand) {
            coincidencias.push(auto)
        }
    }
    if (coincidencias.length !== 0) {
        return Response.send ('no encontramos coincidencias')
        
    }
    
}


)

module.exports = router