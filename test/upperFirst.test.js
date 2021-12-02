import upperFirst from '../src/upperFirst.js'
import { expect } from 'chai'

describe('upperFirst.js tests', () => {
  it('sets first letter to uppercase', () => {
      const tst = "tests had to be done."
      const ans = upperFirst(tst)
      expect(ans).to.equal("Tests had to be done.")
  })
  it("first letter stays uppercase if it is already", () => {
      const tst = "Tests had to..."
      const ans = upperFirst(tst)
      expect(ans).to.equal(tst)
  })
  it("first letter is a number char", () => {
      const tst = "5 pens were dropped."
      const ans = upperFirst(tst)
      expect(ans).to.equal(tst)
  })
  it("parameter is a char", () => {
      const c = 'c'
      expect(upperFirst(c)).to.equal('C')
  })
})