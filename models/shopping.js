const mongoose = require('mongoose')
const Schema = mongoose.Schema

const shoppingSchema = new Schema ({
    date: {
        type: Date
    },
    name: {
        type: String
    },
    price: {
        type: Number
    },
    description: {
        type: String
    }
})

let Shopping = mongoose.model('Shopping', shoppingSchema)

module.exports = Shopping