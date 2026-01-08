import 'dotenv/config'
import express from 'express'
import mongoose from 'mongoose'
import connectDB from './config/db.js'
import userRoute from './routes/userRoute.js'

const app = express()
app.use(express.json())

connectDB()

const PORT = process.env.PORT

app.use((req, res, next) => {
    const time = new Date().toISOString();
    console.log(`Request received at [${req.originalUrl}] with [${req.method}] method at [${time}]`);    
    next()
})

app.get('/', (req, res) => {
    res.status(200).json({
        success: true, 
        statusCode: 200,
        message: "Hello from home page"
    })
})

app.use('/user', userRoute)

app.use('/', (req, res) => {
    return res.status(404).json({
        success: false,
        statusCode: 404,
        message: "Page not found"
    })
})

app.listen(PORT, () => {
    console.log(`Server running at port http://localhost:${PORT}`);    
})