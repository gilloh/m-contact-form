function showPreview() {
    // Check if all mandatory fields are filled
    if (validateFields()) {
        // Populate preview data
        document.getElementById('preview_client_name').textContent = document.getElementById('client_name').value;
        document.getElementById('preview_phone_number').textContent = document.getElementById('phone_number').value;
        document.getElementById('preview_email').textContent = document.getElementById('email').value;
        document.getElementById('preview_move_date_time').textContent = document.getElementById('move_date_time').value;
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
    } else {
        // Alert user to fill in all mandatory fields
        alert('Please fill in all mandatory fields.');
    }
}
function validateFields() {
    // Check if all mandatory fields are filled
    var clientName = document.getElementById('client_name').value;
    var phoneNumber = document.getElementById('phone_number').value;
    var email = document.getElementById('email').value;
    var moveDateTime = document.getElementById('move_date_time').value;

    // You can add more fields as needed

    if (clientName.trim() === '' || phoneNumber.trim() === '' || email.trim() === '' || moveDateTime.trim() === '') {
        return false;
    }

    // Add more validation logic as needed

    return true;
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