/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _router_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router.js */ \"./src/router.js\");\n\n\nclass App {\n    constructor() {\n        this.router = new _router_js__WEBPACK_IMPORTED_MODULE_0__.Router();\n        window.addEventListener('DOMContentLoaded', this.handleRouteChanging.bind(this)); //по загрузке страницы вызовем роутер\n        window.addEventListener('popstate', this.handleRouteChanging.bind(this)); //при смене url вызовем роутер\n    }\n    handleRouteChanging() {\n        this.router.openRoute();\n    }\n}\n\n(new App()); //запуск\n\n//# sourceURL=webpack://backend/./src/app.js?");

/***/ }),

/***/ "./src/components/products.js":
/*!************************************!*\
  !*** ./src/components/products.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Products: () => (/* binding */ Products)\n/* harmony export */ });\nclass Products{\n    constructor() {\n        this.productsElement = document.getElementById('products');\n\n        this.getProducts() //вызываем получение продуктов\n            .then(products => this.fillProducts(products)) //и передаем их в обработчик fillProducts\n    }\n\n    async getProducts() {//получение продуктов вынесем в отдельную функцию\n        const response = await fetch('http://localhost:3000/api/products');//запросим продукты\n      //  const products = await response.json(); //распарсим то, что получили\n      //  return products; //и вернем из функции продукты\n        return await response.json();//оптимизировали наш код\n    }\n\n    fillProducts(products) { //будем получать наши продукты\n        if(products && products.length >0) { //проверим на наличие продуктов\n            products.forEach(product => { //для каждого продукта создадим такой блок:\n               /* <div className=\"product\">\n                    <div className=\"title\">{{{title}}}</div>\n                    <div className=\"description\">{{{description}}}</div>\n                    <div className=\"price\">{{{price}}}</div>\n                </div> */\n            const productElement = document.createElement('div');\n            productElement.className = 'product';\n            // сделали строчку <div className=\"product\">\n\n            const titleElement = document.createElement('div');\n            titleElement.className = 'title';\n            titleElement.innerText = product.title;\n            //<div className=\"title\">{{{title}}}</div>\n\n            const descriptionElement = document.createElement('div');\n            descriptionElement.className = 'description';\n            descriptionElement.innerText = product.description;\n            //<div className=\"description\">{{{description}}}</div>\n\n            const priceElement = document.createElement('div');\n            priceElement.className = 'price';\n            priceElement.innerText = product.price + ' $';\n            //<div className=\"price\">{{{price}}}</div>\n\n            //и все наши три строчки вставляем в первый div\n            productElement.appendChild(titleElement);\n            productElement.appendChild(descriptionElement);\n            productElement.appendChild(priceElement);\n\n            //и все это всовываем в <div class=\"products\" id=\"products\"> сюда </div> мы нашли его по id в конструкторе\n                this.productsElement.appendChild(productElement);\n\n            })\n        }\n    }\n}\n\n//# sourceURL=webpack://backend/./src/components/products.js?");

/***/ }),

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Router: () => (/* binding */ Router)\n/* harmony export */ });\n/* harmony import */ var _components_products_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/products.js */ \"./src/components/products.js\");\n\n\nclass Router {\n    constructor() {\n        this.routes = [\n            {\n                route: '#/',\n                title: 'Главная',\n                view: 'views/index.html',\n                load: () => {\n                }\n            },\n            {\n                route: '#/about',\n                title: 'О нас',\n                view: 'views/about.html',\n                load: () => {\n                }\n            },\n            {\n                route: '#/contact',\n                title: 'Контакты',\n                view: 'views/contact.html',\n                load: () => {\n                }\n            },\n            {\n                route: '#/products',\n                title: 'Продукты',\n                view: 'views/products.html',\n                load: () => {\n                    //здесь мы запустим скрипты из бэкенда\n                    new _components_products_js__WEBPACK_IMPORTED_MODULE_0__.Products(); // класс Products создали в products.js\n                }\n            },\n        ];\n    }\n\n    async openRoute() {\n        const newRoute = this.routes.find(item => {\n            const onlyHash = window.location.hash.split('?')[0];\n            return onlyHash === item.route;\n        });\n        if (!newRoute) {\n            window.location.href = '#/';\n            return;\n        }\n        document.getElementById('app').innerHTML = await fetch(newRoute.view).then(response => response.text());\n        newRoute.load();\n    }\n}\n\n\n//# sourceURL=webpack://backend/./src/router.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;