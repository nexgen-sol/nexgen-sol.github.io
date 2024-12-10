// JavaScript for rotating testimonials
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');
const testimonialBtn = document.getElementById('testimonial-btn');

// Show the first testimonial by default
testimonials[currentTestimonial].classList.add('active');

// Function to show the next testimonial
testimonialBtn.addEventListener('click', () => {
  testimonials[currentTestimonial].classList.remove('active');
  
  // Increment to show the next testimonial
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  
  // Show the new testimonial
  testimonials[currentTestimonial].classList.add('active');
});

function animateCounter(id, target) {
    let count = 0;
    const speed = 20; // Speed of increment in ms

    const updateCounter = () => {
        count++;
        document.getElementById(id).innerText = count;
        if (count < target) {
            setTimeout(updateCounter, speed);
        }
    };

    updateCounter();
}

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

let countersStarted = false;

window.addEventListener("scroll", () => {
    const section = document.getElementById("projects-counter");
    if (isElementInViewport(section) && !countersStarted) {
        countersStarted = true;
        animateCounter("web-count", 110);
        animateCounter("app-count", 110);
        animateCounter("business-count", 110);
    }
});


// JavaScript to handle sidebar toggle
const menuIcon = document.querySelector('.menu-icon');
const sidebar = document.querySelector('.sidebar');
const closeIcon = document.querySelector('.close-icon');

menuIcon.addEventListener('click', () => {
  sidebar.classList.add('open');
});

closeIcon.addEventListener('click', () => {
  sidebar.classList.remove('open');
});
