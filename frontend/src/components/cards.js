export class Cards{
    constructor() {
        this.productsElement = document.getElementById('products');
        this.nextCardId = 1;

        this.getCards() //вызываем получение карточек
            .then(cards => {
                this.fillCards(cards); // передаем их в обработчик fillProducts
                this.updateNextCardId(cards); //и получаем updateNextCardId
            })

        this.fields = [
            {
                name: 'title',
                id: 'title',
                element: null
            },
            {
                name: 'description',
                id: 'description',
                element: null
            }
        ];

        this.fields.forEach(item =>{
            item.element = document.getElementById(item.id);

        })

        this.addCardButton = document.getElementById('add-card');
        this.addCardButton.onclick = () => {
            this.addCard();
        }
    }

    async addCard() {
        const cardData = {id: this.nextCardId}; //сначала добавили id
        this.fields.forEach(item => {           //потом все поля из inputов
            cardData[item.name] = item.element.value;
            console.log(cardData[item.name]);
        });
        const response = await fetch('http://localhost:3000/api/cards', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cardData)
        });

        if (response.ok) {
            const newCard = await response.json();
            this.clearFields();
            this.appendCard(newCard);
        } else {
            console.error('Ошибка добавления карточки');
        }
    }

    clearFields() { //очищаем поля inputов
        this.fields.forEach(item => {
            item.element.value = '';
        });
    }

    appendCard(card) { //отрисовываем новую карточку
        const cardElement = this.createCardElement(card);
        this.productsElement.appendChild(cardElement);
        this.nextCardId = card.id + 1;
    }


    async getCards() {//получение продуктов вынесем в отдельную функцию
        const response = await fetch('http://localhost:3000/api/cards');//запросим карточки
        //  const products = await response.json(); //распарсим то, что получили
        //  return products; //и вернем из функции продукты
        return await response.json();//оптимизировали наш код
    }

    updateNextCardId(cards) {
        const maxCardId = Math.max(...cards.map(card => card.id));
        this.nextCardId = maxCardId + 1;
    }

    fillCards(cards) { //будем получать наши продукты
        if(cards && cards.length >0) { //проверим на наличие продуктов
            cards.forEach(card => { //отрисовываем наши карточки в html
                const cardElement = this.createCardElement(card); //рисуем в отдельной функции

            //и все это всовываем в <div class="products" id="products"> сюда </div> мы нашли его по id в конструкторе
                this.productsElement.appendChild(cardElement);

            })
        }
    }

    createCardElement(card) { //для каждого продукта создадим такой блок:
        /* <a class="product" href="/#/card?id=1">
                     <div class="title">{{{title}}}</div>
                     <div class="description">{{{description}}}</div>
                 </a> */
        const cardElement = document.createElement('a');
        cardElement.className = 'product';
        cardElement.href = '/#/card?id=' + card.id;
        // сделали строчку <a className="product" href="/#/product?id=1">>

        const titleElement = document.createElement('div');
        titleElement.className = 'title';
        titleElement.innerText = card.title;
        //<div className="title">{{{title}}}</div>

        const hrElement = document.createElement('hr');
        //<hr>

        const descriptionElement = document.createElement('div');
        descriptionElement.className = 'description';
        descriptionElement.innerText = card.description;
        //<div className="description">{{{description}}}</div>


        //и наши две строчки вставляем в первый div
        cardElement.appendChild(titleElement);
        cardElement.appendChild(hrElement);
        cardElement.appendChild(descriptionElement);

        return cardElement;
    }
}