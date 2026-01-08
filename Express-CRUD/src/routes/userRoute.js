import express from 'express'
import { addUserController, getUserByIdController, getUserController } from "../controllers/userControllers.js";

const router = express.Router()

router.get('/', getUserController)
router.post('/', addUserController)
router.get('/:id', getUserByIdController)

export default router;