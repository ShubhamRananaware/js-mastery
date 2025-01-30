// nested function to know the scope

function one(){
   const username ="Shubham"
   function two(){
      const technology= "MERN"
      console.log(username);
      
   }
   // console.log(technology);
   
   two()
}
one()

// can define function by 2 tyes 
addone(10)  // we can do this as well 
function addone(num){
   console.log( num+1);
   

}


// we call this one as the expression also
// console.log(addtwo(10)); we cannnot do this because we had defined it in variable 
// we cannto access it before initialization

const addtwo= function(num){
   return num+2
}
console.log(typeof addtwo);
console.log(typeof addone);

