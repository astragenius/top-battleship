import './scss/index.scss'
import { GameBoard } from './js/code/Gameboard'
import { randomCoords } from './js/code/helpers'
import Ship from './js/code/ships'
import { Player } from './js/code/Player'
import renderGameboard from './js/code/DOM'

const container = document.querySelector('.player__grid')
const container1 = document.querySelector('.enemy__grid')
const player1 = Player('human')
const cpu = Player('cpu')
const cpufleet = cpu.getFleet()
const fleet = player1.getFleet()

const board = GameBoard()
const cpuboard = GameBoard()
/* cpuboard.autoPlaceAllShips(cpufleet)
board.autoPlaceAllShips(fleet) */
console.log(board.getBoard())
console.log(cpuboard.getBoard())

renderGameboard.renderGrid(container, board, player1.getType())
renderGameboard.renderGrid(container1, cpuboard, cpu.getType())
