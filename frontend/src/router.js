import {Cards} from "./components/cards.js";
import {Card} from "./components/card.js";

export class Router {
    constructor() {
        this.routes = [
            {
                route: '#/',
                title: 'Главная',
                view: 'views/index.html',
                load: () => {
                }
            },
            {
                route: '#/about',
                title: 'О нас',
                view: 'views/about.html',
                load: () => {
                }
            },
            {
                route: '#/contact',
                title: 'Контакты',
                view: 'views/contact.html',
                load: () => {
                }
            },
            {
                route: '#/products',
                title: 'Продукты',
                view: 'views/products.html',
                load: () => {
                    //здесь мы запустим скрипты из бэкенда
                    new Cards(); // класс Cards создали в cards.js
                }
            },
            {
                route: '#/product',
                title: 'Продукт',
                view: 'views/product.html',
                load: () => {
                    //здесь мы запустим скрипты из бэкенда
                    new Card(); // класс CardCard создали в cardcard.js
                }
            }
        ];
    }

    async openRoute() {
        const newRoute = this.routes.find(item => {
            const onlyHash = window.location.hash.split('?')[0];
            return onlyHash === item.route;
        });
        if (!newRoute) {
            window.location.href = '#/';
            return;
        }
        document.getElementById('app').innerHTML = await fetch(newRoute.view).then(response => response.text());
        newRoute.load();
    }
}
