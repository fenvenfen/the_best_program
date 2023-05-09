import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  public readonly tags = [
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
    
  public readonly shelfsCollections = [
    { id: 1, tags: [2,3, 6, 29, 25, 22], src: 'https://m.media-amazon.com/images/I/71-k7upkQjL._AC_SX444_SY639_FMwebp_QL65_.jpg', name: "The Lord of the Rings", favorite: true},
    { id: 2, tags: [6,4], src: 'https://m.media-amazon.com/images/I/61wOt39gY6L._AC_UF1000,1000_QL80_FMwebp_.jpg', name: "The Hunger Games", favorite: false },
    { id: 3, tags: [6,5], src: 'https://m.media-amazon.com/images/I/71szrqzf22L._AC_UF1000,1000_QL80_FMwebp_.jpg', name: "The Chronicles of Narnia", favorite: true },
    { id: 4, tags: [11, 23], src: 'https://m.media-amazon.com/images/I/91r0dvXhNGL._AC_UF1000,1000_QL80_FMwebp_.jpg', name: "Harry Potter", favorite: false },
    { id: 5, tags: [30, 6], src: 'https://m.media-amazon.com/images/I/91lFJOYspuL._AC_UF1000,1000_QL80_FMwebp_.jpg', name: "The Hitchhiker's Guide to the Galaxy", favorite: false },
    { id: 6, tags: [15, 13], src: 'https://m.media-amazon.com/images/I/91hPXkwnaeL._AC_UF1000,1000_QL80_FMwebp_.jpg', name: "Game of Thrones", favorite: false },
    { id: 7, tags: [18, 11], src: 'https://m.media-amazon.com/images/I/91AXiPhTuoL._AC_UF1000,1000_QL80_FMwebp_.jpg', name: "Percy Jackson and the Olympians", favorite: true },
    { id: 8, tags: [2, 3], src: 'https://m.media-amazon.com/images/I/715ViOMJmIL._AC_SX444_SY639_FMwebp_QL65_.jpg', name: "The Dark Tower", favorite: false },
    { id: 9, tags: [2, 3], src: 'https://m.media-amazon.com/images/I/51jQChB+fmL._AC_UF1000,1000_QL80_FMwebp_.jpg', name: "The Wheel of Time", favorite: true },
    { id: 10, tags: [1, 3], src: 'https://m.media-amazon.com/images/I/81ym3QUd3KL._AC_UF1000,1000_QL80_FMwebp_.jpg', name: "Dune", favorite: true },
    { id: 11, tags: [4, 5], src: 'https://m.media-amazon.com/images/I/91VelHkK8yL._AC_UF1000,1000_QL80_FMwebp_.jpg', name: "The Mortal Instruments", favorite: false },
    { id: 12, tags: [5, 6], src: 'https://m.media-amazon.com/images/I/71IkcEies6L._AC_UF1000,1000_QL80_FMwebp_.jpg', name: "The Maze Runner", favorite: false }
  ];
  constructor() { }
}
