import './scss/index.scss'
import { GameBoard } from './js/code/Gameboard'
import { randomCoords } from './js/code/helpers'
import Ship from './js/code/ships'
import { Player } from './js/code/Player'
import renderGameboard from './js/code/DOM'
import GameHandler from './js/code/Game'
import { DOMelements } from './js/code/DOM-elements'

const game = GameHandler()

game.gameInit()
