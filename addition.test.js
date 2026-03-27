//The operation should return the sum of two numbers.

const { addition} = require(`./addition`)


test('1 + 2 = 3', () => {
    expect(addition(2, 4)).toBe(6)
})

test.skip('23 + 60 = 83', () => {
    expect(addition(23, 60)).toBe(83)
})

test.each([[3, 4, 7], [5, -10, -5], [0, 2, 2]])(
    'a + b = c', (a, b, expected) => {
        expect(addition(a, b)).toBe(expected)
}
)

test('2 + 2 = 4', () => {
    expect(addition(2, 2)).toBe(4)          
    
})