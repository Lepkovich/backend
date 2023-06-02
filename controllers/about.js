class AboutController {
    static getAbout(req, res) {
        res.render('about', { // рендерим страничку
            title: 'about' // передаем объект для шаблонизатора
        })
    }
}

module.exports = AboutController; //экспортируем модуль