const Study = require('../models/study')

class studyController {
    static getAllList (req,res, next) {
        Study
            .find({})
            .then(studylist => {
                res.status(200).json(studylist)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static createList (req,res,next) {
        Study
            .create({
                name: req.body.name,
                description: req.body.description,
                subject: req.body.subject,
                date: new Date()
            })
            .then(newStudyList => {
                res.status(200).json(newStudyList)
            })
    }
}

module.exports = studyController;