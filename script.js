document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent page refresh

    const userInp = document.getElementById('username');
    const passInp = document.getElementById('password');
    const userErr = document.getElementById('user-error');
    const passErr = document.getElementById('pass-error');
    
    let isValid = true;

    // Reset errors
    userErr.textContent = "";
    passErr.textContent = "";
    userInp.style.borderColor = "#eee";
    passInp.style.borderColor = "#eee";

    // Validation Logic
    if (userInp.value.trim() === "") {
        userErr.textContent = "Username is required";
        userInp.style.borderColor = "#e74c3c";
        isValid = false;
    }

    if (passInp.value.length < 6) {
        passErr.textContent = "Password must be at least 6 characters";
        passInp.style.borderColor = "#e74c3c";
        isValid = false;
    }

    // Interactive Redirect Simulation
    if (isValid) {
        const btn = document.getElementById('login-btn');
        btn.textContent = "Signing in...";
        btn.style.opacity = "0.7";

        setTimeout(() => {
            document.getElementById('login-card').classList.add('hidden');
            document.getElementById('welcome-page').classList.remove('hidden');
            document.getElementById('display-user').textContent = userInp.value;
        }, 1500); // Simulate network delay
    }
});