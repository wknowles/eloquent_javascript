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



// Exercise 3.2 Recursion
function isEven(n){
  if (n === 0 )
      return true;
  else if (n === 1)
      return false;
//for a negative number; check whether n is less than zero and recurse as negative
  else if (n < 0)
    return isEven(-n);
  else
    return isEven(n-2);
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → false


// Exercise 3.3 Bean Counting
// For the first part of the exercise
function countBs(string){
  var counter = 0;
  for (var stringCounter = 0; stringCounter < string.length; stringCounter ++){
  if (string.charAt(stringCounter) === "B"){
      (counter += 1);
    }
  }
  return counter;
}

// The second part of the exercise requires a new parameter
function countChar(string, char){
  var counter = 0;
  for (var stringCounter = 0; stringCounter < string.length; stringCounter ++){
  if (string.charAt(stringCounter) === char){
      (counter += 1);
    }
  }
  return counter;
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
