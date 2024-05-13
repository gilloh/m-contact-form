// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Function to show error messages
    function showError(message) {
        var errorElement = document.createElement('p');
        errorElement.style.color = 'red';
        errorElement.textContent = message;
        document.getElementById('error-message').appendChild(errorElement);
    }

    // Function to clear error messages
    function clearErrors() {
        document.getElementById('error-message').innerHTML = '';
    }

    // Function to show the preview of the form data
    function showPreview() {
        // Clear previous error messages
        clearErrors();

        // Check if all mandatory fields are filled
        var clientName = document.getElementById('client_name').value.trim();
        var phoneNumber = document.getElementById('phone_number').value.trim();
        var email = document.getElementById('email').value.trim();
        var moveDateTime = document.getElementById('move_date_time').value.trim();

        // Populate preview data
        document.getElementById('preview_client_name').textContent = clientName;
        document.getElementById('preview_phone_number').textContent = phoneNumber;
        document.getElementById('preview_email').textContent = email;
        document.getElementById('preview_move_date_time').textContent = moveDateTime;
        document.getElementById('preview_additional_info').textContent = document.getElementById('additional_info').value;
        document.getElementById('preview_num_of_vans').textContent = document.getElementById('num_of_vans').value;
        document.getElementById('preview_collection_address').textContent = document.getElementById('collection_street').value + ', ' + document.getElementById('collection_city').value + ', ' + document.getElementById('collection_postcode').value;
        document.getElementById('preview_delivery_address').textContent = document.getElementById('delivery_street').value + ', ' + document.getElementById('delivery_city').value + ', ' + document.getElementById('delivery_postcode').value;
        document.getElementById('preview_num_of_men').textContent = document.getElementById('num_of_men').value;
        document.getElementById('preview_total_miles').textContent = document.getElementById('total_miles').value;
        document.getElementById('preview_total_stairs').textContent = document.getElementById('total_stairs').value;
        document.getElementById('preview_hours_needed').textContent = document.getElementById('hours_needed').value;
        document.getElementById('preview_additional_service').textContent = document.getElementById('additional_service').value;
        document.getElementById('preview_congestion_zone').textContent = document.getElementById('congestion_zone').value;

        // Show the preview
        document.getElementById('preview').classList.add('active');
        document.getElementById('preview').scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    // Function to hide the preview
    function hidePreview() {
        document.getElementById('preview').classList.remove('active');
    }

    // Event listener for the Preview Quotation button
    document.getElementById('previewButton').addEventListener('click', showPreview);

    // Event listener for the Submit Form button
    document.getElementById('submitFormButton').addEventListener('click', showPreview);

    // Event listener for the form submission
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        // Prevent the default form submission
        event.preventDefault();
        // Call the function to submit the form
        submitForm();
    });

    // Function to submit the form
    function submitForm() {
        // You can implement form submission logic here
        // For now, just log a message to indicate that the form is submitted
        console.log('Form submitted!');
    }

    // Event listener for the Terms & Conditions popup
    document.querySelector('#termsLink').addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('.popup').style.display = 'block';
    });

    // Event listener to close the Terms & Conditions popup
    document.querySelector('.popup').addEventListener('click', function(event) {
        if (event.target.classList.contains('popup') || event.target.classList.contains('close')) {
            document.querySelector('.popup').style.display = 'none';
        }
    });
});
