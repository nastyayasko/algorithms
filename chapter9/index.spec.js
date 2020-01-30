const {
  getFactorial,
  getFibonacci,
  towerOfHanoi,
} = require('./index')

describe('Recursion', () => {
  it('Should return factorial', () => {
    expect(getFactorial(1)).toEqual(1)
    expect(getFactorial(2)).toEqual(2)
    expect(getFactorial(5)).toEqual(120)
    expect(getFactorial(10)).toEqual(3628800)
  })
  it('Should return Fibonacci number', () => {
    expect(getFibonacci(1)).toEqual(1)
    expect(getFibonacci(2)).toEqual(1)
    expect(getFibonacci(5)).toEqual(5)
    expect(getFibonacci(10)).toEqual(55)
  })
  it('Should return Tower of Hanoi solution', () => {
    expect(towerOfHanoi(3)).toEqual(['AB', 'AC', 'BC', 'AB', 'CA', 'CB', 'AB'])
    expect(towerOfHanoi(4)).toEqual(['AB', 'AC', 'BC', 'AB', 'CA', 'CB', 'AB', 'AC', 'BC', 'BA', 'CA', 'BC', 'AB', 'AC', 'BC'])
    expect(towerOfHanoi(5).length).toEqual(31)
    expect(towerOfHanoi(6).length).toEqual(63)
    expect(towerOfHanoi(10).length).toEqual(1023)
  })
})
