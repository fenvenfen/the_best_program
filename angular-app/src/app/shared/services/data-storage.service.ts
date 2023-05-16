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
    { id: 1, tags: [2,3, 6, 29, 25, 22], src: 'https://m.media-amazon.com/images/I/71-k7upkQjL._AC_SX444_SY639_FMwebp_QL65_.jpg', name: "The Lord of the Rings", favorite: true, date: '2023-03-14 11:54:25.843 +0000'},
    { id: 2, tags: [6,4], src: 'https://m.media-amazon.com/images/I/61wOt39gY6L._AC_UF1000,1000_QL80_FMwebp_.jpg', name: "The Hunger Games", favorite: false, date: '2021-05-02 03:51:31.843 +0000'},
    { id: 3, tags: [6,5], src: 'https://m.media-amazon.com/images/I/71szrqzf22L._AC_UF1000,1000_QL80_FMwebp_.jpg', name: "The Chronicles of Narnia", favorite: true, date: '2019-11-02 11:52:31.843 +0000'},
    { id: 4, tags: [11, 23], src: 'https://m.media-amazon.com/images/I/91r0dvXhNGL._AC_UF1000,1000_QL80_FMwebp_.jpg', name: "Harry Potter", favorite: false, date: '2023-03-14 11:54:25.843 +0000'},
    { id: 5, tags: [30, 6], src: 'https://m.media-amazon.com/images/I/91lFJOYspuL._AC_UF1000,1000_QL80_FMwebp_.jpg', name: "The Hitchhiker's Guide to the Galaxy", favorite: false, date: '2021-05-02 03:51:31.843 +0000'},
    { id: 6, tags: [15, 13], src: 'https://m.media-amazon.com/images/I/91hPXkwnaeL._AC_UF1000,1000_QL80_FMwebp_.jpg', name: "Game of Thrones", favorite: false, date: '2019-11-02 11:52:31.843 +0000'},
    { id: 7, tags: [18, 11], src: 'https://m.media-amazon.com/images/I/91AXiPhTuoL._AC_UF1000,1000_QL80_FMwebp_.jpg', name: "Percy Jackson and the Olympians", favorite: true, date: '2023-03-14 11:54:25.843 +0000'},
    { id: 8, tags: [2, 3], src: 'https://m.media-amazon.com/images/I/715ViOMJmIL._AC_SX444_SY639_FMwebp_QL65_.jpg', name: "The Dark Tower", favorite: false, date: '2021-05-02 03:51:31.843 +0000'},
    { id: 9, tags: [2, 3], src: 'https://m.media-amazon.com/images/I/51jQChB+fmL._AC_UF1000,1000_QL80_FMwebp_.jpg', name: "The Wheel of Time", favorite: true, date: '2019-11-02 11:52:31.843 +0000'},
    { id: 10, tags: [1, 3], src: 'https://m.media-amazon.com/images/I/81ym3QUd3KL._AC_UF1000,1000_QL80_FMwebp_.jpg', name: "Dune", favorite: true, date: '2023-03-14 11:54:25.843 +0000'},
    { id: 11, tags: [4, 5], src: 'https://m.media-amazon.com/images/I/91VelHkK8yL._AC_UF1000,1000_QL80_FMwebp_.jpg', name: "The Mortal Instruments", favorite: false, date: '2021-05-02 03:51:31.843 +0000'},
    { id: 12, tags: [5, 6], src: 'https://m.media-amazon.com/images/I/71IkcEies6L._AC_UF1000,1000_QL80_FMwebp_.jpg', name: "The Maze Runner", favorite: false, date: '2019-11-02 11:52:31.843 +0000'}
  ];

  public readonly bookCollections = [
    { tags: [2], name: "The Godfather", favorite: false, src: "https://m.media-amazon.com/images/I/41pSXiKR39L._SX324_BO1,204,203,200_.jpg", id: 1, date: '2023-03-14 11:54:25.843 +0000'},
    { tags: [3, 4, 5], name: "The Silence of the Lambs", favorite: false, src: "https://m.media-amazon.com/images/I/519n1y9Q9kL._SY344_BO1,204,203,200_QL70_ML2_.jpg", id: 2, date: '2021-05-02 03:51:31.843 +0000'},
    { tags: [6, 23, 27, 2, 5], name: "The Shawshank Redemption", favorite: true, src: "https://m.media-amazon.com/images/I/51HX9XQ9HBL._SY344_BO1,204,203,200_QL70_ML2_.jpg", id: 3, date: '2019-11-02 11:52:31.843 +0000'},
    { tags: [5, 6], name: "The Da Vinci Code", favorite: false, src: "https://m.media-amazon.com/images/I/41wy5DBifEL._SX319_BO1,204,203,200_.jpg", id: 4, date: '2023-03-14 11:54:25.843 +0000'},
    { tags: [1], name: "The Girl with the Dragon Tattoo", favorite: false, src: "https://m.media-amazon.com/images/I/41quWoJq+8L._SY344_BO1,204,203,200_.jpg", id: 5, date: '2021-05-02 03:51:31.843 +0000'},
    { tags: [2], name: "To Kill a Mockingbird", favorite: true, src: "https://m.media-amazon.com/images/I/51cTCiLMNAL._SX339_BO1,204,203,200_.jpg", id: 6, date: '2019-11-02 11:52:31.843 +0000'},
    { tags: [3], name: "One Hundred Years of Solitude", favorite: false, src: "https://m.media-amazon.com/images/I/51IfaP5qfoL._SY344_BO1,204,203,200_QL70_ML2_.jpg", id: 7, date: '2023-03-14 11:54:25.843 +0000'},
    { tags: [4, 7], name: "The Great Gatsby", favorite: false, src: "https://m.media-amazon.com/images/I/41CPOyQP6xL._SX331_BO1,204,203,200_.jpg", id: 8, date: '2021-05-02 03:51:31.843 +0000'},
    { tags: [8, 19], name: "Jurassic Park", favorite: true, src: "https://m.media-amazon.com/images/I/513qk1TGinL._SX323_BO1,204,203,200_.jpg", id: 9, date: '2019-11-02 11:52:31.843 +0000'},
    { tags: [2, 3, 4, 5, 6], name: "The Shining", favorite: true, src: "https://m.media-amazon.com/images/I/51jSPyJ8v2L._SY344_BO1,204,203,200_QL70_ML2_.jpg", id: 10, date: '2023-03-14 11:54:25.843 +0000'},
    { tags: [3], name: "The Martian", favorite: false, src: "https://m.media-amazon.com/images/I/51Bw27SCLDL._SY498_BO1,204,203,200_.jpg", id: 11, date: '2021-05-02 03:51:31.843 +0000'},
    { tags: [4], name: "The Hobbit", favorite: false, src: "https://m.media-amazon.com/images/I/41DfP7NpIIL._SX327_BO1,204,203,200_.jpg", id: 12, date: '2019-11-02 11:52:31.843 +0000'}
  ];

  constructor() { }
}

