import { Router } from 'express';
import { allCoffee, oneCoffee, addCoffeePage, addCoffee } from '../controllers/coffeeController';

const router = Router();

// GET /coffee - renders a list of coffee items
router.get('/', allCoffee);

// GET /coffee/add - render the add coffee item page
router.get('/add', addCoffeePage);

// POST /coffee/add - add coffee item to array
router.post('/add', addCoffee);

// GET /coffee/:name - render the coffee item requested
router.get('/:name', oneCoffee);


export default router;