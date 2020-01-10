const {
  getReverse,
  getSortedStack,
  getSortedStackByChoice,
  Stack,
  Deck,
  getSortedQueue,
  getSortedQueueByChoice,
} = require('./index')

describe('Stack and Queue', () => {
  const test1 = [1, 4, 2, 5, 3, 0]
  const test2 = [0, 1, 2, 3, 4]
  const test3 = [2, 4, 1, 5, 3, 0]
  const test4 = [1, 5, 2, 0, 3, 4]
  it('Should return reverse stack', () => {
    expect(getReverse(test1)).toEqual([0, 3, 5, 2, 4, 1])
    expect(getReverse(test2)).toEqual([4, 3, 2, 1, 0])
  })
  it('Should return sorted stack', () => {
    expect(getSortedStack([])).toEqual([])
    expect(getSortedStack(test3)).toEqual([5, 4, 3, 2, 1, 0])
    expect(getSortedStackByChoice([])).toEqual([])
    expect(getSortedStackByChoice(test3)).toEqual([5, 4, 3, 2, 1, 0])
  })
  it('Should work as stack with priority', () => {
    const priorityStack = new Stack()
    priorityStack.addItem(4)
    priorityStack.addItem(1)
    priorityStack.addItem(3)
    priorityStack.addItem(2)
    priorityStack.addItem(5)
    expect(priorityStack.stack).toEqual([5, 4, 3, 2, 1])
    priorityStack.removeItem()
    priorityStack.removeItem()
    priorityStack.removeItem()
    expect(priorityStack.stack).toEqual([5, 4])
  })
  it('Should work as deck', () => {
    const deck = new Deck()
    deck.addItem('high')
    deck.addItem('low')
    deck.addItem('high')
    deck.addItem('high')
    deck.addItem('low')
    expect(deck.deck).toEqual(['high', 'high', 'high', 'low', 'low'])
  })
  it('Should return sorted queue', () => {
    expect(getSortedQueue([])).toEqual([])
    expect(getSortedQueue(test4)).toEqual([0, 1, 2, 3, 4, 5])
    expect(getSortedQueueByChoice([])).toEqual([])
    expect(getSortedQueueByChoice(test4)).toEqual([0, 1, 2, 3, 4, 5])
  })
})
