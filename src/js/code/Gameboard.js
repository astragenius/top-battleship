import { SHIP_TYPE } from './helpers'
export const GameBoard = () => {
    let gameboard = Array(10)
        .fill(null)
        .map(() => Array(10).fill(null))

    let placedShip = []
    const getBoard = () => gameboard
    const checkPlacedShips = () => placedShip.length === SHIP_TYPE.length

    const recieveAttack = (x, y) => {}
    const coordAdjust = (x0, y0, i, position) => {
        let x = x0 + i
        let y = y0

        if (position === 'vertical') {
            x = x0
            y = y0 + i
        }

        return [x, y]
    }
    const checkPos = (lenght, x0, y0, position) => {
        let list = []

        for (let i = 0; i < lenght; i++) {
            const [x, y] = coordAdjust(x0, y0, i, position)
            if (x < 10 && y < 10) {
                list.push(gameboard[x][y])
            } else {
                return false
            }
        }

        return list.every((cell) => cell === null)
    }

    const placeShip = (ship, x0, y0) => {
        const position = ship.getPosition()
        const validPos = checkPos(ship.lenght, x0, y0, position)

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

    return { getBoard, recieveAttack, placeShip, checkPlacedShips }
}
