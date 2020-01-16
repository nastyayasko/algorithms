// 1

const linearSearch = (arr, value) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i
    }
  }
  return null
}

// 3

const listsLinearSearch = (list, value) => {
  if (list.top.next == null) return null
  let currentItem = list.top.next
  while (currentItem != null) {
    if (currentItem.value === value) {
      return currentItem
    }
    currentItem = currentItem.next
  }
  return null
}

// 4

const binarySearch = (arr, value) => {
  let min = 0
  let max = arr.length - 1
  while (min <= max){
    const mid = Math.round((min + max) / 2)
    if (value < arr[mid]) {
      max = mid - 1
    }
    if (value > arr[mid]) {
      min = mid + 1
    }
    if (value === arr[mid]) return mid
  }
  return null
}

// 6
const interpolationSearch = (arr, value) => {
  let min = 0
  let max = arr.length - 1
  if (value > arr[max] || value < arr[min] ) return null
  while (min <= max){
    const mid = Math.round(min + (max - min) * ((value - arr[min]) / (arr[max] - arr[min])))
    if (value < arr[mid]) {
      max = mid - 1
    }
    if (value > arr[mid]) {
      min = mid + 1
    }
    if (value === arr[mid]) return mid
  }
  return null
}

// 9

const binarySearchFirstItem = (arr, value) => {
  let min = 0
  let max = arr.length - 1
  while (min <= max){
    let mid = Math.round((min + max) / 2)
    if (value < arr[mid]) {
      max = mid - 1
    }
    if (value > arr[mid]) {
      min = mid + 1
    }
    if (value === arr[mid]) {
      for (let i = mid - 1; i >= min; i--) {
        if (arr[i] !== value) {
          return mid
        }
        mid = i
      }
      return mid
    }
  }
  return null
}


const interpolationSearchFirstItem = (arr, value) => {
  let min = 0
  let max = arr.length - 1
  if (value > arr[max] || value < arr[min] ) return null
  while (min <= max){
    let mid = Math.round(min + (max - min) * ((value - arr[min]) / (arr[max] - arr[min])))
    if (value < arr[mid]) {
      max = mid - 1
    }
    if (value > arr[mid]) {
      min = mid + 1
    }
    if (value === arr[mid]) {
      for (let i = mid - 1; i >= min; i--) {
        if (arr[i] !== value) {
          return mid
        }
        mid = i
      }
      return mid
    }
  }
  return null
}



class List {
  constructor() {
    this.top = {next: null}
    this.last = {}
  }

  addItem(item) {
    item.next = null
    if (!this.top.next) {
      this.top.next = item
      this.last = item
      return
    }
    this.last.next = item
    this.last = item
  }
}

module.exports = {
  linearSearch,
  List,
  listsLinearSearch,
  binarySearch,
  interpolationSearch,
  binarySearchFirstItem,
  interpolationSearchFirstItem,
}
