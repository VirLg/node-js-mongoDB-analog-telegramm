import { Router } from 'express';
import userController from '../controllers/auth-controller.js';
import { addUserJoiShema } from '../models/UserModelMongoose.js';
const { getCurrent, addUser } = userController;
const router = Router();

router.get('/', getCurrent);
router.post('/add', addUserJoiShema, addUser);

export default router;
