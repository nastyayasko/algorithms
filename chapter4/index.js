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


module.exports = {
  getSampleVariance,
  getStandardDeviation,
  getMiddle,
  removeItem,
}
