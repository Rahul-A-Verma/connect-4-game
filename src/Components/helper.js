import { game_state_draw } from "../Constant"

export const isWinner = (gameBoard, currentMove, currentPlayer) => {
    let board = [...gameBoard]
    board[currentMove] = currentPlayer
    const winner = [
        [0, 1, 2, 3],
        [4, 5, 6, 7],
        [8, 9, 10, 11],
        [12, 13, 14, 15],
        [0, 4, 8, 12],
        [1, 5, 9, 13],
        [2, 6, 10, 14],
        [3, 7, 11, 15],
        [0, 5, 10, 15],
        [3, 6, 9, 12]
    ]
    for (let i = 0; i < winner.length; i++) {
        const [c1, c2, c3, c4] = winner[i]
        if (board[c1] > 0 &&
            board[c1] === board[c2] &&
            board[c2] === board[c3] &&
            board[c3] === board[c4]) {
            return true
        }
    }
    return false
}

export const isDraw = (gameBoard, currentMove, currentPlayer) => {
    let board = [...gameBoard]
    board[currentMove] = currentPlayer

    let count = board.reduce((n, x) => n + (x == 0), 0)
    console.log(`count ${count}`)
    return count === 0
}
const computerPlayRandom = (gameBoard) => {
    let validMove = [];
    for (let i = 0; i < gameBoard.length; i++) {
        if (gameBoard[i] === 0) {
            validMove.push(i)
        }
    }
    let randomMove = Math.floor(Math.random() * validMove.length);
    return validMove[randomMove]
}

const getPosition = (gameBoard,moveCheck) => {
    for (let i = 0; i < moveCheck.length; i++) {
        for (let j = 0; 
            j < moveCheck[i].max;
            j += moveCheck[i].step) {
            let series =gameBoard[j + moveCheck[i].index[0]].toString() +
                gameBoard[j + moveCheck[i].index[1]].toString() +
                gameBoard[j + moveCheck[i].index[2]].toString() +
                gameBoard[j + moveCheck[i].index[3]].toString();

            switch (series) {
                case "1110":
                case "2220":
                    return j + moveCheck[i].index[3];
                case "1101":
                case "2202":
                    return j + moveCheck[i].index[2];
                case "1211":
                case "2022":
                    return j + moveCheck[i].index[1];
                case "0111":
                case "0222":
                    return j + moveCheck[i].index[0];
                default:    
            }

        }
    
    }
    return -1;
}
export const computerPlay = (gameBoard) => {
    let moveCheck = [
        //Vertical
        {
            index: [0, 4, 8, 12],
            max: 4,
            step: 1
        },
        //Horizontal
        {
            index: [0, 1, 2, 3],
            max: 16,
            step: 4
        },
        //diagonal
        {
            index: [0, 5, 10, 15],
            max: 16,
            step: 16
        },
        {
            index: [3, 6, 9, 12],
            max: 16,
            step: 16
        },

    ]
    let position = getPosition(gameBoard, moveCheck);
    if(position > -1) {
        return position;}
    else{
        return computerPlayRandom(gameBoard)
    }

 
}