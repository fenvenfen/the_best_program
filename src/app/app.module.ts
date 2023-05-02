import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PredictCardComponent } from './components/predict-card/predict-card.component';
import { Header } from './components/header/header.component';
import { Breadcrumbs } from './components/breadcrumbs/breadcrumbs.component';

@NgModule({
  declarations: [
    AppComponent,
    PredictCardComponent,
    Header,
    Breadcrumbs
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
