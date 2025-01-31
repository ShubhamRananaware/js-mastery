const arr= [10,20,30,40,50,60,70]

const newarr= arr.map((item)=> { return item +1})
console.log(arr);
console.log(newarr);

// map filter chaining

const mpfilt=arr.map((num) => num *10)
                 .map((num)=> num+1) // values of first map after the operation will come to second map  and then to third  
                 .filter((num)=>num>400)  // can use num or any var also

console.log(mpfilt);
