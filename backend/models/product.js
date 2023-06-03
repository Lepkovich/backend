const fs = require('fs'); //подключим модуль file system
const path = require('path'); //подключим модуль path

class ProductModel {
    static async findAll() {
        return new Promise((resolve, reject) => {
            fs.readFile(path.join( __dirname, '../db', 'products.json'), //прочитаем файл по сформированному пути
                'utf-8', (error, data) => { //вызовем колбэк
                if (error) {
                    reject(error); //обработаем ошибку
                } else {
                    resolve(JSON.parse(data)); //распарсим данные файла products.json
                }
            })
        });
    }
}

module.exports = ProductModel; //экспортируем нашу функцию