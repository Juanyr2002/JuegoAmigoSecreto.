// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


//VARIABLE//
let AmigosSecretos = [];

//AGREGAR AMIGO//
function agregarAmigo() {
    let Amigo = document.getElementById("amigo").value.trim();
    
    if (Amigo === "") {
        mostrarParrafoTemporal('p', "POR FAVOR INGRESE UN NOMBRE", 2);
        return;
    }

  
    AmigosSecretos.push(Amigo);

  
    let listaAmigo = document.createElement('li');
    listaAmigo.textContent = Amigo + " ";

   //BOTON DE ELIMINAR AMIGO//
    let eliminarAmigo = document.createElement("button");
    eliminarAmigo.textContent = "Eliminar";
    eliminarAmigo.onclick = function () {
        eliminarNombre(Amigo, listaAmigo);
    };

    listaAmigo.appendChild(eliminarAmigo);
    document.getElementById("listaAmigos").appendChild(listaAmigo);
    document.getElementById("amigo").value = "";
}


//ELIMINAR NOMBRES DEL ARRAY//
function eliminarNombre(nombre, elemento) {
    let index = AmigosSecretos.indexOf(nombre);
    if (index !== -1) {
        AmigosSecretos.splice(index, 1); 
    }
    elemento.remove(); 
}



//FUNCION SORTEAR AMIGO//
function sortearAmigo() {
    if (AmigosSecretos.length === 0) {
        mostrarParrafoTemporal('p', "NO HAY AMIGOS EN LA LISTA PARA SORTEAR", 3);
        return;
    }

    let Aleatorio = Math.floor(Math.random() * AmigosSecretos.length);
    let amigoSeleccionado = AmigosSecretos[Aleatorio];

    asignarTextoElemento("#resultado", "Amigo seleccionado:" + amigoSeleccionado );
}



//FUNCIONES AUXILIARES//
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function mostrarParrafoTemporal(elemento, texto, segundos) {
    asignarTextoElemento(elemento, texto);
    setTimeout(() => asignarTextoElemento(elemento, ""), segundos * 1000);
}
