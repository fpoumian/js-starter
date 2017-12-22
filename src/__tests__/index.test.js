const sayHello = require('../index')

describe('Index', () => {
  it('Should return "Hello Mr.Thompson"', () => {
    expect(sayHello('Mr.Thompson')).toEqual('Hello Mr.Thompson')
  })
})
