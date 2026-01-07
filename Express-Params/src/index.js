import 'dotenv/config'
import express from 'express'
import userRoutes from './routes/userRoutes.js'


const app = express()
const PORT = process.env.PORT

app.use(express.json())

app.use((req, res, next) => {
    const time = new Date().toISOString();
    console.log(`Request receive at ${req.originalUrl} with method [${req.method}] on time [${time}]`);    
    next()
})

app.use('/user', userRoutes)

app.use((req, res) => {
    return res.status(404).json({
        statusCode: 404,
        success: false,
        message: 'Page Not Found'
    })
})

app.listen(ORT, () => {
    console.log('Server is running at port ${PORT');    
})