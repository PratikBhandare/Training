import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appAppToggel]',
  standalone: false
})
export class AppToggelDirective implements OnChanges {
  @Input() appToggleVisibility: boolean = true;
  @Input() delay: number = 0;
  constructor(private renderer: Renderer2, private el: ElementRef) {

  }


  ngOnChanges(changes: SimpleChanges): void {
    if (changes['appToggleVisibility']) {
      console.log(changes);

      this.toggleVisibility();
    }
  }

  private toggleVisibility() {
    if (this.appToggleVisibility) {
      setTimeout(() => {
        console.log("If calling !!");
        console.log(this.el.nativeElement);

        this.renderer.setStyle(this.el.nativeElement, 'display', 'block');
        console.log("Changed!! ",this.el.nativeElement);

      }, this.delay);
    } else {
      setTimeout(() => {
        console.log("else calling !!");
        console.log(this.el.nativeElement);

        this.renderer.setStyle(this.el.nativeElement, 'display', 'none');
        console.log("Changed!! ",this.el.nativeElement);

      }, this.delay);
    }
  }

}
