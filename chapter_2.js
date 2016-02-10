// Exercise 2.2 Fizzbuzz

for (var line = "#"; line.length < 8; line += "#")
  console.log(line);


// Exercise 2.2 Fizzbuzz

for ( i = 1; i <= 100 ; i++){
 if( !(i % 5) && !(i % 3 )){
  console.log ("FizzBuzz");
 } else if (!(i % 5)){
    console.log ("Buzz");
 } else if (!(i % 3)){
  console.log ("Fizz");
 } else {
   console.log (i);
}
}


//Exercise 2.3 Chess board

var white = " #";
var black = "# ";
var size = 8;
var counter = 0;

while (counter < size){
  if(counter % 2){
    console.log(black.repeat(size/2));
  } else {
    console.log(white.repeat(size/2));
  }
counter ++;
}
