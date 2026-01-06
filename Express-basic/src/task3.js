const express = require('express');
const app = express();

// AUTH MIDDLEWARE
const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).send('401 Unauthorized');
    }

    // attach user info to request
    req.user = authHeader; // example: "Abhishek"

    next(); 
};

app.get('/profile', authMiddleware, (req, res) => {
    res.status(200).send(`Hello from ${req.user}`);
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
