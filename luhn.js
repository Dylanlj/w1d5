function check(num){
  //creates array of individual numbers
  var creditNum = []
  numString = num.toString()
    for(i = 0; i < numString.length - 1; i++){
      creditNum.push(parseInt(numString[i]))
    }
  //doubles the number of every second number unless it's over 10
  for(i = creditNum.length -1; i >= 0; i = i - 2){
    var dubNum = creditNum[i] * 2
    if(dubNum > 9){
      dubNum -= 9;
    }
   creditNum[i] = dubNum
  }
  //adds all the numbers together
  var checkDigit = 0;
  for(i = 0; i < creditNum.length; i++){
    checkDigit += creditNum[i];
  }
  //*9 and takes the last digit of the number
  checkDigit = (checkDigit * 9).toString()
  checkDigit = checkDigit[checkDigit.length - 1]
  return checkDigit 
}

console.log(check(79927398713))
module.exports = check

//this assumes the check digit is at the end of the number, because nobody said otherwise