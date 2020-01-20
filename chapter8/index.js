// 1

class HashTableDirect {
  constructor(size) {
    this.table = []
    this.table.length = size
  }

  hash(key) {
    return key.length % this.table.length
  }

  addItem(item) {
    const index = this.hash(item.key)
    if (!this.table[index]) {
      item.next = null
      this.table[index] = item
      return
    }
    item.next = this.table[index]
    this.table[index] = item
  }

  findItem(key) {
    const index = this.hash(key)
    if (!this.table[index]) return null
    let currentItem = this.table[index]
    while(currentItem) {
      if (currentItem.key === key) return currentItem
      currentItem = currentItem.next
    }
    return null
  }

  removeItem(key) {
    const index = this.hash(key)
    if (!this.table[index]) return
    let currentItem = this.table[index]
    if (currentItem.key === key) {
      this.table[index] = currentItem.next
      return
    }
    while(currentItem.next) {
      if (currentItem.next.key === key) {
        currentItem.next = currentItem.next.next
      }
    }
  }
}

// 4

class HashTableOpenLinear {
  constructor(size) {
    this.table = []
    this.table.length = size
  }

  hash(key) {
    return key.length % this.table.length
  }

  lineProb(index) {
    return (index + 1) % 5
  }

  addItem(item) {
    const index = this.hash(item.key)
    if (!this.table[index]  || !this.table[index].key ) {
      this.table[index] = item
      return
    }
    let freeIndex = this.lineProb(index)
    while(this.table[freeIndex] && freeIndex !== index) {
      freeIndex = this.lineProb(freeIndex)
    }
    if(freeIndex === index) return
    this.table[freeIndex] = item
  }

  findItem(key) {
    const index = this.hash(key)
    if (!this.table[index]) return null
    if (this.table[index].key === key) return this.table[index]
    let findIndex = this.table[index]
    let currentItem = this.table[findIndex]
    while(currentItem && findIndex !== index) {
      if (currentItem.key === key) return currentItem
      findIndex = this.lineProb(findIndex)
      currentItem = this.table[findIndex]
    }
    return null
  }
  removeItem(key) {
    const index = this.hash(key)
    if (!this.table[index]) return
    if (this.table[index].key === key) {
      this.table[index] = {key: null}
      return
    }
    let removeIndex = this.lineProb(index)
    let currentItem = this.table[removeIndex]
    while(currentItem && removeIndex !== index) {
      if (currentItem.key === key) {
        this.table[removeIndex] = {key: null}
        return
      }
      removeIndex = this.lineProb(removeIndex)
      currentItem = this.table[removeIndex]
    }
  }
}

// 5

class HashTableOpenQuadratic {
  constructor(size) {
    this.table = []
    this.table.length = size
    this.count = 0
  }

  hash(key) {
    return key.length % this.table.length
  }

  lineProb(index, step) {
    return ((index + step * step) % this.table.length)
  }

  addItem(item) {
    const index = this.hash(item.key)
    if (this.count === this.table.length) return
    if (!this.table[index]  || !this.table[index].key ) {
      this.table[index] = item
      this.count++
      return
    }
    let freeIndex = index
    let step = 1
    while(this.table[freeIndex]){
      freeIndex = this.lineProb(index, step)
      step++
    }
    this.table[freeIndex] = item
    this.count++
  }

  findItem(key) {
    const index = this.hash(key)
    if (!this.table[index]) return null
    const checkedItems = []
    for (let i = 0; i < this.table.length; i++) {
      checkedItems.push(false)
    }
    let findIndex = index
    let currentItem = this.table[findIndex]
    let step = 1
    while(currentItem) {
      if (currentItem.key === key) return currentItem
      checkedItems[findIndex] = true
      if (checkedItems.every(item => item)) return null
      findIndex = this.lineProb(index, step)
      currentItem = this.table[findIndex]
      step++
    }
    return null
  }
  removeItem(key) {
    const index = this.hash(key)
    if (!this.table[index]) return
    const checkedItems = []
    for (let i = 0; i < this.table.length; i++) {
      checkedItems.push(false)
    }
    let removeIndex = index
    let currentItem = this.table[removeIndex]
    let step = 1
    while(currentItem) {
      if (currentItem.key === key) {
        this.table[removeIndex] = {key: null}
        this.count--
        return
      }
      checkedItems[removeIndex] = true
      if (checkedItems.every(item => item)) return null
      removeIndex = this.lineProb(index, step)
      currentItem = this.table[removeIndex]
      step++
    }
  }
}

// 6

class HashTableOpenPseudoRandom {
  constructor(size) {
    this.table = []
    this.table.length = size
    this.count = 0
  }

  hash(key) {
    return key.length % this.table.length
  }

  lineProb(index, step) {
    const pseudo = Math.round(1.5 * index + 0.75)
    return ((index + step * pseudo) % this.table.length)
  }

  addItem(item) {
    const index = this.hash(item.key)
    if (this.count === this.table.length) return
    if (!this.table[index]  || !this.table[index].key ) {
      this.table[index] = item
      this.count++
      return
    }
    let freeIndex = index
    let step = 1
    while(this.table[freeIndex]){
      freeIndex = this.lineProb(index, step)
      step++
    }
    this.table[freeIndex] = item
    this.count++
  }

