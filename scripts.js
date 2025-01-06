// Add event listener to the order form submit button
document.getElementById('order-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Get the form data
    var formData = new FormData(event.target);
    // Send the form data to the server
    fetch('/orders', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        // Update the order history section
        var orderHistory = document.getElementById('order-history');
        orderHistory.innerHTML = '';
        data.orders.forEach(order => {
            var orderHTML = `
                <div>
                    <h3>Order #${order.id}</h3>
                    <p>Product: ${order.product}</p>
                    <p>Quantity: ${order.quantity}</p>
                    <p>Instructions: ${order.instructions}</p>
                </div>
            `;
            orderHistory.innerHTML += orderHTML;
        });
    })
    .catch(error => console.error('Error:', error));
});

// Add event listener to the contact form submit button
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Get the form data
    var formData = new FormData(event.target);
    // Send the form data to the server
    fetch('/contact', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        // Update the contact details section
        var contactDetails = document.getElementById('contact-details');
        contactDetails.innerHTML = '';
        data.contact.forEach(contact => {
            var contactHTML = `
                <p>Phone: <a href="tel:${contact.phone}">${contact.phone}</a></p>
                <p>Email: <a href="mailto:${contact.email}">${contact.email}</a></p>
                <p>Address: ${contact.address}</p>
            `;
            contactDetails.innerHTML += contactHTML;
        });
    })
    .catch(error => console.error('Error:', error));
});