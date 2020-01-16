const {
  linearSearch,
  List,
  listsLinearSearch,
  binarySearch,
  interpolationSearch,
  binarySearchFirstItem,
  interpolationSearchFirstItem,
} = require('./index')


describe('Search', () => {
  const arr = [4, 5, 0, 1, 7, 2, 6, 3]
  const arrSorted = [0, 1, 2, 3, 4, 5, 6, 7]
  const arrSorted2 = [5, 5, 7, 9, 10, 15, 24, 30, 48]
  const arrSorted3 = [5, 5, 7, 9, 10, 10, 10, 15, 24, 24, 24, 24, 24, 30, 48]
  it('Linear search', () => {
    expect(linearSearch(arr, 5)).toEqual(1)
    expect(linearSearch(arrSorted, 5)).toEqual(5)
    expect(linearSearch(arr, 8)).toEqual(null)
  })
  it('Linear search for linked lists', () => {
    const list = new List()
    list.addItem({ value: 4})
    list.addItem({ value: 5})
    list.addItem({ value: 0})
    list.addItem({ value: 1})
    expect(listsLinearSearch(list, 5).value).toEqual(5)
    expect(listsLinearSearch(list, 8)).toEqual(null)
    const list2 = new List()
    expect(listsLinearSearch(list2, 36543561)).toEqual(null)

  })
  it('Binary search', () => {
    expect(binarySearch(arrSorted, 5)).toEqual(5)
    expect(binarySearch(arrSorted, 8)).toEqual(null)
  })
  it('Interpolation search', () => {
    expect(interpolationSearch(arrSorted, 5)).toEqual(5)
    expect(interpolationSearch(arrSorted, 8)).toEqual(null)
    expect(interpolationSearch(arrSorted2, 2)).toEqual(null)
    expect(interpolationSearch(arrSorted2, 10)).toEqual(4)
  })
  it('Binary search return first item', () => {
    expect(binarySearchFirstItem(arrSorted2, 5)).toEqual(0)
    expect(binarySearchFirstItem(arrSorted3, 10)).toEqual(4)
    expect(binarySearchFirstItem(arrSorted3, 24)).toEqual(8)
  })
  it('Interpolation search return first item', () => {
    expect(interpolationSearchFirstItem(arrSorted2, 5)).toEqual(0)
    expect(interpolationSearchFirstItem(arrSorted3, 10)).toEqual(4)
    expect(interpolationSearchFirstItem(arrSorted3, 24)).toEqual(8)
  })
})
