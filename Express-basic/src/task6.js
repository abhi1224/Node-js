const express = require('express');
const app = express();

let requestCount = 0;

// Request Counter Middleware
const requestCounter = (req, res, next) => {
    requestCount++;
    const time = new Date().toISOString();
    console.log(`[${requestCount}] ${time} ${req.method} ${req.url}`);
    next();
};

app.use(requestCounter);

app.get('/', (req, res) => {
    res.status(200).send('Hello from home page');
});

app.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});
