const numbers =[1,2,3,4]

 const total =numbers.reduce(function(initialval ,currentvalue){
  console.log(`initialval / accumulate value ${initialval} and current value ${currentvalue}`);
  return initialval+currentvalue
  
} ,0 //initial value need to assign first
)
console.log(total);
// here initial value wiil be 0 first after the operation the initial value will be the
// after the operation the process will been carried till te array elements are over 
// return value is stored in initial value during this process

// using arrow

const arrowreduce =numbers.reduce((initial,current)=>{
    console.log(`initial ${initial} current ${current}`);
    return initial*current
    
},2)

console.log(arrowreduce);


// *******************88
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
 const totalprice = shoppingCart.reduce((ini ,item)=>{
       
                 return ini+item.price
    },0)
    console.log(`Total Price to pay : ${totalprice}`);
    