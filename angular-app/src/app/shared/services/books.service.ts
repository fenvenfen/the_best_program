import { Injectable } from '@angular/core';
import { Book, Tag } from '../interfaces';
import { DataStorageService } from './data-storage.service';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  shelves!: Book[];
  books!: Book[];
  tags!: Tag[];
  query = '';

  constructor(private readonly dataStorageService: DataStorageService) { 
    this.shelves = this.dataStorageService.shelfsCollections;
    this.books = this.dataStorageService.bookCollections;
    this.tags = this.dataStorageService.tags;
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

  getBookById(shelvesOrBooks: string, id: number): any {
    if (shelvesOrBooks === 'shelves') return this.shelves.find(book => book.id === id);
    else if (shelvesOrBooks === 'books') return this.books.find(book => book.id === id);
  }

  getTagsNamesByIds(idArray: number[]) :string[] {
    const neededTagsNames = this.tags.reduce((acc: any, curr: any) => {
      if (idArray.includes(curr.id)) acc.push(curr.name);
      return acc
    }, [])
    
    return neededTagsNames;
  }
}
