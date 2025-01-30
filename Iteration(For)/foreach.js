// for each loop

// inbuilt in array
// call back function  doesn't have name 
const arr=["rohit","virat", "sky","hardik","me"]

arr.forEach(function(names){
    console.log(names);
    
})
// now using arrow function
arr.forEach((namee)=>console.log(`name is ${namee}`)
)

// for each  gives index also , array also not only the item in the array
arr.forEach((item , index , arry)=>{
    console.log(item , index , arry);
    
})

// array of objects

const arryObj =[
    {
        language: "JavaScript",
        shortcut :"js"
    },
   {
    language:"python",
    shortcut :"py"
   },
   {
    language : "Java",
    shortcut :" java"
   }
]

arryObj.forEach((item ,index) =>{
    console.log(`index is ${index}`);
    
    console.log(item.language);
 // console.log(...item);
   console.log(Array.of(item));

    
    
    
})