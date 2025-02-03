// almost all of the things are same as java

const obj ={
    uName : "shubham",
    lName : "Rananaware",

    UserDetails : function(){
        console.log("mmmmmmmmmmm");
        
    }

}
console.log(obj.UserDetails());
console.log(this);


function user(userName, email, MobNo){

    this.MobNo=MobNo
    this.userName=userName
    this.email=email

    return this
}
 const u1=user("SR","sr@gmail.com",999909909)
 const u2 = user("SR2","sr@gmail.com2",99990990922222)
 
 console.log(u1);// here the values of u1 are replaced by u2
 // to avoid it 
  

  const u3= new user("SR3","sr@gmail.com3",99990990933333)
 const u4 = new user("SR4","sr@gmail.com4",99990944444)

console.log(u3);
console.log(u4);


