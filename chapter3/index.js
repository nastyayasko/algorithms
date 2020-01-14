class List {
  constructor() {
    this.top = {next: null}
    this.last = {}
  }

  getItem(itemValue) {
    if (!this.top.next) return null
    let currentItem = this.top.next
    while (currentItem) {
      if (currentItem.value === itemValue) {
        return currentItem
      }
      currentItem = currentItem.next
    }
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

  addLoopItem(item, nextValue) {
    if (!this.top.next) {
      this.top.next = item
      this.getItem(item.value).next = this.getItem(nextValue)
      return
    }
    this.last.next = item
    this.getItem(item.value).next = this.getItem(nextValue)
    this.last = {}
  }

  // 2

  getMax() {
    if (!this.top.next) return null
    let currentItem = this.top.next
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
    if (!this.top.next) return true
    let currentItem = this.top.next
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
    if (!this.top.next) return false;
    let rabbit = this.top.next
    if (rabbit.next == null) return false;
    rabbit = rabbit.next
    if (rabbit.next == null) return false;
    let turtle = this.top.next
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
    this.top = {value: null, next: null}
    this.bottom = {value: null, prev: null}
    this.last = {}
  }

  getItem(itemValue) {
    if (!this.top.next) return null
    let currentItem = this.top.next
    while (currentItem) {
      if (currentItem.value === itemValue) {
        return currentItem
      }
      currentItem = currentItem.next
    }
  }

  addFirstItem(item) {
    item.prev = this.top
    item.next = this.bottom
    this.top.next = item
    this.bottom.prev = item
    this.last = item
  }
  // 3

  addToTop(item) {
    if (!this.top.next) {
      this.addFirstItem(item)
      return
    }
    item.prev = this.top
    item.next = this.top.next
    item.next.prev = item
    this.top.next = item
  }

  // 4

  addToBottom (item) {
    if (!this.bottom.prev) {
      this.addFirstItem(item)
      return
    }
    item.prev = this.bottom.prev
    item.next = this.bottom
    item.prev.next = item
    this.bottom.prev = item
    this.last = item
  }

  // 6

  removeListItem(itemValue) {
    if (!this.top.next) return
    let currentItem = this.top.next
    while (currentItem) {
      if (currentItem.value === itemValue) {
        if (currentItem.next.value == null) {
          this.last = currentItem.prev
        }
        currentItem.prev.next = currentItem.next
        currentItem.next.prev = currentItem.prev
        return
      }
      currentItem = currentItem.next
    }
  }

  // 8

  insertValue(value) {
    const item = { value }
    if (!this.top.next) {
      this.addFirstItem(item)
      return
    }
    let currentItem = this.top.next
    while (currentItem.value !== null && currentItem.value < value) {
      currentItem = currentItem.next
    }
    item.prev = currentItem.prev
    item.next = currentItem
    currentItem.prev.next = item
    currentItem.prev = item
    if (currentItem.value == null) {
      this.last = currentItem.prev
    }
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

