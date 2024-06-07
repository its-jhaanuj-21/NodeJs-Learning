function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

// module.exports = "ANUJ";

// module.exports = add;

// module.exports = add;  // default export

/*
    module.exports = add;
    module.exports = sub;

    // here sub will override the sum function 
*/


// module.exports = {
//     sum: add,
//     diff: sub
// };


module.exports = {add, sub};



// exports.mul = (a,b) => a*b;
