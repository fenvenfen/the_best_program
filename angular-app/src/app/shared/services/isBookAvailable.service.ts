import { Injectable } from '@angular/core';
import { Book } from '../interfaces';

@Injectable({
    providedIn: 'root'
  })

export class IsBookAvailableService {
  isBookForAdults!: boolean;

  passIfAvailable(booksArray: Book[], shelfId: number) {
    this.isBookForAdults = booksArray[shelfId - 1].forAdults;
  }
}