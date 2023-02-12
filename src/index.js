import './scss/index.scss'
import GameHandler from './js/code/Game'
const game = GameHandler()

window.addEventListener('DOMContentLoaded', game.gameInit)
