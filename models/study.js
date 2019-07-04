const mongoose = require('mongoose')
const Schema = mongoose.Schema

const studySchema = new Schema ({
    date: {
        type: Date
    },
    name: {
        type: String
    },
    subject: {
        type: String
    },
    description: {
        type: String
    }
})

let Study = mongoose.model('Study', studySchema)

module.exports = Study