const express = require('express'); // импортируем модуль express
const routes = require('./routes/index');
const cors = require('cors');

const app = express() // создаем express приложение

app.use(express.json()); //устанавливаем формат запросов/ответов в json
app.use(express.urlencoded({extended:false}));//установка правильных кодировок url-параметрам
app.use(cors()); //используем возможности cors (использование разных источников бэкенд и фронтенд)

app.use('/api', routes); // используем главный роутер для нашего бэкенд приложения


app.listen(process.argv[2], ()=>{ //запускаем наш сервер
    console.log('сервер запущен');
})

