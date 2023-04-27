import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WishCardComponent } from './wish-card/wish-card.component';
import { GenerateBtnComponent } from './generate-btn/generate-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    WishCardComponent,
    GenerateBtnComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
