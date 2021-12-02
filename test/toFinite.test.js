import { expect } from 'chai'
import toFinite from '../src/toFinite.js'

describe('toFinite.js tests', () => {
  it('toFinite(3.2) should be 3.2', () => {
    expect(toFinite(3.2)).to.equal(3.2)
  })
  it('toFinite(Number.MIN_VALUE) should be 5e-324', () => {
    expect(toFinite(Number.MIN_VALUE)).to.equal(5e-324)
  })
  it('toFinite(Number.MAX_VALUE) should be 5e-324', () => {
    expect(toFinite(Number.MAX_VALUE)).to.equal(1.7976931348623157e+308)
  })
  it('toFinite(Infinity) should be 1.7976931348623157e+308', () => {
    expect(toFinite(Infinity)).to.equal(1.7976931348623157e+308)
  })
  it("toFinite('3.2') should be 3.2", () => {
    expect(toFinite('3.2')).to.equal(3.2)
  })
  it('wrong number of arguments', () => {
    expect(() => toFinite(3.2, 5.4)).to.throw(Error)
    expect(() => toFinite()).to.throw(Error)
  })
  it('incorrect parameter type', () => {
    expect(() => toFinite("a")).to.throw(Error)
  })
})