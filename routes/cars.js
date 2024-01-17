import { Router } from 'express';
import routeCars from '../controllers/cars-controller.js';
const { getAllCars, addCar, deleteById, updateFavoriteById } = routeCars;
const router = Router();

router.get('/catalog', getAllCars);
router.post('/add', addCar);
router.delete('/:contactId', deleteById);
router.put('/:contactId', updateFavoriteById);
export default router;

// повинні бути такі маршрути: “/” - домашня сторінка з загальним описом послуг, що надає компанія “/catalog” - сторінка, що містить каталог автівок різної комплектації “/favorites” - сторінка з оголошеннями, які були
