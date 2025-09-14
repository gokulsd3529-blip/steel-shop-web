document.addEventListener('DOMContentLoaded', () => {
    // A sample array of product data
    const products = [
        {
            name: "TMT Bars",
            description: "High-quality TMT bars for superior strength and durability in construction.",
            image: "https://via.placeholder.com/300x200.png?text=TMT+Bars"
        },
        {
            name: "Steel Plates",
            description: "Durable steel plates suitable for industrial applications and fabrication.",
            image: "https://via.placeholder.com/300x200.png?text=Steel+Plates"
        },
        {
            name: "Steel Pipes",
            description: "Seamless steel pipes for a variety of uses, including plumbing and structural needs.",
            image: "https://via.placeholder.com/300x200.png?text=Steel+Pipes"
        }
    ];

    const productGrid = document.getElementById('product-grid');

    // Function to create a product item HTML
    function createProductItem(product) {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'product-item';
        itemDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
        `;
        return itemDiv;
    }

    // Loop through the products and add them to the page
    products.forEach(product => {
        productGrid.appendChild(createProductItem(product));
    });

    // Handle form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // You can add more complex validation and an actual submission process here
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
});
