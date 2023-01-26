import { testFunction } from '../code/someJsfile'
test('das ist eine test function', () => {
    expect(testFunction()).toBe('Hallo Welt')
})
