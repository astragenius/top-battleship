import { GameBoard } from '../code/Gameboard'
import Ship from '../code/ships'
describe('Test default GameBoard (emty)', () => {
    const board = GameBoard()

    test('Test emty Gameboard', () => {
        const result = board.getBoard().every((sqr) => sqr === null)
        const expectResult = false
        expect(result).toBe(expectResult)
    })
    test('Test Gameboard Row', () => {
        const result = board.getBoard().length
        const expectResult = 10
        expect(result).toBe(expectResult)
    })
    test('Test Gameboard col', () => {
        const result = board.getBoard()[0].length
        const expectResult = 10
        expect(result).toBe(expectResult)
    })
})

describe('Test placeShip method - horizontal', () => {
    const board = GameBoard()
    const ship = Ship('Battleship')
    board.placeShip(ship, 5, 5)

    test('Test ship position 5 5', () => {
        const pos = board.getBoard()[5][5]

        expect(pos).toEqual({ ship, index: 0 })
    })
    test('Test ship position 5 6', () => {
        const pos = board.getBoard()[6][5]

        expect(pos).toEqual({ ship, index: 1 })
    })
    test('Test ship position 5 7', () => {
        const pos = board.getBoard()[7][5]

        expect(pos).toEqual({ ship, index: 2 })
    })
    test('Test ship position 5 8', () => {
        const pos = board.getBoard()[8][5]

        expect(pos).toEqual({ ship, index: 3 })
    })
})

describe('Test placeShip method - vertical', () => {
    const board = GameBoard()
    const ship = Ship('Battleship')
    ship.changePosition()
    board.placeShip(ship, 5, 5)

    test('Test ship pos 5 5', () => {
        const pos = board.getBoard()[5][5]
        expect(pos).toEqual({ ship, index: 0 })
    })
    test('Test ship pos 5 5', () => {
        const pos = board.getBoard()[5][6]
        expect(pos).toEqual({ ship, index: 1 })
    })
    test('Test ship pos 5 5', () => {
        const pos = board.getBoard()[5][7]
        expect(pos).toEqual({ ship, index: 2 })
    })
    test('Test ship pos 5 5', () => {
        const pos = board.getBoard()[5][8]
        expect(pos).toEqual({ ship, index: 3 })
    })
})
describe.skip('Test placeShip method - vertical', () => {})

describe.skip('Test recieve attack method on enemy gameboard', () => {
    const player1 = GameBoard()
    const player2 = GameBoard()

    test('Test return value when miss', () => {
        expect(player1.recieveAttack(5, 5)).toBe('miss')
    })
    test('Test return value when hit', () => {})
})
