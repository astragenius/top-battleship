import { GameBoard } from '../code/Gameboard'
import Ship from '../code/ships'
import { Player } from '../code/Player'
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

describe('Test method to check if all ships are placed', () => {
    const board = GameBoard()
    const carrier = Ship('Carrier')
    const battleship = Ship('Battleship')
    const cruiser = Ship('Cruiser')
    const submarine = Ship('Submarine')
    const destroyer = Ship('Destroyer')

    test('Test when only 1 ship is placed', () => {
        board.placeShip(carrier, 0, 0)
        const check = board.checkPlacedShips()
        expect(check).toBe(false)
    })
    test('Test when 4 ships are placed', () => {
        board.placeShip(battleship, 1, 0)
        board.placeShip(cruiser, 2, 0)
        board.placeShip(submarine, 3, 0)
        const check = board.checkPlacedShips()
        expect(check).toBe(false)
    })
    test('Test when all ships are placed', () => {
        board.placeShip(destroyer, 4, 0)
        const check = board.checkPlacedShips()
        expect(check).toBe(true)
    })
})

describe('Test autoPlaceAllShips method', () => {
    const board = GameBoard()
    const player = Player('Human')
    const fleet = player.getFleet()
    board.autoPlaceAllShips(fleet)
    const check = board.checkPlacedShips()
    test.skip('check if all ships are placed', () => {
        expect(check).toBe(true)
    })
})

describe.skip('Test recieve attack method on enemy gameboard', () => {
    const player1 = GameBoard()
    const player2 = GameBoard()

    test('Test return value when miss', () => {
        expect(player1.recieveAttack(5, 5)).toBe('miss')
    })
    test('Test return value when hit', () => {})
})
