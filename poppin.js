var investment = process.argv.slice(2);

var everything = {
  fullBottles : 0,
  emptyBottles : 0,
  caps : 0,
  money : 0
}
var bottlesFromCaps = 0;
var bottlesFromEmpties = 0;

function popForCash(investment){
  var bottles = (investment - (investment % 2)) / 2
  everything.fullBottles = bottles
  everything.caps = bottles
  everything.money = investment

  while(everything.fullBottles > 1){
    popForEmpties(everything.fullBottles)
    popForCaps(everything.caps)
  }
}

function popForEmpties(fullBottles){
  var bottles = fullBottles - (fullBottles % 2);  
  everything.fullBottles -= bottles / 2
  everything.emptyBottles += bottles
  everything.caps += bottles / 2
  bottlesFromEmpties += bottles / 2
}

function popForCaps(caps){

  var bottles = caps - (caps % 4) ;
  everything.caps = everything.caps - bottles +(bottles / 4)
  everything.fullBottles += bottles / 4 
  bottlesFromCaps += bottles / 4;
}
popForCash(investment)

var totalBottles = everything.fullBottles + everything.emptyBottles

console.log(`TOTAL BOTTLES: ${totalBottles}\nREMAINING BOTTLES: ${everything.fullBottles}\nREMAINING CAPS: ${everything.caps}\nTOTAL EARNED:\n  BOTTLES: ${bottlesFromEmpties}\n  CAPS: ${bottlesFromCaps}`)
