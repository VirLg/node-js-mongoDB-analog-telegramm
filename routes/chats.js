import { Router } from 'express';
import routeCars from '../controllers/chats-controller.js';
import isValidId from '../middlevars/isValidId.js';
import validateBody from '../helpers/validateBody.js';
import { addMessageJoiSchema } from '../models/ChatModelMongoose.js';
const { getAllChats, addMessage, deleteById, updateMessageById } = routeCars;
const router = Router();
const messageAddValidate = validateBody(addMessageJoiSchema);

router.get('/', getAllChats);
router.post('/add', messageAddValidate, addMessage);
router.delete('/:messageId', isValidId, deleteById);
router.put('/:messageId', isValidId, updateMessageById);
router.patch('/:messageId/messageUpdate', isValidId, updateMessageById);
export default router;

// повинні бути такі маршрути: “/” - домашня сторінка з загальним описом послуг, що надає компанія “/catalog” - сторінка, що містить каталог автівок різної комплектації “/favorites” - сторінка з оголошеннями, які були
