import Ship from './ships'

export const GameBoard = () => {
    let gameboard = Array(10)
        .fill(null)
        .map(() => Array(10).fill(null))

    const getBoard = () => gameboard
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
    const checkPos = (lenght, x, y, position) => {}

    const placeShip = (ship, x0, y0) => {
        const position = ship.getPosition()
        for (let i = 0; i < ship.length; i++) {
            const [x, y] = coordAdjust(x0, y0, i, position)
            gameboard[x][y] = { ship, index: i }
        }
    }

    return { getBoard, recieveAttack, placeShip, checkPos }
}
