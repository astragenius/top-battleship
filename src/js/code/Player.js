import { createFleet, randomCoords, SHIP_TYPE } from './helpers'
export const Player = (type) => {
    const playerType = type
    const playerPoints = 0
    let fleet = createFleet(SHIP_TYPE)

    const getType = () => playerType
    const getPoints = () => playerPoints
    const addPoints = () => playerPoints++
    const getFleet = () => fleet
    const resetFleet = () => (fleet = createFleet(SHIP_TYPE))
    const attack = (x, y, enemyBoard) => enemyBoard.recieveAttack(x, y)
    const autoAttack = (enemyBoard) => {
        const [x, y] = randomCoords()
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
    }
}
