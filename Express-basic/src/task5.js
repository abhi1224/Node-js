const express = require('express');
const app = express();

app.use(express.json());

const userValidationMiddleware = (req, res, next) => {
    if (!req.body.name) {
        return res.status(400).json({
            error: 'Name is required'
        });
    }
    next();
};

app.get('/', (req, res) => {
    res.status(200).send('Hello from home page');
});

app.post('/users', userValidationMiddleware, (req, res) => {
    res.status(201).json({
        message: `Hello ${req.body.name}`
    });
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
