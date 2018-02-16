var maxProfit = function(array){
  var oldArray = array;
  console.log(array)
  var highestReturn = -1;
  var lowToHigh = array
  var lowToHigh = lowToHigh.sort(function(a, b){
    return a-b
  })
  console.log(array)
  // for (var i = 0; i < lowToHigh.length; i++){
  //   for (var p = lowToHigh.length - 1; p >= 0; p-- ){
  //     console.log(array)
  //     console.log(oldArray.indexOf(lowToHigh[i])+ " thenumber")
  //     console.log(array.indexOf(11) + " index Position should be 6 ")
  //    console.log("i: " + i + " p: " + p)
  //     if(array.indexOf(lowToHigh[i]) < array.lastIndexOf(lowToHigh[p])){
  //       highestReturn = lowToHigh[p] - lowToHigh[i];
  //     return highestReturn
  //     }

  //   }

  // }

}

console.log(maxProfit([45, 24, 35, 31, 40, 38, 11]));


//sort first using that function then go from bottom to top testing against last number

//low to high 11, 24, 31, 35, 38, 40, 45
//normal arra 45, 24, 35, 31, 40, 38, 11