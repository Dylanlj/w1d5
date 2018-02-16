var everything = {
  fullBottles : 1,
  emptyBottles : 0,
  caps : 4,
  money : 0
}

function popForCash(investment){
  var bottles = investment / 2
  everything.fullBottles = bottles
  everything.caps = bottles
  everything.money = investment
  console.log(everything)

  while(everything.fullBottles > 1){
    emptyBottles(everything.fullBottles)
    popForCash(everything.caps)
  }
}

function emptyBottles(fullBottles){
  var bottles = fullBottles - (fullBottles % 2);  
  everything.fullBottles -= bottles / 2
  everything.emptyBottles += bottles
  everything.caps += bottles / 2
}

function popForCaps(caps){

  var bottles = caps - (caps % 4) ;

  everything.caps = everything.caps - bottles +(bottles / 4)
  everything.fullBottles += bottles / 4 
//subtract caps and add full bottles
}


console.log(popForCash(20))

// 10 15
// 20 35
// 30 55
// 40 75
