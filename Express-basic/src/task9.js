const express = require('express');
const app = express();

app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.status(200).json({
        message: 'User fetched using params',
        userId
    });
});

app.get('/users', (req, res) => {
    const userId = req.query.userId || null;
    res.status(200).json({
        message: 'User fetched using query',
        userId
    });
});

app.use((req, res) => {
    res.status(404).json({ message: '404 Page Not Found' });
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
