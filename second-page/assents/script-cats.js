function showSidebar(event) {
    if (event) {
        event.preventDefault(); // Impede que o link redirecione a página para o topo
    }
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function hideSidebar(event) {
    if (event) {
        if(event.target.tagName.toLowerCase() === 'a') {
            // Não impede o comportamento padrão se o alvo for um link
        } else {
            event.preventDefault(); // Impede que o link redirecione a página para o topo
        }
    }
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}

// Adiciona evento de clique a todos os links dentro do sidebar para fechar o menu
document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener('click', (event) => {
        hideSidebar(event);
    });
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth', /* Scroll suave */
            block: 'start'      /* Alinha ao topo */
        });
    });
});



// Função para animar a contagem de 0 até 123
  const contadorEl = document.getElementById('contador');
  let count = 0;
  const maxCount = 123;
  const durationMs = 3000; // duração total da animação em ms
  const incrementTime = durationMs / maxCount;
  function updateCounter() {
    count++;
    if(count <= maxCount){
      contadorEl.textContent = count;
      setTimeout(updateCounter, incrementTime);
    }
  }
  // Inicia a contagem automaticamente ao carregar a página
  window.onload = () => {
    contadorEl.textContent = '0';
    updateCounter();
  };

//duvidas frequentes
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const faq = button.nextElementSibling;
            const icon = button.children[1];

            faq.classList.toggle('show');
            icon.classList.toggle('rotate');
        });
    });
});

function vermais(botao) {
    let comentario = botao.closest(".testimonials-item"); // Obtém o elemento pai correto
    let pontos = comentario.querySelector(".pontos");
    let maisTexto = comentario.querySelector(".mais");
    
    if (pontos.style.display === "none") {
        pontos.style.display = "inline";
        maisTexto.style.display = "none";
        botao.innerHTML = "Ver mais";
    } else {
        pontos.style.display = "none";
        maisTexto.style.display = "inline";
        botao.innerHTML = "Ver menos";
    }
}