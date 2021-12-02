import { expect } from 'chai'
import toNumber from '../src/toNumber.js'

describe('toNumber.js tests', () => {
  it('toNumber(3.2) should be 3.2', () => {
    expect(toNumber(3.2)).to.equal(3.2)
  })
  it('toNumber(Number.MIN_VALUE) should be 5e-324', () => {
    expect(toNumber(Number.MIN_VALUE)).to.equal(5e-324)
  })
  it('toNumber(Number.MAX_VALUE) should be 5e-324', () => {
    expect(toNumber(Number.MAX_VALUE)).to.equal(1.7976931348623157e+308)
  })
  it('toNumber(Infinity) should be 1.7976931348623157e+308', () => {
    expect(toNumber(Infinity)).to.equal(Infinity)
  })
  it("toNumber('3.2') should be 3.2", () => {
    expect(toNumber('3.2')).to.equal(3.2)
  })
  it('wrong number of arguments', () => {
    expect(() => toNumber(3.2, 5.4)).to.throw(Error)
    expect(() => toNumber()).to.throw(Error)
  })
  it('incorrect parameter type', () => {
    expect(() => toNumber("a")).to.throw(Error)
  })
})