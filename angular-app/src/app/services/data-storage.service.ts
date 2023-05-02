import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  tags = [
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
  
  constructor() { }
}
