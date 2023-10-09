function validarContrasena(contrasena) {
    const regex = /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[0-9])(?=.*[A-Z]).{8,}$/;
    return regex.test(contrasena);
}

function enviarDatos() {
    var correo = document.getElementById('correo').value;
    var nuevaContrasena = document.getElementById('nuevaContrasena').value;

    if (!validarContrasena(nuevaContrasena)) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'La contraseña debe contener al menos un símbolo, un número y una mayúscula.'
        });
        return;
    }

    var datos = {
        correo: correo,
        contrasena: nuevaContrasena
    };
    
    fetch('http://localhost:9090/usuario/actualizarcontrasena', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    })
    .then(response => response.json())
    .then(data => {
        if (data.mensaje && data.mensaje === 'Ok. Contraseña actualizada') {
            Swal.fire({
                icon: 'success',
                title: 'Éxito',
                text: 'Contraseña actualizada con éxito. Redirigiendo a la página de inicio de sesión...'
            }).then(() => {
                window.location.href = 'login.html';
            });
        } else {
            console.log('Respuesta del servidor:', data.mensaje);
        }
    })
    .catch(error => {
        console.error('Error al enviar la solicitud:', error);
    });
}
