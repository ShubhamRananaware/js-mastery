//  ***********Dates

let mydate = new Date()
console.log(mydate);
console.log(mydate.toDateString());
console.log( mydate.toString());
console.log( mydate.toLocaleDateString());
console.log( mydate.toLocaleString());
console.log( mydate.toTimeString());
console.log( mydate.toJSON());


let myCreatedDate = new Date(2001,0,15);
console.log(myCreatedDate.toDateString());

// console.log(myCreatedDate.setUTCHours(4));

// console.log(myCreatedDate.toLocaleTimeString());
console.log(Math.floor(Date.now()/1000));


let newDate = new Date()

console.log(newDate.getMonth()+1);// here use month + 1 because month starts from zero 
console.log(newDate.getMinutes());
console.log(newDate.getDay());
console.log(newDate.getDate());

console.log(`todays Date is ${newDate.getDate()} and month is ${newDate.getMonth()+1}`);

console.log(newDate.toLocaleString('default',{
  hour12:true
}))// to print date in modified formate we can use the  tolocaString()






