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



// Exercise 4.3 A List
function arrayToList(array){
  var list = null;
  for (var i = array.length - 1; i >= 0; i--) {
    list = {value: array[i], rest: list};
  }
  return list;
}

function listToArray(list){
  var array = [];
  for (var node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

//prepend, which takes an element and a list
//and creates a new list that adds the element
//to the front of the input list
function prepend(value, list) {
  return {value: value, rest: list};
}

function nth(list, i){
  if( i === 0 ){
    return list.value;
  } else {
    return nth(list.rest, i - 1);
  }
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20

// Exercise 4.4 Deep Comparison

function deepEqual(a,b){
  if(a === b){
    return true;
  }
  if(a === null || typeof a != "object" ||
     b === null || typeof b != "object"){
  return false;
  }
    var propsInA = 0; var propsInB = 0;

  for (var prop in a)
    propsInA += 1;

  for (prop in b){
    propsInB += 1;
    if (!(prop in a) || !deepEqual(a[prop], b[prop]))
      return false;
  }
  return propsInA === propsInB;
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