  findItem(key) {
    const index = this.hash(key)
    if (!this.table[index]) return null
    const checkedItems = []
    for (let i = 0; i < this.table.length; i++) {
      checkedItems.push(false)
    }
    let findIndex = index
    let currentItem = this.table[findIndex]
    while(currentItem) {
      if (currentItem.key === key) return currentItem
      checkedItems[findIndex] = true
      if (checkedItems.every(item => item)) return null
      findIndex = this.lineProb(index, step)
      currentItem = this.table[findIndex]
    }
    return null
  }
  removeItem(key) {
    const index = this.hash(key)
    if (!this.table[index]) return
    const checkedItems = []
    for (let i = 0; i < this.table.length; i++) {
      checkedItems.push(false)
    }
    let removeIndex = index
    let currentItem = this.table[removeIndex]
    while(currentItem) {
      if (currentItem.key === key) {
        this.table[removeIndex] = {key: null}
        this.count--
        return
      }
      checkedItems[removeIndex] = true
      if (checkedItems.every(item => item)) return null
      removeIndex = this.lineProb(index, step)
      currentItem = this.table[removeIndex]
    }
  }
}

// 7

class HashTableOpenDoubleHash {
  constructor(size) {
    this.table = []
    this.table.length = size
    this.count = 0
  }

  hash1(key) {
    return key.length % this.table.length
  }

  hash2(key, step) {
    return (Math.round((this.hash1(key) + step * 0.72 * (key.charCodeAt(0) * 0.2 + key.charCodeAt(key.length - 1) * 0.42))) % this.table.length)
  }

  addItem(item) {
    const index = this.hash1(item.key)
    if (this.count === this.table.length) return
    if (!this.table[index]  || !this.table[index].key ) {
      this.table[index] = item
      this.count++
      return
    }
    let freeIndex = index
    let step = 1
    while(this.table[freeIndex]){
      freeIndex = this.hash2(item.key, step)
      step++
    }
    this.table[freeIndex] = item
    this.count++
  }

  findItem(key) {
    const index = this.hash1(key)
    if (!this.table[index]) return null
    const checkedItems = []
    for (let i = 0; i < this.table.length; i++) {
      checkedItems.push(false)
    }
    let findIndex = index
    let currentItem = this.table[findIndex]
    while(currentItem) {
      if (currentItem.key === key) return currentItem
      checkedItems[findIndex] = true
      if (checkedItems.every(item => item)) return null
      findIndex = this.hash2(key, step)
      currentItem = this.table[findIndex]
    }
    return null
  }
  removeItem(key) {
    const index = this.hash1(key)
    if (!this.table[index]) return
    const checkedItems = []
    for (let i = 0; i < this.table.length; i++) {
      checkedItems.push(false)
    }
    let removeIndex = index
    let currentItem = this.table[removeIndex]
    while(currentItem) {
      if (currentItem.key === key) {
        this.table[removeIndex] = {key: null}
        this.count--
        return
      }
      checkedItems[removeIndex] = true
      if (checkedItems.every(item => item)) return null
      removeIndex = this.hash2(key, step)
      currentItem = this.table[removeIndex]
    }
  }
}

// 9

class OrderlyQuadratic {
  constructor(size) {
    this.table = []
    this.table.length = size
    this.count = 0
  }

  hash(key) {
    return key % this.table.length
  }

  lineProb(index, step) {
    return ((index + step * step) % this.table.length)
  }

  addItem(item) {
    const index = this.hash(item.key)
    if (this.count === this.table.length) return
    if (!this.table[index]) {
      this.table[index] = item
      this.count++
      return
    }
    let freeIndex = index
    let step = 1
    while(this.table[freeIndex]){
      if (this.table[freeIndex].key >= item.key && this.hash(this.table[freeIndex].key) === index) {
        const temp = this.table[freeIndex]
        this.table[freeIndex] = item
        item = temp
      }
      freeIndex = this.lineProb(index, step)
      step++
    }
    this.table[freeIndex] = item
    this.count++
  }

  findItem(key) {
    const index = this.hash(key)
    if (!this.table[index]) return null
    const checkedItems = []
    for (let i = 0; i < this.table.length; i++) {
      checkedItems.push(false)
    }
    let findIndex = index
    let currentItem = this.table[findIndex]
    let step = 1
    while(currentItem) {
      if (currentItem.key > key) return null
      if (currentItem.key === key) return currentItem
      checkedItems[findIndex] = true
      if (checkedItems.every(item => item)) return null
      findIndex = this.lineProb(index, step)
      currentItem = this.table[findIndex]
      step++
    }
    return null
  }
  removeItem(key) {
    const index = this.hash(key)
    if (!this.table[index]) return
    const checkedItems = []
    for (let i = 0; i < this.table.length; i++) {
      checkedItems.push(false)
    }
    let removeIndex = index
    let currentItem = this.table[removeIndex]
    let step = 1
    while(currentItem) {
      if (key < currentItem.key  && this.hash(currentItem.key) === index) return
      if (currentItem.key === key) {
        // step++
        // let nextIndex = this.lineProb(index, step)
        // let nextItem = this.table[nextIndex]
        // while (nextItem && this.hash(nextItem.key) === index) {
        //   if (nextItem.key > currentItem.key){
        //   console.log(currentItem, nextItem)
        //     currentItem = nextItem
        //     removeIndex = this.lineProb(index, step)
        //     nextItem = this.table[removeIndex]
        //     step++
        //   } else {
        //     console.log(currentItem, nextItem)
        //     removeIndex = this.lineProb(index, step)
        //     nextItem = this.table[removeIndex]
        //     step++
        //   }
        // }
        this.table[removeIndex] = null
        this.count--
        return
      }
      checkedItems[removeIndex] = true
      if (checkedItems.every(item => item)) return null
      removeIndex = this.lineProb(index, step)
      currentItem = this.table[removeIndex]
      step++
    }
  }
}


module.exports = {
  HashTableDirect,
  HashTableOpenLinear,
  HashTableOpenQuadratic,
  HashTableOpenPseudoRandom,
  HashTableOpenDoubleHash,
  OrderlyQuadratic,
}
