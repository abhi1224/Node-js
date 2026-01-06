const express = require('express');
const app = express();

const middleware1 = (req, res, next) => {
    console.log('Middleware 1');
    next();
};

const middleware2 = (req, res, next) => {
    console.log('Middleware 2');
    next();
};

app.get('/test', middleware1, middleware2, (req, res) => {
    console.log('Test route');
    res.status(200).send('Hello from test page');
});

app.use((req, res) => {
    res.status(404).send('404 page not found');
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
