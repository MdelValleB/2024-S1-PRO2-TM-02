let alu = ["pepe", "jony"]
for (let i = 0; i < alu.length; i++) {
   console.log('hoa '+ alu[i]);
    
}

let auto = {
    color: "rojo",
    marca: "ford",
    funciona: function(){
        return "Si, funciona!";
    },
    combust: function(com1, com2){
            let carga = `usa ${com1} y ${com2}`
        return 'anda cuando ' + carga
    }

}

console.log(auto.combust('nafta', 'gas'));

