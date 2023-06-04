import {UrlManager} from "../../utils/url-manager.js";

export class Product{
    constructor() {
        this.productElement = document.getElementById('product');

        this.id = UrlManager.getQueryParams()['id']; //с помощью функции найдем id из урла
        this.getProduct(this.id) //вызываем получение продукта
            .then(product => this.fillProduct(product)) //и передаем его в обработчик fillProduct
    }

    async getProduct(id) {//получение продукта
        const response = await fetch('http://localhost:3000/api/products/' + id );//запросим продукт по id
      //  const products = await response.json(); //распарсим то, что получили
      //  return products; //и вернем из функции продукты
        return await response.json();//оптимизировали наш код
    }

    fillProduct(product) { //будем получать наш продукт
        if(product) { //проверим на наличие продукта
            //для продукта создадим такой блок:
               /*
                    <div className="title">{{{title}}}</div>
                    <div className="description">{{{description}}}</div>
                    <div className="price">{{{price}}}</div>
                */

            const titleElement = document.createElement('div');
            titleElement.className = 'title';
            titleElement.innerText = product.title;
            //<div className="title">{{{title}}}</div>

            const descriptionElement = document.createElement('div');
            descriptionElement.className = 'description';
            descriptionElement.innerText = product.description;
            //<div className="description">{{{description}}}</div>

            const priceElement = document.createElement('div');
            priceElement.className = 'price';
            priceElement.innerText = product.price + ' $';
            //<div className="price">{{{price}}}</div>

            //и все наши три строчки вставляем в первый div
            this.productElement.appendChild(titleElement);
            this.productElement.appendChild(descriptionElement);
            this.productElement.appendChild(priceElement);


        }
    }
}