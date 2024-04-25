import { Directive, ElementRef, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  standalone: true,
  selector: '[appGithubUsernameDirective]',
})
export class GithubUsernameDirective {
  constructor(private el: ElementRef, private ngControl: NgControl) {}

  @HostListener('input') onInput() {
    this.ngControl.control?.setValue(
      this.el.nativeElement.value
        .toLowerCase()
        .replace(/[^a-z0-9-]/g, '') // Remove invalid characters
        .replace(/-{2,}/g, '-') // Remove multiple consecutive hyphens
        .replace(/^-+$/g, '') // Remove hyphens at the beginning
    );
  }

  @HostListener('change') onBlur() {
    this.ngControl.control?.setValue(
      this.el.nativeElement.value.replace(/-+$/g, '')  // Remove hyphens at the end
    );
  }
}
