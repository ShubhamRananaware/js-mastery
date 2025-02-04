 
 class User{

    constructor(uName,email,pass){
        this.uName=uName
        this.email=email
        this.pass=pass
    }
    
    encryptPass(){
        return `${this.pass}xyz`
    }

    changename(){
        return this.uName.toUpperCase()
    }

 }
 const obj = new User("Shub","shu@gmail.cm","Shub123")
 console.log(obj);
 console.log(obj.encryptPass());
 console.log(obj.changename());

 //**************Behind The Scene********
console.log(`\n*******Without Classes********** \n`);

 function user(uName,email,pass){
    this.uName=uName
    this.email=email
    this.pass=pass
}
user.prototype.changename=function(){
    return this.uName.toUpperCase()
}

user.prototype.encryptPass=function(){
    return `${this.pass}xyz`
}
 
const obj1 = new user("Shubham","shubham@gmail.cm","Shubham123")
console.log(obj1.changename());
console.log(obj1.encryptPass());
