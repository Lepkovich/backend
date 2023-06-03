import {Router} from "./router.js";

class App {
    constructor() {
        this.router = new Router();
        window.addEventListener('DOMContentLoaded', this.handleRouteChanging.bind(this)); //по загрузке страницы вызовем роутер
        window.addEventListener('popstate', this.handleRouteChanging.bind(this)); //при смене url вызовем роутер
    }
    handleRouteChanging() {
        this.router.openRoute();
    }
}

(new App()); //запуск