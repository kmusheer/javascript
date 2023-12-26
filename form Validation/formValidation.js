
function getInputAndError(inputId, errorId) {
    let input = document.getElementById(inputId);
    let error = document.getElementById(errorId);
    let value = input.value.trim(); // Trimmed value for convenience

    return { input, error, value };
}

function setupInputField(inputId, errorId) {
    let { input, error } = getInputAndError(inputId, errorId);

    // Add touch event listener to the input
    input.addEventListener('touchstart', function () {
        // Remove the error when the input is touched
        error.textContent = '';
        error.style.display = 'none';
    });

    input.addEventListener('input', function () {
        // Remove the error when the input is filled
        if (input.value.trim() !== '') {
            error.textContent = '';
            error.style.display = 'none';
        }
    });
}

function validateForm(event) {
    if (event) {
        event.preventDefault();
    }

    // Retrieve input values and errors using the common function
    let { value: fullName, error: nameError } = getInputAndError('full-name', 'error-full-name');
    let { value: email, error: emailError } = getInputAndError('email', 'error-email');
    let { value: phone, error: phoneError } = getInputAndError('phone', 'error-phone');
    let { value: birthDate, error: birthDateError } = getInputAndError('birth-date', 'error-birth-date');
    let { value: country, error: countryError } = getInputAndError('country', 'error-country');
    let { value: city, error: cityError } = getInputAndError('city', 'error-city');
    let { value: region, error: regionError } = getInputAndError('region', 'error-region');
    let { value: postalCode, error: postalCodeError } = getInputAndError('postal-code', 'error-postal-code');

    // Simple validation example, you can add more complex validation as needed
    if (fullName === '') {
        nameError.textContent = 'Please enter your name';
        nameError.style.display = 'block';
        return false;
    }

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        emailError.textContent = 'Please enter your valid email';
        emailError.style.display = 'block';
        return false;
    }

    if (phone === '') {
        phoneError.textContent = 'Please enter a valid 10-digit phone number';
        phoneError.style.display = 'block';
        return false;
    }

    if (birthDate === '') {
        birthDateError.textContent = 'Please enter your birth date.';
        birthDateError.style.display = 'block';
        return false;
    }

    if (country === 'Country') {
        countryError.textContent = 'Please select your country.';
        countryError.style.display = 'block';
        return false;
    }

    if (city === '') {
        cityError.textContent = 'Please enter your city.';
        cityError.style.display = 'block';
        return false;
    }

        if (region === '') {
        regionError.textContent = 'Please enter your region.';
        regionError.style.display = 'block';
        return false;
    }

    let postalCodeRegex = /^\d{6}$/;
    if (!postalCodeRegex.test(postalCode)) {
        postalCodeError.textContent = 'Please enter a valid postal code';
        postalCodeError.style.display = 'block';
        return false;
    }
    alert('Form submitted successfully!');
    return true;
}

// Setup touch and input event listeners for each input field
setupInputField('full-name', 'error-full-name');
setupInputField('email', 'error-email');
setupInputField('phone', 'error-phone');
setupInputField('birth-date', 'error-birth-date');
setupInputField('country', 'error-country');
setupInputField('city', 'error-city');
setupInputField('region', 'error-region');
setupInputField('postal-code', 'error-postal-code');
