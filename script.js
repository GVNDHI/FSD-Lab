function validateForm() {
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value;
    var mobile = document.getElementById("mobile").value.trim();

    if (name === "") {
        alert("Name must not be empty");
        return false;
    }

    var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }

    var passwordPattern = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;
    if (!passwordPattern.test(password)) {
        alert(
            "Password must be at least 6 characters long,\n" +
            "contain one capital letter and one special character"
        );
        return false;
    }

    if (!/^\d{10}$/.test(mobile)) {
        alert("Enter a valid 10-digit mobile number");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}
