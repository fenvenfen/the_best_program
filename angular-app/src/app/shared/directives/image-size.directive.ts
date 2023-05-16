import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appImageSize]'
})
export class ImageSizeDirective {

  constructor(private el: ElementRef, private r: Renderer2) { 
  }

  ngAfterViewInit(): void {
    const isImgHorizontal = this.el.nativeElement.width > this.el.nativeElement.height;
    
    if (isImgHorizontal) this.r.setStyle(this.el.nativeElement, 'width', '100%');
    else this.r.setStyle(this.el.nativeElement, 'height', '100%');
  }
}
