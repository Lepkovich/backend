import {UrlManager} from "../../utils/url-manager.js";

export class Card {
    constructor() {
        this.productElement = document.getElementById('product');

        this.id = UrlManager.getQueryParams()['id']; //с помощью функции найдем id из урла
        this.getCard(this.id) //вызываем получение карточки
            .then(card => this.fillCard(card)) //и передаем его в обработчик fillProduct

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

        this.deleteCardButton = document.getElementById('delete-card');
        this.deleteCardButton.onclick = () => {
            this.deleteCard(this.id);
        }
        this.changeCardButton = document.getElementById('change-card');
        this.changeCardButton.onclick = () => {
            this.changeCard(this.id);
        }
    }

    async changeCard(id) {
        const cardData = {id: this.id}; //сначала добавили id
        this.fields.forEach(item => {   //потом все поля из inputов
            cardData[item.name] = item.element.value;
            console.log(cardData[item.name]);
        });
        const response = await fetch('http://localhost:3000/api/products/' + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cardData)
        });
        if (response.ok) {
            const newCard = await response.json();
            this.clearFields();
            this.clearCard(newCard);
        } else {
            console.error('Ошибка изменения карточки');
        }
    }

    async deleteCard(id) {
        const response = await fetch('http://localhost:3000/api/products/' + id, {
            method: 'DELETE'
        });
        if (response.ok) { // удаление успешно выполнено
            const cardElement = document.getElementById('product'); // найдем нашу карточку по id
            cardElement.classList.add('fade-out'); // Добавим класс с анимацией для исчезновения
            await new Promise(resolve => setTimeout(resolve, 500)); // Подождем окончания анимации
            cardElement.remove(); //удалим из DOM нашу карточку
            window.location.href = '/#/products'

        } else {
            console.error('Ошибка удаления карточки');
        }
    }

    async getCard(id) {//получение продукта
        const response = await fetch('http://localhost:3000/api/products/' + id );//запросим продукт по id
      //  const products = await response.json(); //распарсим то, что получили
      //  return products; //и вернем из функции продукты
        return await response.json();//оптимизировали наш код
    }

    clearCard(card) {
        this.productElement.querySelector('.title').innerText = card.title; //поменяем у карточки title
        this.productElement.querySelector('.description').innerText = card.description; //поменяем у карточки description
    }

    fillCard(card) { //будем заполнять нашу карточку
        if(card) { //проверим на наличие карточки
            //для карточки создадим такой блок:
               /*
                    <div class="title">{{{title}}}</div>
                    <div class="description">{{{description}}}</div>
                */
            const titleElement = document.createElement('div');
            titleElement.className = 'title';
            titleElement.innerText = card.title;
            //<div className="title">{{{title}}}</div>

            const descriptionElement = document.createElement('div');
            descriptionElement.className = 'description';
            descriptionElement.innerText = card.description;
            //<div className="description">{{{description}}}</div>

            //и наши две строчки вставляем в первый div
            this.productElement.appendChild(titleElement);
            this.productElement.appendChild(descriptionElement);
        }
    }

    clearFields() { //очищаем поля inputов
        this.fields.forEach(item => {
            item.element.value = '';
        });
    }
}