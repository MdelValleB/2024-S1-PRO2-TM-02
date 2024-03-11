// primero requerir todos los modulos necesarios para que funcione
const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');

//crear las rutas con sus sufijos
router.get('/', productController.index);

//ruta parametrizada products/brand con parametro obligatorio para la marca. Si no encuentra la marca debe enviar mensaje.

router.get('/brand/:brand', productController.marca);
//ruta parametrizada products/color con parametro obligatorio para el color. Si no encuentra el color debe enviar mensaje.

router.get('/color/:color', productController.color)

//ruta parametrizada products/model con parametro obligatorio para el modelo. Si no encuentra el modelo debe enviar mensaje.

router.get('/model/:model', productController.modelo);
//ruta parametrizada products/year con parametro obligatorio para el anio. Si no encuentra el anio debe enviar mensaje.

router.get('/year/:year', productController.anio);
module.exports = router;