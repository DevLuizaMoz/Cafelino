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
