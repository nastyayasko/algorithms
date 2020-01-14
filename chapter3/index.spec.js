const {
  List,
  BidirectionalList,
  PlanetList,
} = require('./index')

describe('Linked lists', () => {
  const list1 = new List()
  list1.addItem({ value: 5 })
  list1.addItem({ value: 2 })
  list1.addItem({ value: -1 })
  list1.addItem({ value: 12 })
  list1.addItem({ value: 0 })
  const list2 = new List()
  list2.addItem({ value: 1 })
  list2.addItem({ value: 2 })
  list2.addItem({ value: 3 })
  list2.addItem({ value: 4 })
  list2.addItem({ value: 5 })
  it('get max value from list', () => {

    const max = list1.getMax()
    expect(max).toEqual(12)
  })
  it('add item to the top of list', () => {
    const list = new BidirectionalList()
    list.addToTop({value: 'B'})
    expect(list.top.next.value).toEqual('B')
    expect(list.bottom.prev.value).toEqual('B')
    expect(list.last.value).toEqual('B')
    list.addToTop({value: 'A'})
    expect(list.top.next.value).toEqual('A')
    expect(list.top.next.next.value).toEqual('B')
    expect(list.bottom.prev.value).toEqual('B')
  })
  it('add item to the bottom of list', () => {
    const list = new BidirectionalList()
    list.addToBottom({value: 'A'})
    expect(list.top.next.value).toEqual('A')
    expect(list.bottom.prev.value).toEqual('A')
    expect(list.last.value).toEqual( 'A')
    list.addToBottom({value: 'B'})
    expect(list.top.next.next.value).toEqual('B')
    expect(list.bottom.prev.value).toEqual('B')
    expect(list.last.value).toEqual('B')
  })
  it('remove item from list', () => {
    const list = new BidirectionalList()
    list.addToBottom({value: 'A'})
    list.addToBottom({value: 'B'})
    list.addToBottom({value: 'C'})
    list.addToBottom({value: 'D'})
    list.removeListItem('B')
    expect(list.getItem('A').next.value).toEqual('C')
    expect(list.getItem('C').prev.value).toEqual('A')
    list.removeListItem('A')
    expect(list.top.next.value).toEqual('C')
    expect(list.getItem('C').prev.value).toEqual(null)
    list.removeListItem('D')
    expect(list.bottom.prev.value).toEqual('C')
    expect(list.getItem('C').next.value).toEqual(null)
    expect(list.last.value).toEqual('C')
  })
  it('insert value in sorted list', () => {
    const list = new BidirectionalList()
    list.addToBottom({value: 1})
    list.addToBottom({value: 2})
    list.addToBottom({value: 4})
    list.addToBottom({value: 5})
    list.insertValue(3)
    expect(list.getItem(2).next.value).toEqual(3)
    expect(list.getItem(4).prev.value).toEqual(3)
    expect(list.getItem(3).prev.value).toEqual(2)
    expect(list.getItem(3).next.value).toEqual(4)
    list.insertValue(6)
    expect(list.getItem(5).next.value).toEqual(6)
    expect(list.bottom.prev.value).toEqual(6)
    expect(list.last.value).toEqual(6)
    expect(list.getItem(6).prev.value).toEqual(5)
    expect(list.getItem(6).next.value).toEqual(null)
    list.insertValue(0)
    expect(list.getItem(1).prev.value).toEqual(0)
    expect(list.top.next.value).toEqual(0)
    expect(list.getItem(0).prev.value).toEqual(null)
    expect(list.getItem(0).next.value).toEqual(1)
  })
  it(`Should return true/false if list is/isn't sorted`, () => {
    expect(list1.isSorted()).toBeFalsy()
    expect(list2.isSorted()).toBeTruthy()
  })
  it(`Should sort list according to condition`, () => {
    const planets = new PlanetList()
    planets.addPlanet({
       name: 'Mercury',
       distance: 57900000,
       mass: 1,
       diameter: 4878,
     })
    planets.addPlanet({
      name: 'Venus',
      distance: 108160000,
      mass: 3,
      diameter: 12104,
     })
    planets.addPlanet({
      name: 'Earth',
      distance: 149600000,
      mass: 4,
      diameter: 12756,
     })
    planets.addPlanet({
      name: 'Mars',
      distance: 227936640,
      mass: 2,
      diameter: 6794,
     })
    planets.addPlanet({
      name: 'Jupiter',
      distance: 778369000,
      mass: 8,
      diameter: 142984,
     })
    planets.addPlanet({
      name: 'Saturn',
      distance: 1427034000,
      mass: 7,
      diameter: 120536,
     })
    planets.addPlanet({
      name: 'Uranus',
      distance: 2870658186,
      mass: 5,
      diameter: 51118,
     })
    planets.addPlanet({
      name: 'Neptune',
      distance: 4496976000,
      mass: 6,
      diameter: 49532,
     })
    expect(planets.getPlanetListByDistance()).toEqual( ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus',  'Neptune'])
    expect(planets.getPlanetListByMass()).toEqual(['Mercury', 'Mars', 'Venus', 'Earth', 'Uranus',  'Neptune', 'Saturn', 'Jupiter'])
    expect(planets.getPlanetListByDiameter()).toEqual(['Mercury', 'Mars', 'Venus', 'Earth', 'Neptune', 'Uranus', 'Saturn',  'Jupiter'])
  })
  it(`Should return true/false if list with/without loop`, () => {
    const list1 = new List()
    list1.addItem({ value: 'A'})
    list1.addItem({ value: 'B' })
    list1.addItem({ value: 'C' })
    list1.addItem({ value: 'D' })
    list1.addLoopItem({ value: 'E' }, 'C')
    const list2 = new List()
    const list3 = new List()
    list3.addItem({ value: 'A'})
    list3.addItem({ value: 'B' })
    list3.addItem({ value: 'C' })
    list3.addItem({ value: 'D' })
    const list4 = new List()
    list4.addLoopItem({ value: 'A' }, 'A')

    expect(list1.isListWithLoop()).toBeTruthy()
    expect(list2.isListWithLoop()).toBeFalsy()
    expect(list3.isListWithLoop()).toBeFalsy()
    expect(list4.isListWithLoop()).toBeTruthy()
  })
})
