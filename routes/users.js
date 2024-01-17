import { Router } from 'express';
import userController from '../controllers/auth-controller.js';
const { getCurrent } = userController;
const router = Router();

router.get('/current', getCurrent);

export default router;
