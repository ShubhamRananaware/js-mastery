const teamMI =[ "Rohit","Surya", "Bumbhra"]
 const teamRCB = ["Virat", "Siraj", "ABD"]

 //teamMI.push(teamRCB)
// teamRcb Will get added in mi at the last index

// console.log(teamMI)

 //console.log(teamMI[3][2]);
 
 // now usibg concate it combines two or more array and returns the new array

const combTeams = teamMI.concat(teamRCB)

console.log(combTeams);

// Spread Operator... [it can be used if there are more than two array and want to combine them 
//                      Using Concat we can concat two array only ]
const teamCSK =["MSD","Raina","R.Jadeja"]
console.log([...teamMI,...teamRCB,...teamCSK]);

// flat >>>Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// specify the depth (1 or 2 in below eg Depth is 2 you can use infinity it will take all the depth's)


const anotherArray = [1,2,3,4,[4,2,11,5,6],99,[22,33,55,11,66],89,[87,[90,98,91,92]]]
 
 const newARR= anotherArray.flat(2)
 console.log(newARR);

// isArray ,From ,of

console.log(Array.isArray(newARR));// checks if it is array or not
console.log(Array.isArray("Shubham"));

console.log(Array.from("Shubham"));// converts into the array (can give objects, strings...)
console.log(Array.isArray(Array.from("Shubham")));


let x1=100;
let x2= 200
let x3= 300

console.log(Array.of(x1,x2,x3));
