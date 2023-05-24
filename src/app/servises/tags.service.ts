import { Injectable } from '@angular/core';
import { Tag } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class TagsService {
  tags: Tag[] = [
    { id: 1, active: false, name: 'Жанр' },
    { id: 2, active: false, name: 'Автор' },
    { id: 3, active: false, name: 'Видавництво' },
    { id: 4, active: false, name: 'Рік видання' },
    { id: 5, active: false, name: 'Серія книг' },
    { id: 6, active: false, name: 'ISBN' },
    { id: 7, active: false, name: 'Ключові слова' },
    { id: 8, active: false, name: 'Опис' },
    { id: 9, active: false, name: 'Оцінка' },
    { id: 10, active: false, name: 'Рецензія' },
    { id: 11, active: false, name: 'Обкладинка' },
    { id: 12, active: false, name: 'Тип книги' },
    { id: 13, active: false, name: 'Мова' },
    { id: 14, active: false, name: 'Кількість сторінок' },
    { id: 15, active: false, name: 'Формат' },
    { id: 16, active: false, name: 'Країна походження' },
    { id: 17, active: false, name: 'Історична епоха' },
    { id: 18, active: false, name: 'Тематика' },
    { id: 19, active: false, name: 'Сюжет' },
    { id: 20, active: false, name: 'Персонажі' },
    { id: 21, active: false, name: 'Місце дії' },
    { id: 22, active: false, name: 'Діалоги' },
    { id: 23, active: false, name: 'Атмосфера' },
    { id: 24, active: false, name: 'Ілюстрації' },
    { id: 25, active: false, name: 'Рекомендації' },
    { id: 26, active: false, name: 'Підбірка' },
    { id: 27, active: false, name: 'Ціна' },
    { id: 28, active: false, name: 'Знижка' },
    { id: 29, active: false, name: 'Дата виходу' },
    { id: 30, active: false, name: 'Популярність' },
  ];
  constructor() {}
}

