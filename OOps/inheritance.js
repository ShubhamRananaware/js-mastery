class User {
    constructor(username){
        this.username=username
    }
    logme(){
        console.log(`username is ${this.username}`);
        
    }
}
class employe extends User{
    constructor(username,email,pass){
        super(username)
        this.email=email
        this.pass=pass
    }
    addPolicy(){
        console.log(`A new policy was added by ${this.username}`);
    }
}
const obj1 = new employe("chai", "chai@employe.com", "123")

obj1.logme()
const obj2 = new User("masalaChai")

obj2.logme()

console.log(obj1 instanceof User);