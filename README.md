----------------TASK 03--------------------
Урок 3: Звязок між комопнентами

Зробимо шрифт із іконок.
1) https://icomoon.io/ завантажити сюда наші іконки і сказати шрифт
2) потрібно добавити цей шрифт в проект і його використовувати я пропоную добавити в загальний файл css
@font-face {
    font-family: 'Назва вашого шрифта буть яка';
    src: url("../assets/fonts/назва_файла.eot");
    src: url("../assets/fonts/назва_файла.eot#iefix") format("embedded-opentype"),
    url("../assets/fonts/назва_файла.woff") format("woff"),
    url("../assets/fonts/назва_файла.ttf") format("truetype"),
    url("../assets/fonts/назва_файла.svg") format("svg");
    font-style: normal;
}
3) Використання, ми використовуємо в псевдоелементах
&::before{
    content: "\e949"; // unicode який можна знайти як і на сайті так в файлі svg
    font-size: 4em;
    font-family: Назва вашого шрифта;
}
Більш детально розбираємося як працює Data binding
Розібратися Input and Output https://angular.io/guide/binding-syntax
https://angular.io/guide/event-binding-concepts
https://levelup.gitconnected.com/5-ways-to-share-data-between-angular-components-d656a7eb7f96

Зверстати блок компоненту полиці показуємо тільки 3 книги всі решта при клікі на кнопку show more (або ховаємо компоненти)
і компоненту книги
* В компоненті інпут потрібно https://angular.io/guide/user-input
Коли ми щось вписуємо в input потрібно відправляти данні які юзер вписав в компоненту полиці і в копоненту 
книги і фільтрувати список в залежності чи в нас в name присутний це слово
https://angular.io/guide/inputs-outputs
* Зробити в компоненті tags можливість вибирати tag добавити проперті active до тега 
(активний тег змінити колір заливки на  #017667 а колір тексту на білий)
{ name: 'Жанр', active: false}
від показувати і книги і полиці тільки в яких цей тег або теги присутні
* Для кожної книги чи полиці є зірочка вона коли ми її натискаємо змінюємо параметер favorite
і робимо фільтр по цьому параметру також
* Кнопка видалення, видялає зі списку

service
query = {
    search: '',
    tags: []
}
const shelfsCollections = [
  { id: 1, tags: [2,3], src: '', name: "The Lord of the Rings", favorite: false },
  { id: 2, tags: [6,4], src: '', name: "The Hunger Games", favorite: false },
  { id: 3, tags: [6,5], src: '', name: "The Chronicles of Narnia", favorite: true },
  { id: 4, tags: [11.23], src: '', name: "Harry Potter", favorite: false },
  { id: 5, tags: [30, 6], src: '', name: "The Hitchhiker's Guide to the Galaxy", favorite: false },
  { id: 6, tags: [15, 13], src: '', name: "Game of Thrones", favorite: false },
  { id: 7, tags: [18, 11], src: '', name: "Percy Jackson and the Olympians", favorite: true },
  { id: 8, tags: [2, 3], src: '', name: "The Dark Tower", favorite: false },
  { id: 9, tags: [2, 3], src: '', name: "The Wheel of Time", favorite: true },
  { id: 10, tags: [1, 3], src: '', name: "Dune", favorite: true },
  { id: 11, tags: [4, 5], src: '', name: "The Mortal Instruments", favorite: false },
  { id: 12, tags: [5, 6], src: '', name: "The Maze Runner", favorite: false }
];
const shelfsCollectionsCopy = shelfsCollections;
interface Shelf = {
    id: number,
    tags: array,
    src: string,
    name: string,
    favorite, boolean
}
filterShelfsAndBooks(): void{
    shelfsCollections.forEach((shelf: Shelf) => {
    })
}
app - component
    query = service.query
    changeInput(value: string): void{
        query = value;
        service.filterShelfsAndBooks();
    }
shelfs - component
    favoritesFilter: fasle;
    shelfsCollections = service.shelfsCollections
    findAllFavorites(): void{
         service.filterShelfsAndBooks();
    }
input
(valueChange)="changeInput()"

const shelfsCollections = [
  { id: 1, tags: [2,3], src: '', name: "The Lord of the Rings", favorite: false},
  { id: 2, tags: [6,4], src: '', name: "The Hunger Games", favorite: false },
  { id: 3, tags: [6,5], src: '', name: "The Chronicles of Narnia", favorite: true },
  { id: 4, tags: [11.23], src: '', name: "Harry Potter", favorite: false },
  { id: 5, tags: [30, 6], src: '', name: "The Hitchhiker's Guide to the Galaxy", favorite: false },
  { id: 6, tags: [15, 13], src: '', name: "Game of Thrones", favorite: false },
  { id: 7, tags: [18, 11], src: '', name: "Percy Jackson and the Olympians", favorite: true },
  { id: 8, tags: [2, 3], src: '', name: "The Dark Tower", favorite: false },
  { id: 9, tags: [2, 3], src: '', name: "The Wheel of Time", favorite: true },
  { id: 10, tags: [1, 3], src: '', name: "Dune", favorite: true },
  { id: 11, tags: [4, 5], src: '', name: "The Mortal Instruments", favorite: false },
  { id: 12, tags: [5, 6], src: '', name: "The Maze Runner", favorite: false }
];
const bookCollections = [
  { tags: [2], name: "The Godfather", favorite: false, src: "", id: 1 },
  { tags: [3, 4, 5], name: "The Silence of the Lambs", favorite: false, src: "", id: 2 },
  { tags: [6, 23, 27], name: "The Shawshank Redemption", favorite: true, src: "", id: 3 },
  { tags: [5, 6], name: "The Da Vinci Code", favorite: false, src: "", id: 4 },
  { tags: [1], name: "The Girl with the Dragon Tattoo", favorite: false, src: "", id: 5 },
  { tags: [2], name: "To Kill a Mockingbird", favorite: true, src: "", id: 6 },
  { tags: [3], name: "One Hundred Years of Solitude", favorite: false, src: "", id: 7 },
  { tags: [4, 7], name: "The Great Gatsby", favorite: false, src: "", id: 8 },
  { tags: [8, 19], name: "Jurassic Park", favorite: true, src: "", id: 9 },
  { tags: [2, 3, 4, 5, 6], name: "The Shining", favorite: true, src: ", id: 10 },
  { tags: [3], name: "The Martian", favorite: false, src: ", id: 11 },
  { tags: [4], name: "The Hobbit", favorite: false, src: "", id: 12 }
];
const tags = [
  { id: 1,  active: false, name: 'Жанр' },
  { id: 2,  active: false, name: 'Автор' },
  { id: 3,  active: false, name: 'Видавництво' },
  { id: 4,  active: false, name: 'Рік видання' },
  { id: 5,  active: false, name: 'Серія книг' },
  { id: 6,  active: false, name: 'ISBN' },
  { id: 7,  active: false, name: 'Ключові слова' },
  { id: 8,  active: false, name: 'Опис' },
  { id: 9,  active: false, name: 'Оцінка' },
  { id: 10, active: false,  name: 'Рецензія' },
  { id: 11, active: false,  name: 'Обкладинка' },
  { id: 12, active: false,  name: 'Тип книги' },
  { id: 13, active: false,  name: 'Мова' },
  { id: 14, active: false,  name: 'Кількість сторінок' },
  { id: 15, active: false,  name: 'Формат' },
  { id: 16, active: false,  name: 'Країна походження' },
  { id: 17, active: false,  name: 'Історична епоха' },
  { id: 18, active: false,  name: 'Тематика' },
  { id: 19, active: false,  name: 'Сюжет' },
  { id: 20, active: false,  name: 'Персонажі' },
  { id: 21, active: false,  name: 'Місце дії' },
  { id: 22, active: false,  name: 'Діалоги' },
  { id: 23, active: false,  name: 'Атмосфера' },
  { id: 24, active: false,  name: 'Ілюстрації' },
  { id: 25, active: false,  name: 'Рекомендації' },
  { id: 26, active: false,  name: 'Підбірка' },
  { id: 27, active: false,  name: 'Ціна' },
  { id: 28, active: false,  name: 'Знижка' },
  { id: 29, active: false,  name: 'Дата виходу' },
  { id: 30, active: false,  name: 'Популярність' }
];

Урок 2: Компоненти і прості сервіси
========================

1) Переглянути документацію яка є на офіційному сайті  https://angular.io/guide/services
2) Є на цю тему дуже багато відео на ютубі https://www.youtube.com/results?search_query=angular+services+

* Створення компоненти для header тільки html і css 
* Створення компоненти для breadcrumbs тільки html і css 
* Створення компоненти для input тільки html і css 
* Створення компоненти для tags (з можливістю розкривання і закривання якщо вони не поміщаються в рядок)
    для цього можете використати nativeElement.scrollWidth і nativeElement.offsetWidth
* Створення свого сервісу, тут будемо зберігати данні в нашому випадку tags для компоненти з tags ()
* Підключити серсів до компоненти
* Використати данні з сервісу в компоненті

Що таке сервіс в Angular
Як створити сервіс в Angular?
Як підключити сервіс до компонента в Angular?

const tags = [
  { name: 'Жанр' },
  { name: 'Автор' },
  { name: 'Видавництво' },
  { name: 'Рік видання' },
  { name: 'Серія книг' },
  { name: 'ISBN' },
  { name: 'Ключові слова' },
  { name: 'Опис' },
  { name: 'Оцінка' },
  { name: 'Рецензія' },
  { name: 'Обкладинка' },
  { name: 'Тип книги' },
  { name: 'Мова' },
  { name: 'Кількість сторінок' },
  { name: 'Формат' },
  { name: 'Країна походження' },
  { name: 'Історична епоха' },
  { name: 'Тематика' },
  { name: 'Сюжет' },
  { name: 'Персонажі' },
  { name: 'Місце дії' },
  { name: 'Діалоги' },
  { name: 'Атмосфера' },
  { name: 'Ілюстрації' },
  { name: 'Рекомендації' },
  { name: 'Підбірка' },
  { name: 'Ціна' },
  { name: 'Знижка' },
  { name: 'Дата виходу' },
  { name: 'Популярність' }
];

________________TASK 01__________________
Урок 1: Вступ до Angular
========================
Що таке Angular, його основні принципи та концепції
Angular - це фреймворк для розробки односторінкових додатків з високою швидкістю та масштабованістю. Він 
використовує TypeScript як основну мову програмування, має потужний модульний систему та забезпечує багато 
інших корисних функцій.

Деякі з ключових концепцій, які ви повинні знати, щоб розпочати роботу з Angular:

Компоненти: Основний будівельний блок Angular додатку, що описує його поведінку та відображення на сторінці
Шаблони: HTML-подібні файлы, що використовуються для відображення компонентів
Сервіси: Класи, що виконують певні функції та можуть бути використані в різних компонентах
Директиви: Особливі атрибути HTML, що використовуються для зміни поведінки компонентів
Модулі: Логічні блоки коду, що дозволяють організувати додаток на підставі функціональності


Аngular додататок і налаштування середовища. 
https://angular.io/guide/setup-local
https://www.youtube.com/watch?v=qxchrt04bTA&ab_channel=GoogleChromeDevelopers
* Створити додаток і запустити.

Робота з компонентами, потрібно розібратися як створити компоненту як її використовувати.
* Створити за допомогою angular CLI компонент для відображення "Hello World" на сторінці. 
https://angular.io/start

Databinding в Angular
* Зв'язати дані між компонентою та шаблонамом. (Не важливо які данні)

Знайомство з дефолтними дериктивами angular і як їх використовувати і навіщо вони взагалі існують. І в чому різниця
між структурними і атрибутними.
* Використати декілька структурних дериктив (ngIf, ngFor, ngSwitch)
* Використати атрибутну дериктиву. (NgClass) 
https://angular.io/guide/structural-directives 
https://angular.io/guide/attribute-directives


Робота з git
* Створити репозиторій і запушити проект.

Основна документація
https://angular.io/docs

Використання Angular CLI
https://www.youtube.com/watch?v=IZEolKjcjks&ab_channel=Fireship


Питання)
Які є ключові особливості Angular?
Які є різниці між компонентами та директивами в Angular?
Якими можуть бути директиви в angular?
Databinding в Angular? Або як комунікує між собою компонент і його шаблон?


