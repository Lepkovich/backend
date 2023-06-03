class ContactController {
    static getContact(req, res) {
        res.render('contact', { // рендерим страничку
            title: 'contact' // передаем объект для шаблонизатора
        })
    }
}

module.exports = ContactController; //экспортируем модуль 