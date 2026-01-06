import 'dotenv/config'
import express from "express"
import userRoute from './routes/userRoute.js'

const app = express()

app.use(express.json())

app.use((req, res, next) => {
    const time = new Date().toISOString();
    console.log(`Request receive at ${req.originalUrl} with method [${req.method}] on time [${time}]`);    
    next()
})

app.use('/users', userRoute)

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running at port 3000');    
})
