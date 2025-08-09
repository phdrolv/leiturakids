// Sistema de notificações
function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message + ' 🎉';
    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Mudança de seção no menu vertical
function changeSection(section) {
    // Remove classe ativa de todos os itens
    document.querySelectorAll('.side-nav-item').forEach(item => {
        item.classList.remove('active');
    });

    // Adiciona classe ativa ao item clicado
    event.target.classList.add('active');

    const sectionNames = {
        'perfil': 'Meu Perfil 👤',
        'livros': 'Biblioteca 📚',
        'ideias': 'Novas Ideias 💡',
        'atividades': 'Atividades ✏️',
        'listas': 'Minhas Listas 📋',
        'jogos': 'Jogos Divertidos 🎮',
        'conquistas': 'Conquistas 🏆'
    };

    showNotification(sectionNames[section] || 'Nova seção');
}

// Iniciar atividades
function startActivity(activity) {
    const activities = {
        'alfabeto': 'Iniciando Alfabeto Interativo! 🔤',
        'palavras': 'Vamos formar palavras! 📝',
        'leitura': 'Hora da história! 📖',
        'memoria': 'Jogo da memória começando! 🧩',
        'caligrafia': 'Vamos praticar a escrita! ✍️',
        'quiz': 'Quiz divertido iniciado! ❓'
    };

    showNotification(activities[activity]);

    // Aqui você pode adicionar lógica para navegação específica
    setTimeout(() => {
        showNotification('Carregando atividade... ⏳');
    }, 1500);
}

// Animação de entrada
window.addEventListener('load', () => {
    setTimeout(() => {
        showNotification('Bem-vindo ao Leitura Kids! 🌟');
    }, 1000);
});

// Efeito de flutuação das letras
function createFloatingLetter() {
    const letters = ['A', 'B', 'C', 'D', 'E', '🌟', '📚', '🎨', '🎵'];
    const letter = document.createElement('div');
    letter.className = 'floating-letter';
    letter.textContent = letters[Math.floor(Math.random() * letters.length)];
    letter.style.left = Math.random() * 100 + '%';
    letter.style.top = Math.random() * 100 + '%';
    letter.style.animationDelay = Math.random() * 6 + 's';

    document.querySelector('.floating-elements').appendChild(letter);

    setTimeout(() => {
        letter.remove();
    }, 6000);
}

// Cria novas letras flutuantes periodicamente
setInterval(createFloatingLetter, 3000);

// Loading screen
window.addEventListener('load', function () {
    setTimeout(() => {
        document.getElementById('loading').classList.add('hidden');
    }, 1500);
});
