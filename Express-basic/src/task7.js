const express = require('express');
const app = express();

// Home route
app.get('/', (req, res) => {
    res.status(200).send('Hello from home page');
});

// Error route (INTENTIONALLY THROW ERROR)
app.get('/error', (req, res, next) => {
    const error = new Error('Something went wrong');
    error.status = 500;
    next(error); // this triggers error middleware
});

// Error-handling middleware 
app.use((err, req, res, next) => {
    console.error(err.message);

    res.status(err.status || 500).json({
        success: false,
        message: err.message
    });
});

app.use((req, res) => {
    res.status(404).send('Page not found');
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
