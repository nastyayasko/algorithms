const {
  getSampleVariance,
  getStandardDeviation,
  getMiddle,
  removeItem,
  topTriangle,
  topLeftTriangle,
  distanceArray,
  topTriangleWithBreak,
  sumOfTriangleArrays,
  multiplyTriangleArrays,
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
  it('Should return top triangle', () => {
    const triangle = topTriangle(5)
    expect(triangle[0][0]).toEqual(1)
    expect(triangle[0][4]).toEqual(1)
    expect(triangle[4][0]).toEqual(0)
    expect(triangle[4][4]).toEqual(1)
  })
  it('Should return top left triangle', () => {
    const triangle = topLeftTriangle(5)
    expect(triangle[0][0]).toEqual(1)
    expect(triangle[0][4]).toEqual(1)
    expect(triangle[4][0]).toEqual(1)
    expect(triangle[4][4]).toEqual(0)
  })
  it('Should return array with distances', () => {
    const arr = distanceArray(6, 9)
    expect(arr[1][1]).toEqual(1)
    expect(arr[2][3]).toEqual(2)
    expect(arr[4][3]).toEqual(1)
    expect(arr[5][3]).toEqual(0)
  })
  it('Should return triangle array with break', () => {
    const arr = topTriangleWithBreak(6)
    expect(arr[0].length).toEqual(1)
    expect(arr[1].length).toEqual(2)
    expect(arr[2].length).toEqual(3)
    expect(arr[5].length).toEqual(6)
  })
  it('Should sum triangle arrays', () => {
    const arr = sumOfTriangleArrays([[1,0,0],[1,1,0],[1,1,1]],[[1,0,0],[1,1,0],[1,1,1]])
    expect(arr.length).toEqual(3)
    expect(arr[0][0]).toEqual(2)
    expect(arr[0][2]).toEqual(0)
    const arr2 = sumOfTriangleArrays([[1,0,0],[1,1,0],[1,1,1]],[[1]])
    expect(arr2).toEqual(null)
  })
  it('Should multiply triangle arrays', () => {
    const arr = multiplyTriangleArrays([[1,0,0],[1,1,0],[1,1,1]],[[1,0,0],[1,1,0],[1,1,1]])
    expect(arr.length).toEqual(3)
    expect(arr[0][0]).toEqual(1)
    expect(arr[2][0]).toEqual(3)
  })
})
