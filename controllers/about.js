const path = require('path') // импортируем модуль path (позволяет работать с путями файловой системы)

class AboutController {
    static getAbout(req, res) {
        res.sendFile(path.resolve(__dirname + '/../views/about.html'));
    }
}

module.exports = AboutController; //экспортируем модуль