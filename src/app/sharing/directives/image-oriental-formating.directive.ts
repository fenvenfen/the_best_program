import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appImageOrientalFormating]'
})
export class ImageOrientalFormatingDirective implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    const imageElement = this.el.nativeElement;
  
    // Встановлюємо обробник події 'load', щоб отримати розміри зображення
    this.renderer.listen(imageElement, 'load', () => {
      const naturalWidth = imageElement.naturalWidth;
      const naturalHeight = imageElement.naturalHeight;
      const isHorizontal = naturalWidth > naturalHeight;
  
      // Встановлюємо відповідний css-параметр
      if (isHorizontal) {
        this.renderer.setStyle(imageElement, 'width', '100%');
        this.renderer.setStyle(imageElement, 'height', 'auto');
      } else {
        this.renderer.setStyle(imageElement, 'height', '100%');
        this.renderer.setStyle(imageElement, 'width', 'auto');
      }
      this.renderer.setStyle(imageElement, "border-radius", "10px")
    });
  }
}


