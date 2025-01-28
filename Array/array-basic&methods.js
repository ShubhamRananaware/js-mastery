//1
let arr= [1,2,3,11,22,33,44,55]
console.log(arr);
let arr2=["Shubham", "Prasad", "Shruti",11,222,1.3]
console.log(arr2);
 
 let Myarr=new Array(1,33,44,22,12,21)
 console.log(Myarr);
 console.log(Myarr[1]);// [index of the element in the array]
 console.log(arr[2]);
console.log(arr2[1]);

 
// Some Methods of Array

Myarr.push(10)  // add the element at the last of the array
console.log(Myarr);

Myarr.pop()    // removes the last element of the array
console.log(Myarr);

Myarr.unshift(11)// Add element at the first index of arry (element which we want to add at 1st index)
console.log(Myarr);

Myarr.shift()// removes element at the first index of the array
console.log(Myarr);

 

console.log(Myarr.includes(111));// check weather element is present in array (Boolean DT)

console.log(Myarr.indexOf(11)); // return index of the element if present if not returns -1 

// slice AND splice--->Interview Question

let newArray= [0,1,2,3,4,5,6,7]
let x1 =newArray.slice(0,3) // didn't take the end index element i.e 3rd index element
console.log("Slice "+ x1);
console.log("Original Array after Slice : " +newArray);

let x2= newArray.splice(0,3)
console.log("Splice " +x2);
console.log("Original Array after Splice : " +newArray);

/*
The major Differnce between the slice and splice is that when you use splice it manipulates
the original array means it cuts the element from the range provided
*/