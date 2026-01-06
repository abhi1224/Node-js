const express = require('express');
const app = express();



app.get('/', (req, res) => {
    res.status(200).send(`
        <h3>Hello From Home Page</h3>
        <p>Request received at: ${req.requestTime}</p>
    `);
});

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    console.log(`[${req.method}] ${req.url} at ${req.requestTime}`);
    next();
});

app.get('/about', (req, res) => {
    res.status(200).send(`
        <h3>Hello From About Page</h3>
        <p>Request received at: ${req.requestTime}</p>
    `);
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
