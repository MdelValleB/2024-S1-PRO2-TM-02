//A04 - Módulos [Ejercicios] Practica Asinc
//Modulo local

const autos = require('./db/index');

// console.log(autos);

function describirse(num){
if (num < autos.lista.length){
    const auto = autos.lista[num];
    return `Hola, soy el auto ${auto.marca}, modelo ${auto.modelo}, fabricado el año ${auto.anio} y de color ${auto.color}`

}else{
    return `no hay tantos autos, por favor elija entre 0 y ${autos.lista.length - 1}`
}

}

const listado = describirse(15)
console.log(listado);

//11. Creá un bucle que utilice la función anterior para ver por consola la descripción de todos los autos del módulo.
//Ejecutá app.js para ver los resultados.

for (let i = 0; i < autos.lista.length; i++) {
    console.log(describirse(i));  
}

//12. Creá una función porColor(color) que reciba un color por parámetro y retorne  una colección de autos dependiendo el color pasado como parámetro. En caso de no tener resultados deberá devolver el mensaje “No contamos con auos de color color”.
// Tip: 
// Definir una variable de resultados
// Realizar un for que recorra todo los autos
// Dentro del for chequear la condición de color con un if
// Dentro del if (si se cumple la condición) agregar el auto a los resultados
// Retornar la variable resultados.
// Invocá la función usando un color al azar.
// Ejecutá app.js para ver los resultados.

// Desafío plus: ¿Qué pasa si ingresás un color con la primera letra en mayúscula?  El método toLowerCase() te puede ayudar. ¿Se te ocurre en dónde usarlo?

/*funcion porColor que filtra autos por el color dado */
function porColor(color){
    //variable para almacenar los resultados
    const resultados = [];
    //recorrer todos los autos
    for (let i = 0; i < autos.lista.length; i++) {
      
        if(color.toLowerCase() == autos.lista[i].color){
        resultados.push(autos.lista[i])
        }
    }
    return resultados;
}
console.log(porColor('REd'));


// 13. Creá una función porMarca(marca) que reciba una marca por parámetro y retorne una colección de autos dependiendo la marca que se pase como parámetro. En caso de no tener resultados deberá devolver el mensaje “No contamos con autos de marca marca”.

// Invocá la función usando una marca al azar.
// Ejecutá app.js para ver los resultados.

// Desafío plus: ¿Qué pasa si ingresás una marca con la primera letra en mayúscula?  El método .toLowerCase() te puede ayudar. ¿Se te ocurre en dónde usarlo?

/*funcion porMarca que filtra autos por la marca dada */
function porMarca(brand){
    //variable para almacenar los resultados
    const resultados = [];
    //recorrer todos los autos
    for (let i = 0; i < autos.lista.length; i++) {
      
        if(brand.toLowerCase() == autos.lista[i].marca){
        resultados.push(autos.lista[i])
        }
    }
    return resultados;
}
console.log(porMarca('auDI'));

// 14. Creá una función porAnio(anio) que reciba un año por parámetro y retorne una colección de autos dependiendo el año que se pase como parámetro. En caso de no tener resultados deberá devolver el mensaje “No contamos con autos del año año”.

// Invocá la función usando un año al azar.

// Ejecutá app.js para ver los resultados.

/*funcion porAnio que filtra autos por el año dado */
function porAnio(anio){
    //variable para almacenar los resultados
    const resultados = [];
    //recorrer todos los autos
    for (let i = 0; i < autos.lista.length; i++) {
         if(anio == autos.lista[i].anio){
        resultados.push(autos.lista[i])
        }     
    }
        return resultados;
}
console.log(porAnio('2020'));
 
