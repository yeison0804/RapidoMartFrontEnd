document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        
        const correo = document.getElementById('email').value;
        const contrasena = document.getElementById('password').value;
        if (correo.trim() === '' || contrasena.trim() === '') {
          
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Por favor, completa todos los campos.'
            });
            return; // No se envía la solicitud si los campos están vacíos
        }
        // Realizar la solicitud al servicio web (aquí asumimos que el servicio está en 'https://example.com/login')
        fetch('http://localhost:9090/usuario/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ correo, contrasena })
        })
        .then(response => response.json())
        .then(data => {
            if (data.mensaje) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: data.mensaje
                });
            }else{
                console.log(data)
                Swal.fire({
                    icon: 'success',
                    title: 'Éxito',
                    text: 'Inicio de sesión exitoso.'
                }).then(() => {
                    // Redireccionar después de cerrar la notificación
                    window.location.href = 'productos.html';
                });
            }
           
        })
        .catch(error => {
            console.error('Error al iniciar sesión:', error);
        });
    });

});


const recordarButton = document.getElementById('recordar');

recordarButton.addEventListener('click', function (e) {
    e.preventDefault();
    
    const correo = document.getElementById('email').value;
    const contrasena = document.getElementById('password').value;
    if (correo.trim() === '') {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: "Por favor completa el correo"
        });
        return; // No se envía la solicitud si los campos están vacíos
    }
    
    // Realizar la solicitud al servicio web (aquí asumimos que el servicio está en 'https://example.com/login')
    fetch('http://localhost:9090/usuario/enviarcorreo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ correo, contrasena })
    })
    .then(response => response.json())
    .then(data => {
       
        Swal.fire({
            icon: 'warning',
            title: 'Info',
            text: data.mensaje
        });
       
    })
    .catch(error => {
        console.error('Error al consumir el servicio', error);
    });
});

