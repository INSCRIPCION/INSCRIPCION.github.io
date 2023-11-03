var socket = new WebSocket("ws://localhost:8769");
var mensajes = [];

socket.onopen = function(event) {
    console.log("Conexión WebSocket abierta");
};

socket.onmessage = function(event) {
    console.log("Mensaje recibido del servidor: " + event.data);
};

socket.onclose = function(event) {
    if (event.wasClean) {
        console.log("Conexión WebSocket cerrada de manera limpia, código=" + event.code);
    } else {
        console.error("Conexión WebSocket cerrada de manera inesperada");
    }
};

socket.onerror = function(error) {
    console.error("Error en la conexión WebSocket: " + error.message);
};

// Agrega un controlador de eventos "blur" a cada campo de entrada
var inputElements = document.querySelectorAll('input[type="text"]');
inputElements.forEach(function(inputElement, index) {
    inputElement.addEventListener('blur', function(event) {
        enviarMensaje(inputElement, index);
    });
});

function enviarMensaje(inputElement, index) {
    mensajes[index] = inputElement.value;
    socket.send(JSON.stringify(mensajes));
}
