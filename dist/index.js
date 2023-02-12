/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/index.scss":
/*!*****************************!*\
  !*** ./src/scss/index.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/code/DOM-elements.js":
/*!*************************************!*\
  !*** ./src/js/code/DOM-elements.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DOMelements": () => (/* binding */ DOMelements)
/* harmony export */ });
const DOMelements = {
    playerGrid: document.querySelector('.player__grid'),
    enemyGrid: document.querySelector('.enemy__grid'),
    btnNew: document.getElementById('btn__new-game__header'),
    btnReset: document.getElementById('btn__reset-game__header'),
    playerPoints: document.getElementById('player__points'),
    enemyPoints: document.getElementById('enemy__points'),

    modal: document.querySelector('.modal'),
    btnNewModal: document.getElementById('btn__new-game__modal'),
    btnResetModal: document.getElementById('btn__reset-game__modal'),

    modalTitle: document.querySelector('.modal__title'),
}


/***/ }),

/***/ "./src/js/code/DOM.js":
/*!****************************!*\
  !*** ./src/js/code/DOM.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const renderGameboard = (() => {
    const renderCell = (x, y, status) => {
        return `<div class="cell ${status}" data-x="${x}" data-y="${y}"></div>`
    }

    const resetGrid = (container) => {
        container.textContent = ''
    }

    const renderPoints = (player, playerDOMElement) => {
        if (player.getType() === 'human') {
            playerDOMElement.textContent = player.getPoints()
        } else if (player.getType() === 'cpu') {
            playerDOMElement.textContent = player.getPoints()
        }
    }

    const toggleModal = (modal) => {
        if (modal.getAttribute('data-open') === 'false') {
            console.log('test')
            modal.setAttribute('data-open', true)
        } else {
            modal.setAttribute('data-open', false)
        }
    }

    const renderModal = (winner, modal) => {
        modal.querySelector('.modal__title').textContent = winner
        toggleModal(modal)
    }

    const renderGrid = (container, gameboard, type) => {
        resetGrid(container)
        const board = gameboard.getBoard()
        const length = board.length

        let grid = ''

        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length; j++) {
                let status = board[i][j]

                if (status === 'hit') {
                    if (type === 'human') {
                        status = 'player__hit'
                    } else {
                        status = 'enemy__hit'
                    }
                } else if (status === 'miss') {
                    if (type === 'human') {
                        status = 'player__miss'
                    } else {
                        status = 'enemy__miss'
                    }
                }

                if (status === null) {
                    status = ''
                } else if (status.ship) {
                    if (type === 'human') {
                        status = 'player__ship'
                    } else {
                        status = ''
                    }
                }

                grid += renderCell(i, j, status)
            }
        }

        container.innerHTML = grid
    }

    return { renderGrid, renderPoints, renderModal, toggleModal }
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderGameboard);


/***/ }),

/***/ "./src/js/code/Game.js":
/*!*****************************!*\
  !*** ./src/js/code/Game.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gameboard */ "./src/js/code/Gameboard.js");
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Player */ "./src/js/code/Player.js");
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOM */ "./src/js/code/DOM.js");
/* harmony import */ var _DOM_elements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DOM-elements */ "./src/js/code/DOM-elements.js");





