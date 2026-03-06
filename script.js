// ============ CONTROLE DO MEU MOBILE ================
const menuIcon = document.querySelector('#menu-icon');
const navList = document.querySelector('.navList');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navList.classList.toggle('open');

    // Bloquear scroll quando menu aberto
    document.body.style.overflow = navList.classList.contains('open') ? 'hidden' : 'auto';
});

    // Fecha menu ao clicar em links 
    document.querySelectorAll('.navList a').forEach(link => {
        link.addEventListener('click', () => {
            menuIcon.classList.remove('bx-x');
            navList.classList.remove('open');
            document.body.style.overflow = 'auto';
        });
    });

    // Fechar menu ao rolar
    window.addEventListener('scroll', () => {
        if (navList.classList.contains ('open')) {
            menuIcon.classList.remove('bx-x');
            navList.classList.remove('open');
            document.body.style.overflow = 'auto';
        }
    });
// ============= NAVEGAÇÃO ATIVA =========================
// Seleciona todos os links de navegação
const navLinks = document.querySelectorAll('.navList a');

// Função para adicionar a classe "active" ao lik clicado
function activeLink() {
    navLinks.forEach(item => item.classList.remove('active')); // Remove a classe "active" de todosos links
    this.classList.add('active'); // Adiciona a classe "active" ao link clicado
}

// Adiciona um evento de clique a cada link de navegação
navLinks.forEach(item => item.addEventListener('click', activeLink));