const CardController = require('../controllers/card');
const express = require('express') // импортируем модуль express

const router = express.Router();

router.get('/', CardController.getCards); //запрос и формирование урла для всех карточек
router.get('/:id', CardController.getCard); //запрос и формирование урла для отдельной карточки
router.post('/', CardController.addCard); //добавление карточки
router.put('/:id', CardController.changeCard); //изменение карточки
router.delete('/:id', CardController.deleteCard); //удаление карточки

module.exports = router;