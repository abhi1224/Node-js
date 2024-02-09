const express = require('express');
const app = express();

const PORT = 5000

app.listen(PORT, () => {
    console.log(`Server Started at http://localhost:${PORT}`);
})

// app.get('/', (req,res) => {
//     res.send('Hello from home page')
// })