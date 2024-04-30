const inputErrors = () => {

    const input = document.getElementById("number-id-document");
    const errorContainer = document.getElementById("error-nif");

    document.addEventListener("input", (event) => {
        if (input.value != "Correcte") {
            input.setAttribute("aria-invalid", "true");
            errorContainer.innerText = "Això és un error";
            errorContainer.classList.add("show");
        }
        else {
            input.setAttribute("aria-invalid", "false");
            errorContainer.innerText = "";
            errorContainer.classList.remove("show");
        }
    });

};

document.ready = inputErrors();