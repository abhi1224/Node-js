import express from 'express'
import { createUser } from '../controllers/userController.js';

const router = express.Router();

router.use((req, res, next) => {
    console.log('Inside the roter middleware');
    next()    
})

router.post('/', createUser)


export default router