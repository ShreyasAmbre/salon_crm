import { AfterViewInit, Directive, ElementRef, inject, Renderer2 } from '@angular/core';
@Directive({
  selector: '[sharedRequiredStar]',
})
export class RequiredStarDirective implements AfterViewInit {
  #elementRef = inject(ElementRef);
  #renderer = inject(Renderer2);

  ngAfterViewInit(): void {
    const star = this.#renderer.createElement('span');
    const text = this.#renderer.createText('*');
    this.#renderer.addClass(star, 'text-dark');
    this.#renderer.appendChild(star, text);
    this.#renderer.appendChild(this.#elementRef.nativeElement, star);
  }
}
