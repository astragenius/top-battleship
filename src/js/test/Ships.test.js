import Ship from '../code/Ships'

describe('Testing of the Ship factory function', () => {
    describe('Testing Ship Properties', () => {
        const ship = Ship('Carrier')

        test('get the correct ship type', () => {
            expect(ship.id).toBe('Carrier')
        })
        test('length of the ship', () => {
            expect(ship.length).toBe(5)
        })
        test('test default hits', () => {
            expect(ship.hits).toStrictEqual([null, null, null, null, null])
        })
    })

    describe('Testing Ship method: getHits() and Hit()', () => {
        const ship = Ship('Battleship')

        test('Test default return value of getHits', () => {
            expect(ship.getHit()).toStrictEqual([null, null, null, null])
        })
        test('Test return value when Ship gets Hit', () => {
            ship.hit(2)
            expect(ship.getHit()).toStrictEqual([null, null, true, null])
        })
    })

    describe('Testing if Ship is sunk', () => {
        const ship = Ship('Submarine')

        test('Test if ship is not sunk yet', () => {
            expect(ship.isSunk()).toBe(false)
        })
        test('Test if ship is hit but not sunk', () => {
            ship.hit(3)
            expect(ship.isSunk()).toBe(false)
        })
        test('Test if ship is sunk', () => {
            ship.hit(0)
            ship.hit(1)
            ship.hit(2)
            expect(ship.isSunk()).toBe(true)
        })
    })

    describe('Testing changing direction method', () => {
        const ship = Ship('Carrier')
        test('Test default position, getPosition method', () => {
            expect(ship.getPosition()).toBe('horizontal')
        })
        test('test change postion method', () => {
            ship.changePosition()
            expect(ship.getPosition()).toBe('vertical')
        })
    })
})
