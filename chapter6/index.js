// 1-2

const insertionSort = arr => {
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] <= arr[j]) {
        const current = arr.splice(i, 1)
        arr.splice(j, 0, current[0])
        break
      }
    }
  }
  return arr
}

// 3

const selectionSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    let min = arr[i + 1]
    let index = i + 1
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < min) {
        min = arr[j]
        index = j
      }
    }
    if (arr[i] > min) {
      arr.splice(index, 1)
      const current = arr.splice(i, 1, min)
      arr.splice(index, 0, current[0])
    }
  }
  return arr
}

// 5 - 6

const bubbleSort = arr => {
  let isUnsorted = true
  while (isUnsorted) {
    isUnsorted = false
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < arr[i - 1]) {
        arr.splice(i-1, 0, arr.splice(i,1)[0])
        isUnsorted = true
      }
    }
    isUnsorted = false
    for (let j = arr.length - 1; j >= 0; j--) {
      if (arr[j] < arr[j - 1]) {
        arr.splice(j - 1, 0, arr.splice(j, 1)[0])
        isUnsorted = true
      }
    }
  }
  return arr
}

// 7

const heapSort = arr => {
  for (let i = 1; i < arr.length; i++) {
    let parentIndex = Math.floor((i - 1) / 2)
    let current = i
    while (arr[current] > arr[parentIndex]) {
      const parent = arr.splice(parentIndex, 1)
      arr.splice(parentIndex, 0, arr.splice(current - 1, 1)[0])
      arr.splice(current, 0, parent[0])
      current = parentIndex
      parentIndex = Math.floor((parentIndex - 1) / 2)
    }
  }
  return arr
}

// 9

const pyramidalSort = arr => {
  let heap = heapSort(arr)
  const sortedArr = []
  for (let i = arr.length - 1; i >= 0; i--) {
    sortedArr.push(heap.shift())
    heap = heapSort(heap)
  }
  return sortedArr
}

// 11

const quickSort = (arr, start = 0, end = arr.length) => {
  if (arr.length) {
    let middle = start
    for (let i = start + 1; i < end; i++) {
      if (arr[i] < arr[middle]) {
        arr.splice(middle, 0, arr.splice(i, 1)[0])
        middle++
      }
    }
    if (middle - 1 > start) {
      quickSort(arr, start, middle - 1)
    }
    if (middle + 1 < end) {
      quickSort(arr, middle + 1, end)
    }
  }
  return arr
}

// 15

const countSort = (arr, max) => {
  const newArr = []
  for (let i = 0; i <= max; i++) {
    let count = 0
    for (let j = 0; j < arr.length; j++) {
      if(arr[j] === i){
        count++
      }
    }
    for (let k = 0; k < count; k++) {
      newArr.push(i)
    }
  }
  return newArr
}

// 18

const blockSort = (arr, count = 2) => {
  let minValue = arr[0]
  let maxValue = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minValue) {
      minValue = arr[i]
    }
    if (arr[i] > maxValue) {
      maxValue = arr[i]
    }
  }
  const blockSize = (maxValue + 1 - minValue) / count
  const blocks = []
  for (let k = 0; k < count; k++) {
    blocks.push([])
  }
  for (let j = 0; j < arr.length; j++) {
    const blockIndex = Math.floor((arr[j] - minValue) / blockSize)
    blocks[blockIndex].push(arr[j])
  }
  let newArr = []
  for (let l = 0; l < count; l++) {
    newArr.push(...insertionSort(blocks[l]))
  }
  return newArr
}



module.exports = {
  insertionSort,
  selectionSort,
  bubbleSort,
  heapSort,
  pyramidalSort,
  quickSort,
  countSort,
  blockSort,
}
