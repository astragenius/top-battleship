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
            expect(ship.hits).toStrictEqual([false, false, false, false, false])
        })
    })

    describe('Testing Ship method: getHits() and Hit()', () => {
        const ship = Ship('Battleship')

        test('Test default return value of getHits', () => {
            expect(ship.getHit()).toStrictEqual([false, false, false, false])
        })
        test('Test return value when Ship gets Hit', () => {
            ship.hit(2)
            expect(ship.getHit()).toStrictEqual([false, false, true, false])
        })
        test('Test when hit index is bigger than the ship lenght', () => {
            expect(ship.hit(8)).toBe('Out of range')
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
})
