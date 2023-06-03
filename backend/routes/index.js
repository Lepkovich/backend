const IndexController = require('../controllers');
const express = require('express') // импортируем модуль express

const router = express.Router();

router.get('/', IndexController.getIndex);

module.exports = router;