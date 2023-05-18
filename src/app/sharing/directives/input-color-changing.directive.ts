import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputColorChanging]'
})
export class InputColorChangingDirective {
  @Input("appInputColorChanging") valueLength!: number;

  constructor(private el: ElementRef) { }

  //чому використовуэться саме ОнЧендж лайфсайкл Хук?
  ngOnChanges() {
    this.setBorderColor();
  }

  setBorderColor() {
    if (this.valueLength >= 5) {
      this.el.nativeElement.style.borderColor = "rgb(0 255 125)"
    } else {
      this.el.nativeElement.style.borderColor = "rgb(170, 170, 170)"
    };
  }
}
