import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { InputComponent } from './input/input.component';
import { TagsComponent } from './tags/tags.component';
import { ShelvesComponent } from './shelves/shelves.component';
import { BookComponent } from './book/book.component';
import { BooksComponent } from './books/books.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './shared/filter.pipe';
import { FilterByTagsPipe } from './shared/filter-by-tags.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
    InputComponent,
    TagsComponent,
    ShelvesComponent,
    BookComponent,
    BooksComponent,
    FilterPipe,
    FilterByTagsPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
