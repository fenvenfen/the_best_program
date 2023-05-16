import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appInputColor]'
})
export class InputColorDirective {

  constructor(private el: ElementRef, private r:Renderer2) { }

  @HostListener('keyup') onInput() {
    if (this.el.nativeElement.value.length > 5) {
      this.r.setStyle(this.el.nativeElement, 'borderColor', 'green')
    } else {
      this.r.setStyle(this.el.nativeElement, 'borderColor', null)
    }
    
  }
}
