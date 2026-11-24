export async function fetchProducts() {
    const response = await fetch(
        "http://127.0.0.1:8000/items/"
    );

    return response.json();
}

export function getCategory(product) {
    return product.condition.toLowerCase();
}

export function renderProduct(product) {
    return `
        <article>
            <h2>${product.brand} ${product.name}</h2>

            <img src="http://127.0.0.1:8000${product.image}"
                 width="200">

            <p>Price: $${product.price}</p>
            <p>Quantity: ${product.quantity}</p>
        </article>
    `;
}

export async function showProducts(productProvider) {
    const products = await productProvider();

    products.forEach(product => {
        const category = getCategory(product);

        const container = document.getElementById(
            `${category}-products`
        );

        if (container) {
            container.innerHTML += renderProduct(product);
        }
    });
}