import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarMakerPipe } from './pipes/star-maker.pipe'
import { BookBorderColorChangingDirective } from "./directives/book-border-color-changing.directive"

@NgModule({
  declarations: [
    StarMakerPipe,
    BookBorderColorChangingDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StarMakerPipe,
    BookBorderColorChangingDirective
  ]
})
export class SharingModule { }
