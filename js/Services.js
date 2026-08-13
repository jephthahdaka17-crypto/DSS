/*=====================================
Banner Slider
=====================================*/

const slides = document.querySelectorAll(".banner-slide");

let currentSlide = 0;

function showSlide(index) {

    // Remove active class from all slides
    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    // Add active class to current slide
    slides[index].classList.add("active");
}

function nextSlide() {

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);
}

// First slide
showSlide(currentSlide);

// Change every 5 seconds
setInterval(nextSlide, 5000);

/*=========================================
FAQ ACCORDION
=========================================*/

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        faqItems.forEach(faq => {

            if(faq !== item){

                faq.classList.remove("active");

            }

        });

        item.classList.toggle("active");

    });

});