import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharingModule } from './sharing/sharing.module';
import { AppRoutingModule } from "./app-routing.module";

import { PredictCardComponent } from './components/predict-card/predict-card.component';
import { HeaderComponent } from './components/header/header.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { InputComponent } from './components/input/input.component';
import { TagsComponent } from './components/tags/tags.component';
import { ShelvesComponent } from './components/shelves/shelves.component';
import { CardComponent } from './components/card/card.component';
import { BooksComponent } from './components/books/books.component';
import { DetailBookComponent } from './components/detail-book/detail-book.component';
import { LibraryComponent } from './components/library/library.component';
import { PageNotFounedComponent } from './components/page-not-founed/page-not-founed.component';
import { ForbiddenForChildrenComponent } from './components/forbidden-for-children/forbidden-for-children.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';

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
    DetailBookComponent,
    LibraryComponent,
    PageNotFounedComponent,
    ForbiddenForChildrenComponent,
    AuthFormComponent,
    AdminPageComponent,
  ],
  imports: [
    BrowserModule,
    SharingModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
