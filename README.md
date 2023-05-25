============Урок 5=======================================
Роутінг 

Це механізм який дозволяє контролювати які компоненти показуємо в конкретних шляхів аплікації.
В angular і в іньших фреймворках роутинг дозволяє створювати SPA single page application, це зміна вмісту 
сторінки без перезавантаження всієї сторінки. Також ми можемо передавати данні в роутингу який допомогає вивисти 
конкретний вміст сторінки.

Навіщо він потрібний і яку роль відіграє
Ми Використовуємо для багато речей передача параметрів, слідкування за навігацією, також і має секюрні функції,
і функції які відповідають за пошук за використання сайту

Як підключити і використовувати Роутінг в angular
Все починається що ми створюємо app-routing.module.ts, в якому нам потрібно імпорутувати такі Класи
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
далі нам потрібно описати наші роути 

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
];
const routes: Routes = [
  {
    path: '',
    component: AdminPanelComponent,
    children: [
      { path: '', redirectTo: '/admin/companies', pathMatch: 'full' },
      {
        path: 'companies',
        component: CompaniesComponent,
        data: { animationState: 'companies' },
      },
      {
        path: 'admin-management',
        component: AdminManagementComponent,
        data: { animationState: 'admin-management' },
      },
      { path: ':companyId/company-page', component: CompanyPageComponent, canDeactivate: [IsSubscriptionGuard] },
      { path: 'profile-page', component: ProfileInformationComponent },
    ],
  },
];
І основне це підключення 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
Потім ми маємо підключити наш роутинг модуль до основного модуля. В app.module.ts
Щоб почати використовувати не потрібно забути про добавлення 
<router-outlet></router-outlet> в шаблон.
Для кожного модуля можна створювати інші роути

Ми можемо створювати роути окремі для окремих модулів наприклад ми можемо створити роут auth-routing.module.ts
підключити його в imports нашого модуля де ми створили, бажано такої логіки і притримуватися якщо модуль вимагає створення декількох
роутів то краще під кожен модуль створити свій модуль роутінга.

Створення окремих роутів, розібратися які параметри приймає роут типу 
{
    *path: Шлях або шаблон шляху, який повинен відповідати URL-адресі, щоб активувати цей маршрут.
    *component: Компонент, який буде відображений при активації маршруту.
    redirectTo: Шлях, на який буде перенаправлено при спробі активувати цей маршрут.
    pathMatch:  Спосіб, яким шлях маршруту буде порівнюватись з URL-адресою. Допустимі значення: 'prefix' 
    (маршрут співпадає, якщо URL-адреса починається з шляху маршруту) або 'full' (маршрут співпадає, якщо URL-адреса 
    повністю збігається з шляхом маршруту). За замовчуванням використовується 'prefix'
    *data: Додаткові дані, які можна передати разом з маршрутом. Наприклад, 
    { title: 'Home Page' }. Ці дані можна використовувати для налаштування заголовків сторінок, метаданих тощо.
    canActivate / canActivateChild / canDeactivate: Функції або масив функцій, які використовуються для визначення, чи може маршрут бути активований (або деактивований). Ці функції повинні повертати значення типу boolean або обіцянку (Promise<boolean> або Observable<boolean>).
    resolve: Об'єкт або масив об'єктів, які представляють дані, які потрібно завантажити перед активацією маршруту. Використовується 
    для розв'язання даних перед відображенням компонента.
    pathMatch: Значення, яке визначає, як виконувати порівняння шляху маршруту з URL-адресою. Можливі значення: 'prefix', 'full' або 'legacy'. 'legacy' використовує старий алгоритм порівняння шляхів.
    outlet: Назва виводу (outlet), в якому повинен бути відображений компонент при активації маршруту. Використовується для визначення кількох виводів (outlets) в шаблоні.
    runGuardsAndResolvers: Налаштування, яке визначає, коли виконувати функції canActivate, canActivateChild, canDeactivate та resolve. Можливі значення: 'always', 'paramsOrQueryParamsChange', 'paramsChange' або 'pathParamsOrQueryParamsChange'.
    redirectToHandler: Функція, яка виконується для визначення шляху перенаправлення. Використовується для налаштування динамічних перенаправлень.
    matcher: Функція-визначник, яка використовується для заміни стандартного алгоритму порівняння шляхів для маршруту.
} і так далі розібрати основні параметри

loadChildren є параметром, який використовується для лінивого завантаження модуля компонентів. Замість того, 
щоб завантажувати всі компоненти одразу при старті додатка, ви можете використовувати loadChildren, щоб завантажити модуль 
компонентів тільки тоді, коли він потрібний.
{ path: 'lazy', loadChildren: () => import('./admin-panel/admin-panel.module').then((m) => m.AdminPanelModule) }
{ path: 'lazy', loadChildren: () => import('./lazy.module').then(m => m.LazyModule) }

Створення children роутів
Створення вкладених (children) роутів в Angular дозволяє вам організувати ієрархічну структуру 
маршрутизації, де деякі компоненти можуть бути вкладеними в інші компоненти. Це дозволяє вам створювати складніші 
структури сторінок і додатків.
 { 
    path: 'parent',
    component: ParentComponent,
    children: [
      { path: 'child1', component: Child1Component },
      { path: 'child2', component: Child2Component }
    ]
  }
Використання наприклад
<h1>Parent Component</h1>
<nav>
  <a routerLink="/parent/child1">Child 1</a>
  <a routerLink="/parent/child2">Child 2</a>
</nav>

<router-outlet></router-outlet>

