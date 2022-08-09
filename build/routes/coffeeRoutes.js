"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const coffeeController_1 = require("../controllers/coffeeController");
const router = (0, express_1.Router)();
// GET /coffee - renders a list of coffee items
router.get('/', coffeeController_1.allCoffee);
// GET /coffee/add - render the add coffee item page
router.get('/add', coffeeController_1.addCoffeePage);
// POST /coffee/add - add coffee item to array
router.post('/add', coffeeController_1.addCoffee);
// GET /coffee/:name - render the coffee item requested
router.get('/:name', coffeeController_1.oneCoffee);
exports.default = router;
