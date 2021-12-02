import { expect } from 'chai'
import ceil from '../src/ceil.js'

describe('ceil.js tests', () => {
  it('ceil(4.006) should be 5', () => {
    expect(ceil(4.006)).to.equal(5)
  })
  it('ceil(6.004, 2) should be 6.01', () => {
    expect(ceil(6.002, 2)).to.equal(6.01)
  })
  it('ceil(6040, -2) should be 6100', () => {
    expect(ceil(6040, -2)).to.equal(6100)
  })
  it('ceil(2.0050, 1) should be 2.1', () => {
    expect(ceil(2.0050, 1)).to.equal(2.1)
  })
  it('wrong number of arguments', () => {
    expect(() => ceil(2.555, 2, 3)).to.throw(Error)
    expect(() => ceil()).to.throw(Error)
  })
  it('incorrect parameter type', () => {
    expect(() => ceil("abc", 2)).to.throw(Error)
  })
})