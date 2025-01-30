
for (let i = 0; i <= 10; i++) {
    console.log(i);
        
}
// for ( let i=0 ; i<=10 ; i++){
//   console.log(`Outer i value ${i}`);
  
//     for(let j= 0 ; j<=10; j++){
//         console.log(`Inner j value ${j}`);
        
//     }
// }
// console.log("Printing table one two 10");

// for (let i =1; i <= 10; i++) {

//     console.log(`\n Table of ${i} \n`);
    
//    for (let j = 1; j <= 10; j++) {
//    console.log(`${i} * ${j} = ${i*j}`);
   
//    }
    
// }

const myarr =["Rohit", "Virat ","Surya", "Dhoni","Hardik"]

for (let i = 0; i < myarr.length; i++) {
   console.log(myarr[i]);
   
}

// break and continue
// break .>> stop the execution flow of the code at the condition it match
for (let i =1; i <10; i++){
    
    if( i==5){
        console.log(`Number ${5} found`);
        break;
    }
    console.log(i);
    
}
// continue ..>> skipps the current itteration

for (let i =1; i <10; i++){
    
    if( i==5){
        console.log(`Number ${5} skipped`);
       continue
    }
    console.log(i);
    
}