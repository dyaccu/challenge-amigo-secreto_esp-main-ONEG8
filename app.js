// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeNombres = [];

function agregarNombre(){
    let nombres = document.getElementById('amigo').value;
    if (nombres === "") {
        alert('Por favor, ingrese un nombre')
    } else {
        listaDeNombres.push(nombres);
    } limpiarCampo();
}

function limpiarCampo(){
    document.querySelector('#amigo').value='';
}