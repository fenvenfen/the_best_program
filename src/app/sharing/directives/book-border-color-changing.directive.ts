import { Directive, ElementRef, Input , Renderer2} from '@angular/core';

@Directive({
  selector: '[appBookBorderColorChanging]'
})
export class BookBorderColorChangingDirective {
  @Input("appBookBorderColorChanging") tagsNumber?: number;

  constructor(private el: ElementRef) { }

  ngOnChanges() {
    this.setBorderColor();
  }

  setBorderColor() {
    switch (this.tagsNumber) {
      case 1:
        this.el.nativeElement.style.borderColor = "#000000"
        break;
      case 2:
        this.el.nativeElement.style.borderColor = "#aaaaaa"
        break;
      case 3:
        this.el.nativeElement.style.borderColor = "rgb(0 255 125)"
        break;
      default:
        this.el.nativeElement.style.borderColor = "#aaaaaa"
        break;
    }
  }
}
