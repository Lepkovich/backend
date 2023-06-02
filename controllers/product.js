const path = require('path') // импортируем модуль path (позволяет работать с путями файловой системы)

class ProductController {
    static getProducts(req, res) {
        res.sendFile(path.resolve(__dirname + '/../views/products.html'));
    }
}

module.exports = ProductController; //экспортируем модуль