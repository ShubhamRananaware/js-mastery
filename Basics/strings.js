let name = "Shubham"
let age = 25
let salary = 18000

console.log(name + age + salary);
console.log(` Hello all myself ${name} my age is ${age} and my salary is ${salary}`);

console.log(name.charAt(2));

let FirstName= new String("Shubham Rananaware")

console.log(FirstName.concat(name));
console.log(FirstName.charAt(4));
console.log(FirstName.toUpperCase());
console.log(FirstName.indexOf("u"));
console.log(FirstName);

const newStr = FirstName.substring(7,5)
console.log(newStr);

const newstr2= FirstName.slice(-2,1)
console.log(newstr2);

let trimmm= new String("    Sr    ")
console.log(trimmm.trim());

console.log(trimmm.replace('Sr', 'Shubham'));
 







