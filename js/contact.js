// ==================================================
// DSS GLOBAL JAVASCRIPT
// Daka Systems Solutions
// ==================================================

document.addEventListener("DOMContentLoaded", () => {

    // ==================================================
    // MOBILE NAVIGATION
    // ==================================================
    const menuToggle = document.getElementById("menuToggle");
    const navbar = document.getElementById("navbar");
    if (menuToggle && navbar) {
        menuToggle.addEventListener("click", () => {
            navbar.classList.toggle("active");
            const isOpen = navbar.classList.contains("active");
            menuToggle.setAttribute("aria-expanded", isOpen);
            menuToggle.classList.toggle("active");
        });

        // Close menu when a navigation link is clicked
        const navLinks = navbar.querySelectorAll(".nav-link");
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                navbar.classList.remove("active");
                menuToggle.classList.remove("active");
                menuToggle.setAttribute("aria-expanded", "false");
            });
        });
    }

    // ==================================================
    // CONTACT / REQUEST A QUOTE FORM
    // ==================================================
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            // Get form fields
            const name = document.getElementById("name");
            const email = document.getElementById("email");
            const phone = document.getElementById("phone");
            const service = document.getElementById("service");
            const subject = document.getElementById("subject");
            const message = document.getElementById("message");
            // Basic validation
            if (
                name.value.trim() === "" ||
                email.value.trim() === "" ||
                phone.value.trim() === "" ||
                service.value === "" ||
                subject.value.trim() === "" ||
                message.value.trim() === ""
            ) {
                showFormMessage(
                    "Please fill in all required fields.",
                    "error"
                );
                return;
            }

            // Email validation
            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email.value.trim())) {
                showFormMessage(
                    "Please enter a valid email address.",
                    "error"
                );
                email.focus();
                return;
            }

            // Phone validation
            const phonePattern =
                /^[0-9+\-\s()]{7,20}$/;

            if (!phonePattern.test(phone.value.trim())) {

                showFormMessage(
                    "Please enter a valid phone number.",
                    "error"
                );

                phone.focus();

                return;
            }


            // ==================================================
            // FRONTEND SUCCESS
            // ==================================================

            showFormMessage(
                "Your request has been received successfully. We will get back to you soon.",
                "success"
            );


            // Clear form
            contactForm.reset();

        });

    }


    // ==================================================
    // FORM MESSAGE FUNCTION
    // ==================================================

    function showFormMessage(message, type) {

        let formMessage =
            document.getElementById("formMessage");

        // Create message element if it doesn't exist
        if (!formMessage) {

            formMessage = document.createElement("div");

            formMessage.id = "formMessage";

            contactForm.insertBefore(
                formMessage,
                contactForm.firstChild
            );
        }

        formMessage.textContent = message;

        formMessage.className =
            `form-message ${type}`;

        // Automatically remove after 5 seconds
        setTimeout(() => {

            formMessage.classList.remove(type);

        }, 5000);

    }


    // ==================================================
    // SCROLL REVEAL ANIMATIONS
    // ==================================================

    const revealElements =
        document.querySelectorAll(
            ".reveal, .reveal-left, .reveal-right"
        );

    if ("IntersectionObserver" in window) {

        const revealObserver =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add("active");

                            observer.unobserve(entry.target);

                        }

                    });

                },
                {
                    threshold: 0.15
                }
            );


        revealElements.forEach(element => {

            revealObserver.observe(element);

        });

    } else {

        // Fallback for older browsers
        revealElements.forEach(element => {

            element.classList.add("active");

        });

    }


    // ==================================================
    // BACK TO TOP
    // ==================================================

    const backToTop =
        document.getElementById("backToTop");

    if (backToTop) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 500) {

                backToTop.classList.add("show");

            } else {

                backToTop.classList.remove("show");

            }

        });


        backToTop.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }

});