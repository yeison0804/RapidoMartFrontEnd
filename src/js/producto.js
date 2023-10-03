

document.addEventListener('DOMContentLoaded', function () {
    // Simulación de un arreglo de productos con imágenes
    const products = [
        {
            id: 1,
            name: 'Hamburguesa',
            description: 'Receta',
            price: 10,
            imageUrl: 'src/images/hamburguesa.jpeg'
        },
        {
            id: 2,
            name: 'Hotdog',
            description: 'Receta del Hotdog',
            price: 20,
            imageUrl: 'src/images/hotdog.jpeg'
        },
        {
            id: 3,
            name: 'kebab',
            description: 'Receta del producto 3',
            price: 30,
            imageUrl: 'src/images/kebab.jpeg'
        }
    ];

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
                    <a href="#" class="btn btn-primary">comprar</a>
                </div>
            </div>
        `;

        productContainer.appendChild(card);
    });
});