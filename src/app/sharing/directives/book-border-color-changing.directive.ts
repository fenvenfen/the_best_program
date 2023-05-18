import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appBookBorderColorChanging]'
})
export class BookBorderColorChangingDirective {
  @Input("appBookBorderColorChanging") tagsNumber!: number;

  constructor(private el: ElementRef) { }

  ngOnChanges() {
    this.setBorderColor();
  }

  setBorderColor() {
    if (this.tagsNumber === 1) {this.el.nativeElement.style.borderColor = "#000000"};
    if (this.tagsNumber === 2) {this.el.nativeElement.style.borderColor = "#aaaaaa"};
    if (this.tagsNumber >= 3) {this.el.nativeElement.style.borderColor = "rgb(0 255 125)"};
  }
}
