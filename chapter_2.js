// Exercise 2.1 Looping a triangle
for (var line = "#"; line.length < 8; line += "#")
  console.log(line);

//this was my solution - i used repeat which wasn't yet shown in the book
for (var count = 1; count <= 7; count ++){
  console.log( "#".repeat(count));
}

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
