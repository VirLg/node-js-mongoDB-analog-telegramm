import { Router } from 'express';
import userController from '../controllers/auth-controller.js';
import { addUserJoiShema } from '../models/UserModelMongoose.js';
import isValidId from '../middlevars/isValidId.js';
const { getCurrent, addUser, getUserById } = userController;
const router = Router();

router.get('/', getCurrent);
router.get('/:id', isValidId, getUserById);
// router.post('/add', addUserJoiShema, addUser);

export default router;
