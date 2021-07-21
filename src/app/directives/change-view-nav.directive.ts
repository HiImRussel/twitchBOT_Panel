import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangeViewNav]',
})
export class ChangeViewNavDirective {
  constructor(private el: ElementRef, private render: Renderer2) {}

  @HostListener('click')
  onClick() {
    document
      .querySelectorAll('.navMenu__menu li')
      .forEach((element: Element) =>
        element.setAttribute('style', 'background-color:#333744')
      );
    this.render.setStyle(this.el.nativeElement, 'background-color', '#262933');
  }
}
