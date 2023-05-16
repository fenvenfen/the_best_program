import { Injectable } from '@angular/core';
import { Book } from '../interfaces';
import { DataStorageService } from './data-storage.service';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  shelves!: Book[];
  books!: Book[];
  query = '';

  constructor(private readonly dataStorageService: DataStorageService) { 
    this.shelves = dataStorageService.shelfsCollections;
    this.books = dataStorageService.bookCollections;
  }

  updateFavorites(id: number, booksSet: Book[]): void {
    booksSet.map((book) => {
      if (book.id === id) book.favorite = !book.favorite;
    })
  }

  updateBooks(id: number, booksSet: Book[], booksCopy: Book[]): void {
    let bookEl = booksSet.find((book) => book.id === id) //findIndexOf!!!
    let bookIndex = booksSet.indexOf(bookEl as Book)
    booksSet.splice(bookIndex, 1);
    booksCopy.splice(bookIndex, 1);
  }

  genereteRandomPrice(): number {
    return  Math.floor(Math.random() * 21) + 10;
  }
}
