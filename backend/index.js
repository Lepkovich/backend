const http = require('http'); // импортируем модуль http
const fs = require('fs'); // импортируем модуль file system

const server = http.createServer((req, res) => { //колбэк функция, которая вызовется когда сервер будет создан
    res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});  // создали успешный статус нашего запроса
    // а в {} передали параметры кодировки

    let file = 'index';//объявим имя файла по умолчанию

    //создаем систему роутинга:
    switch (req.url) { // отдаст строку после / в адресе (3000/...
        case '/about':
            file = 'about' //переназначаем имя файла
            break;
        case '/contact':
            file = 'contact'
            break;
        // default:  - можем убрать

    }

    fs.readFile('./views/' + file + '.html', 'utf8', (err, data) =>{ //прочитать файл по указанному пути
        res.write(data); // и вывести этот файл на фронт
        res.end() // завершаем наш запрос
        //тк мы используем fs.readFile асинхронно, то и завершать его нужно здесь
    })

    //res.end() - если завершить здесь, то он произойдет раньше, чем наш колбэк в асинхронной функции

})

server.listen(process.argv[2], ()=>{ //запускаем наш сервер на порту 3000 с колбэк функцией
    //process.argv[2] - берем третий аргумент из process (2 первых всегда заняты). это 3000 в package.json start
    console.log('сервер запущен');
})
