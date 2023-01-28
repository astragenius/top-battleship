import { GameBoard } from '../code/Gameboard'

describe('Test GameBoad methods', () => {
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
