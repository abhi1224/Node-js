const http = require("http")

const server = http.createServer((req, res) => {
    res.end("Hello form server")
})

server.listen(3000, (req, res) => {
    console.log(`Server running at port http://localhost:${3000}`);
    
})