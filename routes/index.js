const express = require('express');
const router = express.Router();

// console.log("hello here =====")
router.get('/')
router.use('/study', require('./study'));

module.exports = router;