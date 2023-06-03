const ProductModel = require('../models/product');

class ProductController {
    static async getProducts(req, res) {
        //get data
        const products = await ProductModel.findAll();

        res.render('products', { // рендерим страничку
            title: 'products', // передаем объект для шаблонизатора
            products: products
        })
    }
}

module.exports = ProductController; //экспортируем модуль