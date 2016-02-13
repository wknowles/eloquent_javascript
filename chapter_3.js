// Exercise 3.1  Minimum

// using Math.min

function min(param1, param2){
  return Math.min(param1, param2);
}

// or without

function min(a, b){
  if (a < b){
      return a;
    } else {
        return b;
    }
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10
