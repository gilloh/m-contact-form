function validatePhoneNumber(phoneNumber) {
    // Regular expression for UK phone number
    var phoneRegex = /^(?:(?:\+|00)44|0)7(?:[45789]\d{2}|624)\d{6}$/;
    return phoneRegex.test(phoneNumber);
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showError(message) {
    var errorElement = document.createElement('p');
    errorElement.style.color = 'red';
    errorElement.textContent = message;
    document.getElementById('error-message').appendChild(errorElement);
}

function clearErrors() {
    document.getElementById('error-message').innerHTML = '';
}

function showPreview() {
    // Clear previous error messages
    clearErrors();

    // Check if all mandatory fields are filled
    var clientName = document.getElementById('client_name').value.trim();
    var phoneNumber = document.getElementById('phone_number').value.trim();
    var email = document.getElementById('email').value.trim();
    var moveDateTime = document.getElementById('move_date_time').value.trim();

    // if (clientName === '' || phoneNumber === '' || email === '' || moveDateTime === '') {
    //     showError('Please fill in all mandatory fields.');
    //     return;
    // }

    // // Validate phone number
    // if (!validatePhoneNumber(phoneNumber)) {
    //     showError('Please enter a valid UK phone number.');
    //     return;
    // }

    // Populate preview data
    document.getElementById('preview_client_name').textContent = clientName;
    document.getElementById('preview_phone_number').textContent = phoneNumber;
    document.getElementById('preview_email').textContent = email;
    document.getElementById('preview_move_date_time').textContent = moveDateTime;
    document.getElementById('preview_travel_with_van').textContent = document.getElementById('travel_with_van').value;
    document.getElementById('preview_how_heard').textContent = document.getElementById('how_heard').value;
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

document.querySelector('#termsLink').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('.popup').style.display = 'block';
});

document.querySelector('.popup').addEventListener('click', function(event) {
    if (event.target.classList.contains('popup') || event.target.classList.contains('close')) {
        document.querySelector('.popup').style.display = 'none';
    }
});

// Add event listener for the Preview Quotation button
document.getElementById('previewButton').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default form submission
    showPreview(); // Call the function to show the preview
});

document.querySelector('button[type="button"]').addEventListener('click', showPreview);

