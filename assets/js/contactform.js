window.addEventListener("DOMContentLoaded", (event) => {

    const form = document.getElementById("contact__form");
    // const formSection = document.getElementById("form__section");
    // const formTitle = document.getElementById("form__section-title");
    // const mainForm = document.getElementById("contact__form");

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const data = new FormData(event.target);

        fetch(event.target.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            form.innerHTML = "SENT!";
            const formMessage = document.createElement("p");
            formMessage.innerHTML = "I'll be in touch with you soon. Thank you for stopping by!";
            form.appendChild(formMessage);
            form.style.display = "none";
            form.reset();
        }).catch(error => {
            form.innerHTML = "OOPS!";
            const errorMessage = document.createElement("p");
            form.innerHTML = "Sorry! Something went wrong. Please try again.";
            form.prepend(errorMessage);
        });
    });
});