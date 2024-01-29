// const http = require('http')
// const fs = require('fs')
// const url = require('url')
const express = require("express")
const app = express();

app.get('/', (req, res) => {
    return res.send("Hello From Home Page")
})
app.get('/about', (req, res) => {
    return res.send("Hello From About Page")
})
app.get('/contact', (req, res) => {
    return res.send("Hello From Contact Page")
})

app.listen(7000, ()=>{
    console.log('Server Started !');
})

// function myHandler( (req, res) => {

//     const log = `${Date.now()} : ${req.url} New Req recieved \n`
//     const myUrl = url.parse(req.url,true)
//     console.log(myUrl);
//     fs.appendFile('log.txt', log, (err, data) => {
        
//         switch(myUrl.pathname){
//             case '/': res.end('Home page')
//             break;
//             case '/about':
//                 // const username = myUrl.query.myname
//                 res.end('About page')
//             break;
//             case '/contact':res.end('contact page')
//             break;
//             default:
//                 res.end('404 Page not found')
//         }
//     })
// })
// const myServer = http.createServer(app);

// myServer.listen(7000, () =>{
//     console.log("Server Started !");
// });