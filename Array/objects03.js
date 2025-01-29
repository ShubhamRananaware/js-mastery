// Destrucuting...

const details= {
    name: "shubham",
    Mobile : 7083347185,
    age : 24
}
//1
console.log(details.Mobile);
 // 2
const {Mobile} = details
console.log(Mobile);
// 3
const {Mobile:mobno} = details
console.log(mobno);