const GameHandler = () => {
    const player1 = (0,_Player__WEBPACK_IMPORTED_MODULE_1__.Player)('human')
    const EnemyPlayer = (0,_Player__WEBPACK_IMPORTED_MODULE_1__.Player)('cpu')

    const player1Board = (0,_Gameboard__WEBPACK_IMPORTED_MODULE_0__.GameBoard)()
    const enemyBoard = (0,_Gameboard__WEBPACK_IMPORTED_MODULE_0__.GameBoard)()

    const gameInit = () => {
        startGame()
        addEventsToBtn()
    }

    const resetGame = () => {
        player1.resetFleet()
        EnemyPlayer.resetFleet()
        player1Board.resetGameboard()
        enemyBoard.resetGameboard()
    }

    const renderGrids = () => {
        _DOM__WEBPACK_IMPORTED_MODULE_2__["default"].renderGrid(
            _DOM_elements__WEBPACK_IMPORTED_MODULE_3__.DOMelements.playerGrid,
            player1Board,
            player1.getType()
        )
        _DOM__WEBPACK_IMPORTED_MODULE_2__["default"].renderGrid(
            _DOM_elements__WEBPACK_IMPORTED_MODULE_3__.DOMelements.enemyGrid,
            enemyBoard,
            EnemyPlayer.getType()
        )
    }
    const addEventsToGrid = () => {
        _DOM_elements__WEBPACK_IMPORTED_MODULE_3__.DOMelements.enemyGrid.addEventListener('click', attackPlayer)
    }
    const addEventsToBtn = () => {
        _DOM_elements__WEBPACK_IMPORTED_MODULE_3__.DOMelements.btnNew.addEventListener('click', startGame)
        _DOM_elements__WEBPACK_IMPORTED_MODULE_3__.DOMelements.btnReset.addEventListener('click', () => {
            startGame()
            player1.resetPoints()
            EnemyPlayer.resetPoints()
        })
        _DOM_elements__WEBPACK_IMPORTED_MODULE_3__.DOMelements.btnNewModal.addEventListener('click', () => {
            startGame()
            _DOM__WEBPACK_IMPORTED_MODULE_2__["default"].toggleModal(_DOM_elements__WEBPACK_IMPORTED_MODULE_3__.DOMelements.modal)
        })
        _DOM_elements__WEBPACK_IMPORTED_MODULE_3__.DOMelements.btnResetModal.addEventListener('click', () => {
            resetGame()
            _DOM__WEBPACK_IMPORTED_MODULE_2__["default"].toggleModal(_DOM_elements__WEBPACK_IMPORTED_MODULE_3__.DOMelements.modal)
        })
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
            if (player1Board.checkShipsSunk()) {
                console.log('CPU Winns')
                EnemyPlayer.addPoints()
                _DOM__WEBPACK_IMPORTED_MODULE_2__["default"].renderPoints(
                    EnemyPlayer,
                    _DOM_elements__WEBPACK_IMPORTED_MODULE_3__.DOMelements.enemyPoints
                )
                _DOM__WEBPACK_IMPORTED_MODULE_2__["default"].renderModal(
                    'The Enemy wins the Game',
                    _DOM_elements__WEBPACK_IMPORTED_MODULE_3__.DOMelements.modal
                )
            } else if (enemyBoard.checkShipsSunk()) {
                console.log('player winns')
                player1.addPoints()
                _DOM__WEBPACK_IMPORTED_MODULE_2__["default"].renderPoints(player1, _DOM_elements__WEBPACK_IMPORTED_MODULE_3__.DOMelements.playerPoints)
                _DOM__WEBPACK_IMPORTED_MODULE_2__["default"].renderModal(
                    'Player wins the Game',
                    _DOM_elements__WEBPACK_IMPORTED_MODULE_3__.DOMelements.modal
                )
            }

            _DOM_elements__WEBPACK_IMPORTED_MODULE_3__.DOMelements.enemyGrid.removeEventListener('click', attackPlayer)
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
        _DOM__WEBPACK_IMPORTED_MODULE_2__["default"].renderPoints(player1, _DOM_elements__WEBPACK_IMPORTED_MODULE_3__.DOMelements.playerPoints)
        _DOM__WEBPACK_IMPORTED_MODULE_2__["default"].renderPoints(EnemyPlayer, _DOM_elements__WEBPACK_IMPORTED_MODULE_3__.DOMelements.enemyPoints)
    }

    return {
        gameInit,
        startGame,
        autoPlace,
        renderGrids,
        resetGame,
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameHandler);


/***/ }),

/***/ "./src/js/code/Gameboard.js":
/*!**********************************!*\
  !*** ./src/js/code/Gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameBoard": () => (/* binding */ GameBoard)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./src/js/code/helpers.js");

const GameBoard = () => {
    let gameboard = Array(10)
        .fill(null)
        .map(() => Array(10).fill(null))

    let placedShip = []
    const getBoard = () => gameboard
    const checkPlacedShips = () => placedShip.length === _helpers__WEBPACK_IMPORTED_MODULE_0__.SHIP_TYPE.length

    const recieveAttack = (x, y) => {
        if (gameboard[x][y] === null) {
            gameboard[x][y] = 'miss'
        } else if (gameboard[x][y].ship) {
            gameboard[x][y].ship.hit(gameboard[x][y].index)
            gameboard[x][y] = 'hit'
        }

        return gameboard[x][y]
    }
    const coordAdjust = (x0, y0, i, position) => {
        let x = x0
        let y = y0 + i

        if (position === 'vertical') {
            x = x0 + i
            y = y0
        }

        return [x, y]
    }
    const checkPos = (length, x0, y0, position) => {
        const list = []

        for (let i = 0; i < length; i++) {
            const [x, y] = coordAdjust(x0, y0, i, position)

            if (y < 10 && x < 10) {
                list.push(gameboard[x][y])
            } else {
                return false
            }
        }

        return list.every((cell) => cell === null)
    }

    const placeShip = (ship, x0, y0) => {
        //console.log(ship)
        const position = ship.getPosition()
        const validPos = checkPos(ship.length, x0, y0, position)

        if (validPos) {
            for (let i = 0; i < ship.length; i++) {
                const [x, y] = coordAdjust(x0, y0, i, position)

                gameboard[x][y] = { ship, index: i }
            }
            placedShip.push(ship)
            return validPos
        } else {
            return validPos
        }
    }

    const placeShipAutomatic = (ship) => {
        const [x, y] = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.randomCoords)()
        const randomDirection = Math.random() > 0.5

        if (randomDirection) ship.changePosition()
        const shipPlace = placeShip(ship, x, y)
        if (!shipPlace) placeShipAutomatic(ship)
    }
    const autoPlaceAllShips = (ships) => {
        for (const ship in ships) {
            placeShipAutomatic(ships[ship])
        }
    }
    const checkShipsSunk = () => placedShip.every((ship) => ship.isSunk())

    const resetGameboard = () => {
        gameboard = Array(10)
            .fill(null)
            .map(() => Array(10).fill(null))
        placedShip = []
    }

    return {
        getBoard,
        recieveAttack,
        placeShip,
        checkPlacedShips,
        resetGameboard,
        autoPlaceAllShips,
        checkShipsSunk,
    }
}


