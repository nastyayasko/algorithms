// 1

// 2

const getMax = list => {
  let currentItem = list[0]
  let max = currentItem.value;
  while (currentItem.next != null) {
    currentItem = list.find(({ value }) => value ===  currentItem.next)
      if (currentItem.value > max) {
        max = currentItem.value
      }
  }
  return max;
}

// 3
const addToTop = (list, value) => {
  list[0].prev = value
  const item ={value}
  item.prev = null
  item.next = list[0].value
  list.unshift(item)
  return list
}

// 4
const addToBottom = (list, value) => {
  list[list.length - 1].next = value
  const item ={value}
  item.prev = list[list.length - 1].value
  item.next = null
  list.push(item)
  return list
}

// 6
const removeListItem = (list, itemValue) => {
  let index = null;
  const item = list.find((listItem, i) => {
    if (listItem.value === itemValue) {
      index = i
      return listItem
    }
  })
  list[index - 1].next = item.next
  if (item.next !== null) {
    list[index + 1].prev = item.prev
  }
  list.splice(index, 1)
  return list
}

// 8

const insertValue = (list, value) => {
  let currentItem = list[0]
  let index = 0
  if (value < currentItem.value) {
    list.splice(index, 0, { value, prev: currentItem.prev, next: currentItem.value })
    list.forEach(item => {
      if (item.value === currentItem.value) {
        item.prev = value
      }
    })
    return
  }
  while (value > currentItem.value) {
    if (currentItem.next == null) {
      list.forEach((item, i) => {
        if (item.value === currentItem.value) {
          item.next = value
          index = i + 1
        }
      })
      list.splice(index, 0, { value, prev: currentItem.value, next: null })
      return
    }
    currentItem = list.find((listItem, i) => {
      if (listItem.value === currentItem.next) {
        index = i
        return listItem
      }
    })
  }
  list.splice(index, 0, { value, prev: currentItem.prev, next: currentItem.value })
  list.forEach(item => {
    if (item.value === currentItem.value) {
      item.prev = value
    }
  })
}

// 9
const isSorted = list => {
  let currentItem = list[0]
  while (currentItem.next != null) {
    const nextItem = list.find(({ value }) => value ===  currentItem.next)
    if (nextItem.value < currentItem.value) {
      return false
    }
    currentItem = nextItem
  }
  return true
}

// 11

const getPlanetList = (list, condition = 'distance') => {
  const getMin = (list, condition, next)=> {
    let currentItem = list[0]
    let min = currentItem[condition];
    while (currentItem[next] != null) {
      currentItem = list.find(({ name }) => name ===  currentItem[next])
      if (currentItem[condition] < min) {
        min = currentItem.value
      }
    }
    return list.find(item => item[condition] === min);
  }
  if (condition === 'distance') {
    let currentItem = getMin(list, condition, 'nextDistance')
    const sortList = [currentItem]
    while (currentItem.nextDistance != null) {
      currentItem = list.find(({ name }) => name ===  currentItem.nextDistance)
      sortList.push(currentItem)
    }
    return sortList
  }
  if (condition === 'mass') {
    let currentItem = getMin(list, condition, 'nextMass')
    const sortList = [currentItem]
    while (currentItem.nextMass != null) {
      currentItem = list.find(({ name }) => name ===  currentItem.nextMass)
      sortList.push(currentItem)
    }
    return sortList
  }
  if (condition === 'diameter') {
    let currentItem = getMin(list, condition, 'nextDiameter')
    const sortList = [currentItem]
    while (currentItem.nextDiameter != null) {
      currentItem = list.find(({ name }) => name ===  currentItem.nextDiameter)
      sortList.push(currentItem)
    }
    return sortList
  }
}

// 12

const isListWithLoop = list => {
  if (!list.length || list[0].next == null) return false;
  let turtle = list[0];
  let rabbit = list.find(item => item.value === turtle.next);
  if (rabbit.next == null) return false;
  while (rabbit.value !== turtle.value) {
    turtle = list.find(item => item.value === turtle.next)
    rabbit = list.find(item => item.value === rabbit.next)
    if (rabbit.next == null) return false;
    if (rabbit.value === turtle.value) return true;
    rabbit = list.find(item => item.value === rabbit.next)
    if (rabbit.next == null) return false;
  }
  return true;
}


module.exports = {
  getMax,
  addToTop,
  addToBottom,
  removeListItem,
  insertValue,
  isSorted,
  getPlanetList,
  isListWithLoop,
}

