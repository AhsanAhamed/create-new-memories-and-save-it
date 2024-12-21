// Phone number validation based on country code
const phoneRegex = {
    "+1": /^[2-9]{1}[0-9]{2}[0-9]{4}$/, // USA
    "+44": /^[0-9]{10}$/, // UK
    "+91": /^[789]{1}[0-9]{9}$/, // India
    "+61": /^[4]{1}[0-9]{8}$/, // Australia
    "+94": /^[0-9]{9}$/, // Sri Lanka
};

document.getElementById('phone').addEventListener('input', function () {
    const countryCode = document.getElementById('countryCode').value;
    const phoneNumber = this.value;
    const regex = phoneRegex[countryCode];

    if (!regex.test(phoneNumber)) {
        this.setCustomValidity('Invalid phone number format');
    } else {
        this.setCustomValidity('');
    }
});

// Password visibility toggle
document.getElementById('showPassword').addEventListener('change', function () {
    const passwordField = document.getElementById('password');
    const confirmPasswordField = document.getElementById('confirm_password');
    if (this.checked) {
        passwordField.setAttribute('type', 'text');
        confirmPasswordField.setAttribute('type', 'text');
    } else {
        passwordField.setAttribute('type', 'password');
        confirmPasswordField.setAttribute('type', 'password');
    }
});

// Email validation
document.getElementById('email').addEventListener('input', function () {
    const email = this.value;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!emailRegex.test(email)) {
        this.setCustomValidity('Please enter a valid email address');
    } else {
        this.setCustomValidity('');
    }
});

// Form submission handling
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    
    // Submit the form data to Web3Forms API
    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
    }).then(response => response.json()).then(data => {
        if (data.success) {
            document.getElementById('confirmationMessage').style.display = 'block';
        } else {
            alert("An error occurred, please try again.");
        }
    }).catch(error => {
        alert("Error: " + error);
    });
});
