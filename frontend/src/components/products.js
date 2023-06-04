export class Products{
    constructor() {
        this.productsElement = document.getElementById('products');

        this.getProducts() //вызываем получение продуктов
            .then(products => this.fillProducts(products)) //и передаем их в обработчик fillProducts
    }

    async getProducts() {//получение продуктов вынесем в отдельную функцию
        const response = await fetch('http://localhost:3000/api/products');//запросим продукты
      //  const products = await response.json(); //распарсим то, что получили
      //  return products; //и вернем из функции продукты
        return await response.json();//оптимизировали наш код
    }

    fillProducts(products) { //будем получать наши продукты
        if(products && products.length >0) { //проверим на наличие продуктов
            products.forEach(product => { //для каждого продукта создадим такой блок:
               /* <a class="product" href="/#/product?id=1">
                    <div class="title">{{{title}}}</div>
                    <div class="description">{{{description}}}</div>
                    <div class="price">{{{price}}}</div>
                </a> */
            const productElement = document.createElement('a');
            productElement.className = 'product';
            productElement.href = '/#/product?id=' + product.id;
            // сделали строчку <a className="product" href="/#/product?id=1">>

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
            productElement.appendChild(titleElement);
            productElement.appendChild(descriptionElement);
            productElement.appendChild(priceElement);

            //и все это всовываем в <div class="products" id="products"> сюда </div> мы нашли его по id в конструкторе
                this.productsElement.appendChild(productElement);

            })
        }
    }
}