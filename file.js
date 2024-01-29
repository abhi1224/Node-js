const fs = require("fs")

// // Sync
// fs.writeFileSync("./text.txt", "Hey There")

// Async 
// fs.writeFile("./text.txt", "Hey There async" , (err) => {})


// readFileSync - return a value
const result = fs.readFileSync('./contacts.txt', "utf-8")
console.log(result);

// readFileSync - not return a value

fs.readFile('./contacts.txt', "utf-8", (err, result) => {
    if(err){
        console.log('Error', err);
    }
    else{
        console.log(result);
    }
})


fs.appendFileSync("./text.txt", "hello")

//  fs.cpSync("./text.txt", "./copy.txt")
fs.unlinkSync("./copy.txt")
