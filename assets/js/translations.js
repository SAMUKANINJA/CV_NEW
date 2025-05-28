const translations = {
  en: {
    home: "Home",
    about: "About",
    resume: "Resume",
    portfolio: "Portfolio",
    contact: "Contact",
    skills: "Skills",
    location: "Location",
    phone: "Phone",
    developer: "Developer",
    freelancer: "Freelancer",
    technicalSupport: "Technical Support",
    systemAnalyst: "System Analyst",
    // Adicione mais traduções em inglês conforme necessário
  },
  pt: {
    home: "Início",
    about: "Sobre",
    resume: "Currículo",
    portfolio: "Projetos",
    contact: "Contato",
    skills: "Habilidades",
    location: "Localização",
    phone: "Celular",
    developer: "Desenvolvedor",
    freelancer: "Freelancer",
    technicalSupport: "Suporte Técnico",
    systemAnalyst: "Analista de Sistemas",
    // Adicione mais traduções em português conforme necessário
  }
};

function changeLanguage(lang) {
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    element.textContent = translations[lang][key];
  });
  localStorage.setItem('preferredLanguage', lang);
}

// Inicializar com o idioma salvo ou português como padrão
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('preferredLanguage') || 'pt';
  changeLanguage(savedLang);
});
