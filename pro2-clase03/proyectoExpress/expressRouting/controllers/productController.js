const db = require('../db/index');

const productController = {
    index:function(req,res){
        return res.render('products', {
            index: db.lista,
            mensaje: 'todos los autos'
        });
    }, 
    marca:function(req,res){
        let autoBrand = req.params.brand;
        let resultado = [];
        for (let i = 0; i < db.lista.length; i++) {
            if(autoBrand == db.lista[i].marca){
             resultado.push(db.lista[i])
         }
        }
            if(resultado.length == 0){
                return res.render('no tenemos marca ' + autoBrand)
            }else{
                return res.render('products',{
                    index: resultado,
                    mensaje: 'autos de la marca '+ autoBrand
                })
            }
    
    },
    modelo:function(req,res){
        let resultado = [];
        let autoModel = req.params.model;
    
        for (let i = 0; i < db.lista.length; i++) {
        if(autoModel == db.lista[i].modelo){
            resultado.push(db.lista[i])
        }        
        }
        if(resultado.length == 0){
            return res.render('no tenemos modelo ' + autoModel)
        }else{
            return res.render('products',{
                index: resultado,
                mensaje: 'autos del modelo '+ autoModel
            })
        }
        
    },
    anio:function(req, res){
        let resultado = [];
        let autoYear = req.params.year;
    
        for (let i = 0; i < db.lista.length; i++) {
            if(autoYear == db.lista[i].anio){
                resultado.push(db.lista[i])
            }
            
        }
        if(resultado.length == 0){
            return res.render('no tenemos autos del anio: '+ autoYear)
        }else{
            return res.render('products',{
                index: resultado,
                mensaje: 'autos del anio '+ autoYear
            })
        }
    },
    color: function(req,res){
        let autoColor = req.params.color;
        let resultado = [];
        for (let i = 0; i < db.lista.length; i++) {
            if(autoColor == db.lista[i].color){
                resultado.push(db.lista[i])
            }
            
        }
        if(resultado.length == 0){
            return res.render('no tenemos color ' + autoColor)
        }else{
            return res.render('products',{
                index: resultado,
                mensaje: 'autos de color '+ autoColor
            })
        }
    }
}
module.exports = productController;