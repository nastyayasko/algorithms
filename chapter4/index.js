// 1
const getSampleVariance = arr => {
  let summ = 0
  arr.forEach(e => {
    summ += e
  });
  const average = summ / arr.length

  let summOfElements = 0
  arr.forEach(e => {
    summOfElements += Math.pow((e - average), 2)
  });
  return summOfElements / arr.length
}


// 2

const getStandardDeviation = arr => Math.sqrt(getSampleVariance(arr))

// 3

const getMiddle = arr => {
  if (arr.length % 2) {
    return arr[Math.floor(arr.length / 2)]
  }
  return (arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2
}


// 4

const removeItem = (arr, index) => {
  for (let i = index + 1; i < arr.length; i++) {
    arr[i - 1] = arr[i]
  }
  arr.length -= 1
  return arr
}

// 5

const topTriangle = size => {
  const arr = []
  for (let i = 0; i < size; i++) {
    let arrRow = []
    for (let j = 0; j < size; j++) {
      if (j < i) {
        arrRow.push(0)
      } else {
        arrRow.push(1)
      }
    }
    arr.push(arrRow)
  }
  return arr
}

// 6

const topLeftTriangle = size => {
  const arr = []
  for (let i = 0; i < size; i++) {
    let arrRow = []
    for (let j = 0; j < size; j++) {
      if (size - 1 - j < i) {
        arrRow.push(0)
      } else {
        arrRow.push(1)
      }
    }
    arr.push(arrRow)
  }
  return arr
}


// 9

const distanceArray = (row, col) => {
  const arr = []
  for (let i = 0; i < row; i++) {
    let arrRow = []
    for (let j = 0; j < col; j++) {
      let distance = (j - 0)
      if ((i - 0) < distance) {
        distance = (i - 0)
      }
      if ((col - 1 - j) < distance) {
        distance = (col - 1 - j)
      }
      if ((row - 1 - i) < distance) {
        distance = (row - 1 - i)
      }
      arrRow.push(distance)
    }
    arr.push(arrRow)
  }
  return arr
}

// 11

const topTriangleWithBreak = size => {
  const arr = []
  for (let i = 0; i < size; i++) {
    let arrRow = []
    for (let j = 0; j < size; j++) {
      if (i < j) break
      arrRow.push(1)
    }
    arr.push(arrRow)
  }
  return arr
}

// 12

const sumOfTriangleArrays = (arr1, arr2) => {
  if (arr1.length != arr2.length || arr1[0].length != arr2[0].length) return null
  const arr = []
  for (let i = 0; i < arr1.length; i++) {
    let arrRow = []
    for (let j = 0; j < arr2.length; j++) {
      arrRow.push(arr1[i][j] + arr2[i][j])
    }
    arr.push(arrRow)
  }
  return arr
}

// 13

const multiplyTriangleArrays = (arr1, arr2) => {
  if (arr1.length != arr2.length || arr1[0].length != arr2[0].length) return null
  const arr = []
  for (let i = 0; i < arr1.length; i++) {
    let arrRow = []
    for (let j = 0; j < arr2.length; j++) {
      let result = 0
      for (let k = 0; k < arr2.length; k++) {
        result = result + arr1[i][k] * arr2[k][j]
      }
      arrRow.push(result)
    }
    arr.push(arrRow)
  }
  return arr
}


module.exports = {
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
}
