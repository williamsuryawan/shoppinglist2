const express = require('express');
const router = express.Router();

const StudyController = require('../controllers/studyController')

// console.log("hello from shopping ====")
router.get('/', StudyController.getAllList);
router.post('/', StudyController.createList);

module.exports = router;