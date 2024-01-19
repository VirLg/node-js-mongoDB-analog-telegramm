import { Router } from 'express';
import routeCars from '../controllers/chats-controller.js';
import isValidId from '../middlevars/isValidId.js';
const { getAllChats, addMessage, deleteById, updateMessageById } = routeCars;
const router = Router();

router.get('/', getAllChats);
router.post('/add', addMessage);
router.delete('/:messageId', isValidId, deleteById);
router.put('/:messageId', isValidId, updateMessageById);
export default router;

// повинні бути такі маршрути: “/” - домашня сторінка з загальним описом послуг, що надає компанія “/catalog” - сторінка, що містить каталог автівок різної комплектації “/favorites” - сторінка з оголошеннями, які були
