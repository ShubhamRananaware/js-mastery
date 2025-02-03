let myName="Shubham890    "

console.log(myName.length);

// to avoid extra space 
console.log(myName.trim().length);

//console.log(myName.truelength);


const cricketer=["Sanju,Abhishek,Tilak"]

const KBD={
    playernm : "Sandip N",
    allRounder : "Aslam I",

    getallRounder :function(){
     console.log(`The top all Rounder is ${this.allRounder}`);
     
    }
}

// adding custom method to all 

Object.prototype.SR=function(){
    console.log(`SR is present in all the Objects`);
    
}
console.log(KBD.getallRounder());

console.log(KBD.SR());
console.log(cricketer.SR());

//
Array.prototype.crick =function(){
    console.log(`Shubham...is present in cricketer only Now`);
    
}
//console.log(KBD.kkkbd());because it will be avi for only ARRAY
console.log(cricketer.crick());

