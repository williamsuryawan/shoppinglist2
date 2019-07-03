const express = require('express');
const router = express.Router();

// console.log("hello here =====")
router.get('/')
router.use('/shopping', require('./shopping'));

module.exports = router;