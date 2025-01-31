const myarr = [10,12,14,16,18,20]

const newfor =myarr.forEach((item) => { return item});
console.log(newfor);// it will not return anything

console.log(myarr.indexOf(18));


// Foreach didnt return any thing 

// filter 
const newfilter = myarr.filter( (numbers) => (numbers > 15))
console.log(newfilter);

// trying to filter using foreach jst to practice

myarr.forEach( ( num) =>
{
    if(num>15){
        console.log( "using foreach and if ",num);
        
    }
})
