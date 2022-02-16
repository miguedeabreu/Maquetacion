let posicion1 = document.getElementById("tablero1");
var firstClick = false;    

function x () {

    if(!firstClick){
        
        firstClick = true; 
    }

    posicion1.innerHTML += `<p> ${"X"} </p>`
}