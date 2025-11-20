// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const htmlElement = document.documentElement;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
htmlElement.setAttribute('data-theme', currentTheme);

// Dark Mode Toggle Functionality
darkModeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Add visual feedback
    darkModeToggle.style.transform = 'scale(0.95)';
    setTimeout(() => {
        darkModeToggle.style.transform = 'scale(1)';
    }, 150);
});

// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Button Click Events
const viewProjectsBtn = document.getElementById('viewProjectsBtn');
const contactBtn = document.getElementById('contactBtn');
const sendEmailBtn = document.getElementById('sendEmailBtn');

// View Projects Button
viewProjectsBtn.addEventListener('click', () => {
    const projectsSection = document.getElementById('projects');
    projectsSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
    
    // Add visual feedback
    viewProjectsBtn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        viewProjectsBtn.style.transform = 'scale(1)';
    }, 150);
});

// Contact Button
contactBtn.addEventListener('click', () => {
    const contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
    
    // Add visual feedback
    contactBtn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        contactBtn.style.transform = 'scale(1)';
    }, 150);
});

// Send Email Button
sendEmailBtn.addEventListener('click', () => {
    const email = 'dhruvinsoni2020@gmail.com';
    window.location.href = `mailto:${email}?subject=Portfolio Inquiry`;
    
    // Add visual feedback
    sendEmailBtn.textContent = 'Opening Email...';
    sendEmailBtn.style.backgroundColor = '#10b981';
    setTimeout(() => {
        sendEmailBtn.textContent = 'Send Email';
        sendEmailBtn.style.backgroundColor = '';
    }, 2000);
});

// Social Links Click Events
const linkedinLink = document.getElementById('linkedinLink');
const githubLink = document.getElementById('githubLink');
const portfolioLink = document.getElementById('portfolioLink');

linkedinLink.addEventListener('click', (e) => {
    // Link opens in new tab via href attribute
    // Optional: Add analytics or tracking here if needed
});

githubLink.addEventListener('click', (e) => {
    e.preventDefault();
    alert('GitHub profile link - Please update with your actual GitHub URL');
    // Uncomment and update with actual URL:
    // window.open('https://github.com/yourusername', '_blank');
});

portfolioLink.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Portfolio link - Please update with your actual portfolio URL');
    // Uncomment and update with actual URL:
    // window.open('https://yourportfolio.com', '_blank');
});

// Project Details Modal
const modal = document.getElementById('projectModal');
const closeModal = document.getElementById('closeModal');
const modalBody = document.getElementById('modalBody');

// Project details data
const projectDetails = {
    respiratory: {
        title: 'Respiratory Disorder Classification',
        description: `
            <p>This AI-based system classifies respiratory diseases like Asthma and Pneumonia using lung sound data. 
            The project demonstrates advanced machine learning techniques in healthcare applications.</p>
            <h4>Key Features:</h4>
            <ul>
                <li>Audio feature extraction using MFCC, Chroma, and Mel Spectrogram</li>
                <li>CNN-based classification model for disease detection</li>
                <li>Flask-based web interface for easy interaction</li>
                <li>Docker containerization for deployment</li>
            </ul>
            <h4>Achievement:</h4>
            <p>Cleared zonal round of 19th Aavishkar 2024, showcasing innovation in healthcare technology.</p>
        `
    },
    wordgame: {
        title: 'AI-Powered Word Guessing Game',
        description: `
            <p>A modern GUI-based word guessing game built with Python and Tkinter, featuring intelligent word hints 
            powered by the Datamuse API.</p>
            <h4>Key Features:</h4>
            <ul>
                <li>Dynamic word generation for varied gameplay</li>
                <li>Intelligent hints using Datamuse API</li>
                <li>User-friendly Tkinter GUI</li>
                <li>Adjustable difficulty levels</li>
            </ul>
            <h4>Technologies:</h4>
            <p>Python, Tkinter, Datamuse API</p>
        `
    },
    cnc: {
        title: 'CNC Pen Plotter Machine',
        description: `
            <p>An engineered mini CNC plotter that draws vector graphics by interpreting G-code via GRBL firmware. 
            This hardware project demonstrates expertise in embedded systems and mechatronics.</p>
            <h4>Key Features:</h4>
            <ul>
                <li>G-code interpretation for precise drawing</li>
                <li>GRBL firmware integration</li>
                <li>Stepper motor control for accurate movement</li>
                <li>Servo motor integration for pen control</li>
                <li>Arduino UNO microcontroller</li>
            </ul>
            <h4>Technologies:</h4>
            <p>Arduino UNO, GRBL, G-code, CNC Shield, Stepper Motors, Servo Motor</p>
        `
    }
};

// Show project details in modal
function showProjectDetails(projectKey) {
    const project = projectDetails[projectKey];
    if (project) {
        modalBody.innerHTML = `
            <h3>${project.title}</h3>
            ${project.description}
        `;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

// Close modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe project cards and skill categories
document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');
    const skillCategories = document.querySelectorAll('.skill-category');
    
    projectCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    skillCategories.forEach(category => {
        category.style.opacity = '0';
        category.style.transform = 'translateY(20px)';
        category.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(category);
    });
});

// Add active state to navigation on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
});

// Add active class styling
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: var(--primary-color);
        font-weight: 600;
    }
`;
document.head.appendChild(style);

