import { GameBoard } from './Gameboard'
import { Player } from './Player'
import renderGameboard from './DOM'
import { DOMelements } from './DOM-elements'

const GameHandler = () => {
    const player1 = Player('human')
    const EnemyPlayer = Player('cpu')

    const player1Board = GameBoard()
    const enemyBoard = GameBoard()

    const gameInit = () => {
        startGame()
        addEventsToBtn()
    }

    const resetGame = () => {
        player1.resetFleet()
        EnemyPlayer.resetFleet()
        player1Board.resetGameboard()
        enemyBoard.resetGameboard()
        player1.resetPoints()
        EnemyPlayer.resetPoints()
    }

    const renderGrids = () => {
        renderGameboard.renderGrid(
            DOMelements.playerGrid,
            player1Board,
            player1.getType()
        )
        renderGameboard.renderGrid(
            DOMelements.enemyGrid,
            enemyBoard,
            EnemyPlayer.getType()
        )
    }
    const addEventsToGrid = () => {
        DOMelements.enemyGrid.addEventListener('click', attackPlayer)
    }
    const addEventsToBtn = () => {
        DOMelements.btnNew.addEventListener('click', startGame)
        DOMelements.btnReset.addEventListener('click', startGame)
    }

    const attackPlayer = (e) => {
        const cell = e.target
        const x = cell.dataset.x
        const y = cell.dataset.y
        const board = enemyBoard.getBoard()[x][y]
        if (board !== 'hit' && board !== 'miss') {
            player1.attack(x, y, enemyBoard)
            EnemyPlayer.autoAttack(player1Board)

            renderGrids()
        }
        if (player1Board.checkShipsSunk() || enemyBoard.checkShipsSunk()) {
            let winner = ''
            if (player1Board.checkShipsSunk()) {
                console.log('CPU Winns')
                EnemyPlayer.addPoints()
                renderGameboard.renderPoints(
                    EnemyPlayer,
                    DOMelements.enemyPoints
                )
                winner = 'Enemy winns the game'
            } else if (enemyBoard.checkShipsSunk()) {
                console.log('player winns')
                player1.addPoints()
                renderGameboard.renderPoints(player1, DOMelements.playerPoints)
                winner = 'Player Winns the game'
            }

            DOMelements.enemyGrid.removeEventListener('click', attackPlayer)
        }

        //console.log(player1.attack(x, y, enemyBoard))
    }

    const autoPlace = () => {
        player1Board.resetGameboard()
        enemyBoard.resetGameboard()

        player1Board.autoPlaceAllShips(player1.getFleet())
        enemyBoard.autoPlaceAllShips(EnemyPlayer.getFleet())
    }

    const startGame = () => {
        resetGame()
        addEventsToGrid()
        autoPlace()
        renderGrids()
        renderGameboard.renderPoints(player1, DOMelements.playerPoints)
        renderGameboard.renderPoints(EnemyPlayer, DOMelements.enemyPoints)
    }

    return {
        gameInit,
        startGame,
        autoPlace,
        renderGrids,
        resetGame,
    }
}

export default GameHandler
