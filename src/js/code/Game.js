import { GameBoard } from './Gameboard'
import { Player } from './Player'
import renderGameboard from './DOM'
import { DOMelements } from './DOM-elements'

const GameHandler = () => {
    const player1 = Player('human')
    const EnemyPlayer = Player('cpu')

    const player1Board = GameBoard()
    const enemyBoard = GameBoard()

    const resetGame = () => {
        player1.resetFleet()
        EnemyPlayer.resetFleet()
        player1Board.resetGameboard()
        enemyBoard.resetGameboard()
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

    const attackPlayer = (e) => {
        const x = e.target.dataset.x
        const y = e.target.dataset.y

        console.log(player1.attack(x, y, enemyBoard))
    }

    const autoPlace = () => {
        player1Board.resetGameboard()
        enemyBoard.resetGameboard()
        player1Board.autoPlaceAllShips(player1.getFleet())
        enemyBoard.autoPlaceAllShips(EnemyPlayer.getFleet())
    }

    const startGame = () => {
        addEventsToGrid()
        resetGame()
        autoPlace()
        renderGrids()
    }

    return {
        startGame,
        autoPlace,
        renderGrids,
        resetGame,
    }
}

export default GameHandler
