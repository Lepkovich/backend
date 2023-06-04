const ProductController = require('../controllers/product');
const express = require('express') // импортируем модуль express

const router = express.Router();

router.get('/', ProductController.getProducts); //запрос и формирование урла для всех продуктов
router.get('/:id', ProductController.getProduct); //запрос и формирование урла для отдельного продукта
router.post('/', ProductController.addProduct); //добавление продукта
router.put('/:id', ProductController.changeProduct); //изменение продукта
router.delete('/:id', ProductController.deleteProduct); //удаление продукта

module.exports = router;