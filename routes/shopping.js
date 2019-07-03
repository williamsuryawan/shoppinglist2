const express = require('express');
const router = express.Router();

const ShoppingController = require('../controllers/shoppingController')

// console.log("hello from shopping ====")
router.get('/', ShoppingController.getAllShoppingList);
router.post('/', ShoppingController.createShoppingList);

module.exports = router;