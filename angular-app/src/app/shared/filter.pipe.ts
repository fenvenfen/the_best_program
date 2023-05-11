import { Pipe, PipeTransform } from '@angular/core';
import { Book } from './interfaces';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(books: Book[], search: string = ''): Book[] {
    if (!search.trim()) return books;

    return books.filter(book => {
      return book.name.toLowerCase().includes(search.toLocaleLowerCase())
    })
  }
}
