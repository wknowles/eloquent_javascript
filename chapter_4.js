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

console.log(range(1, 10, 3));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -2));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
