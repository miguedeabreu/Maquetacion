let boton1 = document.getElementById("prenda1");
let boton2 = document.getElementById("prenda2");
let boton3 = document.getElementById("prenda3");
let boton4 = document.getElementById("prenda4");
let boton5 = document.getElementById("prenda5");
let boton6 = document.getElementById("prenda6");
let boton7 = document.getElementById("prenda7");
let boton8 = document.getElementById("prenda8");
let boton9 = document.getElementById("prenda9");
let boton10 = document.getElementById("prenda10");
let boton11 = document.getElementById("prenda11");
let boton12 = document.getElementById("prenda12");

let suma = document.getElementById("suma");
let mostrar = document.getElementById("mostrar");

let myArray = [];

class prendas {

    constructor (tipo, precio){

        this.tipo = tipo;
        this.precio = precio;
    }
}

let prenda1 = new prendas ("sudadera", 165);
let prenda2 = new prendas ("sudadera", 165);
let prenda3 = new prendas ("sudadera", 195);
let prenda4 = new prendas ("sudadera", 165);
let prenda5 = new prendas ("sudadera", 165);
let prenda6 = new prendas ("camiseta", 85);
let prenda7 = new prendas ("camiseta", 65);
let prenda8 = new prendas ("camiseta", 65);
let prenda9 = new prendas ("gorra", 85);
let prenda10 = new prendas ("tarjetero", 90);
let prenda11 = new prendas ("maletin", 395);
let prenda12 = new prendas ("bolso", 145);

myArray.push(prenda1);
myArray.push(prenda2);
myArray.push(prenda3);
myArray.push(prenda4);
myArray.push(prenda5);
myArray.push(prenda6);
myArray.push(prenda7);
myArray.push(prenda8);
myArray.push(prenda9);
myArray.push(prenda10);
myArray.push(prenda11);
myArray.push(prenda12);


console.log(myArray);

let myArray2 = [];

function introduce(pos){

    myArray2.push(myArray[pos]);

    console.log(myArray2);
}

function carrito(){

    let suma1 = 0;

    for (let i = 0 ; i < myArray2.length ; i++){
        
        suma1 += myArray2[i].precio;
        suma.innerHTML += `${myArray2[i].tipo} ${myArray2[i].precio} € <br/>`      
    }

    console.log(suma1);

    suma.innerHTML += `<p>TOTAL: ${suma1} €</p>`; 

}
