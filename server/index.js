const http = require('http')
const fs = require('fs')
const myServer = http.createServer((req, res) => {
    const log = `${Date.now()} : ${req.url} New Req recieved \n`
    fs.appendFile('log.txt', log, (err, data) => {
        switch(req.url){
            case '/': res.end('Home page')
            break;
            case '/about':res.end('About page')
            break;
            case '/contact':res.end('contact page')
            break;
            default:
                res.end('404 Page not found')
        }
    })
    // console.log("New request rec.");
    // console.log(req);
});

myServer.listen(7000, () =>{
    console.log("Server Started !");
});