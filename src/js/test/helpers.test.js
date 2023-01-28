import { createFleet } from '../code/helpers'

describe.skip('Return Object with Fleet(Type, length, hits', () => {
    test('test if Fleet object has TYPE and SHIP lenght', () => {
        const type = ['Carrier']
        expect(createFleet(type)).toStrictEqual(
            expect.objectContaining({
                id: 'Carrier',
                length: 5,
                hits: [false, false, false, false, false],
            })
        )
    })
})
