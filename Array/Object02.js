 const myobj = new Object()
console.log(myobj);

// can define objects in both the types

 const obj ={}
 console.log(obj);
 
 const user1={
 
    email : "shubham@gmail.com",
    fullname : {
        username : {
            firstname: "Shubham",
            lastname : "Rananaware"
        }
    }
 }
 console.log(user1.email);
 console.log(user1.fullname);
 console.log(user1.fullname.username);
 console.log(user1.fullname.username.firstname);
 
 // ? For Optional Chaining
 console.log(user1.fullname?.username.firstname);
 
 const obj1 ={1:"A",2:"B"}
 const obj2 ={3:"C",4:"D"}
 const obj4 ={5:"E",6:"f"}
 //let obj3= Object.assign(obj1,obj2,obj4) // assing used less / spread is used more
//  console.log(obj3);
 console.log(obj1);
 
 // obj1 is the target source all data will be stored in it
 // to avoid this
 let obj5= Object.assign({},obj1,obj2,obj4)
 console.log(obj5 );
 
 // ... spread Operator
 const objj ={...obj1,...obj2,...obj4}// no need to use extra {} here
 console.log(objj);
 

 const Users=[{
    id: 1,
    fName: "Shubham"
    },
    {
        id: 2,
        Fname: "Saurabh"
    },
    {
        id:3,
        Lname: "Rananaware"
    }
]

console.log(Users);
console.log(Users[1].Fname);//Index
console.log(objj);

console.log(Object.keys(objj));// returns keys In Array format
console.log(Object.values(objj));//returns Values In Array Form
console.log(Object.entries(objj));// return seperate arry for each K/V pair 




