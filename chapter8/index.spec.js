const {
  HashTableDirect,
  HashTableOpenLinear,
  HashTableOpenQuadratic,
  HashTableOpenPseudoRandom,
  HashTableOpenDoubleHash,
  OrderlyQuadratic,
} = require('./index')


describe('Hash-table', () => {
  it('Hash table with direct binding', () => {
    const table = new HashTableDirect(5)
    table.addItem({
      key: 'Nancy Drew',
      city: 'NY',
      gender: 'F'
    })
    table.addItem({
      key: 'John Doe',
      city: 'Utah',
      gender: 'M'
    })
    table.addItem({
      key: 'Brad Pitt',
      city: 'NY',
      gender: 'M'
    })
    table.addItem({
      key: 'Jennifer Aniston',
      city: 'Vegas',
      gender: 'F'
    })
    table.addItem({
      key: 'Tom Cruise',
      city: 'LA',
      gender: 'M'
    })
    expect(table.findItem('Jennifer Aniston').key).toEqual('Jennifer Aniston')
    expect(table.findItem('Nancy Drew').key).toEqual('Nancy Drew')
    expect(table.findItem('fghj hsjto')).toEqual(null)
    expect(table.findItem('fgo')).toEqual(null)
    table.removeItem('Nancy Drew')
    expect(table.findItem('Nancy Drew')).toEqual(null)
  })
  it('Hash table with open address and line prob', () => {
    const table = new HashTableOpenLinear(5)
    table.addItem({
      key: 'Nancy Drew',
      city: 'NY',
      gender: 'F'
    })
    table.addItem({
      key: 'John Doe',
      city: 'Utah',
      gender: 'M'
    })
    table.addItem({
      key: 'Brad Pitt',
      city: 'NY',
      gender: 'M'
    })
    table.addItem({
      key: 'Jennifer Aniston',
      city: 'Vegas',
      gender: 'F'
    })
    table.addItem({
      key: 'Tom Cruise',
      city: 'LA',
      gender: 'M'
    })
    table.addItem({
      key: 'dom Cfyise',
      city: 'LA',
      gender: 'M'
    })
    expect(table.findItem('Jennifer Aniston').key).toEqual('Jennifer Aniston')
    expect(table.findItem('Nancy Drew').key).toEqual('Nancy Drew')
    expect(table.findItem('fghj hsjto')).toEqual(null)
    expect(table.findItem('fgo')).toEqual(null)
    table.removeItem('Nancy Drew')
    expect(table.findItem('Nancy Drew')).toEqual(null)
    table.addItem({
      key: 'Nancy Crew',
      city: 'NY',
      gender: 'F'
    })
    expect(table.findItem('Nancy Crew').key).toEqual('Nancy Crew')
  })
  it('Hash table with open address and quadratic prob', () => {
    const table = new HashTableOpenQuadratic(5)
    table.addItem({
      key: 'Nancy Drew',
      city: 'NY',
      gender: 'F'
    })
    table.addItem({
      key: 'John Doe',
      city: 'Utah',
      gender: 'M'
    })
    table.addItem({
      key: 'Brad Pitt',
      city: 'NY',
      gender: 'M'
    })
    table.addItem({
      key: 'Jennifer Aniston',
      city: 'Vegas',
      gender: 'F'
    })
    table.addItem({
      key: 'Tom Cruise',
      city: 'LA',
      gender: 'M'
    })
    table.addItem({
      key: 'dom Cfyise',
      city: 'LA',
      gender: 'M'
    })
    expect(table.findItem('Jennifer Aniston').key).toEqual('Jennifer Aniston')
    expect(table.findItem('Nancy Drew').key).toEqual('Nancy Drew')
    expect(table.findItem('fghj hsjto')).toEqual(null)
    expect(table.findItem('fgo')).toEqual(null)
    table.removeItem('Nancy Drew')
    expect(table.findItem('Nancy Drew')).toEqual(null)
    table.addItem({
      key: 'Nancy Crew',
      city: 'NY',
      gender: 'F'
    })
    expect(table.findItem('Nancy Crew').key).toEqual('Nancy Crew')
  })
  it('Hash table with open address and pseudo prob', () => {
    const table = new HashTableOpenPseudoRandom(5)
    table.addItem({
      key: 'Nancy Drew',
      city: 'NY',
      gender: 'F'
    })
    table.addItem({
      key: 'John Doe',
      city: 'Utah',
      gender: 'M'
    })
    table.addItem({
      key: 'Brad Pitt',
      city: 'NY',
      gender: 'M'
    })
    table.addItem({
      key: 'Jennifer Aniston',
      city: 'Vegas',
      gender: 'F'
    })
    table.addItem({
      key: 'Tom Cruise',
      city: 'LA',
      gender: 'M'
    })
    table.addItem({
      key: 'dom Cfyise',
      city: 'LA',
      gender: 'M'
    })
    expect(table.findItem('Jennifer Aniston').key).toEqual('Jennifer Aniston')
    expect(table.findItem('Nancy Drew').key).toEqual('Nancy Drew')
    expect(table.findItem('fghj hsjto')).toEqual(null)
    expect(table.findItem('fgo')).toEqual(null)
    table.removeItem('Nancy Drew')
    expect(table.findItem('Nancy Drew')).toEqual(null)
    table.addItem({
      key: 'Nancy Crew',
      city: 'NY',
      gender: 'F'
    })
    expect(table.findItem('Nancy Crew').key).toEqual('Nancy Crew')
  })
  it('Hash table with open address and double hash', () => {
    const table = new HashTableOpenDoubleHash(5)
    table.addItem({
      key: 'Nancy Drew',
      city: 'NY',
      gender: 'F'
    })
    table.addItem({
      key: 'John Doe',
      city: 'Utah',
      gender: 'M'
    })
    table.addItem({
      key: 'Brad Pitt',
      city: 'NY',
      gender: 'M'
    })
    table.addItem({
      key: 'Jennifer Aniston',
      city: 'Vegas',
      gender: 'F'
    })
    table.addItem({
      key: 'Tom Cruise',
      city: 'LA',
      gender: 'M'
    })
    table.addItem({
      key: 'dom Cfyise',
      city: 'LA',
      gender: 'M'
    })
    expect(table.findItem('Jennifer Aniston').key).toEqual('Jennifer Aniston')
    expect(table.findItem('Nancy Drew').key).toEqual('Nancy Drew')
    expect(table.findItem('fghj hsjto')).toEqual(null)
    expect(table.findItem('fgo')).toEqual(null)
    table.removeItem('Nancy Drew')
    expect(table.findItem('Nancy Drew')).toEqual(null)
    table.addItem({
      key: 'Nancy Crew',
      city: 'NY',
      gender: 'F'
    })
    expect(table.findItem('Nancy Crew').key).toEqual('Nancy Crew')
  })
  it('Hash table with open address and orderly quadratic prob', () => {
    const table = new OrderlyQuadratic(5)
    table.addItem({
      key: 50,
    })
    table.addItem({
      key: 101,
    })
    table.addItem({
      key: 30,
    })
    table.addItem({
      key: 40,
    })
    table.addItem({
      key: 20,
    })
    table.addItem({
      key: 100,
    })
    table.addItem({
      key: 0,
    })
    expect(table.findItem(20).key).toEqual(20)
    expect(table.findItem(101).key).toEqual(101)
    expect(table.findItem(0)).toEqual(null)
    expect(table.findItem(15)).toEqual(null)
    table.removeItem(40)
    expect(table.findItem(40)).toEqual(null)
    table.addItem({
      key: 0,
    })
    expect(table.findItem(0).key).toEqual(0)
  })
})
