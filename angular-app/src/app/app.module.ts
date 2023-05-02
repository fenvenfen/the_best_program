import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { InputComponent } from './input/input.component';
import { TagsComponent } from './tags/tags.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
    InputComponent,
    TagsComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
