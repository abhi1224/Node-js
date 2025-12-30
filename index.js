const http = require("http")

const server = http.createServer((req, res) => {
    switch (req.url) {
        case '/':
            res.end("<h1>Home page !</h1>")            
            break;
    
        case '/about':
            res.end("<h1>About page !</h1>")            
            break;
    
        default:
            break;
    }  
})

server.listen(7000, () => {
    console.log("Server is running at port 7000");    
})