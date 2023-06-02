class IndexController {
    static getIndex(req, res) {
        res.render('index', { // рендерим страничку
            title: 'index' // передаем объект для шаблонизатора
        })
    }
}

module.exports = IndexController; //экспортируем модуль