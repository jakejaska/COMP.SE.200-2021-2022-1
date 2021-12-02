import get from '../src/get.js'
import { expect } from 'chai'

describe('get.js tests', () => {
  it("refering to existing object using string as path with square bracket notation \
  object: { 'a': [{ 'b': { 'c': 3 } }] } get path a[0].b.c", () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }] }
    const ans = get(object, 'a[0].b.c')
    expect(ans).to.eq(3)
  })
  it("refering to existing object using array of chars as path \
  object: { 'a': [{ 'b': { 'c': 3 } }] } get ['a','0','b','c']", () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }] }
    const ans = get(object, ['a','0','b','c'])  
    expect(ans).to.eq(3)
  })
  it("supplied default parameter is returned if path doesn't exist", () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }] }
    const ans = get(object, 'a.b.c', 'default')  
    expect(ans).to.eq('default')
  })
  it("incorrect path and no default value return undefined", () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }] }
    const ans = get(object, 'a.b.c')  
    expect(ans).to.eq(undefined)
  })
  it("calling without parameters", () => {
    expect(get()).to.eq(undefined)
  })
  it("calling with too few parameters", () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }] }
    expect(get(object)).to.eq(undefined)
  })
  it("calling with wrong type of object parameters", () => {
    const object = 15
    console.log(get(object, 'a.b.c'))
    expect(get(object, 'a.b.c')).to.eq(undefined)
  })
})