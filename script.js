const text = "Desarrollador Front-end";
const typingElement = document.getElementById('home-p');
let index = 0;
let isDeleting = false;

function type() {
    if (isDeleting) {
        if (index > 0) {
            typingElement.innerHTML = text.substring(0, index - 1);
            index--;
            setTimeout(type, 50); // Ajusta la velocidad de borrado
        } else {
            isDeleting = false;
            setTimeout(type, 500); // Pausa antes de empezar a escribir de nuevo
        }
    } else {
        if (index < text.length) {
            typingElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 100); // Ajusta la velocidad de escritura
        } else {
            isDeleting = true;
            setTimeout(type, 1000); // Pausa antes de empezar a borrar
        }
    }
}

type();

// Hamburger menu functionality
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-menu a");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// Sample project data
const projects = [
    { name: "Proyecto 1", description: "Descripción breve del proyecto 1.", image: "https://via.placeholder.com/300x200" },
    { name: "Proyecto 2", description: "Descripción breve del proyecto 2.", image: "https://via.placeholder.com/300x200" },
    { name: "Proyecto 3", description: "Descripción breve del proyecto 3.", image: "https://via.placeholder.com/300x200" },
    { name: "Proyecto 4", description: "Descripción breve del proyecto 4.", image: "https://via.placeholder.com/300x200" }
];

// Populate project grid
const projectGrid = document.querySelector('.project-grid');

projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.classList.add('project-card');
    projectCard.innerHTML = `
        <img src="${project.image}" alt="${project.name}">
        <div class="project-info">
            <h3>${project.name}</h3>
            <p>${project.description}</p>
        </div>
    `;
    projectGrid.appendChild(projectCard);
});

// Form submission
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Gracias por tu mensaje. Te responderé pronto.');
    contactForm.reset();
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});