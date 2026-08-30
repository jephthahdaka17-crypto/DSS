/* =========================================================
   DSS GLOBAL JAVASCRIPT
   Mobile Navigation
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("menuToggle");
    const navbar = document.getElementById("navbar");

    /* Check that the elements exist */
    if (!menuToggle || !navbar) {
        return;
    }


    /* =====================================================
       OPEN / CLOSE MOBILE MENU
    ===================================================== */

    menuToggle.addEventListener("click", function () {

        navbar.classList.toggle("active");
        menuToggle.classList.toggle("active");

        const menuIsOpen = navbar.classList.contains("active");

        menuToggle.setAttribute(
            "aria-expanded",
            menuIsOpen ? "true" : "false"
        );

    });


    /* =====================================================
       CLOSE MENU WHEN A LINK IS CLICKED
    ===================================================== */

    const navLinks = navbar.querySelectorAll(".nav-link");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navbar.classList.remove("active");
            menuToggle.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });


    /* =====================================================
       CLOSE MENU WHEN CLICKING OUTSIDE
    ===================================================== */

    document.addEventListener("click", function (event) {

        const clickedInsideMenu = navbar.contains(event.target);
        const clickedToggle = menuToggle.contains(event.target);

        if (
            !clickedInsideMenu &&
            !clickedToggle &&
            navbar.classList.contains("active")
        ) {

            navbar.classList.remove("active");
            menuToggle.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    });

});

/* =====================================================
   BACK TO TOP
===================================================== */

const backToTop = document.getElementById("backToTop");

if (backToTop) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 400) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    });


    backToTop.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}

