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
}
