import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PredictCardComponent } from './components/predict-card/predict-card.component';
import { HeaderComponent } from './components/header/header.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { InputComponent } from './components/input/input.component';
import { TagsComponent } from './components/tags/tags.component';
import { ShelvesComponent } from './components/shelves/shelves.component';
import { CardComponent } from './components/card/card.component';
import { BooksComponent } from './components/books/books.component';
import { SharingModule } from './sharing/sharing.module';

@NgModule({
  declarations: [
    AppComponent,
    PredictCardComponent,
    HeaderComponent,
    BreadcrumbsComponent,
    InputComponent,
    TagsComponent,
    ShelvesComponent,
    CardComponent,
    BooksComponent,

  ],
  imports: [
    BrowserModule,
    SharingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
