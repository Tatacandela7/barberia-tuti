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

    const confirmacion = document.getElementById("confirmacion-reserva");

    // Creamos el objeto de la reserva

    const reserva = {
        nombre: nombreCliente,
        telefono: telefonoCliente,
        servicio: servicioElegido
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

    // Limpiamos el formulario

    formulario.reset();

});