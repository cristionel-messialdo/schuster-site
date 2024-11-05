// Seleciona a bolinha de perfil e o menu dropdown
const profileButton = document.querySelector('.profile');
const dropdownMenu = document.querySelector('.profile-dropdown');

// Adiciona o evento de clique na bolinha de perfil
profileButton.addEventListener('click', function(event) {
    // Impede que o clique na bolinha feche o menu imediatamente
    event.stopPropagation(); 

    // Alterna a classe 'show' para exibir ou ocultar o menu
    dropdownMenu.classList.toggle('show');
});

// Fecha o menu dropdown se o usuário clicar fora da bolinha ou do menu
document.addEventListener('click', function(event) {
    // Verifica se o clique foi fora da bolinha ou do menu dropdown
    if (!profileButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.classList.remove('show'); // Remove a classe 'show' para ocultar o menu
    }
});
