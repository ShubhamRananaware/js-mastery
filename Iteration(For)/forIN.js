// For IN
// For iteration over OBJECTS
// Can  use on array also
// It give the key of the Object 
// not on map

const obj={
       fName: "shubham",
       "Lname": "Rananaware",
       mobno: 709999999,
       age :24
    }
    for (const key in obj) {
        console.log(obj[key]);
        
    }

// we can itterate array but it will give the keys of arry
// yes arry has keys 
// its indexes are its keys (starts from zero)

 const arr =[1,2,3,4,5]
 for (const key in arr) {
    console.log(` key ${key} value ${arr[key]} in array`)  // keys are indexes
        
 }