function addnumbers(num1, num2)  {
 console.log(num1+num2);
 
}
 const addednumbers= addnumbers(1,2)
 console.log(addednumbers);// undefined because the function didnt returns any thing

 function addition (num1, num2){
    return num1+num2
 }
 addition(10,20)
 const var1 =addition(10,20)
console.log(addition(10,20));
// console.log("Addition is : ",var1);
console.log(`Addition is ${var1} `);

//******

function loggedIN(username){
    return `${username} just logged IN`
}
console.log(loggedIN("Shubham"));

// setting default value if the user didnt enter the value then the default value will be entered
function loggedIN1(username="Don"){
    return `${username} just logged IN`
}
console.log(loggedIN1());

function loggedIN2(username){
    if(username === undefined){
        return `please enter the username`
    }else{
        return `${username} just logged IN`
    }
    
}
console.log(loggedIN2("SR"));
