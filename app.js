// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeNombres = [];

function agregarNombre(){
    let nombres = document.getElementById('amigo').value;
    if (nombres === "") {
        alert('Por favor, ingrese un nombre')
    } else {
        listaDeNombres.push(nombres);
        actualizarLista()
    } 
    limpiarCampo();
}

function limpiarCampo(){
    document.querySelector('#amigo').value='';
}

function actualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    for (let nombre of listaDeNombres) {
        const item = document.createElement('li');
        item.textContent = nombre;
        lista.appendChild(item);
    }
}