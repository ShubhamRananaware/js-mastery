// We can use this in object congex only

const obj1 = {
  Username: "Shubham ",
  Age : 24, 
  messege :function (){
    console.log(`${this.Username}, is my name XXXXXX`);
    
  }
}
obj1.messege()

function f1(){
    // var user ="shubham"
   const user ="shubham"
    console.log(this.user); 

}
f1()

const f2= function(){
//   var user ="shubham"
    const user ="shubham"
    console.log(this.user); 
}
f2()

// we cannot use this in function to acces the variable 
// we ca access the variables in it if declared in var 


// Arrow function  () => {}

// 1 explicit return if we use { we need to use return }
  const addition =  (num) => {
    console.log(num);
    
        return num
    }

    addition(1)

// 2 implicit return we didnt need to use {}

const add= (n1, n2)=>(n1+n2)

console.log(add(14,12));

console.log(add(1));// NAN

console.log(add(10,10));

// 2.1

const minus =(num1, num2) => num2-num1 
console.log(minus(11,22));

// how to return object because we need to keep  them{} and in arrow if we use {} we need to use the return 
// to avoid this 

const arrowforobj = (one , two) =>({uname:"shubham"})
console.log(arrowforobj(10,13));

const abc=function (){
    const obj={
        nameee :"shubham",
        
    }
    
}
console.log(abc());

