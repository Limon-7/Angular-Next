import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() bgColor: string;
  @Input() textColor: string;
  constructor(private el: ElementRef) {

  }
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.bgColor || 'yellow', this.textColor || "black");
    console.log(this.bgColor)
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null, null);
  }

  private highlight(bgColor: string, color: string) {
    this.el.nativeElement.style.backgroundColor = bgColor;
    this.el.nativeElement.style.color = color;
  }

}
// how to get color dynamicaly
