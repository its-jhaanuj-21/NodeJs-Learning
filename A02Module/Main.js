const math = require("./maths")



// console.log(math)   // {}  [until we did not export]


// console.log(math)   // Anuj [after module.exports = "ANUJ";]



// console.log(math)   // [Function: add] [after module.exports = add;]   
// console.log(math(5,6)) // now we can use math() to call add function 


// console.log(math)   // { sum: [Function: add], diff: [Function: sub] } [after module.exports = { sum: add, diff: sub};]   
// console.log(math.sum(5,6));
// console.log(math.diff(15,6));


// console.log(math)   // { add: [Function: add], sub: [Function: sub] } [after module.exports = {add, sub};]   

console.log(math.add(5,6))
console.log(math.sub(11,6))



