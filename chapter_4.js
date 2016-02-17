// See http://eloquentjavascript.net/code/#4.1 for data extras needed to run the code. Or just use the sandbox
// Excercise 4.1 The sum of a range

function range(start, end, step){
  var rangeNum = [];
  if (step === undefined){
    step = 1;
  }
  if (step > 0){
    for (i = start; i <= end; i += step ){
    rangeNum.push(i);
    }
  } else {
    for (i = start; i >= end; i += step ){
    rangeNum.push(i);
    }
  }
  return rangeNum;
}

function sum(range) {
  var total = 0;
  for (var i = 0; i < range.length; i++){
    total += range[i];
  }
  return total;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55

// Exercise 4.2 Reversing an Array
function reverseArray(array){
  var newReverseArray = [];
  for (i = array.length - 1; i >= 0; i--){
    newReverseArray.push(array[i]);
  }
  return newReverseArray;
}

function reverseArrayInPlace(array){
  for (i = 0; i < Math.floor(array.length / 2); i++){
    var holdVar = array[i];
    array[i] = (arrayValue[array.length - 1 - i]);
    (arrayValue[array.length - 1 - i]) = holdVar;
  }
  return reverseArrayInPlace;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
console.log(arrayValue);
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
