import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarMakerPipe } from './pipes/star-maker.pipe'
import { ShowMoreModePipe } from "./pipes/showMoreMode.pipe"
import { BookBorderColorChangingDirective } from "./directives/book-border-color-changing.directive"
import { InputColorChangingDirective } from "./directives/input-color-changing.directive"
import { ImageOrientalFormatingDirective } from './directives/image-oriental-formating.directive';


@NgModule({
  declarations: [
    StarMakerPipe,
    ShowMoreModePipe,
    BookBorderColorChangingDirective,
    InputColorChangingDirective,
    ImageOrientalFormatingDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StarMakerPipe,
    ShowMoreModePipe,
    BookBorderColorChangingDirective,
    InputColorChangingDirective,
    ImageOrientalFormatingDirective,
  ]
})
export class SharingModule { }
