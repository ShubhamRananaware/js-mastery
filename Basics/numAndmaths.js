let score = 101
 console.log(score);

 let Maatchscore = new Number(200.1233);
  console.log(Maatchscore);
  
console.log( Maatchscore.toString().length);


console.log(Maatchscore.toFixed(2));


console.log(Maatchscore.toPrecision(4));

const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN'));
console.log(hundreds.toExponential());

//***********************Math **********Liberary in JavaScript

console.log(Math);
const m1=10.12
console.log(Math.sqrt(m1));
console.log(Math.abs(m1));
console.log(Math.round(m1));
console.log(Math.floor(m1));


console.log(Math.min(2,3,11,23,12));
console.log(Math.max(2,3,11,23,12));
console.log(Math.random()*10);
//Add 1 to avoid Zero
console.log(Math.floor(Math.random()*10+1));

// NOW RO GET THE NUMBER BETWEEN 10 TO 20
const min = 10
const max = 20
 console.log(Math.floor((Math.random()*min) + (max - min + 1)));
 




