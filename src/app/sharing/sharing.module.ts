import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarMakerPipe } from './pipes/star-maker.pipe'


@NgModule({
  declarations: [
    StarMakerPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StarMakerPipe
  ]
})
export class SharingModule { }
