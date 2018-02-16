var assert = require("chai").assert;
var isLuhn = require("../luhn.js")

describe("Testing if Luhn algorithm is working", function(){

  it("should return the appropriate Check number", function(){
    var num = 79927398713
    var checkDigit = num.toString()
    checkDigit = checkDigit[checkDigit.length - 1]
    assert.isTrue(checkDigit === isLuhn(num))
  })
})
