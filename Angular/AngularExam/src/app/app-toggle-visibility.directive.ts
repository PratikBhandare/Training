import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appAppToggleVisibility]',
  standalone: false
})
export class AppToggleVisibilityDirective implements OnChanges{


  @Input() appToggleVisibility: boolean = false;
  @Input() delay: number = 0;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnChanges() {
    if (this.appToggleVisibility) {
      setTimeout(() => {
        this.renderer.setStyle(this.el.nativeElement, 'display', 'block');
      }, this.delay);
    } else {
      setTimeout(() => {
        this.renderer.setStyle(this.el.nativeElement, 'display', 'none');
      }, this.delay);
    }
  }

}
