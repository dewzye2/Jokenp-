var playerName;
var computerChoice = 0;
var playerChoice = 0;
var playerPoints = 0;
var computerPoints = 0;

// Draw 2 numbers
function drawNumbers (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// Show message
function mensagem(text) {
    document.getElementById('mensagem').innerHTML = text;
}

// Define players name
function showPlayerName(nome) {
    document.getElementById('jogador-nome').innerHTML
}

// Calculates and return who won
// 0 - Draw
// 1 - Player Won
// 2 - Computer Won

function calculateChoice(playerChoice, computerChoice) {
    if ( playerChoice == 1 && computerChoice == 1) {
        return 0;
    } else if ( playerChoice == 1 && computerChoice == 2) {
        return 2;
    } else if ( playerChoice == 1 && computerChoice == 3) {
        return 1;
    } else if ( playerChoice == 2 && computerChoice == 1) {
        return 1;
    } else if ( playerChoice == 2 && computerChoice == 2) {
        return 0;
    } else if ( playerChoice == 2 && computerChoice == 3) {
        return 2;
    } else if ( playerChoice == 3 && computerChoice == 1) {
        return 2;
    } else if ( playerChoice == 3 && computerChoice == 2) {
        return 1;
    } else if ( playerChoice == 3 && computerChoice == 3) {
        return 0;
    }
}

// Add points to player and computer
function playerPointsAdd() {
    playerPoints++;
    document.getElementById('jogador-pontos').innerHTML = playerPoints;
}

function computerPointsAdd() {
    computerPoints++;
    document.getElementById('computador-pontos').innerHTML = computerPoints;

}

function selection(tipo, escolha) {
    document.getElementById(tipo + '-escolha-' + escolha).classList.add('selecionado');
}

function removeSelection(tipo, escolha) {
    document.getElementById(tipo + '-escolha-' + escolha).classList.remove('selecionado');
}

// User Play Function // 1 Rock // 2 Paper // 3 Scissor
function play(escolha) {
    playerChoice = escolha;
    selection('jogador', playerChoice)
    computerChoice = drawNumbers(1, 3);
    selection('computador', computerChoice)


    var winner = calculateChoice(playerChoice, computerChoice)

    // Random PC Play --- Calculate who win
    // Add points to winner of last round
    // Show  user play

    if (winner == 0) {
        mensagem('Empate!')
    } else if (winner == 1) {
        mensagem('Ponto para ' + playerName + '!')
        playerPointsAdd();
    } else if (winner == 2) {
        mensagem('Ponto para o computador!')
        computerPointsAdd();
    }

    setTimeout(function() { 
        removeSelection('jogador', playerChoice);
        removeSelection('computador', computerChoice);

        mensagem('Para jogar novamente, faça outra jogada.');
    }, 1700);
}

document.getElementById('jogador-escolha-1').onclick = function() {
    play(1);
};

document.getElementById('jogador-escolha-2').onclick = function() {
    play(2);
};

document.getElementById('jogador-escolha-3').onclick = function() {
    play(3);
};

playerName = prompt('Qual é o seu nome?')
showPlayerName = playerName
mensagem('Bem vindo, ' + playerName + '! Escolha uma opção para jogar.');

console.log(playerName)