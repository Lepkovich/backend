const AboutController = require('../controllers/about');
const express = require('express') // импортируем модуль express

const router = express.Router();

router.get('/', AboutController.getAbout);

module.exports = router;