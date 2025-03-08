# Amigo Secreto 🎁

## Descripción 📖
Este proyecto es una aplicación web sencilla para organizar un sorteo de **Amigo Secreto**. Permite a los usuarios agregar nombres a una lista y seleccionar de manera aleatoria un participante.

## Funcionalidades ⚡
- **Agregar amigos:** El usuario puede ingresar nombres en un campo de texto y agregarlos a una lista.
- **Mostrar lista de amigos:** Se actualiza la lista de amigos en pantalla en tiempo real.
- **Sortear un amigo:** Se selecciona aleatoriamente un nombre de la lista y se muestra como resultado.
- **Validaciones:** Se evitan entradas vacías y sorteos sin nombres.

## Tecnologías Utilizadas 🛠️
- **HTML**: Estructura de la página.
- **CSS**: Estilos para mejorar la apariencia.
- **JavaScript**: Lógica de la aplicación.

## Código Fuente 📌

### **JavaScript (`app.js`)**
```javascript
// 1️⃣ Declarar un array para almacenar nombres
let amigos = [];

// 2️⃣ Agregar un amigo a la lista
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombre);
    input.value = "";
    actualizarLista();
}

// 3️⃣ Mostrar la lista en pantalla
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let amigo of amigos) {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    }
}

// 4️⃣ Sortear un amigo aleatorio
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 ¡El amigo secreto es: <strong>${amigoSorteado}</strong>! 🎉</li>`;
}
```

## Capturas de Pantalla 📸
_Web cargada._

![image](https://github.com/user-attachments/assets/4a521f7d-61b6-44b3-a1bb-1c9c3933c77f)

_Ingresando nombre de amigos._

![image](https://github.com/user-attachments/assets/214bd7a2-a157-45b3-b551-fbfa0d78ae6b)

_Dando Click en el boton Añadir, se añade y se muestra en la Lista._

![image](https://github.com/user-attachments/assets/24c79dca-4de0-4903-934b-269525c5bd38)

_Dando Click en el boton Sortear Amigo, sortea seudo aleatoriamente a un amigo entre la lista de 3 amigos añadidos._

![image](https://github.com/user-attachments/assets/01aee537-113b-48b5-b1fa-c0fd5408ffd6)

_Dando Click en el boton Añadir, se evitan entradas vacías, mostrando la alerta "Por favor, inserte un nombre"._

![image](https://github.com/user-attachments/assets/33130bc2-0cd8-41f4-9c2c-0c01da50a0a7)

_Dando Click en el boton Sortear Amigo, se evitan sorteos sin nombres, mostrando la alerta "No hay amigos en la lista para sortear"._

![image](https://github.com/user-attachments/assets/069779b1-9219-4aaf-8e5f-d7337cfda96b)


## Instrucciones de Uso 🚀
1. Escribe un nombre en el campo de texto.
2. Haz clic en **"Agregar"** para guardarlo en la lista.
3. Repite hasta ingresar todos los nombres.
4. Presiona **"Sortear Amigo"** para seleccionar un nombre al azar.
5. ¡Disfruta del sorteo! 🎉

## Contribuciones 🤝
Si deseas mejorar este proyecto, puedes hacer un **fork**, modificar el código y enviar un **pull request**.

## Autor ✨
[Junior Americo] - Desarrollador Web

