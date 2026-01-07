document.addEventListener("DOMContentLoaded", () => {

    /* MOBILE MENU */
    const menuToggle = document.querySelector(".menu-toggle");
    const navRight = document.querySelector(".navRight");

    if (menuToggle && navRight) {
        menuToggle.addEventListener("click", () => {
            navRight.classList.toggle("show");
        });
    }

    /* LANGUAGE DROPDOWN */
    const langBtn = document.querySelector(".lang-btn");
    const langDiv = document.querySelector(".langdiv");

    if (langBtn && langDiv) {
        langBtn.addEventListener("click", e => {
            e.stopPropagation();
            langDiv.classList.toggle("show");
        });

        window.addEventListener("click", e => {
            if (!langDiv.contains(e.target)) {
                langDiv.classList.remove("show");
            }
        });
    }

    /* CONTACT FORM */
    const submitBtn = document.getElementById("submitBtn");

    if (submitBtn) {
        submitBtn.addEventListener("click", () => {
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;
            const success = document.getElementById("successMessage");

            if (name && email && message) {
                success.style.display = "block";
                nameInput.value = emailInput.value = messageInput.value = "";

                setTimeout(() => {
                    success.style.display = "none";
                }, 5000);
            } else {
                alert("Ju lutem plotësoni të gjitha fushat!");
            }
        });
    }
    

    /* INIT LANGUAGE */
    initLang();
});
