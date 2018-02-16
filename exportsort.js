module.exports = function(dataList){
  var sortedList = dataList.sort(function(a, b){

    return a - b
  })
  return sortedList
}

