import { Directive, HostListener, ElementRef, Optional } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  standalone: true,
  selector: '[appTrim]',
})
export class TrimDirective {
  constructor(
    private el: ElementRef,
    @Optional() private ngControl: NgControl
  ) {}

  @HostListener('blur') onBlur() {
    this.ngControl.control?.setValue(this.el.nativeElement.value.trim());
  }
}
