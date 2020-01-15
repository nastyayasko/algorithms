const {
  insertionSort,
  selectionSort,
  bubbleSort,
  heapSort,
  pyramidalSort,
  quickSort,
  countSort,
  blockSort,
} = require('./index')


describe('Sort', () => {
  const arr = [4, 5, 0, 1, 7, 2, 6, 3]
  it('Should sort by insertion', () => {
    expect(insertionSort(arr)).toEqual([0, 1, 2, 3, 4, 5, 6, 7])
  })
  it('Should sort by selection', () => {
    expect(selectionSort(arr)).toEqual([0, 1, 2, 3, 4, 5, 6, 7])
  })
  it('Should sort by bubble', () => {
    expect(bubbleSort(arr)).toEqual([0, 1, 2, 3, 4, 5, 6, 7])
  })
  it('Should make heap', () => {
    const heap = heapSort(arr)
    expect(heap[0] > heap[1] && heap[0] > heap[2]).toBeTruthy()
    expect(heap[1] > heap[3] && heap[1] > heap[4]).toBeTruthy()
    expect(heap[2] > heap[5] && heap[2] > heap[6]).toBeTruthy()
    expect(heap[3] > heap[7]).toBeTruthy()
  })
  it('Should sort by pyramidal way', () => {
    expect(pyramidalSort(arr)).toEqual([7, 6, 5, 4, 3, 2, 1, 0])
  })
  it('Should fast sort', () => {
    const arr = [4, 5, 0, 1, 7, 2, 6, 3]
    expect(quickSort(arr)).toEqual([0, 1, 2, 3, 4, 5, 6, 7])
  })
  it('Should sort by count', () => {
    const arr = [0, 1, 3, 1, 2, 2, 3, 0]
    expect(countSort(arr, 3)).toEqual([0, 0, 1, 1, 2, 2, 3, 3])
    const arr2 = [0, 1, 2, 0, 2, 2, 0, 1]
    expect(countSort(arr2, 2)).toEqual([0, 0, 0, 1, 1, 2, 2, 2])
  })
  it('Should sort by blocks', () => {
    const arr = [0, 1, 3, 1, 2, 2, 3, 0, 4]
    expect(blockSort(arr, 3)).toEqual([0, 0, 1, 1, 2, 2, 3, 3, 4])
    expect(blockSort(arr)).toEqual([0, 0, 1, 1, 2, 2, 3, 3, 4])
  })
})
