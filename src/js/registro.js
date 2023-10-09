function enviarDatos() {
    var nombre = document.getElementById('nombre').value;
    var correo = document.getElementById('correo').value;
    var contrasena = document.getElementById('contrasena').value;
    var genero = document.getElementById('genero').value;
    var ciudad = document.getElementById('ciudad').value;

    var datos = {
        nombre: nombre,
        correo: correo,
        contrasena: contrasena,
        genero: genero,
        ciudad: ciudad
    };

    // Realizar la solicitud POST utilizando Fetch API
    fetch('http://localhost:9090/usuario/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    })
    .then(response => response.json())
    .then(data => {
        if (data.mensaje && data.mensaje === 'Usuario agregado con exito') {
            // Mostrar notificación de éxito y redirigir a login.html
            Swal.fire({
                icon: 'success',
                title: 'Éxito',
                text: 'Registro exitoso. Redirigiendo a la página de inicio de sesión...'
            }).then(() => {
                // Redireccionar después de cerrar la notificación
                window.location.href = 'login.html';
            });
        } else {
            // Puedes manejar otros casos si es necesario
            console.log('Respuesta del servidor:', data.mensaje);
        }
    })
    .catch(error => {
        console.error('Error al enviar la solicitud:', error);
    });
}
