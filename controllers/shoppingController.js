const Shopping = require('../models/shopping')

class shoppingController {
    static getAllShoppingList (req,res, next) {
        Shopping
            .find({})
            .then(shoppinglist => {
                res.status(200).json(shoppinglist)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static createShoppingList (req,res,next) {
        Shopping
            .create({
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                date: new Date()
            })
            .then(newTvSeries => {
                res.status(200).json(newTvSeries)
            })
    }
}

module.exports = shoppingController;