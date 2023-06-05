const fs = require('fs'); //подключим модуль file system
const path = require('path'); //подключим модуль path

class CardModel {
    static path = path.join( __dirname, '../db', 'cards.json'); //вынесли путь в переменную path

    static async findAll() {
        return new Promise((resolve, reject) => {
            fs.readFile(this.path, //прочитаем файл по сформированному пути
                'utf-8', (error, data) => { //вызовем колбэк
                if (error) {
                    reject(error); //обработаем ошибку
                } else {
                    resolve(JSON.parse(data)); //распарсим данные файла cards.json
                }
            })
        });
    }
    static async find(id) {
        return new Promise((resolve, reject) => {
            fs.readFile(this.path, //прочитаем файл по сформированному пути
                'utf-8', (error, data) => { //вызовем колбэк
                if (error) {
                    reject(error); //обработаем ошибку
                } else {
                    try {
                        const cards = JSON.parse(data); //распарсим данные файла cards.json в products
                        const card = cards.find(item => parseInt(item.id) === parseInt(id));
                        //по id передадим продукт в product, предварительно приведя их к целым числам
                        if(card) {
                            resolve(card);
                        } else {
                            reject("Карточка не найдена"); //обработаем ошибку
                        }
                    } catch (e) {
                        reject('невозможно обработать данные'); //обработаем ошибку
                    }
                }
            })
        });
    }
    static async create(newCard) {
        return new Promise((resolve, reject) => {
            fs.readFile(this.path, //прочитаем файл по сформированному пути
                'utf-8', (error, data) => { //вызовем колбэк
                if (error) {
                    reject(error); //обработаем ошибку
                } else {
                    try {
                        const cards = JSON.parse(data); //распарсим данные файла cards.json в products
                        cards.push(newCard);//добавим новый продукт
                        const newJSON = JSON.stringify(cards); //упаковываем cards обратно в json
                        fs.writeFile(this.path, newJSON, 'utf-8', (error, data) => {
                            if (error) {
                                reject(error); //обработаем ошибку
                            } else {
                                resolve(newCard);
                            }
                        })
                    } catch (e) {
                        reject('невозможно обработать данные'); //обработаем ошибку
                    }
                }
            })
        });
    }
    static async change(id, newCard) {
        return new Promise((resolve, reject) => {
            fs.readFile(this.path, //прочитаем файл по сформированному пути
                'utf-8', (error, data) => { //вызовем колбэк
                if (error) {
                    reject(error); //обработаем ошибку
                } else {
                    try {
                        const cards = JSON.parse(data); //распарсим данные файла cards.json в products
                        const productIndex = cards.findIndex(item => parseInt(item.id) === parseInt(id));
                        //по id передадим индекс в productIndex, предварительно приведя их к целым числам
                        if (productIndex > -1) { //первый правильный индекс - это 0
                            cards[productIndex] = newCard;
                            const newJSON = JSON.stringify(cards); //упаковываем cards обратно в json
                            fs.writeFile(this.path, newJSON, 'utf-8', (error, data) => {
                            //перезапишем наш json файл
                                if (error) {
                                    reject(error); //обработаем ошибку
                                } else {
                                    resolve(newCard);
                                }
                            })
                        } else {
                            reject("Карточка не найдена"); //обработаем ошибку
                        }
                    } catch (e) {
                        reject('невозможно обработать данные'); //обработаем ошибку
                    }
                }
            })
        });
    }
    static async delete(id) {
        return new Promise((resolve, reject) => {
            fs.readFile(this.path, //прочитаем файл по сформированному пути
                'utf-8', (error, data) => { //вызовем колбэк
                if (error) {
                    reject(error); //обработаем ошибку
                } else {
                    try {
                        const cards = JSON.parse(data); //распарсим данные файла cards.json в cards
                        const cardIndex = cards.findIndex(item => parseInt(item.id) === parseInt(id));
                        //по id передадим индекс в cardIndex, предварительно приведя их к целым числам
                        if (cardIndex > -1) { //первый правильный индекс - это 0
                            cards.splice(cardIndex, 1);//метод удаления 1 продукта из массива
                            const newJSON = JSON.stringify(cards); //упаковываем cards обратно в json
                            fs.writeFile(this.path, newJSON, 'utf-8', (error, data) => {
                            //перезапишем наш json файл
                                if (error) {
                                    reject(error); //обработаем ошибку
                                } else {
                                    resolve();
                                }
                            })
                        } else {
                            reject("Карточка не найдена"); //обработаем ошибку
                        }
                    } catch (e) {
                        reject('невозможно обработать данные'); //обработаем ошибку
                    }
                }
            })
        });
    }
}

module.exports = CardModel; //экспортируем нашу функцию