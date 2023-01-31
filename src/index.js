import './scss/index.scss'
import { GameBoard } from './js/code/Gameboard'
import { randomCoords } from './js/code/helpers'
import Ship from './js/code/ships'
import { Player } from './js/code/Player'

const board = GameBoard()
const player = Player('Human')
const fleet = player.getFleet()

board.autoPlaceAllShips(fleet)

const gameboard = board.getBoard()
console.log(gameboard)
