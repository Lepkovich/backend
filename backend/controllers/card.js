const CardModel = require('../models/card');

class CardController {
    static async getCards(req, res) {
        const cards = await CardModel.findAll(); //метод поиска всех карточек
        res.send(cards) //отправляем карточки в ответ на наш запрос
    }
    static async getCard(req, res) {
        const {id} = req.params; // соответствует const id=req.params.id

        const card = await CardModel.find(id); //метод поиска одной модели по id
        res.send(card) //отправляем карточку в ответ на наш запрос
    }
    static async addCard(req, res) {
        const product = await CardModel.create(req.body); //метод добавления модели
        res.send(product) //отправляем продукт в ответ на наш запрос
    }
    static async changeCard(req, res) {
        const {id} = req.params;
        const card = await CardModel.change(id, req.body); //метод изменения карточки по id
        res.send(card) //отправляем карточку в ответ на наш запрос
    }
    static async deleteCard(req, res) {
        const {id} = req.params;
        await CardModel.delete(id); //метод удаления карточки по id
        res.send({}) //отправляем пустой ответ на наш запрос, т.к. карточку мы удалили
    }
}

module.exports = CardController; //экспортируем модуль