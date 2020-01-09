const {
  getMax,
  addToTop,
  addToBottom,
  removeListItem,
  insertValue,
  isSorted,
  getPlanetList,
  isListWithLoop
} = require('./index')

describe('Linked lists', () => {
  const list1 = [
    {
      value: 5,
      next: 2,
    },
    {
      value: 2,
      next: -1,
    },
    {
      value: -1,
      next: 12,
    },
    {
      value: 12,
      next: 0,
    },
    {
      value: 0,
      next: null,
    },
  ]
  const list2 = [
    {
      value: 1,
      next: 2,
    },
    {
      value: 2,
      next: 3,
    },
    {
      value: 3,
      next: 4,
    },
    {
      value: 4,
      next: 5,
    },
    {
      value: 5,
      next: null,
    },
  ]
  it('get max value from list', () => {
    const max = getMax(list1)
    expect(max).toEqual(12)
  })
  it('add item to the top of list', () => {
    const list = [
      {
        value: 'A',
        prev: null,
        next: 'B',
      },
      {
        value: 'B',
        prev: 'A',
        next: 'C',
      },
      {
        value: 'C',
        prev: 'B',
        next: 'D',
      },
      {
        value: 'D',
        prev: 'C',
        next: null,
      },
    ]
    const newList = addToTop(list, 'J')
    expect(newList[0]).toEqual({value: 'J', prev: null, next: 'A'})
    expect(newList[1]).toEqual({value: 'A', prev: 'J', next: 'B'})
  })
  it('add item to the bottom of list', () => {
    const list = [
      {
        value: 'A',
        prev: null,
        next: 'B',
      },
      {
        value: 'B',
        prev: 'A',
        next: 'C',
      },
      {
        value: 'C',
        prev: 'B',
        next: 'D',
      },
      {
        value: 'D',
        prev: 'C',
        next: null,
      },
    ]
    const newList = addToBottom(list, 'J')
    expect(newList[newList.length - 1]).toEqual({value: 'J', prev: 'D', next: null})
    expect(newList[newList.length - 2]).toEqual({value: 'D', prev: 'C', next: 'J'})
  })
  it('remove item from list', () => {
    const newArr = removeListItem(list1, 2)
    expect(newArr[1].value).toEqual(-1)
  })
  it('insert value in sorted list', () => {
    const list = [
      {
        value: 1,
        prev: null,
        next: 2,
      },
      {
        value: 2,
        prev: 1,
        next: 3,
      },
      {
        value: 3,
        prev: 2,
        next: 5,
      },
      {
        value: 5,
        prev: 3,
        next: 6,
      },
      {
        value: 6,
        prev: 5,
        next: null,
      },
    ]
    insertValue(list, 4)
    expect(list[3].value).toEqual(4)
    expect(list[4].prev).toEqual(4)
    insertValue(list, 0)
    expect(list[0].value).toEqual(0)
    expect(list[1].prev).toEqual(0)
    insertValue(list, 7)
    expect(list[7].value).toEqual(7)
    expect(list[6].next).toEqual(7)
  })
  it(`Should return true/false if list is/isn't sorted`, () => {
    expect(isSorted(list1)).toBeFalsy()
    expect(isSorted(list2)).toBeTruthy()
  })
  it(`Should sort list according to condition`, () => {
    const planets = [
      {
        name: 'Mercury',
        distance: 57900000,
        mass: 1,
        diameter: 4878,
        nextDistance: 'Venus',
        nextMass: 'Mars',
        nextDiameter: 'Mars',
      },
      {
        name: 'Venus',
        distance: 108160000,
        mass: 3,
        diameter: 12104,
        nextDistance: 'Earth',
        nextMass: 'Earth',
        nextDiameter: 'Earth',
      },
      {
        name: 'Earth',
        distance: 149600000,
        mass: 4,
        diameter: 12756,
        nextDistance: 'Mars',
        nextMass: 'Uranus',
        nextDiameter: 'Neptune',
      },
      {
        name: 'Mars',
        distance: 227936640,
        mass: 2,
        diameter: 6794,
        nextDistance: 'Jupiter',
        nextMass: 'Venus',
        nextDiameter: 'Venus',
      },
      {
        name: 'Jupiter',
        distance: 778369000,
        mass: 8,
        diameter: 142984,
        nextDistance: 'Saturn',
        nextMass: null,
        nextDiameter: null,
      },
      {
        name: 'Saturn',
        distance: 1427034000,
        mass: 7,
        diameter: 120536,
        nextDistance: 'Uranus',
        nextMass: 'Jupiter',
        nextDiameter: 'Jupiter',
      },
      {
        name: 'Uranus',
        distance: 2870658186,
        mass: 5,
        diameter: 51118,
        nextDistance: 'Neptune',
        nextMass: 'Neptune',
        nextDiameter: 'Saturn',
      },
      {
        name: 'Neptune',
        distance: 4496976000,
        mass: 6,
        diameter: 49532,
        nextDistance: null,
        nextMass: 'Saturn',
        nextDiameter: 'Uranus',
      },
    ]

    expect(getPlanetList(planets)[4].name).toBe('Jupiter')
    expect(getPlanetList(planets, 'mass')[4].name).toBe('Uranus')
    expect(getPlanetList(planets, 'diameter')[4].name).toBe('Neptune')
  })
  it(`Should return true/false if list with/without loop`, () => {
    const list2 = [
      {
        value: 'A',
        next: 'B',
      },
      {
        value: 'B',
        next: 'C',
      },
      {
        value: 'C',
        next: 'D',
      },
      {
        value: 'D',
        next: 'B',
      },
    ]
    const list3 = [
      {
        value: 'A',
        next: 'B',
      },
      {
        value: 'B',
        next: 'C',
      },
      {
        value: 'C',
        next: 'D',
      },
      {
        value: 'D',
        next: null,
      },
    ]
    const list4 = [
      {
        value: 'A',
        next: null,
      }
    ]
    const list5 = [
      {
        value: 'A',
        next: 'A',
      }
    ]

    expect(isListWithLoop(list2)).toBeTruthy()
    expect(isListWithLoop(list3)).toBeFalsy()
    expect(isListWithLoop(list4)).toBeFalsy()
    expect(isListWithLoop(list5)).toBeTruthy()
  })
})
