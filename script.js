// Translations object
const translations = {
    es: {
        about: "Sobre mí",
        experience: "Experiencia Profesional",
        advisories: "Asesorías",
        connectLinkedIn: "Conecta conmigo en LinkedIn",
        webCreatedBy: "Web creada por Andy Bencomo Del Rio",
        aboutText: "Soy María Fernanda Fonseca Trujillo, abogada apasionada por el desarrollo de Colombia y especializada en infraestructura, contratación estatal, gestión predial, gestión contractual y derecho corporativo. Mi experiencia profesional me ha permitido liderar y asesorar proyectos clave, aportando soluciones innovadoras y efectivas que generan impacto positivo en nuestro país.",
        aboutText2: "Me motiva contribuir al progreso desde mi área de conocimiento, trabajando con compromiso y excelencia para transformar ideas en realidades que beneficien a las comunidades. Además, en mi vida personal soy amante de los animales y disfruto profundamente de la jardinería, actividades que me conectan con la naturaleza y renuevan mi energía.",
        advisoriesText: "Como coordinadora jurídica, me enfoco en brindar asesoría integral y estratégica para optimizar procesos y garantizar el cumplimiento normativo en proyectos de infraestructura y contrataciones públicas y privadas. Mi experiencia en la gestión de proyectos clave permite ofrecer soluciones jurídicas que no solo minimizan riesgos legales, sino que también maximizan la eficiencia y rentabilidad. A través de un enfoque práctico y orientado a resultados, ayudo a empresas y personas naturales a gestionar sus proyectos con la seguridad jurídica necesaria para garantizar su éxito y sostenibilidad a largo plazo.",
        lawyer: "Abogada",
        animalLover: "Amante de los animales",
        gardening: "Jardinería",
        coordinator: "Coordinadora Jurídica",
        present: "Presente",
        location: "Bogotá, Distrito Capital, Colombia",
        skills: {
            teamwork: "Trabajo en equipo",
            legalManagement: "Gestión legal",
            adminProcesses: "Procesos administrativos",
            docManagement: "Gestión documental",
            adminManagement: "Gestión administrativa",
            legalServices: "Servicios legales"
        }
    },
    en: {
        about: "About Me",
        experience: "Professional Experience",
        advisories: "Advisory Services",
        connectLinkedIn: "Connect with me on LinkedIn",
        webCreatedBy: "Website created by Andy Bencomo Del Rio",
        aboutText: "I am María Fernanda Fonseca Trujillo, a lawyer passionate about Colombia's development and specialized in infrastructure, government contracting, property management, contractual management, and corporate law. My professional experience has allowed me to lead and advise key projects, providing innovative and effective solutions that generate positive impact in our country.",
        aboutText2: "I am motivated to contribute to progress through my area of expertise, working with commitment and excellence to transform ideas into realities that benefit communities. Additionally, in my personal life, I am an animal lover and deeply enjoy gardening, activities that connect me with nature and renew my energy.",
        advisoriesText: "As a legal coordinator, I focus on providing comprehensive and strategic advice to optimize processes and ensure regulatory compliance in infrastructure projects and public and private contracting. My experience in managing key projects allows me to offer legal solutions that not only minimize legal risks but also maximize efficiency and profitability. Through a practical and results-oriented approach, I help companies and individuals manage their projects with the necessary legal security to ensure their success and long-term sustainability.",
        lawyer: "Lawyer",
        animalLover: "Animal Lover",
        gardening: "Gardening",
        coordinator: "Legal Coordinator",
        present: "Present",
        location: "Bogotá, Capital District, Colombia",
        skills: {
            teamwork: "Teamwork",
            legalManagement: "Legal Management",
            adminProcesses: "Administrative Processes",
            docManagement: "Document Management",
            adminManagement: "Administrative Management",
            legalServices: "Legal Services"
        }
    }
};

// Current language
let currentLang = 'es';

// Function to update text content
function updateContent(lang) {
    // Update the language switcher text
    document.querySelector('#languageSwitcher span').textContent = lang.toUpperCase();
    document.querySelector('#languageSwitcher span').dataset.lang = lang;

    // Update all translatable elements
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.dataset.translate;
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Update all skill elements
    document.querySelectorAll('[data-translate-skill]').forEach(element => {
        const key = element.dataset.translateSkill;
        if (translations[lang].skills[key]) {
            element.textContent = translations[lang].skills[key];
        }
    });
}

// Language switcher click handler
document.getElementById('languageSwitcher').addEventListener('click', () => {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    updateContent(currentLang);
});

// Initialize the page with Spanish content
document.addEventListener('DOMContentLoaded', () => {
    updateContent(currentLang);
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

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        return;
    }
    
    if (currentScroll > lastScroll) {
        // Scrolling down
        navbar.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        navbar.style.transform = 'translateY(0)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Email copy functionality
const copyEmail = document.querySelector('.copy-email');
if (copyEmail) {
    copyEmail.addEventListener('click', function(e) {
        e.preventDefault();
        const email = this.getAttribute('data-email');
        navigator.clipboard.writeText(email).then(() => {
            const tooltip = this.querySelector('.tooltip');
            const originalText = tooltip.textContent;
            tooltip.textContent = '¡Email copiado!';
            this.classList.add('copied');
            
            setTimeout(() => {
                tooltip.textContent = originalText;
                this.classList.remove('copied');
            }, 2000);
        });
    });
}

// Form submission handling
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const formObject = {};
    formData.forEach((value, key) => {
        formObject[key] = value;
    });
    
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formObject);
    
    // Clear form
    this.reset();
    
    // Show success message (you can customize this)
    alert('¡Gracias por su mensaje! Me pondré en contacto pronto.');
});
