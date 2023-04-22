function animateLinks(navLinks) {
  navLinks.forEach((link, index) => {
    link.style.animation
      ? (link.style.animation = "")
      : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
  });
}

function handleClick(mobileMenu, navList, navLinks, activeClass, event) {
  const target = event.target;
  if (target.tagName.toLowerCase() === "li") {
    navList.classList.remove(activeClass);
    mobileMenu.classList.remove(activeClass);
  } else {
    navList.classList.toggle(activeClass);
    mobileMenu.classList.toggle(activeClass);
    animateLinks(navLinks);
  }
}

function addClickEvent(mobileMenu, navList, navLinks, handleClickBound) {
  mobileMenu.addEventListener("click", handleClickBound);
  navLinks.forEach((link) => {
    link.addEventListener("click", handleClickBound);
  });
}

function init(mobileMenuSelector, navListSelector, navLinksSelector) {
  const mobileMenu = document.querySelector(mobileMenuSelector);
  const navList = document.querySelector(navListSelector);
  const navLinks = document.querySelectorAll(navLinksSelector);
  const activeClass = "active";

  if (mobileMenu) {
    const handleClickBound = handleClick.bind(null, mobileMenu, navList, navLinks, activeClass);
    addClickEvent(mobileMenu, navList, navLinks, handleClickBound);
  }
}

init(".mobile-menu", ".nav-list", ".nav-list li");


// Descrição nas Habilidades
const divHabilidades = document.querySelector('.skills-icons');
const iconsHabilidades = document.querySelectorAll('.icon');
const divResultado = document.querySelector('.description-icon');

const descricaoIcons = {
  htmlIcon: 'HTML5 é linguagem de marcação de hipertexto usada para criar páginas web',
  cssIcon: 'CSS3 é linguagem de estilo usada para estilizar elementos HTML',
  jsIcon: 'JavaScript é uma linguagem de programação usada principalmente em aplicações web',
  reactIcon: 'React é uma biblioteca JavaScript para criar interfaces de usuário',
  githubIcon: 'GitHub é uma plataforma de hospedagem de código-fonte e controle de versão',
  figmaIcon: 'Figma é uma ferramenta de design de interface de usuário baseada na web'
}

iconsHabilidades.forEach(icon => {
  icon.addEventListener('mouseover', () => {
    const descricao = descricaoIcons[icon.classList[1]];
    divResultado.innerHTML = descricao;
  });

  icon.addEventListener("mouseout", () => {
    divResultado.innerHTML = "Passe o mouse ou clique sobre o ícone para aparecer sua descrição.";
  });
  
  icon.addEventListener('touchstart', () => {
    const descricao = descricaoIcons[icon.classList[1]];
    divResultado.innerHTML = descricao;
  });
});





