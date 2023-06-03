const ContactController = require('../controllers/contact');
const express = require('express') // импортируем модуль express

const router = express.Router();

router.get('/', ContactController.getContact);

module.exports = router;