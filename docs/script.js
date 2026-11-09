// Mobile Navigation Menu
function toggleMenu() {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("active");
}

// Close menu after clicking a navigation link
const navItems = document.querySelectorAll("#nav-links a");

navItems.forEach(function(item) {
    item.addEventListener("click", function() {
        document.getElementById("nav-links").classList.remove("active");
    });
});

// Contact Form
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    alert("Thank you! Your message has been received.");

    contactForm.reset();
});