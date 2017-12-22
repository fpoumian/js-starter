const sayHello = require('../index')

describe('Index', () => {
  it('Should say Hello Mr.Thompson', () => {
    expect(sayHello('Mr.Thompson')).toEqual('Hello Mr.Thompson')
  })
})
