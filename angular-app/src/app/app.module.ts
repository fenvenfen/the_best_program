import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TagsComponent } from './tags/tags.component';
import { ShelvesComponent } from './shelves/shelves.component';
import { BookComponent } from './book/book.component';
import { BooksComponent } from './books/books.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { LibraryComponent } from './library/library.component';
import { InputComponent } from './input/input.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AppRoutingModule } from './app-routing.module';
import { DetailBookComponent } from './detail-book/detail-book.component';
import { UnavailableComponent } from './unavailable/unavailable.component';

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
    LibraryComponent,
    HomePageComponent,
    DetailBookComponent,
    UnavailableComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
