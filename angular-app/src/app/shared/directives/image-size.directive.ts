import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appImageSize]'
})
export class ImageSizeDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  
  ngAfterViewInit(): void {
    const isImgHorizontal = this.el.nativeElement.width > this.el.nativeElement.height;
    
    if (isImgHorizontal) this.el.nativeElement.style.width = '100%';
    else this.el.nativeElement.style.height = '100%';
  }
}
