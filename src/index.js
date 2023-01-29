import './scss/index.scss'
import { GameBoard } from './js/code/Gameboard'
import { randomCoords } from './js/code/helpers'

const newBoard = GameBoard()
console.log(newBoard.getBoard())
console.log(randomCoords())
