const express = require('express') // импортируем модуль express
const path = require('path') // импортируем модуль path (позволяет работать с путями файловой системы)
const indexRoutes = require('./routes/index') // импортируем наши роуты
const aboutRoutes = require('./routes/about')
const contactRoutes = require('./routes/contact')
const productRoutes = require('./routes/product')

const app = express() // создаем express приложение

app.use(express.static(path.join(__dirname, '/public'))); //use позволяет заглянуть внутрь запроса до того, как он начал исполняться
//express.static - функция проверяет является ли страница статической
// path.join - формируем строку url

app.use('/', indexRoutes) ;
app.use('/about', aboutRoutes) ;
app.use('/contact', contactRoutes) ;
app.use('/products', productRoutes) ;



app.listen(process.argv[2], ()=>{ //запускаем наш сервер
    console.log('сервер запущен');
})

