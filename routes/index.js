const IndexController = require('../controllers/index');
const express = require('express') // импортируем модуль express

const router = express.Router();

router.get('/', IndexController.getIndex);

module.exports = router;