import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {
  @Input('appStyle') color = 'blue';
  @Input() dStyles: {border?: string, fontWeight?: string, borderRadius?: string };

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'color', 'black');
  }

// tslint:disable-next-line:typedef
  @HostListener('click', ['$event.target']) onClick(event: Event) {
    console.log(event);
  }

// tslint:disable-next-line:typedef
  @HostListener('mouseenter') onEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'color', this.color);
    this.renderer.setStyle(this.el.nativeElement, 'fontWeight', this.dStyles.fontWeight);
    this.renderer.setStyle(this.el.nativeElement, 'border', this.dStyles.border);
    this.renderer.setStyle(this.el.nativeElement, 'borderRadius', this.dStyles.borderRadius);
  }

// tslint:disable-next-line:typedef
  @HostListener('mouseleave') onLeave() {
    this.renderer.setStyle(this.el.nativeElement, 'color', null);
    this.renderer.setStyle(this.el.nativeElement, 'fontWeight', null);
    this.renderer.setStyle(this.el.nativeElement, 'border', null);
    this.renderer.setStyle(this.el.nativeElement, 'borderRadius', null);
  }
}
