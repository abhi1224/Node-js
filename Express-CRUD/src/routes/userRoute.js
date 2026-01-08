import express from 'express'
import { addUserController, getUserByIdController, getUserController, updateUserByIdController } from "../controllers/userControllers.js";

const router = express.Router()

router.get('/', getUserController)
router.post('/', addUserController)
router.get('/:id', getUserByIdController)
router.put('/:id', updateUserByIdController)

export default router;