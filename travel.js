let nombre = document.getElementById("name");
let origen = document.getElementById("origen");
let destino = document.getElementById("destino");
let ocupacion = document.getElementById("ocupacion");
let fecha = document.getElementById("fecha");
let final = document.getElementById("final");

let array=[];
let array2 = [];

function solicitudes () {
    let nombreSolicitud = nombre.value;
    let origenSolicitud = origen.value;
    let destinoSolicitud = destino.value;
    let ocupacionSolicitud = ocupacion.value;
    let fechaSolicitud = fecha.value;

    let solicitud = { nombre: nombreSolicitud,
                      origen: origenSolicitud,
                      destino: destinoSolicitud,
                      ocupacion: ocupacionSolicitud,
                      fecha: fechaSolicitud
    }

    array.push(solicitud);

    console.log(array);
}

function filtrado () {

    for (let i = 0 ; i < array.length ; i++) {
        
        let destino2 = array[i].destino.toLowerCase();

        if (destino2 == "mallorca" || destino2 == "canarias" || destino2 == "galicia") {
            
            array2.push(array[i]);
        }
    }
    console.log(array2);

    for (let i = 0 ; i < array2.length ; i++)
    {
        final.innerHTML += `<p> ${array2[i].nombre} </p>
        <p> ${array2[i].origen} </p>
        <p> ${array2[i].destino} </p>
        <p> ${array2[i].ocupacion} </p>
        <p> ${array2[i].fecha} </p>`
    }
}
