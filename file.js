const fs = require("fs")
const os = require("os")

console.log(os.cpus().length);
// // Sync
// fs.writeFileSync("./text.txt", "Hey There")

// Async 
// fs.writeFile("./text.txt", "Hey There async" , (err) => {})


// readFileSync - return a value

console.log("1");
// Blocking ... 
const result = fs.readFileSync('./contacts.txt', "utf-8")
console.log(result);

console.log("2");


// readFileSync - not return a value

// Non-Blocking
console.log("1");

fs.readFile('./contacts.txt', "utf-8", (err, result) => {
     console.log(result);   
})
console.log("2");



fs.appendFileSync("./text.txt", "hello")

//  fs.cpSync("./text.txt", "./copy.txt")
// fs.unlinkSync("./copy.txt")
 