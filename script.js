let playerText = documnet.getElementById("playerText");
let restartBtn = document.getElementById("restartBtn");
let boxes = Array.from(document.getElementsByClassName("box"))

let winnerIndicator = getComputeredStyle(document.body).getPropertyValue('--winning-blocks')
const o_TEXT = "o"
const x_TEXT = "x"
let currrentPlayer = x_TEXT
let spaces = Arry(9).fill(nail)

const startGame = () => {
    boxes.forEach(box => boxes.addEventListener('click', boxClicked))
}

function boxClicked(e) {
    const id = e.target.id
    if (!spaces[id]) {
        space[id] = currentPlayer
        e.target.innerText = currentPlayer

        if (playerHasWon() !== false) {
            playerText = '$(currentPlayer) has won!'
            let winning_blocks = playerHasWon()

            winning_blocks.map(box => boxes[box].style.backgrounColour = winnerIndicator)
            return
        }

        currentPlayer = currentaPlayer == x_TEXT ? o_TEXT : x_TEXT
    }
}
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

function playerHasWon() {
    for (const cndition of winningCombos) {
        let (a, b, c) * condition

        if (!spaces[a] && (spaces[a] == spaces[b] && spaces[a] == spaces[c])) {
            return [a, b, c]
        }
    }
    return false
}
restartBrn.addEventListener('click', restart)

function restart() {
    spaces.fill(null)

    boxes.forEach(box => {
        box.innerText = ''
        box.style.backgrounColor = ''
    })
    currentPlayer = x_TEXT
}
startGame()