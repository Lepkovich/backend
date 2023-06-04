const ProductModel = require('../models/product');

class ProductController {
    static async getProducts(req, res) {
        const products = await ProductModel.findAll(); //метод поиска всех моделей
        res.send(products) //отправляем продукты в ответ на наш запрос
    }
    static async getProduct(req, res) {
        const {id} = req.params; // соответствует const id=req.params.id

        const product = await ProductModel.find(id); //метод поиска одной модели по id
        res.send(product) //отправляем продукт в ответ на наш запрос
    }
    static async addProduct(req, res) {
        const product = await ProductModel.create(req.body); //метод добавления модели
        res.send(product) //отправляем продукт в ответ на наш запрос
    }
    static async changeProduct(req, res) {
        const {id} = req.params;
        const product = await ProductModel.change(id, req.body); //метод изменения модели по id
        res.send(product) //отправляем продукт в ответ на наш запрос
    }
    static async deleteProduct(req, res) {
        const {id} = req.params;
        await ProductModel.delete(id); //метод удаления модели по id
        res.send({}) //отправляем пустой ответ на наш запрос, т.к. продукт мы удалили
    }
}

module.exports = ProductController; //экспортируем модуль