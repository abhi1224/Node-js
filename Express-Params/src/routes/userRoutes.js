import express from 'express'
import { getUserById, getUserByQuery } from '../controllers/userController.js';

const router = express.Router();


router.get('/:id', getUserById)
router.get('/', getUserByQuery)

router.all('/',(req, res) => {
    return res.status(405).json({
        success: false, 
        statusCode: 405,
        message: 'Method Not Allowed'
    })
})
router.all('/:id',(req, res) => {
    return res.status(405).json({
        success: false, 
        statusCode: 405,
        message: 'Method Not Allowed'
    })
})

export default router