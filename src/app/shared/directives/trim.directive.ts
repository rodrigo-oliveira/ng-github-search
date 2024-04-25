import { Directive, HostListener, ElementRef, Optional } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  standalone: true,
  selector: '[appTrim]',
})
export class TrimDirective {
  constructor(
    private el: ElementRef,
    private ngControl: NgControl
  ) {}

  @HostListener('input') onInput() {
    this.ngControl.control?.setValue(this.el.nativeElement.value.replace(/\s/g, ''));
  }
}
