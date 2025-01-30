let temp=30
if (temp>10){
    console.log("temp is ", temp);
    
}else{
    console.log(`temp is greater than 10`);
    
}

// implicit way
 
if (temp ==30)console.log(temp);// only one line although we can add multiple lines by giving ,

if (temp ==30)console.log(temp),
console.log("if implicait in another way");

// nested if 

const balance =1000

if (balance<500) {
    console.log(`balance is less than 500`);
    
}else if(balance <700){
     console.log("balance is less than 700 ");
     
}else if (balance < 900) {
    console.log("balanece is less than 900");
    
}else if(balance <1222){
    console.log("balance is less than 1222");
    
}else {
  console.log("balance is less than 100000000");
  
}

const isloggedin =true
const hasDebitCard=true
const isLoggedByMail =false
if (isloggedin && hasDebitCard && 2==3) {
    console.log(`Allow user to do shopping`);
    
} 
if(isloggedin || isLoggedByMail){
    console.log(`allow user to login with or without email`);
    
}

