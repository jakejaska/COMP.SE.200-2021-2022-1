import { expect } from 'chai'
import divide from '../src/divide.js'


describe('Divide.js tests', () => {
  it('divide 6 by 3 should be 2', () => {
    const ans = divide(6, 3)
    expect(ans).to.equal(2)
  })
  it('division by 0', () => {
    expect(() => divide(2,0)).to.throw(RangeError)
  })
  it('uneven', () => {
    const ans = divide(-4, 2)
    expect(ans).to.eq(-2)
  })
  it('number of arguments', () => {
    //expect(() => divide(1)).to.throw(TypeError)
    expect(() => divide(1,2,3)).to.throw(Error)
    expect(() => divide()).to.throw(Error)
  })
  it('incorrect parameter type', () => {
    expect(() => divide("asd", 1)).to.throw(TypeError)
  })
})