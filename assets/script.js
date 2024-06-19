let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let articles = document.querySelectorAll('article');
let navLinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', () => {
    articles.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
            });
            document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
        }
    });
});

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});