Передача параметрів через роутинг
Ми можемо передавати через : , їх може бути безліч /:name/:id/:title
{ path: 'product/:id', component: ProductDetailComponent }
Також можемо передавати через параметер data
{ path: 'product/:id', component: ProductDetailComponent, data: { title: 'Product Detail' } }

Щоб почати використовувати в компоненті потрібно імпортувати 
import { ActivatedRoute } from '@angular/router';
і за його допомоги можемо витягнути потрібні нам данні, використовувати в ngOnInit
route: ActivatedRoute
Якщо передаємо данні через  data 
const id = this.activatedRoute.snapshot.params.name;
this.title = this.route.snapshot.data.title;

this.route.params.subscribe(params => {
      const id = params['id']; // Отримання значення параметра 'id'
});

Перехід на інші роути через компонент логіку
import { Router } from '@angular/router';
this.router.navigate(['/other-route']);
this.router.navigate([`/client/${authInfo.company_id}/planning-cycle`]); якщо наприклад в нас є параметер
this.router.navigate(['product-details', { id: productId }]);
this.router.navigate(['/product', productId]);

В шаблоні ми можемо  переходити через <a routerLink="/other-route">ROUT</a>
[routerLink]="['product-details', { id: productId }]"

Як ми можемо отримати наш роут в роуті
const currentRoute = this.route.snapshot.url.join('/');

  
Використання активних роутів
routerLinkActive добавляє класи і стилі до активного роута
<a routerLink="/home" routerLinkActive="active">Home</a>
<a routerLink="/about" routerLinkActive="active">About</a>
<a routerLink="/contact" routerLinkActive="active">Contact</a>
Розібратися що ще може ця деректива 


Що таке guard і як їх писати і використовувати
Створіть guard клас, який реалізує CanActivate, CanActivateChild, CanLoad, CanDeactivate або 
Resolve інтерфейси з @angular/router. Кожен з цих інтерфейсів відповідає певному типу guard.
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(): boolean {
    // Ваш код перевірки авторизації
    if (isUserLoggedIn) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
 {
    path: 'dashboard',
    canActivate: [AuthGuard],
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },

Розібратися що ми можемо використовувати з @angular/router?

Завдання:

+1) Створити RoutModule
+2) Описати дефолтний rout для path: '' і добавити до нього redirectTo: '/НАЗВА_ВАШОГО_ОСНОВНОГО_РОУТА'
+2) Описати rout для path: 'library/books/:id' component detail-book.component.ts {data: 'books'}
+2) Описати rout для path: 'library/shelfs/:id' component detail-book.component.ts {data: 'shelfs'}
+3) Створити основний роут який буде відображати основну вашу компоненту
+4) Створити компоненту (detail-book.component.ts) яка буде мати в собі header, tags і breadcrumbs компоненти
+5) Створити роут для новоствореної компоненти і добавити можливість передавти в нього параметер id це буде id нашої книги
+6) При кліку на одну з книг в полиці використати дефолтний меганізм переходу на інший роут в шаблоні, передати параметре id книги
? 7) При кліку на одну з книг в книги використати меганізм переходу через можливості в компоненті, передати параметре id книги
8) Зробити повністю динамічну комоненту breadcrumbs, показувати повний шлях до компоненти в якій ми знаходимося
    зробити активною назву компоненти в якій ми знаходимось зробити клікабельні переходи на інші роути






    
9) Добавити до книги поле 18+ по цьому параметру ми будемо створювати guard, створення quard в окремому class
10) Створити компоненту з тими самими компонентами окрім input and tags і написати напис "Книга не доступна 18+"
    створити кнопку "Back" при кліку на яку користувача повино повернути назад на один степ роутінга
11) Створити роут для цієї компоненти
12) Створити guard чи ми можемо переходити на книгу, якщо книга має параметер 18+ то не дозволяти перехід на роут з пункту 4) 
    а перенаправляти на роут з пункта 11)

Додатково: 
Розділити книги і полиці на два окремих модуля і для кожного створити свій роутінг модуль
Описати для кожного роут і викликати там основну компоненту цього модуля




----------------TASK 04--------------------
Урок 4, Модулі, пайпи, дерективи  і їх застосування

Що таке модулі? 
https://angular.io/guide/feature-modules
https://angular.io/guide/sharing-ngmodules

Що таке пайпи як їх створювати і використовувати?
https://angular.io/guide/pipes-overview
https://angular.io/guide/pipe-template

Які дефолтні пайпи присутні в angular?
https://angular.io/guide/pipes

Атрибутні дерективи
https://angular.io/guide/attribute-directives


+1) Створити модуль sharing пфдключити цей модуль до основного модуля
+2) До кожної книги добавити дату створення яка буде перетворюватися на такий формат 03.11.1984
+також добавити ціну яка буде рандомно формуватися від 10 до 30 доларів і 
+використати default pipe curency.
    Також добавити опис книги.
+3) В ново створеному модулі створити pipe який буде змінювати кожне друге слово на * (слово = *****) і використати для опису книги.
+4) Також в модулі створити дерективу яка буде давати колір рамки 
    в залежності скільки тегів має ця книга
    якщо 1 то колір чорний якщо 2 то колір сірий якщо більше то колір зелений
+5) Створити дерективу яка буде змінювати бордер колір інпута на зелений якщо ввели більше 5 символів 
6) Сторили дерективу яка буде в залежності від картинки чи вона горизонтальна чи вертикальна давати стилі ширину якщо 
горизонтальна 100% якщо вертикальна то висоту 100% і border-radius: 10px


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