/***/ }),

/***/ "./src/js/code/Player.js":
/*!*******************************!*\
  !*** ./src/js/code/Player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Player": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./src/js/code/helpers.js");

const Player = (type) => {
    const playerType = type
    let playerPoints = 0
    let fleet = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createFleet)(_helpers__WEBPACK_IMPORTED_MODULE_0__.SHIP_TYPE)

    const getType = () => playerType
    const resetPoints = () => (playerPoints = 0)
    const getPoints = () => playerPoints
    const addPoints = () => playerPoints++
    const getFleet = () => fleet
    const resetFleet = () => (fleet = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createFleet)(_helpers__WEBPACK_IMPORTED_MODULE_0__.SHIP_TYPE))
    const attack = (x, y, enemyBoard) => enemyBoard.recieveAttack(x, y)
    const autoAttack = (enemyBoard) => {
        const [x, y] = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.randomCoords)()
        const pos = enemyBoard.getBoard()[x][y]
        if (pos === 'miss' || pos === 'hit') {
            autoAttack(enemyBoard)
        } else {
            enemyBoard.recieveAttack(x, y)
        }
    }

    return {
        getType,
        getFleet,
        resetFleet,
        attack,
        autoAttack,
        getPoints,
        addPoints,
        resetPoints,
    }
}


/***/ }),

/***/ "./src/js/code/helpers.js":
/*!********************************!*\
  !*** ./src/js/code/helpers.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SHIP_LENGTH": () => (/* binding */ SHIP_LENGTH),
/* harmony export */   "SHIP_TYPE": () => (/* binding */ SHIP_TYPE),
/* harmony export */   "createFleet": () => (/* binding */ createFleet),
/* harmony export */   "randomCoords": () => (/* binding */ randomCoords)
/* harmony export */ });
/* harmony import */ var _ships__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ships */ "./src/js/code/ships.js");

const SHIP_TYPE = [
    'Carrier',
    'Battleship',
    'Cruiser',
    'Submarine',
    'Destroyer',
]

const SHIP_LENGTH = {
    Carrier: 5,
    Battleship: 4,
    Cruiser: 3,
    Submarine: 3,
    Destroyer: 2,
}

function createFleet(type) {
    const fleet = {}

    type.forEach((el) => (fleet[el] = (0,_ships__WEBPACK_IMPORTED_MODULE_0__["default"])(el)))

    return fleet
}
const random = (size = 10) => Math.floor(Math.random() * size)
const randomCoords = (size = 10) => [random(size), random(size)]


/***/ }),

/***/ "./src/js/code/ships.js":
/*!******************************!*\
  !*** ./src/js/code/ships.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./src/js/code/helpers.js");


const Ship = (type) => {
    const id = type
    const length = _helpers__WEBPACK_IMPORTED_MODULE_0__.SHIP_LENGTH[type]
    const hits = Array(length).fill(null)
    let position = 'horizontal'

    const getHit = () => hits
    const getPosition = () => {
        return position
    }
    const changePosition = () => {
        position === 'horizontal'
            ? (position = 'vertical')
            : (position = 'horizontal')
    }
    const hit = (index) => {
        hits[index] = true
    }
    const isSunk = () => {
        return hits.every((el) => el === true)
    }

    return {
        length,
        id,
        hits,
        getHit,
        hit,
        isSunk,
        getPosition,
        changePosition,
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/index.scss */ "./src/scss/index.scss");
/* harmony import */ var _js_code_Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/code/Game */ "./src/js/code/Game.js");


const game = (0,_js_code_Game__WEBPACK_IMPORTED_MODULE_1__["default"])()

window.addEventListener('DOMContentLoaded', game.gameInit)

})();

/******/ })()
;
//# sourceMappingURL=index.js.map