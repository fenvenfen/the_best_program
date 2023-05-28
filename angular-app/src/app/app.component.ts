import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BooksService } from './shared/services/books.service';
import { DetailBookComponent } from './detail-book/detail-book.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  shelvesOrBooks!: string;
  constructor(private readonly _changeDetectorRef: ChangeDetectorRef,) {}

  ngOnInit(): void {
  }

  getBooksOrShelves(componentRef: DetailBookComponent) {
    if (!(componentRef instanceof DetailBookComponent)) return;
    componentRef.booksOrShelves.subscribe((value) => {
      this.shelvesOrBooks = value;
      this._changeDetectorRef.detectChanges();
    }) 
    
  }
}
