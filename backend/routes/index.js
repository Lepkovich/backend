const express = require('express'); // импортируем модуль express
const cardRoutes = require('./card');


const router = express.Router({mergeParams: true});

// router.use('/products', productRoutes);
router.use('/cards', cardRoutes);

module.exports = router;