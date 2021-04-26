import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @Input() in = 'yellow';
  @Input() out = 'red';
  @HostBinding('style.backgroundColor') bg = this.out;
  constructor(private elment: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.bg = this.in;
    this.elment.nativeElement.innerHTML = 'in';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.bg = this.out;
    this.elment.nativeElement.innerHTML = 'out';
  }
}
