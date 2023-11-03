var socket = new WebSocket("ws://localhost:8768");

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

function enviarMensaje(event, index) {
    var inputElement = document.getElementById("mensaje" + index);
    
    if (event.keyCode === 13 || inputElement.value.trim() !== "") {
        // Verificar si se presionó "Enter" o se cambió el input
        var mensajes = [];
        for (var i = 0; i < 10; i++) {
            mensajes.push(document.getElementById("mensaje" + i).value);
        }
        socket.send(JSON.stringify(mensajes));
    }
}
