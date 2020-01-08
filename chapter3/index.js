// 1

// 2

const getMax = list => {
  let max = list[0].value;
  for (let i = 1; i < list.length; i++) {
    if (list[i].value > max) {
      max = list[i].value
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
  let index;
  const item = list.find((listItem, i) => {
    if (listItem.value === itemValue) {
      index = i
      return listItem
    }
  })
  list[index-1].next = item.next
  if (item.next !== null) {
    list[index+1].prev = item.prev
  }
  list.splice(index, 1)
  return list
}

// 8

const insertValue = (list, value) => {
  for (let i = 0; i < list.length; i++) {
    if (list[i].value > value) {
      list.splice(3, 0, { value })
      break;
    }
  }
}

// 9
const isSorted = list => {
  for (let i = 1; i < list.length; i++) {
    if (list[i].value < list[i-1].value) {
      return false
    }
  }
  return true
}

// 11

class Planet {
  constructor(name, distance, mass, diameter) {
    this.name = name;
    this.distance = distance;
    this.mass = mass;
    this.diameter = diameter;
  }
}

const getPlanetList = (list, condition = 'distance') => {
  if (condition === 'distance') {
    return list.sort((a, b) => a.distance - b.distance)
  }
  if (condition === 'mass') {
    return list.sort((a, b) => a.mass - b.mass)
  }
  if (condition === 'diameter') {
    return list.sort((a, b) => a.diameter - b.diameter)
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

