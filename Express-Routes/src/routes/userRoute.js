import express from 'express'
import { getUser , addUser, getUserById} from '../controllers/userController.js'

const router = express.Router()

router.use((req, res, next) => {
    console.log('User route level middleware');
    next()    
})

router.get('/', getUser)
router.post('/', addUser)
router.get('/:id', getUserById)

router.all('/', (req, res) => {
    res.status(405).json({
        success: false, 
        message: 'Method not allowed'
    })
})

router.use((req, res) => {
    res.status(404).json({
        success: false,
        message: 'Page not found'
    })
})

export default router;