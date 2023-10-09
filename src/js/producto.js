document.addEventListener('DOMContentLoaded', function () {
    // Simulación de un arreglo de productos con imágenes
    const products = [
        {
            id: 1,
            name: 'Hamburguesa',
            description: 'Receta pan doble carne cebolla tomate salsas  ',
            price: 30000,
            imageUrl: 'src/images/hamburguesa.jpeg'
        },
        {
            id: 2,
            name: 'Hotdog',
            description: 'Receta del Hotdog salchicha pan salsa de piña champiñones papitas fritas',
            price: 9000,
            imageUrl: 'src/images/hotdog.jpeg'
        },
        {
            id: 3,
            name: 'kebab',
            description: 'Receta del kebab carne pollo pan',
            price: 20000,
            imageUrl: 'src/images/kebab.jpeg'
        },{


            id: 4,
            name: 'salchipapa',
            description: 'Receta de la salchipapa salchicha salchichon papas cebolla',
            price: 30000,
            imageUrl: 'src/images/salchipapa.jpg'



        },{

            id: 5,
            name: 'pizza',
            description: 'Receta de la pizza queso piña champiñones pollo',
            price: 9000,
            imageUrl: 'src/images/pizza.jpg'




        },{

            id: 6,
            name: 'empanada',
            description: 'Receta de la empanada carne papa pollo aji',
            price: 2000,
            imageUrl: 'src/images/empanada.jpg'




        },{


            id: 7,
            name: 'hamburguesa doble',
            description: 'Receta de la hamburguesa doble carne tomate pollo ,cebolla,salsas',
            price: 40000,
            imageUrl: 'src/images/hamburguesa2.jpg'



        },{


            id: 8,
            name: 'burrito',
            description: 'Receta del burrito carne papa pollo ,pan pollo molido',
            price: 20000,
            imageUrl: 'src/images/burritos.jpg'




        },{

            id: 9,
            name: 'sandwich',
            description: 'Receta del sandwich pan , mortadela queso , mantequilla',
            price: 5000,
            imageUrl: 'src/images/sandwich.jpg'



        },{



            id: 10,
            name: 'arepa rellena',
            description: 'Receta de la arepa , pollo , mantequilla,carne molida,maizitos',
            price: 5000,
            imageUrl: 'src/images/arepa.jpg'



        }

        
    ];

    // Función para mostrar la ventana emergente
    function mostrarMensaje(productoNombre) {
        Swal.fire({
            icon: 'success',
            title: 'Producto añadido',
            text: `Has añadido "${productoNombre}" a tu carrito.`,
        });
    }

    const productContainer = document.getElementById('productContainer');

    // Generar las tarjetas de productos con imágenes
    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('col-md-3', 'mb-3');

        card.innerHTML = `
            <div class="card">
                <img src="${product.imageUrl}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.description}</p>
                    <p class="card-text">$${product.price}</p>
                    <a href="#" class="btn btn-primary comprar-btn" data-producto="${product.name}">comprar</a>
                </div>
            </div>
        `;

        productContainer.appendChild(card);
    });

    // Agregar un listener para el evento de clic en el botón "comprar"
    document.addEventListener('click', function (event) {
        if (event.target.classList.contains('comprar-btn')) {
            const productoNombre = event.target.getAttribute('data-producto');
            mostrarMensaje(productoNombre);
        }
    });
});
