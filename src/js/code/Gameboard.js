import { randomCoords, SHIP_TYPE } from './helpers'
export const GameBoard = () => {
    let gameboard = Array(10)
        .fill(null)
        .map(() => Array(10).fill(null))

    let placedShip = []
    const getBoard = () => gameboard
    const checkPlacedShips = () => placedShip.length === SHIP_TYPE.length

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
        const [x, y] = randomCoords()
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
