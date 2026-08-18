document.addEventListener("DOMContentLoaded", () => {

    /* =====================================
       NAVEGACIÓN PRINCIPAL
       ===================================== */

    const navButtons = document.querySelectorAll(".nav-button");
    const sections = document.querySelectorAll(".magic-section");


    navButtons.forEach(button => {

        button.addEventListener("click", () => {

            const target = button.dataset.section;


            navButtons.forEach(btn => {
                btn.classList.remove("active");
            });


            button.classList.add("active");


            sections.forEach(section => {
                section.classList.remove("active-section");
            });


            const targetSection = document.getElementById(target);

            if (targetSection) {
                targetSection.classList.add("active-section");
            }


            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    });


    /* =====================================
       SELECTOR DE ESPECTÁCULOS
       ===================================== */

    const showButtons = document.querySelectorAll(".show-button");
    const shows = document.querySelectorAll(".show-content");


    showButtons.forEach(button => {

        button.addEventListener("click", () => {

            const target = button.dataset.show;


            showButtons.forEach(btn => {
                btn.classList.remove("active");
            });


            button.classList.add("active");


            shows.forEach(show => {
                show.classList.remove("active-show");
            });


            const targetShow = document.getElementById(target);

            if (targetShow) {
                targetShow.classList.add("active-show");
            }

        });

    });

});