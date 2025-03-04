const domElements = {
    // game buttons
    gameBtns: document.querySelectorAll('.game-btns button'),

    // UI choose indicators
    playerSelection: document.querySelector('.player-selection'),
    cpuSelection: document.querySelector('.cpu-selection'),

    // victory counters and combat result
    playerVictoryCounter: document.querySelector('.player-counter'),
    cpuVictoryCounter: document.querySelector('.cpu-counter'),
    combatResult: document.querySelector('.result')
}

// initial scores
let playerScore = 0
let cpuScore = 0

// player and cpu selection

function getComputerSelection () {
    const randomNumber = Math.floor(Math.random() * 3) + 1

    switch (randomNumber) {
        case 1: return 'rock'
        case 2: return 'paper'
        case 3: return 'scissors'
        default: return 'unknown'
    }
}

// battle algorithm
function roundBattle (playerSelection, cpuSelection) {
    const playerVictories = domElements.playerVictoryCounter
    const cpuVictories = domElements.cpuVictoryCounter
    const combatResult = domElements.combatResult

    if (
        playerSelection === 'rock' && cpuSelection === 'scissors' ||
        playerSelection === 'scissors' && cpuSelection === 'paper' ||
        playerSelection === 'paper' && cpuSelection === 'rock'
    ) {
        playerScore++
        playerVictories.textContent = playerScore
        combatResult.textContent = 'Player Wins!'
    }
    else if (playerSelection === cpuSelection) {
        combatResult.textContent = 'Tied!'
    }
    else {
        cpuScore++
        cpuVictories.textContent = cpuScore
        combatResult.textContent = 'CPU Wins!'
    }

    checkWonRounds()
}

function checkWonRounds () {
    const finalResult = domElements.combatResult

    if (playerScore === 5) {
        finalResult.textContent = 'Congrats! You\'re the absolute winner!'

        domElements.gameBtns.forEach((button) => {
            button.disabled = true
        })

        return
    }
    else if (cpuScore === 5) {
        finalResult.textContent = 'What a shame! You loose, try again later.'

        domElements.gameBtns.forEach((button) => {
            button.disabled = true
        })

        return
    }
}

// play a round
function playRound (playerSelection) {
    const cpuSelection = getComputerSelection()

    domElements.playerSelection.textContent = playerSelection
    domElements.cpuSelection.textContent = cpuSelection

    // print the winner
    return roundBattle(playerSelection, cpuSelection)
}

// init round
domElements.gameBtns.forEach((button) => {
    button.addEventListener('click', (event) => {
        const playerSelection = event.target.id
        playRound(playerSelection)
    })
})
