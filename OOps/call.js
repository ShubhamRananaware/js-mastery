function setusername(username){
    this.username=username
    console.log("Called");

    
}

function createUser(username,email,password){
  //  setusername(username) 
    setusername.call(this,username)
    this.email=email
    this.password=password
}
const userDetails =new   createUser("Shubham","shubham@gm.cm","Sr@11111#")
console.log(userDetails);
