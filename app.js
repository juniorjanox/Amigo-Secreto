// 1️⃣ Declarar un array vacío para almacenar los nombres de los amigos
let amigos = [];

// 2️⃣ Función para agregar amigos a la lista
function agregarAmigo() {
    // Capturar el valor del input
    let input = document.getElementById("amigo");
    let nombre = input.value.trim(); // Trim para evitar espacios vacíos innecesarios

    // Validar que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return; // Salir de la función si el campo está vacío
    }

    // Agregar el nombre al array de amigos
    amigos.push(nombre);

    // Limpiar el campo de entrada
    input.value = "";

    // Actualizar la lista en la página
    actualizarLista();
}

// 3️⃣ Función para mostrar la lista de amigos en pantalla
function actualizarLista() {
    // Seleccionar el elemento UL donde se mostrarán los nombres
    let lista = document.getElementById("listaAmigos");

    // Limpiar la lista para evitar duplicados
    lista.innerHTML = "";

    // Recorrer el array de amigos y agregar cada nombre como <li>
    for (let amigo of amigos) {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li); // Agregar el elemento <li> a la lista
    }
}

// 4️⃣ Función para sortear un amigo aleatorio
function sortearAmigo() {
    // Validar que haya al menos un nombre en la lista
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el nombre sorteado en la página
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 ¡El amigo secreto es: <strong>${amigoSorteado}</strong>! 🎉</li>`;
}

