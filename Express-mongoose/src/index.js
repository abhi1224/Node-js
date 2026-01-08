import 'dotenv/config'
import express from 'express'
import userRoutes from './routes/userRoutes.js'
import connectDB from './config/db.js'

const app = express()
const PORT = process.env.PORT || 3000



app.use(express.json())

connectDB() // Database connection

app.use((req, res, next) => {
    const time = new Date().toISOString()
    console.log(`Request received at ${req.originalUrl} with [${req.method}] method on [${time}]`);
    next()
})

app.use('/user', userRoutes)

app.all('/user', (req, res) => {
    return res.status(405).json({
        success: false,
        statusCode: 405,
        message: 'Method not allowed'
    })
})

app.use('/user', (req, res) => {
    return res.status(404).json({
        success: false,
        statusCode: 404,
        message:'Page not found'
    })
})

app.listen(PORT, () => {
    console.log(`Server is runnign at port ${PORT}`);    
})