// scores
let playerScore = 0
let cpuScore = 0

// cpu choice
const randomNumber = () => Math.floor(Math.random() * 3) + 1

function getComputerChoise (number) {
    let choice = ''

    switch (number) {
        case 1:
            choice = 'rock'
            break
        case 2:
            choice = 'paper'
            break
        case 3:
            choice = 'scissors'
            break
        default:
            choice = 'Error: Something goes wrong, please try it later.'
            break
    }

    return choice
}

// player choice
function getHumanChoise () {
    let choice = prompt('Please give us your choice: ')

    if (choice != 'rock' && choice != 'paper' && choice != 'scissors') {
        choice = prompt('Invalid input! Please select rock, paper or scissors: ')
    }

    const formattedChoise = choice.toLowerCase()
    return formattedChoise
}

// battle algorithm
function roundBattle (playerSelection, cpuSelection) {
    if (
        playerSelection === 'rock' && cpuSelection === 'scissors' ||
        playerSelection === 'scissors' && cpuSelection === 'paper' ||
        playerSelection === 'paper' && cpuSelection === 'rock'
    ) {
        playerScore++
        console.log('Player wins!')
        console.log('\n')
    }
    else if (playerSelection === cpuSelection) {
        console.log('Tied!')
        console.log('\n')
    }
    else {
        cpuScore++
        console.log('CPU wins!')
        console.log('\n')
    }
}

// game init
function playRound () {
    const cpuChoice = getComputerChoise(randomNumber())
    const playerChoice = getHumanChoise()

    console.log(`CPU choice: ${cpuChoice}`)
    console.log(`Player choice: ${playerChoice}`)

    // print the winner
    return roundBattle(playerChoice, cpuChoice)
}

function playGame () {
    while (playerScore < 5 && cpuScore < 5) {
        playRound()
        if (playerScore === 5) {
            console.log('Congratulations, you win!')
        }
        else if (cpuScore === 5) {
            console.log('What a shame, you\'re defeted!')
        }
    }
}

// waiting to render all the page content
window.onload = () => {
    playGame()
}
