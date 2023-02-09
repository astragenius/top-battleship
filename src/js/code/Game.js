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
        DOMelements.enemyGrid.addEventListener('click', attack)
    }

    const attack = (e) => {
        console.log(e.target)
        console.log(e.target.dataset.x)
        console.log(e.target.dataset.y)
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
