const express = require('express'); // импортируем модуль express
const productRoutes = require('./product');


const router = express.Router({mergeParams: true});

router.use('/products', productRoutes);

module.exports = router;