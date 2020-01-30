// 1

const getFactorial = (n, result = 1) => {
  if (n < 1) return result
  result *= n
  return getFactorial(n - 1, result)
}

// 2

const getFibonacci = n => {
  if (n <= 1) return n
  return getFibonacci(n - 1) + getFibonacci(n - 2)
}

// 3

const towerOfHanoi = length => {
  const way = []
  const towers =[
    {
    name: 'A',
    blocks: [],
    },
    {
      name: 'B',
      blocks: [],
    },
    {
      name: 'C',
      blocks: [],
    },
  ]
  for (let i = 1; i <= length; i++) {
    towers[0].blocks.push(i)
  }
  let currentTower = 0
  let lastBlock = null
  while (towers[1].blocks.length < length && towers[2].blocks.length < length) {
    if (towers[currentTower].blocks.length > 0 && towers[currentTower].blocks[0] !== lastBlock) {
      if (towers[(currentTower + 1) % 3].blocks.length === 0
        || (towers[(currentTower + 1) % 3].blocks.length < length
          && towers[(currentTower + 1) % 3].blocks[0] > towers[currentTower].blocks[0])){

            lastBlock = towers[currentTower].blocks.shift()
            towers[(currentTower + 1) % 3].blocks.unshift(lastBlock)
            way.push(towers[currentTower].name + towers[(currentTower + 1) % 3].name)

      } else if (towers[(currentTower + 2) % 3].blocks.length === 0
        || (towers[(currentTower + 2) % 3].blocks.length < length
          && towers[(currentTower + 2) % 3].blocks[0] > towers[currentTower].blocks[0])) {

            lastBlock = towers[currentTower].blocks.shift()
            towers[(currentTower + 2) % 3].blocks.unshift(lastBlock)
            way.push(towers[currentTower].name + towers[(currentTower + 2) % 3].name)

      } else {
        currentTower = (currentTower + 1) % 3
      }
    } else {
      currentTower = (currentTower + 1) % 3
    }
  }
  return way
}

module.exports = {
  getFactorial,
  getFibonacci,
  towerOfHanoi,
}
