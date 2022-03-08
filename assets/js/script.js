ScrollReveal({ reset: true });


ScrollReveal().reveal('.introducao-main', { delay: 500 });
ScrollReveal().reveal('.personal-details', { delay: 700 });
ScrollReveal().reveal('.interests', { delay: 900 });

ScrollReveal().reveal('.titulo-secundary', { delay: 500 });
ScrollReveal().reveal('.conteudo-secundary', { delay: 800 });


function buttons () {
    var tituloProjeto = document.getElementById('titulo-projeto')
    tituloProjeto.classList.add('sair')
}

function buttonsNo () {
    var tituloProjeto = document.getElementById('titulo-projeto')
    tituloProjeto.classList.remove('sair') 
}

var tituloProjeto = document.getElementById('titulo-projeto')

tituloProjeto.addEventListener('mouseenter',buttons)