const express = require('express')

const app = express() // same as creating server in node js (http.createServer)

app.use((req, res, next) =>{
    const time = new Date().toLocaleTimeString();
    console.log(`${time} ${req.method} ${req.url}`);
    next()    
})

app.get('/', (req, res) => {
    res.status(200).send('Hello from home page')
    console.log('home page');
    
})

app.listen(3000, () => {
    console.log(`Server is running at port http://localhost:3000`);    
})

