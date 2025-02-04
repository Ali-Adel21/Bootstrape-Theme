//Smooth Scroll Navigation
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    //Form Validation
    document.addEventListener("DOMContentLoaded", function () {
        const form = document.getElementById("contactForm");
        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const phoneInput = document.getElementById("phone");
        const passwordInput = document.getElementById("password");
        const messageInput = document.getElementById("message");
        const successMessage = document.getElementById("successMessage");

        // Error message elements
        const nameError = document.getElementById("nameError");
        const emailError = document.getElementById("emailError");
        const phoneError = document.getElementById("phoneError");
        const passwordError = document.getElementById("passwordError");
        const messageError = document.getElementById("messageError");

        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent form submission
            let valid = true;

            // Function to check if field is empty
            function checkEmptyField(input, errorElement, message) {
                if (input.value.trim() === "") {
                    errorElement.textContent = message;
                    valid = false;
                } else {
                    errorElement.textContent = "";
                }
            }

            // Check if fields are empty
            checkEmptyField(nameInput, nameError, "Full name cannot be empty.");
            checkEmptyField(emailInput, emailError, "Email cannot be empty.");
            checkEmptyField(phoneInput, phoneError, "Phone number cannot be empty.");
            checkEmptyField(passwordInput, passwordError, "Password cannot be empty.");
            checkEmptyField(messageInput, messageError, "Message cannot be empty.");

            // Email Validation (if not empty)
            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (emailInput.value.trim() !== "" && !emailPattern.test(emailInput.value.trim())) {
                emailError.textContent = "Please enter a valid email address.";
                valid = false;
            }

            // Phone Number Validation (if not empty)
            const phonePattern = /^[0-9]{10,}$/;
            if (phoneInput.value.trim() !== "" && !phonePattern.test(phoneInput.value.trim())) {
                phoneError.textContent = "Enter a valid phone number (at least 10 digits).";
                valid = false;
            }

            // Password Validation (if not empty)
            const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
            if (passwordInput.value.trim() !== "" && !passwordPattern.test(passwordInput.value.trim())) {
                passwordError.textContent = "Password must be at least 8 characters, include 1 uppercase, 1 lowercase, and 1 number.";
                valid = false;
            }

            // Message Length Validation (if not empty)
            if (messageInput.value.trim() !== "" && messageInput.value.trim().length < 10) {
                messageError.textContent = "Message must be at least 10 characters long.";
                valid = false;
            }

            // If all fields are valid, show success message
            if (valid) {
                successMessage.textContent = "Form submitted successfully!";
                form.reset(); // Clear form fields after submission
                setTimeout(() => {
                    successMessage.textContent = "";
                }, 3000);
            }
        });
    });
    //Typing Effect in Hero Section
    const textElement = document.querySelector('.subheading');
    const text = "HTML - CSS - JavaScript";
    let i = 0;
    function typeEffect() {
        if (i < text.length) {
            textElement.textContent += text[i];
            i++;
            setTimeout(typeEffect, 100);
        }
    }
    textElement.textContent = "";
    typeEffect();

    //Back to Top Button
    const backToTop = document.createElement('button');
    backToTop.textContent = "↑";
    backToTop.style.position = "fixed";
    backToTop.style.bottom = "30px";
    backToTop.style.right = "30px";
    backToTop.style.display = "none";
    document.body.appendChild(backToTop);
    backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    window.addEventListener('scroll', () => {
        backToTop.style.display = window.scrollY > 200 ? 'block' : 'none';
    });
    //Interactive Hover Effects
    document.querySelectorAll('.portfolio-item').forEach(item => {
        item.addEventListener('mouseover', () => item.style.transform = 'scale(0.9)');
        item.addEventListener('mouseout', () => item.style.transform = 'scale(1)');
    });
});
