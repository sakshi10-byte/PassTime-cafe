// Highlight Current Section in Navigation
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');


window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 50;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Animate Elements on Scroll
const animatedElements = document.querySelectorAll('.animate');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, { threshold: 0.5 });

animatedElements.forEach(el => observer.observe(el));

// Menu Search Bar
const menuItems = document.querySelectorAll('.menu-item');
const searchInput = document.getElementById('menu-search');

if (searchInput) {
    searchInput.addEventListener('input', () => {
        const filter = searchInput.value.toLowerCase();
        menuItems.forEach(item => {
            const text = item.textContent.toLowerCase();
            item.style.display = text.includes(filter) ? 'block' : 'none';
        });
    });
}

