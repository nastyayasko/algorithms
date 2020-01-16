// 2

const getReverse = stack => {
  const reverse = []
  const length = stack.length
  for (let i = 0; i < length; i++) {
    reverse.push(stack.pop())
  }
  return reverse
}

// 3

const getSortedStack = stack => {
  if (!stack.length) return []
  const tempStack = []
  for (let i = 0; i < stack.length; i++) {
    const unsorted = stack.length - 1 - i
    const current = stack.pop()
    for (let j = 0; j < unsorted; j++) {
      tempStack.push(stack.pop())
    }
    const sorted = stack.length
    if (sorted) {
      for (let k = 0; k < sorted; k++) {
        const sortedItem = stack.pop()
        if (current <= sortedItem) {
          stack.push(sortedItem)
          break
        }
        tempStack.push(sortedItem)
      }
    }
    tempStack.push(current)
    const tempStackLength = tempStack.length
    for (let l = 0; l < tempStackLength; l++) {
      stack.push(tempStack.pop())
    }
  }
  return stack
}

// 6

const getSortedStackByChoice = stack => {
  if (!stack.length) return []
  const tempStack = []
  for (let i = 0; i < stack.length; i++) {
    const unsorted = stack.length - 1 - i
    let largestItem = stack.pop()
    for (let j = 0; j < unsorted; j++) {
      const current = stack.pop()
      if (current > largestItem) {
        tempStack.push(largestItem)
        largestItem = current
      } else {
        tempStack.push(current)
      }
    }
    stack.push(largestItem)
    for (let k = 0; k < tempStack.length; k++) {
      stack.push(tempStack.pop())
    }
  }
  return stack
}

// 8

class Stack {
  constructor() {
    this.stack = [];
  }
  addItem (item) {
    if (!this.stack.length){
      this.stack.push(item)
      return
    }
    const tempStack = []
    const stackLength = this.stack.length
    for (let i = 0; i < stackLength; i++) {
      const current = this.stack.pop()
      if (item <= current) {
        this.stack.push(current)
        break
      }
      tempStack.push(current)
    }
    tempStack.push(item)
    const tempStackLength = tempStack.length
    for (let j = 0; j < tempStackLength; j++) {
      this.stack.push(tempStack.pop())
    }
  }
  removeItem () {
    this.stack.pop()
  }
}

// 9

class Deck {
  constructor() {
    this.deck = [];
  }
  addItem (item) {
    if (item === 'high') return this.deck.unshift(item);
    if (item === 'low') return this.deck.push(item);
  }
}

// 11

const getSortedQueue = queue => {
  if (!queue.length) return []
  const tempQueue = []
  for (let i = 0; i < queue.length; i++) {
    const unsorted = queue.length - 1 - i
    let current = queue.shift()
    for (let j = 0; j < unsorted; j++) {
      tempQueue.push(queue.shift())
    }
    const sorted = queue.length
    if (sorted) {
      for (let k = 0; k < sorted; k++) {
        const sortedItem = queue.shift()
        if (current != null && current <= sortedItem) {
          tempQueue.push(current)
          current = null
        }
        tempQueue.push(sortedItem)
      }
    }
    if (current != null) {
      tempQueue.push(current)
    }
    const tempQueueLength = tempQueue.length
    for (let l = 0; l < tempQueueLength; l++) {
      queue.push(tempQueue.shift())
    }
  }
  return queue
}

// 12

const getSortedQueueByChoice = queue => {
  if (!queue.length) return []
  const tempQueue = []
  for (let i = 0; i < queue.length; i++) {
    let largestItem = queue.shift()
    const length = queue.length
    for (let j = 0; j < length; j++) {
      const current = queue.shift()
      if (current > largestItem) {
        tempQueue.push(largestItem)
        largestItem = current
      } else {
        tempQueue.push(current)
      }
    }
    tempQueue.push(largestItem)
    const tempQueueLength = tempQueue.length
    for (let k = 0; k < tempQueueLength; k++) {
      queue.push(tempQueue.shift())
    }
  }
  return queue
}

module.exports = {
  getReverse,
  getSortedStack,
  getSortedStackByChoice,
  Stack,
  Deck,
  getSortedQueue,
  getSortedQueueByChoice,
}



