const express = require('express');
const router = express.Router();
const db = require('../db/index');

//utilizando la variable router definimos la ruta que al ingresar /products envie al navegador la lista completa de autos
router.get('/', function(req,res){
    return res.send(db.lista);
})

//ruta parametrizada products/brand con parametro obligatorio para la marca. Si no encuentra la marca debe enviar mensaje.

router.get('/brand/:brand', function(req,res){
    let autoBrand = req.params.brand;
    let resultado = [];
    for (let i = 0; i < db.lista.length; i++) {
        if(autoBrand == db.lista[i].marca){
         resultado.push(db.lista[i])
     }
    }
        if(resultado.length == 0){
            return res.send('no tenemos marca ' + autoBrand)
        }else{
            return res.send(resultado)
        }

});
//ruta parametrizada products/color con parametro obligatorio para el color. Si no encuentra el color debe enviar mensaje.

router.get('/color/:color', function(req,res){
    let autoColor = req.params.color;
    let resultado = [];
    for (let i = 0; i < db.lista.length; i++) {
        if(autoColor == db.lista[i].color){
            resultado.push(db.lista[i])
        }
        
    }
    if(resultado.length == 0){
        return res.send('no tenemos color ' + autoColor)
    }else{
        return res.send(resultado)
    }
})

//ruta parametrizada products/model con parametro obligatorio para el modelo. Si no encuentra el modelo debe enviar mensaje.

router.get('/model/:model', function(req,res){
    let resultado = [];
    let autoModel = req.params.model;

    for (let i = 0; i < db.lista.length; i++) {
    if(autoModel == db.lista[i].modelo){
        resultado.push(db.lista[i])
    }        
    }
    if(resultado.length == 0){
        return res.send('no tenemos modelo ' + autoModel)
    }else{
        return res.send(resultado)
    }
    
})
//ruta parametrizada products/year con parametro obligatorio para el anio. Si no encuentra el anio debe enviar mensaje.

router.get('/year/:year', function(req, res){
    let autoYear = req.params.year;
    let resultado = [];

    for (let i = 0; i < db.lista.length; i++) {
        if(autoYear == db.lista[i].anio){
            resultado.push(db.lista[i])
        }
        
    }
    if(resultado.length == 0){
        return res.send('no tenemos autos del anio: '+ autoYear)
    }else{
        return res.send(resultado)
    }
})
module.exports = router;