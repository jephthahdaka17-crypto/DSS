/*==Counters==*/
const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            const counter = entry.target;

            const target = +counter.dataset.target;

            let current = 0;

            const increment = target / 120;

            function updateCounter(){

                if(current < target){

                    current += increment;

                    counter.textContent = Math.ceil(current);

                    requestAnimationFrame(updateCounter);

                }else{

                    counter.textContent = target;

                }

            }

            updateCounter();

            observer.unobserve(counter);

        }

    });

});

counters.forEach(counter => observer.observe(counter));