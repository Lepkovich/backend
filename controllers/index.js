const path = require('path') // импортируем модуль path (позволяет работать с путями файловой системы)

class IndexController {
    static getIndex(req, res) {
        res.sendFile(path.resolve(__dirname + '/../views/index.html'));
    }
}

module.exports = IndexController; //экспортируем модуль