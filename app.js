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

function sortearAmigo() {
    if (listaDeNombres.length === 0) {
        alert("No hay nombres en la lista para sortear. Por favor, añade al menos un nombre.");
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * listaDeNombres.length);
    const nombreSorteado = listaDeNombres[indiceAleatorio];
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>El amigo secreto es: <strong>${nombreSorteado}</strong></li>`;
}