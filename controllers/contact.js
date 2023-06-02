const path = require('path') // импортируем модуль path (позволяет работать с путями файловой системы)

class ContactController {
    static getContact(req, res) {
        res.sendFile(path.resolve(__dirname + '/../views/contact.html'));
    }
}

module.exports = ContactController; //экспортируем модуль 