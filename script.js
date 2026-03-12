// Check if form exists before attaching listener
const feedbackForm = document.getElementById('feedbackForm');
if (!feedbackForm) {
    console.error('Form element not found!');
} else {
    feedbackForm.addEventListener('submit', function(event) {
        event.preventDefault();
        console.log('Form submitted'); // Debug log

        const name = document.getElementById('name')?.value || '';
        const email = document.getElementById('email')?.value || '';
        const gender = document.getElementById('gender')?.value || '';
        const rating = document.getElementById('rating')?.value || '';
        const message = document.getElementById('message')?.value || '';

        // Validation check for all fields
        if (!name || !email || !message) {
            alert('Please fill in all required fields.');
            return;
        }

        if (!rating) {
            alert('Please select a rating before submitting.');
            return;
        }

        const feedbackDisplay = document.getElementById('feedbackDisplay');
        feedbackDisplay.innerHTML = `
            <h2>Thank you for your feedback!</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Gender:</strong> ${gender}</p>
            <p><strong>Rating:</strong> ${rating} / 5</p>
            <p><strong>Message:</strong> ${message}</p>
        `;

        alert('Your feedback has been successfully submitted.');
        document.getElementById('feedbackForm').reset();
        document.getElementById('feedbackDisplay').innerHTML = '';
        
        // Clear star selection
        const stars = document.querySelectorAll('.star-rating span');
        stars.forEach(s => s.classList.remove('selected'));
        document.getElementById('rating').value = '';
    });
}

// Star rating functionality - only user click selects stars
const stars = document.querySelectorAll('.star-rating span');
stars.forEach(star => {
    star.addEventListener('click', function() {
        const rating = this.getAttribute('data-value');
        document.getElementById('rating').value = rating;

        stars.forEach(s => s.classList.remove('selected'));
        for (let i = 0; i < rating; i++) {
            stars[i].classList.add('selected');
        }
    });
    
    // Remove any auto-selection on hover
    star.addEventListener('mouseenter', function() {
        // Do nothing - stars only select on click
    });
});
