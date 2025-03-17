// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    let nombreDeAmigo=(document.getElementById("amigo").value);
       if (!nombreDeAmigo) { 
        alert("Por favor, inserte un nombre.");
    }
    else{
        amigos.push(nombreDeAmigo);
        visualizarListaDeAmigos();
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}
console.log(amigos);

function visualizarListaDeAmigos(){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        let nuevoElementoLi = document.createElement("li"); 
        nuevoElementoLi.innerHTML = amigos[i]; 
        listaAmigos.appendChild(nuevoElementoLi); 
    }

    return;

}

function sortearAmigo(){
    let resultado = document.getElementById("resultado");
    if (amigos.length === 0) {
        resultado.innerHTML = "No hay amigos en la lista.";
        return;
    }
    else{
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[indiceAleatorio];    
        resultado.innerHTML = `<li>El amigo sorteado es: <strong>${amigoSorteado}</strong></li>`;
       }
}
