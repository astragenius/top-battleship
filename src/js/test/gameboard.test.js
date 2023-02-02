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

describe.skip('Test autoPlaceAllShips method', () => {
    /*  const board = GameBoard()
    const player = Player('Human')
    const fleet = player.getFleet()
    board.autoPlaceAllShips(fleet)
    const check = board.checkPlacedShips() */
    test.skip('check if all ships are placed', () => {
        expect(check).toBe(true)
    })
})

describe('Test recieve attack method on enemy gameboard', () => {
    const board = GameBoard()
    const carrier = Ship('Carrier')
    const battleship = Ship('Battleship')
    board.placeShip(carrier, 0, 2)
    battleship.changePosition()
    board.placeShip(battleship, 2, 3)
    board.recieveAttack(0, 0)
    test('attack carrier at index: 0', () => {
        board.recieveAttack(0, 2)
        const check = carrier.getHit()
        expect(check).toEqual([true, null, null, null, null])
    })
    test('attack carrier at index: 3', () => {
        board.recieveAttack(3, 2)
        const check = carrier.getHit()
        expect(check).toEqual([true, null, null, true, null])
    })

    test('miss', () => {
        board.recieveAttack(9, 9)
        const check = board.getBoard()[9][9]
        expect(check).toEqual('miss')
    })
    test('hit at 0 2', () => {
        const check = board.getBoard()[0][2]
        expect(check).toEqual(false)
    })
})
describe('Test if ship is sunk or not', () => {
    const board = GameBoard()
    const submarine = Ship('Submarine')
    board.placeShip(submarine, 2, 0)
    board.recieveAttack(2, 0)
    board.recieveAttack(3, 0)

    test('test if ship is sunk by 2 hits', () => {
        const check = board.checkShipsSunk()
        expect(check).toEqual(false)
    })
    test('test if ship is sunk by 5 hits', () => {
        board.recieveAttack(4, 0)
        board.recieveAttack(0, 5)
        const check = board.checkShipsSunk()
        expect(check).toEqual(true)
    })
})
