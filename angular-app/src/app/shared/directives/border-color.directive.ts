import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBorderColor]'
})
export class BorderColorDirective {
  borderColor!: string;

  @Input() set appBorderColor(tagsNumber: number) {
    switch (tagsNumber) {
      case 1:
        this.borderColor = 'black';
        break;
      case 2:
        this.borderColor = 'grey';
        break;
      default:
        this.borderColor = 'green';
    }
    // if (tagsNumber > 2) {
    //   console.log(tagsNumber);
    //   this.borderColor = 'red';
    // } else {
    //   this.borderColor = 'black';
    // }
  }

  constructor(private el: ElementRef, private r: Renderer2) { 
  }

  ngOnChanges(): void {
    this.r.setStyle(this.el.nativeElement, 'borderColor', this.borderColor)
  }

}
