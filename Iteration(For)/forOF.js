
// FOR OF Arrays , string , map ,set
// NOT FOR OBJECT
const myarr =[10,15,20,22,11,44]

for (const elements of myarr) {
    console.log(elements);
    
}

const str= "Shubham Ran"
for (const element of str) {
     console.log(`char is ${element}`);
     
}

// map

const mp = new Map()

mp.set(1, "sr");
mp.set(2 ,"Ak")
mp.set(3, "pR") 
mp.set(3, "AR")// value will get replaced of key 3 to AR

console.log(mp);

for (const element of mp) {
    console.log(element);
    
}
// destructring map
for (const [ key , value] of mp) {
    console.log(key + " >> "+ value);
    
}
// obj is not iterable


// const obj={
//    fName: "shubham",
//    mobno: 709999999,
//    age :24
// }
// for (const element of obj) {
//     console.log(element);
    
// }