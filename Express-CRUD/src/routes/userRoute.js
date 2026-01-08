import express from 'express'
import { addUserController, getUserController } from "../controllers/userControllers.js";

const router = express.Router()

router.get('/', getUserController)
router.post('/', addUserController)

export default router;