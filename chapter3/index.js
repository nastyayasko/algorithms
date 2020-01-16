class List {
  constructor() {
    this.top = null
    this.last = {}
  }

  findItem(itemValue) {
    if (!this.top) return null
    let currentItem = this.top
    while (currentItem) {
      if (currentItem.value === itemValue) {
        return currentItem
      }
      currentItem = currentItem.next
    }
  }

  addItem(item) {
    item.next = null
    if (!this.top) {
      this.top = item
      this.last = item
      return
    }
    this.last.next = item
    this.last = item
  }

  addLoopItem(item, nextValue) {
    if (!this.top) {
      this.top = item
      this.findItem(item.value).next = this.findItem(nextValue)
      return
    }
    this.last.next = item
    this.findItem(item.value).next = this.findItem(nextValue)
    this.last = {}
  }

  // 2

  getMax() {
    if (!this.top) return null
    let currentItem = this.top
    let max = currentItem.value
    while (currentItem.next) {
      currentItem = currentItem.next
      if (currentItem.value > max) {
        max = currentItem.value
      }
    }
    return max;
  }

  // 9

  isSorted() {
    if (!this.top) return true
    let currentItem = this.top
    while (currentItem.next) {
      const nextItem = currentItem.next
      if (nextItem.value < currentItem.value) {
        return false
      }
      currentItem = nextItem
    }
    return true
  }

  // 12

  isListWithLoop() {
    if (!this.top) return false;
    let rabbit = this.top
    if (rabbit.next == null) return false;
    rabbit = rabbit.next
    if (rabbit.next == null) return false;
    let turtle = this.top
    while (rabbit.value !== turtle.value) {
      rabbit = rabbit.next
      if (rabbit.next == null) return false;
      rabbit = rabbit.next
      if (rabbit.next == null) return false;
      turtle = turtle.next
    }
    return true;
  }

}




class BidirectionalList {
  constructor() {
    this.top = null
    this.bottom = null
  }

  findItem(itemValue) {
    if (!this.top) return null
    let currentItem = this.top
    while (currentItem) {
      if (currentItem.value === itemValue) {
        return currentItem
      }
      currentItem = currentItem.next
    }
  }

  addFirstItem(item) {
    item.prev = null
    item.next = null
    this.top = item
    this.bottom = item
  }
  // 3

  addToTop(item) {
    if (!this.top) {
      this.addFirstItem(item)
      return
    }
    item.prev = null
    item.next = this.top
    this.top.prev = item
    this.top = item
  }

  // 4

  addToBottom (item) {
    if (!this.bottom) {
      this.addFirstItem(item)
      return
    }
    item.prev = this.bottom
    item.next = null
    this.bottom.next = item
    this.bottom = item
  }

  // 6

  removeListItem(item) {
    if (!this.top) return
    if (!item.prev) {
      this.top = item.next
      this.top.prev = null
      return
    }
    if (!item.next) {
      this.bottom = item.prev
      this.bottom.next = null
      return
    }
    item.prev.next = item.next
    item.next.prev = item.prev
    return
  }


  // 8

  insertValue(value) {
    const item = { value }
    if (!this.top) {
      this.addFirstItem(item)
      return
    }
    if (this.top.value > value) {
      this.top.prev = item
      item.prev = null
      item.next = this.top
      this.top = item
      return
    }
    if (this.bottom.value < value) {
      this.bottom.next = item
      item.prev = this.bottom
      item.next = null
      this.bottom = item
      return
    }
    let currentItem = this.top
    while (currentItem.value < value) {
      currentItem = currentItem.next
    }
    item.prev = currentItem.prev
    item.next = currentItem
    currentItem.prev.next = item
    currentItem.prev = item
  }

}

// 11

class PlanetList {
  constructor() {
    this.top = {
      nextDistance: null,
      nextMass: null,
      nextDiameter: null,
    }
  }
  addPlanet(item) {
    item.nextDistance = null
    item.nextMass = null
    item.nextDiameter = null
    if (!this.top.nextDistance) {
      this.top.nextDistance = item
      this.top.nextMass = item
      this.top.nextDiameter = item
      return
    }
    let currentItemByDistance = this.top.nextDistance
    while (currentItemByDistance.nextDistance !== null && currentItemByDistance.nextDistance.distance < item.distance) {
      currentItemByDistance = currentItemByDistance.nextDistance
    }
    item.nextDistance = currentItemByDistance.nextDistance
    currentItemByDistance.nextDistance = item

    let currentItemByMass = this.top.nextMass
    while (currentItemByMass.nextMass !== null && currentItemByMass.nextMass.mass < item.mass) {
      currentItemByMass = currentItemByMass.nextMass
    }
    item.nextMass = currentItemByMass.nextMass
    currentItemByMass.nextMass = item

    let currentItemByDiameter = this.top.nextDiameter
    while (currentItemByDiameter.nextDiameter !== null && currentItemByDiameter.nextDiameter.diameter < item.diameter) {
      currentItemByDiameter = currentItemByDiameter.nextDiameter
    }
    item.nextDiameter = currentItemByDiameter.nextDiameter
    currentItemByDiameter.nextDiameter = item
  }

  getPlanetListByDistance() {
    if (!this.top.nextDistance) return []
    const arr = []
    let currentItem = this.top.nextDistance
    while(currentItem) {
      arr.push(currentItem.name)
      currentItem = currentItem.nextDistance
    }
    return arr
  }

  getPlanetListByMass() {
    if (!this.top.nextMass) return []
    const arr = []
    let currentItem = this.top.nextMass
    while(currentItem) {
      arr.push(currentItem.name)
      currentItem = currentItem.nextMass
    }
    return arr
  }

  getPlanetListByDiameter() {
    if (!this.top.nextDiameter) return []
    const arr = []
    let currentItem = this.top.nextDiameter
    while(currentItem) {
      arr.push(currentItem.name)
      currentItem = currentItem.nextDiameter
    }
    return arr
  }
}


module.exports = {
  List,
  BidirectionalList,
  PlanetList,
 }

