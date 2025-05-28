const translations = {
  en: {
    // Hero
    "im": "I am",
    "developer": "Developer",
    "freelancer": "Freelancer",
    "technicalSupport": "Technical Support",
    "systemAnalyst": "System Analyst",

    // Menu
    "home": "Home",
    "about": "About",
    "resume": "Resume",
    "portfolio": "Projects",
    "contact": "Contact",

    // About
    "aboutTitle": "About",
    "aboutDescription": "Post-graduated in Computer Forensics from Focus College. Over 10 years of experience as a freelance technical support specialist and 2 years in responsive web development. Certified in Flask (Python) and WordPress by Alura. Proactive and communicative professional. Currently works as a Systems Analyst at Assensus group, responsible for systems implementation, project development and B2B and B2C customer support.",
    "degree": "Degree",
    "city": "City",
    "phone": "Phone",
    "available": "Available",

    // Statistics
    "statistics": "Statistics",
    "statisticsDescription": "A trajectory built with dedication and consistent results. As an IT professional, I'm proud to present some numbers that represent my journey so far.",
    "satisfiedClients": "Satisfied Clients",
    "withImplementedSolutions": "with implemented solutions",
    "projects": "Projects",
    "developedAndDelivered": "developed and delivered",
    "supportHours": "Support Hours",
    "providedToClients": "provided to clients",
    "certifications": "Certifications",
    "technicalCertifications": "technical certifications obtained",

    // Skills
    "skills": "Technical Skills",
    "skillsDescription": "Skills developed throughout my career, focusing on web development, technical support and systems management.",

    // Resume
    "education": "Education",
    "additionalCourses": "Additional Courses",
    "professionalExperience": "Professional Experience",

    // Contact
    "contactTitle": "Contact",
    "contactDescription": "I'm always open to new opportunities and partnerships. If you're looking for a professional committed to results and specialized in IT solutions, contact me through the channels below.",
    "location": "Location"
  },
  pt: {
    // Hero
    "im": "Eu sou",
    "developer": "Desenvolvedor",
    "freelancer": "Freelancer",
    "technicalSupport": "Suporte Técnico",
    "systemAnalyst": "Analista de Sistemas",

    // Menu
    "home": "Início",
    "about": "Sobre",
    "resume": "Currículo",
    "portfolio": "Projetos",
    "contact": "Contato",

    // About
    "aboutTitle": "Sobre",
    "aboutDescription": "Pós-graduado em Computação Forense pela Faculdade Focus. Mais de 10 anos de experiência como especialista em suporte técnico freelancer e 2 anos em desenvolvimento web responsivo. Certificado em Flask (Python) e WordPress pela Alura. Profissional proativo e comunicativo. Atualmente trabalha como Analista de Sistemas no grupo Assensus, onde é responsável pela implementação de sistemas, desenvolvimento de projetos e suporte ao cliente B2B e B2C.",
    "degree": "Grau",
    "city": "Cidade",
    "phone": "Celular",
    "available": "Disponível",

    // Statistics
    "statistics": "Estatísticas",
    "statisticsDescription": "Uma trajetória construída com dedicação e resultados consistentes. Como profissional de TI, tenho orgulho de apresentar alguns números que representam minha jornada até aqui.",
    "satisfiedClients": "Clientes Satisfeitos",
    "withImplementedSolutions": "com soluções implementadas",
    "projects": "Projetos",
    "developedAndDelivered": "desenvolvidos e entregues",
    "supportHours": "Horas de Suporte",
    "providedToClients": "prestadas aos clientes",
    "certifications": "Certificações",
    "technicalCertifications": "técnicas obtidas",

    // Skills
    "skills": "Habilidades Técnicas",
    "skillsDescription": "Competências desenvolvidas ao longo da minha carreira, com foco em desenvolvimento web, suporte técnico e gerenciamento de sistemas.",

    // Resume
    "education": "Formação Acadêmica",
    "additionalCourses": "Cursos Adicionais",
    "professionalExperience": "Experiência Profissional",

    // Contact
    "contactTitle": "Contato",
    "contactDescription": "Estou sempre aberto a novas oportunidades e parcerias. Se você procura um profissional comprometido com resultados e especializado em soluções de TI, entre em contato comigo através dos canais abaixo.",
    "location": "Localização"
  }
};

let currentLanguage = 'pt';

function changeLanguage(lang) {
  currentLanguage = lang;
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    element.textContent = translations[lang][key];
  });

  // Atualizar typed.js
  if (window.typed) {
    window.typed.destroy();
    initTyped(lang);
  }

  localStorage.setItem('preferredLanguage', lang);
}

function initTyped(lang) {
  const options = {
    strings: [
      translations[lang].developer,
      translations[lang].freelancer,
      translations[lang].technicalSupport,
      translations[lang].systemAnalyst
    ],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
  };

  window.typed = new Typed('.typed', options);
}

// Inicializar com o idioma salvo ou português como padrão
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('preferredLanguage') || 'pt';
  changeLanguage(savedLang);
});
