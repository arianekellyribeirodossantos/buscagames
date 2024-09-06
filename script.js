const games = [
    {
        name: "Prince of Persia: The Lost Crown",
        releaseDate: "18 de janeiro de 2024",
        description: "Um jogo de ação 2D com elementos de metroidvania.",
        image: "/img/Prince.jpg"
    },
    {
        name: "Tekken 8",
        releaseDate: "26 de janeiro de 2024",
        description: "Novo capítulo da franquia de jogos de luta.",
        image: "/img/Tekken.jpg"
    },
    {
        name: "Black Myth: Wukong",
        releaseDate: "19 de agosto de 2024",
        description: "Jogo de RPG de ação desenvolvido pela Game Science, baseado no romance chinês clássico do século 16",
        image: "/img/Wukong.jpg"
    },
    {
        name: "Star Wars Outlaws",
        releaseDate: "27 de agosto de 2024",
        description: "Jogo eletrônico de ação e aventura desenvolvido pela Massive Entertainment e publicado pela Ubisoft sob a licença da Lucasfilm Games",
        image: "/img/StarWars.jpg"
    }
    // Adicione mais jogos aqui
];

function searchGame() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const gameInfo = document.getElementById('gameInfo');
    gameInfo.innerHTML = '';

    const game = games.find(g => g.name.toLowerCase().includes(input));
    if (game) {
        gameInfo.innerHTML = `
            <h2>${game.name}</h2>
            <p>Data de Lançamento: ${game.releaseDate}</p>
            <p>${game.description}</p>
            <img src="${game.image}" alt="${game.name}" style="width: 100%; max-width: 400px;">
        `;
    } else {
        gameInfo.innerHTML = '<p>Jogo não encontrado.</p>';
    }
}
