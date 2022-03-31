ScrollReveal({ reset: true });


ScrollReveal().reveal('.introducao-main', { delay: 500 });
ScrollReveal().reveal('.personal-details', { delay: 700 });
ScrollReveal().reveal('.interests', { delay: 900 });

ScrollReveal().reveal('.titulo-secundary', { delay: 500 });
ScrollReveal().reveal('.conteudo-secundary', { delay: 800 });

ScrollReveal().reveal('.container-third', { delay: 400 });

ScrollReveal().reveal('.container-footer', { delay: 300 });

function initScrollSuave() {
    const linksInternos = document.querySelectorAll('.links-internos a[href^="a"]');

    function scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
    
        section.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
    
        // Forma alternativa
        // const topo = section.offsetTop;
        // window.scrollTo({
        //   top: topo,
        //   behavior: 'smooth',
        // })
      }
    
      linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection)
      })
}

initScrollSuave();
