/**
 * 1. Cliet make request to server
 * 2. All requests queued under "EventQueue" of server
 * 3. then these request come under EVENT LOOP (it continuously checks event queue and remove request from queue in FIFO order).
 * 
 * 4. request can be Blocking Operation (Synchronous task) / Non-Blocking Operation (Asyncronous task)
 * 
 * 5. If non blocking operation then it simply process and send response to user for their request.
 * 
 * 6. If Blocking then => it go to Thread-Pool (if any of thread is free then assign work to thread to process the request and return the result)  [by default 4 threads] 
 * 
 * 
 * 
 * 
 */

const fs = require("fs");
const os = require("os");

// Synchronous: 
console.log("1")
console.log("2")
let res = fs.readFileSync("./text.txt", "utf-8");
console.log(res);
console.log("3")
console.log("4")

console.log("\n\n")

// Asynchronous: 
console.log("1")
console.log("2")
fs.readFile("./text.txt", "utf-8", (err, data) =>{
    console.log(data)
});
console.log("3")
console.log("4")



console.log(os.cpus().length)