const fs =  require("fs");

// Synchronous File
fs.writeFileSync("./text.txt", "Hello World form sync file!!");

// Asynchronous File
fs.writeFile("./text2.txt", "Hello From Asynch file!!", (err)=>{});




// Sync Read
const res = fs.readFileSync("./contacts.txt", "utf-8");
console.log(res)

// Async Read
fs.readFile("./abc.txt", "utf-8", (err, data)=>{
    if(err){
        console.log("Error: ", err);
    }else{
        console.log(data);
    }
})



fs.appendFileSync("./contacts.txt", `\n${Date.now()} Abc: +919897845261\n`)



fs.cpSync('./text.txt', './copy.txt')


fs.unlinkSync('./copy.txt')

console.log(fs.statSync("./text.txt"))


// creating folder

fs.mkdirSync("my-docs22");

fs.mkdirSync('my-docs2/a/b/c/d', { recursive: true });
