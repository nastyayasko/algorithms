const {
  getSampleVariance,
  getStandardDeviation,
  getMiddle,
  removeItem,
} = require('./index')


describe('Arrays', () => {
  const arr = [0, 1, 2, 3]
  const arr2 = [0, 1, 2, 3, 4]
  it('Should get sample variance', () => {
    expect(getSampleVariance(arr)).toEqual(1.25)
  })
  it('Should get standard deviation', () => {
    expect(getStandardDeviation(arr)).toEqual(Math.sqrt(1.25))
  })
  it('Should get middle', () => {
    expect(getMiddle(arr)).toEqual(1.5)
    expect(getMiddle(arr2)).toEqual(2)
  })
  it('Should remove item from array', () => {
    removeItem(arr, 1)
    removeItem(arr2, 2)
    expect(arr[1]).toEqual(2)
    expect(arr[2]).toEqual(3)
  })
})
