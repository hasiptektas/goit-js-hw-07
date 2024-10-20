const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Sayfa yenilenmesini engeller

    const formData = new FormData(loginForm);
    const formValues = {};

    for (const [key, value] of formData.entries()) {
        if (!value.trim()) {
            alert('All form fields must be filled in');
            return;
        }
        formValues[key] = value.trim();
    }

    console.log(formValues); // Konsola nesne olarak yazdırır

    // Formu sıfırla
    loginForm.reset();
});
