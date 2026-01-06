const express = require('express');
const app = express();

app.use((req, res, next) => {
    if(req.method === 'DELETE'){
        console.log('Delete method is not allowed');        
        return res.status(405).send('Delete method is not allowed')
    }
    next()
})
app.get('/', (req, res) => {
    res.status(200).send('Hello from home page')
})
app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
