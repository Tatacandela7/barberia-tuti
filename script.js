// BOTÓN SALUDAR

const boton = document.getElementById("boton-bienvenida");
const mensaje = document.getElementById("mensaje-bienvenida");

boton.addEventListener("click", function() {

    if (mensaje.textContent === "") {

        mensaje.textContent = "¡Gracias por visitar Barbería Tuti!";
        boton.textContent = "Volver a saludar";

    } else {

        mensaje.textContent = "¡Te esperamos pronto!";
        boton.textContent = "Saludar";

    }

});


// FORMULARIO DE RESERVAS

const formulario = document.getElementById("formulario-reserva");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const nombreCliente = document.getElementById("nombre").value;
    const telefonoCliente = document.getElementById("telefono").value;
    const servicioElegido = document.getElementById("servicio").value;
    const profesionalElegido = document.getElementById("profesional").value;
   
    const confirmacion = document.getElementById("confirmacion-reserva");

    // Creamos el objeto de la reserva

    const reserva = {
    nombre: nombreCliente,
    telefono: telefonoCliente,
    servicio: servicioElegido,
    profesional: profesionalElegido
};

    // Recuperamos las reservas guardadas

    let reservasGuardadas = JSON.parse(localStorage.getItem("reservas")) || [];

    // Agregamos la nueva reserva

    reservasGuardadas.push(reserva);

    // Guardamos nuevamente en Local Storage

    localStorage.setItem("reservas", JSON.stringify(reservasGuardadas));

    // Mostramos la confirmación

    confirmacion.textContent = "¡Gracias, " + nombreCliente +
        "! Recibimos tu solicitud para: " + servicioElegido +
        ". ¡Te esperamos!";
    // Preparamos el mensaje para WhatsApp

const numeroWhatsApp = "5491168584482";

const mensajeWhatsApp = 
    "Hola, quiero solicitar un turno en Barbería Tuty.%0A%0A" +
    "Nombre: " + nombreCliente + "%0A" +
    "Teléfono: " + telefonoCliente + "%0A" +
    "Servicio: " + servicioElegido + "%0A" +
    "Profesional: " + profesionalElegido;

const enlaceWhatsApp = "https://wa.me/" + numeroWhatsApp +
    "?text=" + encodeURIComponent(mensajeWhatsApp);

window.open(enlaceWhatsApp, "_blank");

    // Limpiamos el formulario

    formulario.reset();

});
