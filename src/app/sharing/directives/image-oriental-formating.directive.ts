import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appImageOrientalFormating]'
})
export class ImageOrientalFormatingDirective {

  constructor(private el: ElementRef) { }

  ngAfterViewInit(): void {
    const landScapeOrientation = this.el.nativeElement.width > this.el.nativeElement.height;
    if(landScapeOrientation){
      this.el.nativeElement.style.width = "100%";
    } else {
      this.el.nativeElement.style.height = "100%";
      this.el.nativeElement.style.borderRadius = "10px";
    }
  }
}
