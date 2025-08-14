function login() {
    // Form ke fields se data lena
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    // Optional: blank check
    if (!email || !password) {
        document.getElementById("msg").innerText = "Please fill both email and password";
        return;
    }

    // User ka naam/email sessionStorage me store karo
    sessionStorage.setItem('userEmail', email);

    // Seedha dashboard pe redirect
    window.location.href = "dashboard.html";
}
