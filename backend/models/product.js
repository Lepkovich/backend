const fs = require('fs'); //подключим модуль file system
const path = require('path'); //подключим модуль path

class ProductModel {
    static path = path.join( __dirname, '../db', 'products.json'); //вынесли путь в переменную path

    static async findAll() {
        return new Promise((resolve, reject) => {
            fs.readFile(this.path, //прочитаем файл по сформированному пути
                'utf-8', (error, data) => { //вызовем колбэк
                if (error) {
                    reject(error); //обработаем ошибку
                } else {
                    resolve(JSON.parse(data)); //распарсим данные файла products.json
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
                        const products = JSON.parse(data); //распарсим данные файла products.json в products
                        const product = products.find(item => parseInt(item.id) === parseInt(id));
                        //по id передадим продукт в product, предварительно приведя их к целым числам
                        if(product) {
                            resolve(product);
                        } else {
                            reject("Продукт не найден"); //обработаем ошибку
                        }
                    } catch (e) {
                        reject('невозможно обработать данные'); //обработаем ошибку
                    }
                }
            })
        });
    }
    static async create(newProduct) {
        return new Promise((resolve, reject) => {
            fs.readFile(this.path, //прочитаем файл по сформированному пути
                'utf-8', (error, data) => { //вызовем колбэк
                if (error) {
                    reject(error); //обработаем ошибку
                } else {
                    try {
                        const products = JSON.parse(data); //распарсим данные файла products.json в products
                        products.push(newProduct);//добавим новый продукт
                        const newJSON = JSON.stringify(products); //упаковываем products обратно в json
                        fs.writeFile(this.path, newJSON, 'utf-8', (error, data) => {
                            if (error) {
                                reject(error); //обработаем ошибку
                            } else {
                                resolve(newProduct);
                            }
                        })
                    } catch (e) {
                        reject('невозможно обработать данные'); //обработаем ошибку
                    }
                }
            })
        });
    }
    static async change(id, newProduct) {
        return new Promise((resolve, reject) => {
            fs.readFile(this.path, //прочитаем файл по сформированному пути
                'utf-8', (error, data) => { //вызовем колбэк
                if (error) {
                    reject(error); //обработаем ошибку
                } else {
                    try {
                        const products = JSON.parse(data); //распарсим данные файла products.json в products
                        const productIndex = products.findIndex(item => parseInt(item.id) === parseInt(id));
                        //по id передадим индекс в productIndex, предварительно приведя их к целым числам
                        if (productIndex > -1) { //первый правильный индекс - это 0
                            products[productIndex] = newProduct;
                            const newJSON = JSON.stringify(products); //упаковываем products обратно в json
                            fs.writeFile(this.path, newJSON, 'utf-8', (error, data) => {
                            //перезапишем наш json файл
                                if (error) {
                                    reject(error); //обработаем ошибку
                                } else {
                                    resolve(newProduct);
                                }
                            })
                        } else {
                            reject("Продукт не найден"); //обработаем ошибку
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
                        const products = JSON.parse(data); //распарсим данные файла products.json в products
                        const productIndex = products.findIndex(item => parseInt(item.id) === parseInt(id));
                        //по id передадим индекс в productIndex, предварительно приведя их к целым числам
                        if (productIndex > -1) { //первый правильный индекс - это 0
                            products.splice(productIndex, 1);//метод удаления 1 продукта из массива
                            const newJSON = JSON.stringify(products); //упаковываем products обратно в json
                            fs.writeFile(this.path, newJSON, 'utf-8', (error, data) => {
                            //перезапишем наш json файл
                                if (error) {
                                    reject(error); //обработаем ошибку
                                } else {
                                    resolve();
                                }
                            })
                        } else {
                            reject("Продукт не найден"); //обработаем ошибку
                        }
                    } catch (e) {
                        reject('невозможно обработать данные'); //обработаем ошибку
                    }
                }
            })
        });
    }
}

module.exports = ProductModel; //экспортируем нашу функцию