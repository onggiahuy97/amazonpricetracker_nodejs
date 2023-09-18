const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController.js');

router.get('/', apiController.getItem);
router.get('/:id', apiController.getItemById)
router.get('/hello', apiController.sayHello)

module.exports = router;