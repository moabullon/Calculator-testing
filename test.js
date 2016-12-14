let assert = require('assert')
let deepEqual = require('chai').deepEqual
let sum = require('../../src/js/calc').sum
let factorial = require('../../src/js/calc').fact

describe('sum', function(){
    it('should take an array of numbers and return the sum of it', function(){
      let a = [1,2,3]
      let b = sum(a)

      assert.equal(b,6)
    })
    it('should return 0 if called without arguments', function(){
      let zip = sum()
      assert.equal(zip,0)
    })
})


describe('factorial', function(){
  it('return factorial of the top number', function(){
    let total = factorial(5)
    assert.deepEqual(total, 120)
  })
  it('should return 0 if anything other than a number is the input', function(){
    let total = factorial('brian')
    assert.equal(total, 0)
  })
})
