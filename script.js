const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('nav');

navbarToggle.addEventListener('click', () => {
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
})

const observerOptions = {
    root: null,
    threshold: 0.3
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
}, observerOptions);

const scrollElements = document.querySelectorAll('.section-container, .about-window, .introduction');

scrollElements.forEach((el) => {
    observer.observe(el);
});