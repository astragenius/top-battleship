import { Player } from '../code/Player'
import { SHIP_TYPE } from '../code/helpers'
const player1 = Player('Human')
const player2 = Player('CPU')

describe('Test Player Properties', () => {
    test('Test player type Human', () => {
        expect(player1.getType()).toBe('Human')
    })

    test('Test Player type Computer', () => {
        expect(player2.getType()).toBe('CPU')
    })
})

describe('Test Fleet resett method', () => {
    test('reset fleet', () => {
        let fleet1 = player1.getFleet()
        let fleet2 = player1.getFleet()
        const equal = fleet1 === fleet2
        expect(equal).toBe(true)
    })
    test('test fleet after reset', () => {
        let fleet1 = player1.getFleet()
        player1.resetFleet()
        let fleet2 = player1.getFleet()
        const equal = fleet1 === fleet2
        expect(equal).toBe(false)
    })
})
